
import React,{} from 'react'
import { View, Text, ScrollView, Dimensions, ImageBackground, Image, TouchableOpacity, StyleSheet, TextInput } from 'react-native'

import { Theme } from '../../config'
import Loader from '../Common/Loader'

const mTotalHegiht = Dimensions.get('window').height


var mTitleFont = 16
var mNormalFont = 14
if (mTotalHegiht > 890) {
  mTitleFont = 18
  mNormalFont = 17
}else {
  mTitleFont = 16
  mNormalFont = 15
}

const PrintLayout = (props) => {
    return (
        <View>
            { props.showDetailLoader ? <Loader/> :
                <View>
                  <View style={{ padding: 15, flexDirection: 'row', alignContent: 'flex-start', justifyContent: 'flex-start' }}>
                    <Text style={{ marginTop: 25, fontSize: 18 }}>Label count : </Text>
                    <View style={{ width: '25%', height: 100, marginTop: 20 }}>
                      <TextInput
                        defaultValue='1'
                        style={{  height: 40, borderWidth: .5, padding: 5, marginLeft: '4%', marginRight: '6%', borderRadius: 5, borderColor: 'gray', }}
                        autoCorrect={false}
                        multiline={false}
                        blurOnSubmit={false}
                        allowFontScaling={false}
                        underlineColorAndroid='transparent'
                        placeholder='1'
                        placeholderTextColor={Theme.PLACE_HOLDER}
                        keyboardType='numeric'
                        onChangeText={(text) => props.updatePrintCount(text)}
                        value={props.printCount}
                        maxLength={2}
                      />
                    </View>
                    <TouchableOpacity style={LocalStyle.FillStock} onPress={() => props.callUpdateApi()}>
                      <Text allowFontScaling={false} style={LocalStyle.ButtonLabel}>
                        Print
                      </Text>
                    </TouchableOpacity>
                  </View>
                  {/* <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: -40 }}>
                    <TouchableOpacity style={LocalStyle.FillStock} onPress={() => props.callUpdateApi()}>
                      <Text allowFontScaling={false} style={LocalStyle.ButtonLabel}>
                        Print
                      </Text>
                    </TouchableOpacity>
                  </View> */}
                </View>
            }
        </View>
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
    height: mTotalHegiht / 2 - 50
  },
  ButtonContainer: {
    width: 200,
    height: 40,
    borderRadius: 10,
    backgroundColor: Theme.PRIMARY_COLOR,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:  0
  },
  ButtonLabel: {
    color: 'black', alignSelf: 'center', fontSize: 20
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
    fontWeight: 'bold'
  },
  FillStock: {
    marginRight: 10,
    width: '40%',
    height: 40,
    borderRadius: 10,
    backgroundColor: Theme.PRIMARY_COLOR,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginLeft: 10
  }
})
export default PrintLayout
