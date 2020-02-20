import React, { Component } from 'react'
import Enable from './Enable'

export default class NotificationEnableContainer extends Component {

  constructor (props) {
    super(props)
    this.state = {
      Title: 'Notifications'
    }
  }


  functionEnableNotification=()=>{
    this.props.navigation.navigate('Notification');
  }
  functionSkipNotification=()=>{
    this.props.navigation.navigate('HomeAdmin');
  }
  render () {
    const Model = {
      Title: this.state.Title,

      functionEnableNotification : this.functionEnableNotification,
      functionSkipNotification : this.functionSkipNotification,

    }
    return <Enable {...Model} />
  }
}
