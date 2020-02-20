import React,{} from 'react'
import { View, Text, ScrollView, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-navigation';
import Styless from '../../../Common/Styless';
import Toolbar from '../../../Common/LoginToolbar';

 import EditDetails from './EditDetails';
 import PaymentType from './PaymentType'
import TableView from './TableView';
import PaymentTypePicker from '../../../../picker/PaymentTypePicker';


const CompleteDetails = (props) => {
  return (
    <SafeAreaView forceInset={{ bottom: 'never'}} style={Styless.MainContainer}>
      <Toolbar {...props}/>
      <ScrollView style={Styless.ScrollContainer}>
        <View style={LocalStyle.MainContainer}>

         <EditDetails {...props}/>
        <PaymentType {...props}/>
        <TableView {...props}/>   
      <PaymentTypePicker {...props} />
        </View>
      </ScrollView>
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
    marginTop: 50
  },
  RowContainer: {
    width: '100%', height: 50, flexDirection: 'row'
  },
  Title: {
    width: '35%', height: '100%', color: 'black',fontSize: 16, fontWeight: 'bold', marginTop: 10
  },
  AnswerLabel: {
    width: '65%', height: '100%', color: 'black',fontSize: 15,  marginTop: 10
  }
})

export default CompleteDetails
