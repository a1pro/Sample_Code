import React,{} from 'react'
import { View, Text, ScrollView, FlatList, Dimensions,TouchableOpacity, Platform , StyleSheet, ActivityIndicator} from 'react-native';
import { SafeAreaView } from 'react-navigation';
import Styless from '../../Common/Styless';
import Toolbar from '../../Common/LoginToolbar';
import Loader from '../../Common/Loader';
import NetworkApi from '../../../network/NetworkApi';
import Icon from '../../../../image/Appetizers.jpg';

const mHeight = Dimensions.get('window').height
const mWidth = Dimensions.get('window').width


import {Image} from 'react-native-elements';

const Snack =(props)=>{

  console.log('props.List', props.List);
  
  if(props.ShowLoader)
  return(
    <SafeAreaView forceInset={{ bottom: 'never'}} style={Styless.MainContainer}>
    <Toolbar {...props}/>
    <View style={Styless.ScrollContainer}>
    <Loader />
    </View>
    </SafeAreaView>
  )
    return(
        <SafeAreaView forceInset={{ bottom: 'never'}} style={Styless.MainContainer}>
      <Toolbar {...props}/>
      <View style={Styless.ScrollContainer}>
      <View
      style={{width:'100%', height:'90%', marginBottom:8}}
      >
     
  <FlatList
          numColumns={2}
          data={props.List}
          renderItem={({item}) => 
          
          <TouchableOpacity
          style={{width: mWidth / 2 , height: 100}}
          onPress={()=>props.functionOpenPage(item.snackid, item.storeid, item.snackname)}
          >
      <Image 
          source={{uri: NetworkApi.IAMGE_BASE_URL+item.imagepath}}
          style={{width: '120%', height: 120,resizeMode:'cover', marginLeft:-20, marginRight:-50}}
          PlaceholderContent={<ActivityIndicator />}
          >
         
        </Image>
       
            </TouchableOpacity>
         
        }
          keyExtractor={item => item.id} />
     

      </View>
      </View>
      </SafeAreaView>
    )
}

export default Snack;