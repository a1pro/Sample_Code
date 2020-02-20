import React,{} from 'react'
import { View, Text, ScrollView, TextInput ,StyleSheet,} from 'react-native'
import { SafeAreaView } from 'react-navigation'
import Styless from '../Common/Styless'
import Toolbar from '../Common/LoginToolbar'
import {Button} from '../controls'
import {Theme} from '../../config';
import Layout6 from './Layout6';


const ContactUs = (props) => {
  return (
    <SafeAreaView forceInset={{ bottom: 'never'}} style={Styless.MainContainer}>
      <Toolbar {...props}/>
      <ScrollView style={Styless.ScrollContainer}>
      

    <Layout6 {...props}/>
       
      </ScrollView>
    </SafeAreaView>
  )
}
const LocalStyle = StyleSheet.create({
  EditTextConatiner: {
    width: "100%",
    height: 50,
    borderBottomColor: "#757575",
    borderBottomWidth: 0.5,
    justifyContent: "center",
    alignItems: "flex-start",
    marginTop: 5
  }
});
export default ContactUs
