import React,{} from 'react'
import { View, Text, FlatList, Image , Dimensions, StyleSheet, TouchableOpacity} from 'react-native'
import { SafeAreaView } from 'react-navigation'
import Styless from '../../Common/Styless'
import Toolbar from '../../Common/LoginToolbar'
import Loader from '../../Common/Loader'
import NetworkApi from '../../../network/NetworkApi'
import { Theme } from '../../../config';
import NextIcon from '../../../../image/rightback.png';

var mTitleSize=0;
const mTotalHegiht = Dimensions.get('window').height;
 

if(mTotalHegiht <800)
{
    mTitleSize=16;
}
else
{
    mTitleSize=17;
}


const Specials = (props) => {
    console.log('props.List',props.List);
    
   
  if (props.Loader)
    return (
      <SafeAreaView forceInset={{ bottom: 'never'}} style={Styless.MainContainer}>
        <Toolbar {...props}/>
        <Loader />
      </SafeAreaView>
  )

  return (
    <SafeAreaView forceInset={{ bottom: 'never'}} style={Styless.MainContainer}>
      <Toolbar {...props}/>
      <View
      style={Styless.ScrollContainer}
      >

    
      <View style={{width:'100%', height:'90%',  backgroundColor:'white'}}>
        <FlatList data={props.List} renderItem={({item}) => <View style={{width: '100%', height: 120, flexDirection: 'row', borderBottomWidth: .5,  borderColor: Theme.PRIMARY_COLOR}}>
                                                               <View style={{width: '30%', height: '100%', justifyContent: 'center', alignItems: 'center'}}>
                                                                 <Image style={{width: '100%', height: 100, resizeMode: 'contain'}} source={{uri: NetworkApi.IAMGE_BASE_URL + item.imagepath}} />
                                                               </View>
                                                               <TouchableOpacity 
                                                               onPress={()=>props.functionOpenPage('SpecialDetails', NetworkApi.IAMGE_BASE_URL + item.imagepath, item.specialsdesc1,item.specialsdesc2,
                                                                item.expdate  )}
                                                               style={{width: '59%',marginLeft:'1%', height: '100%', justifyContent: 'center', alignItems: 'flex-start'}}>
                                                                 <Text
                                                                 allowFontScaling={false}
                                                                 style={LocalStyle.TitleLabel}
                                                                 >{ item.specialsdesc1}
                                                                 </Text>
                                                                 <Text
                                                                 allowFontScaling={false}
                                                                 style={LocalStyle.LabelDes}
                                                                 >{ item.specialsdesc2}
                                                                 </Text>
                                                                 <Text
                                                                 allowFontScaling={false}
                                                                 style={LocalStyle.TitleLabel}
                                                                 >Expires : <Text
                                                                 allowFontScaling={false}
                                                                 style={{fontSize:14, color :'#9e9e9e'}}
                                                                 >{item.expdate}</Text></Text>
                                                               </TouchableOpacity>
                                                               <View
                                                               style={{width:'10%', height:'100%', justifyContent:'center', alignItems:'center'}}
                                                               >
                                                               <Image 
                                                               style={{width:20, height:20, resizeMode:'contain'}}
                                                               source={NextIcon}
                                                               />

                                                                 </View>
             
                                                             </View>} keyExtractor={(item, index) => item.key} />
      
                                                             </View>
      </View>
    </SafeAreaView>
  )
}


const LocalStyle= StyleSheet.create({
    TitleLabel :{
        fontSize: mTitleSize,
        color :Theme.TEXT_COLOR,
        fontWeight :'bold'
    },
    LabelDes:{
        fontSize: mTitleSize,
        color :Theme.TEXT_COLOR,
        marginTop:5
        
    }
})
export default Specials
