import React from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  Keyboard
} from "react-native";
import Styless from "../../Common/Styless";
import LogoIcon from "../../../../image/logo.png";
import RadioGroup from "./RadioGroup";
import BirthDate from "./BirthDate";
import { TextInput } from "react-native-gesture-handler";
import dropdown from "../../../../image/dropdown.png";
import PasswordHide from '../../../../image/password-hide.png'
import PasswordShow from '../../../../image/password-show.png'
import { Theme } from '../../../config'

const Layout6 = props => {


  
  return (
    <ScrollView 
    style={Styless.ScrollContainer}>
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
      <View
        style={{
          width: "90%",
          marginBottom: 0,
          height: undefined,
          marginRight: "5%",
          marginLeft: "5%",
          marginTop: 0,
          backgroundColor: "white",
          borderRadius: 5,
          paddingLeft: 10,
          paddingRight: 10
        }}
      >

<View
        style={{
          flexDirection: "row",
          width:'100%',

        }}
        >
        <View
          style={{
            width: "48%",
            height: 40,
            borderBottomColor: "#757575",
            borderBottomWidth: 0.5,
            justifyContent: "center",
            alignItems: "flex-start",
            marginTop: 10,
            marginRight:2
          }}
        >
        
          <TextInput
          style={{width:'100%', height:'100%'}}
            autoCorrect={false}
            multiline={false}
            blurOnSubmit={false}
            allowFontScaling={false}
            underlineColorAndroid='transparent'
            placeholder="First Name"
            placeholderTextColor={Theme.PLACE_HOLDER}

            autoCorrect={false}
            ref={(input) => this.firstName = input}
            onSubmitEditing={() => this.lastName.focus()}
            blurOnSubmit={false}
            returnKeyType = "next"

            onChangeText={(text) => props.functionSetfname({text})}
            value={props.Fname}
          />
        </View>
        <View style={{
            width: "48%",
            height: 40,
            borderBottomColor: "#757575",
            borderBottomWidth: 0.5,
            justifyContent: "center",
            alignItems: "flex-start",
            marginTop: 10,
            marginLeft:2
          }}
        >
          <TextInput
            style={{width:'100%', height:'100%'}}
            autoCorrect={false}
            multiline={false}
            blurOnSubmit={false}
            allowFontScaling={false}
            underlineColorAndroid='transparent'
            placeholder="Last Name"
            placeholderTextColor={Theme.PLACE_HOLDER}
            autoCorrect={false}

            ref={(input) => this.lastName = input}
            onSubmitEditing={() => this.phoneNumber.focus()}
            blurOnSubmit={false}
            returnKeyType = "next"
            value={props.Lname}
            onChangeText={(text) => props.functionSetLname({text})}
          />
        </View>

        </View>
        <View style={LocalStyle.EditTextConatiner}>
          <TextInput
            style={{width:'100%', height:'100%'}}
            autoCorrect={false}
            multiline={false}
            blurOnSubmit={false}
            allowFontScaling={false}
            underlineColorAndroid='transparent'
            placeholder="Mobile Number"
            placeholderTextColor={Theme.PLACE_HOLDER}
            autoCorrect={false}
            maxLength={10}
            ref={(input) => this.phoneNumber = input}
            onSubmitEditing={() => this.Email.focus()}
            blurOnSubmit={false}
            returnKeyType = "next"

            keyboardType={'phone-pad'}

            value={props.Phonenumber}
            onChangeText={(text) => props.functionSetphoneNumber({text})}
          />
        </View>
        <View style={LocalStyle.EditTextConatiner}>
          <TextInput
            style={{width:'100%', height:'100%'}}
            autoCorrect={false}
            multiline={false}
            blurOnSubmit={false}
            allowFontScaling={false}
            underlineColorAndroid='transparent'
            placeholder="Email"
            placeholderTextColor={Theme.PLACE_HOLDER}
            autoCorrect={false}

            ref={(input) => this.Email = input}
            onSubmitEditing={() => this.password.focus()}
            blurOnSubmit={false}
            returnKeyType = "next"
            value={props.Email}
            onChangeText={(text) => props.functionSetemail({text})}
          />
        </View>
        <View style={{ width: '100%', height: 40, borderBottomColor: '#757575', borderBottomWidth: 0.5, justifyContent: 'center', 
        alignItems: 'flex-start', marginTop: 10, flexDirection: 'row' }}>
          <TextInput
            allowFontScaling={false}
            style={{width: '80%', height: '100%'}}
            placeholder='Password'
            placeholderTextColor={Theme.PLACE_HOLDER}
            autoCorrect={false}
            multiline={false}
            blurOnSubmit={false}
            allowFontScaling={false}
            autoCorrect={false}
            underlineColorAndroid='transparent'
            ref={(input) => this.password = input}
            onSubmitEditing={() => Keyboard.dismiss()}
            blurOnSubmit={false}
            returnKeyType='done'
            secureTextEntry={props.PasswordVisible}
            
            value={props.Password}
            onChangeText={(text) => props.functionSetpassword({text})}
            
          
            />
          <TouchableOpacity 
          style={{width: '20%', height: '100%', justifyContent:'center', alignItems:'center'}}
          onPress={()=>props.functionPasswordHide(props.PasswordVisible)}
          >
          <Image 
          style={{width:25, height:25, resizeMode:'contain'}}
          source={ props.PasswordVisible == true ?  PasswordHide : PasswordShow}
          />
          </TouchableOpacity>
        </View>
        
        <Text
          allowFontScaling={false}
          autoCorrect={false}
          multiline={false}
          blurOnSubmit={false}
          style={{ alignSelf: "center", marginTop: 10 }}
        >
          Existing Customer
        </Text>
        <RadioGroup {...props} />
        <View
          style={{ width: "100%", height: 0.5, backgroundColor: "#757575" }}
        />
        <BirthDate {...props} />

        <TouchableOpacity
          onPress={() => props.functionShowDialog("LanguageVisible", true)}
          style={{ width: "100%", height: 40, flexDirection: "row" }}
        >
          <View
            style={{
              width: "80%",
              height: "100%",
              justifyContent: "center",
              alignItems: "flex-start"
            }}
          >
            <Text
              allowFontScaling={false}
              style={{ paddingLeft: 12, fontSize: 18 }}
            >
              {props.SelectedLanguage}
            </Text>
          </View>
          <View
            style={{
              width: "20%",
              height: "100%",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Image style={{ width: 20, height: 20 }} source={dropdown} />
          </View>
        </TouchableOpacity>
        <View
          style={{ width: "100%", height: 0.5, backgroundColor: "#757575" }}
        />
        <Text
        allowFontScaling={false}
        style={{alignSelf:'center'}}
        >
        Used for Sending Regional Specials
        </Text>
        <TouchableOpacity
        onPress={()=>props.functionSubmit('')}
          style={{
            width: "100%",
            height: 40,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#F79942",
            marginTop: 20,
            borderRadius: 10,
           
          }}
        >
          <Text
            allowFontScaling={false}
            style={{ color: "black", fontWeight: "bold" }}
          >
            SUBMIT
          </Text>
        </TouchableOpacity>


        <TouchableOpacity
         onPress={()=>props.functionOpenPage('Condition')}
          style={{
            width: "100%",
            height: 40,
            justifyContent: "center",
            alignItems: "center",
            marginBottom:15,
          }}
        >
          <Text
            allowFontScaling={false}
            style={{ color: "black", fontWeight: "bold" , textDecorationLine: 'underline', color:'#F79942'}}
          >
            Terms & Conditions
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const LocalStyle = StyleSheet.create({
  EditTextConatiner: {
    width: "100%",
    height: 40,
    borderBottomColor: "#757575",
    borderBottomWidth: 0.5,
    justifyContent: "center",
    alignItems: "flex-start",
    marginTop: 5
  }
});
export default Layout6;
