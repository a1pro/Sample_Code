import React from 'react'
import { View, Text, ImageBackground, Image, TouchableOpacity, FlatList, TextInput } from 'react-native'

import { SafeAreaView } from 'react-navigation'
import {Theme} from '../../config';
import {Button} from '../controls';
import Styless from '../Common/Styless'
import HomebackImage from '../../../image/homeBack.png'
import SerachImage from '../../../image/search.png'
import MiceImage from '../../../image/mice.png'
import VoiceDialog from '../Picker/VoiceRecoder'
import Toolbar from '../Common/LoginToolbar'
import VoiceRecoderImage from '../../../image/Recoding.gif'
import CircleMiceIcon from '../../../image/Circle_Mice.png';

const Voice = props => {
  console.log('props.List', props.CancelButton)

  return (
    <SafeAreaView forceInset={{ bottom: 'never'}} style={{ width: '100%', height: '100%', backgroundColor: '#F79942' }}>
      <Toolbar {...props}/>
      <View style={{width: '100%', height: '100%', backgroundColor: 'white'  }}>
        <View style={{marginTop: 150 }}>
          <Text allowFontScaling={false} style={{fontSize: 18,color: 'black',textAlign: 'center',marginLeft: 50, marginRight: 50}}>
            Speak clearly the product you want to search
          </Text>
          <Image source={ props.CancelButton == true? VoiceRecoderImage : CircleMiceIcon} 
          style={{ width: 200, height: 200, resizeMode: 'contain',  alignSelf: 'center' }} />
        
        {props.CancelButton == true ? 
        <TouchableOpacity
         onPress={()=>props.functionShowProductSearch(false)}
        style={{width:150, height:45, backgroundColor:Theme.PRIMARY_COLOR, alignSelf:'center',
        borderRadius:5, justifyContent: "center",
        alignItems: "center", marginTop:50}}
        >
            <Text
            allowFontScaling={false}
            style={{fontSize:18, color:'black'}}
            >Cancel</Text>


        </TouchableOpacity>:

        <TouchableOpacity
         onPress={props.functionTryAgain}
        style={{width:150, height:45, backgroundColor:Theme.PRIMARY_COLOR, alignSelf:'center',
        borderRadius:5, justifyContent: "center",
        alignItems: "center", marginTop:50}}
        >
            <Text
            allowFontScaling={false}
            style={{fontSize:18, color:'black'}}
            >Try Again</Text>


        </TouchableOpacity>}
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Voice
