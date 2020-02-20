import React, { Component } from 'react';
import { AsyncStorage, Alert } from 'react-native';
import Details from './Details';
import { connect } from 'react-redux';
import { getStockDetail, hitStockUpdateApi, hitStockLocationApi } from '../../action';

class UpdateDetailsContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      Title: 'Update Product Details',
      ItemNum: '',
      List: [],
      ShowLoader:false,
      Pname:'',
      Productimage:'',
      PStock:'',
      PLocation:'',
      LastSalesdate:'',
      VenderName:'',
      Po_Number:'',
      Po_Date:'',
      CASE_Quantity:'',
      Cases_Ordered:'',
      CurrentStock:'',
      CurrentLocation:'',
      Loader :false,
      Add: false,
      Total : true,
    }

    this.props.navigation.addListener(
      'willFocus',
      payload => {
        var mITEMNUMBER = this.props.navigation.getParam('ITEMNUMBER');

        this.props.getStockDetail(mITEMNUMBER);

        this.setState({ ItemNum: mITEMNUMBER })
      }
    );

  }


  componentWillMount() {

  }
  
  functionGoback = () => {
    this.props.navigation.goBack();
  };


  functionOpenPage = (Value, ITEM) => {

    if (ITEM == 'N/A') {

    }
    else {
      const { Pname, ItemNum } = this.state;
      this.props.navigation.navigate(Value, { NAME: this.props.P_NAME, PRODUCT_ID: ItemNum });
    }
  }

  functionGoback = () => {
    this.props.navigation.goBack();
  };

  functionStockUpdate=()=>{
    const {CurrentStock, ItemNum, Add, Total} = this.state;

    if(CurrentStock == '')
    {

      alert('Please enter Current Stock')
    }
    else
    {

      this.props.hitStockUpdateApi(this.state);
    }

   
  }
  functionLocationUpdate=()=>{
    const {CurrentLocation, ItemNum} = this.state;

    if(CurrentLocation == '')
    {

      alert('Please enter StockLocation')
    }
    else
    {

     this.props.hitStockLocationApi(this.state);
    }

   
  }
  functionSetStock=(Value)=>{


    this.setState({CurrentStock : Value})
    
  }
  functionSetLocation=(Value)=>{
    this.setState({CurrentLocation : Value})
    
  }

  functionsetStockRadioButton=(value)=>{

    
    if(value == 'ADD')
    {
      
      this.setState({Add : true, Total : false})
     
    }
    else if(value == 'TOTAL')
    {
      this.setState({Add : false, Total : true})
    }
  }

  functionSelect
  render() {
    const Model = {
      Title: this.state.Title,
      List: this.state.List,
      CurrentStock : this.state.CurrentStock,
      CurrentLocation : this.state.CurrentLocation,
      Add : this.state.Add,
      Total : this.state.Total,


      //REDUX
      ShowLoader : this.props.Loader,
      P_NAME : this.props.Name,
      Productimage : this.props.Image,
      PStock : this.props.Stock,
      PLocation : this.props.Location,
      LastSalesdate : this.props.SalesDate,
      VenderName : this.props.Vender,
      Po_Number : this.props.PO_number,
      Po_Date : this.props.Po_date,
      CASE_Quantity : this.props.Case_Quantity,
      Cases_Ordered : this.props.CasesOrdered,

      functionGoback : this.functionGoback,
      functionStockUpdate : this.functionStockUpdate,
      functionSetStock : this.functionSetStock,
      functionOpenPage : this.functionOpenPage,
      functionSetLocation : this.functionSetLocation,
      functionLocationUpdate : this.functionLocationUpdate,
      functionsetStockRadioButton : this.functionsetStockRadioButton,


    }

    return <Details {...Model} />
  }
}


function mapToStateProps(state) {
  const { Loader,Response, Name, Image, Stock, Location,SalesDate,Vender,
    PO_number,Po_date,Case_Quantity,CasesOrdered,UpdateLoader
  } = state.UpdateStockReducers;
  return {Loader,Response,Name, Image, Stock,Location,SalesDate,Vender,PO_number, Po_date,Case_Quantity,
    CasesOrdered,UpdateLoader};
}

export default connect(mapToStateProps, { getStockDetail, hitStockUpdateApi, hitStockLocationApi})(UpdateDetailsContainer);