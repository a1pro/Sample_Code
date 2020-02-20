import React , {} from 'react';
import {NEGATIVESTOCK_IN_REQUEST,NEGATIVESTOCK_IN_COMPLETE,NEGATIVESTOCK_IN_FAILED,
    ZEROLIST_IN_REQUEST,ZEROLIST_IN_COMPLETE,ZEROLIST_IN_FAILED
} from '../../action-types';
import NetworkApi from '../../network/NetworkApi';
import Constant from '../../constant/Constant';
import axios from 'axios';
import NewArrival from '../../model/newArrival/NewArrival';

export const GetNegativeStockApi=()=>{
    return async (dispatch, getState)=>{
        const {LocationResponse} =  getState().HomeReducer;

        dispatch({type : NEGATIVESTOCK_IN_REQUEST})

       let URL = NetworkApi.BASE_URL+Constant.STORE_ID+NetworkApi.GET_NEGATIVE_STOCK;
       axios.get(URL)
       .then((response)=>{
           console.log('response', response);

           var data = response.data;
           var mTempList = [];
           for (let index = 0; index < data.length; index++) {


               var itemnum = data[index].itemnum;
               var itemname = data[index].itemname;
               var quantity = data[index].quantity;
               var department = data[index].department;
               var imagepathc = data[index].imagepath;
               var location = data[index].location;

       

           var mLocationFormatted;
           
       
           if(location == null  || location == '' )
           {
               location ='N/A';
           }
           else
           {
               var mLocation= location.split(/([0-9]+)/)

             
               var mAddressFormatted='';
               

             
               for(var i=0; i<mLocation.length; i++)
               {
                   let mCheck= mLocation[i];

                
                   
                   for(var L=0; L<LocationResponse.length; L++)
                   {

                       let mlocation= LocationResponse[L].location;

                     
                       
                       if(mCheck == mlocation)
                       {

                           let locationdesc= LocationResponse[L].locationdesc;

                           if(mAddressFormatted == '')
                           {
                               mAddressFormatted =  mAddressFormatted + locationdesc +': '+mLocation[i+1];
                           }
                           else
                           {
                               mAddressFormatted =  mAddressFormatted +' '+ locationdesc +': '+mLocation[i+1];
                           }
                           location = mAddressFormatted;
                       }

                   }

               }
            }
            var Actor = new NewArrival(itemnum, itemname, quantity, department, '', '', imagepathc,location)

            mTempList.push(Actor);
           }

         var newList = mTempList.sort((a, b) => a.Itemname.localeCompare(b.Itemname));
           dispatch({type : NEGATIVESTOCK_IN_COMPLETE , NEGATIVE_DATA : mTempList});
       }).catch((ERROR)=>{
           console.log('ERROR', ERROR);
           dispatch ({type : NEGATIVESTOCK_IN_FAILED})
           alert(ERROR)
       })
        
    }
}

export const SortByItemNameNS = (val) => {
    return async (dispatch, getState)=>{
        dispatch({type : NEGATIVESTOCK_IN_REQUEST})

       let URL = NetworkApi.BASE_URL+Constant.STORE_ID+NetworkApi.GET_NEGATIVE_STOCK;
       axios.get(URL)
       .then((response)=>{
            val.sort((a,b) => (a.Pickup > b.Pickup) ? 1 : ((b.Pickup > a.Pickup) ? -1 : 0));
           dispatch({type : NEGATIVESTOCK_IN_COMPLETE , NEGATIVE_DATA : val});
       }).catch((ERROR)=>{
           console.log('ERROR', ERROR);
           dispatch ({type : NEGATIVESTOCK_IN_FAILED})
           alert(ERROR)
       })
    }
}

export const GetZeroDataList=(val)=>{
    return async (dispatch, getState)=>{
        const {LocationResponse} =  getState().HomeReducer;

        dispatch({type : ZEROLIST_IN_REQUEST})

       let URL = NetworkApi.BASE_URL+Constant.STORE_ID+NetworkApi.GET_ZEROLIST_API+val;
       axios.get(URL)
       .then((response)=>{
           console.log('response', response);

           var data = response.data;
           var mTempList = [];
           
           for (let index = 0; index < data.length; index++) {


               var itemnum = data[index].itemnum;
               var itemname = data[index].itemname;
               var quantity = data[index].quantity;
               var mLastSalesDate= data[index].lastsolddate;
               var Array = mLastSalesDate.split('T');
               var lastsolddate = Array[0];
               var imagepath = data[index].imagepath;
               var location = data[index].location;

       

           var mLocationFormatted;
           
       
           if(location == null  || location == '' )
           {
               location ='N/A';
           }
           else
           {
               var mLocation= location.split(/([0-9]+)/)

             
               var mAddressFormatted='';
               

             
               for(var i=0; i<mLocation.length; i++)
               {
                   let mCheck= mLocation[i];

                
                   
                   for(var L=0; L<LocationResponse.length; L++)
                   {

                       let mlocation= LocationResponse[L].location;

                     
                       
                       if(mCheck == mlocation)
                       {

                           let locationdesc= LocationResponse[L].locationdesc;

                           if(mAddressFormatted == '')
                           {
                               mAddressFormatted =  mAddressFormatted + locationdesc +': '+mLocation[i+1];
                           }
                           else
                           {
                               mAddressFormatted =  mAddressFormatted +' '+ locationdesc +': '+mLocation[i+1];
                           }

                          

                          

                           location = mAddressFormatted;
                       }

                   }

               }
           }

               var Actor = new NewArrival(itemnum, itemname, quantity, lastsolddate, '', '', imagepath,location)

               mTempList.push(Actor);
           }

         var newList = mTempList.sort((a, b) => a.Itemname.localeCompare(b.Itemname));
           dispatch({type : ZEROLIST_IN_COMPLETE , ZEROLIST_DATA : mTempList});
           
       }).catch((ERROR)=>{
           console.log('ERROR', ERROR);
           dispatch ({type : ZEROLIST_IN_FAILED})
           alert(ERROR)
           
       })
        
    }
}

export const GetZeroDataListFilter=(val)=>{
    return async (dispatch, getState)=>{
        const {LocationResponse} =  getState().HomeReducer;

       let URL = NetworkApi.BASE_URL+Constant.STORE_ID+NetworkApi.GET_ZEROLIST_API+val;
       axios.get(URL)
       .then((response)=>{
           console.log('response', response);

           var data = response.data;
           var mTempList = [];
           
           for (let index = 0; index < data.length; index++) {


               var itemnum = data[index].itemnum;
               var itemname = data[index].itemname;
               var quantity = data[index].quantity;
               var mLastSalesDate= data[index].lastsolddate;
               var Array = mLastSalesDate.split('T');
               var lastsolddate = Array[0];
               var imagepath = data[index].imagepath;
               var location = data[index].location;

       

           var mLocationFormatted;
           
       
           if(location == null  || location == '' )
           {
               location ='N/A';
           }
           else
           {
               var mLocation= location.split(/([0-9]+)/)

             
               var mAddressFormatted='';
               

             
               for(var i=0; i<mLocation.length; i++)
               {
                   let mCheck= mLocation[i];

                
                   
                   for(var L=0; L<LocationResponse.length; L++)
                   {

                       let mlocation= LocationResponse[L].location;

                     
                       
                       if(mCheck == mlocation)
                       {

                           let locationdesc= LocationResponse[L].locationdesc;

                           if(mAddressFormatted == '')
                           {
                               mAddressFormatted =  mAddressFormatted + locationdesc +': '+mLocation[i+1];
                           }
                           else
                           {
                               mAddressFormatted =  mAddressFormatted +' '+ locationdesc +': '+mLocation[i+1];
                           }

                          

                          

                           location = mAddressFormatted;
                       }

                   }

               }
                
               
           }

               var Actor = new NewArrival(itemnum, itemname, quantity, lastsolddate, '', '', imagepath,location)

               mTempList.push(Actor);
           }

         var newList = mTempList.sort((a, b) => a.Itemname.localeCompare(b.Itemname));
           dispatch({type : ZEROLIST_IN_COMPLETE , ZEROLIST_DATA : mTempList});
           
       }).catch((ERROR)=>{
           console.log('ERROR', ERROR);
           dispatch ({type : ZEROLIST_IN_FAILED})
           alert(ERROR)
           
       })
        
    }
}