import React, {Component} from 'react';
import {View, Text, } from 'react-native';
import Snack from './Snack';
import {connect} from 'react-redux';
import {GetSnackApi, HItSnackApi} from '../../../action';


 class SnackContainer extends Component
{

    constructor(props)
    {
        super(props)
        this.state={
            Title: 'Snacks Log',
            ShowLoader: true,
            List:[],
        }

    }


    componentWillMount()
    {

        console.log('componentWillMount');
        
      this.props.GetSnackApi();
   
    }
    functionGoback = () => {
        this.props.navigation.goBack();
      };
    functionOpenPage=(SnackID, StoreID, Name)=>{
       this.props.HItSnackApi(SnackID, StoreID, Name, this);
    }
    render()
    {

        const Model ={
            Title : this.state.Title,


            //REDUX
            ShowLoader : this.props.Loader,
            List : this.props.Respone,

            functionOpenPage : this.functionOpenPage,
            functionGoback : this.functionGoback,
        }
        return< Snack{...Model}/>
    }
}


function mapToStateProps(state)
{

    const {Loader, Errorr, Respone, }= state.SnackReducers;
    return{Loader, Errorr, Respone, }
}

export default connect(mapToStateProps, {GetSnackApi, HItSnackApi})(SnackContainer);