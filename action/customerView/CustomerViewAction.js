import React, {} from 'react';
import {CUSTOMER_SEARCH_REQUEST, CUSTOMER_SEARCH_COMPLETE,CUSTOMER_SEARCH_FAILED,
    CUSTOMER_DETAIL_REQUEST, CUSTOMER_DETAIL_COMPLETE,CUSTOMER_DETAIL_FAILED,
    LOCAL_SEARCH_REQUEST, LOCAL_SEARCH_COMPLETE, LOCAL_SEARCH_FAILED,CUSTOMER_SEARCH_RESET
} from '../../action-types';
import NetworkApi from '../../network/NetworkApi';
import Constant from '../../constant/Constant';
import axios from 'axios';

export const HitSearchApi=(Value)=>{
    return async dispatch=>{

        dispatch({type : CUSTOMER_SEARCH_REQUEST})

        var URL= NetworkApi.BASE_URL+Constant.STORE_ID+NetworkApi.GET_CUSTOMER_SEARCH+Value;

        console.log('URL', URL);
        
        axios.get(URL)
        .then((response)=>{
            console.log('response',response);
            
          dispatch({type : CUSTOMER_SEARCH_COMPLETE, SEARCH_DATA: response.data})

        dispatch(GetLocalSearchAPI(Value));

        }).catch((ERROR)=>{
            console.log('ERROR',ERROR);
            dispatch({type : CUSTOMER_SEARCH_FAILED})
            alert(ERROR)
        })   

    }
}

export const RessetHitApi=()=>{
    return async dispatch=>{
        dispatch({type : CUSTOMER_SEARCH_RESET, LOCAL_SEARCH_DATA :[]})
    }
}

export const GetCustomerDetail=(Value)=>{
    return async dispatch=>{
       
      //  dispatch({type : CUSTOMER_SEARCH_COMPLETE, SEARCH_DATA: []})
        dispatch({type : CUSTOMER_DETAIL_REQUEST})
      
        let URL= NetworkApi.BASE_URL+Constant.STORE_ID+NetworkApi.GET_CUSTOMER_DETAIL+Value;
        console.log('URL',URL);
        
        
        axios.get(URL)
        .then((response)=>{
            console.log('response', response);
            dispatch({type : CUSTOMER_DETAIL_COMPLETE, DETAIL_DATA:response.data})
        }).catch((ERROR)=>{
            console.log('ERROR', ERROR);
            dispatch({type : CUSTOMER_DETAIL_FAILED})
        })
    }
}


export const GetLocalSearchAPI=(Value)=>{
    return async (dispatch, getState)=>{

        const {Response} = getState().CustomerViewReducer;
        dispatch({type : LOCAL_SEARCH_REQUEST})


        if(isNaN(Value))
        {
            var mSearchList = Response.filter(item=>{


                console.log('item.userid',item.userid);
                
                return  item.lastname.toLowerCase().indexOf(Value.toLowerCase()) !== -1;
            })
            dispatch({type : LOCAL_SEARCH_COMPLETE, LOCAL_SEARCH_DATA: mSearchList})
        }
        else
        {
           
            var mSearchList = Response.filter(item=>{


                console.log('item.userid',item.userid);
                
                return item.userid.toLowerCase().indexOf(Value.toLowerCase())  !== -1;
            })
            dispatch({type : LOCAL_SEARCH_COMPLETE, LOCAL_SEARCH_DATA: mSearchList})
        }
        
    }
}


export  const GetPreviousResult=()=>{

    return async (dispatch, getState)=>{
        const {Response} = getState().CustomerViewReducer;


        dispatch({type : LOCAL_SEARCH_COMPLETE, LOCAL_SEARCH_DATA: Response})
    }
}