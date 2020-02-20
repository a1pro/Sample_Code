import React, {Component} from 'react';
import EmailInfo from './EmailInfo';
export default class EmailInfoContainer extends Component
{

constructor(props)
{
    super(props)
    this.state={
        Title:'Email Preferences',
        Toggle:{
            Produce:true,
            Sales:true,
            Coupons: true,
            Food:true,
            Rewards:true,
            Store:true,
         }
       
    }
}

    functionGoback = () => {
        this.props.navigation.goBack();

       
      };
    
      
      functionOpenPage = value => {
        this.props.navigation.navigate(value);
      };


      functionToggle=(Name,  Value)=>{
        var mToggleStatus = this.state.Toggle;
        mToggleStatus[Name]= Value;
        this.setState({...this.state.Toggle, mToggleStatus})
     

  }
    render()
    {

        const Model={
            Title : this.state.Title,
            Toggle : this.state.Toggle,

            functionToggle : this.functionToggle,
            functionGoback : this.functionGoback,
           
            functionOpenPage : this.functionOpenPage,

        }
        return <EmailInfo {...Model}/>
    }
}