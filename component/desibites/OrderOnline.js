import React, { } from 'react'
import { WebView, ActivityIndicator, Dimensions, View } from 'react-native'
import { SafeAreaView } from 'react-navigation'
import Styless from '../Common/Styless'
import Toolbar from '../Common/LoginToolbar'
import { Theme } from '../../config'


const OrderOnline = (props) => {
  var height = Dimensions.get('window').height;
  var width = Dimensions.get('window').width;

 

  return (
    <SafeAreaView forceInset={{ bottom: 'never' }} style={Styless.MainContainer}>
      <Toolbar {...props} />

      <WebView
        onLoad={() => props.hideSpinner()}
        source={{ uri: 'http://ordernow.menudrive.com/desibites' }}

        style={{ marginTop: 20 }}
      />
      {props.visible && (
        <View style={{ width: '100%', height: '80%', justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
         
          
          <ActivityIndicator
            style={{ width: 100, height: 100 }}
            size="large"
          />
        </View>

      )}
    </SafeAreaView>

  )
}

export default OrderOnline;

