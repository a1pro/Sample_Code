import React, { } from 'react'
import { View, Text, FlatList, Image, TouchableOpacity, Dimensions, StyleSheet, Platform } from 'react-native'
import { SafeAreaView } from 'react-navigation'
import Styless from '../Common/Styless'
import Toolbar from '../Common/LoginToolbar'
import Loader from '../Common/Loader';
import NetworkApi from '../../network/NetworkApi';
import Footer from './Footer';
import { Theme } from '../../config';


var mTitleSize = 0, mContainerSize = 0, mQrSize = 0, mQrMartop = 0, mQrMartBom = 0
const mTotalHegiht = Dimensions.get('window').height

if (mTotalHegiht < 800) {
    mTitleSize = 16
    mContainerSize = 120
    mQrSize = 80
    mQrMartop = 10
    mQrMartBom = 10
} else {
    mTitleSize = 17
    mContainerSize = 140
    mQrSize = 120
    mQrMartop = 10
    mQrMartBom = 10
}

var mTitleFont = 16;
var mNormalFont = 14;
if (mTotalHegiht > 890) {
  mTitleFont = 18;
  mNormalFont = 17;
}
else {
  mTitleFont = 16;
  mNormalFont = 15;
}


const MyPurchaseDetails = (props) => {
    
    if (props.ShowLoader)
        return (
            <SafeAreaView forceInset={{ bottom: 'never' }} style={Styless.MainContainer}>
                <Toolbar {...props} />
                <View style={Styless.ScrollContainer}>
                    <Loader />
                </View>
            </SafeAreaView>
        )

    return (
        <SafeAreaView forceInset={{ bottom: 'never' }} style={Styless.MainContainer}>
            <Toolbar {...props} />
            <View style={{ flex: 1, width: '100%', height: '100%', backgroundColor: 'white' }}>
                <View style={Styless.Line} />
                <View style={{ width: '100%', height: '90%' }}>
                        <FlatList
                            data={props.List}
                            renderItem={({ item }) =>
                                <View>
                                    <TouchableOpacity
                                        onPress={() => props.openProductDetailPage(item.itemnum)}
                                    >
                                        <View style={{ width: '100%', height: 140 , flexDirection: 'row' }}>
                                            <View style={LocalStyle.Image_Container}>
                                                <Image style={LocalStyle.Product_Image}
                                                source={{ uri: NetworkApi.IAMGE_BASE_URL + item.imagepath }} />
                                            </View>

                                    <View style={{ width: '70%', height: '100%' }}>
                                        <Text
                                            numberOfLines={2}
                                            allowFontScaling={false}
                                            style={{ color: 'black', marginLeft: 1, fontWeight: 'bold', fontSize: mTitleSize, marginTop: 5 }}
                                        >
                                            {item.itemname}
                                        </Text>

                                        <View
                                            style={{ width: '100%', height: undefined, flexDirection: 'row', marginLeft: 3 }}
                                        >

                                            <View style={{width: '50%', height: undefined,  alignItems: 'center',justifyContent: 'center', flexDirection: 'row', marginTop: 1}}>
                                                <View 
                                                    style={{backgroundColor: Theme.PRIMARY_COLOR, 
                                                    borderRadius: 5, width: '40%', height: '60%',
                                                    justifyContent: 'center', alignItems: 'center', marginLeft: 0 }}
                                                >
                                                    <Text 
                                                        style={LocalStyle.CountLabel} 
                                                        allowFontScaling={false}
                                                    >
                                                        {item.quantity}
                                                    </Text>
                                                </View>
                                                <Text allowFontScaling={false} style={{marginLeft: 10, fontSize: 20, marginTop: 1}}>
                                                    Quantity
                                                </Text>
                                            </View>
                                            {/* {item.Pickup == '1' &&
                                            <Image
                                                style={{ width: 35, height: 35, resizeMode: 'cover', marginLeft: 25, marginTop: props.UserRole != 'Customer' ? 10 : 5 }}
                                                source={PickupIcon}
                                            />} */}
                                        </View>
                                        <View
                                            style={{ width: '100%', height: undefined, flexDirection: 'row', marginTop: 0 }}
                                        >
                                            <Text
                                                numberOfLines={1}
                                                allowFontScaling={false}
                                                style={{ marginLeft: 1, fontSize: mTitleSize }}
                                            >
                                                Bonus Points: {item.bonuspoints}
                                            </Text>
                                        </View>

                                        <View
                                            style={{ width: '100%', flexDirection: 'row', marginBottom: 60, marginTop: 2 }}
                                        >
                                            <Text
                                                allowFontScaling={false}
                                                style={{ marginLeft: 1, fontSize: mTitleSize }}>
                                                Amount: ${item.price}
                                            </Text>
                                        </View>
                                    </View>
                                    </View>
                                </TouchableOpacity>
                            <View style={Styless.Line} />
                        </View>}
                        keyExtractor={item => item.linenum}
                    />
                </View>
                <Footer {...props} />
            </View>
        </SafeAreaView>
    )
}

const LocalStyle = StyleSheet.create({
    Second_Header: {
        color: 'black', alignSelf: 'center', marginBottom: 10, fontSize: 16
    },
    MainRowContainer: {
        width: '100%', height: undefined, flexDirection: 'row'
    },
    Image_Container: {
        width: '30%', height: '100%', justifyContent: 'center', alignItems: 'center'
    },
    Product_Image: {
        width: 110, height: 110, resizeMode: 'contain', alignSelf: 'center'
    },
    Value_Container: {
        width: '70%', height: '100%',
    },
    Name_Container: {
        width: '40%', height: undefined, justifyContent: 'center',
        alignItems: 'flex-start'
    },
    Font_Color: {
        color: '#757575',
        fontSize: mTitleSize,
    },
    Name_label: {
        marginTop: 5, color: '#757575',
        fontSize: mTitleSize,
    },
    Name_value: {
        marginTop: 5, color: 'black',
        fontSize: mTitleSize
    }

})
export default MyPurchaseDetails
