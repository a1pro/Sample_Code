import React, { } from 'react'
import { View, Text, ScrollView, TouchableOpacity, Image, Dimensions, TextInput, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-navigation'
import Toolbar from '../Common/LoginToolbar'
import Styless from '../Common/Styless'
import { Theme } from '../../config'
import BirthDate from './BirthDate'
import { Button } from '../controls'
import dropdown from '../../../image/dropdown.png';
import LanguagePicker from "../../picker/LanguagePicker";
import DaysPicker from '../../picker/DaysPicker';
import MonthPicker from '../../picker/MonthPicker';
import Loader from '../Common/Loader';

const AccountInfo = (props) => {

  var mTotalWidth = Dimensions.get('window').width
  var mTotalWidth = mTotalWidth / 2 - 50

  if(props.ShowLoader)
  return(
    <SafeAreaView forceInset={{ bottom: 'never' }} style={Styless.MainContainer}>
    <Toolbar {...props} />
    <View style={Styless.ScrollContainer}>

      <Loader />
      </View>
      </SafeAreaView>
  )
  return (
    <SafeAreaView forceInset={{ bottom: 'never' }} style={Styless.MainContainer}>
      <Toolbar {...props} />
      <LanguagePicker {...props} />
      <DaysPicker {...props}/>
      <MonthPicker  {...props}/>
      <View style={Styless.ScrollContainer}>


        <View style={{ width: '80%', height: '100%', marginLeft: '10%', marginRight: '10%', }}>
          <View style={LocalStyle.EditTextConatiner}>
            <TextInput
              style={{ width: '100%', height: '100%', fontSize: 19 }}
              autoCorrect={false}
              multiline={false}
              blurOnSubmit={false}
              allowFontScaling={false}
              placeholder='First Name'
              ref={(input) => this.lastName = input}
              onSubmitEditing={() => this.phoneNumber.focus()}
              blurOnSubmit={false}
              returnKeyType='next'
              onChangeText={text => props.functionSetFirstname(text)}
              value={props.Fname}
            />
          </View>
          <View style={LocalStyle.EditTextConatiner}>
            <TextInput
              style={{ width: '100%', height: '100%', fontSize: 19 }}
              autoCorrect={false}
              multiline={false}
              blurOnSubmit={false}
              allowFontScaling={false}
              placeholder='Last Name'
              ref={(input) => this.phoneNumber = input}
              onSubmitEditing={() => this.Email.focus()}
              blurOnSubmit={false}
              returnKeyType='next'
              onChangeText={text => props.functionSetLastname(text)}
              value={props.Lname}
            />
          </View>
          <View style={LocalStyle.EditTextConatiner}>
            <TextInput
              editable={false}
              style={{ fontSize: 19 }}
              autoCorrect={false}
              multiline={false}
              blurOnSubmit={false}
              allowFontScaling={false}
              placeholder='Email'
              ref={(input) => this.Email = input}
              onSubmitEditing={() => this.password.focus()}
              blurOnSubmit={false}
              returnKeyType='next'
              value={props.Email}

            />
          </View>
          <BirthDate {...props} />
          <TouchableOpacity onPress={() => props.functionShowDialog('LanguageVisible', true)} style={{ width: '100%', height: 40, flexDirection: 'row' }}>
            <View style={{ width: '80%', height: '100%', justifyContent: 'center', alignItems: 'flex-start' }}>
              <Text allowFontScaling={false} style={{ paddingLeft: 12, fontSize: 18 }}>
                {props.SelectedLanguage}
              </Text>
            </View>
            <View style={{ width: '20%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
              <Image style={{ width: 20, height: 20 }} source={dropdown} />
            </View>

          </TouchableOpacity>


          <View style={{ width: '100%', height: 0.5, backgroundColor: '#757575' }} />
          <Text
            allowFontScaling={false}
            style={{ alignSelf: 'center' }}
          >
            Used for Sending Regional Specials
        </Text>
          <Button
           click={() => props.functionSubmit('')}>
            Submit</Button>

          {/* <Button
            click={() => props.functionOpenPage('ChangePassword')}
          >
            Change Password</Button> */}

        </View>
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
    marginTop: 20,
    fontSize: 20
  }
})
export default AccountInfo
