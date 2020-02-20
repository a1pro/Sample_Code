import React, {} from 'react'
import { View, Text, StyleSheet, Image , TouchableOpacity} from 'react-native';
import {Theme} from '../../../../config';

import { TextInput } from 'react-native-gesture-handler';
const TableView = (props) => {

 
  

  const mTable = props.Item_List.map((data) => {
    return (
      <View style={{width: '100%', height: 40, flexDirection: 'row'}}>
       
        <View style={LocalStyle.ItemNameContainer}>
          <TextInput 
          editable={data.Select} 
          autoFocus = {data.Select}
          selectionColor={Theme.PRIMARY_COLOR}
          style={LocalStyle.LabelInput}
          textAlign={'center'} 
          placeholder="Item Name" 
          underlineColorAndroid='transparent'
          ref={ref => (this.ref = ref)}
          >
            {data.itemName}
          </TextInput>
        </View>
        <View style={LocalStyle.QtyContainer}>
          <TextInput 
           editable={data.Select} 
           autoFocus = {data.Select}
          style={LocalStyle.LabelInput}
          selectionColor={Theme.PRIMARY_COLOR}
          textAlign={'center'} 
          placeholder="Qty" 
          underlineColorAndroid='transparent'
          >
            {data.quantity}
          </TextInput>
        </View>
        <View style={{width: '33%', height: '100%', borderColor: Theme.PRIMARY_COLOR, borderWidth: .5,justifyContent: 'center', alignItems: 'center'}}>
          <TextInput 
           editable={data.Select} 
           autoFocus = {data.Select}
          style={LocalStyle.LabelInput}
          selectionColor={Theme.PRIMARY_COLOR}
          textAlign={'center'} 
          placeholder="Notes" 
          underlineColorAndroid='transparent'
         
          >
            {data.notes}
          </TextInput>
        </View>
       
      </View>
    )
  })

  return (
    <View>
      <View style={{width: '100%', height: 40, flexDirection: 'row'}}>
       
        <View style={LocalStyle.ItemNameContainer}>
          <Text style={{fontSize: 12, color: 'black', fontWeight: 'bold', marginTop: 0}}>
            Item Name
          </Text>
        </View>
        <View style={LocalStyle.QtyContainer}>
          <Text style={{fontSize: 12, color: 'black', fontWeight: 'bold', marginTop: 0}}>
            Qty
          </Text>
        </View>
        <View style={LocalStyle.NotesContainer}>
          <Text style={{fontSize: 14, color: 'black', fontWeight: 'bold', marginTop: 0}}>
            Note
          </Text>
        </View>
       
      </View>
     {mTable}
    </View>
  )
}
const LocalStyle = StyleSheet.create({
  MainContainer: {
    width: '90%',
    height: '100%',
    marginLeft: '5%',
    marginRight: '5%',
    backgroundColor: 'white',
    marginTop: 50
  },
  CheckBoxContainer: {
    width: '15%', height: '100%',
    borderColor: Theme.PRIMARY_COLOR, borderWidth: .5, justifyContent: 'center', alignItems: 'center'
  },
  ItemNameContainer: {
    width: '33%', height: '100%', borderColor: Theme.PRIMARY_COLOR, borderWidth: .5, justifyContent: 'center', alignItems: 'center'
  },
  QtyContainer: {
    width: '33%', height: '100%', borderColor: Theme.PRIMARY_COLOR, borderWidth: .5,
    justifyContent: 'center', alignItems: 'center'
  },
  NotesContainer: {
    width: '33%', height: '100%',
    borderColor: Theme.PRIMARY_COLOR, borderWidth: .5,justifyContent: 'center',
    alignItems: 'center'
  },
  DeleteContainer: {
    width: '14%',
    height: '100%',
    borderColor: Theme.PRIMARY_COLOR,
    borderWidth: .5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  RowContainer: {
    width: '100%',
    height: 50,
    flexDirection: 'row'
  },
  Title: {
    width: '40%',
    height: '100%',
    color: 'black',fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10
  },
  AnswerLabel: {
    width: '60%', height: '100%', color: 'black',fontSize: 15,  marginTop: 10
  },
  Label: {
    color: '#757575',fontSize: 12, marginLeft: 5
  },
  LabelInput:{
    width:'100%', height:'100%',color: '#757575',fontSize: 12, marginLeft: 5, 
  },
  CostLabel: {
    color: '#757575',fontSize: 16, marginLeft: 5, marginTop: 0
  },
  MessageLabel: {
    textAlign: 'justify', marginLeft: 5, marginRight: 15, color: '#757575',fontSize: 12
  }
})
export default TableView
