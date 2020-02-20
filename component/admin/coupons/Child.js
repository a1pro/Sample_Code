
import React, { Component } from 'react';

import { StyleSheet, View, Text, } from 'react-native';

  class Child extends Component
{
  constructor()
  {
    super()
    this.state={
      val :0,
    }

  }

  componentWillReceiveProps(nextState){
  
  console.log('componentWillReceiveProps', nextState.val);
  
  }
  shouldComponentUpdate(nextProp, nextState){
        console.log('nextState', nextState);
        console.log('currentState', this.state)
        return ( this.state.val === nextState.val ? false :true)
      }
  
  render()
  {
      console.log('render');
      
    return(
      <View
      style={{marginTop:200}}
      >
        <Text>{this.props.item.couponsdesc1}</Text>
      </View>
    )
  }


}

export default Child;