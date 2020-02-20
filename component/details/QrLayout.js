import React,{} from 'react'
import { View, TouchableOpacity, Image, Text } from 'react-native'
import qrcode from '../../../image/qrcode.png';
import QRCode from 'react-native-qrcode-svg';
import Loader from '../Common/Loader'
import Footer from './Footer'

const QrLayout = (props) => {

  return (
    <View style={{width: '100%', height: undefined}}>
      { props.showDetailLoader ? <Loader /> : 
        <View
        style={{width:'100%', height:135, justifyContent :'center', alignItems:'center'}}
        >
          { props.Item_Number == '' ?  <Text />: 
            // <QRCode
            //   value={props.Item_Number}
            //   size={135}
            //   logoBackgroundColor='transparent'
            // />
            <Footer {...props} />
          }
        </View>
      }
    </View>


  )
}

export default QrLayout;
