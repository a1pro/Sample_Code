import React, { } from 'react'
import { View, Text, ScrollView, FlatList, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-navigation'
import Styless from '../Common/Styless'
import Toolbar from '../Common/LoginToolbar';
import Loader from '../Common/Loader';

const RewardsTransaction = (props) => {

  if (props.ShowLoader)
    return (
      <SafeAreaView forceInset={{ bottom: 'never' }} style={Styless.MainContainer}>
        <Toolbar {...props} />
        <Text allowFontScaling={false}
          style={{ color: 'black', alignSelf: 'center', marginBottom: 10, fontSize: 16 }}>
          Transactions updated every 30 minutes
    </Text>
        <ScrollView style={Styless.ScrollContainer}>

          <Loader />
        </ScrollView>

      </SafeAreaView>
    )
  return (
    <SafeAreaView forceInset={{ bottom: 'never' }} style={Styless.MainContainer}>
      <Toolbar {...props} />
      <Text allowFontScaling={false} style={{ color: 'black', alignSelf: 'center', marginBottom: 10, fontSize: 16 }}>
        Transactions updated every 30 minutes
      </Text>
      <View style={Styless.ScrollContainer}>

        <FlatList
          data={props.List}
          renderItem={({ item }) => 
          <View>

           
          <View
            style={LocalStyle.Main_Row} >
            <View
              style={{
                width: '80%', height: '100%', justifyContent: "center",
                alignItems: "center", backgroundColor: 'white'
              }}>
              <Text
                allowFontScaling={false}
                style={{ color: 'black', fontWeight: "bold" }}
              >Transaction No {item.transactionid}</Text>
              <Text
                allowFontScaling={false}
                style={{  marginTop: 3 }}
               >
               {item.transactiontime}</Text>
              <Text
                allowFontScaling={false}
                style={{  marginTop: 3 }}
              >Type: {item.transactiontype}</Text>
            </View>

            <View style={{
              width: '20%', height: '95%', backgroundColor: '#bdbdbd', justifyContent: "center",
              alignItems: "center",marginTop:'1%'
            }}>
              <Text
                allowFontScaling={false}
                style={{ color: '#388e3c', fontWeight: 'bold', fontSize: 16 }}
              >${item.transactionamount}</Text>
            </View>

          </View>
          <View style={{width:'100%', height:2, backgroundColor:'#bdbdbd', marginTop:5}}/>
          </View>

          }
        />
      </View>


    </SafeAreaView>
  )
}


const LocalStyle = StyleSheet.create({

  Main_Row:{
    width: '100%', height: 70, flexDirection: 'row', backgroundColor: 'white' 
  }

})


export default RewardsTransaction
