import React,{} from 'react';
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
    ScrollView,
   
  } from "react-native";
  import StoreIcon from "../../../image/pickup.png";
  import RewradsIcon from "../../../image/desibites2.png";
  const Layout6 =(props)=>{
    const mTotalWidth = Dimensions.get("window").width;
    const mWidth = mTotalWidth / 3;
    const mTotalHegiht = Dimensions.get('window').height;
      return(
        <View style={{ marginTop: 10 }}>
        <FlatList
         scrollEnabled={false}
        data={props.names}
        renderItem={({ item }) => (
          <TouchableOpacity
          onPress={()=>props.functionOpenPage(item.page)}
            style={{
              width: mWidth,
              height: mTotalHegiht/6-20,
              justifyContent: "center",
              alignItems: "center",
              borderBottomColor: "#DFDFDF",
              borderBottomWidth: 1,
              borderRightColor: "#DFDFDF",
              borderRightWidth: 1
            }}>
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
              height: mTotalWidth/2-70,
              flexDirection: "row",
              marginTop: 5
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
                borderBottomWidth: 1,
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
              style={{ color: "black", marginTop: 5 }}>
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
                borderBottomWidth: 1,
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
          </View>
      )
  }

  export default Layout6;