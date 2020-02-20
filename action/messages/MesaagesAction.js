import React, { } from 'react';
import { MESSAGES_GET_REQUEST,
        MESSAGES_GET_COMPLETE, 
        MESSAGES_GET_FAILED,
        MESSAGES_DELETE_REQUEST,
        MESSAGES_DELETE_COMPLETE,
        MESSAGES_DELETE_FAILED } from '../../action-types';
import {AsyncStorage} from 'react-native';
import NetworkApi from '../../network/NetworkApi';
import Constant from '../../constant/Constant';
import axios from 'axios';

export const GetMessagesApi = () => {
    return async (dispatch , getState) => {
        dispatch({ type: MESSAGES_GET_REQUEST })
        var URL = NetworkApi.BASE_URL + Constant.STORE_ID + NetworkApi.MY_MESSAGES_GET;
        let userId = null;
        await AsyncStorage.getItem('USER_ID').then((value) => {
            userId = value;
        });
        const data = {
            "userId": userId
            // userId
        }
        axios.post(URL, data, {
            header: {
                "Content-type": "application/json"
            }
        })
        .then((response) => {
            let getData = response.data;
            dispatch({ type: MESSAGES_GET_COMPLETE, DATA: getData })
        })
        .catch((ERROR) => {
            alert(ERROR);
            dispatch({ type: MESSAGES_GET_FAILED })
        })
    }
}

export const GetNotificationDelete = (id) => {
    return async (dispatch , getState) => {
        dispatch({ type: MESSAGES_DELETE_REQUEST })
        let userId = null;
        await AsyncStorage.getItem('USER_ID').then((value) => {
            userId = value;
        });
        let passData = id;
        let APIGET = NetworkApi.MY_MESSAGES_DELETE;
        if(id == 'userid'){
            passData = userId;
            APIGET = NetworkApi.MY_MESSAGES_ALL_DELETE
        }
        var URL = NetworkApi.BASE_URL+Constant.STORE_ID+APIGET+passData;
        axios.delete(URL, {
            header: {
                "Content-type": "application/json"
            }
        })
        .then((response) => {
            let getData = response.data;
            dispatch({ type: MESSAGES_DELETE_COMPLETE })
            dispatch(GetMessagesApi())
        })
        .catch((ERROR) => {
            alert(ERROR);
            dispatch({ type: MESSAGES_DELETE_FAILED })
        })
    }
}