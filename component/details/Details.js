import React,{} from 'react'
import { View, Text, ScrollView, Dimensions, ImageBackground,  TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native'
import { SafeAreaView } from 'react-navigation'
import {Image} from 'react-native-elements'
import NetworkApi from '../../network/NetworkApi'
import Styless from '../Common/Styless'
import {Theme} from '../../config'
import Loader from '../Common/Loader'
import LocIcon from '../../../image/loc_ic.png'
import Toolbar from '../Common/LoginToolbar'
import CreateListPicker from '../../picker/CreateListPicker'
import Description from './Description'
import QrLayout from './QrLayout'
import Header from './Header'
import PrintLayout from './PrintLayout'
import ImageViewer from 'react-native-image-zoom-viewer'
import ModalDropdown from 'react-native-modal-dropdown'

const mTotalHegiht = Dimensions.get('window').height
const mTotalWidth = Dimensions.get('window').width

var mTitleFont = 16
var mNormalFont = 14
if (mTotalHegiht > 890) {
  mTitleFont = 18
  mNormalFont = 17
}else {
  mTitleFont = 16
  mNormalFont = 15
}

const Details = (props) => {
  if(props.AddLoader)
  return (
    <SafeAreaView forceInset={{ bottom: 'never'}} style={Styless.MainContainer}>
    
    <Toolbar {...props}/>

    <ScrollView style={LocalStyle.MainContainer}>
    <Loader />
    </ScrollView>
    </SafeAreaView>
  )
  
  return (
    <SafeAreaView forceInset={{ bottom: 'never'}} style={Styless.MainContainer}>
    
    <Toolbar {...props}/>
    <CreateListPicker {...props}/>
    { props.startLoader ? <Loader /> :
      <ScrollView style={LocalStyle.MainContainer}>
      <Text allowFontScaling={false} style={LocalStyle.TitleLabel}>
      {props.ProductName}
      </Text>
      <View style={LocalStyle.SliderContainer}>
      <ImageViewer 
      backgroundColor='#fff'
      style = {{width:mTotalWidth-50, height:'100%', resizeMode:'contain', backgroundColor: '#fff'}}
      imageUrls={[ { url :NetworkApi.IAMGE_BASE_URL+ props.ImageUrl }]}
      PlaceholderContent={<ActivityIndicator />}
      />

      </View>
      <View style={{width: '100%', height: 65, flexDirection: 'row', backgroundColor: '#e0e0e0' }}>
        <View style={{width: '40%', height: '100%',  alignItems: 'center',justifyContent: 'center', flexDirection: 'row'}}>
          <View 
          style={{backgroundColor: Theme.PRIMARY_COLOR, 
           borderRadius: 5, width: undefined, height: undefined,
            justifyContent: 'center', alignItems: 'center', marginLeft: 0 }}>
            <Text 
            style={LocalStyle.CountLabel}
            allowFontScaling={false}>
            { props.USERROLE !='Customer' ? props.EmpStock : props.Stock }
            </Text>
          </View>
          <Text allowFontScaling={false} style={{marginLeft: 10, fontSize: 20}}>
            In Stock
          </Text>
        </View>
        <TouchableOpacity 
          onPress={() => props.functionOpenPage('MapContainer', props.Location)}
          style={{width: '55%', height: '100%',  justifyContent: 'center', alignItems: 'flex-end', marginRight: 5}}
        >
          <View style={{width: undefined, height: undefined, flexDirection: 'row', marginLeft: 0, marginTop: 0}}>
            <Image style={{width: 35, height: 35, resizeMode: 'contain', marginTop: 0}} source={LocIcon} />
            <Text allowFontScaling={false} style={{color: 'black', fontWeight: 'bold', marginTop: 7}}>
            {props.Location}
            </Text>
          </View>
          <Text allowFontScaling={false} style={{marginLeft: 2}}>
            Tap to Locate on Store Map
          </Text>
        </TouchableOpacity>
      </View>
      
      {props.USERROLE !='Customer' && <Header {...props}/>}
      {props.USERROLE =='Customer' && <View style={{marginTop:4}} />}
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignContent: 'space-between' }}>
        <View
            style={{
              width: 150, height: 40, justifyContent: 'center',
              alignItems: 'center', marginRight: 5, borderRadius: 5, borderWidth: 1
            }}
          >

            <ModalDropdown
              dropdownStyle={{ width: 150, height: 160, marginTop: 10 }}
              // showsVerticalScrollIndicator={true}
              disabled={false}
              style={{ width: 150, height: 40 }}
              onSelect={(Index, value)=> props.functionSetDefaultList(value,Index, props.ListData)}

              options={props.ListNameArray}
              defaultValue={props.sendDefaultVal}
              textStyle={{
                color: 'black', alignSelf: 'center', fontStyle: 'normal', paddingTop: 10, fontSize: 15

              }}
              renderButtonText={(row) => <Text style={{ fontSize: 17 }}>{row}</Text>}
              renderRow={(row) =>
                <View
                  style={{ width: 100, height: 40, justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }}
                >
                  <Text
                    allowFontScaling={false}
                    style={{ fontSize: 17 }}
                  >{row}</Text>
                </View>
              } />

          </View>
        <TouchableOpacity 
          onPress={()=>props.functionAddItemtoList(props.getDetail)}
          style={LocalStyle.ButtonContainer}
          disabled={props.ADDED_LIST == true ? true :  false }
        >
          <Text allowFontScaling={false} style={LocalStyle.ButtonLabel}>
           {props.ADDED_LIST == true ? 'ADDED TO LIST' :  'ADD TO LIST'}
          </Text>
        </TouchableOpacity>
      </View>
      { props.USERROLE !='Customer' ? <View style={{ flexDirection: 'row', margin: 5, width: '100%', height: 40, marginBottom: 0 }}>
        <TouchableOpacity 
          style={{ marginLeft: -3, width: '33%', height: 40, borderRadius: 10, backgroundColor: props.DetailShow ? Theme.PRIMARY_COLOR : props.bgUpdate , 
                  justifyContent: 'center', alignItems: 'center', marginTop: 0 }}
          onPress = {() => props.updateBody('Detail')}
          disabled={props.DetailShow ? true : false}
        >
          <Text allowFontScaling={false} style={{ color: 'black', alignSelf: 'center', fontSize: props.DetailShow ? 20 : 16 }}>
             Details
          </Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={{ width: '33%', height: 40, borderRadius: 10, backgroundColor: props.QrlayoutShow ? Theme.PRIMARY_COLOR : props.bgUpdate , 
                  justifyContent: 'center', alignItems: 'center', marginTop: 0 }}
          onPress = {() => props.updateBody('QRCode')}
          disabled={props.QrlayoutShow ? true : false}
        >
            <Text allowFontScaling={false} style={{ color: 'black', alignSelf: 'center', fontSize: props.QrlayoutShow ? 20 : 16 }}>
              Update
            </Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={{ width: '33%', height: 40, borderRadius: 10, backgroundColor: props.PrintLayout ? Theme.PRIMARY_COLOR : props.bgUpdate , 
                  justifyContent: 'center', alignItems: 'center', marginTop: 0 }}
          onPress = {() => props.updateBody('PrintLabel')}
          disabled={props.PrintLayout ? true : false}
        >
            <Text allowFontScaling={false} style={{ color: 'black', alignSelf: 'center', fontSize: props.PrintLayout ? 20 : 16 }}>
              Print Label
            </Text>
        </TouchableOpacity>
      </View> : <View style={{ flexDirection: 'row', margin: 5, width: '100%', height: 40, marginBottom: 0 }}>
        <TouchableOpacity 
          style={{ marginLeft: -3, width: '33%', height: 40, borderRadius: 10, backgroundColor: props.DetailShow ? Theme.PRIMARY_COLOR : props.bgUpdate , 
                  justifyContent: 'center', alignItems: 'center', marginTop: 0 }}
          onPress = {() => props.updateBody('Detail')}
          disabled={props.DetailShow ? true : false}
        >
          <Text allowFontScaling={false} style={{ color: 'black', alignSelf: 'center', fontSize: props.DetailShow ? 20 : 16 }}>
             Details
          </Text>
        </TouchableOpacity>
      </View> }
      
      <View style={{ width: '96%', height: 1, backgroundColor: Theme.PRIMARY_COLOR, marginBottom: 15, alignSelf: 'center' }} />  
      { props.DetailShow ? <Description {...props}/> : <View></View> }
      { props.QrlayoutShow ? <QrLayout {...props}/> : <View></View> }
      { props.PrintLayout ? <PrintLayout {...props}/> : <View></View> }

      <View style={{marginBottom:40}}/>
    </ScrollView>
    }
      

    </SafeAreaView>
  )
}
const LocalStyle = StyleSheet.create({
  MainContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white'
  },
  SliderContainer: {
    width: '100%',
    height: mTotalHegiht / 2 - 50,
    justifyContent :'center',
    alignItems:'center',
    backgroundColor: '#fff'
  },
  ButtonContainer: {
    width: 200,
    height: 40,
    borderRadius: 10,
    backgroundColor: Theme.PRIMARY_COLOR,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 0,
    marginLeft: 5
  },
  ButtonLabel: {
    color: 'black', alignSelf: 'center'
  },
  TitleLabel: {
    marginLeft: 10, fontWeight: 'bold', fontSize: 18
  },
  Text: {
    marginLeft: 10,
    fontSize: mTitleFont,
    marginTop: 3,
    color: 'black',
    marginTop: 10

  },
  DescriptionText: {
    marginLeft: 10,
    fontSize: mTitleFont,
    marginTop: 3,
    color: 'black'

  },
  DescriptionTitle: {
    marginLeft: 10,
    fontSize: mTitleFont,
    color: 'black',
    fontWeight: 'bold'
  },
  CountLabel: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
    marginLeft:5,
    marginRight:5,
    marginTop:4,
    marginBottom:4,
    
  },
  FillStock: {
    marginRight: 10,
    width: 120,
    height: 40,
    borderRadius: 10,
    backgroundColor: Theme.PRIMARY_COLOR,

    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 0
  }
})


export default Details
