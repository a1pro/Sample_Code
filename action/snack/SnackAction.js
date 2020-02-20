import React, {} from 'react';
import {SNACK_IN_REQUEST,SNACK_IN_COMPLETED ,SNACK_IN_FAILED,
    HIT_IN_SNACK, HIT_IN_SUCCESS,HIT_IN_FAILED} from '../../action-types';
import NetworkApi from '../../network/NetworkApi';
import Constant from '../../constant/Constant';
import axios from 'axios';
import Toast from 'react-native-simple-toast';

export const GetSnackApi=()=>{


    console.log('GetSnackApi');

    return async dispatch=>{
        dispatch({type :SNACK_IN_REQUEST})
        var URL = NetworkApi.BASE_URL+Constant.STORE_ID+NetworkApi.GET_ALL_SNACK;
               
        fetch(URL)
        .then((response)=>response.json())
        .then((responseJson)=>{
          dispatch({type :SNACK_IN_COMPLETED, DATA: responseJson})
        }).catch((ERROR)=>{
            console.log('ERROR');
            alert(ERROR);
            
        })
       
      
    }
    
}

export const HItSnackApi=(SNACKID, STOREID, Name,)=>{
    return async dispatch=>{

        dispatch({type : HIT_IN_SNACK})

        var URL = NetworkApi.BASE_URL+STOREID+NetworkApi.HIT_SNACK;



        
    axios.post(URL,{
        'snackId': SNACKID
      }, {
        headers: {
          "Content-Type": "application/json"
        }
      })
      .then((responseJson)=>{
        dispatch({type :HIT_IN_SUCCESS, })

        var status = responseJson.status;
        if(status == 201)
        {

        Toast.show(Name+" logged successfully");
         
       
        }
     
          
      }).catch((ERROR)=>{
                console.log('ERROR', ERROR);
                dispatch({type :HIT_IN_FAILED})
                alert(ERROR)
               
            })

    }
}