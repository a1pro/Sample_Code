import React, { Component } from 'react';
import {AsyncStorage} from 'react-native';
import MyPurchase from './MyPurchase';
import { GetMyPurchaseApi } from '../../action';
import { connect } from 'react-redux';


class MyPurchaseContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      Title: 'My Purchases',
      List: [],
      ShowLoader: true,
      QrCodeVisible: false,
      QrCode:'',

    }
  }

  componentWillMount() {
    AsyncStorage.getItem('USER_ID').then((value)=>{
      this.props.GetMyPurchaseApi(value);
    });
  }

  functionGoback = () => {
    this.props.navigation.goBack();
  }

  functionOpenPage = (value, InvoiceNum) => {
    this.props.navigation.navigate(value, { 'IN_NUMBER': InvoiceNum })
  }

  functionShowQrCode = (value, invoicenum) => {
    this.setState({QrCodeVisible : value, QrCode : invoicenum})
  }

  render() {
    const Model = {
      Title: this.state.Title,
      QrCodeVisible: this.state.QrCodeVisible,
      QrCode : this.state.QrCode,
      //REDUX
      List: this.props.Respone,
      ShowLoader: this.props.Loader,
      functionGoback: this.functionGoback,
      functionOpenPage: this.functionOpenPage,
      functionShowQrCode : this.functionShowQrCode,

    }

    return <MyPurchase {...Model} />
  }
}

function mapToStateProps(state) {
  const { Loader, Errorr, Respone, } = state.MyPurchaseReducer;
  return { Loader, Errorr, Respone, }
}

export default connect(mapToStateProps, { GetMyPurchaseApi })(MyPurchaseContainer);