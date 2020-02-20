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
          <View
          style={{width:'80%', height:'100%'}}
          >
          <TextInput
          onChangeText={(value) => props.functionSetName({value})}
          autoCapitalize={'none'}
          autoCorrect={false}
          blurOnSubmit={false}
          allowFontScaling={false} 
          placeholder={'Enter Name'}
          style={{width: '100%', height: 40, fontSize:12}}>
           {props.Name}
          </TextInput>
          </View>
         
        </View> 

       
        <View style={LocalStyle.LeftRowContainer}> 
          <View style={{width: '20%', height: '100%', justifyContent: 'center', alignItems: 'center'}}>
            <Image style={{width: 18, height: 18, resizeMode: 'contain'}} source={PhoneIcon} />
          </View>
          <TextInput 
          onChangeText={(value) => props.functionSetPhone({value})}
           autoCorrect={false}
           blurOnSubmit={false}
          allowFontScaling={false} 
          keyboardType ={'numeric'}
          placeholder={'Enter Phone Number'}
          style={{width: '80%', height: '100%' ,fontSize:12}}>
           {props.Phone}
          </TextInput>
        </View>
      </View>
      <View style={LocalStyle.SecondRowContainer}>
        <View style={{width: '48%', height: '100%', flexDirection: 'row', marginRight: '2%'}}>
          <DatePicker
          allowFontScaling={false}
            style={{width: '100%', height: 20}}
            date={props.SelectedCateringDate}
            mode='date'
            placeholder='select date'
            format='YYYY-MM-DD'
            minDate={props.MinimumDate}
            maxDate='2050-12-01'
            confirmBtnText='Confirm'
            cancelBtnText='Cancel'
            customStyles={{ dateIcon: { position: 'absolute', left: 0, top: 4, marginLeft: 0 }, dateInput: { marginLeft: 0, height: 35, borderWidth: .5 } }}
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
          onChangeText={(value)=>props.functionSetCost(value)}
           autoCorrect={false}
           blurOnSubmit={false}
           allowFontScaling={false} 
          keyboardType ={'numeric'}
          placeholder={'Enter Cost'}
          style={{width: '65%', height: '100%' }}>
          {props.Cost}
          </TextInput>
          
        </View>
      </View>
      <View style={{width: '100%', height: 60, flexDirection: 'row'}}>
        <View style={{width: '32%', height: '100%', marginRight: '2%'}}>
          <Dropdown
            allowFontScaling={false}
            label='Select Hour'
            itemTextStyle={{textAlign: 'center'}}
            fontSize={11}
            data={props.HourList} 
            value={props.Selected_Hour}
            onChangeText={(value)=>props.functionSetHour(value)}

            />
        </View>
        <View style={{width: '32%',  height: '100%', marginRight: '1%'}}>
          <Dropdown
          allowFontScaling={false}
            label='Select Mintues'
            itemTextStyle={{textAlign: 'center'}}
            fontSize={11}
            data={props.MintuesList} 
            value={props.Selected_Mintues}
            onChangeText={(value)=>props.functionSetMintue(value)}
            data={[{ value: '00' }, { value: '30' }]}
            />
        </View>
        <View style={{width: '32%',  height: '100%', marginLeft: '2%'}}>
          <Dropdown
            allowFontScaling={false}
            label='Select AM/PM'
            itemTextStyle={{textAlign: 'center'}}
            fontSize={11}
            data={[{ value: 'AM' }, { value: 'PM' } ]}
            value={props.Selected_AMPM}
            onChangeText={(value)=>props.functionSetAMPM(value)}

            />
        </View>
      </View>
     
      <View style={{width: '100%', height: 60, flexDirection: 'row'}}>
        <View style={{width: '31%',height: 60, flexDirection: 'row', marginRight: '2%'}}>
          <View style={{width: '25%', height: '100%', justifyContent: 'center', alignItems: 'center'}}>
            <Image style={{width: 18, height: 18, resizeMode: 'contain', marginTop: 20}} source={ChaferIcons} />
          </View>
          <View style={{width: '75%', height: 60}}>
            <Dropdown 
            onChangeText={(value)=>props.functionSelectedShapper(value)}
            value={props.SelectedShapper}
            fontSize={12} 
            itemTextStyle={{textAlign: 'center',}} 
            data={[{ value: 'Y' }, { value: 'N' } ]} /> 
          </View>
        </View>


        <View style={{width: '31%',height: 60, flexDirection: 'row', marginLeft: '2%'}}>
          <View style={{width: '25%', height: '100%', justifyContent: 'center', alignItems: 'center'}}>
            <Image style={{width: 18, height: 18, resizeMode: 'contain', marginTop: 20}} source={DeliveryIcon} />
          </View>
          <View style={{width: '75%', height: 60}}>
            <Dropdown 
            onChangeText={(value)=>props.functionSelectedDelivery(value)}
            value={props.Selected_Deliver}
            fontSize={12} itemTextStyle={{textAlign: 'center', }} data={[{ value: 'Y' }, { value: 'N' } ]} />
          </View>
        </View>

        <View style={{width: '31%',height: 60,  marginLeft: '2%'}}>
        <Text
           allowFontScaling={false}
           style={{ marginTop: 10 , fontWeight: 'bold',color: 'black',fontSize: 14}}
           >Catering Count</Text>
         
         <View
         style={{width:'100%', height:35, borderWidth:.5}}
         >
         <TextInput
         
           onChangeText={(value) => props.functionSetCateringcout({value})}
         allowFontScaling={false}
         style={{marginLeft:'1%', marginRight:'1%', width:'98%', height:35, fontSize:12}}
         underlineColorAndroid='transparent'
         placeholder={'Enter Count'}
         keyboardType={'numeric'}
         autoCorrect={false}
         autoFocus={false}
         blurOnSubmit={false}
         multiline={false}
         >
         {props.SelectedCateringCount}

         </TextInput>

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
          <TextInput
           onChangeText={(value) => props.functionSetEmail({value})}
          allowFontScaling={false} 
          placeholder={'Enter Email'}
          style={{width: '80%', height: '100%' }}>
           {props.Email}
          </TextInput>
        </View>
        <View style={LocalStyle.LeftRowContainer}>
          <View style={{width: '20%', height: '100%', justifyContent: 'center', alignItems: 'center'}}>
            <Image style={{width: 18, height: 18, resizeMode: 'contain'}} source={AddressIcon} />
          </View>
          <TextInput 
           onChangeText={(value) => props.functionSetAddress({value})}
          allowFontScaling={false}
          placeholder={'Enter Address'}
          style={{width: '80%', height: '100%' }}>
           {props.Address}
          </TextInput>
        </View>

      </View>

      <Text allowFontScaling={false} style={{fontSize: 14, color: 'black', fontWeight: 'bold', marginTop:10}}>
             Notes
            </Text>

            <View
            style={{width:'100%', height:45, borderWidth:.5}}
            >
            <TextInput
            style={{width:'96%', height:'100%', marginLeft:'2%', marginRight:'2%'}}
            placeholder={'Write Somethings...'}
            allowFontScaling={false}
            multiline={true}
            underlineColorAndroid='transparent'
            autoFocus={false}
            blurOnSubmit={false}
            autoCorrect={false}
            value={props.Notes}
            onChangeText={(text) => props.functionSetNotes({ text })}
            >

            </TextInput>

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
