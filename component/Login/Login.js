import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
 
} from "react-native";
import {SafeAreaView} from 'react-navigation';
import Toolbar from "../Common/LoginToolbar";
import Styless from "../Common/Styless";
import LogoIcon from "../../../image/logo.png";
import { ScrollView } from "react-native-gesture-handler";
import UserIcon from "../../../image/user.png";
import PassIcon from "../../../image/pas.png";
import ColorUserIcon from "../../../image/coloruser.png";
import ColorPassIcon from "../../../image/colorpas.png";
import { Theme } from "../../config";
import Loader from '../Common/Loader';



const Login = props => {
  return (
    <SafeAreaView
    forceInset={{ bottom: 'never'}}
      style={{
        width: "100%",
        height: "100%",
        flex: 1,
        backgroundColor: "#F79942"
      }}
    >
      <Toolbar {...props} />
      <ScrollView style={Styless.ScrollContainer}>
        <Image
          style={{
            width: 180,
            height: 100,
            resizeMode: "contain",
            alignSelf: "center",
            marginTop: 30
          }}
          source={LogoIcon}
        />
     

        <View
          style={{
            width: "80%",
            height: undefined,
            marginLeft: "10%",
            marginRight: "10%",
            marginTop: 30
          }}
        >
          <View
            style={{
              width: "100%",
              height: 50,
              flexDirection: "row",
              borderColor: "black",
              borderWidth: 1,
              borderRadius: 5
            }}
          >
            <View
              style={{
                width: "15%",
                height: "100%",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <Image
                style={{ width: 20, height: 20, resizeMode: "contain" }}
                source={props.EmailFocus == true ? ColorUserIcon : UserIcon}
              />
            </View>

            <TextInput
              allowFontScaling={false}
              style={LocalStyle.EmailContainer}
              placeholder={"Email Address"}
              placeholderTextColor={Theme.PLACE_HOLDER}
              autoCorrect={false}
              onChangeText={value => props.functionSetEmail("email", value)}
              onFocus={() => props.functionEmailFocusChange(true)}
              onBlur={() => props.functionEmailFocusChange(false)}
            
              onSubmitEditing={() => this.password.focus()}
              returnKeyType={'next'}
              blurOnSubmit={false}
            />
          </View>

          <View
            style={{
              width: "100%",
              height: 50,
              marginTop: 15,
              flexDirection: "row",
              borderColor: "black",
              borderWidth: 1,
              borderRadius: 5
            }}
          >
            <View
              style={{
                width: "15%",
                height: "100%",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <Image
                style={{ width: 20, height: 20, resizeMode: "contain" }}
                source={props.PassFocus == true ? ColorPassIcon : PassIcon}
              />
            </View>

            <TextInput
              allowFontScaling={false}
              style={LocalStyle.PasswordContainer}
              placeholder={"Password"}
              placeholderTextColor={Theme.PLACE_HOLDER}
              autoCorrect={false}
              secureTextEntry={true}
              onFocus={() => props.functionPassFocusChange(true)}
              onBlur={() => props.functionPassFocusChange(false)}
             
              ref={(input) => this.password = input}
              returnKeyType = "done"
              blurOnSubmit={true}
              onChangeText={value => props.functionSetPassword("password", value)}
            />
          </View>

          <TouchableOpacity
            onPress={ ()=> props.functionOpenPage('ForgotContainer')}
            style={{
              width: "100%",
              height: undefined,
              marginTop: 10,
              alignSelf: "flex-end",
              justifyContent: "center",
              marginBottom: 10
            }}>
            <Text
              allowFontScaling={false}
              style={{
                alignSelf: "flex-end",
                color: "#F79942",
                textDecorationLine: "underline",
                fontSize: 16,
                fontWeight: "bold"
              }}
            >
              Forgot Password?
            </Text>
          </TouchableOpacity>

          {props.Error == true && (
            <Text
              allowFontScaling={false}
              style={{ alignSelf: "center", color: "red" }}
            >
              {props.ErrorMeg}
            </Text>
          )}

         {props.ShowLoader == true ? <Loader /> :
          <TouchableOpacity
            onPress={props.functionSubmitloginApp}
            style={Styless.LoginButton}
          >
            <Text
              allowFontScaling={false}
              style={{
                alignSelf: "center",
                color: "black",
                fontWeight: "bold",
                fontSize: 16
              }}
            >
              Login
            </Text>
          </TouchableOpacity>}

          <View
            style={{
              width: "100%",
              height: 40,
              marginTop: 20,
              marginBottom:40,
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Text
              allowFontScaling={false}
              style={{ fontSize: 16, fontWeight: "400" }}
            >
              Don't have an account?
            </Text>

            <TouchableOpacity
              onPress={() => props.functionOpenPage("NewUserRegister")}
            >
              <Text
                allowFontScaling={false}
                style={{
                  alignSelf: "center",
                  color: "#F79942",
                  fontWeight: "bold",
                  textDecorationLine: "underline",
                  marginLeft: 5,
                  fontSize: 16,
                  marginBottom:0,
                  marginTop:-5,
                }}
              >
                Sign up
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

     
     
    </SafeAreaView>
  );
};

const LocalStyle = StyleSheet.create({
  Main: {
    width: "90%",
    height: "100%",
    marginLeft: "5%",
    marginRight: "5%"
  },
  ImageContainer: {
    width: 200,
    height: 150,
    resizeMode: "contain",
    alignSelf: "center",
    marginTop: 35
  },
  EmailContainer: {
    paddingLeft: 8,
    width: "100%",
    height: 50,
    marginLeft: "0%",
    marginRight: "2%",
    color: "black"
  },
  PasswordContainer: {
    paddingLeft: 7,
    width: "100%",
    height: 50,
    marginLeft: "0%",
    marginRight: "2%",
    color: "black"
  },
  CreateAccountContainer: {
    width: "100%",
    height: 45,
    backgroundColor: "#90C154",
    marginTop: 15,
    marginBottom: 0,
    justifyContent: "center",
    borderRadius: 5
  }
});
export default Login;
