import React,{Component} from 'react';
import Desibites from './Desibites';
import {connect} from 'react-redux';
import {GetDesibytesApi} from '../../action';

 class DesibitesContainer extends Component
{

    constructor (props) {
        super(props)
        this.state = {
          Title: 'Desi Bites Menu',
          List:[],
          ShowLoader:true,
         
        }
      }


      componentWillMount()
      {
       
        this.props.GetDesibytesApi();
      }
      functionGoback = () => {
        this.props.navigation.goBack();
      };
      
      functionOpenPage=(Value, Title)=>{
        this.props.navigation.navigate(Value,{'Title' :Title});
      }


      render () {
        const Model = {
          Title: this.state.Title,
        


         //Redux
         ShowLoader : this.props.Loader,
         List : this.props.Respone,


          functionTabClick : this.functionTabClick,
          functionGoback : this.functionGoback,
          functionOpenPage : this.functionOpenPage,
        }

        return<Desibites {...Model}/>
}
}

function mapToStateProps(state)
{
 
  const {Loader,Errorr ,Respone}= state.DesibytesReducer;
  return {Loader, Errorr, Respone};


}

export default connect(mapToStateProps, {GetDesibytesApi})(DesibitesContainer);