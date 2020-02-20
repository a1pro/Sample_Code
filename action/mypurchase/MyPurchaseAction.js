import React, {} from 'react';
import {PURCHASE_IN_REQUEST,PURCHASE_IN_COMPLETE,PURCHASE_IN_FAILED,
    INVOICE_IN_REQUEST, INVOICE_IN_COMPLETE,INVOICE_IN_FAILED
} from '../../action-types';
import NetworkApi from '../../network/NetworkApi';
import Constant from '../../constant/Constant';
import axios from 'axios';

export const GetMyPurchaseApi=(Value)=>{
    return async dispatch=>{
       
        dispatch({ type: PURCHASE_IN_REQUEST })

        var URL = NetworkApi.BASE_URL+Constant.STORE_ID+NetworkApi.MY_INVOICE+Value;
       
        axios.get(URL)
        .then((response)=>{

            var data= response.data;
           
            for(var i=0; i <data.length; i++) {
                var mDate=  data[i].invoicedate;
                var mExpdate= mDate.split('T');
                 var mFormate= mExpdate[0];
                 var mTime= mExpdate[1];
                 var time= mTime.split('.');
                 var mFormatTime= time[0];
                 var mDate= mFormate.split('-');
                 data[i].invoicedate= mDate[1]+'-'+mDate[2]+'-'+mDate[0]+" "+mFormatTime;
            }

            dispatch({type: PURCHASE_IN_COMPLETE, 'DATA': data})
        }).catch((ERROR)=>{
            dispatch({type: PURCHASE_IN_FAILED})
            alert(ERROR);
            
        }) 
    }
}

export const GetInvoiceDetail=(Invoice_Num)=>{
    return async dispatch=>{
     
        dispatch({type :INVOICE_IN_REQUEST})
        var URL = NetworkApi.BASE_URL+Constant.STORE_ID+NetworkApi.INVOICE_DETAILS+Invoice_Num;
        axios(URL)
        .then((response)=>{
            var data= response.data;

            var mTotal=0, mBonus=0;
            for(var k=0; k<data.length; k++) {
                mTotal=mTotal+data[k].price;
                mBonus = mBonus+data[k].bonuspoints;
            }
           
            var Total= parseFloat(mTotal.toFixed(2));
            var Bonus = Math.round(mBonus);
            
            dispatch({type :INVOICE_IN_COMPLETE, INVOICE_DATA: response.data, INVOICE_TOTAL : Total, INVOICE_BONUS: Bonus})
            
        }).catch((ERROR)=>{
            dispatch({type :INVOICE_IN_FAILED})
            alert(ERROR);
        })
    }
}