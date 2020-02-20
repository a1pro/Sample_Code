import React from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  Image,
  ScrollView,
  Text,
  TouchableOpacity
} from "react-native";

const BirthDate = props => {
  return (
    <View>
      <Text
        allowFontScaling={false}
        style={{ alignSelf: "center", marginTop: 5 }}
      >
        Birth Date(Optional)
      </Text>
      <Text
      style={{alignSelf:'center'}}
      allowFontScaling={false}
      >
      Used for Sending Birthday Coupons

      </Text>
      <View
        style={{
          width: "100%",
          height: 50,
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row"
        }}
      >
        <TouchableOpacity
          onPress={() => props.functionShowDialog("DaysDialogVisible", true)}
          style={{ width: "50%", height: "100%" }}
        >
          <Text
            allowFontScaling={false}
            style={{
              alignSelf: "center",
              marginTop: 10,
              marginBottom: 10
            }}
          >
            {props.DD}
          </Text>
          <View
            style={{
              width: "95%",
              height: 1,
              backgroundColor: "#909090",
              marginRight: "5%"
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => props.functionShowDialog("MonthDialogVisible", true)}
          style={{ width: "50%", height: "100%" }}
        >
          <Text
            allowFontScaling={false}
            style={{
              alignSelf: "center",
              marginTop: 10,
              marginBottom: 10
            }}
          >
            {props.MM}
          </Text>
          <View
            style={{
              width: "95%",
              height: 1,
              backgroundColor: "#909090",
              marginLeft: "5%"
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BirthDate;
