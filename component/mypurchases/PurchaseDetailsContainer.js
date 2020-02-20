import React,{Component} from 'react';
import MyPurchaseDetails from './MyPurchaseDetails';
import {GetInvoiceDetail} from '../../action';
import {connect} from 'react-redux';

 class MyPurchaseDetailsContainer extends Component
{

    constructor (props) {
        super(props)
        this.state = {
          Title: 'Invoice Details 1002357',
          ShowLoader:true,
          List : [],
          TOTAL_AMOUNT :0,
          BONUS_AMOUNT:0,
        }

        this.props.navigation.addListener('willFocus', () => {
         
          var Invoice_Num=  this.props.navigation.getParam('IN_NUMBER', '');
          this.setState({Title :  'Invoice Details ' + Invoice_Num});
          this.props.GetInvoiceDetail(Invoice_Num);
        })


      }



      componentWillMount()
      {
      
      }
      functionGoback = () => {
        this.props.navigation.goBack();
      };

      openProductDetailPage = (e) => {
        this.props.navigation.navigate('ProductDetails', { ITEMNUMBER: e })
      }
      
      render () {
        const Model = {
          Title: this.state.Title,

          //REDUX
          ShowLoader : this.props.Loader,
          List : this.props.Invoice_Details,
          TOTAL_AMOUNT : this.props.INVOICE_TOTAL_AMOUNT,
          BONUS_AMOUNT : this.props.INVOICE_BONUS_AMOUNT,

          openProductDetailPage: this.openProductDetailPage,
          functionGoback : this.functionGoback,
        }

        return<MyPurchaseDetails {...Model}/>
}
}
function mapToStateProps(state)
{
 const {Loader, Errorr, Invoice_Details, INVOICE_TOTAL_AMOUNT, INVOICE_BONUS_AMOUNT} = state.MyPurchaseReducer;

  return {Loader, Errorr, Invoice_Details, INVOICE_TOTAL_AMOUNT, INVOICE_BONUS_AMOUNT}
}

export default connect(mapToStateProps, {GetInvoiceDetail})(MyPurchaseDetailsContainer)