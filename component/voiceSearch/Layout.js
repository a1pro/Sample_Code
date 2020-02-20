import React from 'react'
import { View, Text, ImageBackground, Image, TouchableOpacity, FlatList, TextInput } from 'react-native'

import { SafeAreaView } from 'react-navigation'
import {Theme} from '../../config';
import Product from './Products';
import Voicelayout from './Voice';


const Layout =(props)=>{
    return(
        <SafeAreaView 
        forceInset={{ bottom: 'never'}} 
        style={{ width: '100%', height: '100%', 
        backgroundColor: '#F79942' }}>
          
          {props.VoiceView == true ? 
          <Voicelayout {...props}/> :<Product {...props}/>}
      

        </SafeAreaView>


    )
}

export default Layout;