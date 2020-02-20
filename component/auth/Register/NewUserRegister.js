import React from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
 Dimensions
} from "react-native";
import {SafeAreaView} from 'react-navigation';


import Toolbar from "../../Common/LoginToolbar";
import MonthPicker from "../../../picker/MonthPicker";
import DaysPicker from "../../../picker/DaysPicker";
import LanguagePicker from "../../../picker/LanguagePicker";
import RadioGroup from './RadioGroup';
import BottomBanner from "../../../../image/bottombanner.png";
import Loader from '../../Common/Loader';

import Layout10 from './Layout10';
import Layout6 from './Layout6';
import Otp from './Otp';
import EnableNotification from './EnableNotification'

const NewUserRegister = props => {

  const mTotalWidth = Dimensions.get("window").width;
  const mTotalHegiht = Dimensions.get('window').height;
  
  

  if(props.ShowOtptScreen)
  return(
    <SafeAreaView
    forceInset={{ bottom: 'never'}}
      style={{
        width: "100%",
        height: "100%",
        flex: 1,
        backgroundColor: "#F79942"
      }}>
      <Toolbar {...props} />
       <Otp {...props}/> 
      </SafeAreaView>
  )
  if(props.ShowEnableNotification)
  {
    return(
         <EnableNotification {...props}/> 
    )
  }
  if(props.Loader)
  return(
    <SafeAreaView
    forceInset={{ bottom: 'never'}}
      style={{
        width: "100%",
        height: "100%",
        flex: 1,
        backgroundColor: "#F79942"
      }}>
      <Toolbar {...props} />
      <Loader />
      </SafeAreaView>
  )

  return (
    <SafeAreaView
    forceInset={{ bottom: 'never'}}
      style={{
        width: "100%",
        height: "100%",
        flex: 1,
        backgroundColor: "#F79942"
      }}>
      <Toolbar {...props} />
        <MonthPicker {...props} />
        <DaysPicker {...props} />
        <LanguagePicker {...props} />

      
      {mTotalHegiht < 800 ? <Layout6 {...props}/> :<Layout10 {...props}/>}  
    </SafeAreaView>
  );
};

export default NewUserRegister;
