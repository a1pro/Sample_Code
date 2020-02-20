import React, { } from 'react';
import { DETAIL_IN_REQUEST, DETAIL_IN_COMPLETE, DETAIL_IN_FAILURE,ADDITEM_IN_COMPLETE,DETAIL_ADDITEM_COMPLETE ,
    SELECTEDLIST_ID_COMPLETE } from '../../action-types';
import {AsyncStorage} from 'react-native';

import NetworkApi from '../../network/NetworkApi';
import Constant from '../../constant/Constant';
import axios from 'axios';
import Toast from 'react-native-simple-toast';

export const GetProductDetail = (ItemId) => {
    return async (dispatch, getState) => {
        const { LocationResponse } = getState().HomeReducer;
        const { SelectedIDList } = getState().ListReducer;

        dispatch({ type: DETAIL_IN_REQUEST })
        var URL = NetworkApi.BASE_URL + Constant.STORE_ID + NetworkApi.GET_ITEM_DETAIL + ItemId;
        axios.get(URL)
            .then((response) => {
                var data = response.data;
                var description = '', brand = '', ingredients = '', producttype = '', weight = '', usage = '',
                    imagepath = '', quantity = '', inStock = '', price = '',
                    cost = '', location = '', itemname = '', itemnum = '', theme = '', pickup = '', refill = '';
                for (let index = 0; index < data.length; index++) {
                    itemnum = data[index].itemnum;
                    description = data[index].description;
                    brand = data[index].brand;
                    ingredients = data[index].ingredients;
                    producttype = data[index].producttype;
                    weight = data[index].weight;
                    usage = data[index].weight;
                    imagepath = data[index].imagepath;
                    quantity = data[index].quantity;
                    inStock = data[index].instock;
                    price = data[index].price;
                    cost = data[index].cost;
                    location = data[index].location;
                    itemname = data[index].itemname;
                    price = price.toFixed(2);
                    cost = cost.toFixed(2);
                    theme = data[index].theme;
                    pickup = data[index].pickup;
                    refill = data[index].refill; 

                    if(theme == '') {
                        theme = 'N/A';
                    }
                    if (description == '') {
                        description = 'N/A';
                    }
                    if (brand == '') {
                        brand = 'N/A';
                    }
                    if (ingredients == '') {
                        ingredients = 'N/A';
                    }
                    if (producttype == '') {
                        producttype = 'N/A';
                    }
                    if (weight == '') {
                        weight = 'N/A';
                    }
                    if (usage == '') {
                        usage = 'N/A';
                    }


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

                }


                var mSelected= false;

                for(var m=0; m<SelectedIDList.length; m++)
                {

                    let checkID= SelectedIDList[m];
                 
                    if(checkID == ItemId)
                    {
                        mSelected= true;
                    }
                    
                }
                dispatch({
                    type: DETAIL_IN_COMPLETE, DATA: description, BRAND: brand, INGREDIENTS: ingredients,
                    PRODUCTTYPE: producttype, WEIGHT: weight, USAGE: usage, IMAGE: imagepath, STOCK: quantity, STOCK_SEC: inStock, PRICE: price, COST: cost,
                    LOCATION: location, ITEM_NAME: itemname, ITEM_NUMBER: itemnum, ITEM_SELECTED: mSelected, THEME: theme, PICKUP: pickup, REFILL: refill 
                })

            }).catch((ERROR) => {
                console.log('ERROR', ERROR);
                dispatch({ type: DETAIL_IN_FAILURE })
                alert(ERROR);

            })





    }
}

export const AddDetailsitemtoList = (Itemnum, Qty) =>
 {
    return async (dispatch, getState) => {

        const { SelectedIDList } = getState().ListReducer;
      
        console.log('SelectedIDList',SelectedIDList);
        

        var mCheck= true;
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
        
        dispatch({type : SELECTEDLIST_ID_COMPLETE , SELECTED_LIST : SelectedIDList})
       
        dispatch({ type: DETAIL_ADDITEM_COMPLETE, ITEM_SELECTED: true })

       

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

            alert(ERROR)
        })

    }
}