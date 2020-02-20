import React,{} from 'react'
import { View, Text, ScrollView, TouchableOpacity } from 'react-native'

const Tab = (props) => {
    return(

   
  <View style={{width: '90%', height: 45, flexDirection: 'row', marginTop: 10, marginBottom: 10, marginLeft: '5%', marginRight: '5%'}}>
   
    
     <TouchableOpacity 
    style={{width: '50%', height: '100%', 
    backgroundColor: props.Tab.StoreBack,
     justifyContent: 'center', 
     alignItems: 'center', 
    borderBottomLeftRadius:5,borderTopLeftRadius:5 }}
    onPress={() => props.functionTabClick('CAT')}
    >
      <Text style={{color:props.Tab.StoreText }}>
        Store Coupons
      </Text>
    </TouchableOpacity>
    <TouchableOpacity 
    style={{width: '50%', height: '100%', backgroundColor: props.Tab.MyCouponBack,justifyContent: 'center', 
    alignItems: 'center', borderBottomRightRadius:5,borderTopRightRadius:5}}
    onPress={() => props.functionTabClick('')}
    >
      <Text style={{color: props.Tab.MyCouponText}}>
        My Coupons
      </Text>
    </TouchableOpacity> 
  </View>
    )
}


export default Tab;