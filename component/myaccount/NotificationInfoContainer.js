import React, {Component} from 'react';
import NotificationInfo from './NotificationInfo';
import { connect } from 'react-redux';
import { GetNotificationApi, updateNotificationApi } from '../../action';
import axios from 'axios';
import NetworkApi from '../../network/NetworkApi';
import Constant from '../../constant/Constant';
import {AsyncStorage} from 'react-native';

class NotificationInfoContainer extends Component {
    constructor(props) {
        super(props)
        this.state={
            Title:'Notification Settings',
            Produce: props.Response.Produce,
            Sales: props.Response.Sales,
            Coupons: props.Response.Coupons,
            Food: props.Response.Food,
            Rewards: props.Response.Rewards,
            Store: props.Response.Store,
            Notification : true,
        }
    }

    componentDidMount() {
        this.props.GetNotificationApi();
    }

    functionGoback = () => {
        this.props.navigation.goBack();
    }
    
    functionOpenPage = value => {
        this.props.navigation.navigate(value);
    }

    functionToggle = (Name,  Value) => {
            let type = null;
            let updateData = null;
            if(Name == 'Food') type = 'Food Specials';
            if(Name == 'Produce') type = 'Produce Arrivals';
            if(Name == 'Sales') type = 'Sales Specials';
            if(Name == 'Store') type = 'Store News';
            if(Name == 'Coupons') type = 'Coupons';
            if(Name == 'Rewards') type = 'Rewards';
            if(!Value) {
                updateData = "N"; 
            } 
            else { 
                updateData = "Y"; 
            }
            const data = {
                type,
                updateData
            }
            this.props.updateNotificationApi(data);
            
    }



    render() {
        const Model = {
            Title : this.state.Title,
            Produce: this.state.Produce,
            Sales: this.state.Sales,
            Coupons: this.state.Coupons,
            Food: this.state.Food,
            Rewards: this.state.Rewards,
            Store: this.state.Store,
            Notification : true,
            functionGoback : this.functionGoback,
            functionToggle : this.functionToggle,
            functionOpenPage : this.functionOpenPage,
            RealToggle: this.props.Response,
            Loader: this.props.Loader

        }
        return (
            <NotificationInfo {...Model}/>
        )
        
    }
}

function mapToStateProps(state) {
    const { Loader, Response } = state.NotificationReducer;
  
    return { Loader, Response }
}
  
export default connect(mapToStateProps, { GetNotificationApi, updateNotificationApi })(NotificationInfoContainer)