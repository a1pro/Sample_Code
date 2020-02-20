import React,{} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-navigation';
import Styless from '../Common/Styless';
import Toolbar from '../Common/LoginToolbar';


const Message =(props)=>{
    return(
        <SafeAreaView
        forceInset={{ bottom: 'never'}}
        style={Styless.MainContainer}
        >
        <Toolbar {...props}/>
        <ScrollView
        style={Styless.ScrollContainer}
        >

        </ScrollView>

            </SafeAreaView>
    )
}

export default Message;
