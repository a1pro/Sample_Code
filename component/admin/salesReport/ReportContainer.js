import React, {Component} from 'react';
import SalesReport from './SalesReport';
import {getSalesTypeReport,GetDeptTypesalesReport } from '../../../action';
import {connect} from 'react-redux';

            
 class ReportContainer extends React.PureComponent
{
    constructor(props)
    {
        super(props)
        this.state = {
            Title: 'Sales Reports',
            Payment : true,
            Department:false,
            FinalData :[],
            Loader:true,
            DeptmList:[],
            PaymentFilterValue:'Today',
            DeptFilterValue:'Today',

           
          }
    }

    componentDidMount()
    {
      this.props.getSalesTypeReport('today');
      this.props.GetDeptTypesalesReport('today');
    }
    
    functionGoback = () => {
        this.props.navigation.goBack();
      };
      functionChangeIndex=(Index)=>{


        if(Index == 0)
        {

          this.setState({Payment : true, Department : false})
        }
        else
        {
          this.setState({Payment : false, Department :true})
        }       
      }

      functionPercatage=(TotalSales, Value)=>{

                
        var mPer= Value*100/TotalSales;
          var mTotal= parseFloat(mPer.toFixed(2));

        
          
          return mTotal+'%';
          
           
      }

      functionListFilter=(idx, value)=>{

     
        if(idx ==0)
        {

          this.setState({PaymentFilterValue :value })
          this.props.getSalesTypeReport('today');
        }
        else if(idx == 1)
        {
          this.setState({PaymentFilterValue :value })
          this.props.getSalesTypeReport('yesterday');
        }
        else if(idx ==2)
        {
          this.setState({PaymentFilterValue :value })
          this.props.getSalesTypeReport('weektodate');
        }
        else if(idx ==3)
        {
          this.setState({PaymentFilterValue :value })
          this.props.getSalesTypeReport('monthtodate');
        }
        else if(idx == 4)
        {
          this.setState({PaymentFilterValue :value })
          this.props.getSalesTypeReport('yeartodate');
          
        }
        else if( idx == 5)
        {
          this.setState({PaymentFilterValue :value })
          this.props.getSalesTypeReport('lastweek');
        }
        else if( idx == 6)
        {
          this.setState({PaymentFilterValue :value })
          this.props.getSalesTypeReport('lastmonth');
        }
        else if( idx == 7)
        {
          this.setState({PaymentFilterValue :value })
          this.props.getSalesTypeReport('lastyear');
        }
        
       
      }
      functionDeptFilter=(idx, value)=>{

       
        
        if(idx ==0)
        {

          this.setState({DeptFilterValue :value })
          this.props.GetDeptTypesalesReport('today');
        }
        else if(idx == 1)
        {
          this.setState({DeptFilterValue :value })
          this.props.GetDeptTypesalesReport('yesterday');
        }
        else if(idx ==2)
        {
          this.setState({DeptFilterValue :value })
          this.props.GetDeptTypesalesReport('weektodate');
        }
        else if(idx ==3)
        {
          this.setState({DeptFilterValue :value })
          this.props.GetDeptTypesalesReport('monthtodate');
        }
        else if(idx == 4)
        {
          this.setState({DeptFilterValue :value })
          this.props.GetDeptTypesalesReport('yeartodate');
          
        }
        else if( idx == 5)
        {
          this.setState({DeptFilterValue :value })
          this.props.GetDeptTypesalesReport('lastweek');
        }
        else if( idx == 6)
        {
          this.setState({DeptFilterValue :value })
          this.props.GetDeptTypesalesReport('lastmonth');
        }
        else if( idx == 7)
        {
          this.setState({DeptFilterValue :value })
          this.props.GetDeptTypesalesReport('lastyear');
        }
        
       
      }
    render()
    {
       
           
        const Model ={
            Title : this.state.Title,
            Payment : this.state.Payment,
            Department : this.state.Department,
            
            
            PaymentFilterValue : this.state.PaymentFilterValue,
            DeptFilterValue : this.state.DeptFilterValue,
            
            functionGoback : this.functionGoback,
            functionChangeIndex : this.functionChangeIndex,
            Loader : this.props.Loader,
            FinalData : this.props.Respone,
            functionPercatage : this.functionPercatage,
            DeptmList  : this.props.DeptRespone,
            functionListFilter : this.functionListFilter,
            functionDeptFilter : this.functionDeptFilter, 
        }

        return < SalesReport {...Model}/>
    }
}


function MapToStateProps(state) {
  const { Loader, Errorr ,Respone, DeptRespone} = state.SalesReportReducer;

 
  console.log('Respone', Respone);
  

  return { Loader, Errorr , Respone, DeptRespone};
}


export default connect(MapToStateProps , {getSalesTypeReport,GetDeptTypesalesReport})(ReportContainer);