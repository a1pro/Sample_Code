import React, { } from 'react'
import { View, Dimensions, Text, StyleSheet, ScrollView } from 'react-native'

import Styless from '../../Common/Styless'


import { Theme } from '../../../config'


import Swiper from 'react-native-swiper'
import PieChart from 'react-native-pie-chart'

import SalesTable from './SalesTable';
import DeptTable from './DeptTable';
import Loader from '../../Common/Loader'

var mPayment_Graph_Show= false, mDeptment_GraphShow= false;

const SwiperLayout = (props) => {

  var mScroll = false;
  const mTotalHegiht = Dimensions.get('window').height;

  if (mTotalHegiht < 800) {
    mScroll = true;
  }
  else {
    mScroll = false;
  }

  const mTotalSales = props.FinalData.map((data) => {
    return (
      <Text>{data.TOTALSALES}</Text>
    )
  })

  const mDeptTotalSales = props.DeptmList.map((value) => {
    return (
      <Text>{value.TOTALSALES}</Text>
    )
  })


  var mPaymentList = props.FinalData;

  var mPaymentSeries = [];
  var mPaymentSliceColor = [];

  for (i = 0; i < mPaymentList.length; i++) {
    mPaymentSeries.push(mPaymentList[i].CASH);
    mPaymentSeries.push(mPaymentList[i].CREDIT);
    mPaymentSeries.push(mPaymentList[i].GIFTCARD);
    mPaymentSeries.push(mPaymentList[i].EDT);
    mPaymentSeries.push(mPaymentList[i].ACCOUNT);
    mPaymentSeries.push(mPaymentList[i].ONLINE);
    mPaymentSeries.push(mPaymentList[i].GraphShow)

   
    mPayment_Graph_Show= mPaymentList[i].GraphShow;

    mPaymentSliceColor.push(mPaymentList[i].CASH_COLOR);
    mPaymentSliceColor.push(mPaymentList[i].CREDIT_COLOR);
    mPaymentSliceColor.push(mPaymentList[i].GIFTCARD_COLOR);
    mPaymentSliceColor.push(mPaymentList[i].EDT_COLOR);
    mPaymentSliceColor.push(mPaymentList[i].ACCOUNT_COLOR);
    mPaymentSliceColor.push(mPaymentList[i].ONLINE_COLOR);

  }

  var mDeptList = props.DeptmList;

  var mDepartSeries = [];
  var mDepartSliceColor = [];

  for (i = 0; i < mDeptList.length; i++) {
    mDepartSeries.push(mDeptList[i].CAFE);
    mDepartSeries.push(mDeptList[i].FRESHSNACKS);
    mDepartSeries.push(mDeptList[i].FROZEN);
    mDepartSeries.push(mDeptList[i].GROCERIES);
    mDepartSeries.push(mDeptList[i].MEAT);
    mDepartSeries.push(mDeptList[i].PRODUCE);

    mDeptment_GraphShow= mDeptList[i].GraphShow;

    
    

    mDepartSliceColor.push(mDeptList[i].CASH_COLOR);
    mDepartSliceColor.push(mDeptList[i].CREDIT_COLOR);
    mDepartSliceColor.push(mDeptList[i].GIFTCARD_COLOR);
    mDepartSliceColor.push(mDeptList[i].EDT_COLOR);
    mDepartSliceColor.push(mDeptList[i].ACCOUNT_COLOR);
    mDepartSliceColor.push(mDeptList[i].ONLINE_COLOR);

  }




  return (
    <Swiper
      style={{ backgroundColor: 'white', marginTop: 0 }}
      showsPagination={false}
      autoplay={false}
      loop={false}
      onIndexChanged={(Index) => props.functionChangeIndex(Index)}>

      {props.Loader == true ? <Loader /> :

        <ScrollView style={LocalStyle.Container}
          scrollEnabled={mScroll}
        >
          <Text allowFontScaling={false} style={LocalStyle.TitleLabel}>
            Payment Type Report
          </Text>
          <View style={{ width: '100%', height: undefined, alignItems: 'center', marginTop: 10, marginBottom: 10 }}>


        

            {mPayment_Graph_Show == true ?<PieChart chart_wh={220} series={mPaymentSeries} sliceColor={mPaymentSliceColor} /> : <Text/>}

          </View>
          <Text allowFontScaling={false} style={LocalStyle.TitleLabel}>
            Total Sales
          </Text>
          <Text allowFontScaling={false} style={LocalStyle.TitleLabel}>
            ${mTotalSales}
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
              style={LocalStyle.MainBox}
            >
              <Text
                allowFontScaling={false}
                style={LocalStyle.TitleLabel}
              >Amount</Text>
            </View>
            <View
              style={LocalStyle.MainBox}
            >
              <Text
                allowFontScaling={false}
                style={LocalStyle.TitleLabel}
              >Percent</Text>
            </View>

          </View>
          < SalesTable {...props} />


        </ScrollView>}

      {props.Loader == true ? <Loader /> :
        <ScrollView style={LocalStyle.Container}
          scrollEnabled={mScroll}
        >


          <Text allowFontScaling={false} style={LocalStyle.TitleLabel}>
            Department Sales Report
          </Text>

          <View style={{ width: '100%', height: undefined, alignItems: 'center', marginTop: 10, marginBottom: 10 }}>
            {mDeptment_GraphShow == true ? <PieChart chart_wh={220} series={mDepartSeries} sliceColor={mDepartSliceColor} /> : <Text/>}
          </View>
          <Text allowFontScaling={false} style={LocalStyle.TitleLabel}>
            Total Sales
          </Text>
          <Text allowFontScaling={false} style={LocalStyle.TitleLabel}>
            ${mDeptTotalSales}
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
              >Dept </Text>
            </View>
            <View
              style={LocalStyle.MainBox}
            >
              <Text
                allowFontScaling={false}
                style={LocalStyle.TitleLabel}
              >Amount</Text>
            </View>
            <View
              style={LocalStyle.MainBox}
            >
              <Text
                allowFontScaling={false}
                style={LocalStyle.TitleLabel}
              >Percent</Text>
            </View>

          </View>

          <DeptTable {...props} />

        </ScrollView>}
    </Swiper>

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
    fontSize: 17, alignSelf: 'center', marginTop: 5, fontWeight: 'bold'
  },
  Container: {
    width: '96%', height: '100%', marginLeft: '2%', marginRight: '2%'
  },
  MainBox: {
    width: '25%', height: '100%',
    borderWidth: 0.5,
    borderColor: Theme.PRIMARY_COLOR,
    justifyContent: 'center',
    alignItems: 'center'
  },
  BlankBox: {
    width: '20%', height: '100%',
    borderWidth: 0.5,
    borderColor: Theme.PRIMARY_COLOR,
    justifyContent: 'center',
    alignItems: 'center'
  },
  PmtBox: {
    width: '31%', height: '100%',
    borderWidth: 0.5,
    borderColor: Theme.PRIMARY_COLOR,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default SwiperLayout;