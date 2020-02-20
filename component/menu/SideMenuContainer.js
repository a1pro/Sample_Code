import React, { Component } from 'react';
import SideMenu from './SideMenu';
import MenuModel from '../../model/menu/MenuModel';
import LoginMenu from '../../model/menu/LoginMenu';
import ManagerMenu from '../../model/menu/ManagerMenu';
import { AsyncStorage } from 'react-native';
import { Alert } from 'react-native';
import { Auth } from 'aws-amplify';

export default class SideMenuContainer extends Component {

    constructor(props) {
        super(props)

        this.functionLogout = this.functionLogout.bind(this);
        this.state = {
            List: [...MenuModel],
        }

        this.props.navigation.addListener(
            'willFocus',
            payload => {
                AsyncStorage.getItem('USERROLE').then((value) => {

                 
                    if (value == null) {

                    }
                    else if (value == 'Customer') {
                        this.setState({ List: [...LoginMenu] });
                    }
                    else if (value == 'Owner') {
                        this.setState({ List: [...LoginMenu] });
                    }
                    else if (value == 'Manager') {
                        this.setState({ List: [...ManagerMenu] });
                    }
                    else if (value == 'Employee') {
                        this.setState({ List: [...ManagerMenu] });
                    }

                }).catch((ERROR) => {
                    console.log('ERROR', ERROR);

                })


            })
    }

    functionOpenPage = (value) => {


        console.log('value',value);
        
        
        if (value == 'HOME') 
        {
            this.props.navigation.closeDrawer();
        }
        else if(value == 'MyRewards')
        {
            AsyncStorage.getItem('USER_ID').then((value)=>{

                if(value ==null)
                {
                    this.props.navigation.closeDrawer();
                    this.props.navigation.navigate('Login');
                }
                else
                {
                    this.props.navigation.closeDrawer();
                   this.props.navigation.navigate('MyRewards');  
                }
            })
        }
        else if (value == 'Logout') {
            this.props.navigation.closeDrawer();
            Alert.alert(
                '',
                'Are you sure? you want to Logout',
                [
                    {
                        text: 'Cancel',
                        onPress: () => console.log('Cancel Pressed'),
                        style: 'cancel',
                    },
                    { text: 'Yes', onPress: () => this.functionLogout() },
                ],
                { cancelable: false },
            );
        }
        else if(value == 'Notification')
        {
            AsyncStorage.getItem('USER_ID').then((value)=>{

                if(value ==null)
                {
                    this.props.navigation.closeDrawer();
                    this.props.navigation.navigate('Login');
                }
                else
                {
                    this.props.navigation.closeDrawer();
                   this.props.navigation.navigate('Notification');  
                }
            })
        }
        else if(value == 'MyList')
        {
            AsyncStorage.getItem('USER_ID').then((value)=>{

                if(value ==null)
                {
                    this.props.navigation.closeDrawer();
                    this.props.navigation.navigate('Login');
                }
                else
                {
                    this.props.navigation.closeDrawer();
                   this.props.navigation.navigate('MyList');  
                }
            })
        }
        else if(value == 'MyAccount')
        {
            AsyncStorage.getItem('USER_ID').then((value)=>{

                if(value ==null)
                {
                    this.props.navigation.closeDrawer();
                    this.props.navigation.navigate('Login');
                }
                else
                {
                    this.props.navigation.closeDrawer();
                   this.props.navigation.navigate('MyAccount');  
                }
            })
        }
        
        else {

            this.props.navigation.closeDrawer();
            this.props.navigation.navigate(value);
        }

    }


    functionLogout = () => {
        console.log('functionLogout');
        AsyncStorage.clear();
        Auth.signOut()
            .then((data) =>
                console.log('data', data))
            .catch(err => console.log(err));

        this.props.navigation.popToTop();
        this.props.navigation.navigate('HomeAdmin');
    }

    functionClose = () => {
        this.props.navigation.closeDrawer();
    }
    render() {


        const Model = {
            List: this.state.List,


            functionOpenPage: this.functionOpenPage,
            functionClose: this.functionClose,
        }

        return <SideMenu {...Model} />
    }
}