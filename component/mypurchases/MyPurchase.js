import React, { } from 'react'
import { View, Text, Image, TouchableOpacity, FlatList, StyleSheet, Dimensions , } from 'react-native'
import { SafeAreaView } from 'react-navigation'
import Styless from '../Common/Styless'
import Toolbar from '../Common/LoginToolbar'
import Search from './Search'
import mypurchagelist from '../../../image/mypurchagelist.png'
import QrIcon from '../../../image/qrcode.png';
import { Theme } from '../../config'
import Loader from '../Common/Loader'
import  QrCodePicker from '../../picker/QrCodePicker';

var mTitleSize = 0, mContainerSize = 0, mQrSize = 0, mQrMartop = 0, mQrMartBom = 0;
const mTotalHegiht = Dimensions.get('window').height

if (mTotalHegiht < 800) {
 
  mTitleSize = 16
  mContainerSize = 120
  mQrSize = 80
  mQrMartop = 10
  mQrMartBom = 10
} else {
  mTitleSize = 17
  mContainerSize = 147
  mQrSize = 110
  mQrMartop = 10
  mQrMartBom = 10
}

const MyPurchase = (props) => {

  console.log('props.List', props.List);
  

  if (props.ShowLoader)
    return (
      <SafeAreaView forceInset={{ bottom: 'never' }} style={Styless.MainContainer}>
        <Toolbar {...props} />
        <Text allowFontScaling={false} style={LocalStyle.Second_Header}>
          Invoices updated hourly
        </Text>
        <View style={Styless.ScrollContainer}>
          <Loader />
        </View>
      </SafeAreaView>
    )
    if (props.List.length == 0)
    return (
      <SafeAreaView forceInset={{ bottom: 'never' }} style={Styless.MainContainer}>
        <Toolbar {...props} />
        <Text allowFontScaling={false} style={LocalStyle.Second_Header}>
          Invoices updated hourly
        </Text>
        <View style={Styless.ScrollContainer}>
         
         <Text
         allowFontScaling={false}
         style={{alignSelf:'center', color : 'black', marginTop:20}}
         >
           My purchase not available
         </Text>
        </View>
      </SafeAreaView>
    )
  return (
    <SafeAreaView forceInset={{ bottom: 'never' }} style={Styless.MainContainer}>
      <Toolbar {...props} />
      <QrCodePicker {...props}/>
      <Text allowFontScaling={false} style={LocalStyle.Second_Header}>
        Invoices updated hourly
      </Text>
      <View style={Styless.ScrollContainer}>
        <View style={{ width: '100%', height: '85%' }}>
          <FlatList data={props.List} renderItem={({ item }) => (
            <View>
              <View
              style={LocalStyle.MainRowContainer}>
                <View style={LocalStyle.QR_Container}>
                  <TouchableOpacity
                  style={{justifyContent:'center', alignItems :'center'}}
                  onPress={()=>props.functionShowQrCode(true,item.barcode)}
                  >
                 <Image  
                 source={mypurchagelist}
                 style={{width:'100%', height:100, marginLeft:1,}}
                 resizeMode={'contain'}
                 /> 
                 <Text
                  style={{ textDecorationLine: 'underline',marginTop:-3}}
                   allowFontScaling={false}
                 >Invoice QR</Text>
                </TouchableOpacity>
                </View>
                
                <View
                  style={LocalStyle.Value_Container}
                >
                  <View
                    style={LocalStyle.Name_Container}
                  >
                    <TouchableOpacity
                    onPress={() => props.functionOpenPage('MyPurchaseDetails', item.invoicenum)}
                    >                  
                    <Text
                      numberOfLines={1}
                      allowFontScaling={false}
                      style={LocalStyle.Font_Color}
                    >Invoice Num</Text>
                    <Text
                     numberOfLines={1}
                      allowFontScaling={false}
                      style={LocalStyle.Name_label}
                    >Date</Text>
                    <Text
                     numberOfLines={1}
                      allowFontScaling={false}
                      style={LocalStyle.Name_label}>
                      Amount</Text>
                    <Text
                     numberOfLines={1}
                      allowFontScaling={false}
                      style={LocalStyle.Name_label}
                    >
                      Pmt Type</Text>
                      </TouchableOpacity>
                  </View>
                  <View
                    style={{ width: '60%', height: '100%', justifyContent: 'center', alignItems: 'flex-start' }}
                  >
                     <TouchableOpacity
                    onPress={() => props.functionOpenPage('MyPurchaseDetails', item.invoicenum)}
                    >
                    <Text
                     numberOfLines={1}
                      allowFontScaling={false}
                      style={{ marginTop: 6, color: 'black' , fontSize:mTitleSize}}
                    >{item.invoicenum}</Text>
                    <Text
                     numberOfLines={1}
                      allowFontScaling={false}
                      style={LocalStyle.Name_value}
                    >{item.invoicedate}</Text>
                    <Text
                     numberOfLines={1}
                      allowFontScaling={false}
                      style={LocalStyle.Name_value}
                    >
                      {'$' + item.invoicetotal}</Text>

                    <Text
                     numberOfLines={1}
                      allowFontScaling={false}
                      style={LocalStyle.Name_value}
                    >
                      {item.paymentmethod}</Text>
                      </TouchableOpacity>
                  </View>
                </View>
              </View>
              <View style={Styless.Line} />
            </View>)} keyExtractor={item => item.storeid} />
        </View>
      </View>
    </SafeAreaView>
  )
 }

const LocalStyle = StyleSheet.create({
  Second_Header: {
    color: 'black', alignSelf: 'center', marginBottom: 10, fontSize: 17
  },
  MainRowContainer: {
    width: '100%', height: mContainerSize, flexDirection: 'row'
  },
  QR_Container: {
    width: '25%',
     height: '100%',
      marginRight:'2%',
      backgroundColor:'#EBE8D7',
  },
  Value_Container: {
    width: '73%', height: '100%', flexDirection: 'row'
  },
  Name_Container: {
    width: '40%', height: '100%', justifyContent: 'center', alignItems: 'flex-start'
  },
  Font_Color: {
    color: '#757575',
    fontSize :mTitleSize,
    marginTop: 5
  },
  Name_label: {
    marginTop: 7, color: '#757575',
    fontSize :mTitleSize,
  },
  Name_value: {
    marginTop: 7, color: 'black',
    fontSize :mTitleSize,
  }

})

export default MyPurchase;