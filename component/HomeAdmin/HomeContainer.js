import React, { Component } from "react";
import Home from "./Home";
import ProductList from "../Modal/ProductList";
import AdminList from "../Modal/AdminList";
import { connect } from 'react-redux';
import { GetBanner, GetItemLocationDescription, GetSelectedItemFromList ,getAllRegion} from '../../action';
import { AsyncStorage, View, Image } from 'react-native';
import ActiveIcon from "../../../image/active.png";
import NonActiveIcon from "../../../image/non_Active.png";
import ManagerList from '../Modal/ManagerList';
import EmployeeList from '../Modal/EmployeeList';
import firebase from 'react-native-firebase';
import { Auth } from 'aws-amplify';

class HomeContainer extends Component {
  constructor(props) {
    super(props);

    this.functionNotification= this.functionNotification.bind(this);

    this.state = {
      names: [...ProductList],
      Admin: [...AdminList],
      Title: "",
      SignIn: 'Sign In',
      FirstRow: true,
      SecondRow: false,
      ShowLoader: true,
      BannerList: [],
      CurrentIndx: 0,
      Login: false,
      UserRole: 'CUSTOMER',

    };

   this.props.navigation.addListener(
      'willFocus',
      payload => {
        this.functionNotification()
        this.props.GetSelectedItemFromList();
        this.props.getAllRegion();

        
       
      

      }
    );

  }
  

  functionNotification=  async () =>{
    const enabled = await firebase.messaging().hasPermission();
    if (enabled) {

      firebase.messaging().getToken()
        .then(fcmToken => {
          if (fcmToken) {
            // user has a device token

          
          }
          else {
            alert('NOTPermission')
          }
        });
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

        AsyncStorage.getItem('USERROLE').then((value) => {
          console.log('USERROLE', value);
          if (value == null) {
            this.setState({ UserRole: 'CUSTOMER' })
          }
          else if (value == 'Customer') {
            this.setState({ UserRole: 'CUSTOMER' })
          }
          else if (value == 'Owner') {
            this.setState({ UserRole: value })
          }
          else if (value == 'Manager') {
            this.setState({ UserRole: value, Admin: ManagerList })
          }
          else if (value == 'Employee') {
            this.setState({ UserRole: value, Admin: EmployeeList })
          }
        })
       
    }
    else {

      AsyncStorage.clear();
      Auth.signOut()
          .then((data) =>
              console.log('data', data))
          .catch(err => console.log(err));

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
  
          AsyncStorage.getItem('USERROLE').then((value) => {
            console.log('USERROLE', value);
            if (value == null) {
              this.setState({ UserRole: 'CUSTOMER' })
            }
            else if (value == 'Customer') {
              this.setState({ UserRole: 'CUSTOMER' })
            }
            else if (value == 'Owner') {
              this.setState({ UserRole: value })
            }
            else if (value == 'Manager') {
              this.setState({ UserRole: value, Admin: ManagerList })
            }
            else if (value == 'Employee') {
              this.setState({ UserRole: value, Admin: EmployeeList })
            }
          })
    }
  }

  async componentWillMount() {
    this.props.GetBanner();
    this.props.GetItemLocationDescription();
    


  }
  functionOpenDrawer = () => {
    this.props.navigation.openDrawer();
  }
  functionOpenPage = (Name, value, ) => {

    console.log('Name', Name);

    if (Name == 'MyList') {

      AsyncStorage.getItem('USER_ID').then((value) => {

        if (value == null) {
          this.props.navigation.navigate('Login')
        }
        else {
          this.props.navigation.navigate(Name, { MIC: value })
        }
      })

    }
    else if (Name == 'MyPurchase') {
      AsyncStorage.getItem('USER_ID').then((value) => {

        if (value == null) {
          this.props.navigation.navigate('Login')
        }
        else {
          this.props.navigation.navigate(Name, { MIC: value })
        }
      })
    }
    else if (Name == 'MyRewards') {
      AsyncStorage.getItem('USER_ID').then((value) => {

        if (value == null) {
          this.props.navigation.navigate('Login')
        }
        else {
          this.props.navigation.navigate(Name, { MIC: value })
        }
      })
    }
    else if (Name == 'Notification') {
      AsyncStorage.getItem('USER_ID').then((value) => {

        if (value == null) {
          this.props.navigation.navigate('Login')
        }
        else {
          this.props.navigation.navigate(Name, { MIC: value })
        }
      })
    }
    else if (Name == 'Coupons') {
      AsyncStorage.getItem('USER_ID').then((value) => {

        if (value == null) {
          this.props.navigation.navigate('Login')
        }
        else {
          this.props.navigation.navigate(Name, { MIC: value })
        }
      })
    }
    else {
      this.props.navigation.navigate(Name, { MIC: value })
    }




  }



  functionChangeIndex = (Index) => {


    if (Index == 0) {

      this.setState({ FirstRow: true, SecondRow: false });
    }

    else {
      this.setState({ FirstRow: false, SecondRow: true });
    }


  }

  functionshowHeader = () => {
    return (
      <View
        style={{
          width: "100%",
          height: 20,
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row"
        }}>
        <Image
          style={{
            width: 10,
            height: 10,
            resizeMode: "contain",
            marginRight: 2
          }}
          source={this.state.FirstRow == true ? ActiveIcon : NonActiveIcon}
        />
        <Image
          style={{
            width: 10,
            height: 10,
            resizeMode: "contain",
            marginLeft: 2
          }}
          source={this.state.SecondRow == true ? ActiveIcon : NonActiveIcon}
        />
      </View>
    )
  }




  render() {
    const Modal = {
      names: this.state.names,
      Title: this.state.Title,
      Admin: this.state.Admin,
      SignIn: this.state.SignIn,
      CurrentIndx: this.state.CurrentIndx,
      Login: this.state.Login,
      UserRole: this.state.UserRole,



      //Redux

      ShowLoader: this.props.Loader,
      BannerList: this.props.Respone,

      functionOpenPage: this.functionOpenPage,
      functionOpenDrawer: this.functionOpenDrawer,
      functionChangeIndex: this.functionChangeIndex,
      functionshowHeader: this.functionshowHeader,
      FirstRow: this.state.FirstRow,
      SecondRow: this.state.SecondRow,

    };

    return <Home {...Modal} />;
  }
}



function MapToStateProps(state) {

  const { Loader, Errorr, Respone } = state.HomeReducer;

  return { Loader, Errorr, Respone };

}

export default connect(MapToStateProps, { GetBanner, GetItemLocationDescription,
   GetSelectedItemFromList,getAllRegion })(HomeContainer);