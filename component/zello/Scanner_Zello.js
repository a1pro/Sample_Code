import React, { } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Image, Dimensions, Platform, TouchableWithoutFeedback } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import Styless from '../Common/Styless';
import Toolbar from '../Common/LoginToolbar';
import QRCodeScanner from 'react-native-qrcode-scanner';
import ScanRecangtable from '../../../image/ScanRecangtable.png';
import Loader from '../Common/Loader';
import ToggleOff from '../../../image/toggleOff.png';
import ToggleON from '../../../image/toggleOn.png';
import FlashOffIcon from '../../../image/flashoff.png';
import FlashOnIcon from '../../../image/flashon.png';
import { Theme } from '../../config'
const mHeight = Dimensions.get('window').height;
import CreateListPicker from '../../picker/CreateListPicker';



const Scanner_Zello = (props) => {

  if (props.ShowLoader)
    return (
      <SafeAreaView
        forceInset={{ bottom: 'never' }}
        style={Styless.MainContainer}
      >
        <Toolbar {...props} />

        <View
          style={{ width: '100%', height: Platform.OS == 'ios' ? '93%' : '90%', backgroundColor: 'white' }}
        >
          <Loader />
        </View>
      </SafeAreaView>
    )

  return (
    <SafeAreaView
      forceInset={{ bottom: 'never' }}
      style={Styless.MainContainer}>
      <Toolbar {...props} />
      <CreateListPicker {...props}/>
      <View
        style={{ backgroundColor: 'white', width: '100%', height: 70, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>

        <View
          style={{ width: '80%', height: '100%', justifyContent:'center', alignItems:'center'}}>
          <Text
            allowFontScaling={false}
            style={{ textAlign: 'center', fontSize: 17, marginLeft: 15, marginRight: 0, fontWeight: 'bold' }}>
            Keep the product upright and in good lighting for better scanning.
          </Text>
        </View>

          <TouchableWithoutFeedback
          onPress={()=>props.functionTorch('')}
          >
          <Image
          style={{ width: 35, height: 35, resizeMode: 'contain' }}
          source={props.isTorchOn == true ? FlashOnIcon : FlashOffIcon}
        />
          </TouchableWithoutFeedback>
       
      </View>
      <View
        style={{ width: '100%', height: Platform.OS == 'ios' ? '83%' : '80%', backgroundColor: 'white' }}>
        {props.Scan_Start == true ? 
        <QRCodeScanner
          onRead={(e) => props.functionOpenPage(e)}
          reactivate={props.Scan_Start}
          cameraStyle={{ width: '100%', height: '100%' }}
        /> : <View />}
      </View>

    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 0,
    color: '#777',
    marginBottom: 10,
  },
  textBold: {
    fontWeight: '500',
    color: '#000',
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },
  buttonTouchable: {
    padding: 0,
    backgroundColor: 'white',
    width: '100%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
});

export default Scanner_Zello;
