import React, { } from 'react'
import { View, Dimensions, FlatList, Image, TouchableOpacity, Platform, Text, StyleSheet, ScrollView } from 'react-native'
import Styless from '../../Common/Styless'
import { Theme } from '../../../config'
import Swiper from 'react-native-swiper'
import Loader from '../../Common/Loader'
import NegativeList from './NegativeList'
import ZeroMovementList from './ZeroMovementList';

const SwiperLayoutNegative = (props) => {

  var mScroll = true;
  const mTotalHegiht = Dimensions.get('window').height;

  // if (mTotalHegiht < 800) {
  //   mScroll = true;
  // }
  // else {
  //   mScroll = false;
  // }

  return (
    <Swiper
      style={{ backgroundColor: 'white', marginTop: 0 }}
      showsPagination={false}
      autoplay={false}
      loop={false}
      onIndexChanged={(Index) => props.functionChangeIndexNeg(Index)}>

      {props.ShowLoader == true ? <Loader /> :

        <ScrollView style={LocalStyle.Container}
          scrollEnabled={mScroll}
        >
            <NegativeList {...props}/>
        </ScrollView>}

      {props.ShowLoader == true ? <Loader /> :
        <ScrollView style={LocalStyle.Container}
          scrollEnabled={mScroll}
        >
          <ZeroMovementList {...props}/>
        </ScrollView>}
    </Swiper>

  )
}


const LocalStyle = StyleSheet.create({
  circle: {
    width: 20,
    height: 20,
    borderRadius: 20 / 2,
    backgroundColor: 'red'
  },
  TitleLabel: {
    fontSize: 17, alignSelf: 'center', marginTop: 5, fontWeight: 'bold'
  },
  Container: {
    width: '96%', height: '100%', marginLeft: '2%', marginRight: '2%'
  },
  MainBox: {
    width: '25%', height: '100%',
    borderWidth: 0.5,
    borderColor: Theme.PRIMARY_COLOR,
    justifyContent: 'center',
    alignItems: 'center'
  },
  BlankBox: {
    width: '20%', height: '100%',
    borderWidth: 0.5,
    borderColor: Theme.PRIMARY_COLOR,
    justifyContent: 'center',
    alignItems: 'center'
  },
  PmtBox: {
    width: '31%', height: '100%',
    borderWidth: 0.5,
    borderColor: Theme.PRIMARY_COLOR,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default SwiperLayoutNegative;