import React, { } from 'react';
import { View, Text, FlatList, TouchableOpacity , Platform} from 'react-native';
import { SafeAreaView } from 'react-navigation';
import Styless from '../Common/Styless';
import Toolbar from '../Common/LoginToolbar';
import Search from './Search';
import Loader from '../Common/Loader';
import VoiceDialog from '../Picker/VoiceRecoder';



const SimpleSearch = (props) => {

   console.log('props.List', props.List);
   

    if (props.ShowLoader)
        return (
            <SafeAreaView
                forceInset={{ bottom: 'never' }}
                style={Styless.MainContainer}
            >
                <Toolbar {...props} />
                <Search {...props} />
                <View style={{ width: '100%', height: 10 }} />
                <View
                    style={Styless.ScrollContainer}
                >

                    <Loader />
                </View>

            </SafeAreaView>
        )

    return (
        <SafeAreaView
            forceInset={{ bottom: 'never' }}
            style={Styless.MainContainer}>
            <Toolbar {...props} />
            <Search {...props} />
            <View style={{ width: '100%', height: 5 }} />
            <VoiceDialog {...props} />
            
            <View
            style={{width:'100%', height:'100%', backgroundColor:'white'}}
            >

           
            <View
               style={{width :'100%', height : Platform.OS == 'ios'? '89%' :'81%', backgroundColor:'white'}}>

               {props.ErrorMessage == '' ? 
                <FlatList
               
                    data={props.List}
                    renderItem={({ item }) => (
                        <View
                        style={{width :'100%', height:undefined}}
                        >
                        <TouchableOpacity
                         onPress={()=>props.functionOpenPage('ProductDetails',  item.itemnum)}
                        style={{width:'100%', height:40, justifyContent:'center', alignItems:'flex-start'}}>
                        <Text
                         allowFontScaling={false}
                         style={{marginLeft:10}}
                        >{item.itemname}</Text>
                            </TouchableOpacity>

                            <View style={Styless.Line}/>
                            

                        </View>
                    )}
                />:
                <Text
                style={{}}
                >{props.ErrorMessage}</Text>}
            </View>
            </View>
        </SafeAreaView>
    )
}

export default SimpleSearch;
