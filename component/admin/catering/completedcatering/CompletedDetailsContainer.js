import React, { Component } from 'react';
import CompleteDetails from './CompleteDetails';

import { Alert, Platform,ActionSheetIOS } from 'react-native';
import {Theme} from '../../../../config';
import { connect } from 'react-redux';
import { GetCateringItem, PaymentUpdate} from '../../../../action';


class CompleteDetailsContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      Title: 'Catering Details',
      CurrentDate: '',
      PaymentCurrentDate: '',
      PaymentPicker_Visible: false,

      Selected_Hour: '',
      Selected_Mintues: '',
      Selected_AMPM: '',
      SelectedShapper: '',
      Selected_Deliver: '',
      Payment_Type: '',
      Payment_Amount: '0',
      Payment_Date: '',
      Notes: '',
      Name: 'Test Kumar',
      Phone: '12345678955',
      Cost: '123',
      Email: 'Test@gmail.com',
      Address: '',
      CateringCount: '12',
      Item_List: '',

      Selected_CateringID:'',
      ShowPayment_Loader: false,
    }
  }


  componentDidMount() {
    var ITEM = this.props.navigation.getParam('ITEM');
    var NAME = ITEM.Name;
    var PHONE = ITEM.Phone;
    var COST = ITEM.Cost.replace('$', '');
    var DATE = ITEM.FullDate;
    var TIME = ITEM.Time;
    var SHAPPER = ITEM.Shapper;
    var DELIVER = ITEM.Deliver;
    var EMAIL = ITEM.Email;
    var PAYMENTTYPE = ITEM.Paymenttype;
    var NOTES = ITEM.Notes;
    var PAYMENTAMOUNT = ITEM.Paymentamount;
    var ADDRESS = ITEM.Address;
    var PAYMENTDATE = ITEM.PaymentDate;

    

  

    var Cateringid= ITEM.Cateringid;


    let time = TIME.split(':');
    let mHour = time[0];
    let mintue = time[1];
    let filterMintue = mintue.split(" ");
    let mintues = filterMintue[0];
    let ampm = filterMintue[1];



    this.setState({
      Name: NAME, Phone: PHONE, Cost: COST, CurrentDate: DATE, Selected_Hour: mHour, Selected_Mintues: mintues,
      Selected_AMPM: ampm, SelectedShapper: SHAPPER, Selected_Deliver: DELIVER, Email: EMAIL, Payment_Type: PAYMENTTYPE,
      Notes: NOTES, Payment_Amount: PAYMENTAMOUNT, Address :ADDRESS, Payment_Date :PAYMENTDATE, Selected_CateringID : Cateringid
    });

    var today = new Date();

    date = today.getFullYear() + "-" + parseInt(today.getMonth() + 1) + "-" + today.getDate();

    this.setState({ PaymentCurrentDate: date });

     this.props.GetCateringItem(ITEM.Cateringid);

  }

  functionGoback = () => {
    this.props.navigation.goBack();
  };



  functionSetPaymentDate = (Value) => {
    this.setState({ Payment_Date: Value.date })
  }



  functionSetPaymentAmount = (value) => {

    this.setState({ Payment_Amount: value.text })
  }

  functionShowPaymentType = () => {

    if (Platform.OS == 'ios') {
      ActionSheetIOS.showActionSheetWithOptions(
        {
          options: ['Cancel', 'Cash', 'Check', 'Credit'],
          // destructiveButtonIndex: 1,
          cancelButtonIndex: 0,
          tintColor: Theme.PRIMARY_COLOR
        },
        (buttonIndex) => {
          if (buttonIndex === 1) {
            this.setState({ Payment_Type: 'Cash' })
          }
          else if (buttonIndex === 2) {
            this.setState({ Payment_Type: 'Check' })
          }
          else if (buttonIndex === 3) {
            this.setState({ Payment_Type: 'Credit' })
          }

        },
      );
    }
    else {
      this.setState({ PaymentPicker_Visible: true })
    }
  }
  functionPaymentDialogHide = () => {
    this.setState({ PaymentPicker_Visible: false })
  }

  functionSetPaymentType = (text) => {
    this.setState({ Payment_Type: text, PaymentPicker_Visible: false })
  }


  functionPaymentUpdate=()=>{

    console.log('functionPaymentUpdate');
    
    const {Payment_Amount, Payment_Type} = this.state;

    if(Payment_Amount == '')
    {
      alert('Please enter Payment amount')
    }
    else if(Payment_Type == '')
    {
      alert('Please select Payment Type')
    }
    else
    {

      this.props.PaymentUpdate(this.state);
    }


  }
  render() {
    const Model = {
      Title: this.state.Title,
      CurrentDate: this.state.CurrentDate,
      PaymentCurrentDate: this.state.PaymentCurrentDate,
      Name: this.state.Name,
      Phone: this.state.Phone,
      Cost: this.state.Cost,
      Selected_Hour: this.state.Selected_Hour,
      Selected_Mintues: this.state.Selected_Mintues,
      Selected_AMPM: this.state.Selected_AMPM,
      SelectedShapper: this.state.SelectedShapper,
      Selected_Deliver: this.state.Selected_Deliver,
      Email: this.state.Email,
      Address: this.state.Address,
      Payment_Type: this.state.Payment_Type,
      Payment_Amount: this.state.Payment_Amount,
      Payment_Date: this.state.Payment_Date,
      PaymentPicker_Visible: this.state.PaymentPicker_Visible,


      //REDUX
      Item_List: this.props.Catering_ListItem,
      ShowPayment_Loader : this.props.Payment_loader,



      functionGoback: this.functionGoback,
      functionSetPaymentDate: this.functionSetPaymentDate,
      functionSetPaymentAmount: this.functionSetPaymentAmount,
      functionShowPaymentType: this.functionShowPaymentType,
      functionPaymentDialogHide: this.functionPaymentDialogHide,
      functionSetPaymentType: this.functionSetPaymentType,
      functionPaymentUpdate : this.functionPaymentUpdate,

    }

    return <CompleteDetails {...Model} />
  }
}
function mapToStateProps(state) {
  const { Catering_List_Loader, Catering_ListItem ,Payment_loader} = state.CateringReducer;

  return { Catering_List_Loader, Catering_ListItem ,Payment_loader};

}

export default connect(mapToStateProps, { GetCateringItem,PaymentUpdate, })(CompleteDetailsContainer);
