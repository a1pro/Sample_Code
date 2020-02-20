import React, { } from 'react';
import { NOTIFICATION_GET_SETTING_REQUEST, 
        NOTIFICATION_GET_SETTING_COMPLETED, 
        NOTIFICATION_GET_SETTING_FAILURE,
        NOTIFICATION_SETTING_UPDATE_REQUEST,
        NOTIFICATION_SETTING_UPDATE_COMPLETE,
        NOTIFICATION_SETTING_UPDATE_FAILED } from '../../action-types';
import {AsyncStorage} from 'react-native';
import NetworkApi from '../../network/NetworkApi';
import Constant from '../../constant/Constant';
import axios from 'axios';

export const GetNotificationApi = () => {
    return async (dispatch , getState) => {
        dispatch({ type: NOTIFICATION_GET_SETTING_REQUEST })
        var URL = NetworkApi.BASE_URL + Constant.STORE_ID + NetworkApi.GET_NOTIFICATION_SETTING;
        let userId = null;
        await AsyncStorage.getItem('USER_ID').then((value) => {
            userId = value;
        });
        const data = {
            "userId": userId
        }
        axios.post(URL, data, {
            header: {
                "Content-type": "application/json"
            }
        })
        .then((response) => {
            let getData = response.data;
            let keyArray = [];
            let valArray = [];
            for(let i = 0; i < getData.length; i++) {
                
                if(getData[i].notificationcd == 'Food Specials') {
                    keyArray.push('Food');
                }
                if(getData[i].notificationcd == 'Produce Arrivals') {
                    keyArray.push('Produce');
                }
                if(getData[i].notificationcd == 'Sales Specials') {
                    keyArray.push('Sales');
                }
                if(getData[i].notificationcd == 'Store News') {
                    keyArray.push('Store');
                }
                if(getData[i].notificationcd == 'Coupons') {
                    keyArray.push(getData[i].notificationcd);
                }
                if(getData[i].notificationcd == 'Rewards') {
                    keyArray.push(getData[i].notificationcd);
                }

                if(getData[i].allow == "Y") {
                    valArray.push(true)
                }
                else {
                    valArray.push(false)
                }
            }
            let finalArray = Object.assign({}, ...keyArray.map((e, i) => ({[e]: valArray[i]})))
            
            // alert(JSON.stringify(finalArray));
            dispatch({ type: NOTIFICATION_GET_SETTING_COMPLETED, DATA: finalArray })
        })
        .catch((ERROR) => {
            alert(ERROR);
            dispatch({ type: NOTIFICATION_GET_SETTING_FAILURE })
        })
    }
}

export const updateNotificationApi = (data) => {
    return async dispatch => {
        let userId = null;
        await AsyncStorage.getItem('USER_ID').then((value) => {
            userId = value;
        });
        const updateDataFinal = {
            "userId": userId,
            "notifyType": data.type,
            "allow": data.updateData
        }
        dispatch({ type: NOTIFICATION_SETTING_UPDATE_REQUEST })
        var URL = NetworkApi.BASE_URL + Constant.STORE_ID + NetworkApi.NOTIFICATION_SETTING_UPDATE;

        axios.post(URL, updateDataFinal, {
            header: {
                "Content-type": "application/json"
            }
        })
        .then((response) => {
            // alert(response.data);
            dispatch({ type: NOTIFICATION_SETTING_UPDATE_COMPLETE })
            dispatch(GetNotificationApi());
        }).catch((ERROR) => {
            dispatch({ type: NOTIFICATION_SETTING_UPDATE_FAILED })
            alert(ERROR.response)

        })
    }
}