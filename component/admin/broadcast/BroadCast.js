import React, { } from 'react';
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import Styless from '../../Common/Styless';
import Toolbar from '../../Common/LoginToolbar';
import Header from './Header';
import Slider from './Slider';

const BroadCast = (props) => {
  return (
    <SafeAreaView
      forceInset={{ bottom: 'never' }}
      style={Styless.MainContainer}
    >
      <Toolbar {...props} />
      <View
        style={Styless.ScrollContainer}
      >
        <Header {...props} />

        <Text allowFontScaling={false} style={LocalStyle.TitleLabel}>
          {props.PageTitle}
        </Text>
        <Slider {...props} />

      </View>

    </SafeAreaView>
  )
}
const LocalStyle = StyleSheet.create({

  TitleLabel: {
    fontSize: 17, alignSelf: 'center', marginTop: 5, fontWeight: 'bold'
  },
})
export default BroadCast;
