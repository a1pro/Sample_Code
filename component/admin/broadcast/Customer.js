import React, { } from 'react';
import { View, Image, StyleSheet, Text, TextInput, TouchableOpacity, Platform } from 'react-native';
import { Theme } from '../../../config';
import { Dropdown } from 'react-native-material-dropdown';
import { Button } from '../../controls';
import PlaceholderIcon from '../../../../image/Placeholder.jpg';
import Uncheck from '../../../../image/Circle_Uncheck.png';
import CheckIcon from '../../../../image/Circle_Check.png';

const Customer = (props) => {

  console.log('props.SELECTEDREGION', props.SELECTEDREGION);


  return (
    <View
      style={LocalStyle.Container}
    >
      <View
        style={{ width: '100%', height: undefined, flexDirection: 'row' }}
      >
        <View
          style={{ width: '15%', height: 40, justifyContent: 'center', alignItems: 'flex-start' }}
        >
          <TouchableOpacity
            onPress={() => props.functionRadioGruop('ALLCUSTOMER')}
          >
            <Image
              style={{ width: 30, height: 30, resizeMode: 'contain' }}
              source={props.RadioGroup.AllCustomer == true ? CheckIcon : Uncheck}
            />
          </TouchableOpacity>

        </View>
        <Text
          allowFontScaling={false}
          style={{ color: 'black', fontSize: 18, marginTop: 7 }}
        >
          All Customers
           </Text>


      </View>
      <View
        style={{ width: '100%', height: undefined, flexDirection: 'row' }}
      >
        <View
          style={{ width: '15%', height: 40, justifyContent: 'center', alignItems: 'flex-start', marginTop: 18 }}
        >
          <TouchableOpacity
            onPress={() => props.functionRadioGruop('REGION')}
          >
            <Image
              style={{ width: 30, height: 30, resizeMode: 'contain' }}
              source={props.RadioGroup.Region == true ? CheckIcon : Uncheck}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{ width: '80%', height: undefined, marginTop: -10 }}
        >
          <Dropdown
            label='Select Region'
            value={props.SELECTEDREGION}
            data={props.RegionList}
            onChangeText={(region) => props.functionSelectedRegion(region)}
          />


        </View>


      </View>


      <View
        style={{ width: '100%', height: undefined, flexDirection: 'row' }}
      >
        <View
          style={{ width: '15%', height: 40, justifyContent: 'center', alignItems: 'flex-start', marginTop: 18 }}
        >
          <TouchableOpacity
            onPress={() => props.functionRadioGruop('VALUE')}
          >
            <Image
              style={{ width: 30, height: 30, resizeMode: 'contain' }}
              source={props.RadioGroup.Value == true ? CheckIcon : Uncheck}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{ width: '80%', height: undefined, marginTop: -10 }}
        >
          <Dropdown
            label='Select Value'
            value={props.SELECTEDVALUE}
            data={props.ValueList}
            onChangeText={(value) => props.functionSelectedValue(value)}
          />


        </View>


      </View>

      <View style={LocalStyle.EditTextConatiner}>
        <TextInput
          autoCorrect={false}
          multiline={false}
          blurOnSubmit={false}
          allowFontScaling={false}
          underlineColorAndroid='transparent'
          placeholder='Title'
          placeholderTextColor={Theme.PLACE_HOLDER}
          autoCorrect={false}
          ref={(input) => this.lastName = input}
          onSubmitEditing={() => this.phoneNumber.focus()}
          blurOnSubmit={false}
          returnKeyType='next' />
      </View>
      <View style={{ width: '100%', borderColor: '#757575', borderWidth: .5, borderRadius: 5, marginTop: 20, marginBottom: 0 }}>
        <TextInput
          placeholder='Message Here'
          placeholderTextColor={Theme.PLACE_HOLDER}
          style={{ marginLeft: 5, width: '100%', minHeight: 80, maxHeight: 150, marginRight: 5, paddingLeft: 5, paddingRight: 5, textAlign: 'justify' }}
          multiline={true}
          // numberOfLines={10}
          allowFontScaling={false}
          autoComplete={false}
          autoCorrect={false} />
      </View>
      <View>
        <Dropdown
          label='Select Notification Types'
          value={props.SELECTED_TYPE}
          data={props.NotificationTypeList}
          onChangeText={(value) => props.functionSelectedNotificationType(value)}
        />
      </View>

      <View style={{
        width: 170, height: 170, borderColor: '#757575', borderWidth: .5,
        borderRadius: 5, marginTop: 20, marginBottom: 10, alignSelf: 'center', justifyContent: 'center', alignItems: 'center'
      }}>


        <Image
          style={{ width: 160, height: 160, resizeMode: 'contain' }}
          source={PlaceholderIcon}
        />


      </View>
      <View
        style={{ width: '100%', marginBottom: 40 }}>
        <Button>
          Broadcast
        </Button>
      </View>

    </View>

  )
}
const LocalStyle = StyleSheet.create({
  Container: {
    width: '90%', height: '100%', marginLeft: '5%', marginRight: '5%'
  },
  EditTextConatiner: {
    width: '100%',
    height: 45,
    paddingLeft: 15,
    borderRadius: 4,
    borderBottomWidth: 0.5,
    borderWidth: 0.5,
    borderColor: '#757575',
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginTop: 20
  }
})
export default Customer;