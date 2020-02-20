import React, {Component} from 'react';
import About from './About';
export default class AboutContainer extends Component
{

constructor(props)
{
    super(props)
    this.state={
        Title:'About Us',
    }
}

    functionGoback = () => {
        this.props.navigation.goBack();

       
      };
    
      functionOpenPage = value => {
        this.props.navigation.navigate(value);
      };
    render()
    {

        const Model={
            Title : this.state.Title,
            
            functionGoback : this.functionGoback,
            functionOpenPage : this.functionOpenPage,


        }
        return <About {...Model}/>
    }
}