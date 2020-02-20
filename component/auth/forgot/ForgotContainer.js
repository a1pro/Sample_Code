import React, { Component } from 'react';
import Forgot from './Forgot';
import { Auth } from 'aws-amplify'
import Toast from 'react-native-simple-toast';

export default class ForgotContainer extends Component {

    constructor(props) {
        super(props)
        this.state = {
            Title: "Forgot Password",
            Email: '',
            ErrorVisible: false,
            Loader: false,
            PhoneNumber: '',
            ResetPageShow: false,

            Otp: '',
            Password: '',
            Conpassword: '',
        }
    }
    functionGoback = () => {
        this.props.navigation.goBack();


    };

    functionSetValue = (Value) => {

        if (Value == "") {
            this.setState({ Email: '', ErrorVisible: false })
        }
        else {
            this.setState({ Email: Value, ErrorVisible: false })
        }

    }



    functionValidation = () => {

        const { Email } = this.state;
        console.log('this.state.Email', Email);
        if (Email == "") {
            this.setState({ ErrorVisible: true });
        }
        else {

            this.setState({ Loader: true })
            Auth.forgotPassword(Email.toLocaleLowerCase())
                .then((data) => {
                   
                   var result = data.CodeDeliveryDetails;
                   var number = result.Destination;
                   this.setState({ Loader: false, PhoneNumber: number, ResetPageShow: true , Title :'Reset Password'})

                    console.log(data)
                })
                .catch((ERROR) => {
                    this.setState({ Loader: false })
                    console.log('ERROR', ERROR);
                    alert(ERROR.message)

                })
        }


    }


    functionSetOtp = (value) => {


        this.setState({ Otp: value.text })
    }
    functionSetPassword = (value) => {
        this.setState({ Password: value.text })
    }
    functionSetconpassword = (value) => {
        this.setState({ Conpassword: value.text })
    }


    functionResetSubmit = async ()  => {
        const { Otp, Password, Email } = this.state;

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
            try {
                await Auth.forgotPasswordSubmit(
                  Email.toLocaleLowerCase(),
                  Otp,
                  Password
                );
                this.setState({ ResetPageShow: false , Title :'Forgot Password' });
                Toast.show('Password reset successfully! Please Login ');
                this.props.navigation.goBack();
              } 
              catch (e) 
              {
                alert(e.message);
                this.setState({ isConfirming: false });
              }
        }


    }
    render() {

        const Model = {
            Title: this.state.Title,
            Email: this.state.Email,
            ErrorVisible: this.state.ErrorVisible,
            Loader: this.state.Loader,
            ResetPageShow: this.state.ResetPageShow,
            PhoneNumber : this.state.PhoneNumber,


            Otp: this.state.Otp,
            Password: this.state.Password,
            Conpassword: this.state.Conpassword,

            functionSetValue: this.functionSetValue,
            functionGoback: this.functionGoback,
            functionValidation: this.functionValidation,
            functionSetOtp: this.functionSetOtp,
            functionSetPassword: this.functionSetPassword,
            functionSetconpassword: this.functionSetconpassword,
            functionResetSubmit: this.functionResetSubmit,

        }
        return < Forgot {...Model} />
    }
}