import React, {} from 'react';
import {STOCKDETAIL_IN_REQUEST, STOCKDETAIL_IN_COMPLETE,STOCKDETAIL_IN_FAILED,
    STOCKUPDATE_IN_REQUEST, STOCKUPDATE_IN_COMPLETE,STOCKUPDATE_IN_FAILED
} from '../../action-types';
import NetworkApi from '../../network/NetworkApi';
import Constant from '../../constant/Constant';
import axios from 'axios';
import NavigationService from '../../NavigationService';
import Toast from 'react-native-simple-toast';



export const getStockDetail=(PNumber)=>{
    return async ( dispatch, getState)=>{

        const { LocationResponse } = getState().HomeReducer;
        dispatch({type : STOCKDETAIL_IN_REQUEST})


        var URL= NetworkApi.BASE_URL+Constant.STORE_ID+NetworkApi.Get_Stock_Detail+PNumber;

        console.log('getStockDetail', URL);

        axios.get(URL).then((response)=>{
                      
           
           var  dataArray = response.data;
           console.log('dataArray',dataArray);

           var ITEM_NAME='', IMAGE_PATH='', STOCK='', LOCATION='', LASTSALEDATE='', VENDOR='',
           PO_NUMBER='', PODATE='', CASEQUANTITY='', CASESORDERED='' ;
           for (let index = 0; index < dataArray.length; index++) {
             
               ITEM_NAME = dataArray[index].itemname;
               IMAGE_PATH = dataArray[index].imagepath;
               STOCK = dataArray[index].quantity;
               LOCATION = dataArray[index].location;
               
               mLastSalesDate= dataArray[index].lastsaledate;

               var Array = mLastSalesDate.split('T');
               LASTSALEDATE = Array[0];


               VENDOR = dataArray[index].vendor;
               PO_NUMBER = dataArray[index].ponumber;

               if(PO_NUMBER == null)
               {
                   PO_NUMBER = 'N/A'
               }
               var mPodate = dataArray[index].podate;
               if(mPodate == null)
               {
                PODATE='N/A'
               }
               else
               {
                var mPoDateArray = mPodate.split('T');
                PODATE = mPoDateArray[0];
               }
              


               CASEQUANTITY = dataArray[index].casequantity;
               CASESORDERED = dataArray[index].casesordered;

               if(CASESORDERED == null)
               {
                   CASESORDERED = 'N/A';
               }
               if(CASEQUANTITY == null)
               {
                   CASEQUANTITY ='N/A'
               }
              
               if(VENDOR == null)
               {
                   VENDOR = 'N/A';
               }
              
           }

           if(LOCATION == '' || LOCATION == null)
           {

            LOCATION ='N/A';
           }
           else
           {
            var mLocation = LOCATION.split(/([0-9]+)/)
            var mAddressFormatted = '';
            for (var i = 0; i < mLocation.length; i++) {
                let mCheck = mLocation[i];
                for (var L = 0; L < LocationResponse.length; L++) 
                {

                    let mlocation = LocationResponse[L].location;
                    if (mCheck == mlocation) {

                        let locationdesc = LocationResponse[L].locationdesc;

                        if (mAddressFormatted == '') {
                            mAddressFormatted = mAddressFormatted + locationdesc + ': ' + mLocation[i + 1];
                        }
                        else {
                            mAddressFormatted = mAddressFormatted + ', ' + locationdesc + ': ' + mLocation[i + 1];
                        }
                        LOCATION = mAddressFormatted;
                   }
                }
            }
           }
            
            dispatch({type : STOCKDETAIL_IN_COMPLETE, ITEM_NAME, IMAGE_PATH, STOCK, LOCATION, 
                LASTSALEDATE, VENDOR, PO_NUMBER, PODATE,CASEQUANTITY,CASESORDERED})
        }).catch((ERROR)=>{
            console.log('ERROR',ERROR);
            dispatch({type : STOCKDETAIL_IN_FAILED})
            alert(ERROR)
            
        })
        
    }
}


export const hitStockUpdateApi=(STATE)=>{
   return   async dispatch =>{

        const {CurrentStock, ItemNum,Add, Total } = STATE;
       
  
        dispatch({type : STOCKUPDATE_IN_REQUEST})
        var URL = NetworkApi.BASE_URL+Constant.STORE_ID+NetworkApi.Update_Stock+ItemNum;

        axios.post(URL, {
            'quantity' : CurrentStock,
            "updOption":  Add == true ? 'A' : 'T',
        }).then((response)=>{
            console.log('response',response);

            var status = response.status;
            var data = response.data;
            Toast.show(data);
            if(status == 201) {
                NavigationService.back();
            }
            else {

            }
            dispatch({type : STOCKUPDATE_IN_COMPLETE})
        }).catch((ERROR)=>{
            console.log('ERROR',ERROR);
            dispatch({type : STOCKUPDATE_IN_FAILED})
            alert(ERROR)
            
        })
    }
}

export const hitStockLocationApi=(STATE)=>{
    return   async dispatch =>{
 
         const {CurrentLocation, ItemNum} = STATE;
 
         dispatch({type : STOCKUPDATE_IN_REQUEST})
         var URL = NetworkApi.BASE_URL+Constant.STORE_ID+NetworkApi.Update_Stock_Location+ItemNum;
 
         axios.post(URL, {
             'location' : CurrentLocation
         }).then((response)=>{
             console.log('response',response);
 
             var status = response.status;
             var data = response.data;
             if(status == 201)
             {
                 NavigationService.back();
             }
             else
             {
 
             }
              Toast.show(data);
              dispatch({type : STOCKUPDATE_IN_COMPLETE})
         }).catch((ERROR)=>{
             console.log('ERROR',ERROR);
             dispatch({type : STOCKUPDATE_IN_FAILED})
             alert(ERROR)
             
         })
 
     }
 }