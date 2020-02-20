import React,{} from 'react'
import { View, Text, ScrollView, Dimensions, ImageBackground,  TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native'
import { SafeAreaView } from 'react-navigation';
import {Image} from 'react-native-elements';
import NetworkApi from '../../network/NetworkApi';
import Styless from '../Common/Styless';
import { Theme } from '../../config';
import Loader from '../Common/Loader';
import Toolbar from '../Common/LoginToolbar';
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

const MessagesDetail = (props) => {

    return (
        <SafeAreaView style={Styless.MainContainer}>
            <Toolbar {...props}/>
            { props.ShowLoader ? <Loader /> : 
                <ScrollView
                style={LocalStyle.MainContainer}
                >
                    <View style={LocalStyle.SliderContainer}>
                      <ImageViewer 
                        backgroundColor='#fff'
                        style = {{width:mTotalWidth-20, height:'100%', resizeMode:'contain', backgroundColor: '#fff'}}
                        imageUrls={[ { url :NetworkApi.IAMGE_BASE_URL+ props.NotificationImage }]}
                        PlaceholderContent={<ActivityIndicator />}
                      />
                    </View>
                    <View style={Styless.Line} />
                    {/* <View style={{width: '100%', height: 65, backgroundColor: '#e0e0e0' }}> */}
                        <Text allowFontScaling={false} style={LocalStyle.TitleLabel}>
                            { props.NotificationTitleSee }
                        </Text>
                    {/* </View> */}
                    <View style={{width: '100%', height: undefined, backgroundColor: '#e0e0e0', marginTop: 20 }}>
                        <Text allowFontScaling={false} style={{ marginLeft: 10, fontSize: 16, marginTop: 10 }}>
                            { props.NotificationMessage }
                        </Text>
                    </View>
                </ScrollView>
            }
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
    height: mTotalHegiht / 2,
    justifyContent :'center',
    alignItems:'center',
    marginTop: 20
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
    marginLeft: 10, fontWeight: 'bold', fontSize: 18, marginTop: 7, textAlign: 'center'
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


export default MessagesDetail
