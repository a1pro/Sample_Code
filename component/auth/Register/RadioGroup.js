import React from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  SafeAreaView
} from "react-native";
import Active from "../../../../image/active.png";
import Unactive from "../../../../image/unactive.png";
const RadioGroup = props => {
  return (
    <View
      style={{
        width: "80%",
        marginLeft: "10%",
        marginRight: "10%",
        height: 40,
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row"
      }}
    >
      <TouchableOpacity
        style={{ flexDirection: "row" }}
        onPress={() => props.functionRadioGroup("YES")}
      >
        <Image
          style={{ width: 20, height: 20, resizeMode: "contain" }}
          source={props.RadioGroup.Yes == true ? Active : Unactive}
        />
        <Text allowFontScaling={false} style={{ marginLeft: 5 }}>
          Yes
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => props.functionRadioGroup("NO")}
        style={{ flexDirection: "row" }}
      >
        <Image
          style={{ width: 20, height: 20, resizeMode: "contain" }}
          source={props.RadioGroup.Yes == true ? Unactive : Active}
        />
        <Text allowFontScaling={false} style={{ marginLeft: 5 }}>
          No
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default RadioGroup;
