import React,{} from 'react'
import { View, Text, ScrollView, StyleSheet, TouchableOpacity,  } from 'react-native'
import Swiper from 'react-native-swiper';
import ActivieCatering from './ActivieCatering';
import CompletedCatering from './CompletedCatering';
import CateringSummary from './CateringSummary';

const Slider =(props)=>{
    return(
      
        <Swiper
        style={{ backgroundColor: 'white', marginTop: 0 }}
        showsPagination={false}
        autoplay={false}
        loop={false}
        onIndexChanged={(Index) => props.functionChangeIndex(Index)}>
        <View style={LocalStyle.Container}>
        <ActivieCatering {...props}/>


        </View>
        <View style={LocalStyle.Container}>
        <CompletedCatering {...props}/>


        </View>

        <View style={LocalStyle.Container}>
        <ScrollView
        showsVerticalScrollIndicator={false}
        >
         <CateringSummary {...props}/>  

        
        </ScrollView>
       
        </View>
        </Swiper>
    )
}

const LocalStyle = StyleSheet.create({
    Container: {
      width: '96%', height: '90%', marginLeft: '2%', marginRight: '2%'
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

  export default Slider;