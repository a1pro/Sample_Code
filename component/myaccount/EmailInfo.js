import React,{} from 'react'
import { View, Text, ScrollView, Image, TouchableOpacity, Dimensions } from 'react-native'
import { SafeAreaView } from 'react-navigation'
import Styless from '../Common/Styless'
import Toolbar from '../Common/LoginToolbar'
import RightbackIcon from '../../../image/rightback.png'
import ToggleSwitch from 'toggle-switch-react-native'
import {Theme} from '../../config';

const EmailInfo = (props) => {


  return (
    <SafeAreaView forceInset={{ bottom: 'never'}} style={Styless.MainContainer}>
    <Toolbar {...props}/>
    <View style={Styless.ScrollContainer}>
      <TouchableOpacity style={{width: '100%', height: 60, flexDirection: 'row'}}>
        <View style={{width: '70%', height: '100%', justifyContent: 'center', alignItems: 'flex-start'}}>
          <Text allowFontScaling={false} style={{color: 'black',  fontSize: 18, fontWeight: 'bold', paddingLeft: 10}}>
            Produce Arrivals
          </Text>
        </View>
        <View style={{width: '30%', height: '100%', justifyContent: 'center', alignItems: 'center'}}>
          <ToggleSwitch
            isOn={props.Toggle.Produce}
            onColor={Theme.PRIMARY_COLOR}
            offColor='#757575'
            label=''
            labelStyle={{color: 'black', fontWeight: '900'}}
            size='medium'
            onToggle={(isOn) => props.functionToggle('Produce',  isOn)} />
        </View>
      </TouchableOpacity>
      <View style={Styless.Line} />
      <View style={{width: '100%', height: 60, flexDirection: 'row'}}>
        <View style={{width: '70%', height: '100%', justifyContent: 'center', alignItems: 'flex-start'}}>
          <Text allowFontScaling={false} style={{color: 'black',  fontSize: 18, fontWeight: 'bold', paddingLeft: 10}}>
            Sales Specials
          </Text>
        </View>
        <View style={{width: '30%', height: '100%', justifyContent: 'center', alignItems: 'center'}}>
          <ToggleSwitch
            isOn={props.Toggle.Sales}
            onColor={Theme.PRIMARY_COLOR}
            offColor='#757575'
            label=''
            labelStyle={{color: 'black', fontWeight: '900'}}
            size='medium'
            onToggle={(isOn) => props.functionToggle('Sales',isOn)} />
        </View>
      </View>
      <View style={Styless.Line} />
      <TouchableOpacity style={{width: '100%', height: 60, flexDirection: 'row'}}>
        <View style={{width: '70%', height: '100%', justifyContent: 'center', alignItems: 'flex-start'}}>
          <Text allowFontScaling={false} style={{color: 'black',  fontSize: 18, fontWeight: 'bold', paddingLeft: 10}}>
            Coupons
          </Text>
        </View>
        <View style={{width: '30%', height: '100%', justifyContent: 'center', alignItems: 'center'}}>
          <ToggleSwitch
            isOn={props.Toggle.Coupons}
            onColor={Theme.PRIMARY_COLOR}
            offColor='#757575'
            label=''
            labelStyle={{color: 'black', fontWeight: '900'}}
            size='medium'
            onToggle={(isOn) => props.functionToggle( 'Coupons' ,isOn)} />
        </View>
      </TouchableOpacity>
      <View style={Styless.Line} />
      <TouchableOpacity style={{width: '100%', height: 60, flexDirection: 'row'}}>
        <View style={{width: '70%', height: '100%', justifyContent: 'center', alignItems: 'flex-start'}}>
          <Text allowFontScaling={false} style={{color: 'black',  fontSize: 18, fontWeight: 'bold', paddingLeft: 10}}>
            Food Specials
          </Text>
        </View>
        <View style={{width: '30%', height: '100%', justifyContent: 'center', alignItems: 'center'}}>
          <ToggleSwitch
             isOn={props.Toggle.Food}
            onColor={Theme.PRIMARY_COLOR}
            offColor='#757575'
            label=''
            labelStyle={{color: 'black', fontWeight: '900'}}
            size='medium'
            onToggle={(isOn) => props.functionToggle('Food',isOn)} />
        </View>
      </TouchableOpacity>
      <View style={Styless.Line} />
      <TouchableOpacity style={{width: '100%', height: 60, flexDirection: 'row'}}>
        <View style={{width: '70%', height: '100%', justifyContent: 'center', alignItems: 'flex-start'}}>
          <Text allowFontScaling={false} style={{color: 'black',  fontSize: 18, fontWeight: 'bold', paddingLeft: 10}}>
            Rewards
          </Text>
        </View>
        <View style={{width: '30%', height: '100%', justifyContent: 'center', alignItems: 'center'}}>
          <ToggleSwitch
             isOn={props.Toggle.Rewards}
            onColor={Theme.PRIMARY_COLOR}
            offColor='#757575'
            label=''
            labelStyle={{color: 'black', fontWeight: '900'}}
            size='medium'
            onToggle={(isOn) => props.functionToggle( 'Rewards',isOn)} />
        </View>
      </TouchableOpacity>
      <View style={Styless.Line} />
      <TouchableOpacity style={{width: '100%', height: 60, flexDirection: 'row'}}>
        <View style={{width: '70%', height: '100%', justifyContent: 'center', alignItems: 'flex-start'}}>
          <Text allowFontScaling={false} style={{color: 'black',  fontSize: 18, fontWeight: 'bold', paddingLeft: 10}}>
            Store News
          </Text>
        </View>
        <View style={{width: '30%', height: '100%', justifyContent: 'center', alignItems: 'center'}}>
          <ToggleSwitch
            isOn={props.Toggle.Store}
            onColor={Theme.PRIMARY_COLOR}
            offColor='#757575'
            label=''
            labelStyle={{color: 'black', fontWeight: '900'}}
            size='medium'
            onToggle={(isOn) => props.functionToggle( 'Store',isOn)} />
        </View>
      </TouchableOpacity>
      <View style={Styless.Line} />
    </View>
  </SafeAreaView>
  )
}

export default EmailInfo
