import React, { } from 'react';
import {
    CREATELIST_IN_REQUEST, CREATELIST_IN_COMPLETE, CREATELIST_IN_FAILED,
    GETLIST_IN_REQUEST, GETLIST_IN_COMPLETE, GETLIST_IN_FAILED, DELETELIST_IN_REQUEST, DELETELIST_IN_COMPLETE,
    DELETELIST_IN_FAILED,

    DETAILS_IN_REQUEST, DETAILS_IN_COMPLETE, DETAILS_IN_FAILED
} from '../../action-types';

import RNHTMLtoPDF from 'react-native-html-to-pdf';

import { AsyncStorage, Alert, Platform ,PermissionsAndroid} from 'react-native';
import NetworkApi from '../../network/NetworkApi';
import Constant from '../../constant/Constant';
import axios from 'axios';
import MyListModel from '../../model/mylist/MyListModel';
import MyList from '../../component/mylist/MyList';
import ListDetailModel from '../../model/mylist/ListDetailModel';
import Mailer from 'react-native-mail';
import Toast from 'react-native-simple-toast';

var RNFS = require('react-native-fs');

import FileProvider from 'react-native-file-provider';
import { DocumentDirectoryPath } from 'react-native-fs';

export const CreateList = (ITEM) => {
    return async dispatch => {
        await AsyncStorage.setItem('DEFAULTLISTID', '');
        dispatch({ type: CREATELIST_IN_REQUEST })

        AsyncStorage.getItem('USER_ID').then((value)=>{

            console.log('USER_ID',value);
            
            var URL = NetworkApi.BASE_URL + Constant.STORE_ID + NetworkApi.CREATE_LIST + value; 
            axios.post(URL, {
                'listName': ITEM.ListName,
                'notes': ITEM.ListNotes
            }).then((response) => {
                if (response.status == 201) {
    
                    var data = response.data;
                    AsyncStorage.setItem('DEFAULTLISTID', data);
                      dispatch(GetallList())
    
                }
                else {
    
                }
    
                dispatch({ type: CREATELIST_IN_COMPLETE })
            }).catch((ERROR) => {
                dispatch({ type: CREATELIST_IN_FAILED })
                alert(ERROR)
            })
        })
    }
}

export const GetallList = () => {
    return async dispatch => {

        var DefaultId = null, UserId='', sendDefaultVal = '';
        dispatch({ type: GETLIST_IN_REQUEST, })
     await  AsyncStorage.getItem('DEFAULTLISTID').then(
            (values) => {
                DefaultId = values;
            });
            await  AsyncStorage.getItem('USER_ID').then(
                (values) => {
                    UserId = values;
                    console.log('DefaultId',DefaultId);
                });
       

        var URL = NetworkApi.BASE_URL + Constant.STORE_ID + NetworkApi.GET_LIST + UserId;

        console.log('URL',URL);
        
        axios.get(URL)
            .then((response) => {


                var data = response.data;

                console.log('data', data);

                var mTemp = [];
                var dropDownNameArray = [];
                var dropDownIdArray = [];

                for (let index = 0; index < data.length; index++) {

                    var listid = data[index].listid;
                    var listname = data[index].listname;
                    var listcount = data[index].listcount;
                    var notes = data[index].notes;
                    var modifieddate = data[index].modifieddate;
                    var dateTimeArray = modifieddate.split('T');

                    var mTimearray = dateTimeArray[1];

                    dropDownNameArray.push(listname);
                    dropDownIdArray.push(listid);
                    var mTime = mTimearray.replace(".000Z", "");

                    const monthNames = ["January", "February", "March", "April", "May", "June",
                        "July", "August", "September", "October", "November", "December"
                    ];

                    var date = new Date(modifieddate);

                    var mFulldate = date.getDate() + "-" + monthNames[date.getMonth()] + "-" + date.getFullYear();

                    if (DefaultId == null) {
                        if (index == 0) {

                            AsyncStorage.setItem('DEFAULTLISTID', listid);
                            var Actor = new MyListModel(listid, listname, true, listcount, mFulldate, mTime, notes)

                            mTemp.push(Actor);
                            sendDefaultVal = 'Create new list';
                        }
                        else {
                            var Actor = new MyListModel(listid, listname, false, listcount, mFulldate, mTime, notes)
                            mTemp.push(Actor);
                            sendDefaultVal = 'Create new list';
                        }
                    }
                    else {
                        if (DefaultId == listid) {
                            sendDefaultVal = listname;
                            var Actor = new MyListModel(listid, listname, true, listcount, mFulldate, mTime, notes)
                            mTemp.splice(0, 0, Actor);
                        }
                        else {
                            var Actor = new MyListModel(listid, listname, false, listcount, mFulldate, mTime, notes)
                            mTemp.push(Actor);
                        }
                    }


                }

                dropDownNameArray.push('Create new list');
                // alert(sendDefaultVal);
                dispatch({ type: GETLIST_IN_COMPLETE, sendDefaultVal: sendDefaultVal, LIST: mTemp, ListNameArray: dropDownNameArray, ListIdArray: dropDownIdArray })

            }).catch((ERROR) => {
                console.log('ERROR', ERROR);
                dispatch({ type: GETLIST_IN_FAILED })
            })
    }
}



export const SetDefaultList = (ID) => {
    return async (dispatch, getState) => {

        AsyncStorage.setItem('DEFAULTLISTID', ID);

        dispatch({ type: GETLIST_IN_REQUEST, })
        const { ListData } = getState().ListReducer;
        var mTemplist = [];

        for (let index = 0; index < ListData.length; index++) {

            let mCheck = ListData[index].Id;
            if (mCheck == ID) {
                var id = ListData[index].Id;
                var itemCount = ListData[index].ItemCount;
                var leftLabel = ListData[index].LeftLabel;
                var name = ListData[index].Name;
                var date = ListData[index].Date;
                var time = ListData[index].Time;
                var notes = ListData[index].Notes;



                var Actor = new MyListModel(id, name, true, itemCount, date, time, notes)
                mTemplist.push(Actor);

            }
            else {
                var id = ListData[index].Id;
                var itemCount = ListData[index].ItemCount;
                var leftLabel = ListData[index].LeftLabel;
                var name = ListData[index].Name;
                var date = ListData[index].Date;
                var time = ListData[index].Time;
                var notes = ListData[index].Notes;

                var Actor = new MyListModel(id, name, false, itemCount, date, time, notes)
                mTemplist.push(Actor);

            }


        }
        dispatch(GetallList());
        dispatch({ type: GETLIST_IN_COMPLETE, LIST: mTemplist })
    }
}


export const DeleteList = (ID) => {
    return async dispatch => {


        dispatch({ type: DELETELIST_IN_REQUEST })


       await AsyncStorage.getItem('DEFAULTLISTID').then(
            (values) => {


                DefaultId = values;

               if(DefaultId == ID)
               {
                AsyncStorage.setItem('DEFAULTLISTID', '');
               }
                

            });

        var URL = NetworkApi.BASE_URL + Constant.STORE_ID + NetworkApi.DELETE_LIST + ID;

        axios.delete(URL)
            .then((response) => {


                var Status = response.status;
                if (Status == 200) {
                     Toast.show('List Delete successfully');
                }
                else {

                }
                dispatch(GetallList(''))
                dispatch({ type: DELETELIST_IN_COMPLETE })

            }).catch((ERROR) => {
                console.log('ERROR', ERROR);
                alert(ERROR);
                dispatch({ type: DELETELIST_IN_FAILED })
            })


    }
}


export const GetItemDetails = (ID) => {
    return async (dispatch, getState) => {

        const { LocationResponse } = getState().HomeReducer;
        dispatch({ type: DETAILS_IN_REQUEST })

        var URL = NetworkApi.BASE_URL + Constant.STORE_ID + NetworkApi.MyList_itemDetail + ID;

     
        

        axios.get(URL)
            .then((response) => {


                var data = response.data;

                console.log('data', data);


                var mTempList = [];
                for (let index = 0; index < data.length; index++) {


                    var itemnum = data[index].itemnum;
                    var itemname = data[index].itemname;
                    var quantity = data[index].quantity;
                    var pickup = data[index].pickup;
                    var location = data[index].location;
                    var imagepath = data[index].imagepath;
                    var instock = data[index].instock;
                    var listitemid= data[index].listitemid;


                    console.log('listitemid',listitemid);
                    

                    if (location == null || location == '') {
                        location = 'N/A';
                    }
                    else {
                        var mLocation = location.split(/([0-9]+)/)


                        var mAddressFormatted = '';



                        for (var i = 0; i < mLocation.length; i++) {
                            let mCheck = mLocation[i];



                            for (var L = 0; L < LocationResponse.length; L++) {

                                let mlocation = LocationResponse[L].location;



                                if (mCheck == mlocation) {

                                    let locationdesc = LocationResponse[L].locationdesc;

                                    if (mAddressFormatted == '') {
                                        mAddressFormatted = mAddressFormatted + locationdesc + ': ' + mLocation[i + 1];
                                    }
                                    else {
                                        mAddressFormatted = mAddressFormatted + ' ' + locationdesc + ': ' + mLocation[i + 1];
                                    }





                                    location = mAddressFormatted;
                                }

                            }
                        }
                    }

                    var Actor = new ListDetailModel(itemnum, itemname, quantity, pickup, location, imagepath, instock, false, false,listitemid)

                    mTempList.push(Actor)
                }




                console.log('mTempList',mTempList);
                



                dispatch({ type: DETAILS_IN_COMPLETE, DETAILS_LIST: mTempList })
            }).catch((ERROR) => {
                console.log('ERROR', ERROR);
                dispatch({ type: DETAILS_IN_FAILED })
            })


    }
}



export const UpdateListName = (ITEM, List) => {
    return async (dispatch, getState) => {

        var URL = NetworkApi.BASE_URL + Constant.STORE_ID + NetworkApi.Update_ListName + ITEM.Item_Id;

        axios.post(URL, {
            "listName": ITEM.ListName,
            "notes": ITEM.ListNotes,
            

        }).then((response) => {
            console.log('response', response);

            var status = response.status;

            if (status == 201) {
               Toast.show('Notes update successfully');
            }

        }).catch((ERROR) => {
            console.log('ERROR', ERROR);
            alert(ERROR)

        })



        console.log('UpdateListItem');

    }
}


export const UpdateQuantityIncrease = (ITEM, value, ID) => {
    return async (dispatch, getState) => {

        var Itemnum = ITEM.Itemnum;
        const { DetailList } = getState().ListReducer;


        var mTempList = [];

        for (let index = 0; index < DetailList.length; index++) {

            var itemnum = DetailList[index].Itemnum;
            var itemname = DetailList[index].Itemname;
            var quantity = parseInt(DetailList[index].Quantity);
            var pickup = DetailList[index].Pickup;
            var location = DetailList[index].Location;
            var imagepath = DetailList[index].Imagepath;
            var instock = DetailList[index].Instock;


            var increaseQty = quantity;
            if (Itemnum == itemnum) {
                var increaseQty = value;
            }





            var Actor = new ListDetailModel(itemnum, itemname, "" + increaseQty, pickup, location, imagepath, instock, false)
            mTempList.push(Actor);


        }
        dispatch({ type: DETAILS_IN_COMPLETE, DETAILS_LIST: mTempList })

        dispatch(ListitemQuantityUpadteApi(Itemnum, value, ID))  //mith

    }
}

export const UpdateQuantityMinus = (ITEM) => {
    return async (dispatch, getState) => {

        const { DetailList } = getState().ListReducer;

        var Itemnum = ITEM.Itemnum;

        var mTempList = [];

        for (let index = 0; index < DetailList.length; index++) {

            var itemnum = DetailList[index].Itemnum;
            var itemname = DetailList[index].Itemname;
            var quantity = parseInt(DetailList[index].Quantity);
            var pickup = DetailList[index].Pickup;
            var location = DetailList[index].Location;
            var imagepath = DetailList[index].Imagepath;
            var instock = DetailList[index].Instock;


            var increaseQty = quantity;

            if (Itemnum == itemnum) {
                if (quantity > 1) {
                    var increaseQty = quantity - 1;
                }
            }

            var Actor = new ListDetailModel(itemnum, itemname, "" + increaseQty, pickup, location, imagepath, instock, false)
            mTempList.push(Actor);


        }
        dispatch({ type: DETAILS_IN_COMPLETE, DETAILS_LIST: mTempList })

    }
}


export const ShowDeleteIcon=(values)=>{
    return async (dispatch, getState) =>{

        const { DetailList } = getState().ListReducer;
        var mTempList = [];

        for (let index = 0; index < DetailList.length; index++) {

            var itemnum = DetailList[index].Itemnum;
            var itemname = DetailList[index].Itemname;
            var quantity = parseInt(DetailList[index].Quantity);
            var pickup = DetailList[index].Pickup;
            var location = DetailList[index].Location;
            var imagepath = DetailList[index].Imagepath;
            var instock = DetailList[index].Instock;
           
            if(values)
            {
                var Actor = new ListDetailModel(itemnum, itemname, "" + quantity, pickup, location, imagepath, instock, true)
                mTempList.push(Actor);
            }
            else
            {
                var Actor = new ListDetailModel(itemnum, itemname, "" + quantity, pickup, location, imagepath, instock, false)
                mTempList.push(Actor);
            }
        }
        dispatch({ type: DETAILS_IN_COMPLETE, DETAILS_LIST: mTempList })

    }
}


export const SelectAllCheckbox=()=>{
    return async (dispatch, getState) =>{

        const { DetailList } = getState().ListReducer;
        var mTempList = [];

        for (let index = 0; index < DetailList.length; index++) {

            var itemnum = DetailList[index].Itemnum;
            var itemname = DetailList[index].Itemname;
            var quantity = parseInt(DetailList[index].Quantity);
            var pickup = DetailList[index].Pickup;
            var location = DetailList[index].Location;
            var imagepath = DetailList[index].Imagepath;
            var instock = DetailList[index].Instock;
           
            
                var Actor = new ListDetailModel(itemnum, itemname, "" + quantity, pickup, location, imagepath, instock, true, true)
                mTempList.push(Actor);
            
        }
        dispatch({ type: DETAILS_IN_COMPLETE, DETAILS_LIST: mTempList })

    }
}

export const SelectSingleCheckbox=(ITEM)=>{
    return async (dispatch, getState) =>{

        const { DetailList } = getState().ListReducer;
        var mTempList = [];

        for (let index = 0; index < DetailList.length; index++) {

            var itemnum = DetailList[index].Itemnum;
            var itemname = DetailList[index].Itemname;
            var quantity = parseInt(DetailList[index].Quantity);
            var pickup = DetailList[index].Pickup;
            var location = DetailList[index].Location;
            var imagepath = DetailList[index].Imagepath;
            var instock = DetailList[index].Instock;
            var Check = DetailList[index].Check;

           
               if(ITEM == itemnum)
               {
                   Check = !Check;
                var Actor = new ListDetailModel(itemnum, itemname, "" + quantity, pickup, location, imagepath, instock, true, Check)
                mTempList.push(Actor);
               }
               else
               {
                var Actor = new ListDetailModel(itemnum, itemname, "" + quantity, pickup, location, imagepath, instock, true, Check)
                mTempList.push(Actor);
               }
            
               
            
        }
        dispatch({ type: DETAILS_IN_COMPLETE, DETAILS_LIST: mTempList })

    }
}

export const ListDeleteApi = (ITEM, List) => {
    return async (dispatch, getState) => {


        console.log('ListDeleteApi', ListDeleteApi);
        

        var URL = NetworkApi.BASE_URL + Constant.STORE_ID + NetworkApi.Update_List + ITEM.Item_Id;

        // axios.post(URL, {
        //     "listName": ITEM.ListName,
        //     "notes": ITEM.ListNotes,
        //     "items": List,

        // }).then((response) => {
        //     console.log('response', response);

        //     var status = response.status;

        //     if (status == 201) {
        //         Toast.show('Notes update successfully');
        //     }

        // }).catch((ERROR) => {
        //     console.log('ERROR', ERROR);
        //     alert(ERROR)

        // })



        console.log('UpdateListItem');

    }
}


export const DeleteItemApi=(ITEM, ID)=>{
        return async dispatch => {
        

            console.log('ITEM',ITEM);

            var ListitemId= ITEM.ListitemId;
            var Itemnum = ITEM.Itemnum;
            var URL= NetworkApi.BASE_URL+Constant.STORE_ID+NetworkApi.Delete_single_items+ID+"/"+Itemnum;

            console.log('URL',URL);
            

           
            axios.delete(URL)
            .then((response)=>{
                console.log('response',response);

                var status = response.status;
                if(status == 200)
                {
                       
                    dispatch(GetItemDetails(ID))
                }
                
            }).catch((ERROR)=>{
                console.log('ERROR',ERROR);
                alert(ERROR)
                
            })
            
          
            
        }
    
}


export const AllDeleteListItem=(ID)=>{
    return async dispatch =>{

        var URL = NetworkApi.BASE_URL+Constant.STORE_ID+NetworkApi.All_Listitem_Delete+ID;


        console.log('AllDeleteListItem',URL);

        axios.delete(URL)
        .then((response)=>{

            console.log('response',response);

            var status= response.status;
            if(status == 200)
            {
                 
                dispatch(GetItemDetails(ID))
            }
            
        }).catch((ERROR)=>{
            console.log('ERROR');
            alert(ERROR)
            
        })
        
    }
}


export const ListitemQuantityUpadteApi=(Itemnum, qty, ID)=>{
    return async dispatch =>{


        var URL= NetworkApi.BASE_URL+Constant.STORE_ID+NetworkApi.LIST_ITEM_Quantity_Update+ID;

        
        axios.post(URL,{
            "itemNum": Itemnum,
            "quantity": qty
        }).then((response)=>{
            console.log('response',response);
            
        }).catch((ERROR)=>{
            console.log('ERROR',ERROR);
            alert(ERROR);
            
        })
        

    }
}

export const SendMailApi=(element)=>{
    return async dispatch =>{

      
        var file="";
     try {
     let options = {
       html: element,
       fileName: 'MyList',
       directory: 'Documents',
     };

     file = await RNHTMLtoPDF.convert(options)

     console.log(file.filePath);
    //alert(file.filePath);
   

} catch (error) {
    alert(error);
   }

   
   
  // var  mPath = `${RNFS.ExternalStorageDirectoryPath}/project_overview_.pdf`;
//    console.log('path',mPath);
   

//    try {
//        await RNFS.copyFile(file.filePath, mPath);
//    } catch (error) {
//        console.log('file copy error: ', error);
//        return;
//    }

  
   Mailer.mail({
    subject: 'Kc India mart - Shopping List',
    recipients: [],
   // body: '<b>Product List</b>',
    //isHTML: true,
    attachment: {
      path: file.filePath,  // The absolute path of the file from which to read data.
      type: 'pdf',   // Mime Type: jpg, png, doc, ppt, html, pdf, csv
      name: 'test.pdf',   // Optional: Custom filename for attachment
    }
  }, 
  (error, event) => {
      console.log('error',error);
      
    // Alert.alert(
    //   error,
    //   event,
    //   [
    //     {text: 'Ok', onPress: () => console.log('OK: Email Error Response')},
    //     {text: 'Cancel', onPress: () => console.log('CANCEL: Email Error Response')}
    //   ],
    //   { cancelable: true }
    // )
  });
  }
}