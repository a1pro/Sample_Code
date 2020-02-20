import React, { Component } from 'react';
import Otp from './Otp';
import {Keyboard, AsyncStorage} from 'react-native';
import { connect } from 'react-redux';
import { hitOtpApi} from '../../action';

 class OtpContainer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            Title: 'OTP',
            Otp : '',
            Email: '',
        }
    }

    functionGoback = () => {
        this.props.navigation.goBack();
    };
    functionSetOtp = (value) => {
        this.setState({ Otp: value.text })
    }
    functionVerifyOtp = async () => {
        Keyboard.dismiss()
       await AsyncStorage.getItem('EMAIL').then((value)=>{

        this.setState({Email : value})
        })
        const { Otp ,Email} = this.state;

    
        if (Otp == '') {
          alert('Please enter Otp')
        }
        else {
    
          this.props.hitOtpApi(this.state)
        }
    
      }
    render() {

        const Model = {
            Title: this.state.Title,
            Otp : this.state.Otp,

            functionGoback: this.functionGoback,
            functionSetOtp: this.functionSetOtp,
            functionVerifyOtp : this.functionVerifyOtp,

        }
        return <Otp {...Model} />
    }


}

export default connect (null, {hitOtpApi})(OtpContainer)
