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

const Slider = (props) => {
  const mTotalWidth = Dimensions.get('window').width
  return (
    <View style={{width: '100%', height: '100%'}}>
      <Swiper
        style={{ backgroundColor: 'white', marginTop: 0 }}
        showsPagination={true}
        autoplay={true}
        loop={true}>
        <ImageBackground resizeMode='stretch' style={{width: mTotalWidth, height: '100%'}} source={image1}>
          <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
            <Text allowFontScaling={false} style={{color: 'white', fontSize: 30, fontWeight: 'bold'}}>
              KC India Mart
            </Text>
            <Text allowFontScaling={false} style={{color: 'white', fontSize: 17, fontWeight: 'bold'}}>
              Overland Park
            </Text>
          </View>
        </ImageBackground>
        <ImageBackground resizeMode='stretch' style={{width: mTotalWidth, height: '100%', resizeMode: 'stretch'}} source={image2}>
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
            <Text allowFontScaling={false} style={{color: 'white', fontSize: 17, fontWeight: 'bold'}}>
              Overland Park
            </Text>
          </View>
        </ImageBackground>
      </Swiper>
      <View style={{width: '100%', height: 200, backgroundColor: 'white', marginLeft: 10}}>
        <Text allowFontScaling={false} style={{color: 'black',  marginTop: 5,fontSize: 16}}>
          Address:
        </Text>
        <Text style={{color: '#616161', marginTop: 5, fontSize: 16}} allowFontScaling={false}>
          8542 West 133rd Street Overland Park KS 66213
        </Text>
        <Text style={{color: '#616161', fontSize: 16}} allowFontScaling={false}>
          United States
        </Text>
        <Text allowFontScaling={false} style={{color: 'black', marginTop: 5,fontSize: 15}}>
          Contact Numbers:
        </Text>
        <Text style={{color: '#616161', fontSize: 16}} allowFontScaling={false}>
          913-681-0808
        </Text>
        <Text style={{color: '#616161', fontSize: 16,color: 'black'}} allowFontScaling={false}>
          Timings :
        </Text>
        <View style={{width: '100%', height: undefined, flexDirection: 'row'}}>
          <View style={{width: '30%'}}>
            <Text style={{color: '#616161', fontSize: 16}} allowFontScaling={false}>
              Mon  
            </Text>
            <Text style={{color: '#616161', fontSize: 16}} allowFontScaling={false}>
              Sun - Thu
            </Text>
            <Text style={{color: '#616161', fontSize: 16}} allowFontScaling={false}>
              Fri
            </Text>
            <Text style={{color: '#616161', fontSize: 16}} allowFontScaling={false}>
              Sat
            </Text>
          </View>
          <View style={{width: '60%'}}>
            <Text style={{color: '#616161', fontSize: 16}} allowFontScaling={false}>
              12:00 PM - 9:00 PM
            </Text>
            <Text style={{color: '#616161', fontSize: 16}} allowFontScaling={false}>
              11:00 AM - 9:00 PM
            </Text>
            <Text style={{color: '#616161', fontSize: 16}} allowFontScaling={false}>
              11:00 AM - 9:30 PM
            </Text>
            <Text style={{color: '#616161', fontSize: 16}} allowFontScaling={false}>
              10:00 AM - 9:30 PM
            </Text>
          </View>
        </View>
      </View>
    </View>

  )
}

export default Slider
