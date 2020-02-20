import React, { } from 'react'
import { View, Text, FlatList, Image, StyleSheet, Dimensions } from 'react-native'
import Styless from '../../Common/Styless'
import NetworkApi from '../../../network/NetworkApi'
import { Theme } from '../../../config'

import QRCode from 'react-native-qrcode-svg';
var mTitleSize = 0, mContainerSize = 0, mQrSize = 0, mQrMartop = 0, mQrMartBom = 0
const mTotalHegiht = Dimensions.get('window').height


if (mTotalHegiht < 800) {
  mTitleSize = 16
  mContainerSize = 200
  mQrSize = 80
  mQrMartop = 10
  mQrMartBom = 10
} else {
  mTitleSize = 17
  mContainerSize = 250
  mQrSize = 120
  mQrMartop = 10
  mQrMartBom = 10
}

const AllCoupon = (props) => {


  console.log('props.AllCouponList', props.AllCouponList);

  return (
    <FlatList data={props.AllCouponList} showsVerticalScrollIndicator={false} renderItem={({ item }) => (
      <View>
        <View style={LocalStyle.MainRowContainer}>
          <View style={LocalStyle.ImageRowContainer}>
            <Image style={{ width: '100%', height: '100%', resizeMode: 'contain' }} source={{ uri: NetworkApi.IAMGE_BASE_URL + item.imagepath }} />
          </View>
          <View style={{ width: '70%', height: '100%', justifyContent: 'center', alignItems: 'flex-start' }}>
            <Text allowFontScaling={false} style={LocalStyle.TitleLabel}>
              {item.couponsdesc1}
            </Text>
            <Text allowFontScaling={false} style={LocalStyle.LabelDes}>
              {item.couponsdesc2}
            </Text>
            <View style={{ width: '100%', height: mQrSize + 20, justifyContent: 'center', alignItems: 'center' }}>
              <QRCode
            value={item.itemnum}
            size={mQrSize}
            logoBackgroundColor='transparent'
          />


            </View>
            <Text
              allowFontScaling={false} style={LocalStyle.TitleLabel}>
              Expires :
               <Text allowFontScaling={false}
                style={LocalStyle.Date}>
                {item.expdate}
              </Text>
            </Text>
          </View>
        </View>
        <View style={{ width: '100%', height: 1, backgroundColor: Theme.PRIMARY_COLOR }} />
      </View>
    )} />
  )
}
const LocalStyle = StyleSheet.create({
  MainRowContainer: {
    width: '100%', height: mContainerSize, flexDirection: 'row'
  },
  ImageRowContainer: {
    width: '30%', height: '100%', justifyContent: 'center', alignItems: 'center'
  },
  TitleLabel: {
    fontSize: mTitleSize,
    color: Theme.TEXT_COLOR,
    fontWeight: 'bold'
  },
  LabelDes: {
    fontSize: mTitleSize,
    color: Theme.TEXT_COLOR,
    marginTop: 5

  },
  Date: {
    fontSize: 14,
    color: '#9e9e9e',
    textAlign: 'center',
  }
})

export default AllCoupon
