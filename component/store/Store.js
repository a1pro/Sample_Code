import React,{} from 'react'
import { View, Text, ScrollView, TextInput, Image, Dimensions, ImageBackground } from 'react-native'
import { SafeAreaView } from 'react-navigation'
import Styless from '../Common/Styless'
import Toolbar from '../Common/LoginToolbar'
import { Button } from '../controls'


import Swiper from 'react-native-swiper'

import image1 from '../../../image/img1.jpg'
import image2 from '../../../image/img2.jpg'
import image3 from '../../../image/img3.jpg'
import image4 from '../../../image/img4.jpg'
import image5 from '../../../image/img5.jpg'
import Map from './Map';
import Slider from './Slider'

const Store = (props) => {
  const mTotalWidth = Dimensions.get('window').width
  return (
    <SafeAreaView style={Styless.MainContainer}>
      <Toolbar {...props}/>
      <View style={Styless.ScrollContainer}>
        <View style={{ flex:2, width: '100%', height: '100%', flexDirection: 'column'}}>
        <View
        style={{flex:1.3, }}
        >
       <Slider {...props}/> 
       
        </View>
        <View
        style={{flex:.7, }}
        >
         <Map {...props}/>
        </View>
        
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Store
