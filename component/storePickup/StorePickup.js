import React,{} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-navigation';
import Styless from '../Common/Styless';
import Toolbar from '../Common/LoginToolbar';


const StorePickup =(props)=>{
    return(
        <SafeAreaView
        forceInset={{ bottom: 'never'}}
        style={Styless.MainContainer}
        >
        <Toolbar {...props}/>
        <ScrollView
        style={Styless.ScrollContainer}
        >

<Text
allowFontScaling={false}
style={{ color: "black", marginTop: 155 , fontSize:16, textAlign :'center'}}>


    Feature Coming Soon....
</Text>
        </ScrollView>

            </SafeAreaView>
    )
}

export default StorePickup;
