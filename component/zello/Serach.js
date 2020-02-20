import React from "react";
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  FlatList,
  TextInput,
  StyleSheet,
  Platform
} from "react-native";

import Header from './Header';
import { SafeAreaView } from 'react-navigation';
import Styless from "../Common/Styless";
import HomebackImage from "../../../image/homeBack.png";
import SerachImage from "../../../image/search.png";
import MiceImage from "../../../image/mice.png";
import VoiceDialog from '../Picker/VoiceRecoder';
import Loader from '../Common/Loader';

const Search = props => {

  if (props.ShowLoader)
    return (
      <View>
        <View
          style={LocalStyle.Main_Container}>
          <Loader />
        </View>
      </View>
    )
  return (

    <View
      style={LocalStyle.Main_Container}>
      <FlatList
        data={props.List}
        renderItem={({ item }) =>
          <View>
            <TouchableOpacity
              onPress={() => props.functionOpenPage('UpdateDetailsContainer', item.itemnum)}
              style={{ width: '100%', height: 40, justifyContent: 'center', alignItems: 'flex-start' }}>
              <Text allowFontScaling={false} style={{ marginLeft: 10 }}>{item.itemname}</Text>
            </TouchableOpacity>
            <View style={Styless.Line} />
          </View>
        }
      />
    </View>)
};

const LocalStyle = StyleSheet.create({

  Main_Container: {
    width: '100%',
    height: Platform.OS == 'ios' ? '89%' : '81%',
    backgroundColor: 'white',
  }
})

export default Search;
