import React from 'react'
import { View, Text, FlatList, TouchableOpacity, Image, DrawerLayoutAndroid, Dimensions } from 'react-native';



import { Theme } from '../../config';
import { SafeAreaView } from 'react-navigation'
import Styless from '../Common/Styless'
import LogoIcon from '../../../image/logo.png';

const mWidth = Dimensions.get('window').width;




const SideMenu = props => {

  return (

    <SafeAreaView
      forceInset={{ bottom: 'never' }}
      style={{ backgroundColor: 'transparent' }}>

      <View
        style={{ width: '100%', height: '100%', flexDirection: 'row' }}
      >
        <View style={{ width: '70%', height: '100%', backgroundColor: Theme.PRIMARY_COLOR }}>
          <View
            style={{ width: '100%', height: 150, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}
          >
            <Image
              style={{ width: 150, height: 100, resizeMode: 'contain', alignSelf: 'center' }}
              source={LogoIcon}
            />


          </View>
          <FlatList
            data={props.List}
            renderItem={({ item }) => (
              <View
                style={{
                  width: '100%',
                  height: 50,

                }}>
                <TouchableOpacity
                  onPress={() => props.functionOpenPage(item.page)}
                  style={{
                    width: '100%', height: '100%',
                    flexDirection: 'row'
                  }}
                >

                  <Image
                    style={{ width: 25, height: 25, resizeMode: 'contain', marginLeft: 15, alignSelf: 'center' }}
                    source={item.img}
                  />


                  <Text
                    allowFontScaling={false}
                    style={{ marginLeft: 15, color: "black", fontSize: 20, alignSelf: 'center', }}
                  >{item.name}</Text>
                </TouchableOpacity>
                <View style={{ width: '100%', height: .4, backgroundColor: 'black' }} />

              </View>
            )}
            keyExtractor={(item, index) => item.id}
          />

        </View>
        <TouchableOpacity
          style={{ width: '30%', height: '100%', }}
          onPress={() => props.functionClose('')}
        >
        </TouchableOpacity>

      </View>



    </SafeAreaView>
  )
}

export default SideMenu
