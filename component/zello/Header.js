import React from "react";
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  FlatList,
  TextInput,
  StyleSheet
} from "react-native";
import ScanIcon from "../../../image/scan.png";

const Header =(props)=>{
    return (
        <View
           style={{
            width: "90%",
            marginLeft: "5%",
            marginRight: "5%",
            height: 45,
            backgroundColor: "white",
            borderRadius: 5,
            flexDirection: "row",
            marginTop:0,
            marginBottom:10,
          }}>
          <View
            style={{
              width: "100%",
              height: "100%",
              justifyContent: "center",
              alignItems: "flex-start",
              flexDirection: 'row'
            }}
          >
            <TextInput
              style={{
                width: "80%",
                height: "100%",
                justifyContent: "center",
                alignItems: "flex-start",
                paddingLeft: '20%'
              }}
              placeholder={"Search Products"}
              value={props.SearchTag}
              onChangeText={value => props.functionSearch(value)}
            />
              <TouchableOpacity
                style={LocalStyle.MicContainer}
                onPress={()=>props.functionOpenPage('Scanner_Zello', false)}
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

export default Header;
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