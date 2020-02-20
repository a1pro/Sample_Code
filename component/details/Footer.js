import React, { } from 'react'
import { View, Text, TextInput, StyleSheet, Dimensions, TouchableOpacity, Image } from 'react-native';
import { Theme } from '../../config';
import Activedot from '../../../image/active.png'
import NonActiveIcon from "../../../image/non_Active.png";
const mTotalHegiht = Dimensions.get('window').height;
const mTotalWidth = Dimensions.get('window').width

var mTitleFont = 16
var mNormalFont = 14
if (mTotalHegiht > 890) {
  mTitleFont = 18
  mNormalFont = 17
} else {
  mTitleFont = 16
  mNormalFont = 15
}


const Footer = (props) => {
  return (
    <View
      style={LocalStyle.Main_Container} >
      <View
        style={{ width: '100%', height: 35, flexDirection: 'row' }}>
        <View
          style={{ width: '22%', height: '100%', alignItems: 'flex-start', justifyContent: 'center' }}>
          <Text allowFontScaling={false}
            multiline={true}
            style={LocalStyle.DescriptionTitle}
          >Current </Text>
          <Text allowFontScaling={false}
            multiline={true}
            style={LocalStyle.DescriptionTitle}
          >Stock </Text>
        </View>
          <TextInput
            allowFontScaling={false}
            keyboardType='numeric'
            style={{ width: '34%', height: 35, borderWidth: .5, marginLeft: '4%', marginRight: '6%', borderRadius: 5, borderColor: 'gray', }}
            onChangeText={text => props.functionSetStock(text)}
            value={props.CurrentStock}
          />
            <TouchableOpacity
              onPress={props.functionStockUpdate}
              style={{
                width: '29%', height: 35, marginTop: 0, backgroundColor: Theme.PRIMARY_COLOR, justifyContent: 'center',
                alignItems: 'center', borderRadius: 10, marginRight: '2%'
              }}
            >
              <Text
                allowFontScaling={false}
                style={LocalStyle.Label}
              >
                Update
              </Text>
        </TouchableOpacity>
      </View>
      
      <View style={{ width: '100%', height: 20, flexDirection: 'row' }}>
        <View style={{ width: '22%', height: '100%', alignItems: 'flex-start', justifyContent: 'center' }}></View>
        <View
          style={{ flexDirection: 'row', width: '34%', height: 35, marginLeft: '4%', marginRight: '6%', alignItems: 'center' }}>
          <TouchableOpacity
          onPress={()=>props.functionsetStockRadioButton('ADD')}
            style={{ flexDirection: 'row', height: 17, }}>
            <Image
              style={{ width: 10, height: 10, marginTop: 5, resizeMode: 'contain' }}
              source={props.Add == true ? Activedot :  NonActiveIcon}>
            </Image>
            <Text
              style={{
                marginLeft: 4, fontSize: mTitleFont,
                color: 'black',
              
              }}
              allowFontScaling={false}
            >ADD</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={()=>props.functionsetStockRadioButton('TOTAL')}
            style={{ flexDirection: 'row', height:  18, marginLeft: 10 }}>
            <Image
              style={{ width: 10, height: 10, marginTop: 5, resizeMode: 'contain' }}
              source={props.Total == true ? Activedot :  NonActiveIcon}>
            </Image>
            <Text
              style={{
                marginLeft: 4, fontSize: mTitleFont,
                color: 'black',
              }}
              allowFontScaling={false}
            >TOTAL</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{ width: '29%', height: 35, alignItems: 'flex-end' }}>
          
        </View>
      </View>

      <View
        style={{ width: '100%', height: 35, flexDirection: 'row', marginTop: 10 }}>
        <View
          style={{ width: '22%', height: '100%', alignItems: 'flex-start', justifyContent: 'center' }}>
          <Text allowFontScaling={false}
            style={LocalStyle.DescriptionTitle}
          >Current  </Text>
          <Text allowFontScaling={false}
            style={LocalStyle.DescriptionTitle}
          >Location </Text>
        </View>

        <TextInput
          allowFontScaling={false}
          style={{ width: '34%', height: 35, marginLeft: '4%', marginRight: '6%', borderWidth: .5, borderRadius: 5, borderColor: 'gray', }}
          onChangeText={text => props.functionSetLocation(text)}
          value={props.CurrentLocation}
        />
        <TouchableOpacity
          onPress={props.functionLocationUpdate}
          style={{
            width: '29%', height: 35, marginTop: 0, backgroundColor: Theme.PRIMARY_COLOR, justifyContent: 'center',
            alignItems: 'center', borderRadius: 10, marginRight: '4%'
          }}
        >
          <Text
            allowFontScaling={false}
            style={LocalStyle.Label}
          >Update</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
const LocalStyle = StyleSheet.create({
  Main_Container: {
    width: '96%', marginLeft: '2%', marginRight: '2%', marginTop: 10
  },
  DescriptionText: {
    marginLeft: 10,
    fontSize: mTitleFont,
    marginTop: 0,
    color: 'black'

  },
  DescriptionTitle: {
    marginLeft: 10,
    fontSize: mTitleFont,
    color: 'black',
    fontWeight: 'bold'
  },
  Label: {
    fontSize: mTitleFont,
    color: 'black',
    fontWeight: 'bold'
  }
})

export default Footer;