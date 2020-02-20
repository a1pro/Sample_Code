import React, { } from 'react';
import { View, Text, TextInput, Image , TouchableOpacity} from 'react-native';
import { Theme } from '../../../../config';
import DatePicker from 'react-native-datepicker'
import { Dropdown } from 'react-native-material-dropdown'

const PaymentType = (props) => {


  console.log('PaymentCurrentDate',props.PaymentCurrentDate);
  

  return (
    <View>
      <View style={{ width: '100%', height: 1, backgroundColor: Theme.PRIMARY_COLOR }} />

      <View style={{ width: '100%', height: 50, flexDirection: 'row', marginTop: 10 }}>
        <View style={{ width: '48%', height: '100%', marginRight: '2%' }}>
                       
          
<Text allowFontScaling={false} style={{ fontSize: 14, color: 'black', fontWeight: 'bold', marginTop: 2 }}>
            PaymentType
              </Text>
         

            <TouchableOpacity
            style={LocalStyle.Payment_Type} 
            onPress={()=>props.functionShowPaymentType('')}
            
            >
              <Text
              allowFontScaling={false}
              >{props.Payment_Type}</Text>

            </TouchableOpacity> 
            
       
      
        
        </View>


        <View style={{ width: '48%', height: '100%', marginLeft: 2 }}>
          <Text allowFontScaling={false} style={{ fontSize: 14, color: 'black', fontWeight: 'bold', marginTop: 2 }}>
            Payment Amount
              </Text>

          <TextInput
            style={{ width: '96%', height: 40, marginLeft: "2%", marginRight: '2%', borderColor: 'black', borderWidth: .5,  }}
            value={props.Payment_Amount}
            allowFontScaling={false}
            underlineColorAndroid='transparent'
            autoFocus={false}
            blurOnSubmit={false}
            autoCorrect={false}
            keyboardType={'number-pad'}
            onChangeText={(txt) => props.functionSetPaymentAmount({ txt })}

          />
        </View>

      </View>


      <View style={{ width: '100%', height: 50, flexDirection: 'row', marginTop: 10 }}>
        <View style={{ width: '48%', height: '100%', marginRight: '2%' }}>
          <Text allowFontScaling={false} style={{ fontSize: 14, color: 'black', fontWeight: 'bold', marginTop: 10 }}>
            Payment Date
            </Text>
          <View style={{ width: '100%', height: '100%', flexDirection: 'row', marginRight: '2%' }}>
            <DatePicker
              allowFontScaling={false}
              style={{ width: '100%', height: 20 }}
              date={props.PaymentCurrentDate}
              mode='date'
              placeholder='select date'
              format='YYYY-MM-DD'
              minDate={props.PaymentMinimumDate}
              maxDate='2050-12-01'
              confirmBtnText='Confirm'
              cancelBtnText='Cancel'
              customStyles={{ dateIcon: { position: 'absolute', left: 0, top: 4, marginLeft: 0 }, dateInput: { marginLeft: 0, height: 35, borderWidth: .5 } }}
              onDateChange={(date) => {
                props.functionSetPaymentDate({ date: date })
              }} />
          </View>


        </View>




      </View>
      <View style={{ width: '100%', height: 1, backgroundColor: Theme.PRIMARY_COLOR, marginTop: 30, marginBottom: 15 }} />
    </View>
  )
}


const LocalStyle={
  Payment_Type:{
    width: '96%', height: 40, borderColor: 'black', borderWidth: .5,marginLeft:'2%',  marginRight:'2%' ,
    textAlign:'center',justifyContent:'center', alignItems:'center'
  }
}
export default PaymentType;