import React, { } from 'react'
import { View, Text, ScrollView, Image, TouchableOpacity, TouchableHighlight, Dimensions, FlatList, StyleSheet } from 'react-native'

import Styless from '../../Common/Styless'
import { Theme } from '../../../config'
import DeleteIcon from '../../../../image/delete.png';
import NextIcon from "../../../../image/rightback.png";
import UserIcon from '../../../../image/contact.png';
import PhoneIcon from '../../../../image/phone.png';
import CalenderIcon from '../../../../image/calender.png';
import ChaferIcons from '../../../../image/chafer.png';
import DeliveryIcon from '../../../../image/delivery.png';
import AddressIcon from '../../../../image/address.png';

import Loader from '../../Common/Loader';

const mTotalHegiht = Dimensions.get('window').height

var mTitleFont = 16
var mNormalFont = 14
if (mTotalHegiht > 890) {
  mTitleFont = 18
  mNormalFont = 17
} else {
  mTitleFont = 16
  mNormalFont = 15
}

const CompletedCatering = (props) => {



  if(props.Show_ActiveLoader)
  return(
    <View>
      <Loader />


      </View>
  )
  return (
    <View>
      <FlatList
        showsVerticalScrollIndicator={false}
        style={{ marginTop: 20 }}
        data={props.CompleteList}
        renderItem={({ item }) => (
          <View style={{ width: '100%', height: 105, }}>
            <View
              style={{ width: '100%', height: 100, flexDirection: 'row', }}
            >
              <TouchableOpacity
               onPress={() => props.functionOpenDetailPage('CompletedDetails',  item)}
                style={{ width: '93%', height: '100%', justifyContent: 'center', alignItems: 'flex-start',  }}>

                <View
                  style={{ width: '100%', height: 30, flexDirection: 'row', marginTop: 5 }}
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
                    style={{ width: '45%', height: '100%', flexDirection: 'row' }}
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
                    style={{ width: '28%', height: '100%', flexDirection: 'row' }}
                  >
                    <Text allowFontScaling={false} style={{ fontSize: 14, color: 'black', fontWeight: 'bold', }}>
                      Cost
                          </Text>

                    <Text allowFontScaling={false} style={LocalStyle.CostLabel}>
                      {item.Cost}
                    </Text>

                  </View>

                  <View
                    style={{ width: '32%', height: '100%', flexDirection: 'row' }}
                  >
                    <Text allowFontScaling={false} style={{ fontSize: 14, color: 'black', fontWeight: 'bold', }}>
                      Status
                          </Text>
                          {item.Paymentamount == 0? 
                       <Text allowFontScaling={false} style={LocalStyle.Label}>
                        {(item.Paymentamount  == 0 ? 'Unpaid':'Paid') }
                        
                        </Text> :
                        <Text allowFontScaling={false} style={LocalStyle.Label}>
                       {"$"+item.Paymentamount == item.Cost ? 'Paid' : 'Partial'}
                          </Text> }
                  </View>

                </View>





                <View
                  style={{ width: '100%', height: 30, flexDirection: 'row' }}>
                  <View
                    style={{ width: '55%', height: '100%', flexDirection: 'row' }}
                  >


                    <Text allowFontScaling={false} style={{ fontSize: 14, color: 'black', fontWeight: 'bold', }}>
                      PaymentType
                          </Text>
                    <Text allowFontScaling={false} style={LocalStyle.Label}>
                      {item.Paymenttype}
                    </Text>
                  </View>

                  <View
                    style={{ width: '45%', height: '100%', flexDirection: 'row' }}
                  >

                    <Text allowFontScaling={false} style={{ fontSize: 14, color: 'black', fontWeight: 'bold', }}>
                      PaymentAmount
                          </Text>
                    <Text allowFontScaling={false} style={LocalStyle.Label}>
                      ${item.Paymentamount}
                    </Text>

                  </View>
                </View>



              </TouchableOpacity>

              <View
                style={{ width: '7%', height: '100%', justifyContent: 'center', alignItems: 'center' }}
              >
                <TouchableOpacity 
                 onPress={() => props.functionOpenDetailPage('CompletedDetails',  item)}
                >

                  <Image
                    style={{ width: 27, height: 27, resizeMode: "contain" }}
                    source={NextIcon}
                  />
                </TouchableOpacity>


              </View>

            </View>

            <View style={{ width: '100%', height: 1, backgroundColor: Theme.PRIMARY_COLOR }} />
          </View>
        )}
        keyExtractor={item => item.email} />
    </View>
  )
}

const LocalStyle = StyleSheet.create({
  Label: {
    color: '#757575', fontSize: 13, marginLeft: 5
  },
  CostLabel: {
    color: '#757575', fontSize: 16, marginLeft: 5, marginTop: 0
  }
})

export default CompletedCatering
