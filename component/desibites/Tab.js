import React,{} from 'react'
import { View, Text, ScrollView, TouchableOpacity ,Image} from 'react-native'
import DeleteIcon from '../../../image/delete.png'
import { Theme } from '../../config';
const Tab = (props) => {
    return(

   
  <View style={{width: '100%', height: 45, flexDirection: 'row', marginTop: 10, marginBottom: 10, marginLeft: '0%', marginRight: '0%'}}>
   
   
   <TouchableOpacity 
    onPress={() => props.functionTabClick('APPT')}
        style={{width: '33%', height: '100%', backgroundColor: props.Tab.Appetize, justifyContent: 'center', 
        alignItems: 'center', borderBottomRightRadius:0,borderTopRightRadius:0}}>
         
          <Text
           allowFontScaling={false}
           style={{color: 'white'}}>
           Appetizers
          </Text>
        </TouchableOpacity>
    <TouchableOpacity 
    style={{width: '33%', height: '100%', backgroundColor:props.Tab.LunchBack, justifyContent: 'center', alignItems: 'center', 
    borderBottomLeftRadius:0,borderTopLeftRadius:0,borderLeftWidth:1,borderRightWidth:1 , borderColor: 'white', }}
    onPress={() => props.functionTabClick('LUNCH')}
    >
      <Text 
       allowFontScaling={false}
       style={{color: 'white'}}>
       Lunch
      </Text>
    </TouchableOpacity>
    <TouchableOpacity 
    style={{width: '34%', height: '100%', backgroundColor: props.Tab.DinnerBack,justifyContent: 'center', 
    alignItems: 'center', borderBottomRightRadius:0,borderTopRightRadius:0}}
    onPress={() => props.functionTabClick('NOTE')}
    >
      <Text 
       allowFontScaling={false}
      style={{color: 'white'}}>
       Dinner
      </Text>
    </TouchableOpacity>

  </View>
    )
}


export default Tab;