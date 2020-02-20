import React,{} from 'react'
import { View, Text, ScrollView, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-navigation'
import Styless from '../Common/Styless'
import Toolbar from '../Common/LoginToolbar'
import { Button } from '../controls'
import { Theme } from '../../config'
import { PRODUCTSEARCH_IN_COMPLETE } from '../../action-types'

const Layout6 = (props) => {
  return (
  
      <View style={{width: '80%',height:'100%', marginRight: '10%',   marginLeft: '10%', marginTop: 20,marginBottom:20 }}>
        <View style={{ width: '100%', height: 50, borderBottomColor: '#757575', borderBottomWidth: 0.5, justifyContent: 'center', alignItems: 'flex-start', marginTop: 10 }}>
          <TextInput
            style={{ fontSize: 20 }}
            autoCorrect={false}
            multiline={false}
            blurOnSubmit={false}
            allowFontScaling={false}
            underlineColorAndroid='transparent'
            placeholder='First Name'
            placeholderTextColor={Theme.PLACE_HOLDER}
            autoCorrect={false}
            ref={(input) => this.firstName = input}
            onSubmitEditing={() => this.lastName.focus()}
            blurOnSubmit={false}
            returnKeyType='next' />
        </View>
        <View style={LocalStyle.EditTextConatiner}>
          <TextInput
            style={{ fontSize: 20 }}
            autoCorrect={false}
            multiline={false}
            blurOnSubmit={false}
            allowFontScaling={false}
            underlineColorAndroid='transparent'
            placeholder='Last Name'
            placeholderTextColor={Theme.PLACE_HOLDER}
            autoCorrect={false}
            ref={(input) => this.lastName = input}
            onSubmitEditing={() => this.phoneNumber.focus()}
            blurOnSubmit={false}
            returnKeyType='next' />
        </View>
        <View style={LocalStyle.EditTextConatiner}>
          <TextInput
            style={{ fontSize: 20 }}
            autoCorrect={false}
            multiline={false}
            blurOnSubmit={false}
            allowFontScaling={false}
            underlineColorAndroid='transparent'
            placeholder='Phone Number'
            placeholderTextColor={Theme.PLACE_HOLDER}
            autoCorrect={false}
            ref={(input) => this.phoneNumber = input}
            onSubmitEditing={() => this.Email.focus()}
            blurOnSubmit={false}
            returnKeyType='next' />
        </View>
        <View style={LocalStyle.EditTextConatiner}>
          <TextInput
            style={{ fontSize: 20 }}
            autoCorrect={false}
            multiline={false}
            blurOnSubmit={false}
            allowFontScaling={false}
            underlineColorAndroid='transparent'
            placeholder='Email'
            placeholderTextColor={Theme.PLACE_HOLDER}
            autoCorrect={false}
            ref={(input) => this.Email = input}
            onSubmitEditing={() => this.password.focus()}
            blurOnSubmit={false}
            returnKeyType='next' />
        </View>
        <View style={{width: '100%', height: 250, borderColor: '#757575', borderWidth: 1, borderRadius: 5, marginTop: 10,  marginBottom: 25}}>
          <TextInput
            placeholder='Comment Here'
            placeholderTextColor={Theme.PLACE_HOLDER}
            style={{ fontSize: 20, marginLeft: 5, width: '100%', height: '100%', marginRight: 5, paddingLeft: 5, paddingRight: 5, textAlign: 'justify'}}
            multiline={true}
            numberOfLines={10}
            allowFontScaling={false}
            autoComplete={false}
            autoCorrect={false} />
        </View>
        <Button>
          Submit
        </Button>
        {/* <TouchableOpacity onPress={() => props.onShare('Ok')}><Text>Click</Text></TouchableOpacity> */}
      </View>
     
  )
}

const LocalStyle = StyleSheet.create({
  EditTextConatiner: {
    width: '100%',
    height: 50,
    borderBottomColor: '#757575',
    borderBottomWidth: 0.5,
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginTop: 5
  }
})
export default Layout6
