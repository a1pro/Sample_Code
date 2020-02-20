import React, { Component } from 'react'
import TermsAndCondition from './TermsAndCondition'

export default class TermsAndConditionScreen extends Component {
  constructor (props) {
    super(props)
    this.state = {
      Title: 'Terms & Conditions'
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
    return <TermsAndCondition {...Model}/>
  }
}
