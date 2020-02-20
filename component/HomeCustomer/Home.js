import React from "react";
import {
  View,
  Image,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  FlatList,
 
} from "react-native";

import Toolbar from "../Common/Toolbar";
import Search from "./Search";
import Layout6 from './Layout6';
import Layout10 from './Layout10';
import BottomBanner from "../../../image/bottombanner.png";
import {SafeAreaView} from 'react-navigation';
import Loader from '../Common/Loader';
import NetworkApi from '../../network/NetworkApi';
import {Theme} from '../../config';




import Swiper from "react-native-swiper";
const Home = props => {
  const mTotalWidth = Dimensions.get("window").width;
  const mTotalHegiht = Dimensions.get('window').height;

  console.log('BannerList', props.BannerList);
  
  const mImage= props.BannerList.map((item)=>{
    return (
      <View>
   <Image style={{ height:'100%', width: mTotalWidth }} 
              source={{ uri: item }}
               resizeMode="stretch" />
        </View>
    )
  })
  return (
    <SafeAreaView
    forceInset={{ bottom: 'never'}}
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "#F79942"
      }}>
      <Toolbar {...props} />
      <Search {...props}/>
      <View style={{ backgroundColor: "white" , width:'100%', height:'100%',marginTop:10 , flex:2}} >
      <ScrollView 
      scrollEnabled={false}
      style={{  flex:1, backgroundColor: "white", marginTop: 10 }}>
    {mTotalHegiht < 670 ? <Layout6 {...props}/> :<Layout10 {...props}/>} 
      
      </ScrollView>
      <View
    style={{flex :.3, width :'100%', height:'100%'}}
    >
    
    {props.BannerList.length == 0 ? <Loader />:

      

<Swiper
  style={{ backgroundColor: "white", marginTop: 0 }}
  showsPagination={true}
  loop={true}
  autoplay={true}
  dotColor={'black'}
  activeDotColor={Theme.PRIMARY_COLOR}
>
  {mImage}
</Swiper>}

     
    </View>
     
      </View>
    </SafeAreaView>
  );
};
const LocalStyle = StyleSheet.create({
  Main: {
    width: "90%",
    height: "100%",
    marginLeft: "5%",
    marginRight: "5%"
  },
  MicContainer: {
    width: "50%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center"
  }
});
export default Home;
