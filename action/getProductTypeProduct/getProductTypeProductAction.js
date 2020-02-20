import React, {} from 'react';
import { GET_ITEM_REQUEST_LISTS, GET_ITEM_COMPLETE_LISTS, GET_ITEM_FAILED_LISTS,
        GET_THEME_REQUEST_LISTS, GET_THEME_COMPLETE_LISTS, GET_THEME_FAILED_LISTS} from '../../action-types';
import NetworkApi from '../../network/NetworkApi';
import Constant from '../../constant/Constant';
import axios from 'axios';
import NewArrival from '../../model/newArrival/NewArrival';


export const GetItemLists = (productType) => {
    return async (dispatch, getState) => {
        const { LocationResponse } = getState().HomeReducer;
        const { SelectedIDList } = getState().ListReducer;
        dispatch({ type: GET_ITEM_REQUEST_LISTS })
        var URL = NetworkApi.BASE_URL + Constant.STORE_ID + NetworkApi.PRODUCT_TYPE_DATA+productType;

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

               for(var inner=0; inner < mTempList.length; inner++) {
                    
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
                dispatch({ type: GET_ITEM_COMPLETE_LISTS, DATA: mTempList })
            }).catch((ERROR) => {
                dispatch({ type: GET_ITEM_FAILED_LISTS })
                alert(ERROR);
            })
    }
}

export const GetThemeLists = (themeType) => {
    return async (dispatch, getState) => {
        const { LocationResponse } = getState().HomeReducer;
        const { SelectedIDList } = getState().ListReducer;
        dispatch({ type: GET_THEME_REQUEST_LISTS })
        var URL = NetworkApi.BASE_URL + Constant.STORE_ID + NetworkApi.PRODUCT_THEME_DATA+themeType;

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

               for(var inner=0; inner < mTempList.length; inner++) {
                    
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
                dispatch({ type: GET_THEME_COMPLETE_LISTS, DATA: mTempList })
            }).catch((ERROR) => {
                dispatch({ type: GET_THEME_FAILED_LISTS })
                alert(ERROR);
            })
    }
}