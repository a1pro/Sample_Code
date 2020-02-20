import React, {} from 'react';
import {TOPMOVER_IN_REQUEST, TOPMOVER_IN_COMPLETE,TOPMOVER_IN_FAILED,TOPMOVER_FILTER_REQUEST,
    TOPMOVER_FILTER_COMPLETE,TOPMOVER_FILTER_FAILED } from '../../action-types';



import NetworkApi from '../../network/NetworkApi';
import Constant from '../../constant/Constant';
import axios from 'axios';
import NewArrival from '../../model/newArrival/NewArrival';

export  const GettopMoverApi=()=>{
    return async (dispatch, getState)=>{

        const {LocationResponse} =  getState().HomeReducer;
        const { SelectedIDList } = getState().ListReducer;


        dispatch({type : TOPMOVER_IN_REQUEST})
        let URL = NetworkApi.BASE_URL+Constant.STORE_ID+NetworkApi.GET_TOP_MOVERS;
        console.log('URL',URL);
        


        axios.get(URL)
        .then((response)=>{
           

            var data = response.data;
            console.log('data',data);
            var mTempList = [];
            for (let index = 0; index < data.length; index++) {


                var itemnum = data[index].itemnum;
                var itemname = data[index].itemname;
                var quantity = data[index].quantity;
                var pickup = data[index].pickup;
                var price = data[index].price;
                var cost = data[index].cost;

                price = price.toFixed(2);
                cost = cost.toFixed(2);


                var imagepath = data[index].imagepath;
             
              
            var location = data[index].location;

            console.log('location', location);
            
       

            var mLocationFormatted;
            

            if(location == null || location == '' )
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

                var Actor = new NewArrival(itemnum, itemname, quantity, pickup, price, cost, imagepath,location, false)

                mTempList.push(Actor);





            }

           var newList = mTempList.sort((a, b) => a.Itemname.localeCompare(b.Itemname));
           for(var inner=0; inner < mTempList.length; inner++)
           {
                
              let checkId= mTempList[inner].Itemnum

              for(var m=0; m<SelectedIDList.length; m++)
              {

                let id= SelectedIDList[m];

                if(id == checkId)
                {
                   
                    mTempList[inner].ADDLIST= true;
                    
                }
              }
               
           }

       
            dispatch({type : TOPMOVER_IN_COMPLETE, TOP_MOVER_DATA : mTempList})
            
        }).catch((ERROR)=>{
            console.log('ERROR',ERROR);
            dispatch({type : TOPMOVER_IN_FAILED})
            alert(ERROR)
            
        })


        

       
    }
}
export const GetShortTopMovers = (Value) => {

    return async (dispatch, getState) => {

        dispatch({type :TOPMOVER_FILTER_REQUEST})

        const { Response } = getState().TopMoverReducer;

        if (Value == 'Low-High') {
            let mTempList = [];

            for (let index = 0; index < Response.length; index++) {
                let itemnum = Response[index].Itemnum;
                let itemname = Response[index].Itemname;
                let quantity = Response[index].Quantity;
                let pickup = Response[index].Pickup;
                let price = Response[index].Price;
                let cost = Response[index].Cost;
                var location = Response[index].Location;


                let imagepath = Response[index].ImagePath;

                let Actor = new NewArrival(itemnum, itemname, quantity, pickup, price, cost, imagepath,location)
                mTempList.push(Actor);


            }
            mTempList.sort((a, b) => {
               return parseFloat(a.Price) - parseFloat(b.Price)
            });
            dispatch({ type: TOPMOVER_FILTER_COMPLETE, TOP_MOVER_DATA: mTempList });
        }
        else if (Value == 'High-Low') 
        {
            let mTempList = [];

            for (let index = 0; index < Response.length; index++) {
                let itemnum = Response[index].Itemnum;
                let itemname = Response[index].Itemname;
                let quantity = Response[index].Quantity;
                let pickup = Response[index].Pickup;
                let price = Response[index].Price;
                let cost = Response[index].Cost;
                var location = Response[index].Location;

                let imagepath = Response[index].ImagePath;

                let Actor = new NewArrival(itemnum, itemname, quantity, pickup, price, cost, imagepath,location)
                mTempList.push(Actor);


            }
            mTempList.sort((a, b) => {
               return parseFloat(a.Price) - parseFloat(b.Price)
            });

            mTempList.reverse()
            dispatch({ type: TOPMOVER_FILTER_COMPLETE, TOP_MOVER_DATA: mTempList });

        }
        else if (Value == 'ZtoA') 
        {


            let mTempList = [];

            for (let index = 0; index < Response.length; index++) {
                let itemnum = Response[index].Itemnum;
                let itemname = Response[index].Itemname;
                let quantity = Response[index].Quantity;
                let pickup = Response[index].Pickup;
                let price = Response[index].Price;
                let cost = Response[index].Cost;
                var location = Response[index].Location;

                let imagepath = Response[index].ImagePath;


                let Actor = new NewArrival(itemnum, itemname, quantity, pickup, price, cost, imagepath,location)

                mTempList.push(Actor);


            }
            mTempList.sort((a, b) => a.Itemname.localeCompare(b.Itemname));
            mTempList.reverse()

            dispatch({ type: TOPMOVER_FILTER_COMPLETE, TOP_MOVER_DATA: mTempList });
        }
        else if(Value  == 'AtoZ')
        {

            let mTempList = [];

            for (let index = 0; index < Response.length; index++) {
                let itemnum = Response[index].Itemnum;
                let itemname = Response[index].Itemname;
                let quantity = Response[index].Quantity;
                let pickup = Response[index].Pickup;
                let price = Response[index].Price;
                let cost = Response[index].Cost;
                var location = Response[index].Location;

                let imagepath = Response[index].ImagePath;


                let Actor = new NewArrival(itemnum, itemname, quantity, pickup, price, cost, imagepath,location)

                mTempList.push(Actor);


            }
            mTempList.sort((a, b) => a.Itemname.localeCompare(b.Itemname));
           

            dispatch({ type: TOPMOVER_FILTER_COMPLETE, TOP_MOVER_DATA: mTempList });

        }






    }

}

export const AddTopMoveritemtoList = (Itemnum, Qty) => {
    return async (dispatch, getState) => {

        var mCheck= true;
        const { Response } = getState().TopMoverReducer;
        const {SelectedIDList} = getState().ListReducer;


        console.log('Response',Response);
        
        for (let i = 0; i < SelectedIDList.length; i++)    // Check Value Already Exits
        {
           
            let id= SelectedIDList[i];

            if(id == Itemnum)
            {
                mCheck = false;
            }
            
        }
        if(mCheck)
        {
            SelectedIDList.push(Itemnum);
        }

     
        

        var mTempList = [];

        for (let index = 0; index < Response.length; index++) {


            var itemId = Response[index].Itemnum;
            var itemname = Response[index].Itemname;
            var quantity = Response[index].Quantity;
            var pickup = Response[index].Pickup;
            var price = Response[index].Price;
            var cost = Response[index].Cost;
            var imagepath = Response[index].ImagePath;
            var location = Response[index].Location;
            var addToList = Response[index].ADDLIST;


            if (Itemnum == itemId) {

              
                

                var Actor = new NewArrival(itemId, itemname, quantity, pickup, price, cost, imagepath, location, true)

                mTempList.push(Actor);
            }
            else {
                var Actor = new NewArrival(itemId, itemname, quantity, pickup, price, cost, imagepath, location, addToList)
                mTempList.push(Actor);

            }
        }
        dispatch({ type: TOPMOVER_FILTER_COMPLETE, TOP_MOVER_DATA: mTempList });

        var DefaultId = null;
        await AsyncStorage.getItem('DEFAULTLISTID').then(
            (values) => {


                DefaultId = values;

            });


        var URL = NetworkApi.BASE_URL + Constant.STORE_ID + NetworkApi.ADD_ITEM_TO_LIST + DefaultId;

        axios.post(URL, {
            "itemNum": Itemnum,
            "quantity": Qty
        }).then((response) => {
            console.log('response', response);

            var status = response.status;
            if (status == 201) {
              


              
                
                

            }
            else {

            }
            dispatch({ type: ADDITEM_IN_COMPLETE })

        }).catch((ERROR) => {
            console.log('ERROR', ERROR);

            dispatch({ type: ADDITEM_IN_FAILED })

            alert(ERROR)
        })

    }
}


