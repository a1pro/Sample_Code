import React, { } from 'react';
import {
    CATERING_SUMMARY_REQUEST, CATERING_SUMMARY_COMPLETE, CATERING_SUMMARY_FAILED,
    ACTIVECATERING_IN_REQUEST, ACTIVECATERING_IN_COMPLETE, ACTIVECATERING_IN_FAILED,
    CATERINGLIST_IN_REQUEST, CATERINGLIST_IN_COMPLETE, CATERINGLIST_IN_FAILED, ADD_CATERING_REQUEST,
    ADD_CATERING_COMPLETE, ADD_CATERING_FAILED, UPDATE_CATERING_REQUEST,
    UPDATE_CATERING_COMPLETE, UPDATE_CATERING_FAILED,UPDATE_PAYMENT_REQUEST
    ,UPDATE_PAYMENT_COMPLETE,UPDATE_PAYMENT_FAILED
} from '../../action-types';

import Constant from '../../constant/Constant';
import NetworkApi from '../../network/NetworkApi';
import axios from 'axios';
import CateringModel from '../../model/catering/CateringModel';
import ActiveCateringModel from '../../model/catering/ActiveCateringModel';
import CateringListItemModel from '../../model/cateringDetails/CateringListItemModel';
import AddItemModel from '../../model/catering/AddItemModel';
import NavigationService from '../../NavigationService';
import Axios from 'axios';
import Toast from 'react-native-simple-toast';


export const Get_CateringApi = (Filter) => {

    return async dispatch => {


        dispatch({ type: CATERING_SUMMARY_REQUEST });
        var URL = NetworkApi.BASE_URL + Constant.STORE_ID + NetworkApi.GET_CATERING_SALES;

        axios.get(URL)
            .then((response) => {


                var Data = response.data;
             
                const mTodayData = Data.filter((value) => {
                    var check = value.saleperiod.toLowerCase();
                    var mCheckWithoutSpace = check.replace(/ /g, '')

                    return (mCheckWithoutSpace == Filter)
                })





                var cash = 0, credit = 0, cateringcount = 0, cateringsales = 0, totalsales = 0, GraphShow = false, check = 0, unpaid = 0;


                var TodayFilter = [];



                for (i = 0; i < mTodayData.length; i++) {


                    cash = mTodayData[i].Cash;
                    credit = mTodayData[i].Credit;
                    cateringcount = mTodayData[i].cateringcount;
                    cateringsales = mTodayData[i].cateringsales;
                    unpaid = mTodayData[i].Unpaid;
                    check = mTodayData[i].Check;


                    if (cash > 0) {
                        cash = parseFloat(cash.toFixed(2));
                    }
                    if (credit > 0) {
                        credit = parseFloat(credit.toFixed(2));
                    }
                    if (cateringcount > 0) {
                        cateringcount = parseFloat(cateringcount.toFixed(2));
                    }
                    if (unpaid > 0) {
                        unpaid = parseFloat(unpaid.toFixed(2));
                    }

                    if (cateringsales == 0 || cateringsales == null) {
                        GraphShow = false;
                    }
                    else {
                        GraphShow = true;
                    }


                }

                var actor = new CateringModel(cateringcount, cateringsales, cash, check, credit, unpaid, GraphShow);
                TodayFilter.push(actor)

                dispatch({ type: CATERING_SUMMARY_COMPLETE, CATERING_SUMMARY: TodayFilter })

            }).catch((ERROR) => {
                console.log('ERROR', ERROR);
                dispatch({ type: CATERING_SUMMARY_FAILED })
                alert(ERROR);
            })

    }
}


export const Get_ActiveCateringApi = () => {
    return async dispatch => {


        dispatch({ type: ACTIVECATERING_IN_REQUEST })

        var URL = NetworkApi.BASE_URL + Constant.STORE_ID + NetworkApi.GET_ACTIVE_CATERING;


        axios.get(URL)
            .then((response) => {

                var mActive_List = [];
                var mCompleteList = [];

                console.log('response', response);

                var data = response.data;

                for (let index = 0; index < data.length; index++) {


                    var mDate = data[index].cateringdate;
                    var dateArray = mDate.split('T');
                    var mdate = dateArray[0];
                    var dateFormat = mdate.split('-');
                    var mActiveMonth = dateFormat[1];
                    var mActiveDate = dateFormat[2];
                    var mActiveYear = dateFormat[0];
                   

                    var today = new Date();

                    
                    

                    var mTodayDate = today.getFullYear() + '-' + ("0" + (today.getMonth() + 1)).slice(-2) + '-' + ("0" + today.getDate()).slice(-2);

                    var name = '', phone = '', cost = '', shapper = '', delivery = '', addres = '', cateringtime = '', paymentamount = '',
                        paymenttype = '', email = '', notes = '', paymentdate = '', cateringid = '', cateringcount = "";
                  
                       
                
                    if ( mdate >= mTodayDate) 
                    {

                        name = data[index].contact;
                        phone = data[index].phone;
                        cost = data[index].cost;
                        shapper = data[index].shapers;
                        delivery = data[index].delivery;
                        addres = data[index].address;
                        cateringtime = data[index].cateringtime;
                        email = data[index].email;
                        notes = data[index].notes;
                        paymenttype = data[index].paymenttype;
                        paymentamount = "" + data[index].paymentamount;

                        cateringid = data[index].cateringid;
                        cateringcount = data[index].cateringcount;



                        paymentdate = data[index].paymentdate;

                        if (paymentdate == null || paymentdate == '0000-00-00 00:00:00') {

                        }
                      


                        var mTime = cateringtime.split(':');

                        var hour = mTime[0];
                        var mintue = mTime[1];


                        if (hour > 12) {
                            cateringtime = hour - 12 + ":" + mintue + ' PM';

                        }
                        else {
                            cateringtime = hour + ":" + mintue + ' AM';
                        }

                        var mDate = mActiveMonth + "-" + mActiveDate;
                        var fullDate = mActiveYear + "-" + mActiveMonth + "-" + mActiveDate;




                        let datearray= paymentdate.split('T');
                        let fullPaymentDate= dateArray[0];


                        var Actor = new ActiveCateringModel(name, phone, mDate, fullDate, cateringtime, "$" + cost, shapper,
                            delivery, addres, paymentamount, paymenttype, email, notes, fullPaymentDate, cateringid, cateringcount);



                        mActive_List.push(Actor);


                    }
                    else {
                        name = data[index].contact;
                        phone = data[index].phone;
                        cost = data[index].cost;
                        shapper = data[index].shapers;
                        delivery = data[index].delivery;
                        addres = data[index].address;
                        cateringtime = data[index].cateringtime;
                        paymentamount = "" + data[index].paymentamount;
                        paymenttype = data[index].paymenttype;
                        email = data[index].email;
                        notes = data[index].notes;

                        cateringid = data[index].cateringid;

                        paymentdate = data[index].paymentdate;
                        cateringcount = data[index].cateringcount;


                        
                        
                     


                        var mTime = cateringtime.split(':');

                        var hour = mTime[0];
                        var mintue = mTime[1];


                        if (hour > 12) {
                            cateringtime = hour - 12 + ":" + mintue + ' PM';

                        }
                        else {
                            cateringtime = hour + ":" + mintue + ' AM';
                        }



                       let datearray= paymentdate.split('T');
                       let fullPaymentDate= dateArray[0];

                      
                       


                        var mDate = mActiveMonth + "-" + mActiveDate;
                        var fullDate = mActiveYear+ "-" +mActiveMonth + "-" + mActiveDate  ;


                        var Actor = new ActiveCateringModel(name, phone, mDate, fullDate, cateringtime, "$" + cost, shapper,
                            delivery, addres, paymentamount, paymenttype, email, notes, fullPaymentDate, cateringid, cateringcount);

                        mCompleteList.push(Actor);
                    }

                }

                mCompleteList.sort(function (a, b) {
                    return b.FullDate.localeCompare(a.FullDate);
                })
                mActive_List.sort(function (a, b) {
                    return a.FullDate.localeCompare(b.FullDate);
                })

                          

                dispatch({ type: ACTIVECATERING_IN_COMPLETE, ACTIVE_DATA: mActive_List, COMPLETE_DATA: mCompleteList })

            }).catch((ERROR) => {
                console.log('ERROR', ERROR);
                dispatch({ type: ACTIVECATERING_IN_FAILED })
                alert(ERROR)
            })


    }
}

export const GetCateringItem = (ITEM_ID) => {
    return async dispatch => {

        dispatch({ type: CATERINGLIST_IN_REQUEST })

        var URL = NetworkApi.BASE_URL + Constant.STORE_ID + NetworkApi.GET_CATERING_ITEM + ITEM_ID;

        console.log('URL', URL);



        axios.get(URL)
            .then((response) => {


                var mTempList = [];
                var data = response.data;

                for (let index = 0; index < data.length; index++) {

                    var cateringitemid = data[index].cateringitemid;
                    var itemname = data[index].itemname;
                    var quantity = data[index].quantity;
                    var notes = data[index].notes;

                    var Actor = new CateringListItemModel(cateringitemid, false, itemname, quantity, notes, false)

                    mTempList.push(Actor);

                }



                dispatch({ type: CATERINGLIST_IN_COMPLETE, CATERINGLIST_ITEM: mTempList });
            }).catch((ERROR) => {
                console.log('ERROR', ERROR);
                dispatch({ type: CATERINGLIST_IN_FAILED })
                alert(ERROR)
            })



    }
}

export const AddNewCatering = (ItemName, ItemQty, ItemNotes) => {
    return (dispatch, getState) => {



        const { Catering_ListItem } = getState().CateringReducer;
        var Actor = new CateringListItemModel("", false, ItemName, ItemQty, ItemNotes, false)
        Catering_ListItem.push(Actor);
        dispatch({ type: CATERINGLIST_IN_COMPLETE, CATERINGLIST_ITEM: Catering_ListItem });

        alert('Item added successfully');

    }
}

export const DeleteCateringItem = (index) => {
    return (dispatch, getState) => {
        const { Catering_ListItem } = getState().CateringReducer;

        dispatch({ type: CATERINGLIST_IN_REQUEST })
        Catering_ListItem.splice(index, 1);
        var mTempList = Catering_ListItem;
      Toast.show('Item Delete successfully');
        dispatch({ type: CATERINGLIST_IN_COMPLETE, CATERINGLIST_ITEM: mTempList });
    }
}



export const GetfunctionShowEdit = (ID, CHECK, NAME, QTY, NOTES) => {
    return async (dispatch, getState) => {





         dispatch({ type: CATERINGLIST_IN_REQUEST })

        const { Catering_ListItem } = getState().CateringReducer;

        var mList = Catering_ListItem;

        var mTempList = [];
        if (CHECK) {


            for (let i = 0; i < mList.length; i++) {
                var cateringitemid = mList[i].Id;
                var itemname = mList[i].itemName;
                var quantity = mList[i].quantity;
                var notes = mList[i].notes;
                var Select = mList[i].Select;
                var Edittable = mList[i].Edittable;



                if (ID == cateringitemid) {



                    var Actor = new CateringListItemModel(cateringitemid, false, NAME, QTY, NOTES, false)
                    mTempList.push(Actor);



                }
                else {
                    var Actor = new CateringListItemModel(cateringitemid, Select, itemname, quantity, notes, Edittable)

                    mTempList.push(Actor);
                }
            }




            dispatch({ type: CATERINGLIST_IN_COMPLETE, CATERINGLIST_ITEM: mTempList });

        }
        else {


            for (let i = 0; i < mList.length; i++) {
                var cateringitemid = mList[i].Id;
                var itemname = mList[i].itemName;
                var quantity = mList[i].quantity;
                var notes = mList[i].notes;



                if (ID == cateringitemid) {



                    var Actor = new CateringListItemModel(cateringitemid, true, itemname, quantity, notes, true)

                    mTempList.push(Actor);
                }
                else {
                    var Actor = new CateringListItemModel(cateringitemid, false, itemname, quantity, notes, false)

                    mTempList.push(Actor);
                }



            }

            dispatch({ type: CATERINGLIST_IN_COMPLETE, CATERINGLIST_ITEM: mTempList });
        }



       console.log('mTempList',mTempList);
       
        


    }
}


export const CreateCateringApi = (ITEM) => {
    return async dispatch => {
        dispatch({ type: ADD_CATERING_REQUEST })

        var URL = NetworkApi.BASE_URL + Constant.STORE_ID + NetworkApi.ADD_CATERING;


        var EMAIL = ITEM.Email;
        var COST = ITEM.Cost;
        var SHAPPER = ITEM.Selected_Shapper;
        var DELIVER = ITEM.Selected_Deliver;
        var ADDRESS = ITEM.Address;
        var NOTES = ITEM.Notes;
        var PAYMENTAMOUNT = ITEM.Payment_Amount;
        var PAYMENT_TYPE = ITEM.Payment_Type;
        if (EMAIL == "") {
            EMAIL = "";
        }
        if (COST == "") {
            COST = "";
        }
        if (SHAPPER == "") {
            SHAPPER = "";
        }

        if (DELIVER == "") {
            DELIVER = "";
        }
        if (ADDRESS == "") {
            ADDRESS = "";
        }
        if (NOTES == "") {
            NOTES = "";
        }
        if (PAYMENTAMOUNT == "") {
            PAYMENTAMOUNT = "0";
        }
        if (PAYMENT_TYPE == "") {
            PAYMENT_TYPE = "";
        }


        var Hour = 0;
        if (ITEM.SelectedAMPM == 'AM') {
            Hour = ITEM.SelectedHour
        }
        else {

            var mH = ITEM.SelectedHour;
            Hour = parseInt(mH) + 12;
        }





        axios.post(
            URL,
            {
                'cateringDate': ITEM.CateringDate,
                'cateringTime': Hour + ":" + ITEM.SelectedMintue + ":" + '00',
                'contact': ITEM.Name,
                'phone': ITEM.Phone,
                'email': ITEM.Email,
                'cateringCount': ITEM.CateringCount,
                'cost': ITEM.Cost,
                'shapers': ITEM.Selected_Shapper,
                'delivery': ITEM.Selected_Deliver,
                'onsite': 'N',
                'address': ADDRESS,
                'notes': NOTES,
                'paymentAmount': PAYMENTAMOUNT,
                'paymentType': PAYMENT_TYPE,
                'paymentDate': ITEM.PaymentCurrentDate,
                "items": ITEM.Item_List

            },

        ).then((response) => {
            console.log('response', response);
            var status = response.status;
            if (status == 201) {
           Toast.show('Catering added successfully');
                dispatch({ type: ADD_CATERING_COMPLETE })
                NavigationService.back()
            }
            else {
                dispatch({ type: ADD_CATERING_FAILED })
                alert(response.data)
            }

        }).catch((ERROR) => {
            console.log('ERROR', ERROR);
            dispatch({ type: ADD_CATERING_FAILED })
            alert(ERROR)

        });


    }
}


export const UpdateCatering = (ITEM) => {

    return async (dispatch, getState) => {

        dispatch({ type: UPDATE_CATERING_REQUEST })

        var URL = NetworkApi.BASE_URL + Constant.STORE_ID + NetworkApi.UPDATE_CATERING + ITEM.CateringID;



        const { Catering_ListItem } = getState().CateringReducer;

        var EMAIL = "", COST = "", SHAPPER = "", DELIVER = "", ADDRESS = "", NOTES = "", PAYMENTAMOUNT = "", PAYMENT_TYPE = "";


        EMAIL = ITEM.Email;
        COST = ITEM.Cost;
        SHAPPER = ITEM.Selected_Shapper;
        DELIVER = ITEM.Selected_Deliver;
        ADDRESS = ITEM.Address;
        NOTES = ITEM.Notes;
        PAYMENTAMOUNT = ITEM.Payment_Amount;
        PAYMENT_TYPE = ITEM.Payment_Type;
        if (EMAIL == "") {


            EMAIL = "";
        }
        if (COST == "") {
            COST = "";
        }
        if (SHAPPER == "") {
            SHAPPER = "";
        }

        if (DELIVER == "") {
            DELIVER = "";
        }
        if (ADDRESS == "") {
            ADDRESS = "";
        }
        if (NOTES == "") {
            NOTES = "";
        }
        if (PAYMENTAMOUNT == "") {
            PAYMENTAMOUNT = "0";
        }
        if (PAYMENT_TYPE == "") {
            PAYMENT_TYPE = "";
        }





        var mTemp = [];
        for (let index = 0; index < Catering_ListItem.length; index++) {
            var itemName = Catering_ListItem[index].itemName;
            var quantity = Catering_ListItem[index].quantity;
            var notes = Catering_ListItem[index].notes;


            var Actor = new AddItemModel(itemName, quantity, notes);
            mTemp.push(Actor);


        }

        var Hour = 0;
        if (ITEM.Selected_AMPM == 'AM') {
            Hour = ITEM.Selected_Hour
        }
        else {

            var mH = ITEM.Selected_Hour;
            Hour = parseInt(mH) + 12;
        }





        axios.post(
            URL,
            {
                "cateringDate": ITEM.SelectedCateringDate,
                "cateringTime": Hour + ":" + ITEM.Selected_Mintues + ":" + '00',
                "contact": ITEM.Name,
                "phone": ITEM.Phone,
                "email": EMAIL,
                "cateringCount": ITEM.SelectedCateringCount,
                "cost": ITEM.Cost,
                "shapers": ITEM.SelectedShapper,
                "delivery": ITEM.Selected_Deliver,
                "onsite": "N",
                "address": ADDRESS,
                "notes": NOTES,
                "paymentAmount": PAYMENTAMOUNT,
                "paymentType": PAYMENT_TYPE,
                "paymentDate": ITEM.PaymentCurrentDate,
                "items": mTemp,


            },

        ).then((response) => {
            console.log('response', response);
            var status = response.status;
            if (status == 201) {
              Toast.show('Catering updated successfully');
                dispatch({ type: UPDATE_CATERING_COMPLETE })
                NavigationService.back()
            }
            else {
                dispatch({ type: ADD_CATERING_FAILED })
                alert(response.data)
            }

        }).catch((ERROR) => {
            console.log('ERROR', ERROR);
            dispatch({ type: UPDATE_CATERING_FAILED })
            alert(ERROR)

        });


    }
}



export const PaymentUpdate=(ITEM)=>{
    return async dispatch =>{

      
        dispatch({type :UPDATE_PAYMENT_REQUEST})

        var URL =NetworkApi.BASE_URL+Constant.STORE_ID+NetworkApi.UPDATE_PAYMENT+ITEM.Selected_CateringID;

       axios.post(URL, {
            "paymentAmount":ITEM.Payment_Amount,
            "paymentType": ITEM.Payment_Type,
            "paymentDate": ITEM.Payment_Date,
      
       }).then((response)=>{
           console.log('response',response);

           var status = response.status;
           if(status == 201)
           {

             Toast.show('Payment updated successfully');
           }
           else
           {
       
           }
           
           dispatch({type : UPDATE_PAYMENT_COMPLETE})
       }).catch((ERROR)=>{
        console.log('ERROR', ERROR);
        dispatch({ type: UPDATE_PAYMENT_FAILED })
        alert(ERROR)
       })
    }
}