import React,{Component} from 'react';
import Specials from './Specials';
import {getSpecial} from '../../../action';
import {connect} from 'react-redux';

 class SpecialsContainer extends Component
{

    constructor (props) {
        super(props)
        this.state = {
          Title: 'Specials',
          Loader : true,
          List:[],

        }
      }



      componentDidMount()
      {
        this.props.getSpecial();
      }
      functionGoback = () => {
        this.props.navigation.goBack();
      };

      functionOpenPage=(Page, Image,Name ,Des1, ExpDate)=>{
        this.props.navigation.navigate(Page, {'IMAGE':Image, 'NAME': Name, 'DES':Des1, 'DATE':ExpDate});

      }
      render () {
        const Model = {
          Title: this.state.Title,
           Loader : this.props.Loader,
           List : this.props.Respone,

          functionGoback : this.functionGoback,
          functionOpenPage : this.functionOpenPage,
        }

        return<Specials {...Model}/>
}
}


function mapToStateProps(state){
  const {Loader, Errorr, Respone} = state.SpecialReducer;

  return {Loader,Errorr ,Respone};

}

export default connect(mapToStateProps, {getSpecial})(SpecialsContainer);