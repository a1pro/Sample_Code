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



import Swiper from "react-native-swiper";
import ActiveIcon from "../../../image/active.png";
import NonActiveIcon from "../../../image/non_Active.png";
import StoreIcon from "../../../image/pickup.png";
import RewradsIcon from "../../../image/desibites2.png";




const Layout10 = props => {
  const mTotalWidth = Dimensions.get("window").width;
  const mWidth = mTotalWidth / 3;
  const mTotalHegiht = Dimensions.get("window").height;
  return (
    <Swiper
      style={{ backgroundColor: "white", marginTop: 0 }}
      showsPagination={false}
      loop={false}
      onIndexChanged={(Index) => props.functionChangeIndex(Index)}
      scrollEnabled={props.UserRole == 'CUSTOMER' ? false : true}>
     
        <View>
         <FlatList
           scrollEnabled={false}
            data={props.names}
            renderItem={({ item }) => (
              <TouchableOpacity
              onPress={()=>props.functionOpenPage(item.page)}
                style={{
                  width: mWidth,
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
                  style={{ textAlign: "center", color: "black", marginTop: 2 ,fontSize: 16,}}
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
              height: mTotalWidth/2-68,
              flexDirection: "row",
              marginTop: 0,
            
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
              }}>
                <Image
              style={{ width: '45%', height: '45%', resizeMode: "contain" }}
              source={StoreIcon}
            />
              <Text
                allowFontScaling={false}
                style={{ color: "black", marginTop: 5 ,fontSize: 16,}}
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
              }}>
             <Image
              style={{ width: '70%', height: '70%', resizeMode: "contain", marginBottom:0 }}
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
              style={{
                width: mWidth,
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
                style={{ textAlign: "center", color: "black", marginTop: 2 ,fontSize: 16,}}
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
            height: mTotalWidth/2-68,
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
              style={{ color: "black", marginTop: 5 ,fontSize: 16,}}
            >
              Store Pick Up
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
             onPress={()=>props.functionOpenPage('OrderOnline')}
            style={{
              width: "50%",
              height: "100%",
              borderBottomColor: "white",
              borderBottomWidth: 0,
              borderRightColor: "#DFDFDF",
              borderLeftWidth: 0,
              justifyContent:'center',
              alignItems:'center'
            }}
          >
            <Image
              style={{ width: '70%', height: '70%', resizeMode: "contain", marginBottom:0 }}
              source={RewradsIcon}
            />
          </TouchableOpacity>
        </View>
      </View>}
    </Swiper>
  );
};

export default Layout10;
