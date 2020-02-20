import React, { Component } from 'react';
import Details from './Details';
import { connect } from 'react-redux';
import { GetCustomerDetail } from '../../../action';

class CustomerDetails extends Component {

  constructor(props) {
    super(props)
    this.state = {
      Title: 'Customer Detail',
      List: [],
      Loader : false,
    }
  }

  componentWillMount() {

    var USER_ID= this.props.navigation.getParam('USER_ID');

   
    this.props.GetCustomerDetail(USER_ID)

  }
  functionGoback = () => {
    this.props.navigation.goBack();
  };

  render() {
    const Model = {
      Title: this.state.Title,
     

      functionGoback: this.functionGoback,
      //REDUX
      List: this.props.Detail_Response,
      Loader : this.props.Detail_Loader,

    }

    return <Details {...Model} />
  }
}
function mapToStateProps(state){

  const {Detail_Loader, Detail_Response} = state.CustomerViewReducer;
  return { Detail_Loader, Detail_Response}
}


export default connect(mapToStateProps, { GetCustomerDetail })(CustomerDetails);
