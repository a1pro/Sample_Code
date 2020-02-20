import React,{Component} from 'react';
import MyRewards from './MyRewards';
import {connect} from 'react-redux';
import {getMyRewards} from '../../action';


class MyRewardsContainer extends Component
{

    constructor (props) {
        super(props)
        this.state = {
          Title: 'My Rewards',
          ShowLoader: false,
          Response:[],
          Gift_Number:'',
          Gift_Balance :'',
          Bonus_Point :'',
        }
      }

      componentDidMount()
      {
        this.props.getMyRewards();
      }
      functionGoback = () => {
        this.props.navigation.goBack();
      };
      functionOpenPage = value => {
        this.props.navigation.navigate(value);
      };
      render () {
        const Model = {
          Title: this.state.Title,
          

          //REDUX
          ShowLoader : this.props.Loader,
          Response : this.props.MyRewradsResponse,
          Gift_Number : this.props.GCM_Number,
          Gift_Balance : this.props.GIFT_Balance,
          Bonus_Point : this.props.Bonuspoint,

          
          
          functionGoback : this.functionGoback,
          functionOpenPage: this.functionOpenPage,



        }

        return<MyRewards {...Model}/>
}
}


function mapToState(state)
{

  const {GCM_Number,GIFT_Balance, Bonuspoint,Loader}= state.MyRewardsTransactionReducer;
  
  console.log('GCM_Number',GCM_Number);
  
  return {GCM_Number,GIFT_Balance,Bonuspoint, Loader }

}

export default  connect(mapToState, {getMyRewards})(MyRewardsContainer);