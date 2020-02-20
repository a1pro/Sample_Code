import React, {} from 'react'
import { View, Text , ScrollView, StyleSheet, TouchableOpacity} from 'react-native'
import { SafeAreaView } from 'react-navigation'
import {Theme} from '../../../../config';
import Toolbar from '../../../Common/LoginToolbar'

import Styless from '../../../Common/Styless';
import EditDetails from './EditDetails';
import PaymentType from './PaymentType';
import AddItem from './AddItem';

import Loader from '../../../Common/Loader';
import PaymentTypePicker from '../../../../picker/PaymentTypePicker';

const CreateCatering = (props) => {

  if(props.Show_Loader)
  return (
    <SafeAreaView forceInset={{ bottom: 'never'}} style={Styless.MainContainer}>
    <Toolbar {...props}/>
    <View style={{width: '100%', height: '100%', flex: 1, backgroundColor: 'white'}}>
      <View style={{width: '100%', flex: .9}}>
        <ScrollView 
        showsVerticalScrollIndicator={false} 
        style={LocalStyle.MainContainer}>
          
          <Loader />

        </ScrollView>
      </View>
    </View>
  </SafeAreaView>
  )
  
  return (
    <SafeAreaView forceInset={{ bottom: 'never'}} style={Styless.MainContainer}>
    <Toolbar {...props}/>
    <View style={{width: '100%', height: '100%', flex: 1, backgroundColor: 'white'}}>
      <View style={{width: '100%', flex: .9}}>
        <ScrollView showsVerticalScrollIndicator={false} style={LocalStyle.MainContainer}>
          
            <EditDetails {...props} />
            <PaymentType {...props}/> 
            <AddItem {...props}/>
           <PaymentTypePicker {...props} />
        </ScrollView>
      </View>
      <View style={{width: '100%', flex: .1, backgroundColor: 'white'}}>
         <TouchableOpacity 
        onPress={()=>props.functionValidation()}
        style={LocalStyle.UpDateContainer}>
          <Text allowFontScaling={false} style={{fontWeight: 'bold', color: 'black'}}>
            CREATE CATERING
          </Text>
        </TouchableOpacity> 


      </View>
    </View>
  </SafeAreaView>
  )
}
const LocalStyle = StyleSheet.create({
  MainContainer: {
    width: '96%',
    height: '100%',
    marginLeft: '2%',
    marginRight: '2%',
    backgroundColor: 'white',
    marginTop: 20
  },
  MainRow:{
    width: '100%', height: 35, flexDirection: 'row'
  },
  UpDateContainer: {
    width: '50%', height: 45, alignSelf: 'center', backgroundColor: Theme.PRIMARY_COLOR, marginTop: 10, justifyContent: 'center', alignItems: 'center'
  },
  RowContainer: {
    width: '100%',
    height: 50,
    flexDirection: 'row'
  },
  SecondRowContainer:{
    width: '100%', height: 35, flexDirection: 'row',marginTop:10
  },
  ChildRowContainer:{

  },
  DeliverLabel: {
    color: '#757575',fontSize: 14, marginLeft: 5,
    marginTop: 3
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
  CostLabel: {
    color: '#757575',fontSize: 16, marginLeft: 5, marginTop: 0
  },
  MessageLabel: {
    textAlign: 'justify', marginLeft: 5, marginRight: 0, color: '#757575',fontSize: 12
  }
})

export default CreateCatering
