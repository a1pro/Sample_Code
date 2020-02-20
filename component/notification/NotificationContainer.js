import React,{Component} from 'react'
import { Share } from 'react-native'
import Notification from './Notification'
import {connect} from 'react-redux'
import NetworkApi from '../../network/NetworkApi'
import { GetMessagesApi, GetNotificationDelete } from '../../action'
// import RNFetchBlob from 'react-native-fetch-blob'

class NotificationContainer extends Component {

  constructor (props) {
    super(props)
    this.state = {
      Title: 'Notifications'
    }
  }

  componentDidMount() {
    this.props.GetMessagesApi();
  }

  functionGoback = () => {
    this.props.navigation.goBack();
  }

  functionOpenPage = (Value, itemData) => {
    this.props.navigation.navigate(Value, { NotificationId : itemData.notificationid, 
      NotificationTitleSee: itemData.title, NotificationMessage: itemData.message, NotificationImage: itemData.image });
  }

  functionPulltoRefresh = () => {
    this.props.GetMessagesApi();
  }

  deleteMessage = (itemData) => {
    this.props.GetNotificationDelete(itemData.notificationid)
  }

  deleteAllNotification = () => {
    this.props.GetNotificationDelete('userid')
  }

  // GetImage = (e) => {
  //   RNFetchBlob.fetch('GET', `${NetworkApi.IAMGE_BASE_URL}${e.image}`)
  //   .then(resp => {
  //     let base64image = resp.data;
  //     // alert(JSON.stringify(base64image));
  //     this.onShare('data:image/png;base64,' + base64image, e.message, e.title);
  //   })
  //   .catch(err => console.log(err));
  // }

  onShare = async (e) => {
    try {
      const result = await Share.share({
        title: e.title,
        message: 'Item: '+e.message+'',
        url: e.image ,
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

  render () {
    const Model = {
      Title: this.state.Title,
      functionGoback : this.functionGoback,
      functionOpenPage: this.functionOpenPage,
      functionPulltoRefresh: this.functionPulltoRefresh,
      deleteMessage: this.deleteMessage,
      shareFunc: this.onShare,
      deleteAllNotification: this.deleteAllNotification,
      Loader: this.props.Loader,
      Response: this.props.Response
    }
    return<Notification {...Model}/>
  }
}

function mapToStateProps(state) {
  const {Loader, Response}= state.MessagesReducer;
  // alert(JSON.stringify(Response));
  return {Loader,Response}
}

export default connect(mapToStateProps, { GetMessagesApi, GetNotificationDelete })(NotificationContainer);