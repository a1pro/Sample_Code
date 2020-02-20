import React, { } from 'react'
import { View, Text, ScrollView, TouchableOpacity, Image, Dimensions, TextInput, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-navigation'
import Toolbar from '../Common/LoginToolbar'
import Styless from '../Common/Styless'
import { Theme } from '../../config'
import BirthDate from './BirthDate'
import { Button } from '../controls'

import RightbackIcon from '../../../image/rightback.png'

import Header from './Header';
const MyAccount = (props) => {

  var mTotalWidth = Dimensions.get('window').width
  var mTotalWidth = mTotalWidth / 2 - 50

  return (
    <SafeAreaView forceInset={{ bottom: 'never' }} style={Styless.MainContainer}>
      <Toolbar {...props} />
      <View style={Styless.ScrollContainer}>
        <Header {...props} />
        <TouchableOpacity
          onPress={() => props.functionOpenPage('AccountInfo')}
          style={{ width: '100%', height: 60, flexDirection: 'row' }}
        >
          <View
            style={{ width: '90%', height: '100%', justifyContent: 'center', alignItems: 'flex-start' }}
          >
            <Text
              allowFontScaling={false}
              style={{ color: 'black', fontSize: 18, fontWeight: 'bold', paddingLeft: 10 }}
            >
              My Account Info
      </Text>
          </View>
          <View
            style={{ width: '10%', height: '100%', justifyContent: 'center', alignItems: 'center' }}
          >
            <Image
              style={{ width: 25, height: 25, resizeMode: 'contain', }}
              source={RightbackIcon}
            />

          </View>
        </TouchableOpacity>
        <View style={Styless.Line} />


        <TouchableOpacity
          onPress={() => props.functionOpenPage('ChangePassword')}
          style={{ width: '100%', height: 60, flexDirection: 'row' }}
        >
          <View
            style={{ width: '90%', height: '100%', justifyContent: 'center', alignItems: 'flex-start' }}
          >
            <Text
              allowFontScaling={false}
              style={{ color: 'black', fontSize: 18, fontWeight: 'bold', paddingLeft: 10 }}
            >
              Change Password
      </Text>
          </View>
          <View
            style={{ width: '10%', height: '100%', justifyContent: 'center', alignItems: 'center' }}
          >
            <Image
              style={{ width: 25, height: 25, resizeMode: 'contain', }}
              source={RightbackIcon}
            />

          </View>
        </TouchableOpacity>
        <View style={Styless.Line} />

        <TouchableOpacity
          onPress={() => props.functionOpenPage('NotificationInfo')}

          style={{ width: '100%', height: 60, flexDirection: 'row' }}
        >
          <View
            style={{ width: '90%', height: '100%', justifyContent: 'center', alignItems: 'flex-start' }}
          >
            <Text
              allowFontScaling={false}
              style={{ color: 'black', fontSize: 18, fontWeight: 'bold', paddingLeft: 10 }}
            >
              Notification Settings
      </Text>
          </View>
          <View
            style={{ width: '10%', height: '100%', justifyContent: 'center', alignItems: 'center' }}
          >
            <Image
              style={{ width: 25, height: 25, resizeMode: 'contain', }}
              source={RightbackIcon}
            />

          </View>



        </TouchableOpacity>
        <View style={Styless.Line} />

        <TouchableOpacity
          onPress={() => props.functionOpenPage('ProductNotification')}
          style={{ width: '100%', height: 60, flexDirection: 'row' }}
        >
          <View
            style={{ width: '90%', height: '100%', justifyContent: 'center', alignItems: 'flex-start' }}
          >
            <Text
              allowFontScaling={false}
              style={{ color: 'black', fontSize: 18, fontWeight: 'bold', paddingLeft: 10 }}
            >
              Product Reminders
      </Text>
          </View>
          <View
            style={{ width: '10%', height: '100%', justifyContent: 'center', alignItems: 'center' }}
          >
            <Image
              style={{ width: 25, height: 25, resizeMode: 'contain', }}
              source={RightbackIcon}
            />

          </View>



        </TouchableOpacity>
        <View style={Styless.Line} />
        

      

        {/* <View style={{width: '80%', height: '100%', marginLeft: '10%', marginRight: '10%',}}>
                                          <View style={LocalStyle.EditTextConatiner}>
                                            <TextInput
                                              autoCorrect={false}
                                              multiline={false}
                                              blurOnSubmit={false}
                                              allowFontScaling={false}
                                              placeholder='First Name'
                                              ref={(input) => this.lastName = input}
                                              onSubmitEditing={() => this.phoneNumber.focus()}
                                              blurOnSubmit={false}
                                              returnKeyType='next' />
                                          </View>
                                          <View style={LocalStyle.EditTextConatiner}>
                                            <TextInput
                                              autoCorrect={false}
                                              multiline={false}
                                              blurOnSubmit={false}
                                              allowFontScaling={false}
                                              placeholder='Last Name'
                                              ref={(input) => this.phoneNumber = input}
                                              onSubmitEditing={() => this.Email.focus()}
                                              blurOnSubmit={false}
                                              returnKeyType='next' />
                                          </View>
                                          <View style={LocalStyle.EditTextConatiner}>
                                            <TextInput
                                              autoCorrect={false}
                                              multiline={false}
                                              blurOnSubmit={false}
                                              allowFontScaling={false}
                                              placeholder='Phone Number'
                                              ref={(input) => this.phoneNumber = input}
                                              onSubmitEditing={() => this.Email.focus()}
                                              blurOnSubmit={false}
                                              returnKeyType='next' />
                                          </View>
                                          <View style={LocalStyle.EditTextConatiner}>
                                            <TextInput
                                              autoCorrect={false}
                                              multiline={false}
                                              blurOnSubmit={false}
                                              allowFontScaling={false}
                                              placeholder='Email'
                                              ref={(input) => this.Email = input}
                                              onSubmitEditing={() => this.password.focus()}
                                              blurOnSubmit={false}
                                              returnKeyType='next' />
                                          </View>
                                          <BirthDate {...props} />

                                         <Button

                                         >
                                           Submit</Button>

                                         <Button
                                          click={()=>props.functionOpenPage('ChangePassword')}
                                         >
                                           Change Password</Button>

                                        </View> */}
      </View>
    </SafeAreaView>
  )
}

const LocalStyle = StyleSheet.create({
  EditTextConatiner: {
    width: '100%',
    height: 40,
    borderBottomColor: '#757575',
    borderBottomWidth: 0.5,
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginTop: 20
  }
})
export default MyAccount
