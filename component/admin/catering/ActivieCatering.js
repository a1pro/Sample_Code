import React, { } from 'react'
import { View, Text, ScrollView, Image, TouchableOpacity, TouchableHighlight, Dimensions, FlatList, StyleSheet } from 'react-native'

import Styless from '../../Common/Styless'
import Loader from '../../Common/Loader';

import { Theme } from '../../../config'
const mTotalHegiht = Dimensions.get('window').height


import DeleteIcon from '../../../../image/delete.png';
import NextIcon from "../../../../image/rightback.png";
import UserIcon from '../../../../image/contact.png';
import PhoneIcon from '../../../../image/phone.png';
import CalenderIcon from '../../../../image/calender.png';
import ChaferIcons from '../../../../image/chafer.png';
import DeliveryIcon from '../../../../image/delivery.png';
import AddressIcon from '../../../../image/address.png';





var mTitleFont = 16
var mNormalFont = 14
if (mTotalHegiht > 890) {
  mTitleFont = 18
  mNormalFont = 17
} else {
  mTitleFont = 16
  mNormalFont = 15
}

const ActiveCatering = (props) => {


  if (props.Show_ActiveLoader)
    return (
      <View>
        <Loader />


      </View>
    )
  return (
    <View>
      <FlatList
        showsVerticalScrollIndicator={false}
        style={{ marginTop: 20 }}
          onRefresh={() => props.onRefresh()}
          refreshing={props.isFetching}
        data={props.Activelist}
        renderItem={({ item }) => (
          <View style={{ width: '100%', height: 120 }}>

            <View
              style={{ width: '100%', height: 100, flexDirection: 'row' }}
            >
              <TouchableOpacity
                onPress={() => props.functionOpenDetailPage('ActiveDetails', item)}
                style={{ width: '90%', height: '100%', justifyContent: 'center', alignItems: 'flex-start' }}>

                <View
                  style={{ width: '100%', height: 30, flexDirection: 'row' }}
                >
                  <View
                    style={{ width: '50%', height: '100%', flexDirection: 'row' }}
                  >
                    <Image
                      style={{ width: 18, height: 18, resizeMode: 'contain' }}
                      source={UserIcon}
                    />
                    <Text allowFontScaling={false} style={LocalStyle.Label}>
                      {item.Name}
                    </Text>
                  </View>

                  <View
                    style={{ width: '50%', height: '100%', flexDirection: 'row' }}
                  >
                    <Image
                      style={{ width: 18, height: 18, resizeMode: 'contain' }}
                      source={PhoneIcon}
                    />
                    <Text allowFontScaling={false} style={LocalStyle.Label}>
                      {item.Phone}
                    </Text>

                  </View>

                </View>



                <View
                  style={{ width: '100%', height: 30, flexDirection: 'row' }}
                >
                  <View
                    style={{ width: '45%', height: '100%', flexDirection: 'row', marginRight: '5%' }}
                  >
                    <Image
                      style={{ width: 18, height: 18, resizeMode: 'contain' }}
                      source={CalenderIcon}
                    />
                    <Text allowFontScaling={false} style={LocalStyle.Label}>
                      {item.Date + " " + item.Time}
                    </Text>
                  </View>

                  <View
                    style={{ width: '45%', height: '100%', flexDirection: 'row', marginLeft: '5%' }}
                  >
                    <Text allowFontScaling={false} style={{ fontSize: 17, color: 'black', fontWeight: 'bold', }}>
                      Cost
                          </Text>

                    <Text allowFontScaling={false} style={LocalStyle.CostLabel}>
                      {item.Cost}
                    </Text>

                  </View>
                </View>

                <View
                  style={{ width: '100%', height: 30, flexDirection: 'row' }}
                >
                  <View
                    style={{ width: '15%', height: '100%', flexDirection: 'row' }}
                  >
                    <Image
                      style={{ width: 20, height: 20, resizeMode: 'contain' }}
                      source={ChaferIcons}
                    />
                    <Text allowFontScaling={false} style={LocalStyle.Label}>
                      {item.Shapper}
                    </Text>
                  </View>

                  <View
                    style={{ width: '15%', height: '100%', flexDirection: 'row' }}
                  >
                    <Image
                      style={{ width: 20, height: 20, resizeMode: 'contain' }}
                      source={DeliveryIcon}
                    />
                    <Text allowFontScaling={false} style={LocalStyle.Label}>
                      {item.Deliver}
                    </Text>
                  </View>

                  <View
                    style={{ width: '70%', height: '100%', flexDirection: 'row' }}
                  >
                    <Image
                      style={{ width: 20, height: 20, resizeMode: 'contain' }}
                      source={AddressIcon}
                    />
                    <Text allowFontScaling={false} style={LocalStyle.Label}>
                      {item.Address}                      </Text>
                  </View>

                </View>



              </TouchableOpacity>

              <View
                style={{ width: '10%', height: '100%', justifyContent: 'center', alignItems: 'center' }}
              >
                <TouchableOpacity
                onPress={() => props.functionOpenDetailPage('ActiveDetails', item)}
                 >

                  <Image
                    style={{ width: 30, height: 30, resizeMode: "contain" }}
                    source={NextIcon}
                  />
                </TouchableOpacity>


              </View>

            </View>

            <View style={Styless.Line} />


          </View>
        )}
        keyExtractor={item => item.email} />
    </View>
  )
}

const LocalStyle = StyleSheet.create({
  Label: {
    color: '#757575', fontSize: 16, marginLeft: 5
  },
  CostLabel: {
    color: '#757575', fontSize: 16, marginLeft: 5, marginTop: 0
  }
})

export default ActiveCatering
