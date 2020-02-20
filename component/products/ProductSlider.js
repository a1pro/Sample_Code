import React, { } from 'react'
import { View, Text, SectionList, Dimensions, FlatList, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native'

import { Theme } from '../../config'

import Swiper from 'react-native-swiper'
import ActiveIcon from '../../../image/active.png'
import NonActiveIcon from '../../../image/non_Active.png'
import Styless from '../Common/Styless';
import Expandable_ListView from './Expandable_ListView';
import Loader from '../Common/Loader';



const ProductSlider = (props) => {


  const mTotalWidth = Dimensions.get('window').width


  return (
    <Swiper
      showsPagination={false}
      loop={false}
      dotColor='#000'
      activeDotColor={Theme.PRIMARY_COLOR}
      onIndexChanged={(index) => props.functionChangeIndex(index)}
    >
      <View styles={{ width: '100%', height: '100%' }}>
         <ScrollView contentContainerStyle={{ paddingHorizontal: 10, paddingVertical: 5 ,}}>
          {
            props.AccordionData.map((item, key) =>
              (
                <Expandable_ListView 
                style={{width:'100%', height:'80%'}}
                key={item.category_Name} 
                onClickFunction={props.update_Layout.bind(this, key)} 
                item={item} 
               
                />
              ))
          }
        </ScrollView>
      </View>
      <View styles={{ width: '100%', height: '100%' }}>
      { props.Brand_Loader == true ? <Loader /> :

        <FlatList
          data={props.Brand_List}
          renderItem={({ item }) => (
            <View>
              <TouchableOpacity
                onPress={() => props.functionOpenPage('Category', item.brand, item.brand , false)}
                style={{ width: '100%', height: 45, justifyContent: 'center', alignContent: 'flex-start' }}>
                <Text
                  allowFontScaling={false}
                  style={{ marginLeft: 10, color: 'black', fontSize: 21 }}>
                  {item.brand}
                </Text>
              </TouchableOpacity>
              <View style={Styless.Line} />
            </View>

          )}
          keyExtractor={item => item.name}
        />
      }
      </View>
    </Swiper>


  )
}

export default ProductSlider
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
