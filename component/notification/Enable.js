import React, { } from 'react'
import { SafeAreaView, View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native'
import Styless from '../Common/Styless'
import Toolbar from '../Common/LoginToolbar'
import { Theme } from '../../config'
import LogoIcon from '../../../image/logo.png'

const Enable = (props) => {
  return (
    <SafeAreaView style={Styless.MainContainer}>
      <View style={Styless.ScrollContainer}>
        <Toolbar {...props} />
        <Image style={{ width: 180, height: 70, resizeMode: 'contain', alignSelf: 'center', marginTop: 30 }} source={LogoIcon} />
        <Text allowFontScaling={false} style={{ alignSelf: 'center', color: 'black', fontWeight: 'bold', marginTop: 50, fontSize: 16 }}>
          Stay Updated
        </Text>
        <Text allowFontScaling={false} style={{ textAlign: 'center', marginTop: 10, width: '80%', marginLeft: '10%', marginRight: '10%' }}>
          We will send you updates on your Rewards Program & Gift Cards.
        </Text>
        <View style={LocalStyle.Bottom_Container}>
          <TouchableOpacity style={LocalStyle.Enable_Container}>
            <Text allowFontScaling={false} style={{ color: 'white', fontWeight: 'bold' }}>
              Enable notifications
            </Text>
          </TouchableOpacity>
          <Text allowFontScaling={false} style={LocalStyle.Skip_Text}>
            Skip
          </Text>
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
    textDecorationLine: 'underline'
  },
  Bottom_Container: {
    position: 'absolute', bottom: 50, width: '100%', height: undefined,
    justifyContent: 'center', alignItems: 'center'
  }
})

export default Enable
