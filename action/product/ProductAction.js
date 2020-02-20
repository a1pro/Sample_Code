import React, { } from 'react';
import {
    GET_IN_REQUEST, GET_IN_COMPLETE, GET_IN_FAILED, BRAND_IN_REQUEST, BRAND_IN_COMPLETE,
    BRAND_IN_FAILURE, DEPARTMENT_PRODUCT_REQUEST, DEPARTMENT_PRODUCT_COMPLETE,
    DEPARTMENT_PRODUCT_FAILED, DEPARTMENT_PRODUCT_REQUEST_NEW, DEPARTMENT_PRODUCT_COMPLETE_NEW,
    DEPARTMENT_PRODUCT_FAILED_NEW, DEPARTMENT_PRODUCT_FILTER,
    ADDITEM_IN_REQUEST, ADDITEM_IN_COMPLETE, ADDITEM_IN_FAILED
} from '../../action-types';


import { AsyncStorage } from 'react-native';

import NetworkApi from '../../network/NetworkApi';
import Constant from '../../constant/Constant';
import DepartmentModel from '../../model/department/DepartmentModel';
import DepartmentListModel from '../../model/department/DepartmentListModel';
import axios from 'axios';
import Toast from 'react-native-simple-toast';


import NewArrival from '../../model/newArrival/NewArrival';

export const GetDepartmentApi = () => {
    return async dispatch => {



        dispatch({ type: GET_IN_REQUEST });
        var URL = NetworkApi.BASE_URL + Constant.STORE_ID + NetworkApi.GET_DEPARTMENT;
        fetch(URL)
            .then((response) => response.json())
            .then((responseJson) => {

                var mDepartwithCategory = responseJson;

                var mCategory = [];
                for (var i = 0; i < responseJson.length; i++) {
                    var category = responseJson[i].category;
                    mCategory.push(category);

                }

                var uniqueCategory = Array.from(new Set(mCategory))


                var mFinalList = [];

                for (var k = 0; k < uniqueCategory.length; k++) {


                    var list = [];
                    var mCategory = uniqueCategory[k];
                    for (var m = 0; m < responseJson.length; m++) {

                        var category = responseJson[m].category;
                        if (mCategory == category) {

                            var mActor = new DepartmentListModel(responseJson[m].departmentid, responseJson[m].department)
                            list.push(mActor);
                        }

                    }
                    var Actor = new DepartmentModel(false, mCategory, list);
                    mFinalList.push(Actor);
                }




                dispatch({ type: GET_IN_COMPLETE, RESPONSE: mFinalList, DEPT: mDepartwithCategory });

            }).catch((ERROR) => {
                dispatch({ type: GET_IN_FAILED });
                alert(ERROR)

            })

    }
}


export const GetBrandApi = () => {

    return async dispatch => {


        dispatch({ type: BRAND_IN_REQUEST })
        var URL = NetworkApi.BASE_URL + Constant.STORE_ID + NetworkApi.GET_BRAND;

        axios.get(URL)
            .then((response) => {

                var data = response.data;

                dispatch({ type: BRAND_IN_COMPLETE, BRANDDATA: data })
            }).catch((ERROR) => {
                console.log('ERROR', ERROR);
                dispatch({ type: BRAND_IN_FAILURE })
                alert(ERROR)

            })



    }
}


export const GetDepartmentProduct = (ProductId) => {
    return async (dispatch, getState) => {
        const { LocationResponse } = getState().HomeReducer;
        const { SelectedIDList } = getState().ListReducer;

        dispatch({ type: DEPARTMENT_PRODUCT_REQUEST })

        let URL = NetworkApi.BASE_URL + Constant.STORE_ID + NetworkApi.GET_DEPARTMENT_DETAILS + ProductId;

        console.log('URL', URL);


        axios.get(URL)
            .then((response) => {
                var data = response.data;
                var mTempList = [];
                for (let index = 0; index < data.length; index++) {
                    var itemnum = data[index].itemnum;
                    var itemname = data[index].itemname;
                    var quantity = data[index].quantity;
                    var pickup = data[index].pickup;
                    var price = data[index].price;
                    var cost = data[index].cost;

                    price = price.toFixed(2);
                    cost = cost.toFixed(2);


                    var imagepath = data[index].imagepath;




                    var location = data[index].location;



                    var mLocationFormatted;



                    if (location == 'NULL' || location == '' || location == null) {
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

                    var Actor = new NewArrival(itemnum, itemname, quantity, pickup, price, cost, imagepath, location, false)

                    mTempList.push(Actor);
                }

                var newList = mTempList.sort((a, b) => a.Itemname.localeCompare(b.Itemname));


              
               for(var inner=0; inner < mTempList.length; inner++)
               {
                    
                  let checkId= mTempList[inner].Itemnum

                  for(var m=0; m<SelectedIDList.length; m++)
                  {

                    let id= SelectedIDList[m];

                    if(id == checkId)
                    {
                       
                        mTempList[inner].ADDLIST= true;
                        
                    }
                  }
                   
               }
               


                dispatch({ type: DEPARTMENT_PRODUCT_COMPLETE, CATEGORY_DATA: mTempList })
            }).catch((ERROR) => {
                console.log('ERROR', ERROR);
                dispatch({ type: DEPARTMENT_PRODUCT_FAILED })
            })

    }
}
export const GetproductShort = (Value) => {

    return async (dispatch, getState) => {


        const { CategoryResponse } = getState().DepartmentReducer;

        if (Value == 'Low-High') {
            let mTempList = [];

            for (let index = 0; index < CategoryResponse.length; index++) {
                let itemnum = CategoryResponse[index].Itemnum;
                let itemname = CategoryResponse[index].Itemname;
                let quantity = CategoryResponse[index].Quantity;
                let pickup = CategoryResponse[index].Pickup;
                let price = CategoryResponse[index].Price;
                let cost = CategoryResponse[index].Cost;

                var location = CategoryResponse[index].Location;
                let imagepath = CategoryResponse[index].ImagePath;

                let Actor = new NewArrival(itemnum, itemname, quantity, pickup, price, cost, imagepath, location)
                mTempList.push(Actor);


            }
            mTempList.sort((a, b) => {
                return parseFloat(a.Quantity) - parseFloat(b.Quantity)
            });
            dispatch({ type: DEPARTMENT_PRODUCT_FILTER, FILTER_DATA: mTempList })
        }
        else if (Value == 'High-Low') {
            let mTempList = [];

            for (let index = 0; index < CategoryResponse.length; index++) {
                let itemnum = CategoryResponse[index].Itemnum;


                let itemname = CategoryResponse[index].Itemname;
                let quantity = CategoryResponse[index].Quantity;
                let pickup = CategoryResponse[index].Pickup;
                let price = CategoryResponse[index].Price;
                let cost = CategoryResponse[index].Cost;
                var location = CategoryResponse[index].Location;

                let imagepath = CategoryResponse[index].ImagePath;

                let Actor = new NewArrival(itemnum, itemname, quantity, pickup, price, cost, imagepath, location)
                mTempList.push(Actor);


            }
            mTempList.sort((a, b) => {
                return parseFloat(a.Quantity) - parseFloat(b.Quantity)
            });

            mTempList.reverse()
            dispatch({ type: DEPARTMENT_PRODUCT_FILTER, FILTER_DATA: mTempList })

        }
        else if (Value == 'ZtoA') {


            let mTempList = [];

            for (let index = 0; index < CategoryResponse.length; index++) {
                let itemnum = CategoryResponse[index].Itemnum;
                let itemname = CategoryResponse[index].Itemname;
                let quantity = CategoryResponse[index].Quantity;
                let pickup = CategoryResponse[index].Pickup;
                let price = CategoryResponse[index].Price;
                let cost = CategoryResponse[index].Cost;
                var location = CategoryResponse[index].Location;


                let imagepath = CategoryResponse[index].ImagePath;


                let Actor = new NewArrival(itemnum, itemname, quantity, pickup, price, cost, imagepath, location)

                mTempList.push(Actor);


            }
            mTempList.sort((a, b) => a.Itemname.localeCompare(b.Itemname));
            mTempList.reverse()

            dispatch({ type: DEPARTMENT_PRODUCT_FILTER, FILTER_DATA: mTempList })
        }
        else if (Value == 'AtoZ') {

            let mTempList = [];

            for (let index = 0; index < CategoryResponse.length; index++) {
                let itemnum = CategoryResponse[index].Itemnum;
                let itemname = CategoryResponse[index].Itemname;
                let quantity = CategoryResponse[index].Quantity;
                let pickup = CategoryResponse[index].Pickup;
                let price = CategoryResponse[index].Price;
                let cost = CategoryResponse[index].Cost;

                var location = CategoryResponse[index].Location;
                let imagepath = CategoryResponse[index].ImagePath;


                let Actor = new NewArrival(itemnum, itemname, quantity, pickup, price, cost, imagepath, location)

                mTempList.push(Actor);


            }
            mTempList.sort((a, b) => a.Itemname.localeCompare(b.Itemname));


            dispatch({ type: DEPARTMENT_PRODUCT_FILTER, FILTER_DATA: mTempList })

        }

    }

}



export const GetBrandCategory = (Bname) => {
    return async (dispatch, getState) => {

        const { LocationResponse } = getState().HomeReducer;
        const { SelectedIDList } = getState().ListReducer;

      
        
        
        dispatch({ type: DEPARTMENT_PRODUCT_REQUEST })

        let URL = NetworkApi.BASE_URL + Constant.STORE_ID + NetworkApi.GET_BRAND_CATEGORY + Bname;

        axios.get(URL)
            .then((response) => {
                var data = response.data;

                console.log('GetBrandCategory', data);

                var mTempList = [];
                for (let index = 0; index < data.length; index++) {


                    var itemnum = data[index].itemnum;
                    var itemname = data[index].itemname;
                    var quantity = data[index].quantity;
                    var pickup = data[index].pickup;
                    var price = data[index].price;
                    var cost = data[index].cost;

                    price = price.toFixed(2);
                    cost = cost.toFixed(2);


                    var imagepath = data[index].imagepath;




                    var location = data[index].location;



                    var mLocationFormatted;



                    if (location == 'NULL' || location == '' || location == null) {
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
                                        mAddressFormatted = mAddressFormatted + ', ' + locationdesc + ': ' + mLocation[i + 1];
                                    }





                                    location = mAddressFormatted;
                                }

                            }

                        }


                    }

                    var Actor = new NewArrival(itemnum, itemname, quantity, pickup, price, cost, imagepath, location)

                    mTempList.push(Actor);
                }


               for(var inner=0; inner < mTempList.length; inner++)
               {
                    
                  let checkId= mTempList[inner].Itemnum

                  for(var m=0; m<SelectedIDList.length; m++)
                  {

                    let id= SelectedIDList[m];

                    if(id == checkId)
                    {
                       
                        mTempList[inner].ADDLIST= true;
                        
                    }
                  }
                   
               }
               


                var newList = mTempList.sort((a, b) => a.Itemname.localeCompare(b.Itemname));

                dispatch({ type: DEPARTMENT_PRODUCT_COMPLETE, CATEGORY_DATA: mTempList })
            }).catch((ERROR) => {
                console.log('ERROR', ERROR);
                dispatch({ type: DEPARTMENT_PRODUCT_FAILED })
            })

    }
}



export const AdditemtoList = (Itemnum, Qty) => {
    return async (dispatch, getState) => {

        var mCheck= true;
        const { CategoryResponse } = getState().DepartmentReducer;
        const {SelectedIDList} = getState().ListReducer;
        for (let i = 0; i < SelectedIDList.length; i++)    // Check Value Already Exits
        {
           
            let id= SelectedIDList[i];

            if(id == Itemnum)
            {
                mCheck = false;
            }
            
        }
        if(mCheck)
        {
            SelectedIDList.push(Itemnum);
        }

        console.log('SelectedIDList',SelectedIDList);
        

        var mTempList = [];

        for (let index = 0; index < CategoryResponse.length; index++) {


            var itemId = CategoryResponse[index].Itemnum;
            var itemname = CategoryResponse[index].Itemname;
            var quantity = CategoryResponse[index].Quantity;
            var pickup = CategoryResponse[index].Pickup;
            var price = CategoryResponse[index].Price;
            var cost = CategoryResponse[index].Cost;
            var imagepath = CategoryResponse[index].ImagePath;
            var location = CategoryResponse[index].Location;
            var addToList = CategoryResponse[index].ADDLIST;


            if (Itemnum == itemId) {


                var Actor = new NewArrival(itemId, itemname, quantity, pickup, price, cost, imagepath, location, true)

                mTempList.push(Actor);
            }
            else {
                var Actor = new NewArrival(itemId, itemname, quantity, pickup, price, cost, imagepath, location, addToList)
                mTempList.push(Actor);

            }

        }
        dispatch({ type: DEPARTMENT_PRODUCT_COMPLETE, CATEGORY_DATA: mTempList })



        //dispatch({type : ADDITEM_IN_REQUEST})

        var DefaultId = null;
        await AsyncStorage.getItem('DEFAULTLISTID').then(
            (values) => {


                DefaultId = values;

            });


        var URL = NetworkApi.BASE_URL + Constant.STORE_ID + NetworkApi.ADD_ITEM_TO_LIST + DefaultId;

        axios.post(URL, {
            "itemNum": Itemnum,
            "quantity": Qty
        }).then((response) => {
            console.log('response', response);

            var status = response.status;
            if (status == 201) {
                   Toast.show('Product added your DefaultList successfully');


              
                
                

            }
            else {

            }
            dispatch({ type: ADDITEM_IN_COMPLETE })

        }).catch((ERROR) => {
            console.log('ERROR', ERROR);

            dispatch({ type: ADDITEM_IN_FAILED })

            alert(ERROR)
        })

    }
}


export const GetBrandCategoryByBrand = (Bname) => {
    return async (dispatch, getState) => {

        const { LocationResponse } = getState().HomeReducer;
        const { SelectedIDList } = getState().ListReducer;

      
        
        
        dispatch({ type: DEPARTMENT_PRODUCT_REQUEST_NEW })

        let URL = NetworkApi.BASE_URL + Constant.STORE_ID + NetworkApi.GET_BRAND_CATEGORY + Bname;

        axios.get(URL)
            .then((response) => {
                var data = response.data;
                var mTempList = [];
                for (let index = 0; index < data.length; index++) {


                    var itemnum = data[index].itemnum;
                    var itemname = data[index].itemname;
                    var quantity = data[index].quantity;
                    var pickup = data[index].pickup;
                    var price = data[index].price;
                    var cost = data[index].cost;

                    price = price.toFixed(2);
                    cost = cost.toFixed(2);


                    var imagepath = data[index].imagepath;




                    var location = data[index].location;



                    var mLocationFormatted;



                    if (location == 'NULL' || location == '' || location == null) {
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
                                        mAddressFormatted = mAddressFormatted + ', ' + locationdesc + ': ' + mLocation[i + 1];
                                    }





                                    location = mAddressFormatted;
                                }

                            }

                        }


                    }

                    var Actor = new NewArrival(itemnum, itemname, quantity, pickup, price, cost, imagepath, location)

                    mTempList.push(Actor);
                }


               for(var inner=0; inner < mTempList.length; inner++)
               {
                    
                  let checkId= mTempList[inner].Itemnum

                  for(var m=0; m<SelectedIDList.length; m++)
                  {

                    let id= SelectedIDList[m];

                    if(id == checkId)
                    {
                       
                        mTempList[inner].ADDLIST= true;
                        
                    }
                  }
                   
               }
               


                var newList = mTempList.sort((a, b) => a.Itemname.localeCompare(b.Itemname));

                dispatch({ type: DEPARTMENT_PRODUCT_COMPLETE_NEW, CATEGORY_DATA: mTempList })
            }).catch((ERROR) => {
                console.log('ERROR', ERROR);
                dispatch({ type: DEPARTMENT_PRODUCT_FAILED_NEW })
            })

    }
}