import React, { Component } from 'react';
import Details from './Details';
import { connect } from 'react-redux';
import { GetDesibytesDetail } from '../../action';



class DetailsContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      Title: 'Appetizers',
      Loader : false,
      List:[],
    }
   }

  componentWillMount() {
    
   var mTitel = this.props.navigation.getParam('Title');

   this.setState({Title : mTitel})
   this.props.GetDesibytesDetail(mTitel);

   // this.props.GetDesibytesDetail('Biryanis');
  }
  functionGoback = () => {
    this.props.navigation.navigate('Desibites')
  };



  render() {
    const Model = {
      Title: this.state.Title,


      //REDUX
      Loader : this.props.Detail_Loader,
      List : this.props.List_Response,


      functionGoback: this.functionGoback,
    }

    return <Details {...Model} />
  }
}

function mapToStateProps(state) {

  const { Detail_Loader, Errorr, List_Response } = state.DesibytesReducer;
  return { Detail_Loader, Errorr, List_Response };


}

export default connect(mapToStateProps, { GetDesibytesDetail })(DetailsContainer);