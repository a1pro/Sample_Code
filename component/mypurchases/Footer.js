import React, { } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { Theme } from '../../config';


var mTitleSize = 0, mContainerSize = 0, mQrSize = 0, mQrMartop = 0, mQrMartBom = 0
const mTotalHegiht = Dimensions.get('window').height

if (mTotalHegiht < 800) {
    mTitleSize = 20
   
} else {
    mTitleSize = 22
   
}
const Footer = (props) => {
    
    return (
        <View
            style={LocalStyle.Main_Container}>
            <View
                style={LocalStyle.Child_Container}>
                <Text
                    allowFontScaling={false}
                    style={LocalStyle.Amount_Label}
                >Bonus Points
                <Text
                allowFontScaling={false}
                style={{paddingLeft:100}}
                >{" "+props.BONUS_AMOUNT}</Text>
                </Text>

            </View>
            <View 
            style={{width:1, height:'100%', backgroundColor:Theme.PRIMARY_COLOR}}
            />
            <View
                style={LocalStyle.Child_Container} >
                <Text
                    allowFontScaling={false}
                    style={LocalStyle.Amount_Label}
                >Amount  <Text
                allowFontScaling={false}
                >${props.TOTAL_AMOUNT}</Text></Text>

            </View>
        </View>
    )
}

const LocalStyle = StyleSheet.create({
    Main_Container: {
        position: 'relative',
        bottom: 0,
        flexDirection: 'row',
        width: '100%', height: 50
    },
    Child_Container: {
        width: '50%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    Amount_Label: {
        color: Theme.PRIMARY_COLOR,
        fontSize: mTitleSize,
        fontWeight:'bold'
    }
})

export default Footer;