import React,{} from 'react'
import { View, Text, ScrollView, Image, TouchableOpacity, Dimensions } from 'react-native'
import { SafeAreaView } from 'react-navigation'
import Styless from '../Common/Styless'
import Toolbar from '../Common/LoginToolbar'
import RightbackIcon from '../../../image/rightback.png'
import Loader from '../Common/Loader'
import ToggleSwitch from 'toggle-switch-react-native'
import { Theme } from '../../config'

const NotificationInfo = (props) => {

  return (
    <SafeAreaView forceInset={{ bottom: 'never'}} style={Styless.MainContainer}>
      <Toolbar {...props}/>
      { props.Loader ? <Loader /> : 
      <View style={Styless.ScrollContainer}>
      <View style={{width: '100%', height: 60, flexDirection: 'row'}}>
          <View style={{width: '70%', height: '100%', justifyContent: 'center', alignItems: 'flex-start'}}>
            <Text allowFontScaling={false} style={{color: 'black',  fontSize: 18, fontWeight: 'bold', paddingLeft: 10}}>
             Notifications (Always On)
            </Text>
          </View>
          <View style={{width: '30%', height: '100%', justifyContent: 'center', alignItems: 'center'}}>
            <ToggleSwitch
              disabled={true}
              isOn={props.Notification}
              onColor={Theme.PRIMARY_COLOR}
              offColor='#757575'
              label=''
              labelStyle={{color: 'black', fontWeight: '900'}}
              size='medium'
              onToggle={(isOn) => {}} />
          </View>
        </View>
        <Text 
        style={{color: 'black',marginTop:16, marginBottom:12,  fontSize: 18, fontWeight: 'bold', paddingLeft: 10, alignSelf:'center'}}
        allowFontScaling={false} >Notifications Types</Text>
        <View style={Styless.Line} />
        <View style={{width: '100%', height: 60, flexDirection: 'row'}}>
          <View style={{width: '70%', height: '100%', justifyContent: 'center', alignItems: 'flex-start'}}>
            <Text allowFontScaling={false} style={{color: 'black',  fontSize: 18, fontWeight: 'bold', paddingLeft: 10}}>
              Rewards (Always On)
            </Text>
          </View>
          <View style={{width: '30%', height: '100%', justifyContent: 'center', alignItems: 'center'}}>
            <ToggleSwitch
              disabled={true}
              isOn={props.RealToggle.Rewards}
              onColor={Theme.PRIMARY_COLOR}
              offColor='#757575'
              label=''
              labelStyle={{color: 'black', fontWeight: '900'}}
              size='medium'
              onToggle={(isOn) => {}} />
          </View>
        </View>
        <View style={Styless.Line} />
        <View style={Styless.Line} />

        <View style={{width: '100%', height: 60, flexDirection: 'row'}}>
          <View style={{width: '70%', height: '100%', justifyContent: 'center', alignItems: 'flex-start'}}>
            <Text allowFontScaling={false} style={{color: 'black',  fontSize: 18, fontWeight: 'bold', paddingLeft: 10}}>
              Coupons
            </Text>
          </View>
          <View style={{width: '30%', height: '100%', justifyContent: 'center', alignItems: 'center'}}>
            <ToggleSwitch
              isOn={props.RealToggle.Coupons}
              onColor={Theme.PRIMARY_COLOR}
              offColor='#757575'
              label=''
              labelStyle={{color: 'black', fontWeight: '900'}}
              size='medium'
              onToggle={(isOn) => props.functionToggle( 'Coupons' ,isOn)} />
          </View>
        </View>
        <View style={Styless.Line} />
        <View style={{width: '100%', height: 60, flexDirection: 'row'}}>
          <View style={{width: '70%', height: '100%', justifyContent: 'center', alignItems: 'flex-start'}}>
            <Text allowFontScaling={false} style={{color: 'black',  fontSize: 18, fontWeight: 'bold', paddingLeft: 10}}>
              Food Specials
            </Text>
          </View>
          <View style={{width: '30%', height: '100%', justifyContent: 'center', alignItems: 'center'}}>
            <ToggleSwitch
               isOn={props.RealToggle.Food}
              onColor={Theme.PRIMARY_COLOR}
              offColor='#757575'
              label=''
              labelStyle={{color: 'black', fontWeight: '900'}}
              size='medium'
              onToggle={(isOn) => props.functionToggle('Food',isOn)} />
          </View>
        </View>
        <View style={Styless.Line} />

        <View style={{width: '100%', height: 60, flexDirection: 'row'}}>
          <View style={{width: '70%', height: '100%', justifyContent: 'center', alignItems: 'flex-start'}}>
            <Text allowFontScaling={false} style={{color: 'black',  fontSize: 18, fontWeight: 'bold', paddingLeft: 10}}>
              Produce Arrivals
            </Text>
          </View>
          <View style={{width: '30%', height: '100%', justifyContent: 'center', alignItems: 'center'}}>
            <ToggleSwitch
              isOn={props.RealToggle.Produce}
              onColor={Theme.PRIMARY_COLOR}
              offColor='#757575'
              label=''
              labelStyle={{color: 'black', fontWeight: '900'}}
              size='medium'
              onToggle={(isOn) => props.functionToggle('Produce',  isOn)} />
          </View>
        </View>
        <View style={Styless.Line} />

        <View style={{width: '100%', height: 60, flexDirection: 'row'}}>
          <View style={{width: '70%', height: '100%', justifyContent: 'center', alignItems: 'flex-start'}}>
            <Text allowFontScaling={false} style={{color: 'black',  fontSize: 18, fontWeight: 'bold', paddingLeft: 10}}>
              Sales Specials
            </Text>
          </View>
          <View style={{width: '30%', height: '100%', justifyContent: 'center', alignItems: 'center'}}>
            <ToggleSwitch
              isOn={props.RealToggle.Sales}
              onColor={Theme.PRIMARY_COLOR}
              offColor='#757575'
              label=''
              labelStyle={{color: 'black', fontWeight: '900'}}
              size='medium'
              onToggle={(isOn) => props.functionToggle('Sales',isOn)} />
          </View>
        </View>
        
       
       
        <View style={Styless.Line} />
        <View style={{width: '100%', height: 60, flexDirection: 'row'}}>
          <View style={{width: '70%', height: '100%', justifyContent: 'center', alignItems: 'flex-start'}}>
            <Text allowFontScaling={false} style={{color: 'black',  fontSize: 18, fontWeight: 'bold', paddingLeft: 10}}>
              Store News
            </Text>
          </View>
          <View style={{width: '30%', height: '100%', justifyContent: 'center', alignItems: 'center'}}>
            <ToggleSwitch
              isOn={props.RealToggle.Store}
              onColor={Theme.PRIMARY_COLOR}
              offColor='#757575'
              label=''
              labelStyle={{color: 'black', fontWeight: '900'}}
              size='medium'
              onToggle={(isOn) => props.functionToggle( 'Store',isOn)} />
          </View>
        </View>
        <View style={Styless.Line} />
      </View> }
      
    </SafeAreaView>
  )
}

export default NotificationInfo
