import React,{} from 'react'
import { View, Text, FlatList, Image , StyleSheet, Dimensions, ScrollView} from 'react-native'
import { SafeAreaView } from 'react-navigation'

import Styless from '../../Common/Styless'
import Toolbar from '../../Common/LoginToolbar'
import Tab from './Tab';
import Loader from '../../Common/Loader';

import AllCoupon from './AllCoupon';
import MyCoupon from './MyCoupon';

import Child from './Child';

const Coupons = (props) => {


 
  if (props.ShowLoader) {
    return (
      <SafeAreaView forceInset={{ bottom: 'never'}} style={Styless.MainContainer}>
        <Toolbar {...props}/>
        <Tab {...props}/>
        <View style={Styless.ScrollContainer}>
          <Loader />
        </View>
      </SafeAreaView>
    )
  }
  return (
    <SafeAreaView forceInset={{ bottom: 'never'}} style={Styless.MainContainer}>
      <Toolbar {...props}/>
      <Tab {...props}/>
      <View style={Styless.ScrollContainer}>
     

     {props.AllCoupon == true ? <AllCoupon {...props}/> : <MyCoupon {...props}/>}   
      </View>
    </SafeAreaView>
  )
}



export default Coupons
