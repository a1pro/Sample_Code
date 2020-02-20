import React, { Component } from 'react';
import CustomerView from './CustomerView';
import { connect } from 'react-redux';
import { HitSearchApi, RessetHitApi ,GetCustomerDetail,GetLocalSearchAPI,GetPreviousResult} from '../../../action';

class CustomerContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      Title: 'Customer 360° View',
      Search: '',
      List: [],
      Detail_List:[],
      PreviousSearch:'',
    }
  }
  functionGoback = () => {
    this.props.navigation.goBack();
  };


  functionSearch = (Value) => {


    this.setState({ Search: Value.text });


    if (Value.text.length == 3)
    {

      var mCheck = this.state.PreviousSearch;
      if(mCheck !== Value.text)
      {
        this.setState({PreviousSearch  : Value.text})
        this.props.HitSearchApi(Value.text);
      }
      else
      {
this.props.GetPreviousResult();
      }
     
    }
    else if(Value.text.length >3)
    {
      this.props.GetLocalSearchAPI(Value.text);
    }
    else if (Value.text.length == 0) 
    {
      this.props.RessetHitApi();
    }

  }


  functionOpenPage = (Value, UserId) => {

    console.log('UserId',UserId);
    
   
    this.props.navigation.navigate(Value, { PHONE_NUM: UserId });
  }

  functionOpenDetail=(UserId) =>{
    this.props.GetCustomerDetail(UserId)
  }

  componentWillUnmount() {
    this.props.RessetHitApi();
  }

  render() {
    const Model = {
      Title: this.state.Title,
      Search: this.state.Search,

      functionGoback: this.functionGoback,
      functionSearch: this.functionSearch,
      functionOpenPage: this.functionOpenPage,
      functionOpenDetail : this.functionOpenDetail,



      //REDUX
      Detail_List : this.props.Detail_Response,
      List: this.props.Local_Data,
      Loader: this.props.Loader,


    }

    return <CustomerView {...Model} />
  }
}


function mapToStateProps(state) {

  const { Loader, Response ,Detail_Response, Local_Data} = state.CustomerViewReducer;
  return { Loader, Response, Detail_Response , Local_Data}
}

export default connect(mapToStateProps, { HitSearchApi, RessetHitApi,GetCustomerDetail,
  GetLocalSearchAPI, GetPreviousResult })(CustomerContainer);