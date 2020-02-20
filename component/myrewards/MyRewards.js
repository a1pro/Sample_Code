import React,{} from 'react'
import { View, Text, ImageBackground, Dimensions, Image , TouchableOpacity} from 'react-native'
import { SafeAreaView } from 'react-navigation'
import Styless from '../Common/Styless'
import Toolbar from '../Common/LoginToolbar'
import giftcard from '../../../image/giftcard.png'
import qrcode from '../../../image/qrcode.png'
import { Theme } from '../../config'
import { Button } from '../controls'
import Gpay from '../../../image/g-pay.png'
import iosPay from '../../../image/ios.png'
import Layout6 from './Layout6';
import Layout10 from './Layout10';


const MyRewards = (props) => {
  const mTotalWidth = Dimensions.get('window').width;
  const mTotalHegiht = Dimensions.get('window').height;
  return (
    <SafeAreaView forceInset={{ bottom: 'never'}} style={Styless.MainContainer}>
      <Toolbar {...props}/>
      <Text allowFontScaling={false} style={{ color: 'black',alignSelf: 'center',  marginBottom: 10, fontSize: 16}}>
        Rewards updated every 15 mins
      </Text>
     
{<Layout10 {...props}/>}

      {/* {mTotalHegiht < 800 ? <Layout6 {...props}/> :<Layout10 {...props}/>}    */}
    </SafeAreaView>
  )
}

export default MyRewards
