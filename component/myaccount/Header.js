import React, {} from 'react'
import { View, Text, ScrollView, TouchableOpacity, Image, Dimensions, TextInput, StyleSheet } from 'react-native'
import Styless from '../Common/Styless'
import { Theme } from '../../config'
import LogoIcon from '../../../image/logo.png'
import DesibitesIcon from '../../../image/desibites2.png'


const Header =(props)=>{
    var mTotalWidth = Dimensions.get('window').width
  var mTotalWidth = mTotalWidth / 2 - 50

    return(
       
     <View style={{width: '100%', height: 180,backgroundColor: Theme.PRIMARY_COLOR,  flexDirection: 'row' }}>
          <View style={{width: '50%', height: '100%', justifyContent: 'center', alignItems: 'flex-start'}}>
            <Image style={{width: mTotalWidth, height: 100, resizeMode: 'contain', alignSelf: 'center'}} source={LogoIcon} />
            <Text allowFontScaling={false} style={{color: 'white', fontSize: 18, marginLeft: 10}}>
           {props.Fname +" "+props.Lname}
            </Text>
            <Text allowFontScaling={false} style={{color: 'white', fontSize: 16, marginLeft: 10}}>
             {props.Email}
            </Text>
          </View>
          <View style={{width: '50%', height: '80%', justifyContent: 'center', alignItems: 'center'}}>
            <Image style={{width: mTotalWidth, height: 80, resizeMode: 'contain', alignSelf: 'center'}} source={DesibitesIcon} />
          </View>
        </View>

        
    )
}

export default Header;