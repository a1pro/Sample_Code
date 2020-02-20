import React,{} from 'react'
import { View, Image, StyleSheet, Text, TextInput, ScrollView ,Dimensions} from 'react-native'
import Swiper from 'react-native-swiper'
import { Theme } from '../../../config'
import { Button } from '../../controls'
import PlaceholderIcon from '../../../../image/Placeholder.jpg'
import Customer from './Customer'
import Employes from './Employes';

const Slider = (props) => {
  const mTotalWidth = Dimensions.get("window").width;
  const mTotalHegiht = Dimensions.get('window').height;

  console.log( 'mTotalHegiht',mTotalHegiht);
  

  return (
    <Swiper
      style={{ backgroundColor: 'white', marginTop: 0 }}
      showsPagination={false}
      autoplay={false}
      loop={false}
      onIndexChanged={(Index) => props.functionChangeIndex(Index)}>
      <View style={LocalStyle.Container}>
      {mTotalHegiht < 740 ? 
        <ScrollView showsVerticalScrollIndicator={false}>
            <Employes {...props}/>
        </ScrollView>  :   <Employes {...props}/>}
        
      </View>
      <View style={{width: '100%', height: '90%'}}>
      {mTotalHegiht < 740 ? 
        <ScrollView showsVerticalScrollIndicator={false}>
          <Customer {...props}/>
        </ScrollView>  : <Customer {...props}/>}
      </View>
    </Swiper>
  )
}

const LocalStyle = StyleSheet.create({
  Container: {
    width: '90%', height: '90%', marginLeft: '5%', marginRight: '5%'
  },
  EditTextConatiner: {
    width: '100%',
    height: 45,
    paddingLeft: 15,
    borderRadius: 4,
    borderBottomWidth: 0.5,
    borderWidth: 0.5,
    borderColor: '#757575',
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginTop: 20
  }
})

export default Slider
