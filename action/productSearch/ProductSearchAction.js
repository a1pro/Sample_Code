import React, { } from 'react';
import {
    PRODUCTSEARCH_IN_REQUEST, PRODUCTSEARCH_IN_COMPLETE, PRODUCTSEARCH_IN_FAILED,
    PRODUCTSEARCH_LOCAL_REQUEST, PRODUCTSEARCH_LOCAL_COMPLETE, PRODUCTSEARCH_LOCAL_FAILED,
    PRODUCTSEARCH_IN_CLEAR,PRODUCTSEARCH_IN_DATAHIDE,PRODUCTSEARCH_IN_SEARCHNAME
} from '../../action-types';
import NetworkApi from '../../network/NetworkApi';
import Constant from '../../constant/Constant';
import axios from 'axios';



export const GetSearchProduct = (Value) => {
    return async dispatch => {


        dispatch({ type: PRODUCTSEARCH_IN_REQUEST });

        var URL = NetworkApi.BASE_URL + Constant.STORE_ID + NetworkApi.PRODUCT_SEARCH_API + Value;

        axios.get(URL).then((response) => {

            console.log('response',response);
            
            dispatch({ type: PRODUCTSEARCH_IN_COMPLETE, DATA: response.data });

            dispatch(GetLocalSearch(Value))
        }).catch((ERROR) => {
            console.log('ERROR', ERROR);
            dispatch({ type: PRODUCTSEARCH_IN_FAILED });
            alert(ERROR)
        })

    }
}

export const ResetApi=()=>{

    return async dispatch=>{
        dispatch({ type: PRODUCTSEARCH_LOCAL_COMPLETE, LOCAL_DATA: [] , ERROR :''})
    }
   
}

export const SearchClear=()=>{
    return async dispatch=>{

        console.log('SearchClear');
        
        dispatch({ type: PRODUCTSEARCH_IN_CLEAR, ERROR :''});
    }
}

export const ListHide=()=>{
    return async dispatch=>{
        dispatch({ type: PRODUCTSEARCH_LOCAL_COMPLETE, LOCAL_DATA: [] })
    }
}

export const GetLocalSearch = (Value) => {
    return async (dispatch, getState) => {

       
        

        const { Response } = getState().ProductSearchReducer;

        console.log('GetLocalSearch', Response);
        

        dispatch({ type: PRODUCTSEARCH_LOCAL_REQUEST })

        var mTemp= [];
        if(isNaN(Value))
        {
             mTemp = Response.filter((item) => {

         
                var mCheck= item.itemname.toLowerCase().split(' ').join('') ;
                var mUserCheck = Value.toLowerCase().split(' ').join('');
                return mCheck .indexOf(mUserCheck) !== -1;
            })
        }
        else
        {
             mTemp = Response.filter((item) => {

                console.log('item.itemnum',item.itemnum);
                
                var mCheck= item.itemnum;
                var mUserCheck = Value.toLowerCase().split(' ').join('');
    
                return mCheck .indexOf(mUserCheck) !== -1;
            })
        }
       

        


        if(mTemp.length == 0)
        {

         

            dispatch({ type: PRODUCTSEARCH_LOCAL_COMPLETE, LOCAL_DATA: [], ERROR :'Product not found' })
        }
        else
        {
            dispatch({ type: PRODUCTSEARCH_LOCAL_COMPLETE, LOCAL_DATA: mTemp , ERROR :''})
        }

       



    }
}


export const GetCommonWordApi=(Value)=>{
    return async dispatch =>{
        var URL= NetworkApi.BASE_URL+Constant.STORE_ID+NetworkApi.Get_Common_Word+Value;
        axios.get(URL)
        .then((response)=>{
          
            var status = response.status;
            if(status == 200)
            {
                var data= response.data;

               
                var element="";
                for (let index = 0; index < data.length; index++) 
                {
                     element = data[0].commonword;
                    
                }

               
                if(element == "")
                {
                    dispatch({type :PRODUCTSEARCH_IN_SEARCHNAME , SEARCHNAME: Value})
                    dispatch(GetSearchProduct(Value))
                }
                else
                {
                    dispatch({type :PRODUCTSEARCH_IN_SEARCHNAME , SEARCHNAME: element})
                    
                    dispatch(GetSearchProduct(element))
                }
            }

        }).catch((ERROR)=>{
            console.log('ERROR',ERROR);
            alert(ERROR)
            
        })


    }
}


export const ResetSearchText=()=>{
    return async dispatch =>{

        dispatch({type :PRODUCTSEARCH_IN_SEARCHNAME , SEARCHNAME: ''})
    }
}
