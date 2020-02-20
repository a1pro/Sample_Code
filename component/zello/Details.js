import React,{} from 'react'
import { View, Text, ScrollView, Dimensions, ImageBackground,  TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native'
import { SafeAreaView } from 'react-navigation';
import {Image} from 'react-native-elements';
import NetworkApi from '../../network/NetworkApi';
import Styless from '../Common/Styless';
import {Theme} from '../../config';
import Loader from '../Common/Loader';
import LocIcon from '../../../image/loc_ic.png';
import Toolbar from '../Common/LoginToolbar';
import Description from './Description';
import Footer from './Footer';
import ImageViewer from 'react-native-image-zoom-viewer'


const mTotalHegiht = Dimensions.get('window').height;
const mTotalWidth = Dimensions.get('window').width

var mTitleFont = 16
var mNormalFont = 14
if (mTotalHegiht > 890) {
  mTitleFont = 18
  mNormalFont = 17
}else {
  mTitleFont = 16
  mNormalFont = 15
}

const Details = (props) => {

  if(props.ShowLoader)
  return (
    <SafeAreaView  style={Styless.MainContainer}>
    <Toolbar {...props}/>
    <ScrollView style={LocalStyle.MainContainer}>
    <Loader />
    </ScrollView>
    </SafeAreaView>
  )  
  return (
    <SafeAreaView style={Styless.MainContainer}>
    <Toolbar {...props}/>
    <ScrollView
    style={LocalStyle.MainContainer}
    >
      <Text allowFontScaling={false} style={LocalStyle.TitleLabel}>
        {props.P_NAME}
      </Text>
        <View style={LocalStyle.SliderContainer}>
          <ImageViewer 
            backgroundColor='#fff'
            style = {{width:mTotalWidth-50, height:'100%', resizeMode:'contain', backgroundColor: '#fff'}}
            imageUrls={[ { url :NetworkApi.IAMGE_BASE_URL+ props.Productimage }]}
            PlaceholderContent={<ActivityIndicator />}
          />
        </View>
        <View style={{width: '100%', height: 65, flexDirection: 'row', backgroundColor: '#e0e0e0' }}>
          <View style={{width: '40%', height: '100%',  alignItems: 'center',justifyContent: 'center', flexDirection: 'row'}}>
            <View 
            style={{backgroundColor: Theme.PRIMARY_COLOR, borderRadius: 5, width: undefined, height: undefined,
              justifyContent: 'center', alignItems: 'center', marginLeft: 0 }}
            >
              <Text 
                style={LocalStyle.CountLabel} 
                allowFontScaling={false}
              >
                {props.PStock}
              </Text>
            </View>
            <Text allowFontScaling={false} style={{marginLeft: 10, fontSize: 20}}>
              In Stock
            </Text>
          </View>
          <TouchableOpacity 
            onPress={() => props.functionOpenPage('MapContainer', props.Location)}
            style={{width: '55%', height: '100%',  justifyContent: 'center', alignItems: 'flex-end', marginRight: 5}}
          >
            <View style={{width: undefined, height: undefined, flexDirection: 'row', marginLeft: 0, marginTop: 0}}>
              <Image style={{width: 35, height: 35, resizeMode: 'contain', marginTop: 0}} source={LocIcon} />
              <Text allowFontScaling={false} style={{color: 'black', fontWeight: 'bold', marginTop: 7}}>
                {props.PLocation}
              </Text>
            </View>
            <Text allowFontScaling={false} style={{marginLeft: 2}}>
              Tap to Locate on Store Map
            </Text>
          </TouchableOpacity>
        </View>
        <Footer {...props}/>
        <Description {...props}/>

    </ScrollView>
    </SafeAreaView>
  )
}
const LocalStyle = StyleSheet.create({
  MainContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white'
  },
  SliderContainer: {
    width: '100%',
    height: mTotalHegiht / 2 - 100,
    justifyContent :'center',
    alignItems:'center'
  },
  ButtonContainer: {
    width: 200,
    height: 40,
    borderRadius: 10,
    backgroundColor: Theme.PRIMARY_COLOR,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 0
  },
  ButtonLabel: {
    color: 'black', alignSelf: 'center'
  },
  TitleLabel: {
    marginLeft: 10, fontWeight: 'bold', fontSize: 18
  },
  Text: {
    marginLeft: 10,
    fontSize: mTitleFont,
    marginTop: 3,
    color: 'black',
    marginTop: 10

  },
  DescriptionText: {
    marginLeft: 10,
    fontSize: mTitleFont,
    marginTop: 3,
    color: 'black'

  },
  DescriptionTitle: {
    marginLeft: 10,
    fontSize: mTitleFont,
    color: 'black',
    fontWeight: 'bold'
  },
  CountLabel: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
    marginLeft:2,
    marginRight:2
    
  },
  FillStock: {
    marginRight: 10,
    width: 120,
    height: 40,
    borderRadius: 10,
    backgroundColor: Theme.PRIMARY_COLOR,

    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 0
  }
})


export default Details
