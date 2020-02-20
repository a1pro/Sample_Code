import React, { } from 'react'
import { View, Text, TextInput, StyleSheet, Dimensions } from 'react-native'

const mTotalHegiht = Dimensions.get('window').height
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

const Description = (props) => {
  return (
    <View style={LocalStyle.Main_Container}>
    
      <View style={LocalStyle.Description_Container}>
        <View style={{ width: '50%', height: undefined }}>
          <Text allowFontScaling={false} style={LocalStyle.DescriptionTitle}>
            Last Sale Date :
          </Text>
        </View>
        <View style={{ width: '50%', height: undefined }}>
          <Text allowFontScaling={false} style={LocalStyle.DescriptionText}>
            {props.LastSalesdate}
          </Text>
        </View>
      </View>

      <View style={LocalStyle.Description_Container}>
        <View style={{ width: '50%', height: undefined }}>
          <Text allowFontScaling={false} style={LocalStyle.DescriptionTitle}>
            Vendor :
          </Text>
        </View>
        <View style={{ width: '50%', height: undefined }}>
          <Text allowFontScaling={false} style={LocalStyle.DescriptionText}>
            {props.VenderName}
          </Text>
        </View>
      </View>
      <View style={LocalStyle.Description_Container}>
        <View style={{ width: '50%', height: undefined }}>
          <Text allowFontScaling={false} style={LocalStyle.DescriptionTitle}>
            PO Number :
          </Text>
        </View>
        <View style={{ width: '50%', height: undefined }}>
          <Text allowFontScaling={false} style={LocalStyle.DescriptionText}>
            {props.Po_Number}
          </Text>
        </View>
      </View>
      <View style={LocalStyle.Description_Container}>
        <View style={{ width: '50%', height: undefined }}>
          <Text allowFontScaling={false} style={LocalStyle.DescriptionTitle}>
            PO Date :
          </Text>
        </View>
        <View style={{ width: '50%', height: undefined }}>
          <Text allowFontScaling={false} style={LocalStyle.DescriptionText}>
            {props.Po_Date}
          </Text>
        </View>
      </View>
      <View style={LocalStyle.Description_Container}>
        <View style={{ width: '50%', height: undefined }}>
          <Text allowFontScaling={false} style={LocalStyle.DescriptionTitle}>
            Case Quantity :
          </Text>
        </View>
        <View style={{ width: '50%', height: undefined }}>
          <Text allowFontScaling={false} style={LocalStyle.DescriptionText}>
            {props.CASE_Quantity}
          </Text>
        </View>
      </View>
      <View style={LocalStyle.Description_Container}>
        <View style={{ width: '50%', height: undefined }}>
          <Text allowFontScaling={false} style={LocalStyle.DescriptionTitle}>
            Cases Ordered :
          </Text>
        </View>
        <View style={{ width: '50%', height: undefined }}>
          <Text allowFontScaling={false} style={LocalStyle.DescriptionText}>
            {props.Cases_Ordered}
          </Text>
        </View>
      </View>
    </View>
  )
}

const LocalStyle = StyleSheet.create({
  Main_Container: {
    width: '96%', marginLeft: '2%', marginRight: '2%', marginTop: 10
  },
  Description_Container:{
    width: '100%', height: undefined, flexDirection: 'row',
    marginTop:7,
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
  }
})
export default Description
