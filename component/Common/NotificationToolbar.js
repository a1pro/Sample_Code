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
import BackIcon from "../../../image/backwhite.png";
import DeleteIcon from '../../../image/delete.png';

const MyStatusBar = ({ backgroundColor, ...props }) => (
  <View style={[styles.statusBar, { backgroundColor }]}>
    <StatusBar translucent backgroundColor={backgroundColor} {...props} />
  </View>
);

const NotificationToolbar = props => {
  return (
    <View>
      <MyStatusBar backgroundColor="#F79942" barStyle="default" />
      <View
        style={{
          width: "100%",
          height: 45,
          backgroundColor: "#F79942",
          flexDirection: "row"
        }}
      >
        <TouchableOpacity
          style={{
            width: "15%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center"
          }}
          onPress={() => props.functionGoback()}
        >
          <Image
            style={{ width: 25, height: 25, resizeMode: "contain" }}
            source={BackIcon}
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
          <Text
            allowFontScaling={false}
            style={{ color: "black", fontWeight: "bold", fontSize: 18 }}
          >
            {props.Title}
          </Text>
        </View>
        <TouchableOpacity
          style={{
            width: "20%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center"
          }}
          onPress = {() => props.deleteAllNotification()}
        >
        <Image
            style={{ width: 20, height: 20, resizeMode: "contain" }}
            source={DeleteIcon}
          />
          <Text
          allowFontScaling={false}
          >
              Clear All
          </Text>
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
export default NotificationToolbar;
