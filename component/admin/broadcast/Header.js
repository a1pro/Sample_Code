import React,{} from 'react';
import {View, Image} from 'react-native';
import ActiveIcon from '../../../../image/active.png'
import NonActiveIcon from '../../../../image/non_Active.png';
import ffgh from '../../Common/Styless';
import Styless from '../../Common/Styless';

const Header=(props)=>{
    return(
        <View>

       
        <View style={{width: '100%', height: 50,  marginLeft: '0%', marginRight: '0%',justifyContent: 'center', alignItems: 'center'}}>
        <View style={{flexDirection: 'row'}}>
          <Image style={{width: 10, height: 10, resizeMode: 'contain', marginRight: 5 }} source={props.Employees == true ?  ActiveIcon :NonActiveIcon} />
          <Image style={{width: 10, height: 10, resizeMode: 'contain', marginLeft: 2}} source={props.Customer == true ?  ActiveIcon :NonActiveIcon} />
        </View>

        </View>
        <View style={Styless.Line}/>
        </View>
    )
}

export default Header;