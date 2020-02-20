import React, {} from 'react';
import {REWARDS_TRANSTACTION_REQUEST, REWARDS_TRANSTACTION_COMPLETE,REWARDS_TRANSTACTION_FAILED,
    MYREWARDS_IN_REQUEST, MYREWARDS_IN_COMPLETE,MYREWARDS_IN_FAILED
} from '../../action-types';

import {AsyncStorage} from 'react-native';
import NetworkApi from '../../network/NetworkApi';
import Constant from '../../constant/Constant';
import axios from 'axios';



export const GetMyRewardsTransactionApi=(value)=>{
    return async dispatch=>{
        console.log('GetMyRewardsTransactionApi');

        dispatch({type : REWARDS_TRANSTACTION_REQUEST})
      
        var URL= NetworkApi.BASE_URL+Constant.STORE_ID+NetworkApi.GET_MY_REWARDS_TRANSACTION+value;

        console.log('URL',URL);
        axios.get(URL)
        .then((response)=>{
            console.log('response', response);

            let Data= response.data;

            for (let index = 0; index < Data.length; index++) {
             
                var Date= Data[index].transactiontime;
                var mDateArray= Date.split('T');
                var mFormatDate= mDateArray[0]+" "+mDateArray[1];

               Data[index].transactiontime= mFormatDate;
                
                
            }  

            dispatch({type : REWARDS_TRANSTACTION_COMPLETE , DATA: Data})
            
        }).catch((ERROR)=>{
            console.log('ERROR', ERROR);
            dispatch({type : REWARDS_TRANSTACTION_FAILED})
            alert(ERROR);
            
        })

        
    }
}


export const getMyRewards=()=>{
    return async dispatch =>{

        dispatch({type : MYREWARDS_IN_REQUEST})

        AsyncStorage.getItem('USER_ID').then((value)=>{

            var URL= NetworkApi.BASE_URL+Constant.STORE_ID+NetworkApi.My_Rewards+value;

            console.log('URL',URL);

            axios.get(URL).then((response)=>{
                console.log('getMyRewardsresponse',response);

                var Data= response.data;
                var gcnum='',gcbalance='',bonuspoints='';
                for (let index = 0; index < Data.length; index++) {
                    gcnum= Data[index].gcnum;
                    gcbalance= Data[index].gcbalance;
                    bonuspoints = Data[index].bonuspoints;

                    
                }

                // avgpurch: 250.5
                // bonuspoints: 241
                // gcbalance: 234.5
                // gcnum: "6050110010033295938"
                // modifiedby: "Srinivas"
                // modifieddate: "2"
                // rewardtype: "G"
                // storeid: "kci0809"
                // userid: "9135261145"
                // value: "7*"
                // wallet: "Y"

              
                dispatch({type : MYREWARDS_IN_COMPLETE, GCM : gcnum, GIFTBALANCE: gcbalance, BONUSPOINT : bonuspoints})
            }).catch((ERROR)=>{
                console.log('ERROR',ERROR);
                dispatch({type : MYREWARDS_IN_FAILED}) 
                alert(ERROR)
            })
            
        })
        


    }
}
