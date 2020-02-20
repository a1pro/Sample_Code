import React, { } from 'react'
import {
  View, Text, ScrollView, ActivityIndicator, TouchableOpacity, StyleSheet, TouchableHighlight,
  Dimensions, FlatList, Platform
} from 'react-native';
import { Image } from 'react-native-elements'
import { Theme } from '../../config';
import { SafeAreaView } from 'react-navigation'
import Styless from '../Common/Styless'
import Toolbar from '../Common/LoginToolbar'
import Loader from '../Common/Loader';
import NetworkApi from '../../network/NetworkApi';
import LocIcon from '../../../image/loc_ic.png'
import Addicon from '../../../image/addicon.png'
import NextIcon from '../../../image/nextarrow.png';
import PickupIcon from '../../../image/small_store.png';
import ProductHeader from './ProductHeader';
import { SwipeableFlatList } from 'react-native-swipeable-flat-list'
import DeleteIcon from '../../../image/delete.png'

const mTotalHegiht = Dimensions.get('window').height;
var mTitleFont = 16;
var mNormalFont = 14;
if (mTotalHegiht > 890) {
  mTitleFont = 18;
  mNormalFont = 17;
}
else {
  mTitleFont = 16;
  mNormalFont = 15;
}

const ProductNotification = (props) => {

  console.log('props.ResponeList', props.ResponeList);

  if (props.ShowLoader)
    return (
      <SafeAreaView forceInset={{ bottom: 'never' }} style={Styless.MainContainer}>
        <Toolbar {...props} />
        <View style={{ width: '100%', height: '95%', backgroundColor: 'white' }}>

          <Loader />
        </View>
      </SafeAreaView>
    )
  return (
    <SafeAreaView forceInset={{ bottom: 'never' }} style={Styless.MainContainer}>
      <Toolbar {...props} />
      <View style={{ width: '100%', height: mTotalHegiht+10, backgroundColor: 'white' }}>
        <ProductHeader {...props} />
        <View style={Styless.Line} />
        <FlatList
          style={{ width: '100%', marginBottom: Platform.OS == 'ios' ? 150 : 50 }}
          data={props.ResponeList}
          renderItem={({ item }) => (
            <View style={{ height: 120 }}>
              <TouchableOpacity onPress={() => props.openDetailPage(item)}>
              <View
                style={LocalStyle.Main_Row_Container}>
                <View style={LocalStyle.Image_Container}>
                  <Image style={{ width: 100, height: 100, resizeMode: 'contain' }}
                    source={{ uri: NetworkApi.IAMGE_BASE_URL + item.Imagepath }}
                    PlaceholderContent={<ActivityIndicator />}
                  />
                </View>
                <View style={LocalStyle.Second_Row_Container}>
                  <Text
                    numberOfLines={2}
                    allowFontScaling={false}
                    style={{ color: 'black', marginLeft: 1, fontWeight: 'bold', fontSize: mTitleFont, marginTop: 0 }}>{item.Itemname}</Text>
                  <View
                    style={{ width: '100%', height: undefined, flexDirection: 'row', marginLeft: 13 }}>

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
                        <Text allowFontScaling={false} style={{marginLeft: 10, fontSize: 20}}>
                          In Stock
                        </Text>
                      </View>
                    {item.Pickup == 'Y' &&
                      <Image
                        style={{ width: 35, height: 35, resizeMode: 'cover', marginLeft: 25 }}
                        source={PickupIcon}
                      />}
                  </View>
                  <View style={{ width: '100%', height: undefined, flexDirection: 'row', marginLeft: -3, marginTop: 3 }}>
                    <Image style={{ width: 25, height: 25, resizeMode: 'contain', marginTop: 2 }} source={LocIcon} />
                    <Text
                      allowFontScaling={false}
                      style={{ fontSize: mNormalFont, marginTop: 3 }}
                    >
                      {item.Location}
                    </Text>
                  </View>

                </View>

                <TouchableOpacity
                  onPress={() => props.deleteProdMessage(item)}
                  style={{ width: '10%', height: '100%', justifyContent: 'center', alignItems: 'center' }}
                >
                <Image style={{
                    width: 26, height: 26, resizeMode: 'contain',
                }}
                    source={DeleteIcon} />


                </TouchableOpacity>
              </View>
              </TouchableOpacity>
              <View style={{ width: '100%', height: 1, backgroundColor: Theme.PRIMARY_COLOR, marginTop: 8 }} />
            </View>

          )}
        //   renderRight={({ item }) => (
        //     <View style={{ width: 100, height: 40, backgroundColor: Theme.PRIMARY_COLOR, marginTop: 1, justifyContent: 'center', alignItems: 'center' }}>
        //         <TouchableOpacity 
        //             onPress={()=> props.deleteProdMessage(item)}
        //             style={{ width: 50, height: undefined, backgroundColor: Theme.PRIMARY_COLOR, marginTop: 1, justifyContent: 'center', alignItems: 'center' }}
        //         >
        //             <Text allowFontScaling={false} style={{ color: 'black' }}>
        //                 DELETE
        //             </Text>
        //         </TouchableOpacity>
        //     </View>
        // )}
          // backgroundColor={'white'}
        />

      </View>
    </SafeAreaView>
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
    height: 110,
    flexDirection: 'row'
  },
  Image_Container: {
    width: '30%', height: '100%', justifyContent: 'center', alignItems: 'center'
  },
  Second_Row_Container: {
    width: '60%',
    height: '100%',
    backgroundColor: '#fafafa',
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  Next_Container: {
    width: '10%', height: '100%', justifyContent: "center", alignItems: 'center'
  }

});

export default ProductNotification
