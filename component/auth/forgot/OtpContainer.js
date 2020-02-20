import React, {Component} from 'react';
import ResetPassword from './ResetPassword';

export default class OtpContainer extends Component
{

    constructor(props)
    {
        super(props)
        this.state={
            Title: "Reset password",
            Otp:'',
            Password:'',
            Conpassword:'',
        }
    }
    functionGoback = () => {
        this.props.navigation.goBack();

       
      };
    render()
    {

        const Model={
            Title : this.state.Title,
            Otp: this.state.Otp,
            Password: this.state.Password,
            Conpassword: this.state.Conpassword,

            functionGoback : this.functionGoback,

        }
        return< ResetPassword {...Model} />
    }
}