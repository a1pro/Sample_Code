import React from "react";
import {
  View,
  ScrollView,
  Image,
  StyleSheet,
  Dimensions,
  FlatList,
  Text
} from "react-native";

import Toolbar from "../Common/Toolbar";
import BottomBanner from "../../../image/bottombanner.png";
import Search from './Search';
import Layout10 from './Layout10';
import Layout6 from './Layout6';
import {SafeAreaView} from 'react-navigation';
import ActiveIcon from "../../../image/active.png";
import NonActiveIcon from "../../../image/non_Active.png";
import  Loader from '../Common/Loader';



import Swiper from "react-native-swiper";
import { Theme } from "../../config";

const Home = props => {

  const mTotalWidth = Dimensions.get("window").width;
  const mTotalHegiht = Dimensions.get('window').height;

  

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
      style={LocalStyle.SafeViewContainer}
    >
    <Toolbar {...props}/>
    <Search {...props}/>
    <View 
    style={{ backgroundColor: "white" , width:'100%', height:'100%',marginTop:10 , flex:2}} >
   { props.UserRole != 'CUSTOMER' &&  props.functionshowHeader('')}
    {mTotalHegiht < 670 ? <Layout6 {...props}/> :<Layout10 {...props}/>} 
     
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
</Swiper>
}
  

     
    </View>
     
   
      
     
      </View>
    </SafeAreaView>
  );
};

const LocalStyle = StyleSheet.create({
  SafeViewContainer:{
    width: "100%",
    height: "100%",
    backgroundColor: "#F79942"
  },
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
