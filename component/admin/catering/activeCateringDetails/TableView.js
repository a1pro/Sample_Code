import React, { } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { Theme } from '../../../../config'
import CheckIcon from '../../../../../image/Circle_Check.png'
import UnCheckIcon from '../../../../../image/Circle_Uncheck.png'
import DeleteIcon from '../../../../../image/delete.png'
import { TextInput } from 'react-native-gesture-handler';
import Loader from '../../../Common/Loader';

const TableView = (props) => {


  const mTable = props.Item_List.map((data, index) => {
    
    return (
      <View style={{ width: '100%', height: 40, flexDirection: 'row' }}>
        <TouchableOpacity
          onPress={() => props.functionShowEdit(data.Id, data.Select, data)}
          style={LocalStyle.CheckBoxContainer}>

          <Text
            allowFontScaling={false}
            style={{ color: data.Select == true ? Theme.PRIMARY_COLOR : 'black' }}
          >
            {data.Select == true ? 'DONE' : 'EDIT'}
          </Text>
        </TouchableOpacity>
        <View style={LocalStyle.ItemNameContainer}>
        
      
          {/* {data.Select == false ? <Text
          allowFontScaling={false}>
          {data.itemName}</Text>:
       
         <TextInput
            style={{width:'100%', height:'100%', marginLeft :5}}
            allowFontScaling={false}
            editable={data.Select}
            autoFocus={data.Select}
            selectionColor={Theme.PRIMARY_COLOR}
            placeholder="Item Name"
            underlineColorAndroid='transparent'
            ref={ref => (this.ref = ref)}
            textAlign={'left'}
            multiline={true}
            numberOfLines={4}
            blurOnSubmit={false}
            onChangeText={(text) => props.functionEditItem({text})}
            value={props.mTempEdit}
            
          />}   */}

<TextInput
            style={{width:'100%', height:'100%', marginLeft :5}}
            allowFontScaling={false}
            editable={data.Select}
            autoFocus={data.Select}
            selectionColor={Theme.PRIMARY_COLOR}
            placeholder="Item Name"
            underlineColorAndroid='transparent'
            ref={ref => (this.ref = ref)}
            textAlign={'left'}
            multiline={true}
            numberOfLines={4}
            blurOnSubmit={false}
            onChangeText={(text) => props.functionEditItem({text})}
           
            
          >

{data.itemName}
            </TextInput>

        </View>
        <View style={LocalStyle.QtyContainer}>
          <TextInput
            allowFontScaling={false}
            editable={data.Select}
            autoFocus={data.Select}
            style={LocalStyle.LabelInput}
            selectionColor={Theme.PRIMARY_COLOR}
            textAlign={'center'}
            placeholder="Qty"
            underlineColorAndroid='transparent'
            onChangeText={(text) => props.functionEditQty({text})}
            
          >
            {data.quantity}
          </TextInput>
        </View>
        <View style={{ width: '30%', height: '100%', borderColor: Theme.PRIMARY_COLOR, borderWidth: .5, justifyContent: 'center', alignItems: 'center' }}>
          <TextInput
            allowFontScaling={false}
            editable={data.Select}
            autoFocus={data.Select}
            style={LocalStyle.LabelInput}
            selectionColor={Theme.PRIMARY_COLOR}
            textAlign={'center'}
            placeholder="Note"
            underlineColorAndroid='transparent'
            onChangeText={(text) => props.functionEditNotes({text})}
          >
            {data.notes}
          </TextInput>
        </View>
        <TouchableOpacity
          style={LocalStyle.DeleteContainer}
          onPress={() => props.functionShowDeleteAlert(index)}
        >

          <Image style={{ width: 20, height: 20, resizeMode: 'contain' }} source={DeleteIcon} />

        </TouchableOpacity>
      </View>
    )
  })

  if (props.Show_ItemLoader)
    return (
      <View>
        <Loader />
      </View>
    )

  return (
    <View>
      <View style={{ width: '100%', height: 40, flexDirection: 'row' }}>
        <View style={LocalStyle.CheckBoxContainer}>
          <Text
            allowFontScaling={false}
            style={{ fontSize: 12, color: 'black', fontWeight: 'bold', marginTop: 0 }}>
            Select
          </Text>
        </View>
        <View style={LocalStyle.ItemNameContainer}>
          <Text
            allowFontScaling={false}
            style={{ fontSize: 12, color: 'black', fontWeight: 'bold', marginTop: 0 }}>
            Item Name
          </Text>
        </View>
        <View style={LocalStyle.QtyContainer}>
          <Text
            allowFontScaling={false}
            style={{ fontSize: 12, color: 'black', fontWeight: 'bold', marginTop: 0 }}>
            Qty
          </Text>
        </View>
        <View style={LocalStyle.NotesContainer}>
          <Text
            allowFontScaling={false}
            style={{ fontSize: 14, color: 'black', fontWeight: 'bold', marginTop: 0 }}>
            Note
          </Text>
        </View>
        <View style={LocalStyle.DeleteContainer}>
          <Text style={{ fontSize: 12, color: 'black', fontWeight: 'bold', marginTop: 0 }}>

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
    width: '12%', height: '100%',
    borderColor: Theme.PRIMARY_COLOR, borderWidth: .5, justifyContent: 'center', alignItems: 'center'
  },
  ItemNameContainer: {
    width: '30%', height: '100%', borderColor: Theme.PRIMARY_COLOR, borderWidth: .5, justifyContent: 'center', alignItems: 'center'
  },
  QtyContainer: {
    width: '15%', height: '100%', borderColor: Theme.PRIMARY_COLOR, borderWidth: .5,
    justifyContent: 'center', alignItems: 'center'
  },
  NotesContainer: {
    width: '30%', height: '100%',
    borderColor: Theme.PRIMARY_COLOR, borderWidth: .5, justifyContent: 'center',
    alignItems: 'center'
  },
  DeleteContainer: {
    width: '13%',
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
    color: 'black', fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10
  },
  AnswerLabel: {
    width: '60%', height: '100%', color: 'black', fontSize: 15, marginTop: 10
  },
  Label: {
    color: '#757575', fontSize: 12, marginLeft: 5
  },
  LabelInput: {
    width: '100%', height: '100%', color: '#757575', fontSize: 12, marginLeft: 5,
  },
  CostLabel: {
    color: '#757575', fontSize: 16, marginLeft: 5, marginTop: 0
  },
  MessageLabel: {
    textAlign: 'justify', marginLeft: 5, marginRight: 15, color: '#757575', fontSize: 12
  }
})
export default TableView
