import React, { Component } from "react";
import {
  Platform,
  StatusBar,
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import MenuIcon from "../../../image/menu.png";
import LogoIcon from "../../../image/title_icon2.png";

const MyStatusBar = ({ backgroundColor, ...props }) => (
  <View style={[styles.statusBar, { backgroundColor }]}>
    <StatusBar translucent backgroundColor={backgroundColor} {...props} />
  </View>
);

const Toolbar = props => {

  if(props.Login)
  return (
    <View>
    <MyStatusBar backgroundColor="#F79942" barStyle="default" />
    <View
      style={{
        width: "100%",
        height: 47,
        backgroundColor: "#F79942",
        flexDirection: "row"
      }}
    >
      <TouchableOpacity
      onPress={props.functionOpenDrawer}
        style={{
          width: "15%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Image
          style={{ width: 25, height: 25, resizeMode: "contain" }}
          source={MenuIcon}
        />
      </TouchableOpacity>
      <View
        style={{
          width: "65%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        {props.Title == "" ? (
          <Image
            source
            style={{ width: 110, height: '100%', resizeMode: "contain" }}
            source={LogoIcon}
          />
        ) : (
          <Text
          allowFontScaling={false}
            style={{
              color: "white",
              fontSize: 17,
              fontWeight: "bold"
            }}
          >
            {props.Title}
          </Text>
        )}
      </View>

  

      <View
        style={{
          width: "20%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}>
        <Text 
        allowFontScaling={false}
        numberOfLines={5}
        style={{ color: "black", alignSelf :'center', fontWeight:'bold'}}>{props.SignIn}</Text>
      </View>

    </View>
  </View>
  )
  return (
    <View>
      <MyStatusBar backgroundColor="#F79942" barStyle="default" />
      <View
        style={{
          width: "100%",
          height: 47,
          backgroundColor: "#F79942",
          flexDirection: "row"
        }}
      >
        <TouchableOpacity
        onPress={props.functionOpenDrawer}
          style={{
            width: "15%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Image
            style={{ width: 25, height: 25, resizeMode: "contain" }}
            source={MenuIcon}
          />
        </TouchableOpacity>
        <View
          style={{
            width: "65%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          {props.Title == "" ? (
            <Image
              source
              style={{ width: 110, height: '100%', resizeMode: "contain" }}
              source={LogoIcon}
            />
          ) : (
            <Text
            allowFontScaling={false}
              style={{
                color: "white",
                fontSize: 17,
                fontWeight: "bold"
              }}
            >
              {props.Title}
            </Text>
          )}
        </View>

    

        <TouchableOpacity
         onPress={()=>props.functionOpenPage('Login')}
          style={{
            width: "20%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}>
          <Text 
          allowFontScaling={false}
          numberOfLines={5}
          style={{ color: "black", alignSelf :'center', fontWeight:'bold'}}>{props.SignIn}</Text>
        </TouchableOpacity>

      </View>
    </View>
  );
};
const STATUSBAR_HEIGHT = Platform.OS === "ios" ? 0 : StatusBar.currentHeight;
const APPBAR_HEIGHT = Platform.OS === "ios" ? 44 : 56;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  statusBar: {
    height: STATUSBAR_HEIGHT
  },
  appBar: {
    backgroundColor: "#79B45D",
    height: APPBAR_HEIGHT
  },
  content: {
    flex: 1,
    backgroundColor: "#33373B"
  }
});
export default Toolbar;
