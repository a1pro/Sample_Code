import React,{} from 'react'
import { View, Text, ScrollView, TouchableOpacity ,Image} from 'react-native'
import DeleteIcon from '../../../image/delete.png'
import { Theme } from '../../config';
const Tab = (props) => {
    return(

   
  <View style={{width: '100%', height: 45, flexDirection: 'row', marginTop: 0, marginBottom: 0, marginLeft: '0%', marginRight: '0%'}}>
   
   
   <TouchableOpacity 
    onPress={() => props.functionClearAll('')}
        style={{width: '33%', height: '100%', backgroundColor: Theme.PRIMARY_COLOR, justifyContent: 'center', 
        alignItems: 'center', borderBottomRightRadius:0,borderTopRightRadius:0}}>
         
          <Text
           allowFontScaling={false}
           style={{color: 'white'}}>
            Clear
          </Text>
        </TouchableOpacity>
    <TouchableOpacity 
    style={{width: '33%', height: '100%', backgroundColor: 'black', justifyContent: 'center', alignItems: 'center', 
    borderBottomLeftRadius:0,borderTopLeftRadius:0,borderLeftWidth:1,borderRightWidth:1  }}
    onPress={() => props.functionOpenMail('')}
   //onPress={() => props.createPDF('')}
    >
      <Text 
       allowFontScaling={false}
       style={{color: 'white'}}>
        Email
      </Text>
    </TouchableOpacity>
    <TouchableOpacity 
    style={{width: '34%', height: '100%', backgroundColor: Theme.PRIMARY_COLOR,justifyContent: 'center', 
    alignItems: 'center', borderBottomRightRadius:0,borderTopRightRadius:0}}
    onPress={() => props.functionShowCreateDialog(true)}
    >
      <Text 
       allowFontScaling={false}
      style={{color: 'white'}}>
        Note
      </Text>
    </TouchableOpacity>

  </View>
    )
}


export default Tab;