import React, {} from 'react';
import { View, Text, Image, Touchable } from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown';
import {Theme} from '../../../config';

const PaymentFilter=(props)=>{
    return(


        <View style={{position: 'absolute', right: 0}}>
        <View style={{width: 120, height: 40, borderWidth: 1,justifyContent: 'center', alignItems: 'center', marginRight: 5,backgroundColor: Theme.PRIMARY_COLOR, borderRadius: 5 }}>
        
        <ModalDropdown
        disabled={false}
        style={{width: 120, height: 30 }}
        options={['Today', 'Yesterday', 'Week To Date', 'Month To Date', 'Year To Date', 'Last Week', 'Last Month' , 'Last Year']}
        defaultValue={   props.PaymentFilterValue}
        textStyle={{color: 'black', alignSelf: 'center', fontStyle: 'normal',marginTop: 5, fontSize: 15 }}
       
        onSelect={(idx, value) => props.functionListFilter(idx, value)}
       renderButtonText={(row) => <Text>
                                      {row}
                                    </Text>}
        renderRow={(row) => <View style={{width: 120, height: 40, justifyContent: 'center', alignItems: 'center'}}>
                               <Text allowFontScaling={false} style={{fontSize: 17}}>
                                 {row}
                               </Text>
                             </View>} 
                             />
         
        </View>
      </View>

       
    )
}

export default PaymentFilter;