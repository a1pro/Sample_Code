import React,{Component} from 'react';
import OrderOnline from './OrderOnline';

export default class OrderOnlineContainer extends Component
{

    constructor (props) {
        super(props)
        this.state = {
          Title: 'Desi Bites Online Ordering',
          visible: true 
        }
      }
      functionGoback = () => {
        this.props.navigation.goBack();
      };
      hideSpinner =()=> {
        this.setState({ visible: false });
      }
      render () {
        const Model = {
          Title: this.state.Title,
          visible : this.state.visible,
          hideSpinner : this.hideSpinner,
          functionGoback : this.functionGoback,
        }

        return<OrderOnline {...Model}/>
}
}