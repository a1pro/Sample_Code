import React, { Component } from 'react';
import ProductNotification from './ProductNotification';
import { View } from 'react-native';
import {connect} from 'react-redux';
import {getAllRemiderProduct,shortReminderProduct, reverseSort, deleteProdNot} from '../../action';




 class ProductNotificationContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      Title: 'Product Reminders',
      ShowLoader:false,
      ResponeList:[],
      selectOpt: 'A to Z',

    },
    this.props.navigation.addListener(
      'willFocus',
      payload => {
        this.setState({ selectOpt: 'A to Z' });
       this.props.getAllRemiderProduct();
      }
    );
  }
  componentDidMount()
  {
    this.props.getAllRemiderProduct();
  }
  functionGoback = () => {
    this.props.navigation.goBack();
  };
  functionShort = (Index, Value) => {
    if (Index == 0) {
      //this.props.GetShort('AtoZ');
      // alert('NoteSort');
      this.props.getAllRemiderProduct()
      this.setState({ selectOpt: 'A to Z' });
    }
    else if (Index == 1) {
      // alert('Sort');
     this.props.reverseSort();
     this.setState({ selectOpt: 'Z to A' });
    }
  }

  openDetailPage = (itemData) => {
    // alert('Ok...');
    this.props.navigation.navigate('ProductDetails', { ITEMNUMBER: itemData.Itemnum });
  }

  deleteProdMessage = (e) => {
    // alert(JSON.stringify(e));
    // alert('Working on it...');
    this.props.deleteProdNot(e.reminderId);
  }

  render() {
    const Model = {
      Title: this.state.Title,
      List: this.state.List,


      //REDUX
      ShowLoader : this.props.Loader,
      ResponeList : this.props.Response,
      selectOpt: this.state.selectOpt,
      functionGoback: this.functionGoback,
      functionShort : this.functionShort,
      openDetailPage: this.openDetailPage,
      deleteProdMessage: this.deleteProdMessage,
    }
    return <ProductNotification {...Model} />
  }
}


function mapToStateProps(state)
{
  const {Loader, Response}= state.MyAccountReducer;
  return {Loader,Response}
}

export default connect(mapToStateProps, {getAllRemiderProduct,shortReminderProduct, reverseSort,
  deleteProdNot})(ProductNotificationContainer);