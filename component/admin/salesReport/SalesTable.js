import React, {} from 'react';
import { View, Dimensions, Text, StyleSheet } from 'react-native';
import {Theme} from '../../../config';


const SalesTable=(props)=>{



  
    const mData = props.FinalData.map((data) => {
        return (
          <View>

          <View style={{width: '100%', height: 30,flexDirection: 'row' }}>
           <View
           style={LocalStyle.BlankBox}
           >
          <View style={{width: 20, height: 20, borderRadius: 20 / 2, backgroundColor: data.ACCOUNT_COLOR}} />
           </View>
           <View
           style={LocalStyle.PmtBox}
           >
     <Text allowFontScaling={false} style={{marginLeft: 5, marginTop: 2}}>
           
     ACCOUNT
            </Text>
           </View>
           <View
           style={LocalStyle.MainBox}
           >
      <Text allowFontScaling={false} style={{marginLeft: 5, marginTop: 2}}>
      ${data.ACCOUNT}
            </Text>
           </View>
           <View
           style={LocalStyle.MainBox}
           >
      <Text allowFontScaling={false} style={{marginLeft: 5, marginTop: 2}}>
      {props.functionPercatage(data.TOTALSALES, data.ACCOUNT)}
            </Text>
           </View>
          </View>

         
          <View style={{width: '100%', height: 30,flexDirection: 'row' }}>
           <View
           style={LocalStyle.BlankBox}
           >
    <View style={{width: 20, height: 20, borderRadius: 20 / 2, backgroundColor: data.CASH_COLOR}} />
           </View>
           <View
           style={LocalStyle.PmtBox}
           >
     <Text allowFontScaling={false} style={{marginLeft: 5, marginTop: 2}}>
           
              CASH
            </Text>
           </View>
           <View
           style={LocalStyle.MainBox}
           >
      <Text allowFontScaling={false} style={{marginLeft: 5, marginTop: 2}}>
      ${data.CASH}
            </Text>
           </View>
           <View
           style={LocalStyle.MainBox}
           >
      <Text allowFontScaling={false} style={{marginLeft: 5, marginTop: 2}}>
      {props.functionPercatage(data.TOTALSALES, data.CASH)}
            </Text>
           </View>
          </View>

          <View style={{width: '100%', height: 30,flexDirection: 'row' }}>
           <View
           style={LocalStyle.BlankBox}
           >
    <View style={{width: 20, height: 20, borderRadius: 20 / 2, backgroundColor: data.CREDIT_COLOR}} />
           </View>
           <View
           style={LocalStyle.PmtBox}
           >
     <Text allowFontScaling={false} style={{marginLeft: 5, marginTop: 2}}>
           
              CREDIT
            </Text>
           </View>
           <View
           style={LocalStyle.MainBox}
           >
      <Text allowFontScaling={false} style={{marginLeft: 5, marginTop: 2}}>
      ${data.CREDIT}
            </Text>
           </View>
           <View
           style={LocalStyle.MainBox}
           >
      <Text allowFontScaling={false} style={{marginLeft: 5, marginTop: 2}}>
      {props.functionPercatage(data.TOTALSALES, data.CREDIT)}
            </Text>
           </View>
          </View>

          <View style={{width: '100%', height: 30,flexDirection: 'row' }}>
           <View
           style={LocalStyle.BlankBox}
           >
    <View style={{width: 20, height: 20, borderRadius: 20 / 2, backgroundColor: data.GIFTCARD_COLOR}} />
           </View>
           <View
           style={LocalStyle.PmtBox}
           >
     <Text allowFontScaling={false} style={{marginLeft: 5, marginTop: 2}}>
           
              GIFTCARD
            </Text>
           </View>
           <View
           style={LocalStyle.MainBox}
           >
      <Text allowFontScaling={false} style={{marginLeft: 5, marginTop: 2}}>
      ${data.GIFTCARD}
            </Text>
           </View>
           <View
           style={LocalStyle.MainBox}
           >
      <Text allowFontScaling={false} style={{marginLeft: 5, marginTop: 2}}>
            {props.functionPercatage(data.TOTALSALES, data.GIFTCARD)}
            </Text>
           </View>
          </View>

          <View style={{width: '100%', height: 30,flexDirection: 'row' }}>
           <View
           style={LocalStyle.BlankBox}
           >
    <View style={{width: 20, height: 20, borderRadius: 20 / 2, backgroundColor: data.EDT_COLOR}} />
           </View>
           <View
           style={LocalStyle.PmtBox}
           >
     <Text allowFontScaling={false} style={{marginLeft: 5, marginTop: 2}}>
           
     EBT
            </Text>
           </View>
           <View
           style={LocalStyle.MainBox}
           >
      <Text allowFontScaling={false} style={{marginLeft: 5, marginTop: 2}}>
      ${data.EDT}
            </Text>
           </View>
           <View
           style={LocalStyle.MainBox}
           >
      <Text allowFontScaling={false} style={{marginLeft: 5, marginTop: 2}}>
      {props.functionPercatage(data.TOTALSALES, data.EDT)}
            </Text>
           </View>
          </View>

         

          <View style={{width: '100%', height: 30,flexDirection: 'row' }}>
           <View
           style={LocalStyle.BlankBox}
           >
    <View style={{width: 20, height: 20, borderRadius: 20 / 2, backgroundColor: data.ONLINE_COLOR}} />
           </View>
           <View
           style={LocalStyle.PmtBox}
           >
     <Text allowFontScaling={false} style={{marginLeft: 5, marginTop: 2}}>
           
     ONLINE
            </Text>
           </View>
           <View
           style={LocalStyle.MainBox}
           >
      <Text allowFontScaling={false} style={{marginLeft: 5, marginTop: 2}}>
      ${data.ONLINE}
            </Text>
           </View>
           <View
           style={LocalStyle.MainBox}
           >
      <Text allowFontScaling={false} style={{marginLeft: 5, marginTop: 2}}>
      {props.functionPercatage(data.TOTALSALES, data.ONLINE)}
            </Text>
           </View>
          </View>
          </View>
        )
      })
    return(
        <View>
            {mData}
        </View>
    )
}
const LocalStyle = StyleSheet.create({
    circle: {
      width: 20,
      height: 20,
      borderRadius: 20 / 2,
      backgroundColor: 'red'
    },
    TitleLabel: {
      fontSize: 17, alignSelf: 'center', marginTop: 5, fontWeight: 'bold'
    },
    Container:{
      width: '90%', height: '100%', marginLeft: '5%', marginRight: '5%'
    },
    MainBox:{
      width:'25%', height:'100%', 
      borderWidth: 0.5,
      borderColor: Theme.PRIMARY_COLOR,
      justifyContent :'center',
      alignItems:'center'
    },
    BlankBox:{
      width:'20%', height:'100%', 
      borderWidth: 0.5,
      borderColor: Theme.PRIMARY_COLOR,
      justifyContent :'center',
      alignItems:'center'
    },
    PmtBox:{
      width:'31%', height:'100%', 
      borderWidth: 0.5,
      borderColor: Theme.PRIMARY_COLOR,
      justifyContent :'center',
      alignItems:'center'
    }
  })
export default SalesTable;