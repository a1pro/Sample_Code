import React, { Component } from 'react';
import { AsyncStorage, Alert, Share } from 'react-native';
import MessagesDetail from './MessagesDetail';
import { connect } from 'react-redux';
// import { GetSingleNotificationMessage } from '../../action';

class SeeMessagesDetailsContainer extends Component {

    constructor(props) {
        super(props)
        this.state = {
            Title: 'Message Details',
            NotificationId: '',
            NotificationTitleSee: '',
            NotificationMessage: '',
            NotificationImage: '',
            Loader : true,
        }

        this.props.navigation.addListener(
            'willFocus',
            payload => {
                var mNotificationId = this.props.navigation.getParam('NotificationId');
                var mNotificationTitleSee = this.props.navigation.getParam('NotificationTitleSee');
                var mNotificationMessage = this.props.navigation.getParam('NotificationMessage');
                var mNotificationImage = this.props.navigation.getParam('NotificationImage');
                // const data = {
                //     "id": mNotificationId,
                //     "title": mNotificationTitleSee,
                //     "message": mNotificationMessage,
                //     "image": mNotificationImage
                // }
                // alert(JSON.stringify(data));
                // this.props.GetSingleNotificationMessage(mNotificationId);
                this.setState({ NotificationId: mNotificationId })
                this.setState({ NotificationTitleSee: mNotificationTitleSee })
                this.setState({ NotificationMessage: mNotificationMessage })
                this.setState({ NotificationImage: mNotificationImage })
                setTimeout(() => {
                    this.setState({ Loader: false })
                }, 3000)
            }
        );
    }

    functionGoback = () => {
        this.props.navigation.goBack();
    }

    // updateLoader = (e) => {
    //     this.setState({ Loader: false })
    // }

    onShare = async (e) => {
        try {
            const result = await Share.share({
                title: e.Title,
                message: 'Item: '+e.NotificationMessage+'',
                url: e.NotificationImage ,
                subject: 'Notification share'
            });
    
            if (result.action === Share.sharedAction) {
                if (result.activityType) {
                // shared with activity type of result.activityType
                } else {
                // shared
                }
            } else if (result.action === Share.dismissedAction) {
                // dismissed
            }
        } catch (error) {
            alert(error.message);
        }
    };

    render() {
        const Model = {
            Title: this.state.Title,
            NotificationId: this.state.NotificationId,
            NotificationTitleSee: this.state.NotificationTitleSee,
            NotificationMessage: this.state.NotificationMessage,
            NotificationImage: this.state.NotificationImage,
            shareFunc: this.onShare,
            showShare: true,
            totalData: this.state,
            // REDUX
            ShowLoader : this.state.Loader,
            // updateLoader: this.updateLoader,
            // Response : this.props.Response,
            functionGoback : this.functionGoback,
        }

        return <MessagesDetail {...Model} />
    }
}


// function mapToStateProps(state) {
//   const { Loader, Response } = state.MessagesReducer;
  
//   return { Loader, Response };
// }

export default SeeMessagesDetailsContainer;
// connect(mapToStateProps, { GetSingleNotificationMessage })(SeeMessagesDetailsContainer);