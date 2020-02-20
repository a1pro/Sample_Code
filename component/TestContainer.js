import React, { Component } from 'react';


import { View, ListView, WebView, StyleSheet, TouchableOpacity, Text, AsyncStorage, Platform, Button, Image, ScrollView } from 'react-native';

const url = [
  {
    "videourl": "https://www.youtube.com/embed/ZnvJvZAJZPk",
  },
  {
    "videourl": "https://www.youtube.com/embed/HOI8nlFa86U",
  },
  {
    "videourl": "https://www.youtube.com/embed/0bDI_rAMV68",
  },
];
export default class TestConatiner extends Component {


  constructor() {
    super();
    this.state = {
      //initial image to the <Image>
      imageURI: 'https://aboutreact.com/wp-content/uploads/2018/07/sample_img.png'
    }
  }

  takeScreenShot = () => {

    // this.refs.viewShot.capture().then(uri => {
    //      console.log("do something with ", uri);
    //      this.setState({imageURI : uri})
    //   });

    // this.refs.viewShot.capture().then(uri => {
    //   console.log("do something with ", uri);
    //   this.setState({ imageURI: uri })
    // });
  }

  // captureScreen({
  //   format: "jpg",
  //   quality: 0.8,
  //   width:'100%',
  //   height:'100%'
  // })
  componentDidMount() {
    // this.refs.viewShot.capture().then(uri => {
    //    console.log("do something with ", uri);
    //    this.setState({imageURI : uri})
    // });


  }
  render() {
    return (
      <View>
        
      </View>

      // <ViewShot ref="viewShot">
      //   <View>
      //     <ScrollView
      //     style={{width:'100%', height:300}}
      //     >
      //       <Text>...Something to rasterize...</Text>
      //       <Text>...Something to rasterize...</Text>
      //       <Text>...Something to rasterize...</Text>
      //       <Text>...Something to rasterize...</Text>
      //       <Text>...Something to rasterize...</Text>
      //       <Text>...Something to rasterize...</Text>
      //       <Text>...Something to rasterize...</Text>
      //       <Text>...Something to rasterize...</Text>
      //       <Text>...Something to rasterize...</Text>
      //       <Text>...Something to rasterize...</Text>
      //       <Text>...Something to rasterize...</Text>
      //       <Text>...Something to rasterize...</Text>
      //       <Text>...Something to rasterize...</Text>
      //       <Text>...Something to rasterize...</Text>
      //       <Text>...Something to rasterize...</Text>
      //       <Text>...Something to rasterize...</Text>
      //       <Text>...Something to rasterize...</Text>
      //       <Text>...Something to rasterize...</Text>
      //       <Text>...Something to rasterize...</Text>
      //       <Text>...Something to rasterize...</Text>

      //     </ScrollView>

      //     <Text>...Something to rasterize...</Text>
      //     <Image
      //       style={{ width: 200, height: 300, resizeMode: 'contain', marginTop: 5 }}
      //       source={{ uri: this.state.imageURI }}
      //     />

      //     <TouchableOpacity
      //       onPress={() => this.takeScreenShot('')}
      //     >
      //       <Text>Click</Text>
      //     </TouchableOpacity>
      //   </View>
      // </ViewShot>

      /* <ViewShot ref="viewShot" options={{ format: "jpg", quality: 0.9 }}>
        
       <Image 
           source={{uri : this.state.imageURI}} 
           style={{width: 200, height: 300, resizeMode: 'contain', marginTop: 5}} />
           <TouchableOpacity 
           onPress={()=>this.takeScreenShot('')}
           >
             <Text>Click</Text>
           </TouchableOpacity>
        <ScrollView>
        <Text>...Something to rasterize...</Text>
        <Text>...Something to rasterize...</Text>
        <Text>...Something to rasterize...</Text>
        <Text>...Something to rasterize...</Text>
        <Text>...Something to rasterize...</Text>
        <Text>...Something to rasterize...</Text>
        <Text>...Something to rasterize...</Text>
        <Text>...Something to rasterize...</Text>
        <Text>...Something to rasterize...</Text>
        <Text>...Something to rasterize...</Text>
        <Text>...Something to rasterize...</Text>
        <Text>...Something to rasterize...</Text>
        <Text>...Something to rasterize...</Text>
        <Text>...Something to rasterize...</Text>
        <Text>...Something to rasterize...</Text>
        <Text>...Something to rasterize...</Text>
        <Text>...Something to rasterize...</Text>
        <Text>...Something to rasterize...</Text>
        <Text>...Something to rasterize...</Text>
        <Text>...Something to rasterize...</Text>

        <Text>...Something to rasterize...</Text>
        <Text>...Something to rasterize...</Text>
        <Text>...Something to rasterize...</Text>
        <Text>...Something to rasterize...</Text>
        <Text>...Something to rasterize...</Text>
        <Text>...Something to rasterize...</Text>
        <Text>...Something to rasterize...</Text>
        <Text>...Something to rasterize...</Text>
        <Text>...Something to rasterize...</Text>
        <Text>...Something to rasterize...</Text>
        <Text>...Something to rasterize...</Text>
        <Text>...Something to rasterize...</Text>
        <Text>...Something to rasterize...</Text>
        <Text>...Something to rasterize...</Text>
        <Text>...Something to rasterize...</Text>
        <Text>...Something to rasterize...</Text>
        <Text>...Something to rasterize...</Text>
        <Text>...Something to rasterize...</Text>
        <Text>...Something to rasterize...</Text>
        <Text>...Something to End...</Text>
        </ScrollView>

 
        
     </ViewShot> */


    );
  }
}