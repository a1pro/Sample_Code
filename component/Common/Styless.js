import React from "react";
import { StyleSheet } from "react-native";
import {Theme} from '../../config';

const Styless = StyleSheet.create({
  
  MainContainer: {
    width: "100%",
    height: "100%",
    flex:1,  
    backgroundColor:Theme.PRIMARY_COLOR,
  },
  ScrollContainer:{
    width: "100%",
    height: "100%",
    backgroundColor:'white',
    fontSize: 50
  },
  LoginButton: {
    width: "100%",
    height: 45,
    backgroundColor: "#F79942",
    marginTop: 15,
    justifyContent: "center",
    borderRadius: 5
  },
  Line:{
    width: '100%', height: 1, backgroundColor: Theme.PRIMARY_COLOR
  }
});

export default Styless;
