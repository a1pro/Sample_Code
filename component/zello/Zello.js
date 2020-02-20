import React, { } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import Styless from '../Common/Styless';
import Toolbar from '../Common/LoginToolbar';
import Search from './Serach';
import Header from './Header';


const Zello = (props) => {
    return (
        <SafeAreaView
            style={Styless.MainContainer}>
            <Toolbar {...props} />
             <Header {...props}/> 
            <Search {...props}/>
           

        </SafeAreaView>
    )
}

export default Zello;
