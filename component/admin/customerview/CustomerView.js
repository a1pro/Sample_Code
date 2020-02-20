import React,{} from 'react'
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image , ScrollView} from 'react-native'
import { SafeAreaView } from 'react-navigation'

import Styless from '../../Common/Styless'
import Toolbar from '../../Common/LoginToolbar'
import Search from './Search'
import UserIcon from '../../../../image/coloruser.png'
import PhoneIcon from '../../../../image/phone.png';
import EmailIcon from '../../../../image/email.png';
import LocationIcon from '../../../../image/loc_ic.png';
import ValueIcon from '../../../../image/value.png';
import GiftIcon from '../../../../image/gift.png';
import GiftBalanceIcon from '../../../../image/giftBalance.png';
import BonusIcon from '../../../../image/Bpoints.png';
import PurchaseIcon from '../../../../image/avgpurchase.png';
import NotificationIcon from '../../../../image/color_notification.png';

import Loader from '../../Common/Loader';

const CustomerView = (props) => {

  const mData= props.Detail_List.map((item)=>{
    return(
    <View 
       style={{width:'96%', height:'100%', marginLeft:'2%', marginRight:'2%'}}>
       
          <Text allowFontScaling={false} 
          style={{...LocalStyle.TitleLabel, marginTop :20}}>
            Customer Name
          </Text>
          <View style={LocalStyle.MainRowContainer}>
            <View style={LocalStyle.ImageContainer}>
              <Image style={{width: 20, height: 20, resizeMode: 'contain'}} source={UserIcon} />
            </View>
            <View style={LocalStyle.ValueContainer}>
              <Text 
              
              allowFontScaling={false} 
              style={LocalStyle.ValueLabel}>
                {item.firstname+" "+item.lastname}
              </Text>
            </View>
          </View>
          <Text allowFontScaling={false} 
          style={LocalStyle.TitleLabel}>
            Phone
          </Text>
          <View style={LocalStyle.MainRowContainer}>
            <View style={LocalStyle.ImageContainer}>
              <Image style={{width: 20, height: 20, resizeMode: 'contain'}} source={PhoneIcon} />
            </View>
            <View style={LocalStyle.ValueContainer}>
              <Text
               allowFontScaling={false} 
               style={{ fontSize: 17 }}
              >
                {item.phone}
              </Text>
            </View>
          </View>

          <Text allowFontScaling={false} style={LocalStyle.TitleLabel}>
            Email
          </Text>

          <View style={LocalStyle.MainRowContainer}>
            <View style={LocalStyle.ImageContainer}>
              <Image style={{width: 20, height: 20, resizeMode: 'contain'}} source={EmailIcon} />
            </View>
            <View style={LocalStyle.ValueContainer}>
              <Text
               allowFontScaling={false} 
               style={{ fontSize: 17 }}
              >
              
               {item.email}
              </Text>
            </View>
          </View>
          <Text allowFontScaling={false} style={LocalStyle.TitleLabel}>
          Region
          </Text>
          <View style={LocalStyle.MainRowContainer}>
            <View style={LocalStyle.ImageContainer}>
              <Image style={{width: 20, height: 20, resizeMode: 'contain'}} source={LocationIcon} />
            </View>
            <View style={LocalStyle.ValueContainer}>
              <Text
               allowFontScaling={false} 
               style={{ fontSize: 17 }}
              >
            {item.region}
              </Text>
            </View>
          </View>


          <Text allowFontScaling={false} style={LocalStyle.TitleLabel}>
          Value
          </Text>
          <View style={LocalStyle.MainRowContainer}>
            <View style={LocalStyle.ImageContainer}>
              <Image style={{width: 20, height: 20, resizeMode: 'contain'}} source={ValueIcon} />
            </View>
            <View style={LocalStyle.ValueContainer}>
              <Text
               allowFontScaling={false} 
               style={{ fontSize: 17 }}
              >
              {item.value}
              </Text>
            </View>
          </View>


          <Text allowFontScaling={false} style={LocalStyle.TitleLabel}>
          Gift Card No
          </Text>
          <View style={LocalStyle.MainRowContainer}>
            <View style={LocalStyle.ImageContainer}>
              <Image style={{width: 20, height: 20, resizeMode: 'contain'}} source={GiftIcon} />
            </View>
            <View style={LocalStyle.ValueContainer}>
              <Text
               allowFontScaling={false} 
               style={{ fontSize: 17 }}
              >
             {item.gcnum}
              </Text>
            </View>
          </View>

          <Text allowFontScaling={false} style={LocalStyle.TitleLabel}>
          Gift Balance
          </Text>
          <View style={LocalStyle.MainRowContainer}>
            <View style={LocalStyle.ImageContainer}>
              <Image style={{width: 20, height: 20, resizeMode: 'contain'}} source={GiftBalanceIcon} />
            </View>
            <View style={LocalStyle.ValueContainer}>
              <Text
               allowFontScaling={false} 
               style={{ fontSize: 17 }}
              >
            $ { item.gcbalance}
              </Text>
            </View>
          </View>

          <Text allowFontScaling={false} style={LocalStyle.TitleLabel}>
          Bonus Points
          </Text>
          <View style={LocalStyle.MainRowContainer}>
            <View style={LocalStyle.ImageContainer}>
              <Image style={{width: 20, height: 20, resizeMode: 'contain'}} source={BonusIcon} />
            </View>
            <View style={LocalStyle.ValueContainer}>
              <Text
               allowFontScaling={false} 
               style={{ fontSize: 17 }}
              >
             {item.bonuspoints}
              </Text>
            </View>
          </View>

          <Text allowFontScaling={false} style={LocalStyle.TitleLabel}>
          Average Purchase
          </Text>
          <View style={LocalStyle.MainRowContainer}>
            <View style={LocalStyle.ImageContainer}>
              <Image style={{width: 20, height: 20, resizeMode: 'contain'}} source={PurchaseIcon} />
            </View>
            <View style={LocalStyle.ValueContainer}>
              <Text
               allowFontScaling={false} 
               style={{ fontSize: 17 }}
              >
              $ {item.avgpurch}
              </Text>
            </View>
          </View>

          <View style={{width: '100%',marginTop: 14 , marginBottom:40, flexDirection: 'row', alignContent: 'flex-start', justifyContent: 'flex-start'}}>
          <TouchableOpacity
            onPress={()=>props.functionOpenPage('MyPurchase', item.phone)}
            style={{ width: '50%' }}
          >
          <Text allowFontScaling={false} 
          style={LocalStyle.InvoiceLabel}>
            Invoices
          </Text>
          </TouchableOpacity>
          
          <TouchableOpacity
            onPress={()=>props.functionOpenPage('MyRewardsTransaction', item.gcnum)}
            style={{ width: '50%' }}
          >
          <Text allowFontScaling={false} 
           style={LocalStyle.InvoiceLabel}>
            Rewards
          </Text>
          </TouchableOpacity>
          
        </View>
        </View>)
  })
   
  if(props.Loader)
  return (
    <SafeAreaView forceInset={{ bottom: 'never'}} style={Styless.MainContainer}>
    <Toolbar {...props}/>
    <Search {...props}/>
     <View
     style={LocalStyle.MainContainer}
     >
     <Loader />

    
     
     </View>


   
  </SafeAreaView>
  )
  if(props.Detail_List.length >0)
  return(
    <SafeAreaView forceInset={{ bottom: 'never'}} style={Styless.MainContainer}>
    <Toolbar {...props}/>
    <Search {...props}/>
     <ScrollView
     style={LocalStyle.MainContainer}
     >
    
    
     {mData}
     </ScrollView>
     
  </SafeAreaView>
  )

  
  return (
    <SafeAreaView forceInset={{ bottom: 'never'}} style={Styless.MainContainer}>
      <Toolbar {...props}/>
      <Search {...props}/>
       <View
       style={LocalStyle.MainContainer}
       >

    

       <FlatList 
        data={props.List}
        renderItem={({item}) => 
        <View>
          <TouchableOpacity
           onPress={() => props.functionOpenDetail(item.userid )}
          style={LocalStyle.Container}
          >
          <Text
          allowFontScaling={false} 
          style={LocalStyle.TitleLabel}
          >{item.firstname +" "+item.lastname}</Text>
            </TouchableOpacity>

            <View style={Styless.Line}/>
          </View>
       }
       />

       </View>


     
    </SafeAreaView>
  )
}
const LocalStyle = StyleSheet.create({
  Container:{
    width:'100%', height:50, justifyContent : 'center', alignItems :'flex-start'
  },
  MainContainer: {
    width: '100%',
     height: '100%',
    backgroundColor : 'white',
  },
 
  TitleLabel: {
    marginLeft: 10,
    marginRight:5,
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold',
    marginTop:5,
   
  },
  ValueLabel: {
    fontSize: 17
  },
 
  MainRowContainer: {
    width: '100%',
    height: 40,
    flexDirection: 'row',
    borderWidth: 0.5,
    borderRadius: 6,
  },
  ImageContainer: {
    width: '15%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  ValueContainer: {
    width: '85%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'flex-start'

  },
  InvoiceLabel:{
    fontSize: 20, color: 'black', fontWeight: 'bold',textDecorationLine: 'underline',alignSelf: 'center',
    marginTop: 20 
  },
})
export default CustomerView
