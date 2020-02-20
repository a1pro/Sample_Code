import React, {} from 'react';
import {GET_IN_DESIBYTES, DESIBYTES_COMPLETE,DESIBYTES_FAILED, 
    DESIBYTES_DETAIL_IN_REQUEST, DESIBYTES_DETAIL_IN_COMPLETE,DESIBYTES_DETAIL_IN_FAILED
} from '../../action-types';
import NetworkApi from '../../network/NetworkApi';
import Constant from '../../constant/Constant';
import axios from 'axios';


export const GetDesibytesApi=()=>{

    console.log('GetDesibytesApi');
    
    return  async dispatch=>{
       
        dispatch({type : GET_IN_DESIBYTES})
        var URL = NetworkApi.BASE_URL+Constant.STORE_ID+NetworkApi.GET_DESIBYTES;
       
        

        axios.get(URL)
        .then((response)=>{
            console.log('response',response);

            var Data= response.data;

            dispatch({type : DESIBYTES_COMPLETE, DESIBYTES_DATA : response.data})
        }).catch((ERROR)=>{
            console.log('ERROR',ERROR);
            dispatch({type : DESIBYTES_FAILED})
            alert(ERROR)
        })
      
    }
}

export const GetDesibytesDetail=(Value)=>{
    return async dispatch=>{

      
        dispatch({type : DESIBYTES_DETAIL_IN_REQUEST})
        let URL =NetworkApi.BASE_URL+Constant.STORE_ID+NetworkApi.GET_DESIBYTES_DETAILS+Value;
        
       axios.get(URL)
       .then((response)=>{
           console.log('response', response);
           

           dispatch({type : DESIBYTES_DETAIL_IN_COMPLETE, DESIBYTES_LIST : response.data})
       }).catch((ERROR)=>{
           console.log('ERROR', ERROR);
           dispatch({type : DESIBYTES_DETAIL_IN_FAILED})
           alert(ERROR)
           
       })
        
    }
}