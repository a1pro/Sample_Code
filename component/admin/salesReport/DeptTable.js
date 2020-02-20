import React, {} from 'react';
import { View, Dimensions, Text, StyleSheet } from 'react-native'
import {Theme} from '../../../config';

const DeptTable=(props)=>{

  console.log('props.DeptmList', props.DeptmList);
  

    const mData = props.DeptmList.map((data) => {
        return (
          <View>

         
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
           
     CAFE
            </Text>
           </View>
           <View
           style={LocalStyle.MainBox}
           >
      <Text allowFontScaling={false} style={{marginLeft: 5, marginTop: 2}}>
      ${data.CAFE}
            </Text>
           </View>
           <View
           style={LocalStyle.MainBox}
           >
      <Text allowFontScaling={false} style={{marginLeft: 5, marginTop: 2}}>
      {props.functionPercatage(data.TOTALSALES, data.CAFE)}
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
           
     FRESHSNACKS
            </Text>
           </View>
           <View
           style={LocalStyle.MainBox}
           >
      <Text allowFontScaling={false} style={{marginLeft: 5, marginTop: 2}}>
      ${data.FRESHSNACKS}
            </Text>
           </View>
           <View
           style={LocalStyle.MainBox}
           >
      <Text allowFontScaling={false} style={{marginLeft: 5, marginTop: 2}}>
      {props.functionPercatage(data.TOTALSALES, data.FRESHSNACKS)}
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
           
     FROZEN
            </Text>
           </View>
           <View
           style={LocalStyle.MainBox}
           >
      <Text allowFontScaling={false} style={{marginLeft: 5, marginTop: 2}}>
      ${data.FROZEN}
            </Text>
           </View>
           <View
           style={LocalStyle.MainBox}
           >
      <Text allowFontScaling={false} style={{marginLeft: 5, marginTop: 2}}>
           {props.functionPercatage(data.TOTALSALES, data.FROZEN)}
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
           
     GROCERIES
            </Text>
           </View>
           <View
           style={LocalStyle.MainBox}
           >
      <Text allowFontScaling={false} style={{marginLeft: 5, marginTop: 2}}>
      ${data.GROCERIES}
            </Text>
           </View>
           <View
           style={LocalStyle.MainBox}
           >
      <Text allowFontScaling={false} style={{marginLeft: 5, marginTop: 2}}>
      {props.functionPercatage(data.TOTALSALES, data.GROCERIES)}
            </Text>
           </View>
          </View>

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
           
     MEAT
            </Text>
           </View>
           <View
           style={LocalStyle.MainBox}
           >
      <Text allowFontScaling={false} style={{marginLeft: 5, marginTop: 2}}>
      ${data.MEAT}
            </Text>
           </View>
           <View
           style={LocalStyle.MainBox}
           >
      <Text allowFontScaling={false} style={{marginLeft: 5, marginTop: 2}}>
      {props.functionPercatage(data.TOTALSALES, data.MEAT)}
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
           
     PRODUCE
            </Text>
           </View>
           <View
           style={LocalStyle.MainBox}
           >
      <Text allowFontScaling={false} style={{marginLeft: 5, marginTop: 2}}>
      ${data.PRODUCE}
            </Text>
           </View>
           <View
           style={LocalStyle.MainBox}
           >
      <Text allowFontScaling={false} style={{marginLeft: 5, marginTop: 2}}>
      {props.functionPercatage(data.TOTALSALES, data.PRODUCE)}
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
    
    return(
        <View>

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
export default DeptTable;