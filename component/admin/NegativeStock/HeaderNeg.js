import React, {} from 'react'
import { View, Text, Image, Touchable } from 'react-native'
import { Theme } from '../../../config'
import Styless from '../../Common/Styless'
import ActiveIcon from '../../../../image/active.png'
import NonActiveIcon from '../../../../image/non_Active.png'
import Zero from './Zero'
import ZeroNot from './ZeroNot'

const HeaderNeg = (props) => {
  return (
    <View style={{width: '100%', backgroundColor: 'white'}}>
      <View style={{width: '100%', height: 60,  marginLeft: '0%', marginRight: '0%',justifyContent: 'center', alignItems: 'center'}}>
        <View style={{flexDirection: 'row'}}>
          <Image style={{width: 10, height: 10, resizeMode: 'contain', marginRight: 5 }} source={props.neagtiveListPage == true ?  ActiveIcon :NonActiveIcon} />
          <Image style={{width: 10, height: 10, resizeMode: 'contain', marginLeft: 2}} source={props.zeroMovement == true ?  ActiveIcon :NonActiveIcon} />
        </View>
       {props.neagtiveListPage == true ? <ZeroNot {...props} /> : <Zero {...props} /> }
      </View>
      <View style={Styless.Line} />
    </View>
  )
}

export default HeaderNeg
