import React, { Component } from "react";
import Home from "./Home";

import ProductList from "../Modal/ProductList";
import { connect } from 'react-redux';
import { GetBanner } from '../../action';
import { AsyncStorage } from 'react-native';

class HomeContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      names: [...ProductList],
      Title: "",
      SignIn: 'Sign In',
      ShowLoader: true,
      BannerList: [],
    };


    this.props.navigation.addListener('willFocus', () => {

      AsyncStorage.getItem('NAME').then((value) => {
        console.log('value', value);

        if (value == null) {
          this.setState({ SignIn: 'Sign In', Login: false });
        }
        else {
          this.setState({ SignIn: 'Hi ' + value, Login: true });
        }
      }).catch((ERROR) => {
        console.log('ERROR', ERROR);

      })


    })


  }

  componentWillMount() {

    this.props.GetBanner();
  }

  functionOpenDrawer = () => {
    this.props.navigation.openDrawer();
  }

  functionOpenPage = (value) => {

    console.log('value', value);

    this.props.navigation.navigate(value)
  }
  render() {
    const Modal = {
      names: this.state.names,
      Title: this.state.Title,
      SignIn: this.state.SignIn,
      Login : this.state.Login,


      //Redux

      ShowLoader: this.props.Loader,
      BannerList: this.props.Respone,
      functionOpenPage: this.functionOpenPage,
      functionOpenDrawer: this.functionOpenDrawer,
    };
    return <Home {...Modal} />;
  }
}

function MapToStateProps(state) {

  const { Loader, Errorr, Respone } = state.HomeReducer;

  return { Loader, Errorr, Respone };

}

export default connect(MapToStateProps, { GetBanner })(HomeContainer);
