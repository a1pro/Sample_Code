import React, { Component } from 'react';
import MapLocation from './MapLocation';


export default class MapContainer extends Component {

  constructor(props) {
    super(props)

    this.State = {
      ProductId: '',
      Title: '',
    }
  }


  componentWillMount() {


    var mProductId = this.props.navigation.getParam('PRODUCT_ID');
    var mName = this.props.navigation.getParam('NAME');
    this.setState({ ProductId: mProductId, Title: mName });


    console.log('mName',mName);
    console.log('mProductId',mProductId);
    
  }
  functionGoback = () => {
    this.props.navigation.goBack();
  };

  render() {
    const Model = {

      ProductId: this.state.ProductId,
      Title: this.state.Title,


      functionGoback: this.functionGoback,
    }
    return <MapLocation {...Model} />
  }

}