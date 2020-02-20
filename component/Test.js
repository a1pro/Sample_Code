import React,{} from 'react'
import { FlatList, View, ImageBackground, Image, ScrollView, SafeAreaView, TouchableOpacity, StatusBar,Platform, StyleSheet } from 'react-native'
import Swiper from 'react-native-swiper';
import Styless from '../component/Common/Styless';

import HomeBackImage from '../../image/homeBack.png';

import { Theme } from '../config';
import { Button } from './controls';
import Toolbar from './Common/LoginToolbar';
import Expandable_ListView from './products/Expandable_ListView';

const MyStatusBar = ({backgroundColor, ...props}) => (
  <View style={[styles.statusBar, { backgroundColor }]}>
    <StatusBar translucent backgroundColor={backgroundColor} {...props} />
  </View>
);
const Test = (props) => {
  return (
          <SafeAreaView>

         

      </SafeAreaView>
  )
}

export default Test
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;
const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  statusBar: {
    height: STATUSBAR_HEIGHT,
  },
  appBar: {
    backgroundColor:'#79B45D',
    height: APPBAR_HEIGHT,
  },
  content: {
    flex: 1,
    backgroundColor: '#33373B',
  },
});