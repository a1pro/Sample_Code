import React, {} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Dimensions, TextInput } from 'react-native';
import { Theme } from '../../config'
import Dialog, { DialogContent, ScaleAnimation, DialogTitle, DialogFooter, DialogButton } from 'react-native-popup-dialog';

const mTotalHegiht = Dimensions.get('window').height


var mTitleFont = 20
var mNormalFont = 14
if (mTotalHegiht > 890) {
  mTitleFont = 22
  mNormalFont = 17
}else {
  mTitleFont = 20
  mNormalFont = 15
}
const Header =(props)=>{
    return (
        <View style={{width: '100%', height: 50, flexDirection: 'row', backgroundColor: '#e0e0e0',  marginTop: 10, marginBottom: 10}}>
        <View style={{width: '50%', height: undefined,flexDirection: 'row'}}>
          <Text allowFontScaling={false} style={LocalStyle.Text}>
            Price: ${props.Price}
          </Text>
          {props.USERROLE  !='Employee' && 
          <Text allowFontScaling={false} style={LocalStyle.Text}>
            Cost: ${props.Cost}
          </Text>}
        </View>
        { props.REFILL == 1 ? <View style={{width: '50%', height: '100%',  justifyContent: 'center', alignItems: 'flex-end'}}>
            <TouchableOpacity style={LocalStyle.FillStock} onPress={() => props.toggleDialog()}>
              <Text allowFontScaling={false} style={LocalStyle.ButtonLabel}>
                FILL STOCK
              </Text>
            </TouchableOpacity>
            <Dialog
              onTouchOutside = {() => props.toggleDialog()}
              onHardwareBackPress = {() => props.toggleDialog()}
              dialogStyle={{ width: '60%' }}
              visible={props.VisibleDialog}
              dialogAnimation={new ScaleAnimation({
                initialValue: 0, // optional
                useNativeDriver: true, // optional
              })}
              dialogTitle={<DialogTitle align="left" title="Fill Stock" />}
              footer={
                <DialogFooter>
                  <DialogButton
                    text="CANCEL"
                    onPress={() => props.toggleDialog()}
                  />
                  <DialogButton
                    text="Update"
                    onPress={() => props.submitStock('','update')}
                  />
                </DialogFooter>
              }
            >
              <DialogContent style={{ align: 'left' }}>
                <Text>Enter no of Stock :</Text>
                <View style={{ width: '100%', height: 50, borderBottomColor: '#757575', borderBottomWidth: 0.5, justifyContent: 'center', alignItems: 'flex-start', marginTop: 10 }}>
                  <TextInput
                    style={{ fontSize: 20 }}
                    autoCorrect={false}
                    multiline={false}
                    blurOnSubmit={false}
                    allowFontScaling={false}
                    underlineColorAndroid='transparent'
                    placeholder='No of stock'
                    placeholderTextColor={Theme.PLACE_HOLDER}
                    keyboardType='numeric'
                    onChangeText={(text)=> props.submitStock(text, 'add')}
                    value={props.fillStock}
                    maxLength={10}
                   />
                </View>
              </DialogContent>
            </Dialog>
          </View> : 
          <View style={{width: '50%', height: '100%',  justifyContent: 'center', alignItems: 'flex-end'}}></View> 
        }
        
      </View>
    )
}
export default Header;
const LocalStyle = StyleSheet.create({
    MainContainer: {
      width: '100%',
      height: '100%',
      backgroundColor: 'white'
    },
    SliderContainer: {
      width: '100%',
      height: mTotalHegiht / 2 - 50
    },
    ButtonContainer: {
      width: 200,
      height: 40,
      borderRadius: 10,
      backgroundColor: Theme.PRIMARY_COLOR,
      alignSelf: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 0
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
      fontWeight: 'bold'
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