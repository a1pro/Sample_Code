import React, { } from 'react'
import { View, Text, TextInput, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-navigation'
import { Theme } from '../../../config'
import Toolbar from '../../Common/LoginToolbar'
import Styless from '../../Common/Styless'
import ColorUserIcon from '../../../../image/coloruser.png'
import LogoIcon from '../../../../image/logo.png'
import PassIcon from "../../../../image/colorpas.png";
const ResetPassword = (props) => {


  console.log('props.PhoneNumber',props.PhoneNumber);
  
  return (
    <SafeAreaView forceInset={{ bottom: 'never' }} style={LocalStyle.MainContainer}>
      <Toolbar {...props} />
      <ScrollView style={Styless.ScrollContainer}>
        <View
          style={{ width: '90%', height: '100%', marginLeft: '5%', marginRight: '5%' }}
        >
          <Image style={LocalStyle.LogoImage} source={LogoIcon} />

          <Text
            allowFontScaling={false}
            style={{ marginTop: 0, alignSelf: 'center' }}
          >We have sent an OTP on your number!</Text>
          <Text
            allowFontScaling={false}
            style={{ alignSelf: 'center' }}
          >{props.PhoneNumber}</Text>

          <Text
            allowFontScaling={false}
          >OTP</Text>
          <View style={LocalStyle.FirstContainer}>
            <View style={LocalStyle.ImageContainer}>
              <Image style={{ width: 20, height: 20, resizeMode: 'contain' }} source={PassIcon} />
            </View>
            <View style={{ width: '85%', height: '100%' }}>
              <TextInput
                style={{ width: '100%', height: '100%' }}
                allowFontScaling={false}
                placeholder={"Please enter Otp"}
                autoCorrect={false}
                blurOnSubmit={false}
                keyboardType={'numeric'}

                value={props.Otp}
                onChangeText={(text) => props.functionSetOtp({ text })}

              />
            </View>
          </View>

          <Text
            allowFontScaling={false}
            style={{ fontSize: 18, color: 'black', marginTop: 20 }}
          >Password</Text>
          <View style={LocalStyle.FirstContainer}>
            <View style={LocalStyle.ImageContainer}>
              <Image style={{ width: 20, height: 20, resizeMode: 'contain' }} source={PassIcon} />
            </View>
            <View style={{ width: '85%', height: '100%' }}>
              <TextInput
                secureTextEntry={true}
                style={{ width: '100%', height: '100%' }}
                allowFontScaling={false}
                placeholder={"Please enter Password"}
                autoCorrect={false}
                blurOnSubmit={false}

                value={props.Password}
                onChangeText={(text) => props.functionSetPassword({ text })}

              />
            </View>
          </View>



          <TouchableOpacity
            onPress={() => props.functionResetSubmit('')}
            style={LocalStyle.SubmitContainer}>
            <Text allowFontScaling={false} style={{ color: Theme.TEXT_COLOR, fontSize: 18, fontWeight: 'bold' }}>
              Submit
          </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
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
    width: '100%',
    height: 50,
    marginLeft: '0%',
    marginRight: '0%',
    flexDirection: 'row',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 0
  },
  SubmitContainer: {
    width: 200,
    height: 40,
    backgroundColor: Theme.PRIMARY_COLOR,
    alignSelf: 'center',
    marginTop: 20, borderRadius: 5, justifyContent: 'center', alignItems: 'center'
  }
})

export default ResetPassword
