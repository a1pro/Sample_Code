import React, { Component } from 'react';
import ChangePassword from './ChangePassword';
import {AsyncStorage} from 'react-native';
import { Auth } from "aws-amplify";
import Toast from 'react-native-simple-toast';
 



export default class ChangePasswordContainer extends Component {

    constructor(props) {
        super(props)
        this.state = {
            Title: 'Change Password',
            OldPassword: '',
            NewPassword: '',
            ConPassword: '',
            OldPasswordVisible: true,
            NewPasswordVisible: true,
            ConPasswordVisible: true,
            Loader: false,
        }
    }

    functionGoback = () => {
        this.props.navigation.goBack();

    };

    functionOpenPage = value => {
        this.props.navigation.navigate(value);
    };



    functionSetOldpassword = (value) => {
        this.setState({ OldPassword: value.trim() })

    }
    functionSetNewpassword = (value) => {
        this.setState({ NewPassword: value.trim() })

    }
    functionSetConpassword = (value) => {
        this.setState({ ConPassword: value.trim() })

    }


    functionOldPasswordHide = (value) => {
        this.setState({ OldPasswordVisible: !value })

    }
    functionNewPasswordHide = (value) => {
        this.setState({ NewPasswordVisible: !value })

    }
    functionConPasswordHide = (value) => {
        this.setState({ ConPasswordVisible: !value })

    }
    functionSubmit = async () => {
        const { OldPassword, NewPassword, ConPassword } = this.state;


        if (OldPassword == '') {

            alert('Please enter Old Password')
        }
        else if (NewPassword == '') {
            alert('Please enter new Password')
        }
        else if (NewPassword.length < 8) {
            alert('NewPassword should be Minimum 8 character')
        }
        else if (/([A-Z]+)/g.test(NewPassword) == false) {

            alert('You don\'t have any capital letters in NewPassword')
        }
        else if (/([a-z]+)/g.test(NewPassword) == false) {
            alert('You don\'t have any lower letters in NewPassword')
        }
        else if (/([0-9]+)/g.test(NewPassword) == false) {
            alert('You don\'t have any number in NewPassword')
        }
        else if (/[~`!#$%@\^&*+=\-\[\]\\';,/{}|\\":<>\?]/.test(NewPassword) == false) {
            alert('You don\'t have any Special character in NewPassword')
        }
        else if (ConPassword == '') {
            alert('Please enter Confirm Password')
        }
        else if (NewPassword != ConPassword) {
            alert('New Password and Confirm password didnot match')
        }
        else
        {
            this.setState({Loader : true})


    try {
        const currentUser = await Auth.currentAuthenticatedUser();
        console.log('currentUser',currentUser);
        
        await Auth.changePassword(
          currentUser,
          this.state.OldPassword,
          this.state.NewPassword
        ).then((response)=>{
            console.log('response',response);
            Toast.show('Password Changed Successfully.Please Login');
            AsyncStorage.clear();
            Auth.signOut()
                .then((data) =>
                    console.log('data', data))
                .catch(err => console.log(err));
    
            this.props.navigation.popToTop();
            this.props.navigation.navigate('HomeAdmin');
            this.setState({Loader : false})
        }).catch((ERROR)=>{
            console.log('ERROR',ERROR);
            this.setState({Loader : false})
        });
  
      
      } catch (e) {
        this.setState({Loader : false})
        alert(e.message);
      
      }
        }

    }
    render() {

        const Model = {
            Title: this.state.Title,
            OldPassword: this.state.OldPassword,
            NewPassword: this.state.NewPassword,
            ConPassword: this.state.ConPassword,
            OldPasswordVisible: this.state.OldPasswordVisible,
            NewPasswordVisible: this.state.NewPasswordVisible,
            ConPasswordVisible: this.state.ConPasswordVisible,
            Loader : this.state.Loader,

            functionGoback: this.functionGoback,
            functionOpenPage: this.functionOpenPage,
            functionSubmit: this.functionSubmit,
            functionSetOldpassword: this.functionSetOldpassword,
            functionSetNewpassword: this.functionSetNewpassword,
            functionSetConpassword: this.functionSetConpassword,
            functionOldPasswordHide: this.functionOldPasswordHide,
            functionNewPasswordHide: this.functionNewPasswordHide,
            functionConPasswordHide: this.functionConPasswordHide,



        }
        return <ChangePassword {...Model} />
    }
}