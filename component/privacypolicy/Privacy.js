import React,{} from 'react'
import { View, Text, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-navigation'
import { Theme } from '../../config'
import Toolbar from '../Common/LoginToolbar'
import Styless from '../Common/Styless'

const Privacy = (props) => {
  return (
    <SafeAreaView forceInset={{ bottom: 'never'}} style={Styless.MainContainer}>
      <Toolbar {...props}/>
      <ScrollView style={Styless.ScrollContainer}>
        <View style={{width: '90%', height: '100%', marginLeft: '5%', marginRight: '5%', marginTop: 20}}>
          <Text allowFontScaling={false} style={{fontWeight: 'bold'}}>
            The copyright
          </Text>
          <Text style={{marginTop: 10}} allowFontScaling={false}>
            The copyright in the material contained in this website belongs to KC India Mart. All rights reserved. Except solely for your own personal andnon-commercial use,
            no part of this website may be copied adapted without the prior written permission of KC India Mart. All photographs,logos and designs used in this website
            are copyright KC India Mart. All graphics and logos are trademarks service marks of KC India Mart and is protected under US and international copyright laws.
            All other trademarks,service marks are the property of their respective owners.
          </Text>
          <Text allowFontScaling={false} style={{fontWeight: 'bold', marginTop: 10}}>
            Acknowledgements
          </Text>
          <Text allowFontScaling={false} style={{marginTop: 10}}>
            We thank a lot of external websites and content providers who provided the source for our Movie Reviews, Movie Trailers and Movie Images and Pictures. We sincerely
            thank IndiaGlitz, IdleBrain, BharatStudent, PopcornIndia, TeluguOne, Raagalahari, Idlebrain, YouTube, NDTV, Indian Express, Hindu and many other websites
            and provides for their content.
          </Text>
          <Text allowFontScaling={false} style={{ marginTop: 10, fontWeight: 'bold'}}>
            Disclaimers
          </Text>
          <Text allowFontScaling={false} style={{ marginTop: 10}}>
            KC India Mart assumes no responsibility for the contents of any other website to which this website has links. Links in this website are for the purpose of convenience.
            KC India Mart is not responsible for the contents and reliability of the linked websites. To the extent permitted by law KC India Mart shall not be liable
            to any person for any loss or damage which may arise from the use of any of the information contained in this website. While we have taken every effort to
            ensure that the information contained within this website is correct, the same should not be constructed as a statement of law or used for any legal purposes.
            IndianGrocery.com/KC India Mart accepts no responsibility for the accuracy and completeness of the contents and you should be aware that the information
            may be incomplete, inaccurate or may have become out of date..
          </Text>
          <Text allowFontScaling={false} style={{ marginTop: 10, fontWeight: 'bold'}}>
            Severability
          </Text>
          <Text allowFontScaling={false} style={{ marginTop: 10,  marginBottom: 15}}>
            The provisions of this Agreement shall be severable, and if any provision of this Agreement is held to be invalid or unenforceable, it shall be construed to have
            the broadest interpretation which would render it valid and enforceablebe constructed as a statement of law or used for any legal purposes. IndianGrocery.com/KC
            India Mart accepts no responsibility for the accuracy and completeness of the contents and you should be aware that the information may be incomplete, inaccurate
            or may have become out of date..
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Privacy
