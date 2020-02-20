import React, { } from 'react'
import { SafeAreaView, View,  Text, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native'
import {Image} from 'react-native-elements';
import Styless from '../../Common/Styless'
import Toolbar from '../../Common/LoginToolbar'
import { Theme } from '../../../config'
import LogoIcon from '../../../../image/logo.png';
import NotificationLogo from '../../../../image/notificationLogo2.png';
import Loader from '../../Common/Loader';


const EnableNotification = (props) => {

  if(props.ShowLoader)
  return(
    <SafeAreaView style={Styless.MainContainer}>
    <View style={Styless.ScrollContainer}>
      <Toolbar {...props} />

      <Loader />

      </View>
      </SafeAreaView>
  )
  return (
    <SafeAreaView style={Styless.MainContainer}>
      <View style={Styless.ScrollContainer}>
        <Toolbar {...props} />
        <Image style={{ width: 180, height: 180, resizeMode: 'contain', alignSelf: 'center', marginTop: 30 }}
         PlaceholderContent={<ActivityIndicator />} 
        source={NotificationLogo} />
        <Text allowFontScaling={false} style={{ alignSelf: 'center', color: 'black', fontWeight: 'bold', marginTop: 20, fontSize: 16 }}>
          Stay Updated
        </Text>
        <Text allowFontScaling={false} style={{fontSize:16 ,textAlign: 'center', marginTop: 10, width: '80%', marginLeft: '10%', marginRight: '10%' }}>
        <Text allowFontScaling={false} style={{color :'black', fontWeight:'bold'}} >Enable Notifications</Text>  for accessing<Text allowFontScaling={false} style={{color :'black', fontWeight:'bold'}} >{'\n'} My Rewards/My Purchases/My Lists</Text>
        </Text>
        <Text allowFontScaling={false} style={{fontSize:16 ,textAlign: 'center', marginTop: 10, width: '80%', marginLeft: '10%', marginRight: '10%' }}>
          We will send you updates on your  <Text allowFontScaling={false} style={{color :'black', fontWeight:'bold'}} > Rewards Program & Gift Cards.</Text>
        </Text>
        <Text allowFontScaling={false} style={{ fontSize:16,textAlign: 'center', marginTop: 10, width: '80%', marginLeft: '10%', marginRight: '10%' }}>
        To <Text allowFontScaling={false} style={{color :'black', fontWeight:'bold'}}>Enable/Disable </Text> notifications go to My Account/Notification Settings
        </Text>
        <View style={LocalStyle.Bottom_Container}>
          <TouchableOpacity 
          onPress={()=>props.functionEnableNotification('')}
          style={LocalStyle.Enable_Container}>
            <Text allowFontScaling={false} style={{ color: 'white', fontWeight: 'bold', fontSize:17 }}>
              Enable Notifications
            </Text>
          </TouchableOpacity>
          {/* <TouchableOpacity
          onPress={()=>props.functionSkipNotification('')}
          >
          <Text allowFontScaling={false} 
          style={LocalStyle.Skip_Text}>
            Skip
          </Text>
          </TouchableOpacity> */}
        </View>
      </View> 
    </SafeAreaView>

  )
}

const LocalStyle = StyleSheet.create({
  Enable_Container: {
    width: '80%',
    height: 45,
    marginLeft: '10%',
    marginRight: '10%',
    backgroundColor: Theme.PRIMARY_COLOR,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10
  },
  Skip_Text: {
    color: Theme.PRIMARY_COLOR,
    marginTop: 20,
    textDecorationLine: 'underline',
    fontSize:17,
  },
  Bottom_Container: {
    position: 'absolute', bottom: 50, width: '100%', height: undefined,
    justifyContent: 'center', alignItems: 'center'
  }
})

export default EnableNotification
