import React, {} from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { Theme } from '../../../../config'

const AddItem = (props) => {
  return (
    <View>
      <View style={{ width: '100%', height: 1, backgroundColor: Theme.PRIMARY_COLOR }} />
      <Text style={{ fontSize: 14, color: 'black', fontWeight: 'bold', marginTop: 5, alignSelf: 'center' }}>
        Catering Items
      </Text>
      <View style={{ width: '100%', height: 50, flexDirection: 'row', marginTop: 10 }}>
        <View style={{ width: '45%', height: '100%', marginRight: 5 }}>
          <Text allowFontScaling={false} style={{ marginTop: 0, fontSize: 14, color: 'black', fontWeight: 'bold' }}>
            Item Name
          </Text>
          <TextInput
            allowFontScaling={false}
            style={{ width: '100%', height: 40, borderColor: 'black', borderWidth: .5, paddingLeft: 2, paddingRight: 2 }}
            value={props.ItemName}
            autoCorrect={false}
            autoFocus={false}
            blurOnSubmit={false}
            multiline={false}
            onChangeText={(text) => props.functionSetItemName({ text })}
          />
        </View>
        <View style={{ width: '45%', height: '100%', marginLeft: '5%' }}>
          <Text allowFontScaling={false} style={{ marginTop: 0, fontSize: 14, color: 'black', fontWeight: 'bold' }}>
            Qty
          </Text>
          <TextInput
            allowFontScaling={false}
            style={{ width: '100%', height: 40, borderColor: 'black', borderWidth: .5, paddingLeft: 2, paddingRight: 2 }}
            value={props.ItemQty}
            autoCorrect={false}
            autoFocus={false}
            blurOnSubmit={false}
            multiline={false}
            onChangeText={(text) => props.functionSetItemquantity({ text })}

          />
        </View>
      </View>
      <View style={{ width: '100%', height: 50, flexDirection: 'row', marginTop: 10 }}>
        <View style={{ width: '50%', height: '100%', }}>
          <Text allowFontScaling={false} style={{ marginTop: 0, fontSize: 14, color: 'black', fontWeight: 'bold' }}>
            Notes
          </Text>

          <TextInput
            allowFontScaling={false}
            style={{ width: '100%', height: 40, borderColor: 'black', borderWidth: .5, paddingLeft: 2, paddingRight: 0 }}
            value={props.ItemNotes}
            autoCorrect={false}
            autoFocus={false}
            blurOnSubmit={false}
            multiline={false}
            onChangeText={(text) => props.functionSetItemNotes({ text })}


          />
        </View>
        <View style={{ width: '50%', height: '100%', marginLeft: 5, marginTop: 15 }}>

          <TouchableOpacity
            onPress={() => props.functionAddItem('')}
            style={{
              width: '70%', height: 40, justifyContent: 'center', alignSelf: 'center', marginTop: 0,
              alignItems: 'center', backgroundColor: Theme.PRIMARY_COLOR
            }}
          >
            <Text
              allowFontScaling={false}
              style={{ fontWeight: 'bold',color: 'black',fontSize: 14}}
            >ADD ITEM</Text>

          </TouchableOpacity>
        </View>
      </View>
      <View style={{ width: '100%', height: 1, marginBottom: 10, marginTop: 20, backgroundColor: Theme.PRIMARY_COLOR }} />
      
     

    </View>
  )
}
const LocalStyle = {
  Main_Row: {
    width: '100%',
    height: 40,
    flexDirection: 'row'
  },
  Child_Row:{
    width:'33%',
    height:'100%',
    borderWidth:.5,
    justifyContent:'center',
    alignItems:'center',
    borderColor:Theme.PRIMARY_COLOR

  }
}
export default AddItem
