import React, {} from 'react'
import { View, Text, TextInput, Image, StyleSheet } from 'react-native'

import UserIcon from '../../../../../image/contact.png'
import PhoneIcon from '../../../../../image/phone.png'
import CalenderIcon from '../../../../../image/calender.png'
import ChaferIcons from '../../../../../image/chafer.png'
import DeliveryIcon from '../../../../../image/delivery.png'
import AddressIcon from '../../../../../image/address.png'
import MailIcon from '../../../../../image/mail.png'
import ModalDropdown from 'react-native-modal-dropdown'
import DatePicker from 'react-native-datepicker'

import { Dropdown } from 'react-native-material-dropdown'

const EditDetails = (props) => {

  console.log('props.CurrentDate', props.CurrentDate)
  return (
    <View>
      <View style={LocalStyle.FirstRow}>
        <View style={LocalStyle.RightRowContainer}>
          <View style={{width: '20%', height: '100%', justifyContent: 'center', alignItems: 'center'}}>
            <Image style={{width: 18, height: 18, resizeMode: 'contain'}} source={UserIcon} />
          </View>
          <TextInput
          editable={false} 
          selectTextOnFocus={false}
          allowFontScaling={false}
           style={{width: '80%', height: '100%',fontSize :12 }}>
           {props.Name}
          </TextInput>
        </View>
        <View style={LocalStyle.LeftRowContainer}>
          <View style={{width: '20%', height: '100%', justifyContent: 'center', alignItems: 'center'}}>
            <Image style={{width: 18, height: 18, resizeMode: 'contain'}} source={PhoneIcon} />
          </View>
          <TextInput 
          editable={false} 
          selectTextOnFocus={false}
          allowFontScaling={false} style={{width: '80%', height: '100%', fontSize :12 }}>
           {props.Phone}
          </TextInput>
        </View>
      </View>
      <View style={LocalStyle.SecondRowContainer}>
        <View style={{width: '48%', height: '100%', flexDirection: 'row', marginRight: '2%'}}>
          <DatePicker
          disabled={true}
          androidMode={'default'}
            style={{width: '100%', height: 20, }}
            date={props.CurrentDate}
            mode='date'
            placeholder='select date'
            format='YYYY-MM-DD'
            minDate={props.PaymentCurrentDate}
            maxDate='2050-12-01'
            confirmBtnText='Confirm'
            cancelBtnText='Cancel'
            customStyles={{ dateIcon: { position: 'absolute', left: 0, top: 4, marginLeft: 0 }, 
            dateInput: { marginLeft: 0, height: 35, borderWidth: .5 ,} }}
            onDateChange={(date) => {
                            props.functionSetDate({date: date})}} />
        </View>
        <View style={{width: '48%',marginLeft: '2%', height: '100%', flexDirection: 'row', borderWidth: .5}}>
          <View style={{width: '35%', height: '100%', justifyContent: 'center', alignItems: 'center'}}>
            <Text allowFontScaling={false} style={{fontSize: 14, color: 'black', fontWeight: 'bold'}}>
              Cost $
            </Text>
          </View>
          <TextInput 
          keyboardType={'number-pad'}
           editable={false} selectTextOnFocus={false}
          allowFontScaling={false} style={{width: '65%', height: '100%' , fontSize:12}}>
           {props.Cost}
          </TextInput> 
        </View>
      </View>
      <View style={{width: '100%', height: 60, flexDirection: 'row'}}>
        <View style={{width: '32%', height: '100%', marginRight: '2%'}}>
          <Dropdown
            label='Select Hour'
            itemTextStyle={{textAlign: 'center'}}
            fontSize={12}
            value={props.Selected_Hour}
            data={props.HourList} />
        </View>
        <View style={{width: '32%',  height: '100%', marginRight: '1%'}}>
          <Dropdown
            label='Select Mintues'
            itemTextStyle={{textAlign: 'center'}}
            fontSize={12}
            value={props.Selected_Mintues}
            data={props.MintuesList} />
        </View>
        <View style={{width: '32%',  height: '100%', marginLeft: '2%'}}>
          <Dropdown
            label='Select AM/PM'
            itemTextStyle={{textAlign: 'center'}}
            fontSize={12}
            value={props.Selected_AMPM}
            data={[]} />
        </View>
      </View>
      <View style={LocalStyle.SecondRowContainer}>
        <View style={{width: '48%', height: '100%',marginRight: '2%', flexDirection: 'row',borderWidth: .5}}>
          <View style={{width: '20%', height: '100%', justifyContent: 'center', alignItems: 'center'}}>
            <Image style={{width: 18, height: 18, resizeMode: 'contain'}} source={ChaferIcons} />
          </View>
          <View style={{width: '80%',  height: '100%', marginLeft: '2%', justifyContent:'center', alignItems:'flex-start'}}>
           <Text
           allowFontScaling={false}
          
           >{props.SelectedShapper}</Text>
          </View>
        </View>
        <View style={{width: '48%',marginLeft: '2%', height: '100%', flexDirection: 'row', borderWidth: .5}}>
          <View style={{width: '20%', height: '100%', justifyContent: 'center', alignItems: 'center'}}>
            <Image style={{width: 18, height: 18, resizeMode: 'contain'}} source={DeliveryIcon} />
          </View>
          <View style={{width: '80%',  height: '100%', marginLeft: '2%', justifyContent:'center', alignItems:'flex-start'}}>
           <Text
           allowFontScaling={false}
          
           >{props.Selected_Deliver}</Text>
          </View>
        </View>
      </View>
     

      <View
      style={LocalStyle.SecondRowContainer}
      >
<View style={LocalStyle.RightRowContainer}>
          <View style={{width: '20%', height: '100%', justifyContent: 'center', alignItems: 'center'}}>
            <Image style={{width: 18, height: 18, resizeMode: 'contain'}} source={MailIcon} />
          </View>
         
          <Text 
          allowFontScaling={false} 
          numberOfLines={2}
            style={{width: '80%', height: '100%' , textAlign:'center', textAlignVertical :'center'}}>
              {props.Email}
          </Text>
        </View>
        <View style={LocalStyle.LeftRowContainer}>
          <View style={{width: '20%', height: '100%', justifyContent: 'center', alignItems: 'center'}}>
            <Image style={{width: 18, height: 18, resizeMode: 'contain'}} source={AddressIcon} />
          </View>
          <Text 
          allowFontScaling={false} 
          numberOfLines={2}
            style={{width: '80%', height: '100%' , textAlign:'center', textAlignVertical :'center'}}>
             {props.Address} 
          </Text>
        </View>

      </View>
      <View 
      style={{marginTop:20}}
      />
    </View>
  )
}

const LocalStyle = StyleSheet.create({
  RowContainer: {
    width: '100%',
    height: 50,
    flexDirection: 'row'
  },
  FirstRow: {
    width: '100%', height: 40, flexDirection: 'row'
  },
  SecondRowContainer: {
    width: '100%', height: 40, flexDirection: 'row',marginTop: 10
  },
  ChildRowContainer: {

  },
  RightRowContainer:{
    width: '48%', height: '100%',marginRight: '2%', flexDirection: 'row',borderWidth: .5
  },
  LeftRowContainer:{
    width: '48%',marginLeft: '2%', height: '100%', flexDirection: 'row', borderWidth: .5
  }

})

export default EditDetails
