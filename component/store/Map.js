import React, {} from 'react'

import { View, Text, ScrollView, TextInput, Image, Dimensions, ImageBackground } from 'react-native'
import MapView from 'react-native-maps'

import maplogo from '../../../image/maplogo.png';
const Map = (props) => {
  return (
    <View style={{width: '100%', height: '100%'}}>
      {/* <MapView
      style={{width:'100%', height:'100%', marginTop: 10}}
      initialRegion={{ latitude: 38.887120, longitude: -94.684920, latitudeDelta: 0.0922, longitudeDelta: 0.0421 }} 
      annotations={[
        {
          latitude: 38.887120,
          longitude: -94.684920,
          title: 'Foo Place',
          subtitle: '1234 Foo Drive'
        }
      ]}
      /> */}
       <MapView 
        style={{width:'100%', height:'100%', marginTop: 10}}
          initialRegion={{
              latitude: 38.887120,
              longitude: -94.684920,
              latitudeDelta: 0.5,
              longitudeDelta: 0.5,
          }}
        >
        <MapView.Marker
            coordinate={{latitude: 38.887120,
            longitude: -94.684920}}
            title={"KC India Mart"}
            description={"description"}
         />
      </MapView>
    
    {/* <View
    style={{width:'100%', height:'40%', marginTop: 10, marginLeft:20}}
    >
    <Text
      style={{color:'#757575', fontSize:16}}
    allowFontScaling={false}
    >8542 West 133rd Street Overland Park</Text>
    <Text
      style={{color:'#616161',fontSize:16 }}
    allowFontScaling={false}
    >KS 66213</Text>
    <Text
    allowFontScaling={false}
    style={{color:'#616161', fontSize:16}}
    >United States</Text>

   <View style={{position: 'absolute', top: 0,  right:30, bottom: 150, justifyContent: 
    'center', alignItems: 'center'}}>
 <Image 
    style={{width:60, height:60, }}
    source={maplogo}
    />

</View> 
   
    </View> */}
    </View>
  )
}
export default Map
