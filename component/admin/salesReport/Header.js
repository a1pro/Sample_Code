import React, {} from 'react'
import { View, Text, Image, Touchable } from 'react-native'
import ModalDropdown from 'react-native-modal-dropdown'
import { Theme } from '../../../config'
import Styless from '../../Common/Styless'
import PayIcon from '../../../../image/pay.png'
import DepartmentIcon from '../../../../image/Department.png'
import ActiveIcon from '../../../../image/active.png'
import NonActiveIcon from '../../../../image/non_Active.png'
import PaymentFilter from './PaymentFilter';
import DeptFilter from './DeptFilter';

const Header = (props) => {
  return (
    <View style={{width: '100%', backgroundColor: 'white'}}>
      <View style={{width: '100%', height: 60,  marginLeft: '0%', marginRight: '0%',justifyContent: 'center', alignItems: 'center'}}>
        <View style={{flexDirection: 'row'}}>
          <Image style={{width: 10, height: 10, resizeMode: 'contain', marginRight: 5 }} source={props.Payment == true ?  ActiveIcon :NonActiveIcon} />
          <Image style={{width: 10, height: 10, resizeMode: 'contain', marginLeft: 2}} source={props.Department == true ?  ActiveIcon :NonActiveIcon} />
        </View>
       
       {props.Payment == true ? <PaymentFilter {...props} /> : <DeptFilter {...props}/> }
      
      </View>
      <View style={Styless.Line} />
    </View>

  )
}

export default Header
