import React, {} from 'react'
import { View, Text, Dimensions, Image, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-navigation'
import Styless from '../../Common/Styless'
import Toolbar from '../../Common/LoginToolbar'
import { Theme } from '../../../config'
import ImageViewer from 'react-native-image-zoom-viewer'

var mTitleSize=0;
const mTotalHegiht = Dimensions.get('window').height;
 

if(mTotalHegiht <800)
{
    mTitleSize=16;
}
else
{
    mTitleSize=17;
}

const SpecialDetails = (props) => {
  return (
    <SafeAreaView forceInset={{ bottom: 'never'}} style={Styless.MainContainer}>
      <Toolbar {...props}/>
      <View style={Styless.ScrollContainer}>
        <ImageViewer 
          backgroundColor='#fff'
          style={{width: '100%', height: '40%', resizeMode: 'contain', marginTop: 0}}
          imageUrls={[ { url : props.ImgaeSource }]}
        />
       
        <View style={{width: '100%', height: 1, backgroundColor: Theme.PRIMARY_COLOR}} />
        <View style={{width: '96%', height: '60%', marginLeft: '2%', marginRight: '2%'}}>
          <Text allowFontScaling={false} style={LocalStyle.TitleLabel}>
            {props.Name}
          </Text>
          <Text allowFontScaling={false} style={LocalStyle.LabelDes}>
            {props.Description}
          </Text>
          <Text allowFontScaling={false} style={LocalStyle.TitleLabel}>
            Expires :
            <Text allowFontScaling={false} style={{fontSize: 12, color: '#9e9e9e'}}>
              {props.ExpDate}
            </Text>
          </Text>
        </View>
      </View>
    </SafeAreaView>
  )
}
const LocalStyle = StyleSheet.create({
  TitleLabel: {
    fontSize: mTitleSize,
    color: Theme.TEXT_COLOR,
    fontWeight: 'bold',
    marginTop:10
  },
  LabelDes: {
    fontSize: mTitleSize,
    color: Theme.TEXT_COLOR,
    marginTop: 10

  }
})
export default SpecialDetails
