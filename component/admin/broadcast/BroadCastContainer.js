import React,{Component} from 'react';
import BroadCast from './BroadCast';
import {connect} from 'react-redux';
import {getAllRegion,getBroadcastValue,getNotificationType} from '../../../action';

 class BroadCastContainer extends Component
{

    constructor (props) {
        super(props)
        this.state = {
          Title: 'Broadcast',
          Employees : true,
          Customer: false,
          PageTitle:'Employees',
          RegionList:[],
          ValueList:[],
          NotificationTypeList:[],
          SELECTEDREGION:'',
          SELECTEDVALUE:'',
          SELECTED_TYPE:'',
          RadioGroup:{
            AllCustomer:true,
            Region:false,
            Value:false,

          },

          EmployeTitle:'',
          EmployeMeg:'',
        }
      }
      componentWillMount()
      {
        this.props.getAllRegion();
        this.props.getBroadcastValue();
        this.props.getNotificationType();
      }
      functionGoback = () => {
        this.props.navigation.goBack();
      };
      functionChangeIndex=(Index)=>{


        if(Index == 0)
        {

          this.setState({Employees : true, Customer : false, PageTitle :'Employees'})
        }
        else
        {
          this.setState({Employees : false, Customer :true, PageTitle :'Customers'})
        }

        console.log('Index',Index);
        
      }

      functionRadioGruop=(Value)=>{

        var mGroup= this.state.RadioGroup;
        
        console.log('functionRadioGruop');
        

        switch(Value)
        {
          case 'ALLCUSTOMER' :
          
         
          mGroup['AllCustomer']=true;
          mGroup['Region'] = false;
          mGroup['Value']= false;
          this.setState({...this.state.RadioGroup, mGroup, SELECTEDREGION :'', SELECTEDVALUE :''})

          break;

          case 'REGION' :

          this.setState({RegionList : this.props.RegionList, ValueList :[],SELECTEDREGION :'', SELECTEDVALUE :''})
          mGroup['AllCustomer']=false;
          mGroup['Region'] = true;
          mGroup['Value']= false;
          this.setState({...this.state.RadioGroup, mGroup,  })
          break;
          case 'VALUE':

          this.setState({RegionList : [], ValueList : this.props.Value})
          mGroup['AllCustomer']=false;
          mGroup['Region'] = false;
          mGroup['Value']= true;
          this.setState({...this.state.RadioGroup, mGroup, SELECTEDREGION :'', SELECTEDVALUE :''})
          break;

        }
      }

      functionSelectedRegion=(value)=>{
          
        this.setState({SELECTEDREGION :value, SELECTEDVALUE :''});

       
        
      }
      functionSelectedValue =(value)=>{
        this.setState({SELECTEDREGION :'', SELECTEDVALUE : value});
      }

      functionSelectedNotificationType =(value)=>{
 
        this.setState({SELECTED_TYPE :value});
      }

      functionsetEmployeTitle=(value)=>{
        this.setState({EmployeTitle : value})
      }

      functionsetEmployeMessage=(value)=>{
        this.setState({EmployeMeg : value})
      }
      functionsetEmployeSubmit=()=>{
        const {EmployeTitle, EmployeMeg} = this.state;

        if(EmployeTitle == '')
        {

          alert('Please enter Title')

        }
        else if(EmployeMeg == '')
        {
          alert('Please enter Message')
        }


      }

      render () {
        const Model = {
          Title: this.state.Title,
          Employees : this.state.Employees,
          Customer : this.state.Customer,
          PageTitle : this.state.PageTitle,
          RadioGroup : this.state.RadioGroup,
          RegionList : this.state.RegionList,
          ValueList : this.state.ValueList,
          SELECTEDREGION : this.state.SELECTEDREGION,
          SELECTEDVALUE : this.state.SELECTEDVALUE,
          SELECTED_TYPE : this.state.SELECTED_TYPE,

          EmployeTitle: this.state.EmployeTitle,
          EmployeMeg: this.state.EmployeMeg,



          //REDUX
          NotificationTypeList : this.props.NotificationList,

    
          functionChangeIndex : this.functionChangeIndex,
          functionGoback : this.functionGoback,
          functionRadioGruop : this.functionRadioGruop,
          functionSelectedRegion : this.functionSelectedRegion,
          functionSelectedValue : this.functionSelectedValue,
          functionSelectedNotificationType : this.functionSelectedNotificationType,

          functionsetEmployeTitle : this.functionsetEmployeTitle,
          functionsetEmployeMessage : this.functionsetEmployeMessage,
          functionsetEmployeSubmit : this.functionsetEmployeSubmit,
        }

        return<BroadCast {...Model}/>
}
}
function MapTostate(state) {

  const { RegisterLoader, RegionList } = state.loginReducer;
  const {Value, NotificationList} = state.BroadcastReciver;

  
  return { RegisterLoader, RegionList,Value, NotificationList};
}
export default connect (MapTostate, {getAllRegion,getBroadcastValue,getNotificationType})(BroadCastContainer)