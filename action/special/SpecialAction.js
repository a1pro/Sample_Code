import React, {} from 'react';
import {SPECIAL_IN_STARTED, SPECIAL_IN_COMPLETED,SPECIAL_IN_FAILED } from '../../action-types';


import NetworkApi from '../../network/NetworkApi';
import Constant from '../../constant/Constant';

 export   const getSpecial =()=>{
    return dispatch=>{

       dispatch({type : SPECIAL_IN_STARTED});

        var URL = NetworkApi.BASE_URL+ Constant.STORE_ID+ NetworkApi.FETCH_ACTIVE_SPECIAL

        fetch(URL)
        .then((response)=>response.json())
        .then((responseJosn)=>{


         console.log('responseJosn', responseJosn);
         
         for(var i=0; i< responseJosn.length; i++)
         {
           
            var expdate = responseJosn[i].expdate;
            var mExpDate= expdate.split('T');
            var mDate= mExpDate[0];
            var mFormat= mDate.split('-');
            console.log('mDate',mDate);

            responseJosn[i].expdate =  mFormat[1]+'-'+mFormat[2]+'-'+mFormat[0];
            
            
         }

           dispatch({type : SPECIAL_IN_COMPLETED, response : responseJosn})
           
            
        }).catch((ERROR)=>{
            alert(ERROR)
           dispatch({type : SPECIAL_IN_FAILED})
        })


    }
}

