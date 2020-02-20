import React, { Component } from 'react';
import {AsyncStorage, Alert}  from 'react-native';
import TopMovers from './TopMovers';
import { connect } from 'react-redux';
import { GettopMoverApi,GetShortTopMovers,AddTopMoveritemtoList } from '../../../action';


class TopMoverContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      Title: 'Top Movers Refill',
      ShowLoader : false,
      List:[],
      UserRole:'Customer',


    }
    this.props.navigation.addListener(
      'willFocus',
      payload => {
        this.props.GettopMoverApi();
        AsyncStorage.getItem('USERROLE').then((value)=>{

          if(value == null)
          {

            this.setState({UserRole : 'Customer'})
          }
          else
          {
            this.setState({UserRole : value})
          }

        })
      }
    );

  }

  componentWillMount() {
   
  }

  functionGoback = () => {
    this.props.navigation.goBack();
  };
  functionOpenPage=(Value, Pname, ImageURl, Stock, Location,Price, Cost, ItemNumber)=>{
    this.props.navigation.navigate(Value, { PRODUCTNAME: Pname, PRODUCTIMAGE : ImageURl, STOCK : Stock, LOCATION : Location, PRICE : Price,
     COST : Cost, ITEMNUMBER : ItemNumber});
  }
  functionShort=(Index)=>{
          
    console.log('Index', Index);

    if(Index == 0)
    {
      this.props.GetShortTopMovers('AtoZ');
    }
    else if(Index == 1)
    {
      this.props.GetShortTopMovers('ZtoA');
    }
   }

   functionAddItemtoList = (ITEM) => {

    var Itemnum = ITEM.Itemnum;
    var Qty = 1;


    AsyncStorage.getItem('DEFAULTLISTID').then(
      (values) => {
        DefaultId = values;
        if (DefaultId == null) 
        {
          this.functionShowAlert('Please create a new list.');
        }
        else {

          this.props.AddTopMoveritemtoList(Itemnum, Qty)

        }

      });
  }
  functionShowAlert = (Msg) => {
    Alert.alert(
      '',
      Msg,
      [
        
        { text: 'OK', onPress: () => this.props.navigation.navigate('MyList', {OPEN : true}) },
      ],
      { cancelable: false },
    );
  }
  render() {
    const Model = {
      Title: this.state.Title,
      UserRole : this.state.UserRole,



      //REDUX
      ShowLoader : this.props.Loader,
      List : this.props.Response,


      functionOpenPage: this.functionOpenPage,
      functionGoback: this.functionGoback,
      functionShort : this.functionShort,
      functionAddItemtoList : this.functionAddItemtoList,
    }

    return <TopMovers {...Model} />
  }
}


function mapToStateProps(state)
{
  const {Loader,Response } =state.TopMoverReducer;
 
  return {Loader,Response}

}

export default connect(mapToStateProps, { GettopMoverApi ,GetShortTopMovers,AddTopMoveritemtoList})(TopMoverContainer);