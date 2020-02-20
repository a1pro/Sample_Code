import React from "react";
import {
  View,
  ImageBackground,
  FlatList,
  Text,
  Image,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  ScrollView
} from "react-native";
import StoreIcon from "../../../image/pickup.png";


import Styless from "../Common/Styless";
import HomeBackImage from "../../../image/homeBack.png";
import SearchIcon from "../../../image/search.png";
import ScanIcon from "../../../image/scan.png";
import Toolbar from "../Common/Toolbar";
import MiceIcon from "../../../image/mice.png";
import Swiper from "react-native-swiper";
import ActiveIcon from "../../../image/active.png";
import NonActiveIcon from "../../../image/non_Active.png";
import RewradsIcon from "../../../image/desibites2.png";
import BottomBanner from "../../../image/bottombanner.png";
import BackIcon from "../../../image/Splash.jpg";

const Layout6 = props => {
  const mTotalWidth = Dimensions.get("window").width;
  const mWidth = mTotalWidth / 3;
  const mTotalHegiht = Dimensions.get("window").height;
  return (
    <Swiper
      style={{ backgroundColor: "white", marginTop: 0 }}
      showsPagination={false}
      loop={false}
      onIndexChanged={(Index) => props.functionChangeIndex(Index)}
      scrollEnabled={props.UserRole == 'CUSTOMER' ? false : true}
      >
    
      <View>
        
        <FlatList
          scrollEnabled={false}
          data={props.names}
          renderItem={({ item }) => (
            <TouchableOpacity
            onPress={()=>props.functionOpenPage(item.page)}
            activeOpacity={.5}
              style={{
                width: mWidth,
                flex:1,
                height: mTotalHegiht/6-20,
                justifyContent: "center",
                alignItems: "center",
                borderBottomColor: "#DFDFDF",
                borderBottomWidth: 1,
                borderRightColor: "#DFDFDF",
                borderRightWidth: 1
              }}
            >
              <Image
                source={item.im}
                style={{ width: 45, height: 45, resizeMode: "contain" }}
              />
              <Text
                allowFontScaling={false}
                style={{ textAlign: "center", color: "black", marginTop: 2 }}
              >
                {item.name}
              </Text>
            </TouchableOpacity>
          )}
          numColumns="3"
        />

        <View
          style={{
            width: "100%",
            height: mTotalWidth/2-80,
            flexDirection: "row",
            marginTop: 0
          }}
        >
           <TouchableOpacity
             onPress={()=>props.functionOpenPage('StorePickup')}
            style={{
              width: "50%",
              height: "100%",
              justifyContent: "center",
              alignItems: "center",
              borderBottomColor: "#DFDFDF",
              borderBottomWidth: 0,
              borderRightColor: "#DFDFDF",
              borderRightWidth: 1
            }}
          >
            <Image
              style={{ width: '45%', height: '45%', resizeMode: "contain" }}
              source={StoreIcon}
            />
            <Text
              allowFontScaling={false}
              style={{ color: "black", marginTop: 2 }}
            >
              Store Pick Up
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={()=>props.functionOpenPage('OrderOnline')}
             style={{
              width: "50%",
              height: "100%",
              justifyContent: "center",
              alignItems: "center",
              borderBottomColor: "#DFDFDF",
              borderBottomWidth: 0,
              borderRightColor: "#DFDFDF",
              borderRightWidth: 1
            }}
          >
            <Image
              style={{ width: '65%', height: '65%', resizeMode: "contain" }}
              source={RewradsIcon}
            />
          </TouchableOpacity>
        </View>
      </View>

        
{props.UserRole != 'CUSTOMER' && 
      <View>
        <FlatList
          scrollEnabled={false}
          data={props.Admin}
          renderItem={({ item }) => (
            <TouchableOpacity
            onPress={()=>props.functionOpenPage(item.page)}
            activeOpacity={.5}
              style={{
                width: mWidth,
                flex:1,
                height: mTotalHegiht / 6 - 20,
                justifyContent: "center",
                alignItems: "center",
                borderBottomColor: "#DFDFDF",
                borderBottomWidth: 1,
                borderRightColor: "#DFDFDF",
                borderRightWidth: 1
              }}
            >
              <Image
                source={item.im}
                style={{ width: 45, height: 45, resizeMode: "contain" }}
              />
              <Text
                allowFontScaling={false}
                style={{ textAlign: "center", color: "black", marginTop: 2 }}
              >
                {item.name}
              </Text>
            </TouchableOpacity>
          )}
          numColumns="3"
        />
        <View
          style={{
            width: "100%",
            height: mTotalWidth/2-80,
            flexDirection: "row",
            marginTop: 0
          }}
        >
          <TouchableOpacity
             onPress={()=>props.functionOpenPage('StorePickup')}
            style={{
              width: "50%",
              height: "100%",
              justifyContent: "center",
              alignItems: "center",
              borderBottomColor: "#DFDFDF",
              borderBottomWidth: 0,
              borderRightColor: "#DFDFDF",
              borderRightWidth: 1
            }}
          >
            <Image
              style={{ width: '45%', height: '45%', resizeMode: "contain" }}
              source={StoreIcon}
            />
            <Text
              allowFontScaling={false}
              style={{ color: "black", marginTop: 2 }}
            >
              Store Pick Up
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
             onPress={()=>props.functionOpenPage('OrderOnline')}
            style={{
              width: "50%",
              height: "100%",
              justifyContent: "center",
              alignItems: "center",
              borderBottomColor: "#DFDFDF",
              borderBottomWidth: 0,
              borderRightColor: "#DFDFDF",
              borderRightWidth: 1
            }}
          >
            <Image
              style={{ width: '65%', height: '65%', resizeMode: "contain", marginBottom:0 }}
              source={RewradsIcon}
            />
          </TouchableOpacity>
        </View>
      </View>}
    </Swiper>
  );
};

export default Layout6;
