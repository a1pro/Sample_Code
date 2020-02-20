import React, {} from 'react';
import { View, Dimensions, Text, StyleSheet, ActivityIndicator } from 'react-native';
import Styless from './Styless'
import {Theme} from '../../config';
const Loader =()=>{
    return(
        <View
      style={Styless.ScrollContainer}
      > 
      <View
      style={{marginTop :120}}
      />
      <ActivityIndicator size="large" color={Theme.PRIMARY_COLOR} />
      
      </View>
    )
}

export default Loader;