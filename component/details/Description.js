
import React,{} from 'react'
import { View, Text, ScrollView, Dimensions, ImageBackground, Image, TouchableOpacity, StyleSheet } from 'react-native'

import { Theme } from '../../config'
import Header from './Header';
import Loader from '../Common/Loader'

const mTotalHegiht = Dimensions.get('window').height


var mTitleFont = 16
var mNormalFont = 14
if (mTotalHegiht > 890) {
  mTitleFont = 18
  mNormalFont = 17
}else {
  mTitleFont = 16
  mNormalFont = 15
}



const Description = (props) => {
  // alert(JSON.stringify(props));
  return (
    <View>
      { props.showDetailLoader ? <Loader /> : 
        <View>
        <View
         style={{width :'100%', height:undefined, flexDirection:'row'}}
         >
          <View
         style={{width:'50%', height :undefined}}
         >
           <Text allowFontScaling={false} style={LocalStyle.DescriptionTitle}>
          Description :
        </Text>
         </View>
         <View
         style={{width:'50%', height :undefined}}
         >
          <Text allowFontScaling={false} style={LocalStyle.DescriptionText}>
         {props.PDescription}
        </Text>
         </View>
         </View>
      
       
        <View
         style={{width :'100%', height:undefined, flexDirection:'row'}}
         >
  
         <View
         style={{width:'50%', height :undefined}}
         >
         <Text allowFontScaling={false} style={LocalStyle.DescriptionTitle}>
          Brand :  
          </Text>
          </View>
          <View
           style={{width:'50%', height :undefined}}>
             <TouchableOpacity
                onPress={() => props.functionOpenPageBrand('SeeBrandContainer', props.Brand, props.Brand , false)}>
                <Text allowFontScaling={false} style={{ marginLeft: 10, fontSize: mTitleFont, marginTop: 3, color: 'black', textDecorationLine: 'underline' }}>
                  {props.Brand}
                </Text>
              </TouchableOpacity>
           </View>
         </View>
  
         <View
         style={{width :'100%', height:undefined, flexDirection:'row'}}
         >
         <View
         style={{width:'50%', height :undefined}}
         >
        <Text allowFontScaling={false} style={LocalStyle.DescriptionTitle}>
       
        Product Type :  
      
        </Text>
        </View>
        <View
         style={{width:'50%', height :undefined}}>
          <TouchableOpacity
          // 
            onPress={() => props.productTypeFilterProduct(props.ProductType)}>
            <Text allowFontScaling={false} style={{ marginLeft: 10, fontSize: mTitleFont, marginTop: 3, color: 'black', textDecorationLine: 'underline' }}>
            {props.ProductType}
            </Text>
          </TouchableOpacity>
        </View>
         </View>

         <View
         style={{width :'100%', height:undefined, flexDirection:'row'}}
         >
         <View
         style={{width:'50%', height :undefined}}
         >
        <Text allowFontScaling={false} style={LocalStyle.DescriptionTitle}>
       
        Theme :  
      
        </Text>
        </View>
        <View
         style={{width:'50%', height :undefined}}>
           <TouchableOpacity
            onPress={() => props.productThemeFilterProduct(props.THEME)}>
            <Text allowFontScaling={false} style={{ marginLeft: 10, fontSize: mTitleFont, marginTop: 3, color: 'black', textDecorationLine: 'underline' }}>
            {props.THEME}
            </Text>
          </TouchableOpacity>
        {/* <Text allowFontScaling={false} style={LocalStyle.DescriptionText}>
        
        {props.THEME}
        
        </Text> */}
        </View>
         </View>
  
         <View
         style={{width :'100%', height:undefined, flexDirection:'row'}}
         >
         <View
         style={{width:'50%', height :undefined}}
         >
        <Text allowFontScaling={false} style={LocalStyle.DescriptionTitle}>
        
        Weight :  
       
        </Text>
        </View>
        <View
         style={{width:'50%', height :undefined}}>
        <Text allowFontScaling={false} style={LocalStyle.DescriptionText}>
      
         {props.Weight}
        </Text>
        </View>
         </View>
  
         <View
         style={{width :'100%', height:undefined, flexDirection:'row'}}
         >
         <View
         style={{width:'50%', height :undefined}}
         >
        <Text allowFontScaling={false} style={LocalStyle.DescriptionTitle}>
        Ingredients : 
        </Text>
        </View>
        <View
         style={{width:'50%', height :undefined}}>
        <Text allowFontScaling={false} style={LocalStyle.DescriptionText}>
        {props.Ingredients}
        </Text>
        </View>
         </View>
  
         <View
         style={{width :'100%', height:undefined, flexDirection:'row'}}
         >
         <View
         style={{width:'50%', height :undefined}}
         >
  
       
      
        <Text allowFontScaling={false} style={LocalStyle.DescriptionTitle}>
        Usage : 
        </Text>
  
         </View>
         <View
         style={{width:'50%', height :undefined}}
         >
   <Text allowFontScaling={false} style={LocalStyle.DescriptionText}>
   {props.Usage}
        </Text>
       
         </View>
  
         </View>
         </View>
      }
    </View>

  )
}

const LocalStyle = StyleSheet.create({
  MainContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white'
  },
  SliderContainer: {
    width: '100%',
    height: mTotalHegiht / 2 - 50
  },
  ButtonContainer: {
    width: 200,
    height: 40,
    borderRadius: 10,
    backgroundColor: Theme.PRIMARY_COLOR,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:  0
  },
  ButtonLabel: {
    color: 'black', alignSelf: 'center'
  },
  TitleLabel: {
    marginLeft: 10, fontWeight: 'bold', fontSize: 18
  },
  Text: {
    marginLeft: 10,
    fontSize: mTitleFont,
    marginTop: 3,
    color: 'black',
    marginTop: 10

  },
  DescriptionText: {
    marginLeft: 10,
    fontSize: mTitleFont,
    marginTop: 3,
    color: 'black'

  },
  DescriptionTitle: {
    marginLeft: 10,
    fontSize: mTitleFont,
    color: 'black',
    fontWeight: 'bold'
  },
  CountLabel: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold'
  },
  FillStock: {
    marginRight: 10,
    width: 120,
    height: 40,
    borderRadius: 10,
    backgroundColor: Theme.PRIMARY_COLOR,

    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 0
  }
})
export default Description
