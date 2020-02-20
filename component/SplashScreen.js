import React, { Component } from "react";
import { View, ImageBackground, Image, Animated, Easing , AsyncStorage} from "react-native";
import BackIcon from "../../image/Splash.jpg";
import LogoIcon from "../../image/logo.png";
export default class SplashScreen extends Component {
  constructor(props) {
    super(props);
    this.animatedValue = new Animated.Value(0);
    this.animate = this.animate.bind(this);

    this.props.navigation.addListener(
      'willFocus',
      payload => {
      
        // this.props.navigation.navigate("HomeCustomer");
        // console.log('SplashScreen');
        // alert('mith')
      }
    );
  }

  componentDidMount() {
    this.animate();
    var mTime = setInterval(() => {
      clearInterval(mTime);
    
      console.log('SplashScreen');
      this.props.navigation.popToTop();
      this.props.navigation.navigate("HomeAdmin");
    //  AsyncStorage.getItem('USERROLE').then((value)=>{
    //    if(value == "Customer")
    //    {
    //     this.props.navigation.popToTop();
    //     this.props.navigation.navigate("HomeCustomer");
    //    }
    //    else
    //    {
    //     this.props.navigation.popToTop();
    //     this.props.navigation.navigate("HomeAdmin");
    //    }
    //  }).catch((ERROR)=>{
    //    console.log('ERROR',ERROR);
       
    //  })
   
    
    
  }, 2000);
  }

  animate() {
    this.animatedValue.setValue(0);
    Animated.timing(this.animatedValue, {
      toValue: 1,
      duration: 1900,
      easing: Easing.linear
    }).start();
  }

  render() {
    const ScaleImage = this.animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1.4]
    });

    return (
      <ImageBackground
        style={{
          width: "100%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
          flex:1
        }}
        source={BackIcon}
      >
        <Animated.Image
          style={{
            width: 200,
            height: 150,
            resizeMode: "contain",
            transform: [{ scale: ScaleImage }]
          }}
          source={LogoIcon}
        />
      </ImageBackground>
    );
  }
}
