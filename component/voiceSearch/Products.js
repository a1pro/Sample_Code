import React,{} from 'react'
import { View, Text, ScrollView, TouchableOpacity, FlatList, SectionList, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-navigation'
import Styless from '../Common/Styless'
import Toolbar from '../Common/LoginToolbar'

import Search from './Search';

const Products = (props) => {

  return (
    <SafeAreaView forceInset={{ bottom: 'never'}} 
    style={Styless.MainContainer}
    >
    <Toolbar {...props}/>
    <Search {...props}/>
     
      <View style={{width: '100%', height: '100%', marginTop: 10, backgroundColor: 'white'}}>
       
      </View>
    </SafeAreaView>
  )
}

export default Products
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#e5e5e5'
  },
  SectionHeader: {
    backgroundColor: '#eeeeee',
    fontSize: 18,
    padding: 5,
    color: 'black',
    fontWeight: 'bold'
  },
  SectionListItemS: {
    fontSize: 16,
    padding: 6,
    color: '#000',
    backgroundColor: '#F5F5F5'
  }
})
