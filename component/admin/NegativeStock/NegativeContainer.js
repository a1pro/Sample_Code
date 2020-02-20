import React, { Component } from 'react';
import Negative from './Negative';
import MyListModel from '../../../model/mylist/MyListModel';

import { connect } from 'react-redux';
import { GetNegativeStockApi, GetZeroDataList, GetZeroDataListFilter, SortByItemNameNS } from '../../../action';

class NegativeContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      Title: 'Negative Stocks',
      List: [],
      ZeroDataList: [],
      ShowLoader: false,
      neagtiveListPage: true,
      zeroMovement: false,
      defaultFilter: '180'
    }
  }

  componentDidMount() {
    this.props.GetNegativeStockApi();
    this.props.GetZeroDataList(this.state.defaultFilter);
  }

  functionGoback = () => {
    this.props.navigation.goBack();
  };

  functionOpenPage=(Value, Itemnum)=>{
    this.props.navigation.navigate(Value , {ITEMNUMBER :Itemnum})
  }

  functionChangeIndexNeg = (Index) => {
    if(Index == 0)
    {
      this.setState({ neagtiveListPage : true, zeroMovement : false })
      this.setState({ Title: 'Negative Stocks' })
    }
    else
    {
      this.setState({ neagtiveListPage : false, zeroMovement :true})
      this.setState({ Title: 'Zero Movement' })
    }
  }

  functionListFilter = (idx, value) => {
    this.setState({ defaultFilter: value });
    this.props.GetZeroDataList(value);
  }

  functionListFilterList = (idx, value, totalData) => {
    if(value === 'Item Name') {
      this.props.GetNegativeStockApi();
    }
    if(value === 'Department') {
      this.props.SortByItemNameNS(totalData);
    }
  }

  render() {
    const Model = {
      Title: this.state.Title,
      neagtiveListPage: this.state.neagtiveListPage,
      zeroMovement: this.state.zeroMovement,
      defaultFilter: this.state.defaultFilter,
      //REDUX
      ShowLoader: this.props.Loader,
      List: this.props.Response,
      ZeroDataList: this.props.ZeroListResponse,
      functionGoback: this.functionGoback,
      functionOpenPage : this.functionOpenPage,
      functionChangeIndexNeg: this.functionChangeIndexNeg,
      functionListFilter: this.functionListFilter,
      functionListFilterList: this.functionListFilterList,
    }

    return <Negative {...Model} />
  }
}



function mapToStateProps(state) {
  const { Loader, Response, ZeroListResponse } = state.NegativeStockReducer;

  console.log('Response', Response);

  return { Loader, Response, ZeroListResponse }
}

export default connect(mapToStateProps, { GetNegativeStockApi, GetZeroDataList, GetZeroDataListFilter, SortByItemNameNS })(NegativeContainer)