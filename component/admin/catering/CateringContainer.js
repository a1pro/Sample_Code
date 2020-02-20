import React, { Component } from 'react';
import Catering from './Catering';
import { connect } from 'react-redux';
import { Get_CateringApi, Get_ActiveCateringApi ,} from '../../../action';


import MyListModel from '../../../model/mylist/MyListModel';
import { Alert } from 'react-native';

var didBlurSubscription="";
class CateringContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      Title: 'Caterings',
      Active: true,
      Completed: false,
      Summary: false,
      PageTitle: 'Active Caterings',
      SalesFilterValue: 'Month To Date',
      Show_SummaryLoader: false,
      Show_ActiveLoader: false,
      Activelist: [],
      CompleteList: [],
      List: [],
      isFetching: false,

    }

    didBlurSubscription = this.props.navigation.addListener(
      'willFocus',
      payload => {
        this.props.Get_CateringApi('monthtodate');
        this.props.Get_ActiveCateringApi('');
      }
    );


  }

  componentWillUnmount() {
    // Remove the listener when you are done
    didBlurSubscription.remove();
  }
  componentWillMount() {
  
   
  }
  functionGoback = () => {
    this.props.navigation.goBack();
  };
  functionChangeIndex = (Index) => {


    if (Index == 0) {

      this.setState({ Active: true, Completed: false, Summary: false, PageTitle: 'Active Caterings' })
    }
    else if (Index == 1) {
      this.setState({ Active: false, Completed: true, Summary: false, PageTitle: 'Completed Caterings' })
    }
    else {
      this.setState({ Active: false, Completed: false, Summary: true, PageTitle: 'Caterings Summary' })
    }


  }


  functionShowDelete = () => {
    Alert.alert(
      '',
      'Are you sure. You want to delete it? ',
      [

        { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
        { text: 'OK', onPress: () => console.log('OK Pressed') },
      ],
      { cancelable: false }
    )
  }

  functionOpenpage = (value) => {
    this.props.navigation.navigate(value);
  }

  functionPercatage = (TotalSales, Value) => {
    var mPer = Value * 100 / TotalSales;
    var mTotal = parseFloat(mPer.toFixed(2));
    return mTotal + '%';
  }

  functionListFilter = (idx, value) => {

    if (idx == 0) {
      this.setState({ SalesFilterValue: value })
      this.props.Get_CateringApi('monthtodate');
    }
    else if (idx == 1) {
      this.setState({ SalesFilterValue: value })
      this.props.Get_CateringApi('lastmonth');

    }

    else if (idx == 2) {
      this.setState({ SalesFilterValue: value })
      this.props.Get_CateringApi('lastyear');
    }
    else if (idx == 3) {
      this.setState({ SalesFilterValue: value })
      this.props.Get_CateringApi('yeartodate');
    }
  }



  functionOpenDetailPage = (Value, Item) => {
    this.props.navigation.navigate(Value, { ITEM: Item });
  }

  onRefresh = () => {
  
    this.props.Get_ActiveCateringApi('');
  }
  render() {
    const Model = {
      Title: this.state.Title,
      Active: this.state.Active,
      Completed: this.state.Completed,
      Summary: this.state.Summary,
      PageTitle: this.state.PageTitle,
      SalesFilterValue: this.state.SalesFilterValue,
      isFetching: this.state.isFetching,


      //REDUX
      Show_SummaryLoader: this.props.Summary_Loader,
      List: this.props.Catering_Summary,
      Show_ActiveLoader: this.props.Active_Loader,
      Activelist: this.props.Active_List,
      CompleteList: this.props.Complete_list,

      functionGoback: this.functionGoback,
      functionChangeIndex: this.functionChangeIndex,
      functionShowDelete: this.functionShowDelete,
      functionOpenpage: this.functionOpenpage,
      functionPercatage: this.functionPercatage,
      functionListFilter: this.functionListFilter,
      functionOpenDetailPage: this.functionOpenDetailPage,
      onRefresh: this.onRefresh,
    }

    return <Catering {...Model} />
  }
}



function mapToStateProps(state) {
  const { Summary_Loader, Catering_Summary, Active_Loader, Active_List, Complete_list } = state.CateringReducer;
  return { Summary_Loader, Catering_Summary, Active_Loader, Active_List, Complete_list }



}
export default connect(mapToStateProps, { Get_CateringApi, Get_ActiveCateringApi })(CateringContainer);