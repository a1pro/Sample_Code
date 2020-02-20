import React, { } from 'react';
import {
    GET_REMINDER_REQUEST, GET_REMINDER_COMPLETE, GET_REMINDER_FAILED, REMINDER_SHORT_COMPLETE,
    EDIT_PROFILE_IN_REQUEST, EDIT_PROFILE_IN_COMPLETE, EDIT_PROFILE_IN_FAILED,
    DELETE_NOT_REQUEST_PROD, DELETE_NOT_COMPLETED_PROD, DELETE_NOT_FAILED_PROD

} from '../../action-types';
import NetworkApi from '../../network/NetworkApi';
import Constant from '../../constant/Constant';
import axios from 'axios';
import { AsyncStorage } from 'react-native';
import ProductReminderModel from '../../model/myAccount/ProductReminderModel';
import Toast from 'react-native-simple-toast';

export const getAllRemiderProduct = () => {
    return async (dispatch, getState) => {
        const { LocationResponse } = getState().HomeReducer;
        dispatch({ type: GET_REMINDER_REQUEST })

        AsyncStorage.getItem('USER_ID').then((value) => {
            var URL = NetworkApi.BASE_URL + Constant.STORE_ID + NetworkApi.Get_User_Reminder;

            axios.post(URL, {
                'userId': value,
            }).then((response) => {
                var mTemp = [];
                var data = response.data;
                for (let index = 0; index < data.length; index++) {
                    var imagepath = data[index].imagepath;
                    var itemname = data[index].itemname;
                    var itemnum = data[index].itemnum;
                    var location = data[index].location;
                    var pickup = data[index].pickup;
                    var quantity = data[index].quantity;
                    var reminderId = data[index].reminderid;

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
                    var Actor = new ProductReminderModel(imagepath, itemname, itemnum, location, pickup, quantity, reminderId)
                    mTemp.push(Actor);

                }
                mTemp.sort((a,b) => (a.Itemname > b.Itemname) ? 1 : ((b.Itemname > a.Itemname) ? -1 : 0));
                dispatch({ type: GET_REMINDER_COMPLETE, DATA: mTemp })
            }).catch((ERROR) => {
                console.log('ERROR', ERROR);
                dispatch({ type: GET_REMINDER_FAILED })
                alert('Something went wrong.Please check')
            })
        })
    }
}

export const reverseSort = () => {
    return async (dispatch, getState) => {
        const { LocationResponse } = getState().HomeReducer;
        dispatch({ type: GET_REMINDER_REQUEST })

        AsyncStorage.getItem('USER_ID').then((value) => {
            var URL = NetworkApi.BASE_URL + Constant.STORE_ID + NetworkApi.Get_User_Reminder;

            axios.post(URL, {
                'userId': value,
            }).then((response) => {
                var mTemp = [];
                var data = response.data;
                for (let index = 0; index < data.length; index++) {
                    var imagepath = data[index].imagepath;
                    var itemname = data[index].itemname;
                    var itemnum = data[index].itemnum;
                    var location = data[index].location;
                    var pickup = data[index].pickup;
                    var quantity = data[index].quantity;

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
                    var Actor = new ProductReminderModel(imagepath, itemname, itemnum, location, pickup, quantity)
                    mTemp.push(Actor);

                }
                mTemp.sort((a,b) => (a.Itemname < b.Itemname) ? 1 : ((b.Itemname < a.Itemname) ? -1 : 0));
                dispatch({ type: GET_REMINDER_COMPLETE, DATA: mTemp })
            }).catch((ERROR) => {
                console.log('ERROR', ERROR);
                dispatch({ type: GET_REMINDER_FAILED })
                alert('Something went wrong.Please check')
            })
        })
    }
}

export const shortReminderProduct = (value) => {
    return async (dispatch, getState) => {
        const { PreviousResponse } = getState().MyAccountReducer;
        console.log('shortReminderProduct', Response);

        var mChek = PreviousResponse.sort(function (a, b) {
            return a.Itemname.localeCompare(b.Itemname);
        })

        dispatch({ type: REMINDER_SHORT_COMPLETE, DATA: mChek })

    }
}

export const updateProfile = (STATE) => {
    return async dispatch => {

      
        dispatch({type : EDIT_PROFILE_IN_REQUEST})

        AsyncStorage.getItem('USER_ID').then((value) => {
            var URL = NetworkApi.BASE_URL + Constant.STORE_ID + NetworkApi.Update_Profile;
            console.log('URL', URL);

            axios.post(URL, {
                "userId": value,
                "firstName": STATE.Fname,
                "lastName": STATE.Lname,
                "birthDate": "2019-"+STATE.MM+"-"+STATE.DD,
                "region": STATE.SelectedLanguage
            }).then((response) => {
                console.log('response', response);

              
                AsyncStorage.setItem('NAME', STATE.Fname);
                AsyncStorage.setItem('LAST_NAME', STATE.Lname);

                dispatch({type : EDIT_PROFILE_IN_COMPLETE})
               Toast.show('Profile updated successfully');
            }).catch((ERROR) => {
                console.log('ERROR', ERROR.response);
                dispatch({type : EDIT_PROFILE_IN_FAILED})
                alert('Something wrong, Please check again')

            })
        })


    }
}

export const deleteProdNot = (ProdNotNum) => {
    return async dispatch => {
        dispatch({type : DELETE_NOT_REQUEST_PROD })
            var URL = NetworkApi.BASE_URL + Constant.STORE_ID + NetworkApi.PROD_NOT_DELETE+ProdNotNum;
            axios.delete(URL).then((response) => {
                dispatch({type : DELETE_NOT_COMPLETED_PROD})
               Toast.show('Reminder deleted successfully.');
               dispatch(getAllRemiderProduct());
            }).catch((ERROR) => {
                dispatch({type : DELETE_NOT_FAILED_PROD})
                alert('Something wrong, Please check again')
            })
    }
}