import React, { Component } from 'react';
import { AsyncStorage} from 'react-native';
import EnableNotification from './EnableNotification';
import firebase from 'react-native-firebase';

import {connect} from 'react-redux';
import {getInLogin, hitCheckUser} from '../../../action';

 class EnableNotificationContainer extends Component {

    constructor(props) {
        super(props)
        this.checkPermission = this.checkPermission.bind(this);
        this.requestPermission = this.requestPermission.bind(this);
        this.getToken = this.getToken.bind(this);


        this.State={
            Email :'',
            Password:'',
            ShowLoader :false,
        }

        this.props.navigation.addListener(
            'willFocus',
            payload => {

            let isEmail= this.props.navigation.getParam('EMAIL');
            let isPassword = this.props.navigation.getParam('PASS')

            this.setState({Email : isEmail, Password : isPassword});
            }
          );
    }



    async checkPermission() {
        const enabled = await firebase.messaging().hasPermission();
        if (enabled) {
            this.getToken();

        }
        else {

            this.requestPermission();
        }
    }
    async requestPermission() {
        try {
            await firebase.messaging().requestPermission();

            this.getToken();
        }
        catch (error) 
        {
            AsyncStorage.setItem('FCM_PERMISSION' , 'NOT')
            // User has rejected permissions
            console.log('permission rejected');
            alert('Enabling Notifications is mandatory for accessing any user related functions.Please go to Phone Settings and enable Notifications for KC India Mart App')
            this.props.navigation.goBack();
        }
    }

    async getToken() {

        firebase.messaging().getToken()
            .then(fcmToken => {
                if (fcmToken) {
                    // user has a device token

                    console.log('fcmToken', fcmToken);
                    this.setState({ FcmPushToken: fcmToken });
                    AsyncStorage.setItem('FCM_TOKEN', fcmToken)

                    this.props.hitCheckUser(this.state.Email);
                    this.props.navigation.goBack();

                }
                else {
                    // user doesn't have a device token yet

                    AsyncStorage.setItem('FCM_PERMISSION' , 'NOT')
                    console.log('user doesnt have a device token yet');
                }
            });
    }
    functionGoback = () => {
        this.props.navigation.goBack();
    }
    functionEnableNotification = () => {

        this.checkPermission();
      }

    render() {


        const Model = {

            ShowLoader : this.props.Loader,
            functionGoback: this.functionGoback,
            functionEnableNotification : this.functionEnableNotification,
        }
        return < EnableNotification  {...Model} />
    }


}
function MapToStateProps(state) {
    const { Loader, Errorr } = state.loginReducer;
  
    return { Loader, Errorr };
  }
export default connect(MapToStateProps , {getInLogin, hitCheckUser})(EnableNotificationContainer)