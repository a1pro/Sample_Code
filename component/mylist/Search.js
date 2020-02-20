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
    ScrollView
  } from "react-native";
  import SearchIcon from "../../../image/search.png";
  import ScanIcon from "../../../image/scan.png";
  import MiceIcon from "../../../image/mice.png";

  const Search =(props)=>{
      return(
        <View
        style={{
          width: "90%",
          marginLeft: "5%",
          marginRight: "5%",
          height: 45,
          backgroundColor: "white",
          borderRadius: 5,
          flexDirection: "row",
          marginTop:5,
        }}
      >
        <View
          style={{
            width: "15%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Image
            style={{ width: 25, height: 25, resizeMode: "contain" }}
            source={SearchIcon}
          />
        </View>
        <TouchableOpacity
         onPress={()=>props.functionOpenPage('SimpleSearch', false)}
          style={{
            width: "60%",
            height: "100%",
            justifyContent: "center",
            alignItems: "flex-start"
          }}
        >
           <Text
               allowFontScaling={false}
              
             >
             Search Products.....
             </Text>
        </TouchableOpacity>
        <View style={{ width: "25%", height: "100%", flexDirection: "row" }}>
          <TouchableOpacity style={LocalStyle.MicContainer}
            onPress={()=>props.functionOpenPage('SimpleSearch', true)}
          >
            <Image
              style={{
                width: 25,
                height: 25,
                resizeMode: "contain"
              }}
              source={MiceIcon}
            />
          </TouchableOpacity>

          <TouchableOpacity
              style={LocalStyle.MicContainer}
              onPress={()=>props.functionOpenPage('Scanner', false)}
            >
              <Image
                style={{
                  width: 25,
                  height: 25,
                  resizeMode: "contain",
                 
                }}
                source={ScanIcon}
              />
            </TouchableOpacity>
        </View>
      </View>
      )
  }

  export default Search;
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