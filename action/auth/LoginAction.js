import Raect from "react";
import {
  LOGIN_IN_STARTED,
  LOGIN_IN_COMPLETED,
  LOGIN_IN_FAILED,
  SIGNUP_IN_REQUEST, SIGNUP_IN_COMPLETE, SIGNUP_IN_FAILED,
  VERIFY_IN_REQUEST, VERIFY_IN_COMPLETE, VERIFY_IN_FAILED,
  SKIP_NOTIFICATION_COMPLETE, CHECK_PHONE_NUMBER_IN_REQUEST,
  CHECK_PHONE_NUMBER_IN_COMPLET, CHECK_PHONE_NUMBER_IN_FAILED, ADD_USER_DEVICE_IN_REQUEST,
  ADD_USER_DEVICE_IN_COMPLETE, REGION_IN_COMPLETE, RESEND_OTP_COMPLETE,
  SENDOTP_IN_PHONENUMBER

} from "../../action-types";
import { Platform } from 'react-native';
const FBSDK = require('react-native-fbsdk');
const {
  LoginManager,
} = FBSDK;


import { Auth } from 'aws-amplify'
import NavigationService from '../../NavigationService';
import NetworkApi from '../../network/NetworkApi';
import Constant from '../../constant/Constant';
import RegionModel from '../../model/auth/RegionModel';
import axios from 'axios';

import { AsyncStorage } from 'react-native';
import Toast from 'react-native-simple-toast';

export const getInLogin = (Email, Password, enabledData) => {
  return async dispatch => {


    AsyncStorage.setItem('EMAIL', Email.toLowerCase());
    try {
      dispatch({ type: LOGIN_IN_STARTED });
      const user = await Auth.signIn(Email.toLowerCase(), Password)
      console.log('user: ', user)


      if (user) {
        var attributes = user.attributes;
        console.log('attributes', attributes);

        var email = attributes.email;
        var name = attributes.name;
        var middle_name = attributes.middle_name;
        var phone_number = attributes.phone_number;
        var sub = attributes.sub;
      }
      console.log('LOGIN_IN_COMPLETED');
      dispatch({ type: LOGIN_IN_COMPLETED, })
      // dispatch(hitCheckUser(Email));
      if(!enabledData) {
        dispatch(hitCheckUser(Email))
      }
      else {
        NavigationService.navigate('EnableNotification', { 'EMAIL': Email, 'PASS': Password })
      }
    } catch (Error) {
      console.log("Error", Error);
      dispatch({ type: LOGIN_IN_FAILED });

      if (Error.message === 'User is not confirmed.') {
        dispatch(resendSignUp(Email))
      }
      else if (Error.message === "User is disabled") {

        alert('User account disabled for the store. Please contact store')
      }
      else if (Error.message === "Password reset required for the user") {
        Auth.forgotPassword(Email.toLocaleLowerCase())
          .then((data) => {

            var result = data.CodeDeliveryDetails;
            var number = result.Destination;
            //this.setState({ Loader: false, PhoneNumber: number, ResetPageShow: true , Title :'Reset Password'})

            dispatch({ type: SENDOTP_IN_PHONENUMBER, DATA: number, EMAIL: Email })
            console.log(data)
          })
          .catch((ERROR) => {
            this.setState({ Loader: false })
            console.log('ERROR', ERROR);
            alert(ERROR.message)

          })
        Toast.show('User password needs to be reset. Please reset the password');
        NavigationService.navigate('ResetPasswordContainer');
      }
      else {
        Toast.show(Error.message);
      }
    }
  };
};

export const hitCheckUser = (EMAIL) => {
  return async dispatch => {
    
    dispatch({ type: LOGIN_IN_STARTED });
    var URL = NetworkApi.BASE_URL + Constant.STORE_ID + NetworkApi.Check_User;
    var Email = EMAIL.toLowerCase();
    console.log('URL', URL);
    console.log('EMAIL', Email);


    axios.post(URL, {
      "email": Email,
    }).then((response) => {
      console.log('hitCheckUserresponse', response);

      var data = response.data;
      console.log('data', data);

      var User_Id = '', User_status = '', email = '', firstname = '', lastname = '', phone = '', userrole = '',
        region = '', mm = '', dd = '';
      for (let index = 0; index < data.length; index++) {
        email = data[index].email;
        firstname = data[index].firstname;
        lastname = data[index].lastname;
        let notificationdt = data[index].notificationdt;
        phone = data[index].phone;
        let pushstatus = data[index].pushstatus;
        User_status = data[index].status;
        User_Id = data[index].userid;
        userrole = data[index].userrole;
        let birthdate = data[index].birthdate;
        region = data[index].region;

        let DOB = birthdate.split('T');
        let mdob = DOB[0];
        let mdobArray = mdob.split('-');
        mm = mdobArray[1];
        dd = mdobArray[2];



      }

      if (User_status == 'N') {

        alert('User Disabled for the Store. Please contact the store')
        dispatch({ type: LOGIN_IN_COMPLETED, })
      }
      else {
        var mCheck = false;
        AsyncStorage.getItem('FCM_TOKEN').then((value) => {
          for (let inner = 0; inner < data.length; inner++) {

            let mDevicetoken = data[inner].devicetoken;

            if (mDevicetoken === value) {

              console.log('INSIDE IF');

              mCheck = true;
            }



          }
          console.log('mCheck', mCheck);
          if (mCheck) {
            console.log('Not hit EnableNotification APi');

            dispatch({ type: LOGIN_IN_COMPLETED, })
            NavigationService.back();
          }
          else {
            dispatch({ type: LOGIN_IN_COMPLETED, })
            dispatch(hitEnableNotification(User_Id))
          }
        })


        AsyncStorage.setItem('EMAIL', email);
        AsyncStorage.setItem('NAME', firstname);
        AsyncStorage.setItem('PHONE_NUMBER', phone);
        AsyncStorage.setItem('LAST_NAME', lastname);
        AsyncStorage.setItem('USER_ID', User_Id);
        AsyncStorage.setItem('USERROLE', userrole);
        AsyncStorage.setItem('REGION', region)
        AsyncStorage.setItem('DD', dd)
        AsyncStorage.setItem('MM', mm)
      }
    }).catch((ERROR) => {
      dispatch({ type: LOGIN_IN_FAILED });
      console.log('ERROR', ERROR.response);
      alert('Something wrong please check')

    })
  }
}

// Resend code if not received already


export const resendSignUp = (username) => {
  return async  dispatch => {
    dispatch({ type: LOGIN_IN_STARTED });

    console.log('resendSignUp', username.toLowerCase());
    await Auth.resendSignUp(username.toLowerCase())
      .then(() => {
        dispatch({ type: RESEND_OTP_COMPLETE })
        NavigationService.navigate('OtpContainer')

      })
      .catch(err => {
        dispatch({ type: LOGIN_IN_FAILED });
        if (!err.message) {
          console.log('ISTError requesting new confirmation code: ', err)
          alert(err)
        } else {
          console.log('SEcondError requesting new confirmation code: ', err.message)
          alert(err.message)
        }
      })

  }
}

export const facebookLogin = () => {

  return async dispatch => {

    try {
      dispatch({ type: LOGIN_IN_STARTED })
      LoginManager.logOut();
      LoginManager.setLoginBehavior('WEB_ONLY');
      LoginManager.logInWithReadPermissions(['public_profile']).then(
        function (result) {
          if (result.isCancelled) {
            alert('Login was cancelled');
            dispatch({ type: LOGIN_IN_FAILED })
          }
          else {

            alert('Login was successful with permissions: '
              + result.grantedPermissions.toString());
            LoginManager.logOut();

            dispatch({ type: LOGIN_IN_COMPLETED })
          }
        },
        function (error) {
          alert('Login failed with error: ' + error);
        }
      );
    }
    catch (Error) {

    }
  }


}

export const hitCheckPhonenumber = (STATE) => {
  return async dispatch => {
    const { Phonenumber, } = STATE;



    dispatch({ type: CHECK_PHONE_NUMBER_IN_REQUEST })
    var URL = NetworkApi.BASE_URL + Constant.STORE_ID + NetworkApi.Check_Phone_Number;

    axios.post(URL, {
      'phone': Phonenumber.toString()   // DEVELOPMENT
    }).then((response) => {
      console.log('response', response);

      var data = response.data;

      var Phone = "";
      for (let index = 0; index < data.length; index++) {
        Phone = data[index].phonecount;

      }
      console.log('Phone', Phone);

      if (Phone == 0) {
        console.log('INSIDE  IF');

        dispatch(hitSignupApi(STATE))

      }
      else {
        //Toast.show('User Phone Number already exists in the store. Please contact store.');
        alert('User Phone Number already exists in the store. Please contact store.')

      }
      dispatch({ type: CHECK_PHONE_NUMBER_IN_COMPLET })

    }).catch((ERROR) => {
      console.log('ERROR', ERROR);
      dispatch({ type: CHECK_PHONE_NUMBER_IN_FAILED })
      alert(ERROR.response)

    })
  }
}

export const hitSignupApi = (STATE) => {
  return async dispatch => {

    dispatch({ type: SIGNUP_IN_REQUEST })
    const { Fname, Lname, Phonenumber, Email, Password } = STATE;




    try {
      const success = await Auth.signUp({
        username: Email.toLowerCase(), password: Password,
        attributes: { email: Email, phone_number: "+1" + Phonenumber, name: Fname, middle_name: Lname }
      })
      console.log('user successfully signed up!: ', success)
      dispatch({ type: SIGNUP_IN_COMPLETE })

      dispatch(hitAddUserApi(STATE))

    }
    catch (err) {
      dispatch({ type: SIGNUP_IN_FAILED })
      console.log('error signing up: ', err)
      alert('User Email already exists in the store. Please contact store')
    }

  }
}

export const hitAddUserApi = (STATE) => {
  return async dispatch => {
    dispatch({ type: CHECK_PHONE_NUMBER_IN_REQUEST })

    var URL = NetworkApi.BASE_URL + Constant.STORE_ID + NetworkApi.Add_User;



    var phoneNumber = parseInt(STATE.Phonenumber);
    var userid = phoneNumber;


    axios.post(URL, {
      "userId": userid,
      "firstName": STATE.Fname,
      "lastName": STATE.Lname,
      "phone": STATE.Phonenumber,
      "email": STATE.Email,
      "birthDate": "2019-" + STATE.MM + "-" + STATE.DD,
      "region": STATE.SelectedLanguage,
      "currentCust": STATE.currentCust
    }).then((response) => {
      console.log('response', response);
      dispatch({ type: CHECK_PHONE_NUMBER_IN_COMPLET })

    }).catch((ERROR) => {
      console.log('ERROR hitAddUserApi', ERROR.response);
      dispatch({ type: CHECK_PHONE_NUMBER_IN_FAILED })
      alert(ERROR.response.data.message)


    })

  }
}

export const hitOtpApi = (STATE) => {
  return async dispatch => {


    dispatch({ type: VERIFY_IN_REQUEST })

    const { Email, Otp } = STATE;


    try {
      await Auth.confirmSignUp(Email.toLowerCase(), Otp).then((response) => {
        console.log('Otp', response);
      })
      console.log('successully signed up!')
      dispatch({ type: VERIFY_IN_COMPLETE })
      NavigationService.back();

    } catch (err) {
      dispatch({ type: VERIFY_IN_FAILED })
      console.log('error confirming signing up: ', err)
      alert(err.message)
    }
  }
}


export const hitSkipNotification = (STATE) => {
  return async dispatch => {
    dispatch({ type: ADD_USER_DEVICE_IN_REQUEST })

    var URL = NetworkApi.BASE_URL + Constant.STORE_ID + NetworkApi.Add_UserDevice;


    var phoneNumber = parseInt(STATE.Phonenumber);
    var userid = phoneNumber;
    console.log('userid', userid);


    axios.post(URL, {
      "userId": userid,
      "deviceType": "1",
      "deviceId": "MEJKKK233333",
      "deviceToken": "",
      "pushStatus": "N",
      "tokenUpdDt": ""
    }).then((response) => {
      console.log('response', response);
      NavigationService.back();
      dispatch({ type: SKIP_NOTIFICATION_COMPLETE })
    }).catch((ERROR) => {
      console.log('hitSkipNotification ERROR', ERROR.response);
      alert('Some wrong Please check again')
      dispatch({ type: ADD_USER_DEVICE_IN_COMPLETE })
    })
  }
}
export const hitEnableNotification = (User_Id) => {
  return async dispatch => {
    dispatch({ type: ADD_USER_DEVICE_IN_REQUEST })


    AsyncStorage.getItem('FCM_TOKEN').then((value) => {

      var today = new Date();
      var URL = NetworkApi.BASE_URL + Constant.STORE_ID + NetworkApi.Add_UserDevice;
      axios.post(URL, {
        // "userId": User_Id,
        // "deviceType": "1",
        // "deviceId": 'Test',
        //  "deviceToken": value,
        // "pushStatus": "Y",
        // "tokenUpdDt": today,


        "userId": User_Id,
        "deviceType":  Platform.OS == "ios" ? "2" : "1",
        "deviceToken": value,
        "wallet": "N"
      

      }).then((response) => {
        console.log('response', response);
        console.log('hitEnableNotification YP SINGH In SUCCESS');
        dispatch({ type: SKIP_NOTIFICATION_COMPLETE })
        NavigationService.back();

      }).catch((ERROR) => {
        console.log('hitEnableNotification ERROR', ERROR.response);
        alert('hitEnableNotification Some wrong Please check again')
        dispatch({ type: ADD_USER_DEVICE_IN_COMPLETE })
        console.log('hitEnableNotification YP SINGH In FAIL');

      })
    })


  }
}

export const getAllRegion = () => {
  return async dispatch => {


    var URL = NetworkApi.BASE_URL + Constant.STORE_ID + NetworkApi.Get_Region;
    axios.get(URL).then((response) => {

      var data = response.data;

      var mTemp = [];
      for (let index = 0; index < data.length; index++) {
        var value = data[index].region;

        var Actor = new RegionModel(value)
        mTemp.push(Actor);

      }

      dispatch({ type: REGION_IN_COMPLETE, DATA: data, LIST: mTemp })


    }).catch((ERROR) => {
      console.log('ERROR', ERROR);

    })
  }
}