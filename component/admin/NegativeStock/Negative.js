
import React, { } from 'react'
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet, Platform, Dimensions } from 'react-native'

import { SafeAreaView } from 'react-navigation'
import Styless from '../../Common/Styless';
import NetworkApi from '../../../network/NetworkApi';

import Toolbar from '../../Common/LoginToolbar';
import Uncheck from '../../../../image/Circle_Uncheck.png'
import CheckIcon from '../../../../image/Circle_Check.png'
import { Theme } from '../../../config'
import { SwipeableFlatList } from 'react-native-swipeable-flat-list'
import HoneyIcon from '../../../../image/honey.png'
import LocIcon from '../../../../image/loc_ic.png'
import Addicon from '../../../../image/addicon.png'
import NextIcon from '../../../../image/nextarrow.png';

import Loader from '../../Common/Loader';
import SwiperLayoutNegative from './SwiperLayoutNegative';
import HeaderNeg from './HeaderNeg'

const mTotalHegiht = Dimensions.get('window').height
console.log('mTotalHegiht', mTotalHegiht)

var mTitleFont = 16
var mNormalFont = 14
if (mTotalHegiht > 890) {
  mTitleFont = 18
  mNormalFont = 17
} else {
  mTitleFont = 16
  mNormalFont = 15
}


const Negative = (props) => {


  console.log('props.ShowLoader', props.List);


  // if (props.ShowLoader)
  //   return (
  //     <SafeAreaView forceInset={{ bottom: 'never' }} style={Styless.MainContainer}>
  //       <Toolbar {...props} />
  //       <View style={{ width: '100%', height: '95%', backgroundColor: 'white' }}>

  //         <Loader />
  //       </View>
  //     </SafeAreaView>
  //   )

  return (

    <SafeAreaView forceInset={{ bottom: 'never' }} style={Styless.MainContainer}>
      <Toolbar {...props} />
      <HeaderNeg {...props} />
      <SwiperLayoutNegative {...props}/>
    </SafeAreaView>
  )
}

export default Negative;
