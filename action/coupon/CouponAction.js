import React, {} from 'react';
import {AsyncStorage} from 'react-native';
import {COUPON_IN_REQUEST,COUPON_IN_COMPLETE,COUPON_IN_FAILED ,
    MYCOUPON_IN_REQUEST, MYCOUPON_IN_COMPLETE, MYCOUPON_IN_FAILED, ALL_COUPON,MY_COUPON,
} from '../../action-types';

import NetworkApi from '../../network/NetworkApi';
import Constant from '../../constant/Constant';






export const GetCouponApi=()=>{  
    return async dispatch=>{

        dispatch({type : COUPON_IN_REQUEST})
        var URL= NetworkApi.BASE_URL+Constant.STORE_ID+NetworkApi.FETCH_STORE_COUPON;
        
        fetch(URL)
        .then((response)=>response.json())
        .then((responseJson)=>{
            for(var i=0; i<responseJson.length; i++)
            {

                var Expdate= responseJson[i].expdate;
                var mExpdate= Expdate.split('T');
                var mFormate= mExpdate[0];
                               
                 var mDate= mFormate.split('-');
                 responseJson[i].expdate= mDate[1]+'-'+mDate[2]+'-'+mDate[0];
            }
            dispatch({type : COUPON_IN_COMPLETE, RESPONE : responseJson})
            
           
        }).catch((ERROR)=>{
            dispatch({type : COUPON_IN_FAILED})
            alert(ERROR)
           
        })

    }
}

export const GetMYCouponApi=()=>{
    return async dispatch=>{


        dispatch({type : MYCOUPON_IN_REQUEST})
        
        AsyncStorage.getItem('USER_ID').then((value)=>{
            var URL= NetworkApi.BASE_URL+Constant.STORE_ID+NetworkApi.FETCH_MY_COUPON+value;

            console.log('URL',URL);
            
          
            
            fetch(URL)
            .then((response)=>response.json())
            .then((responseJson)=>{
    
                for(var k=0; k<responseJson.length; k++)
                {
    
                    var Expdate= responseJson[k].expdate;
                    var mExpdate= Expdate.split('T');
    
                    var mFormate= mExpdate[0];
                     var mDate= mFormate.split('-');
                     responseJson[k].expdate= mDate[1]+'-'+mDate[2]+'-'+mDate[0];
                  
                }
                dispatch({type : MYCOUPON_IN_COMPLETE, RESPONE : responseJson})
                
               
            }).catch((ERROR)=>{
                dispatch({type : MYCOUPON_IN_FAILED})
                alert(ERROR)
               
            })
        })
       

    }
}

export const SubmitAllCoupon=()=>{
    return dispatch=>{
        dispatch({type : ALL_COUPON})
    }
}

export const SubmitMyCoupon=()=>{
    return dispatch=>{
        dispatch({type : MY_COUPON})
    }
}