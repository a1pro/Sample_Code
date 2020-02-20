import React, {} from 'react'
import { View, Text, ScrollView, TouchableOpacity, Image, Dimensions } from 'react-native'
import { SafeAreaView } from 'react-navigation'
import Toolbar from '../Common/LoginToolbar'
import Styless from '../Common/Styless'
import { Theme } from '../../config'

import MailIcon from '../../../image/about_mail.png';
import PhoneIcon from '../../../image/about_phn.png';
import Layout6 from './Layout6';
import Layout10 from './Layout10';

const About = (props) => {

    const mTotalWidth = Dimensions.get("window").width;
    const mTotalHegiht = Dimensions.get('window').height;
  
    console.log('mTotalWidth', mTotalWidth);
    console.log('mTotalHegiht', mTotalHegiht);

  return (
    <SafeAreaView forceInset={{ bottom: 'never'}} style={Styless.MainContainer}>
      <Toolbar {...props}/>
      <View 
      style={Styless.ScrollContainer}>
        <Layout6 {...props}/>
        {/* {mTotalHegiht < 670 ? <Layout6 {...props}/> :<Layout10 {...props}/>} */}
       
      </View>
    </SafeAreaView>
  )
}

export default About
