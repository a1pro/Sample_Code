import React, { Component } from 'react';
import { } from 'react-native';
import ResetPassword from './ResetPassword';
import {connect} from 'react-redux';
import { Auth } from 'aws-amplify'
import Toast from 'react-native-simple-toast';

 class ResetPasswordContainer extends Component {


    constructor(props) {
        super(props)

        this.state = {
            Title: "Reset Password",
            Otp: '',
            Password: '',
            PhoneNumber :'',
            EMAIL :'',
            Loader :false,
        }
    }
    functionSetOtp = (value) => {
        this.setState({ Otp: value.text })
    }
    functionSetPassword = (value) => {
        this.setState({ Password: value.text })
    }
    functionGoback = () => {
        this.props.navigation.goBack();


    };

    functionResetSubmit = async ()  => {
        const { Otp, Password,  } = this.state;

        if (Otp == '') {

            alert('Plaese enter Otp')
        }
        else if (Password == '') {
            alert('Plaese enter Password')
        }
        else if (Password.length < 8) {
            alert('Password should be Minimum 8 character')
        }
        else if (/([A-Z]+)/g.test(Password) == false) {

            alert('You don\'t have any capital letters in Password')
        }
        else if (/([a-z]+)/g.test(Password) == false) {
            alert('You don\'t have any lower letters in Password')
        }
        else if (/([0-9]+)/g.test(Password) == false) {
            alert('You don\'t have any number in Password')
        }
        else if (/[~`!#$%@\^&*+=\-\[\]\\';,/{}|\\":<>\?]/.test(Password) == false) {
            alert('You don\'t have any Special character in Password')
        }
        else
        {

            
            this.setState({Loader : true})
            try {
                await Auth.forgotPasswordSubmit(
                  this.props.Email.toLocaleLowerCase(),
                  Otp,
                  Password
                );
                this.setState({Loader : false})
                Toast.show('Password reset successfully! Please Login ');
                this.props.navigation.goBack();
              } 
              catch (e) 
              {
                alert(e.message);
                this.setState({Loader : false})
              }
        }


    }
    render() {


        const Model = {
            Title: this.state.Title,
            Otp: this.state.Otp,
            Password: this.state.Password,
            Loader : this.state.Loader,



            //REDUX

            PhoneNumber : this.props.Phone_Number,
           


            functionSetPassword: this.functionSetPassword,
            functionSetOtp: this.functionSetOtp,
            functionGoback : this.functionGoback,
            functionResetSubmit : this.functionResetSubmit,
        }
        return < ResetPassword {...Model} />
    }


}
function MapToStateProps(state) {
    const { Loader, Errorr,Phone_Number ,Email} = state.loginReducer;
  
   
  
    return { Loader, Errorr ,Phone_Number,Email};
  }
  
export default connect (MapToStateProps, null)(ResetPasswordContainer);