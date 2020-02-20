import React,{Component} from 'react';
import StorePickup from './StorePickup';

export default class PickupContainer extends Component
{

    constructor (props) {
        super(props)
        this.state = {
          Title: 'Store Pickup'
        }
      }
      functionGoback = () => {
        this.props.navigation.goBack();
      };
      render () {
        const Model = {
          Title: this.state.Title,
    
          functionGoback : this.functionGoback,
        }

        return<StorePickup {...Model}/>
}
}