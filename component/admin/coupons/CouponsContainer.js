import React,{Component} from 'react';
import Coupons from './Coupons';
import {GetCouponApi,GetMYCouponApi, SubmitAllCoupon, SubmitMyCoupon} from '../../../action';
import {connect} from 'react-redux';

   class CouponsContainer extends Component
{

    constructor (props) {
        super(props)
        this.state = {
          Title: 'Coupons',
          ShowLoader: true,
          ShowQr:false,
          AllCouponList : [],
          MyCouponList:[],
          AllCoupon: true,
          MyCoupon: false,
               
          

        
          Tab:{
           
            StoreBack:'black',
            StoreText:'white',
            MyCouponBack:'white',
            MyCouponText:'black',

          }
        }
      }


      componentWillMount()
      {
        this.props.GetCouponApi();
        this.props.GetMYCouponApi();
      }
     

      functionGoback = () => {
       
        this.props.navigation.goBack();
      };


     
      functionTabClick=(Value)=>{
       
        if(Value == 'CAT')
        {
         
          var mTab = this.state.Tab;
          mTab['StoreBack']='black';
          mTab['StoreText']='white';
          mTab['MyCouponBack']='white';
          mTab['MyCouponText']='black';
        

           this.setState({...this.state.Tab, mTab, AllCoupon : true, MyCoupon : false})
        }
        else
        {
         
          var mTab = this.state.Tab;
          mTab['StoreBack']='white';
          mTab['StoreText']='black';
          mTab['MyCouponBack']='black';
          mTab['MyCouponText']='white';
        

           this.setState({...this.state.Tab, mTab,AllCoupon : false, MyCoupon : true})
        }
      }


      functionTest=(Value)=>{

        this.setState({StoreBack :'white'})

        alert(Value);

      }
     
      render () {
        const Model = {
          Title: this.state.Title,
          Tab : this.state.Tab,
          ShowQr : this.state.ShowQr,
          StoreBack : this.state.StoreBack,

          Mith : this.state.Mith,
          AllCoupon : this.state.AllCoupon,
          MyCoupon : this.state.MyCoupon,
         
          //REDUX
          ShowLoader : this.props.Loader,
          AllCouponList : this.props.Respone,
         
       
          
          MyCouponList : this.props.MyCouponList,
         

          functionGoback : this.functionGoback,
          functionTabClick : this.functionTabClick,
          functionTest : this.functionTest,
        }

        return<Coupons {...Model}/>
}
}


function MapToStateProps(state)
{
  const {Loader,Errorr ,Respone,MyCouponList,} = state.CouponReducer;

  return{Loader,Errorr ,Respone,MyCouponList, };
}

export default connect(MapToStateProps, {GetCouponApi,GetMYCouponApi,

  SubmitAllCoupon, SubmitMyCoupon})(CouponsContainer)