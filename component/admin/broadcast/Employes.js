import React,{} from 'react'
import { View, Image, StyleSheet, Text, TextInput, ScrollView ,Dimensions} from 'react-native'
import { Theme } from '../../../config'
import { Button } from '../../controls'
import PlaceholderIcon from '../../../../image/Placeholder.jpg'
import { PresignedPost } from 'aws-sdk/clients/s3'

const Employes =(props)=>{
    return(
        <View>
             <View style={LocalStyle.EditTextConatiner}>

             <TextInput
              placeholder='Title'
              placeholderTextColor={Theme.PLACE_HOLDER}
              style={{width: '100%', height: '100%', marginRight: '0%',marginLeft :'0%' , textAlign: 'justify'}}
              allowFontScaling={false}
              autoComplete={false}
              autoCorrect={false} 

              onChangeText={text => props.functionsetEmployeTitle(text)}
              value={props.EmployeTitle}
              />
           
          </View>
          <View style={{width: '100%',  borderColor: '#757575', borderWidth: .5, borderRadius: 5, marginTop: 20,  marginBottom: 0}}>
            <TextInput
            
              placeholder='Message Here'
              placeholderTextColor={Theme.PLACE_HOLDER}
              style={{marginLeft: 5, width: '100%', minHeight: 100, maxHeight:200,textAlignVertical: 'top', marginRight: 5, paddingLeft: 5, paddingRight: 5, textAlign: 'justify'}}
               multiline={true}
              // numberOfLines={10}
              allowFontScaling={false}
              autoComplete={false}
              autoCorrect={false}
              onChangeText={text => props.functionsetEmployeMessage(text)}
              value={props.EmployeMeg}
              
              />
          </View>
          <View style={{width: 200, height: 200, borderColor: '#757575', borderWidth: .5, borderRadius: 5, marginTop: 20,  marginBottom: 10, alignSelf: 'center', justifyContent: 'center', alignItems: 'center'}}>
            <Image style={{width: 200, height: 200, resizeMode: 'contain'}} source={PlaceholderIcon} />
          </View>

          <View
          style={{width:'100%', marginBottom:20}}
          >
          <Button
          click={()=>props.functionsetEmployeSubmit('')}
          >
            Broadcast
          </Button>
          </View>
          
        </View>
    )
}
const LocalStyle = StyleSheet.create({
    Container: {
      width: '90%', height: '90%', marginLeft: '5%', marginRight: '5%'
    },
    EditTextConatiner: {
      width: '100%',
      height: 45,
      paddingLeft: 15,
      borderRadius: 4,
      borderBottomWidth: 0.5,
      borderWidth: 0.5,
      borderColor: '#757575',
      justifyContent: 'center',
      alignItems: 'flex-start',
      marginTop: 20
    }
  })
export default Employes ;