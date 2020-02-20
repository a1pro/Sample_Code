import React, { } from 'react'
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, FlatList, Dimensions, ImageBackground, 
  Image, Platform } from 'react-native'
import { SafeAreaView } from 'react-navigation'
import Styless from '../Common/Styless'
import Toolbar from '../Common/LoginToolbar'
import { Theme } from '../../config'
import Loader from '../Common/Loader';
import NetworkApi from '../../network/NetworkApi';

var mHeight = Dimensions.get('window').width
var mRowHeight = mHeight / 2 - 15
const mWidth = Dimensions.get('window').width
const Desibites = (props) => {

   if(props.ShowLoader)
   return(
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
        <TouchableOpacity
          onPress={() => props.functionOpenPage('OrderOnline', '')}
          style={LocalStyle.CreateContainer}>
          <Text allowFontScaling={false} style={{ color: 'black', fontSize: Theme.TITLE_SIZE }}>
            Order Online
          </Text>
        </TouchableOpacity>
        <View
          style={{  width: '100%', height:  Platform.OS == 'ios'? '85%' : '79%' }}
        >




          <FlatList
            numColumns={2}
            data={props.List}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) =>
              <TouchableOpacity
              onPress={() => props.functionOpenPage('DesiDetails', item.category)}
              style={{width: mWidth / 2 , height: 100}}>
                 <Image 
              source={{uri: NetworkApi.IAMGE_BASE_URL+item.imagepath}}
              style={{width: '120%', height: 120,resizeMode:'cover', marginLeft:-20, marginRight:-50}}>
             
            </Image>
           
                </TouchableOpacity>
            }
            keyExtractor={item => item.id} />
        </View>
      </View>
    </SafeAreaView>
  )
}

const LocalStyle = StyleSheet.create({
  CreateContainer: {
    marginTop: 15,
    marginBottom: 5,
    width: '80%',
    height: 40,
    marginLeft: '10%',
    marginRight: '10%',
    backgroundColor: Theme.PRIMARY_COLOR,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  }

})
export default Desibites
