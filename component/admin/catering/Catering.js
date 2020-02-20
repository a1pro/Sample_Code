import React,{} from 'react'
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Platform } from 'react-native'
import { SafeAreaView } from 'react-navigation'
import Styless from '../../Common/Styless'
import Toolbar from '../../Common/LoginToolbar'
import { Theme } from '../../../config'
import Header from './Header';
import Slider from './Slider';
import Loader from '../../Common/Loader';


var mHeight= Platform.OS == 'ios'?  '88%' :'80%';

const Catering = (props) => {



  return (
    <SafeAreaView forceInset={{ bottom: 'never'}} style={Styless.MainContainer}>
      <Toolbar {...props}/>
      <View style={Styless.ScrollContainer}>
        <TouchableOpacity 
         onPress={() => props.functionOpenpage('CreateContainer')}
        style={LocalStyle.CreateContainer}>
          <Text allowFontScaling={false} style={{color: 'black',fontSize: Theme.TITLE_SIZE }}>
            CREATE NEW CATERING
          </Text>
        </TouchableOpacity>
        <Header {...props}/>

        <View
        style={{width:'100%', height: mHeight}}
        >
        <Text allowFontScaling={false} style={LocalStyle.TitleLabel}>
          {props.PageTitle}
        </Text>

        <Slider {...props}/> 
      </View> 
        </View>
        
    </SafeAreaView>
  )
}
const LocalStyle = StyleSheet.create({
  CreateContainer: {
    marginTop: 10,
    marginBottom: 5,
    width: '80%',
    height: 40,
    marginLeft: '10%',
    marginRight: '10%',
    backgroundColor: Theme.PRIMARY_COLOR,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  TitleLabel: {
    fontSize: 17, alignSelf: 'center', marginTop: 5, fontWeight: 'bold'
  }

})
export default Catering
