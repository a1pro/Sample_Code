import React,{} from 'react'
import { View, Text, ScrollView, TextInput, Image, Dimensions, ImageBackground } from 'react-native'

import {Theme} from '../../config';

import Swiper from 'react-native-swiper'

import image1 from '../../../image/img1.jpg'
import image2 from '../../../image/img2.jpg'
import image3 from '../../../image/img3.jpg'
import image4 from '../../../image/img4.jpg'
import image5 from '../../../image/img5.jpg'
import Cofee from '../../../image/coffee.png';

const Slider = (props) => {
  const mTotalWidth = Dimensions.get('window').width
  return (
    <View style={{width: '100%', height: '100%'}}>
      <Swiper
        style={{ backgroundColor: 'white', marginTop: 0 }}
        paginationStyle={{ bottom: 50 }}
        showsPagination={true}
        autoplay={false}
        loop={true}
        dotColor="#000" 
        activeDotColor={Theme.PRIMARY_COLOR}
        >
        {/* <ImageBackground resizeMode='stretch' style={{width: mTotalWidth, height: '100%'}} source={image1}>
          <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
            <Text allowFontScaling={false} style={{color: 'white', fontSize: 30, fontWeight: 'bold'}}>
              KC India Mart
            </Text>
            <Text allowFontScaling={false} style={{color: 'white', fontSize: 17, fontWeight: 'bold'}}>
              Overland Park
            </Text>
          </View>
        </ImageBackground> */}

        <View
       style={{width: mTotalWidth, height: '100%',justifyContent:'center', alignItems:'center' }}
        >
        <Image 
        style={{width:mTotalWidth-50, height:'100%', resizeMode:'contain'}}
        source={Cofee}
        />

        </View>
        <View
       style={{width: mTotalWidth, height: '100%',justifyContent:'center', alignItems:'center' }}
        >
        <Image 
        style={{width:mTotalWidth-50, height:'100%', resizeMode:'contain'}}
        source={Cofee}
        />

        </View>
        {/* <ImageBackground resizeMode='stretch' style={{width: mTotalWidth, height: '100%', resizeMode: 'stretch'}} source={image2}>
          <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
            <Text allowFontScaling={false} style={{color: 'white', fontSize: 30, fontWeight: 'bold'}}>
              KC India Mart
            </Text>
            <Text allowFontScaling={false} style={{color: 'white', fontSize: 17, fontWeight: 'bold'}}>
              Overland Park
            </Text>
          </View>
        </ImageBackground>
        <ImageBackground resizeMode='stretch' style={{width: mTotalWidth, height: '100%', resizeMode: 'stretch'}} source={image3}>
          <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
            <Text allowFontScaling={false} style={{color: 'white', fontSize: 30, fontWeight: 'bold'}}>
              KC India Mart
            </Text>
            <Text allowFontScaling={false} style={{color: 'white', fontSize: 17, fontWeight: 'bold'}}>
              Overland Park
            </Text>
          </View>
        </ImageBackground>
        <ImageBackground resizeMode='stretch' style={{width: mTotalWidth, height: '100%', resizeMode: 'stretch'}} source={image4}>
          <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
            <Text allowFontScaling={false} style={{color: 'white', fontSize: 30, fontWeight: 'bold'}}>
              KC India Mart
            </Text>
            <Text allowFontScaling={false} style={{color: 'white', fontSize: 17, fontWeight: 'bold'}}>
              Overland Park
            </Text>
          </View>
        </ImageBackground>
        <ImageBackground style={{width: mTotalWidth, height: '100%' }} source={image5} resizeMode='stretch'>
          <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
            <Text allowFontScaling={false} style={{color: 'white', fontSize: 30, fontWeight: 'bold'}}>
              KC India Mart
            </Text>
            <Text allowFontScaling={false} 
            
            style={{color: 'white', fontSize: 17, fontWeight: 'bold'}}>
              Overland Park
            </Text>
          </View>
        </ImageBackground> */}
      </Swiper>
      
    </View>

  )
}

export default Slider
