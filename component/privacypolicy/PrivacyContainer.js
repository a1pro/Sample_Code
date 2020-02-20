import React, { Component } from 'react'
import Privacy from './Privacy'

export default class PrivacyContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      Title: 'Privacy Policy'
    }
  }
  functionGoback = () => {
    this.props.navigation.goBack();
  };
  render () {
    const Model = {
      Title: this.state.Title,

      functionGoback : this.functionGoback,
    }
    return <Privacy {...Model}/>
  }
}
