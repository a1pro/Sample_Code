import React, {} from 'react';
import {SALES_REPORT_REQUEST, SALES_REPORT_SUCCESS, SALES_REPORT_FAILURE, DEPARTMENT_REPORT_REQUEST
,DEPARTMENT_REPORT_SUCCESS, DEPARTMENT_REPORT_FAILURE} from '../../action-types';
import NetworkApi from '../../network/NetworkApi';
import SalesReoprtModel from '../../model/salesreport/SalesReoprtModel';
import DeptReportModel from '../../model/salesreport/DeptReportModel';
import Constant from '../../constant/Constant';



export const getSalesTypeReport=(Filter)=>{

  return dispatch=>{

    dispatch({type :SALES_REPORT_REQUEST})
    var URL =   NetworkApi.BASE_URL+Constant.STORE_ID+ NetworkApi.PAYMENT_TYPE_REPORT;

    fetch(URL, {
      method: "GET",
      headers: {
        Accept: "Application/json",
        "Content-Type": "Multipart/from-data"
      },
     
    })
      .then(response => response.json())
      .then(responsejson => {

       
        
        const mTodayData= responsejson.filter((value)=>{
  


          var check= value.saleperioddesc.toLowerCase();
          var mCheckWithoutSpace= check.replace(/ /g,'')
           
          return (mCheckWithoutSpace == Filter)
        })

         
          
       

        var cash =0, credit=0, giftcard=0, edt=0, account=0, online=0, totalsales =0, GraphShow =true;

       
        var TodayFilter= [];
       
        for(i=0;  i< mTodayData.length; i++)
        {

         
           cash=   mTodayData[i].cash;
         
           credit =   mTodayData[i].credit;
           giftcard =  mTodayData[i].giftcard;
           edt =  mTodayData[i].ebt;
           account =  mTodayData[i].account;
           online=   mTodayData[i].online;

           if(cash >0)
           {
             cash =parseFloat(cash.toFixed(2));
           }
           if(credit >0)
           {
             credit =parseFloat(credit.toFixed(2));
           }
           if(giftcard >0)
           {
            giftcard =parseFloat(giftcard.toFixed(2));
           }
           if(edt >0)
           {
            edt =parseFloat(edt.toFixed(2));
           }
          if(account >0)
           {
            account =parseFloat(account.toFixed(2));
           }
           if(online >0)
           {
            online =parseFloat(online.toFixed(2));
           }
           
           

           totalsales =cash+credit+giftcard+edt+account+online;
          
          
           if(totalsales == 0)
           {
            GraphShow= false;

          
            
           }
           else
           {
           
           GraphShow= true;
           }
           mTotal= totalsales.toFixed(2);
         
           
         
         
            
                  
         }
         const actor = new SalesReoprtModel(cash, credit, giftcard, edt, account, online, mTotal, GraphShow);
         TodayFilter.push(actor)

        
     
       
         
         
         dispatch({type :SALES_REPORT_SUCCESS, Respone: TodayFilter})
     
      
      }).catch((ERROR)=>{
        alert(ERROR)

        dispatch({type :SALES_REPORT_FAILURE})
      });
  }

          
}

export const GetDeptTypesalesReport=(Filter)=>{

  console.log('GetDeptTypesalesReport');
  
  return dispatch =>{
    dispatch({type :DEPARTMENT_REPORT_REQUEST})
    var URL =NetworkApi.BASE_URL+Constant.STORE_ID+NetworkApi.DEPART_TYPE_REPORT;

    fetch(URL, {
      method: "GET",
      headers: {
        Accept: "Application/json",
        "Content-Type": "Multipart/from-data"
      },
     
    })
      .then(response => response.json())
      .then(responsejson => {
       
       
         var mTodayList= responsejson.filter((value)=>{


          var check= value.saleperioddesc.toLowerCase();
          var mCheckWithoutSpace= check.replace(/ /g,'');


           return (mCheckWithoutSpace == Filter)
         })

   
         
        var cafe=0, produce=0,meat=0, freshsnacks=0, frozen=0,groceries=0,saleperioddesc='',
        totalSales=0;

        var mData=[];
        for(m=0; m<mTodayList.length; m++)
        {
         
          cafe =   mTodayList[m].cafe;
          produce =  mTodayList[m].produce;
          meat =  mTodayList[m].meat;
          freshsnacks =  mTodayList[m].freshsnacks;
          frozen =  mTodayList[m].frozen;
          groceries =  mTodayList[m].groceries;
          saleperioddesc =  mTodayList[m].saleperioddesc;
          
          totalSales = cafe+produce+meat+freshsnacks+frozen+groceries;
         
           if(cafe >0)
           {
            cafe =parseFloat(cafe.toFixed(2));
           }
           if(produce >0)
           {
            produce =parseFloat(produce.toFixed(2));
           }
           if(meat >0)
           {
            meat =parseFloat(meat.toFixed(2));
           }
           if(freshsnacks >0)
           {
            freshsnacks =parseFloat(freshsnacks.toFixed(2));
           }
           if(frozen >0)
           {
            frozen =parseFloat(frozen.toFixed(2));
           }
           if(groceries >0)
           {
            groceries =parseFloat(groceries.toFixed(2));
           }
           

           var DeptGraphSDhow= false;
             if(totalSales == 0)
             {
              DeptGraphSDhow = false;

            
             }
             else
             {
              DeptGraphSDhow= true;
             
             
              
            }


          var Actor= new DeptReportModel(cafe, freshsnacks, frozen, groceries, meat, produce, saleperioddesc, totalSales.toFixed(2), DeptGraphSDhow);
          mData.push(Actor);
         
        }
       
       
        
        dispatch({type :DEPARTMENT_REPORT_SUCCESS, Respone: mData, })
     
      
      }).catch((ERROR)=>{
        alert(ERROR)

        dispatch({type :DEPARTMENT_REPORT_FAILURE})
      });
  }
}

