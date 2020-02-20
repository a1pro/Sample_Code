import React,{} from 'react';
import {
    View,
    ImageBackground,
    FlatList,
    Text,
    Image,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    Dimensions,
    ScrollView,
    Platform,
    StatusBar,
    Keyboard
  } from "react-native";
  import SearchIcon from "../../../../image/search.png";
  import ScanIcon from "../../../../image/scan.png";
  import MiceIcon from "../../../../image/mice.png";
  import DepartIcon from '../../../../image/depart.png';
  import BrandsIcon from '../../../../image/brands.png';
  import {Theme} from '../../../config';

  import BackIcon from "../../../../image/backwhite.png";
  const MyStatusBar = ({ backgroundColor, ...props }) => (
    <View style={[LocalStyle.statusBar, { backgroundColor }]}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  );

  const Search =(props)=>{


      return(
        <View>
        
       <View
       style={{width:'100%', height:40, flexDirection:'row', marginTop:0, marginBottom:5}}
       >
      <View
        style={{
          width: "80%",
          marginRight: "10%",
          marginLeft:'10%',
          height: 40,
          backgroundColor: "white",
          borderRadius: 5,
          flexDirection: "row",
         
        }}
      >
        
        <View
          style={{
            width: "85%",
            height: "100%",
            justifyContent: "center",
            alignItems: "flex-start"
          }}
        >
          <TextInput
            allowFontScaling={false}
            placeholder={"Search Customers"}
            placeholderTextColor={Theme.PLACE_HOLDER}
            blurOnSubmit={false}
            autoCorrect={false}
            style={{color:'black', marginLeft:5, width:'100%'}}
            value={props.Search}
            onChangeText={(text) => props.functionSearch({text})}
            returnKeyType={'done'}
            onSubmitEditing={()=>Keyboard.dismiss()}
            >
        
          </TextInput> 
         
        </View>
        <View
          style={{
            width: "15%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Image
            style={{ width: 25, height: 25, resizeMode: "contain" }}
            source={SearchIcon}
          />
        </View>
        
      </View>
      </View>
      </View>
      )
  }
  const STATUSBAR_HEIGHT = Platform.OS === "ios" ? 0 : StatusBar.currentHeight;
  const APPBAR_HEIGHT = Platform.OS === "ios" ? 44 : 56;
  export default Search;
  const LocalStyle = StyleSheet.create({
    Main: {
      width: "90%",
      height: "100%",
      marginLeft: "5%",
      marginRight: "5%"
    },
    MicContainer: {
      width: "50%",
      height: "100%",
      justifyContent: "center",
      alignItems: "center"
    },
    statusBar: {
      height: STATUSBAR_HEIGHT
    },
    appBar: {
      backgroundColor: "#79B45D",
      height: APPBAR_HEIGHT
    },
    content: {
      flex: 1,
      backgroundColor: "#33373B"
    }
  });