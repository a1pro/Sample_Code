import React, {} from 'react';
import { View, Text,  Dimensions,  StyleSheet, Image , } from 'react-native'
import ActiveIcon from '../../../image/active.png'
import NonActiveIcon from '../../../image/non_Active.png'

const Indicator =(props)=>{

    return(
        <View>
            <View style={{ width: '100%', height: 20, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
          <Image style={{ width: 10, height: 10, resizeMode: 'contain', marginRight: 2 }} 
          source={ props.Department == true?  ActiveIcon : NonActiveIcon} />
          <Image style={{ width: 10, height: 10, resizeMode: 'contain', marginLeft: 2 }} 
          source={  props.Department == true?   NonActiveIcon : ActiveIcon} />
        </View>  
            </View>
    )
}
export default Indicator;