import React,{} from 'react';
import { View, Text, ScrollView, StyleSheet, Platform, Dimensions, TouchableOpacity, Image, FlatList } from 'react-native';
import {SafeAreaView} from 'react-navigation';
import Styless from '../Common/Styless';
import Toolbar from '../Common/NotificationToolbar';
import Loader from '../Common/Loader'
import { Theme } from '../../config'
import { SwipeableFlatList } from 'react-native-swipeable-flat-list'
import NetworkApi from '../../network/NetworkApi'
import DeleteIcon from '../../../image/delete.png'

const mTotalHegiht = Dimensions.get('window').height
var mTitleFont = 16
var mNormalFont = 14
if (mTotalHegiht > 890) {
  mTitleFont = 18
  mNormalFont = 17
} else {
  mTitleFont = 16
  mNormalFont = 15
}

const Notification = (props) => {

    return(
        <SafeAreaView
            forceInset={{ bottom: 'never'}}
            style={Styless.MainContainer}
        >
            <Toolbar {...props} />
            <ScrollView
                style={Styless.ScrollContainer}
            >
                { props.Loader ? 
                <Loader /> : 
                <View style={{width: '100%', height: '100%', flex: 1, backgroundColor: 'white'}}>
                    <View style={{ width: '100%', height: Platform.OS =='ios' ? '93%' : '95%', backgroundColor: 'white', marginTop: 10 }}>
                        <FlatList
                            style={{ width: '100%', marginBottom: Platform.OS == 'ios' ? 150 : 50 }}
                            data = { props.Response }
                            renderItem = { ({ item }) => (
                                <View>
                                    <View style = {{ width: '100%', height: 90, flexDirection: 'row', marginBottom: 4 }}>
                                        {/* <View style = {{ width: '30%', height: '100%', backgroundColor: 'white' }}>
                                            
                                        </View> */}
                                        <View style = {{
                                            width: '90%', height: 85,
                                            backgroundColor: 'white', flexDirection: 'row', marginTop: 10
                                        }}>
                                            <View style={{ width: '30%', height: '90%' }}>
                                                <Image
                                                    style={{ width: '100%', height: '100%', resizeMode: 'contain', marginBottom: 4 }}
                                                    source={{ uri: NetworkApi.IAMGE_BASE_URL + item.image }}
                                                />
                                                
                                            </View>
                                            <View style={{ width: '70%', height: '90%' }} >
                                                <TouchableOpacity
                                                    onPress={() => props.functionOpenPage('SeeMessagesDetailsContainer', item)}
                                                    style={{
                                                    width: '100%', height: '100%', justifyContent: 'center', alignItems: 'flex-start',
                                                    backgroundColor: 'white', marginTop: 0
                                                    }}
                                                >
                                                    <Text allowFontScaling={false} style={{ color: 'black', fontWeight: 'bold', fontSize: mTitleFont, paddingLeft: 10 }}>
                                                        { item.title }
                                                    </Text>
                                                    <Text style={{ paddingLeft: 10, fontSize: mNormalFont, marginBottom: 4 }} numberOfLines={3} allowFontScaling={false}>
                                                        { item.message }
                                                    </Text>
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                        <TouchableOpacity
                                            onPress={() => props.deleteMessage(item)}
                                            style={{ width: '10%', height: '100%', justifyContent: 'center', alignItems: 'center' }}
                                        >
                                        <Image style={{
                                            width: 26, height: 26, resizeMode: 'contain',
                                        }}
                                            source={DeleteIcon} />


                                        </TouchableOpacity>
                                    </View>
                                    <View style={{ width: '100%', height: 1, backgroundColor: '#F79942' }} />
                                </View>
                            )}
                        />
                        { props.Response.length > 2 ? <View style={{ width: '100%', height: 1, backgroundColor: '#F79942', marginTop: -4 }} /> : 
                        <View /> }
                    </View>
                </View>
                }
            </ScrollView>
        </SafeAreaView>
    )
}

export default Notification;
