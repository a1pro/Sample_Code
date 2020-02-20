import React, {} from 'react';
import {WebView, View, StyleSheet, Dimensions} from 'react-native';
import { SafeAreaView } from 'react-navigation';
import Styless from '../Common/Styless';
import {Theme} from '../../config';
import Toolbar from '../Common/LoginToolbar'

const MapLocation =(props)=>{
  return(
    <SafeAreaView forceInset={{ bottom: 'never'}} style={Styless.MainContainer}>
      <Toolbar {...props}/>
      <View style={{width : '100%', height:'100%', backgroundColor:'white'}} >
        <WebView
          source={{uri: 'https://aisle411.ws/webservices3/webmaps/?id=1142200&partner_id=103&q='+props.ProductId}}
          style={{marginTop: 20, width : '100%' }}
          // javaScriptEnabled={true}
          injectedJavaScript={`const meta = document.createElement('meta'); meta.setAttribute('content', 'width=device-width, initial-scale=0.8, maximum-scale=1.0, user-scalable=0'); meta.setAttribute('name', 'viewport'); document.getElementsByTagName('head')[0].appendChild(meta); `}
          scalesPageToFit={true}
        />
      </View>
    </SafeAreaView>
  )
}

export default MapLocation;