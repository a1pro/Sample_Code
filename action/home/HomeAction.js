import React,{} from 'react';
import {BANNER_IN_REQUEST, BANNER_IN_COMPLETE, BANNER_IN_FAILED,
    LOCATION_IN_REQUEST, LOCATION_IN_COMPLETE,LOCATION_IN_FAILED,SELECTEDLIST_ID_COMPLETE
    } from '../../action-types';


import NetworkApi from '../../network/NetworkApi';
import Constant from '../../constant/Constant';
import Banner from '../../model/home/Banner';
import {AsyncStorage} from 'react-native';
import axios from 'axios';

export const GetBanner=()=>{

    return async dispatch =>{

        dispatch({type : BANNER_IN_REQUEST});
        var URL = NetworkApi.BASE_URL+Constant.STORE_ID+NetworkApi.HOME_BANNER_IMAGE;

      
        

        fetch(URL)
        .then((response)=>response.json())
        .then((responseJson)=>{
           

            var mList=[];
            for(var i=0; i<responseJson.length; i++)
            {
                var imageURI= NetworkApi.IAMGE_BASE_URL+responseJson[i].imagepath;
               // var Actor= new Banner(imageURI);
                mList.push(imageURI);
               

            }
            

           
            
            dispatch({type : BANNER_IN_COMPLETE, RESPONSE:mList});
           

        }).catch((ERROR)=>{
            dispatch({type : BANNER_IN_FAILED});
            alert(ERROR);

        })
      
        
    }
}
export const GetItemLocationDescription=()=>{
    return async dispatch => {
      

        dispatch({type : LOCATION_IN_REQUEST});
        var URL = NetworkApi.BASE_URL+Constant.STORE_ID+NetworkApi.GET_LOCATION_DESCRIPTION;

        fetch(URL)
        .then((response)=>response.json())
        .then((responseJson)=>{
            
            dispatch({type : LOCATION_IN_COMPLETE, LOCATION_DATA: responseJson});
           
           

        }).catch((ERROR)=>{
            dispatch({type : LOCATION_IN_FAILED});
            console.log('ERROR',ERROR);
            alert(ERROR);
            
        })
        
    }
}



export const GetSelectedItemFromList=()=>{
    return async dispatch=>{

       await AsyncStorage.getItem('DEFAULTLISTID').then(
            (values) => 
            {
           
               
                DefaultId = values;
               
            });

        var URL = NetworkApi.BASE_URL+Constant.STORE_ID+NetworkApi.MyList_itemDetail+DefaultId;


       
        
        axios.get(URL)
        .then((response)=>{
            var status= response.status;
            var mTemp=[];

            if(status == 200)
            {
                var data= response.data;

                for (let index = 0; index < data.length; index++) {
                    const element = data[index].itemnum;

                    mTemp.push(element);
                    
                    
                }
            }

           
            
          dispatch({type : SELECTEDLIST_ID_COMPLETE , SELECTED_LIST : mTemp})
            

        }).catch((ERROR)=>{
            console.log('ERROR',ERROR);
            
        })

    }
}




