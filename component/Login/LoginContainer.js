import React, { Component } from "react";
import Login from "./Login";
import { connect } from "react-redux";
import { getInLogin, facebookLogin } from "../../action";
import Model from "../../model";
import { Alert } from 'react-native';
import { Auth } from 'aws-amplify'
import firebase from 'react-native-firebase';
import { GoogleSignin, statusCodes } from 'react-native-google-signin';
import { AsyncStorage } from 'react-native';
//GoogleSignin.configure();


class LoginContainer extends Component {
  state = Model.LoginInModel;

  constructor(props) {
    super(props)
    this.checkPermission = this.checkPermission.bind(this);

    
  }


  async componentDidMount() {
    console.log("componentDidMount");

    var user = this.state;
    user['email'].value = "";
    user['password'].value="";
    this.setState(user);

  }
  async checkPermission() {

    const { value: IsEmail } = this.state.email;
    const { value: IsPassword } = this.state.password;

    const enabled = await firebase.messaging().hasPermission();
    if (enabled) {
      this.getToken();
    }
    else {
      var user1 = this.state;
      user1["enabled"] = true;
      user1["error"].value = false;
      this.setState(user1);
      AsyncStorage.getItem('FCM_PERMISSION').then((value) => {

        if (value == null) {
          // this.props.navigation.navigate('EnableNotification', { 'EMAIL': IsEmail, 'PASS': IsPassword })
          this.getToken();
        }
        else if (value  == 'NOT') {
          alert('Enabling Notifications is mandatory for accessing any user related functions.Please go to Phone Settings and enable Notifications for KC India Mart App')
        }
        else {
          // this.props.navigation.navigate('EnableNotification', { 'EMAIL': IsEmail, 'PASS': IsPassword })
          this.getToken();
        }
      })

      // this.requestPermission();
    }
  }
  async requestPermission() {
    try {
      await firebase.messaging().requestPermission();

      this.getToken();
    }
    catch (error) {
      // User has rejected permissions
      console.log('permission rejected');
      alert('Please enable the Notification from settings , Notification is mandetory for Login')


    }
  }

  async getToken() {
    const { value: IsEmail } = this.state.email;
    const { value: IsPassword } = this.state.password;
    const { enabled } = this.state;

    firebase.messaging().getToken()
      .then(fcmToken => {
        if (fcmToken) {
          // user has a device token
          console.log('fcmToken', fcmToken);
          AsyncStorage.setItem('FCM_TOKEN', fcmToken)
          this.props.getInLogin(IsEmail, IsPassword, enabled);
        }
        else {
          // user doesn't have a device token yet
          console.log('user doesnt have a device token yet');
        }
      });
  }
  functionSetEmail = (Name, Value) => {
    var user = this.state;
    user[Name].value = Value;
    user["error"].value = false;
    this.setState(user);
  };


  functionSetPassword = (Name, Value) => {
    var user = this.state;
    user[Name].value = Value;
    user["error"].value = false;
    this.setState(user);
  };
  functionSubmitloginApp = () => {

    const { value: IsEmail } = this.state.email;
    const { value: IsPassword } = this.state.password;

    if (IsEmail == "") {
      const user = this.state;
      user["error"].value = true;
      user["errorMessage"].value = "Please enter email";
      this.setState(user);
    }
    else if (IsPassword == '') {
      const user = this.state;
      user["error"].value = true;
      user["errorMessage"].value = "Please enter password";
      this.setState(user);
    }

    else {

      this.checkPermission();
    }
  };

  functionGoback = () => {
    this.props.navigation.goBack();
  };
  
  functionOpenPage = value => {
    this.props.navigation.navigate(value);
  };

  functionCheckRedux = () => {
    console.log("functionCheckRedux");

    this.props.getInLogin();
  };

  functionEmailFocusChange = value => {

    var user = this.state;
    user["emailFocus"].value = value;
    this.setState(user);
  };
  functionPassFocusChange = value => {

    var user = this.state;
    user["passFocus"].value = value;

    this.setState(user);


  };

  functionFaceBookLogin = () => {

    this.props.facebookLogin();



  }
  // Somewhere in your code
  FunctionGmailsignIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      this.setState({ userInfo });
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (f.e. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  };
  render() {
    const Modal = {
      User: this.state.User,
      Title: this.state.Title.value,
      Error: this.state.error.value,
      ErrorMeg: this.state.errorMessage.value,
      EmailFocus: this.state.emailFocus.value,
      PassFocus: this.state.passFocus.value,



      //REDUX

      ShowLoader: this.props.Loader,


      //Function
      functionSetEmail: this.functionSetEmail,
      functionSubmitloginApp: this.functionSubmitloginApp,
      functionOpenPage: this.functionOpenPage,
      functionGoback: this.functionGoback,
      functionEmailFocusChange: this.functionEmailFocusChange,
      functionPassFocusChange: this.functionPassFocusChange,

      functionCheckRedux: this.functionCheckRedux,
      functionHitApi: this.functionHitApi,
      functionFaceBookLogin: this.functionFaceBookLogin,
      FunctionGmailsignIn: this.FunctionGmailsignIn,
      functionSetPassword: this.functionSetPassword,
    };

    return <Login {...Modal} />;
  }
}

function MapToStateProps(state) {
  const { Loader, Errorr } = state.loginReducer;

  console.log("Loader", Loader);

  return { Loader, Errorr };
}

export default connect(
  MapToStateProps,
  { getInLogin, facebookLogin }
)(LoginContainer);
