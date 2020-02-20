import React,{} from 'react'
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native'
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


import Loader from '../../Common/Loader';

const Details = (props) => {

  
  const mData= props.List.map((item)=>{
    return(
    <View 
       style={LocalStyle.MainContainer}>
      
          <Text allowFontScaling={false} 
          style={LocalStyle.TitleLabel}>
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
              >
             {item.gcbalance}
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
              >
              {item.avgpurch}
              </Text>
            </View>
          </View>

          <View style={{width: '100%',marginTop: 20 , marginBottom:20}}>
          <Text allowFontScaling={false} 
          style={LocalStyle.InvoiceLabel}>
            Invoices
          </Text>
          <Text allowFontScaling={false} 
           style={LocalStyle.InvoiceLabel}>
            Rewards
          </Text>
        </View>
        </View>)
  })


   if(props.Loader)
   return(
    <SafeAreaView forceInset={{ bottom: 'never'}} style={Styless.MainContainer}>
    <Toolbar {...props}/>
    <View 
    style={Styless.ScrollContainer}>

     <Loader />
    </View>
    </SafeAreaView>
   )


  return (
    <SafeAreaView forceInset={{ bottom: 'never'}} style={Styless.MainContainer}>
      <Toolbar {...props}/>
      <ScrollView 
       showsVerticalScrollIndicator={false}
      style={Styless.ScrollContainer}>
        
        {mData}
        </ScrollView>


     
    </SafeAreaView>
  )
}
const LocalStyle = StyleSheet.create({
  MainContainer:{
    width: '96%', height: '80%', marginLeft: '2%', marginRight: '2%'
  },
  Container: {
    width: '100%', height: '100%'
  },
  ImageContainer:{

  },
  TitleLabel: {
    marginLeft: 5,
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold',
    marginTop: 10
  },
  ValueLabel: {
    fontSize: 16
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
export default Details;
