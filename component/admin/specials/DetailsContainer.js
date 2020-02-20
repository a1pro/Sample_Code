import React,{Component} from 'react';
import SpecialDetails from './SpecialDetails';

export default class DetailsContainer extends Component
{
    constructor (props) {
        super(props)
        this.state = {
          Title: 'Specials Detail',
          Loader : true,
          Name:'',
          Description:'',
          ImgaeSource:'',
          ExpDate:'',
        

        }
        this.willBlurListener = this.props.navigation.addListener('willFocus', () => {
         
         var Source=  this.props.navigation.getParam('IMAGE','');
         var mName= this.props.navigation.getParam('NAME', '');
         var mDes = this.props.navigation.getParam('DES', '');
         var mDate = this.props.navigation.getParam('DATE', '');
         this.setState({ImgaeSource :Source, Name :mName, Description : mDes, ExpDate :mDate});
       
        })
      }
      functionGoback = () => {
        this.props.navigation.goBack();
      };

    render()
    {

        const Model={
            
            Title: this.state.Title,
            Name : this.state.Name,
            Description : this.state.Description,
            ExpDate : this.state.ExpDate,
            Loader : this.state.Loader,
            ImgaeSource : this.state.ImgaeSource,
            functionGoback: this.functionGoback,

        }
        return<SpecialDetails {...Model}/>
    }
}