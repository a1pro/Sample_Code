import React, { } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import PieChart from 'react-native-pie-chart';
import { Theme } from '../../../config';
import SummaryTable from './SummaryTable';
import Loader from '../../Common/Loader';


const mHegiht = Dimensions.get('window').height;
var mLabelSize = 0;
if (mHegiht > 800) {
  mLabelSize = 17
}
else {
  mLabelSize = 15

}

var CateringCount=0, CateringSales=0,mGraphShow= false;


const CateringSummary = (props) => {

 


CateringCount = props.List.map((value)=>{
 
  CateringSales = value.CateringSales;
  mGraphShow = value.GraphShow;
  return value.CateringCount;
})

var mTemp_List = props.List;

var mSeries = [];
var mSliceColor = [];

for (i = 0; i < mTemp_List.length; i++) 
{
  mSeries.push(mTemp_List[i].Cash);
  mSeries.push(mTemp_List[i].Credit);
  mSeries.push(mTemp_List[i].Check);
  mSeries.push(mTemp_List[i].Unpaid);

  mSliceColor.push(mTemp_List[i].CASH_COLOR);
  mSliceColor.push(mTemp_List[i].CREDIT_COLOR);
  mSliceColor.push(mTemp_List[i].CHECK_COLOR);
  mSliceColor.push(mTemp_List[i].UNPAID_COLOR);
 

}


  if(props.Show_SummaryLoader)
  return(
    <View>
      <Loader />

      </View>
  )
  return (
    <View>
      <View style={{ width: '100%', height: undefined, alignItems: 'center', marginTop: 10, marginBottom: 10 }}>
          {mGraphShow == true ? <PieChart chart_wh={220} series={mSeries} sliceColor={mSliceColor} />  : <Text />} 
      </View>

      <Text allowFontScaling={false} style={LocalStyle.TitleLabel}>
        Number of Caterings - {CateringCount}
          </Text>
      <Text allowFontScaling={false} style={LocalStyle.TitleLabel}>
        Catering Sales -${CateringSales}
          </Text>
      <View
        style={{ width: '100%', height: 30, flexDirection: 'row', marginTop: 15 }}
      >
        <View
          style={LocalStyle.BlankBox}
        >

        </View>
        <View
          style={LocalStyle.PmtBox}
        >
          <Text
            allowFontScaling={false}
            style={LocalStyle.TitleLabel}
          >Pmt Type</Text>
        </View>
        <View
          style={LocalStyle.AmountContainer}
        >
          <Text
            allowFontScaling={false}
            style={LocalStyle.TitleLabel}
          >Amount</Text>
        </View>
        <View
          style={LocalStyle.PercentBox}
        >
          <Text
            allowFontScaling={false}
            style={LocalStyle.TitleLabel}
          >Percent</Text>
        </View>

      </View>
     <SummaryTable {...props}/>


      <View
        style={{ marginBottom: 10 }}
      />
    </View>
  )
}
const LocalStyle = StyleSheet.create({
  circle: {
    width: 20,
    height: 20,
    borderRadius: 20 / 2,
    backgroundColor: 'red'
  },
  TitleLabel: {
    fontSize: mLabelSize, alignSelf: 'center', marginTop: 5, fontWeight: 'bold'
  },
  Container: {
    width: '90%', height: '100%', marginLeft: '5%', marginRight: '5%'
  },
  MainBox: {
    width: '25%', height: '100%',
    borderWidth: 0.5,
    borderColor: Theme.PRIMARY_COLOR,
    justifyContent: 'center',
    alignItems: 'center'
  },
  BlankBox: {
    width: '20%',
    height: '100%',
    borderWidth: 0.5,
    borderColor: Theme.PRIMARY_COLOR,
    justifyContent: 'center',
    alignItems: 'center'
  },
  PmtBox: {
    width: '35%',
    height: '100%',
    borderWidth: 0.5,
    borderColor: Theme.PRIMARY_COLOR,
    justifyContent: 'center',
    alignItems: 'center'
  },
  PercentBox: {
    width: '20%', height: '100%',
    borderWidth: 0.5,
    borderColor: Theme.PRIMARY_COLOR,
    justifyContent: 'center',
    alignItems: 'center'
  },
  AmountContainer: {
    width: '24%', height: '100%',
    borderWidth: 0.5,
    borderColor: Theme.PRIMARY_COLOR,
    justifyContent: 'center',
    alignItems: 'center'
  }

})

export default CateringSummary;