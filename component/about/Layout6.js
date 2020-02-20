import React, {} from 'react'
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import { SafeAreaView } from 'react-navigation'
import Toolbar from '../Common/LoginToolbar'
import Styless from '../Common/Styless'
import { Theme } from '../../config'
import MailIcon from '../../../image/about_mail.png'
import PhoneIcon from '../../../image/about_phn.png'

const Layout6 = (props) => {
  return (
    
        <ScrollView showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false} style={{width: '90%', height: '100%', marginLeft: '5%', marginRight: '5%', }}>
          <Text allowFontScaling={false} style={{fontWeight: 'bold', marginTop: 20, fontSize: 17 }}>
            Welcome to KC India Mart.
          </Text>
          <Text allowFontScaling={false} style={{ marginTop: 10, fontSize: 17}}>
            KC India Mart strives to bring joy and celebration of the taste of motherland right to your neighborhood. We have a wide range of Products like Fresh Produce, Meat,
            Staples, Condiments, Instant Foods, Gourmet Groceries, Pooja Items and Appliances to name a few.
          </Text>
          <Text allowFontScaling={false} style={{ marginTop: 10, fontSize: 17}}>
            We serve a lot of Fresh Snacks, Batters, Bakery Products, Home Style Pickles and Sweets freshly made in our kitchen every day.
          </Text>
          <Text allowFontScaling={false} style={{ marginTop: 10, fontSize: 17}}>
            We carry a wide variety of Gourmet Food and Snacks from Grand Sweets Chennai, Ambika Appalam Depot, Sri Krishna Sweets, Karachi Bakery, Vellanki Foods, Daadus Mithai,
            Pulla Reddy Sweets, Saffola Masala Oats and many more items from India.
          </Text>
          <Text allowFontScaling={false} style={{ marginTop: 10, fontSize: 17}}>
            We carry more than 3000 Products and about 200 Brands procured from India and within USA.
          </Text>
          <Text allowFontScaling={false} style={{ marginTop: 10, fontSize: 17}}>
            We promise to provide you a very professional shopping experience and hassle free flexible return policies.
          </Text>
          <View
          style={{width:'100%', height:25, flexDirection: 'row', marginTop:25}}
          >
          <Image
          style={{width:20, height:20,resizeMode :'contain' }}
          source={PhoneIcon}
          />
          <Text 
          allowFontScaling={false}
          style={{marginLeft:20, fontSize: 17}}>913-681-0808</Text>

          </View>
          <View
          style={{width:'100%', height:25, flexDirection: 'row', marginTop:0}}
          >
          <Image
          style={{width:20, height:20,resizeMode :'contain' }}
          source={MailIcon}
          />
          <Text 
          allowFontScaling={false}
          style={{marginLeft:20, fontSize: 17}}>info@kcimart.com</Text>

          </View>
          <Text allowFontScaling={false} style={{ marginTop: 20,textAlign: 'center', fontSize: 17}}>
            Thanks for visiting us and we hope you have a delightful shopping experience.
          </Text>
          <TouchableOpacity 
          onPress={() => props.functionOpenPage("Condition")}
          style={{ marginTop: 20}}>
            <Text allowFontScaling={false} style={{textAlign: 'center', color: Theme.PRIMARY_COLOR, textDecorationLine: 'underline', fontSize: 17}}>
              Terms & Conditions
            </Text>
          </TouchableOpacity>
          <TouchableOpacity 
          onPress={() => props.functionOpenPage("Privacy")}
          style={{ marginTop: 10, marginBottom:100}}>
            <Text allowFontScaling={false} style={{ textAlign: 'center', color: Theme.PRIMARY_COLOR, textDecorationLine: 'underline', fontSize: 17}}>
              Privacy Policy
            </Text>
          </TouchableOpacity>
        </ScrollView>
    
    
  )
}

export default Layout6
