import React, { } from 'react'
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet, Picker, Dimensions, Platform } from 'react-native'
import { SafeAreaView } from 'react-navigation'
import Styless from '../Common/Styless'
import Toolbar from '../Common/LoginToolbar'
import Search from './Search'
import HoneyIcon from '../../../image/honey.png'
import LocIcon from '../../../image/loc_ic.png'
import Addicon from '../../../image/addicon.png'
import NextIcon from '../../../image/nextarrow.png';
import PickupIcon from '../../../image/small_store.png';
import Serach from './Search';
import ModalDropdown from 'react-native-modal-dropdown';
import NotifyIcon from '../../../image/notify.png';
import { Theme } from '../../config';
import Loader from '../Common/Loader';
import Header from './Header';
import NetworkApi from '../../network/NetworkApi';
import CreateListPicker from '../../picker/CreateListPicker';
import LoaderPicker from '../../picker/LoaderPicker';
import Coloraddicon from '../../../image/Coloraddicon.png';

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


var mHeight = mTotalHegiht / 5;

const Category = (props) => {





  if (props.ShowLoader)
    return (
      <SafeAreaView forceInset={{ bottom: 'never' }} style={Styless.MainContainer}>
        <Serach {...props} />
        <View style={{ width: '100%', height: 1, marginTop: 10 }} />
        <View
          style={{ width: '100%', height: '100%', backgroundColor: 'white' }}
        >

          <Loader />

        </View>
      </SafeAreaView>
    )



  return (
    <SafeAreaView forceInset={{ bottom: 'never' }} style={Styless.MainContainer}>
      <Serach {...props} />
      <CreateListPicker {...props} />
      <LoaderPicker {...props} />
      <View style={{ width: '100%', height: 1, marginTop: 10 }} />
      <View
        style={Styless.ScrollContainer}
      >
        <Header {...props} />
        <View style={Styless.Line} />
        <View
          style={{ width: '100%', height: Platform.OS == 'ios' ? '85%' : '79%' }}
        >
          <FlatList
            data={props.List}
            renderItem={({ item }) =>
              <View>

                <TouchableOpacity
                  onPress={() => props.functionOpenPage('ProductDetails', item.Itemname, NetworkApi.IAMGE_BASE_URL + item.ImagePath,
                    item.Quantity, item.Location, item.Price, item.Cost, item.Itemnum)}
                  style={{ width: '100%', height: props.UserRole != 'Customer' ? 160 : 140 , flexDirection: 'row' }}>
                  <View style={LocalStyle.Image_Container}>
                    <Image style={{ width: 110, height: 110, resizeMode: 'contain' }}
                      source={{ uri: NetworkApi.IAMGE_BASE_URL + item.ImagePath }} />
                  </View>

                  <View style={LocalStyle.Second_Row_Container}>
                    <Text
                      numberOfLines={2}
                      allowFontScaling={false}
                      style={{ color: 'black', marginLeft: 1, fontWeight: 'bold', fontSize: mTitleFont, marginTop: -30 }}>{item.Itemname}</Text>

                    <View
                    style={{ width: '100%', height: undefined, flexDirection: 'row', marginLeft: 13, marginTop: -8, marginBottom: -15 }}>

                      <View style={{width: '40%', height: undefined,  alignItems: 'center',justifyContent: 'center', flexDirection: 'row'}}>
                        <View 
                        style={{backgroundColor: Theme.PRIMARY_COLOR, 
                        borderRadius: 5, width: '40%', height: '50%',
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
                        style={{ width: 35, height: 35, resizeMode: 'cover', marginLeft: 25, marginTop: props.UserRole != 'Customer' ? 10 : 5 }}
                        source={PickupIcon}
                      />}
                  </View>
                    {props.UserRole != 'Customer' &&
                      <View
                        style={{ width: '100%', height: undefined, flexDirection: 'row', marginTop: 0 }}
                      >

                        <Text
                          numberOfLines={1}
                          allowFontScaling={false}
                          style={{ marginLeft: 1, fontSize: mNormalFont }}
                        >
                          Price: ${item.Price}
                        </Text>
                        {props.UserRole == 'Owner' &&
                          <Text
                            numberOfLines={1}
                            allowFontScaling={false}
                            style={{ marginLeft: 10, fontSize: mNormalFont }}>
                            Cost: ${item.Cost}
                          </Text>}
                          {props.UserRole == 'Manager' &&
                          <Text
                            numberOfLines={1}
                            allowFontScaling={false}
                            style={{ marginLeft: 10, fontSize: mNormalFont }}>
                            Cost: ${item.Cost}
                          </Text>}
                      </View>}
                    <View style={{ width: '100%', height: undefined, flexDirection: 'row', marginLeft: -3, marginTop: 5 }}>
                      <Image style={{ width: 25, height: 25, resizeMode: 'contain', marginTop: 2 }} source={LocIcon} />
                      <Text
                        allowFontScaling={false}
                        style={{ fontSize: mNormalFont, marginTop: 3 }}
                      >
                        {item.Location}
                      </Text>
                    </View>

                    <View
                      style={{ width: '100%', flexDirection: 'row', marginBottom: -35 }}
                    >
                      <TouchableOpacity
                        onPress={() => props.functionAddItemtoList(item)}
                        style={{ flexDirection: 'row', height: 40 }}>

                        <Image style={{ width: 20, height: 20, resizeMode: 'contain', marginLeft: 0, marginTop: 7 }}
                          source={item.ADDLIST == true ? Coloraddicon : Addicon} />
                        <Text
                          allowFontScaling={false}
                          style={{ marginLeft: 10, fontSize: mNormalFont, marginTop: 5 }}>
                          {item.ADDLIST == true ? 'Added ToList' : 'Add To List'}
                        </Text>
                      </TouchableOpacity>

                      {item.Quantity == 0 &&
                        <TouchableOpacity
                          onPress={() => props.functionNotifyMe(item.Itemnum)}
                          style={{ position: 'absolute', right: 2, flexDirection: 'row', marginTop: 5, }}>
                          <Image style={{ width: 20, height: 20, resizeMode: 'contain', marginLeft: 0, marginTop: 0 }}
                            source={NotifyIcon} />
                          <Text
                            allowFontScaling={false}
                            style={{ marginLeft: 5, fontSize: mNormalFont }}>
                            Notify Me
                         </Text>
                        </TouchableOpacity>}

                    </View>


                  </View>

                  <View style={LocalStyle.Next_Container}>
                    <Image style={{ width: 25, height: 25, resizeMode: 'contain', }} source={NextIcon} />
                  </View>
                </TouchableOpacity>
                <View style={Styless.Line} />


              </View>
            }
          />

        </View>

      </View>
    </SafeAreaView>
  )
}

export default Category
const LocalStyle = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#e5e5e5"
  },
  Main_Row_Container: {
    width: '100%',
    height: 160,
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