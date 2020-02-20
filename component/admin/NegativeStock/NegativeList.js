import React, { Component } from 'react'
import { View, FlatList, Image, TouchableOpacity, Platform, Text, StyleSheet, Dimensions } from 'react-native'
import NetworkApi from '../../../network/NetworkApi';
import LocIcon from '../../../../image/loc_ic.png'
import Styless from '../../Common/Styless';
import { Theme } from '../../../config';

const mTotalHegiht = Dimensions.get('window').height
console.log('mTotalHegiht', mTotalHegiht)

var mTitleFont = 16
var mNormalFont = 14
if (mTotalHegiht > 890) {
  mTitleFont = 18
  mNormalFont = 17
} else {
  mTitleFont = 16
  mNormalFont = 15
}

const NegativeList = (props) => {
    return (
        <View style={{ flex: 1,width: '100%', height: Platform.OS == 'ios' ? '92%' : '90%', backgroundColor: 'white' }}>
          <FlatList
            data={props.List}
            renderItem={({ item }) =>
              <TouchableOpacity
              onPress={() => props.functionOpenPage('UpdateDetailsContainer', item.Itemnum)}
              >

                <View
                  style={LocalStyle.Main_Row_Container}>
                  <View style={LocalStyle.Image_Container}>
                    <Image style={{ width: 110, height: 110, resizeMode: 'contain' }}
                      source={{ uri: NetworkApi.IAMGE_BASE_URL + item.ImagePath }} />
                  </View>

                  <View style={LocalStyle.Second_Row_Container}>
                    <Text
                      numberOfLines={2}
                      allowFontScaling={false}
                      style={{ color: 'black', marginLeft: 5, fontWeight: 'bold', fontSize: mTitleFont }}>{item.Itemname}</Text>

                    <View
                      style={{ width: '100%', height: undefined, flexDirection: 'row', marginTop: 0, marginLeft: 8 }}>
                      <View style={{width: '40%', height: undefined,  alignItems: 'center',justifyContent: 'center', flexDirection: 'row'}}>
                        <View 
                        style={{backgroundColor: Theme.PRIMARY_COLOR, 
                        borderRadius: 5, width: '40%', height: '60%',
                          justifyContent: 'center', alignItems: 'center', marginLeft: 0 }}>
                          <Text 
                          style={LocalStyle.CountLabel} 
                          allowFontScaling={false}>
                          {item.Quantity}
                          </Text>
                        </View>
                        <Text allowFontScaling={false} style={{marginLeft: 10, fontSize: 17}}>
                          In Stock
                        </Text>
                      </View>
                    </View>

                    <View
                      style={{ width: '100%', height: undefined, flexDirection: 'row', marginTop: -5, marginLeft:5, marginBottom: -5 }}>
                        <Text allowFontScaling={false} style={{ fontSize: 17}}>
                            Department : 
                          </Text>
                        <Text
                          numberOfLines={1}
                          allowFontScaling={false}
                          style={{ marginLeft: 10, fontSize: 17 }}>
                        {item.Pickup} </Text>
                    </View>

                    <View style={{ width: '100%', height: undefined, flexDirection: 'row', marginLeft: 0, marginTop: 5 }}>
                      <Image style={{ width: 25, height: 25, resizeMode: 'contain', marginTop: 2 }}
                        source={LocIcon} />
                      <Text
                        allowFontScaling={false}
                        style={{ fontSize: mNormalFont, marginTop: 3 }}
                      >
                        {item.Location}
                      </Text>
                    </View>
                  </View>
                </View>
                <View style={Styless.Line} />
              </TouchableOpacity>
            }
          />

        </View>
    )
}

const LocalStyle = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      backgroundColor: "#e5e5e5"
    },
    Main_Row_Container: {
      width: '100%',
      height: 140,
      flexDirection: 'row'
    },
    Image_Container: {
      width: '30%', height: '100%', justifyContent: 'center', alignItems: 'center'
    },
    Second_Row_Container: {
      width: '70%',
      height: '100%',
      backgroundColor: '#fafafa',
      justifyContent: 'center',
      alignItems: 'flex-start'
    },
    Next_Container: {
      width: '0%', height: '0%', justifyContent: "center", alignItems: 'center'
    }
  
  });

export default NegativeList;