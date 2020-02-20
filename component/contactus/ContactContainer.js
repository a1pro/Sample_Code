import React,{Component} from 'react';
import ContactUs from './ContactUs';
import {Share, Button} from 'react-native'

export default class ContactContainer extends Component {
    constructor (props) {
        super(props)
        this.state = {
          Title: 'Contact Us'
        }
    }

    onShare = async () => {
      try {
        const result = await Share.share({
          message:
            'React Native | A framework for building native apps using React',
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

      functionGoback = () => {
        this.props.navigation.goBack();
      };

      emailSent = (e) => {
        
      }
      render () {
        const Model = {
          Title: this.state.Title,
          onShare: this.onShare,
          functionGoback : this.functionGoback,
        }

        return<ContactUs {...Model}/>
}
}