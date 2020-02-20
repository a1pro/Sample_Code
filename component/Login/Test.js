import React,{Component} from 'react';
import {View, } from 'react-native';
import Model from '../../model';

export default class Test extends Component
{
   

  state = Model.LoginInModel;

  constructor(props) {
    super(props);

    

    this.state = {
      Title: "Login",
      User: {
        Email: "",
        Password: "",
        Error: false,
        ErrorMeg: ""
      }
    };
  }

  componentDidMount() {
    console.log("componentDidMount");

  
    

  }
  functionSetEmail = (Name, Value) => {
    var user = this.state.User;
    user[Name] = Value;
    user["Error"] = false;
    this.setState({ ...this.state.User, user });
  };
  functionSubmitloginApp = () => {
    console.log("this.state.User.Email", this.state.User.Email);

    if (
      this.state.User.Email == "Customer@gmail.com" ||
      this.state.User.Email == "customer@gmail.com"
    ) {
      this.props.navigation.navigate("HomeCustomer");
    } else if (
      this.state.User.Email == "Admin@gmail.com" ||
      this.state.User.Email == "admin@gmail.com"
    ) {
      this.props.navigation.navigate("HomeAdmin");
    } else if (this.state.User.Email == "") {
      const user = this.state.User;
      (user["Error"] = true),
        (user["ErrorMeg"] = "Please enter Email"),
        this.setState({ ...this.state.User, user });
    } else {
      const user = this.state.User;
      (user["Error"] = true),
        (user["ErrorMeg"] = "Please enter valid Email"),
        this.setState({ ...this.state.User, user });
    }
  };

  functionGoback = () => {
this.props.navigation.goBack();

  };
  functionOpenPage = value => {
    this.props.navigation.navigate(value);
  };

  functionCheckRedux=()=>{
    console.log('functionCheckRedux');
    
    this.props.getInLogin();
  }
  render() {
    const Modal = {
      User: this.state.User,
      Title: this.state.Title,

      //Function
      functionSetEmail: this.functionSetEmail,
      functionSubmitloginApp: this.functionSubmitloginApp,
      functionOpenPage: this.functionOpenPage,
      functionGoback : this.functionGoback,

      functionCheckRedux : this.functionCheckRedux,
    };

    return <Login {...Modal} />;
  }
}

function MapToStateProps(state) {
  
  const {Loader, Errorr} =state.loginReducer;

  console.log('Loader', Loader);
  
  return {Loader, Errorr};
}


// export default connect(
//   MapToStateProps,{getInLogin}
  
// )(LoginContainer);
