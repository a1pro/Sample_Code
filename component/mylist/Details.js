import React, { } from 'react'
import {
  View, Text, ScrollView, TouchableOpacity, StyleSheet, Dimensions, Platform, FlatList,
  ActivityIndicator
} from 'react-native'
import { SafeAreaView } from 'react-navigation'
import Styless from '../Common/Styless'
import Toolbar from '../Common/LoginToolbar'
import Search from './Search'
import Tab from './Tab'
import DeleteIcon from '../../../image/delete.png'
import { Theme } from '../../config';

import HoneyIcon from '../../../image/honey.png'
import LocIcon from '../../../image/loc_ic.png'
import Addicon from '../../../image/addicon.png'
import NextIcon from '../../../image/nextarrow.png';
import CancelIcon from '../../../image/cancel.png';
import PlusIcon from '../../../image/plus.png';
import MinusIcon from '../../../image/minus.png';
import PickupIcon from '../../../image/small_store.png';
import Loader from '../Common/Loader';
import NetworkApi from '../../network/NetworkApi';
import { Image } from 'react-native-elements';
import UpdateListPicker from '../../picker/UpdateListPicker';
import Checkbox from '../../../image/Checkbox.png';
import Uncheckbox from '../../../image/Uncheckbox.png';
import { Dropdown } from 'react-native-material-dropdown';

import DeleteTab from './DeleteTab';


const mTotalHegiht = Dimensions.get('window').height;
console.log('mTotalHegiht', mTotalHegiht);

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
const Details = (props) => {

  

  if (props.ShowLoader)
    return (
      <SafeAreaView style={Styless.MainContainer}>
        <Toolbar {...props} />
        <Search />
        <View style={{ width: '100%', height: Platform.OS == 'ios' ? '100%' : '94%', backgroundColor: 'white', marginTop: 10 }}>

          <Loader />
        </View>
      </SafeAreaView>
    )
    
  return (
    <SafeAreaView
      style={Styless.MainContainer}
      forceInset={{ bottom: 'never' }}
    >
      <Toolbar {...props} />
      <Search {...props}/>
      <UpdateListPicker {...props} />
      <View 
      ref={props.viewRef}
      style={{ width: '100%', height: Platform.OS == 'ios' ? '100%' : '80%', backgroundColor: 'white', marginTop: 10 }}>
       
      
      
        <FlatList
          style={{ width: '100%', marginBottom: Platform.OS == 'ios' ? 150 : 50 }}
          data={props.List}
          renderItem={({ item }) =>
            <View>
              <TouchableOpacity onPress={() => props.openDetailPage(item)}>
              <View
                style={LocalStyle.Container}>
                <View style={LocalStyle.Image_Container}>
                  <Image style={{ width: 110, height: 110, resizeMode: 'contain' }}
                    source={{ uri: NetworkApi.IAMGE_BASE_URL + item.Imagepath }}
                    PlaceholderContent={<ActivityIndicator />}
                  />


                </View>
                <View style={LocalStyle.Details_Container}>

                  <Text
                    allowFontScaling={false}
                    style={LocalStyle.Title_Label}>
                    {item.Itemname}
                  </Text>
                  <View
                    style={{ width: '100%', height: undefined, flexDirection: 'row', marginTop: 0 }}
                  >
                    <Text
                      allowFontScaling={false}
                      style={{ marginLeft: 5, fontSize: mNormalFont, marginTop: 5 }}>
                      In Stock: {item.Instock}
                    </Text>
                    {item.Pickup == 'Y' &&
                      <Image
                        style={{ width: 35, height: 35, resizeMode: 'contain', marginLeft: 10, marginTop: -5 }}
                        source={PickupIcon}
                      />}


                  </View>
                  <View style={{ width: '100%', height: undefined, flexDirection: 'row', marginLeft: 3, marginTop: 5 }}>
                    <Image style={{ width: 25, height: 25, resizeMode: 'contain', marginTop: 2 }} source={LocIcon} />
                    <Text
                      allowFontScaling={false}
                      style={{ fontSize: mNormalFont, marginTop: 2 }}
                    >
                      {item.Location}
                    </Text>
                  </View>
                  <View >

                    {/* <Text
                        allowFontScaling={false}
                        style={{ marginLeft: 5, fontSize: mNormalFont, marginTop: 4 }}>
                        Quantity :
                    </Text> */}
                    <View
                      style={{ width: 140, height: 50, marginLeft :10, marginTop:-10 }}
                    >
                      <Dropdown
                        label='Select Quantity'
                        allowFontScaling={false}
                        itemTextStyle={{ textAlign: 'center' }}
                        fontSize={11}
                        data={props.QuantityList}
                        value={item.Quantity}
                        onChangeText={(value)=>props.functionQuantityIncrease(value, item)}
                        />
                    </View>




                  </View>

                </View>

                <TouchableOpacity
                  onPress={() => props.functionDeleteSingleItem(item)}
                  style={{ width: '10%', height: '100%', justifyContent: 'center', alignItems: 'center' }}
                >


                  <Image style={{
                    width: 26, height: 26, resizeMode: 'contain',
                  }}
                    source={DeleteIcon} />


                </TouchableOpacity>

              </View>
              </TouchableOpacity>
              <View style={Styless.Line} />

            </View>

          }
        />

      </View>
      <View style={{
        width: '100%',
        height: 50,
        backgroundColor: '#FF9800',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0
      }}>

        {props.ShowDeleteTab == true ? <DeleteTab {...props} /> :
          <Tab {...props} />}
      </View>
    </SafeAreaView>
  )
}


const LocalStyle = StyleSheet.create({
  CreateContainer: {
    width: '80%',
    height: 40,
    marginLeft: '10%',
    marginRight: '10%',
    backgroundColor: 'white',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  Container: {
    width: '100%',
    height: 150,
    flexDirection: 'row',
    marginTop: 10
  },
  Image_Container: {
    width: '30%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  Details_Container: {
    width: '60%', height: '100%', backgroundColor: '#fafafa', justifyContent: 'center', alignItems: 'flex-start'
  },
  Title_Label: {
    color: 'black', marginLeft: 5, fontWeight: 'bold', fontSize: mTitleFont
  }
})

export default Details
