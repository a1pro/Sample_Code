import React, { } from 'react'
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, FlatList, Platform, ActivityIndicator } from 'react-native'
import { SafeAreaView } from 'react-navigation'
import Styless from '../Common/Styless'
import Toolbar from '../Common/LoginToolbar'
import { Theme } from '../../config'
import Banner from '../../../image/banner2.png';
import Loader from '../Common/Loader';
import NetworkApi from '../../network/NetworkApi';

import {Image} from 'react-native-elements';



const Details = (props) => {

  console.log('props.List', props.List);


  if (props.Loader)
    return (
      <SafeAreaView forceInset={{ bottom: 'never' }} style={Styless.MainContainer}>
        <Toolbar {...props} />
        <View style={Styless.ScrollContainer}>


          <Loader />

        </View>
      </SafeAreaView>
    )

  return (
    <SafeAreaView forceInset={{ bottom: 'never' }} style={Styless.MainContainer}>
      <Toolbar {...props} />
      <View style={Styless.ScrollContainer}>


        <View
        style={{width:'100%', height : Platform.OS == 'ios'? '92%' :'89%' }}
        >

      
         
        <FlatList
          data={props.List}
          renderItem={({ item }) =>
            <View>
              <View style={LocalStyles.Main}>
                <View style={{ width: '35%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                  <Image style={LocalStyles.ImageStyle} 
                  source={{uri : NetworkApi.IAMGE_BASE_URL+item.imagepath}}
                  PlaceholderContent={<ActivityIndicator />}
                  />
                </View>
                <View style={{ width: '65%', height: '100%' }}>
                  <Text allowFontScaling={false} style={{ marginTop: 5, fontWeight: 'bold', color: 'black', fontSize: 18 }}>
                   {item.itemname}
            </Text>
                  <Text allowFontScaling={false} 
                  numberOfLines={4}
                  style={{ marginTop: 5, }}>
                   {item.description}
            </Text>
                  <Text allowFontScaling={false} style={{ marginTop: 5, color: 'black', fontSize:17 }}>
                     ${item.cost}
            </Text>
                </View>
              </View>

            

            
            </View>
          }
        />

</View>



      </View>
    </SafeAreaView>
  )
}

const LocalStyles = StyleSheet.create({
  Main: {
    flexDirection: 'row',
    width: '96%',
    height: 135,
    borderRadius: 5,
    borderWidth: 0.5,
    marginLeft: '2%',
    marginRight: '2%',
    marginTop: 5,
    borderColor: '#d6d7da'
  },
  ImageStyle: {
    width: 120,
    height: 120,
    resizeMode: 'contain'
  }
})

export default Details
