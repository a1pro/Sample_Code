import React,{Component} from 'react';
import RewardsTransaction from './RewardsTransaction';
import {connect} from 'react-redux';
import {GetMyRewardsTransactionApi} from '../../action';

class RewardsTransactionContainer  extends Component
{

    constructor (props) {
        super(props)
        this.state = {
          Title: 'Rewards Transactions',
          List :[],
          ShowLoader:false,
        }
      }

      componentDidMount()
      {

        this.props.GetMyRewardsTransactionApi(this.props.GCM_Number);
       
      }

      functionGoback = () => {
        this.props.navigation.goBack();
      };
      render () {
        const Model = {
          Title: this.state.Title,
          

          //REDUX
          List : this.props.Response,
          ShowLoader : this.props.Loader,
    
          functionGoback : this.functionGoback,
        }

        return<RewardsTransaction {...Model}/>
}
}

function mapToStateProps(state)
{
  const {Loader,Response,GCM_Number }= state.MyRewardsTransactionReducer;

 return {Loader, Response,GCM_Number}
  
}

export default  connect (mapToStateProps, {GetMyRewardsTransactionApi})(RewardsTransactionContainer)