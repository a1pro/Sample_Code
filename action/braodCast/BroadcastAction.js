import React, {} from 'react';
import {GET_VALUE_REQUEST,GET_VALUE_COMPLETE,GET_VALUE_FAILED ,GET_NOTIFICATION_TYPE_COMPLETE} from '../../action-types';

import axios from 'axios';
import NetworkApi from '../../network/NetworkApi';
import Constant from '../../constant/Constant';

import RegionModel from '../../model/auth/RegionModel';


export const getBroadcastValue=()=>{
    return async dispatch=>{


        dispatch({type : GET_VALUE_REQUEST})
        var URL = NetworkApi.BASE_URL+Constant.STORE_ID+NetworkApi.Get_BroadCastValue;
        axios.get(URL).then((response)=>{
           
            var data= response.data;

            var mTemp=[];
            for (let index = 0; index < data.length; index++) {
                var  element = data[index].uservalue;

                var Actor = new RegionModel(element);
                mTemp.push(Actor);

                
            }
            dispatch({type : GET_VALUE_COMPLETE, DATA : mTemp})
        }).catch((ERROR)=>{
            console.log('ERROR',ERROR);
            dispatch({type : GET_VALUE_FAILED})
        })

       
        

    }
}


export const getNotificationType=()=>{
    return async dispatch =>{


        dispatch({type : GET_VALUE_REQUEST})
        var URL = NetworkApi.BASE_URL+Constant.STORE_ID+NetworkApi.Get_Notification_Type;
        axios.get(URL).then((response)=>{
            console.log('getNotificationType',response);
            var data= response.data;

            var mTemp=[];
            for (let index = 0; index < data.length; index++) {
                var  element = data[index].notifytypes;

                var Actor = new RegionModel(element);
                mTemp.push(Actor);
            }

            console.log('mTemp',mTemp);
            
            dispatch({type : GET_NOTIFICATION_TYPE_COMPLETE , DATA : mTemp})
        }).catch((ERROR)=>{
            console.log('ERROR',ERROR);
            dispatch({type : GET_VALUE_FAILED})
        })

        
    }
}