import React, { Component } from 'react';
import Zello from './Zello';
import {
  GetSearchProduct, ResetApi, GetLocalSearch, SearchClear, ListHide, GetCommonWordApi,
  ResetSearchText
} from '../../action';
import { connect } from 'react-redux';


class ZelloContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      Title: 'Stock Updates',
      ShowLoader: false,
      List: [],
      SearchTag: '',
      PreviousSearch: '',
      ErrorMessage: '',
    }
  }

  componentWillMount()
  {
     this.props.ResetApi();
  }
  functionGoback = () => {
    this.props.navigation.goBack();
  };

  functionSearch = Name => {

    this.setState({ SearchTag: Name })
    if (Name == 2) {
      this.props.ListHide();
    }
    else if (Name.length >= 3) {
      var mCheck = this.state.PreviousSearch;
      console.log('mCheck', mCheck);
      if (mCheck !== Name) {
        this.setState({ PreviousSearch: Name });
        this.props.GetCommonWordApi(Name);

      }
      else {
        this.props.GetCommonWordApi(Name);
      }
    }
    else if (Name.length > 3) {
      this.props.GetLocalSearch(Name)
    }
    else if (Name.length == 0) {
      this.props.ResetApi();

    }


  };
  functionOpenPage=(Value, Itemnum)=>{
    this.props.navigation.navigate(Value , {ITEMNUMBER :Itemnum})
  }
  render() {
    const Model = {
      Title: this.state.Title,
      SearchTag: this.state.SearchTag,


      //REDUX
       ShowLoader: this.props.Loader,
       List: this.props.Local_Data,
      // ErrorMessage: this.props.ErrorMsg,


      functionGoback: this.functionGoback,
      functionSearch: this.functionSearch,
      functionOpenPage : this.functionOpenPage,
    }

    return <Zello {...Model} />
  }
}
function mapToStateProps(state) {
  const { Loader, Local_Data, ErrorMsg, ProductSearch } = state.ProductSearchReducer;
  return { Loader, Local_Data, ErrorMsg, ProductSearch };

}
export default connect(mapToStateProps, {
  GetSearchProduct, ResetApi, GetLocalSearch, SearchClear, ListHide, GetCommonWordApi,
  ResetSearchText
})(ZelloContainer);