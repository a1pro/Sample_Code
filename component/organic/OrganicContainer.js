import React, { Component } from 'react';
import {AsyncStorage, Alert} from 'react-native';
import Category from './Category';
import { connect } from 'react-redux';
import { GetOrganicApi, GetShortOrganic,CreateList, AddOrganicitemtoList,hitNotifyMe } from '../../action';


class OrganicContainer extends Component {

  constructor(props) {
    super(props)
    this.functionSetTitle = this.functionSetTitle.bind(this);
    this.state = {
      Title: 'Category',
      Search: '',
      FilterLebal: 'Sort',
      List: '',
      ShowLoader: false,
      AddLoader:false,
      

      CreateListModalVisible: false,
      ListName: '',
      ListNotes: '',
      UserRole:'Customer',
    }

    this.props.navigation.addListener(
      'willFocus',
      payload => {
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
    this.props.GetOrganicApi();
  }

  functionSetTitle = () => {
    var mTitle = this.props.navigation.getParam('Title')
    console.log('mTitle', mTitle);

    this.setState({ Search: mTitle })
  }

  functionGoback = () => {
    this.props.navigation.goBack();
  };

  functionOpenPage = (Value, Pname, ImageURl, Stock, Location, Price, Cost, ItemNumber) => {


    this.props.navigation.navigate(Value, {
      PRODUCTNAME: Pname, PRODUCTIMAGE: ImageURl, STOCK: Stock, LOCATION: Location, PRICE: Price,
      COST: Cost, ITEMNUMBER: ItemNumber
    });
  }


  functionSelectFilter = (Value) => {

    console.log('functionSelectFilter', Value);

  }
  functionShort = (Index) => {

    console.log('Index', Index);

    if (Index == 0) {
      this.props.GetShortOrganic('AtoZ');
    }
    else if (Index == 1) {
      this.props.GetShortOrganic('ZtoA');
    }
    else if (Index == 2) {
      this.props.GetShortOrganic('Low-High');
    }
    else if (Index == 3) {
      this.props.GetShortOrganic('High-Low');
    }
  }


  functionOpenSearchpage = (Name, Value) => {

    this.props.navigation.navigate(Name, { MIC: Value })
  }

  functionAddItemtoList = async (ITEM) => {

    let UserId=null;
    await AsyncStorage.getItem('USER_ID').then((value)=>{

      if(value == null)
      {

      }
      else
      {
        UserId = value;
      }

    })

    if(UserId == null)
    {
      this.props.navigation.navigate('Login');
    }
    else
    {
      var Itemnum = ITEM.Itemnum;
      var Qty = 1;
      AsyncStorage.getItem('DEFAULTLISTID').then(
        (values) => {
          DefaultId = values;
          if (DefaultId == null) {
            this.functionShowAlert('Please create a new list.');
          }
          else {
  
            this.props.AddOrganicitemtoList(Itemnum, Qty)
  
          }
  
        });
    }
    
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
  functionSetItemName=(value)=>{
    this.setState({ListName : value.txt})
  }

  functionSetItemNotes=(value)=>{
    
    this.setState({ListNotes : value.txt})
  }

  functionShowCreateDialog = (Value) => {
    this.setState({ CreateListModalVisible: Value, ListName :'', ListNotes:'' })
  }
  functionSubmit=()=>{
    
    const {ListName, ListNotes} = this.state;

    if(ListName === '')
    {
    alert('Please enter List Name')
    }
    else
    {
      this.setState({ CreateListModalVisible: false })
      this.props.CreateList(this.state);
    }
    
  }

  functionPulltoRefresh=()=>{
    this.props.GetOrganicApi();
  }

  functionNotifyMe=(Itemnum)=>{

   
    this.props.hitNotifyMe(Itemnum)

  }

  render() {
    const Model = {
      Title: this.state.Title,
      Search: this.state.Search,
      CreateListModalVisible: this.state.CreateListModalVisible,
      ListName: this.state.ListName,
      ListNotes: this.state.ListNotes,
      UserRole : this.state.UserRole,


      //REDUX
      List: this.props.Response,
      ShowLoader: this.props.Loader,
      AddLoader : this.props.AddingLoader,

      functionGoback: this.functionGoback,
      functionOpenPage: this.functionOpenPage,
      functionSelectFilter: this.functionSelectFilter,
      functionShort: this.functionShort,
      functionOpenSearchpage: this.functionOpenSearchpage,
      functionAddItemtoList : this.functionAddItemtoList,
      functionSetItemName : this.functionSetItemName,
      functionSetItemNotes : this.functionSetItemNotes,
      functionShowCreateDialog : this.functionShowCreateDialog,
      functionSubmit : this.functionSubmit,
      functionPulltoRefresh : this.functionPulltoRefresh,
      functionNotifyMe : this.functionNotifyMe,

    }

    return <Category {...Model} />
  }
}

function mapToStateProps(state) {
  const { Loader, Response } = state.OrganicReducer;
  const { AddingLoader,  } = state.DepartmentReducer;

  return { Loader, Response ,AddingLoader}
}

export default connect(mapToStateProps, { GetOrganicApi, GetShortOrganic,CreateList,AddOrganicitemtoList,hitNotifyMe })(OrganicContainer);