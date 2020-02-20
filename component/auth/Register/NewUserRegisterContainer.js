import React, { Component } from "react";
import { Keyboard, PermissionsAndroid,AsyncStorage } from 'react-native';
import NewUserRegister from "./NewUserRegister";
import Monthmodel from "../../../model/Monthmodel";
import DaysModel from "../../../model/DaysModel";
import LanguageModel from "../../../model/LanguageModel";
import { Auth } from 'aws-amplify'
import firebase from 'react-native-firebase';
import { connect } from 'react-redux';
import { hitSignupApi, hitOtpApi, hitSkipNotification, hitCheckPhonenumber ,hitAddUserApi,
  hitEnableNotification
} from '../../../action';


class NewUserRegisterContainer extends Component {
  constructor(props) {
    super(props);


    this.checkPermission = this.checkPermission.bind(this);
    this.requestPermission = this.requestPermission.bind(this);
    this.getToken = this.getToken.bind(this);

    this.state = {
      Title: "Register",
      MonthList: [...Monthmodel],
      DaysList: [...DaysModel],
      LanguageList: [],
      SelectedLanguage: "Select Region",
      PasswordVisible: true,
      ConPassword: true,

      Fname: '',
      Lname: '',
      Phonenumber: '',
      Email: '',
      Password: '',
      Otp: '',
      ShowOtptScreen: false,
      ShowEnableNotification: false,
      Loader: false,
      FcmPushToken:'',
      CurrentDate:'',


      MM: "MM",
      DD: "DD",
      Dialog: {
        MonthDialogVisible: false,
        DaysDialogVisible: false,
        LanguageVisible: false
      },
      RadioGroup: {
        Yes: false,
        No: true
      },
      currentCust: "N"
    };
  }

  async componentDidMount() {

    
    var date = new Date().getDate(); //Current Date
    var month = new Date().getMonth() + 1; //Current Month
    var year = new Date().getFullYear(); //Current Year

    let mCheck= year+"-"+month+"-"+date;
    this.setState({CurrentDate : mCheck})
   
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
    catch (error) {
      // User has rejected permissions
      console.log('permission rejected');
      alert(error)


    }
  }

  async getToken() {
    firebase.messaging().getToken()
      .then(fcmToken => {
        if (fcmToken) {
          // user has a device token

          console.log('fcmToken',fcmToken);
          this.setState({FcmPushToken : fcmToken});
          AsyncStorage.setItem('FCM_TOKEN' , fcmToken)

          this.props.hitEnableNotification(this.state.Phonenumber)
        }
        else {
          // user doesn't have a device token yet
         this.props.hitSkipNotification(this.state)
          console.log('user doesnt have a device token yet');
        }
      });
  }

  functionGoback = () => {
    this.props.navigation.goBack();
  };

  functionShowDialog = (Name, Value) => {
  

    var dialog = this.state.Dialog;
    dialog[Name] = Value;
    this.setState({ ...this.state.Dialog, dialog });
  }

  functionSetMonth = value => {
    this.setState({ MM: value });
    var dialog = this.state.Dialog;
    dialog["MonthDialogVisible"] = false;
    this.setState({ ...this.state.Dialog, dialog });
  }

  functionSetDays = value => {
    this.setState({ DD: value });
    var dialog = this.state.Dialog;
    dialog["DaysDialogVisible"] = false;
    this.setState({ ...this.state.Dialog, dialog });
  }

  functionSetLanguage = value => {
    this.setState({ SelectedLanguage: value });
    var dialog = this.state.Dialog;
    dialog["LanguageVisible"] = false;
    this.setState({ ...this.state.Dialog, dialog });
  }

  functionRadioGroup = Name => {
    if (Name == "YES") {
      var mCheck = this.state.RadioGroup;
      mCheck["Yes"] = true;
      mCheck["No"] = false;
      this.setState({ ...this.state.RadioGroup, mCheck });
      this.setState({ currentCust: "Y" })
    } else {
      var mCheck = this.state.RadioGroup;
      mCheck["Yes"] = false;
      mCheck["No"] = true;
      this.setState({ ...this.state.RadioGroup, mCheck });
      this.setState({ currentCust: "N" })
    }
  }

  functionOpenPage = (value) => {
    this.props.navigation.navigate(value)
  }


  functionPasswordHide = (value) => {

    if (value) {
      this.setState({ PasswordVisible: false });
    }
    else {
      this.setState({ PasswordVisible: true });
    }


  }
  functionConPasswordHide = (value) => {

    if (value) {
      this.setState({ ConPassword: false });
    }
    else {
      this.setState({ ConPassword: true });
    }


  }


  functionSetfname = (value) => {
    this.setState({ Fname: value.text })
  }
  functionSetLname = (value) => {
    this.setState({ Lname: value.text })
  }
  functionSetphoneNumber = (value) => {
  
    var mCheck=value.text;
    var removeZero="";
   

    const {Phonenumber} = this.state;
    if(Phonenumber.length == 0)
    {
     if(mCheck == 0)
     {

     }
     else if(mCheck  == 1)
     {

     }
     else
     {
      this.setState({ Phonenumber: mCheck })
     }
      
    }
    else if (/[~`!#$%@\^&*+=\-\[\]\\';,/{}|\\":<>\?]/.test(mCheck) == true)
    {

    }
    else
    {
      this.setState({ Phonenumber: mCheck })
    }
    
  

  }
  functionSetemail = (value) => {
    this.setState({ Email: value.text })
  }

  functionSetpassword = (value) => {
    this.setState({ Password: value.text })
  }


  functionSubmit = async () => {

    const { Fname, Lname, Phonenumber, Email, Password, DD, MM ,SelectedLanguage} = this.state;
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (Fname == '') {
      alert('Please enter First name')

    }
    else if (Lname == '') {
      alert('Please enter Last name')
    }
    else if (Phonenumber == '') {
      alert('Please enter Phonenumber')
    }
    else if (Email == '') {
      alert('Please enter Email')
    }
    else if (reg.test(Email) === false) {
      alert('Please enter valid Email')
    }
    else if (Password == '') {
      alert('Please enter Password')
    }
    else if (Password.length < 8) {
      alert('Password should have a minimum of 8 letters with at least one upper case letter, one number and one special character.')
    }
    else if (/([A-Z]+)/g.test(Password) == false) {

      //alert('You don\'t have any capital letters in Password')
      alert('Password should have a minimum of 8 letters with at least one upper case letter, one number and one special character.')
    }
    else if (/([a-z]+)/g.test(Password) == false) {
      //alert('You don\'t have any lower letters in Password')
      alert('Password should have a minimum of 8 letters with at least one upper case letter, one number and one special character.')
    }
    else if (/([0-9]+)/g.test(Password) == false) {
      //alert('You don\'t have any number in Password')
      alert('Password should have a minimum of 8 letters with at least one upper case letter, one number and one special character.')
    }
    else if (/[~`!#$%@\^&*+=\-\[\]\\';,/{}|\\":<>\?]/.test(Password) == false) {
      // alert('You don\'t have any Special character in Password')
      alert('Password should have a minimum of 8 letters with at least one upper case letter, one number and one special character.')
    }
    else if(SelectedLanguage == 'Select Region')
    {
      alert('Please select Region')
    }
    else {
     this.props.hitCheckPhonenumber(this.state);
   
    }


  }

  functionSetOtp = (value) => {
    this.setState({ Otp: value.text })
  }
  functionVerifyOtp = () => {
    Keyboard.dismiss()
    const { Otp } = this.state;

    if (Otp == '') {
      alert('Please enter Otp')
    }
    else {

      this.props.hitOtpApi(this.state)
    }

  }
  functionSkipNotification = () => {

    this.props.hitSkipNotification(this.state);
  }

  functionEnableNotification = () => {

    this.checkPermission();
  }
  render() {
    const Modal = {
      Title: this.state.Title,
      Dialog: this.state.Dialog,
      MonthList: this.state.MonthList,
      MM: this.state.MM,
      DD: this.state.DD,
      DaysList: this.state.DaysList,
      LanguageList: this.state.LanguageList,
      SelectedLanguage: this.state.SelectedLanguage,
      RadioGroup: this.state.RadioGroup,
      PasswordVisible: this.state.PasswordVisible,
      ConPassword: this.state.ConPassword,

      Fname: this.state.Fname,
      Lname: this.state.Lname,
      Phonenumber: this.state.Phonenumber,
      Email: this.state.Email,
      Password: this.state.Password,
      Otp: this.state.Otp,
     
      //REDUX
      ShowOtptScreen: this.props.ShowOtp,
      Loader: this.props.RegisterLoader,
     
      Title: this.props.TitleText,
      LanguageList : this.props.Region,


      functionShowDialog: this.functionShowDialog,
      functionGoback: this.functionGoback,
      functionSetMonth: this.functionSetMonth,
      functionSetLanguage: this.functionSetLanguage,
      functionRadioGroup: this.functionRadioGroup,
      functionSetDays: this.functionSetDays,
      functionOpenPage: this.functionOpenPage,
      functionPasswordHide: this.functionPasswordHide,
      functionConPasswordHide: this.functionConPasswordHide,
      functionSubmit: this.functionSubmit,
      functionSetfname: this.functionSetfname,
      functionSetLname: this.functionSetLname,
      functionSetphoneNumber: this.functionSetphoneNumber,
      functionSetemail: this.functionSetemail,
      functionSetpassword: this.functionSetpassword,
      functionSetOtp: this.functionSetOtp,
      functionVerifyOtp: this.functionVerifyOtp,
      functionSkipNotification: this.functionSkipNotification,
      functionEnableNotification: this.functionEnableNotification,


    };
    return <NewUserRegister {...Modal} />;
  }
}



function MapTostate(state) {

  const { RegisterLoader, ShowOtp, EnableNotification, TitleText, Region } = state.loginReducer;
  return { RegisterLoader, ShowOtp, EnableNotification, TitleText ,Region};
}
export default connect(MapTostate, { hitSignupApi, hitOtpApi, hitSkipNotification,
   hitCheckPhonenumber,hitAddUserApi,hitEnableNotification })(NewUserRegisterContainer);
