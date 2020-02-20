import React, { } from 'react';
import {
    View,
    StyleSheet,
    ImageBackground,
    Image,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity
} from "react-native";
import LogoIcon from '../../../../image/logo.png'
import { Theme } from '../../../config';

const otp = (props) => {
    return (
        <View
            style={{ width: '100%', height: '100%', backgroundColor: 'white', }}
        >
            <Image
                style={{
                    width: 180,
                    height: 60,
                    marginTop: 5,
                    resizeMode: "contain",
                    alignSelf: "center"
                }}
                source={LogoIcon}
            />
            <Text
                allowFontScaling={false}
                style={{ marginTop: 15, alignSelf: 'center' }}
            >Verify your number</Text>
            <Text
                allowFontScaling={false}
                style={{ marginTop: 15, alignSelf: 'center' }}
            >We have sent an OTP on your number!</Text>
            <Text
                allowFontScaling={false}
                style={{ alignSelf: 'center' }}
            >{props.Phonenumber}</Text>


            <TextInput
                allowFontScaling={false}
                maxLength={6}
                textAlign={'center'}
                style={{
                    width: 150, height: 45, backgroundColor: 'white', borderWidth: 1,
                    borderColor: Theme.PRIMARY_COLOR, paddingLeft: 20, paddingRight: 20,
                    marginTop: 50, alignSelf: 'center', borderRadius: 30, fontSize:20
                }}
                keyboardType={'numeric'}
                onChangeText={(text) => props.functionSetOtp({text})}
                value={props.Otp}
            />


          

            <TouchableOpacity
            onPress={()=>props.functionVerifyOtp('')}
            style={{ width: 250, height: 45, backgroundColor: Theme.PRIMARY_COLOR,  borderRadius: 30, 
            marginTop:50,alignSelf:'center' , justifyContent:'center', alignItems:'center'}}
            >
                <Text
                allowFontScaling={false}
                style={{color:'white', fontSize:20, textAlign:'center', fontWeight:'bold'}}
                >SUBMIT</Text>

            </TouchableOpacity>


        </View>
    )
}

export default otp;