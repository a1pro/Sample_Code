import React, { } from 'react'
import { View, Text, ScrollView, TouchableOpacity, Image, Dimensions, StyleSheet, TextInput } from 'react-native'
import { SafeAreaView } from 'react-navigation'
import Toolbar from '../Common/LoginToolbar'
import Styless from '../Common/Styless'
import { Theme } from '../../config'
import { Button } from '../controls'
import PasswordHide from '../../../image/password-hide.png'
import PasswordShow from '../../../image/password-show.png'
import PasswordIcon from '../../../image/forotpass.png'
import Loader from '../Common/Loader';

const ChangePassword = (props) => {

  return (
    <SafeAreaView forceInset={{ bottom: 'never' }} style={Styless.MainContainer}>
      <Toolbar {...props} />
      <ScrollView style={Styless.ScrollContainer}>
        <View style={{ width: '80%', height: '100%', marginLeft: '10%', marginRight: '10%' }}>
          <Image style={{ width: 100, height: 100, resizeMode: 'contain', alignSelf: 'center', marginTop: 100 }} source={PasswordIcon} />


          <View style={{
            width: '100%', height: 40, borderBottomColor: '#757575', borderBottomWidth: 0.5, justifyContent: 'center',
            alignItems: 'flex-start', marginTop: 20, flexDirection: 'row'
          }}>
            <TextInput
              style={{ width: '80%', height: '100%', marginLeft: 5 }}
              autoCorrect={false}
              allowFontScaling={false}
              underlineColorAndroid='transparent'
              placeholder='Enter old Password'
              ref={(input) => this.password = input}
              onSubmitEditing={() => this.newConpassword.focus()}
              blurOnSubmit={false}
              returnKeyType="next"
              onChangeText={text => props.functionSetOldpassword(text)}
              value={props.OldPassword}
              secureTextEntry={props.OldPasswordVisible}
            />
            <TouchableOpacity
              style={{ width: '20%', height: '100%', justifyContent: 'center', alignItems: 'center' }}
              onPress={() => props.functionOldPasswordHide(props.OldPasswordVisible)}
            >
              <Image
                style={{ width: 25, height: 25, resizeMode: 'contain' }}
                source={props.OldPasswordVisible == true ? PasswordHide : PasswordShow}
              />
            </TouchableOpacity>
          </View>
          <View style={{
            width: '100%', height: 40, borderBottomColor: '#757575', borderBottomWidth: 0.5, justifyContent: 'center',
            alignItems: 'flex-start', marginTop: 20, flexDirection: 'row'
          }}>
            <TextInput
              style={{ width: '80%', height: '100%', marginLeft: 5 }}
              allowFontScaling={false}
              placeholder={"Enter new Password"}
              autoCorrect={false}
              secureTextEntry={props.NewPasswordVisible}
              placeholder='Enter new Password'
              ref={(input) => this.newConpassword = input}
              onSubmitEditing={() => this.Conpassword.focus()}
              blurOnSubmit={false}
              returnKeyType="next"

              onChangeText={text => props.functionSetNewpassword(text)}
              value={props.NewPassword}

            />
            <TouchableOpacity
              style={{ width: '20%', height: '100%', justifyContent: 'center', alignItems: 'center' }}
              onPress={() => props.functionNewPasswordHide(props.NewPasswordVisible)}
            >
              <Image
                style={{ width: 25, height: 25, resizeMode: 'contain' }}
                source={props.NewPasswordVisible == true ? PasswordHide : PasswordShow}
              />
            </TouchableOpacity>
          </View>
          <View style={{
            width: '100%', height: 40, borderBottomColor: '#757575', borderBottomWidth: 0.5, justifyContent: 'center',
            alignItems: 'flex-start', marginTop: 20, flexDirection: 'row'
          }}>
            <TextInput
              style={{ width: '80%', height: '100%', marginLeft: 5 }}
              placeholder='Enter confirm Password'
              allowFontScaling={false}
              autoCorrect={false}
              secureTextEntry={props.ConPasswordVisible}

              ref={(input) => this.Conpassword = input}
              returnKeyType='done'
              blurOnSubmit={true}
              onChangeText={text => props.functionSetConpassword(text)}
              value={props.ConPassword}

            />
            <TouchableOpacity
              style={{ width: '20%', height: '100%', justifyContent: 'center', alignItems: 'center' }}
              onPress={() => props.functionConPasswordHide(props.ConPasswordVisible)}
            >
              <Image
                style={{ width: 25, height: 25, resizeMode: 'contain' }}
                source={props.ConPasswordVisible == true ? PasswordHide : PasswordShow}
              />
            </TouchableOpacity>
          </View>
          <View style={{ width: '100%', marginTop: 25 }}>
           {props.Loader == true ? <Loader /> :
            <Button
              click={() => props.functionSubmit('')}
            >
              Save
            </Button>}
          </View>
        </View>
      </ScrollView>
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
    marginTop: 5
  }
})
export default ChangePassword
