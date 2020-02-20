import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';
import AccountInfo from './AccountInfo';
import LanguageModel from "../../model/LanguageModel";
import Monthmodel from "../../model/Monthmodel";
import DaysModel from "../../model/DaysModel";
import { connect } from 'react-redux';
import { updateProfile,getAllRegion } from '../../action';
class AccountInfoContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      Title: 'My Account Info',
      MM: "MM",
      DD: "DD",
      SelectedLanguage: "Select Region",
      LanguageList: [],
      MonthList: [...Monthmodel],
      DaysList: [...DaysModel],
      Fname: '',
      Lname: '',
      Email: '',
      ShowLoader: false,
      Dialog: {
        MonthDialogVisible: false,
        DaysDialogVisible: false,
        LanguageVisible: false
      },
    }

    this.props.navigation.addListener(
      'willFocus',
      payload => {

     
        this.props.getAllRegion();
      }
    );
  }
  componentWillMount() {
    AsyncStorage.getItem('EMAIL').then((value) => {
      this.setState({ Email: value })
    })
    AsyncStorage.getItem('NAME').then((value) => {
      this.setState({ Fname: value })
    })
    AsyncStorage.getItem('LAST_NAME').then((value) => {
      this.setState({ Lname: value })
    })
    AsyncStorage.getItem('REGION').then((value)=>{

      this.setState({SelectedLanguage : value})
    })
    AsyncStorage.getItem('DD').then((value)=>{
      this.setState({DD : value})
    })
    AsyncStorage.getItem('MM').then((value)=>{
      this.setState({MM : value})

      console.log('MM',value);
      
    })
   
  }

  functionGoback = () => {
    this.props.navigation.goBack();


  };

  functionShowDialog = (Name, Value) => {
    console.log("Name", Name);

    var dialog = this.state.Dialog;
    dialog[Name] = Value;
    this.setState({ ...this.state.Dialog, dialog });
  };
  functionOpenPage = value => {
    this.props.navigation.navigate(value);
  };
  functionSetLanguage = value => {
    this.setState({ SelectedLanguage: value });
    var dialog = this.state.Dialog;
    dialog["LanguageVisible"] = false;
    this.setState({ ...this.state.Dialog, dialog });
  };
  functionSetMonth = value => {
    this.setState({ MM: value });
    var dialog = this.state.Dialog;
    dialog["MonthDialogVisible"] = false;
    this.setState({ ...this.state.Dialog, dialog });
  };
  functionSetDays = value => {
    this.setState({ DD: value });
    var dialog = this.state.Dialog;
    dialog["DaysDialogVisible"] = false;
    this.setState({ ...this.state.Dialog, dialog });
  };
  functionSetFirstname = (value) => {

    this.setState({ Fname: value })

  }
  functionSetLastname = (value) => {

    this.setState({ Lname: value })

  }
  functionSubmit = () => {

    const { Fname, Lname, DD, MM, SelectedLanguage } = this.state;

    if (Fname == '') {
      alert('Please enter First name')

    }
    else if (Lname == '') {
      alert('Please enter Last name')
    }
    else if (DD == 'DD') {
      alert('Please select DOB')
    }
    else if (MM == 'MM') {
      alert('Please select DOB')
    }
    else if (SelectedLanguage == 'Select Region') {
      alert('Please select Region')
    }

    else {
      this.props.updateProfile(this.state)

    }


  }
  render() {

    const Model = {
      Title: this.state.Title,
      MM: this.state.MM,
      DD: this.state.DD,
      Dialog: this.state.Dialog,
      LanguageList: this.state.LanguageList,
      SelectedLanguage: this.state.SelectedLanguage,
      Fname: this.state.Fname,
      Lname: this.state.Lname,
      Email: this.state.Email,
      MonthList: this.state.MonthList,
      DaysList: this.state.DaysList,


      //REDUX
      ShowLoader : this.state.Loader,
      LanguageList : this.props.Region,


      functionGoback: this.functionGoback,
      functionShowDialog: this.functionShowDialog,
      functionOpenPage: this.functionOpenPage,
      functionSetLanguage: this.functionSetLanguage,
      functionSetMonth: this.functionSetMonth,
      functionSetDays: this.functionSetDays,
      functionSetFirstname: this.functionSetFirstname,
      functionSetLastname: this.functionSetLastname,
      functionSubmit: this.functionSubmit,

    }
    return <AccountInfo {...Model} />
  }
}

function mapToStateProps(state)
{
  const {Loader} = state.MyAccountReducer;
  const {  Region } = state.loginReducer;

  return {Loader,Region}
}

export default connect(mapToStateProps, { updateProfile ,getAllRegion})(AccountInfoContainer);