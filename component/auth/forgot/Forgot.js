import React, {} from 'react'
import { View, Text, TextInput, Image, TouchableOpacity, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-navigation'
import { Theme } from '../../../config'
import Toolbar from '../../Common/LoginToolbar'
import Styless from '../../Common/Styless'
import ColorUserIcon from '../../../../image/coloruser.png'
import LogoIcon from '../../../../image/logo.png'

import Loader from '../../Common/Loader';
import ResetPassword from './ResetPassword';

const Forgot = (props) => {

  if(props.ResetPageShow)
  return (
    <ResetPassword {...props}/>
  )


  return (
    <SafeAreaView forceInset={{ bottom: 'never'}} style={LocalStyle.MainContainer}>
      <Toolbar {...props}/>
      <View style={Styless.ScrollContainer}>
        <Image style={LocalStyle.LogoImage} source={LogoIcon} />
        <View style={LocalStyle.FirstContainer}>
          <View style={LocalStyle.ImageContainer}>
            <Image style={{ width: 20, height: 20, resizeMode: 'contain' }} source={ColorUserIcon} />
          </View>
          <View style={{width: '85%', height: '100%'}}>
            <TextInput
              style={{width: '100%', height: '100%'}}
              allowFontScaling={false}
              placeholder={"Email "}
              autoCorrect={false}
              blurOnSubmit={false} 
              
              onChangeText={(Value) => props.functionSetValue(Value)}
              value={props.Email}
              />
          </View>
        </View>

        {props.ErrorVisible && <View>
          <Text
          style={{alignSelf:'center', color:'red'}}
          >
            Please enter Email
          </Text>

        </View>}

        {props.Loader == true ? <Loader /> :
        <TouchableOpacity 
       onPress={() => { props.functionValidation('')}}
        style={LocalStyle.SubmitContainer}>
          <Text allowFontScaling={false} style={{color: Theme.TEXT_COLOR,  fontSize: 18, fontWeight: 'bold'}}>
            Submit
          </Text>
        </TouchableOpacity>}
      </View>
    </SafeAreaView>
  )
}

const LocalStyle = StyleSheet.create({
  MainContainer: {
    width: '100%',
    height: '100%',
    flex: 1, backgroundColor: Theme.PRIMARY_COLOR
  },
  ImageContainer: {
    width: '15%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  LogoImage: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    alignSelf: 'center'
  },
  EmailContainer: {
    paddingLeft: 8,
    width: '96%',
    height: 50,
    marginLeft: '2%',
    marginRight: '2%',
    color: 'black'
  },
  FirstContainer: {
    width: '90%',
    height: 50,
    marginLeft: '5%',
    marginRight: '5%',
    flexDirection: 'row',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 0
  },
  SubmitContainer: {
    width: 200, height: 40, backgroundColor: Theme.PRIMARY_COLOR, alignSelf: 'center',
    marginTop: 20, borderRadius: 5, justifyContent: 'center', alignItems: 'center'
  }
})

export default Forgot
