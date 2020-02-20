import React,{Component} from 'react';
import Store from './Store';
import ImageList from '../../model/slider/SliderImage';

export default class StoreContainer extends Component
{

    constructor (props) {
        super(props)
        this.state = {
          Title: 'Store Info',
          List:[...ImageList]
         
        }
      }
      functionGoback = () => {
        this.props.navigation.goBack();
      };
      render () {
        const Model = {
          Title: this.state.Title,
          List : this.state.List,
         
    
          functionGoback : this.functionGoback,
        }

        return<Store {...Model}/>
}
}