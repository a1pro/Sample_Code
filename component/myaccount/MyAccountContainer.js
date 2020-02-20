import React, { Component } from 'react';
import MyAccount from './MyAccount';
import {AsyncStorage} from 'react-native';


export default class MyAccountContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      Title: 'My Account',
      Fname :'',
      Lname:'',
      Email:'',


    }
  }

 async componentWillMount()
  {
   
  await  AsyncStorage.getItem('NAME').then((value)=>{ 

    console.log('value', value);
      fname = value;
      this.setState({Fname : value,})
    })
  await  AsyncStorage.getItem('LAST_NAME').then((value)=>{ 
    console.log('value', value);
      lname = value;
      this.setState({ Lname : value})
    })
  await  AsyncStorage.getItem('EMAIL').then((value)=>{ 
    console.log('value', value);
   
      this.setState({ Email : value})
    })

  

  }
 
  functionGoback = () => {
    this.props.navigation.goBack();
  };
  functionOpenPage = value => {
    this.props.navigation.navigate(value);
  };
  render() {

    const Model = {
      Title: this.state.Title,
      Fname : this.state.Fname,
      Lname : this.state.Lname,
      Email : this.state.Email,


      functionGoback : this.functionGoback,
      functionOpenPage : this.functionOpenPage,


    }
    return <MyAccount {...Model} />
  }
}