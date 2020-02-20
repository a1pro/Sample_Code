import React,{} from 'react'
import { View, Text, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-navigation'
import { Theme } from '../../config'
import Toolbar from '../Common/LoginToolbar'
import Styless from '../Common/Styless'

const TermsAndCondition = (props) => {
  return (
    <SafeAreaView forceInset={{ bottom: 'never'}} style={Styless.MainContainer}>
      <Toolbar {...props}/>
      <ScrollView style={Styless.ScrollContainer}>
        <View style={{width: '90%', height: '100%', marginLeft: '5%', marginRight: '5%', marginTop: 20}}>
          <Text allowFontScaling={false} style={{fontWeight: 'bold'}}>
            Health Care Products Disclaimer
          </Text>
          <Text style={{marginTop: 10}} allowFontScaling={false}>
            All Health Care Products, Medicines and Services offered by KC India Mart are not intendedto diagnose, prevent, treat or cure any disease and replace your own doctor's
            adviceor any other medical recommendation. KC India Mart is not be help responsible in any shape or form for the applicability of any opinions or recommendations
            with respect to your symptoms or medical condition. Products or statements on this web site have not been evaluated by Food and Drug Administration (FDA).
            service marks are the property of their respective
          </Text>
          <Text allowFontScaling={false} style={{fontWeight: 'bold', marginTop: 10}}>
            Applicable Law
          </Text>
          <Text allowFontScaling={false} style={{marginTop: 10}}>
            By use of this site you expressly agree that these terms and conditions shall in all respects by governed by the laws of the State of Kansas and consent to personal
            jurisdiction and venue in the State of Kansas. Any controversy or claim relating to these terms and conditions shall be brought and venued in the Superior
            Court of Kansas or, if federal court jurisdiction is available, in the United States District Court for the District of Kansas.
          </Text>
          <Text allowFontScaling={false} style={{ marginTop: 10, fontWeight: 'bold'}}>
            Termination of Use
          </Text>
          <Text allowFontScaling={false} style={{ marginTop: 10}}>
            You agree that we may, at our sole discretion, suspend or terminate your access to all or part of our website and Resources with or without notice and for any reason,
            including, without limitation, breach of this User Agreement. Any suspected illegal, fraudulent or abusive activity may be grounds for terminating your relationship
            and may be referred to appropriate law enforcement authorities. Upon suspension or termination, your right to use the Resources we provide will immediately
            cease, and we reserve the right to remove or delete any information that you may have on file with us, including any account or login information.
          </Text>
          <Text allowFontScaling={false} style={{ marginTop: 10, fontWeight: 'bold'}}>
            Limitation of Liability
          </Text>
          <Text allowFontScaling={false} style={{ marginTop: 10 , marginBottom:15}}>
            In conjunction with the Limitation of Warranties as explained above, you expressly understand and agree that any claim against us shall be limited to the amount
            you paid, if any, for use of products and/or services. Kcimart.com will not be liable for any direct, indirect, incidental, consequential or exemplary loss
            or damages which may be incurred by you as a result of using our Resources, or as a result of any changes, data loss or corruption, cancellation, loss of
            access, or downtime to the full extent that applicable limitation of liability laws apply. have on file with us, including any account or login information.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>

  )
}

export default TermsAndCondition
