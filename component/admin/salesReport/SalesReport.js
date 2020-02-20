import React,{} from 'react'
import { View, Dimensions, Text, StyleSheet, ActivityIndicator } from 'react-native'
import { SafeAreaView } from 'react-navigation'
import Styless from '../../Common/Styless'
import Toolbar from '../../Common/LoginToolbar'
import Header from './Header'
import SwiperLayout from './SwiperLayout'
import Loader from '../../Common/Loader'

const SalesReport = (props) => {

  return (
    <SafeAreaView forceInset={{ bottom: 'never'}} style={Styless.MainContainer}>
      <Toolbar {...props}/>
      <Header {...props}/>

        <SwiperLayout {...props}/>   
    </SafeAreaView>

  )
}

export default SalesReport
