import  React, {} from 'react';
import {MAPLOCATION_IN_REQUEST, MAPLOCATION_IN_COMPLETE,MAPLOCATION_IN_FAILED} from '../../action-types';
import NetworkApi from '../../network/NetworkApi';



export const GetLocationApi=(ProductId)=>{
    return async dispatch=>{

        var URL = NetworkApi.SHOW_MAP_LOCATION+ProductId;

        console.log('URL');
        
    }
}