import React, { } from 'react'
import { View, Text, ImageBackground, Dimensions, Image, TouchableOpacity, Platform } from 'react-native'
import { SafeAreaView } from 'react-navigation'
import Styless from '../Common/Styless'
import Toolbar from '../Common/LoginToolbar'
import giftcard from '../../../image/giftcard.png'
import { Theme } from '../../config'
import { Button } from '../controls'
// import Gpay from '../../../image/g-pay.png'
// import iosPay from '../../../image/ios.png'
import RewradsIcon from "../../../image/desibites2.png";
import Loader from '../Common/Loader';
import QRCode from 'react-native-qrcode-svg';
// import Gaypay from '../../../image/Gaypay.png';
// import iosPay from '../../../image/IosPay.png'; 

import Gaypay from '../../../image/Gaypay.png';
import iosPay from '../../../image/IosPay.png';


const MyRewards = (props) => {
  const mTotalWidth = Dimensions.get('window').width;
  if (props.ShowLoader)
    return (
      <View style={{ width: '100%', height: '100%', backgroundColor: 'white' }}>
        <View style={{ width: '80%', height: '100%', backgroundColor: 'white', marginTop: 20, marginLeft: '10%', marginRight: '10%' }}>
          <Loader />
        </View>
      </View>
    )
    else if(props.Gift_Number == '')
    return(
      <View style={{ width: '100%', height: '100%', backgroundColor: 'white' }}>
      <View style={{ width: '86%', height: '100%', backgroundColor: 'white', marginTop: 20, marginLeft: '7%', marginRight: '7%' }}>
     
     <Text
     allowFontScaling={false}
     style={{alignSelf:'center', color :'black'}}>
       MyRewards Not Available

     </Text>
     </View>
     </View>)
  return (

    <View style={{ width: '100%', height: '100%', backgroundColor: 'white' }}>
      <View style={{ width: '80%', height: '100%', backgroundColor: 'white', marginTop: 20, marginLeft: '10%', marginRight: '10%' }}>
        <ImageBackground
          style={{ width: '100%', height: 200 }} source={giftcard} resizeMode='stretch'>
          <Image
            style={{ position: 'relative', top: 65, left: 120, width: 80, height: 80, resizeMode: 'contain' }}
            source={RewradsIcon}
          />
          <Text allowFontScaling={false}
            style={{ position: 'relative', top: 70, left: 25, right: 0, bottom: 50, fontSize: 14, color: 'white' }}>
           {props.Gift_Number}
            </Text>
        </ImageBackground>
        {props.Gift_Number != '' &&
          <View
            style={{ width: '100%', height: 210, justifyContent: 'center', alignItems: 'center' }}>
             <QRCode
              value={props.Gift_Number}
              size={160}
              logoBackgroundColor='transparent'
            /> 
          </View>}
          <View style={{ width: '100%', height: 50, marginBottom: 20, backgroundColor: 'white', marginTop: 0, 
          justifyContent: 'center', alignItems: 'center' }}>

         
        {Platform.OS == 'ios' ?
            <TouchableOpacity>
              <Image style={{ width: 170, height: 100, resizeMode: 'contain' }} source={iosPay} />
            </TouchableOpacity> :


            <TouchableOpacity>
              <Image style={{ width: 220, height: 50, resizeMode: 'contain' }} source={Gaypay} />
            </TouchableOpacity>}


          
        </View>
        <Text allowFontScaling={false} style={{ alignSelf: 'center', color: 'black', fontSize: 16 }}>
          Scan at Checkout to get the Rewards
          </Text>
        <View style={{ width: '100%', height: undefined, justifyContent: 'center', alignItems: 'center' }}>
          <View style={{ width: undefined, height: undefined, flexDirection: 'row', marginTop: 10 }}>
            <Text allowFontScaling={false} style={{ alignSelf: 'center', color: 'black', fontWeight: 'bold', fontSize: 16 }}>
              Bonus Points
              </Text>
            <Text allowFontScaling={false} style={{ alignSelf: 'center', marginTop: 2, color: Theme.PRIMARY_COLOR, marginLeft: 10, fontWeight: 'bold', fontSize: 16 }}>
              {props.Bonus_Point}
            </Text>
          </View>
          <View style={{ width: undefined, height: undefined, flexDirection: 'row' }}>
            <Text allowFontScaling={false} style={{ alignSelf: 'center', marginTop: 10, color: 'black', fontWeight: 'bold', fontSize: 16 }}>
              Gift Card Balance
              </Text>
            <Text allowFontScaling={false} style={{ alignSelf: 'center', marginTop: 10, color: Theme.PRIMARY_COLOR, marginLeft: 10, fontWeight: 'bold', fontSize: 16 }}>
              ${props.Gift_Balance}
            </Text>
          </View>
        </View>
        <Button click={() => props.functionOpenPage('MyRewardsTransaction')}>
          Rewards Transactions
          </Button>

        <Text
          allowFontScaling={false}
          style={{ marginTop: 15 }}
        >
          ***Rewards Balance and Transactions may not reflect the transactions that have been performed in the last 15 mins or during system outages.
          </Text>
      </View>
    </View>

  )
}

export default MyRewards
