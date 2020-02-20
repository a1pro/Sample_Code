import React, { Component } from 'react';
import NewArrivals from './NewArrivals';
import { AsyncStorage, Alert } from 'react-native';
import { connect } from 'react-redux';
import { GetNewArrivalApi, GetShort, CreateList, AddNewArrivalitemtoList,hitNotifyMe } from '../../action';

class NewArrivalsContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      Title: 'New Arrivals',
      ShowLoader: false,
      List: '',

      CreateListModalVisible: false,
      ListName: '',
      ListNotes: '',
      AddLoader: false,
      UserRole:'Customer'
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


    this.props.GetNewArrivalApi();
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


  functionShort = (Index) => {

    console.log('Index', Index);

    if (Index == 0) {
      this.props.GetShort('AtoZ');
    }
    else if (Index == 1) {
      this.props.GetShort('ZtoA');
    }
    else if (Index == 2) {
      this.props.GetShort('Low-High');
    }
    else if (Index == 3) {
      this.props.GetShort('High-Low');
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
          if (DefaultId == null) 
          {
            this.functionShowAlert('Please create a new list.');
          }
          else {
  
            this.props.AddNewArrivalitemtoList(Itemnum, Qty)
  
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
  functionSetItemName = (value) => {
    this.setState({ ListName: value.txt })
  }

  functionSetItemNotes = (value) => {

    this.setState({ ListNotes: value.txt })
  }

  functionShowCreateDialog = (Value) => {
    this.setState({ CreateListModalVisible: Value, ListName: '', ListNotes: '' })
  }
  functionSubmit = () => {

    const { ListName, ListNotes } = this.state;

    if (ListName === '') {
      alert('Please enter List Name')
    }
    else {
      this.setState({ CreateListModalVisible: false })
      this.props.CreateList(this.state);
    }

  }



  functionPulltoRefresh=()=>{
    this.props.GetNewArrivalApi();
  }

  functionNotifyMe=(Itemnum)=>{
    this.props.hitNotifyMe(Itemnum)
  }
  render() {
    const Model = {
      Title: this.state.Title,

      CreateListModalVisible: this.state.CreateListModalVisible,
      ListName: this.state.ListName,
      ListNotes: this.state.ListNotes,
      UserRole : this.state.UserRole,






      //REDUX
      ShowLoader: this.props.Loader,
      List: this.props.Response,
      AddLoader: this.props.AddingLoader,

      functionOpenPage: this.functionOpenPage,
      functionGoback: this.functionGoback,
      functionShort: this.functionShort,
      functionOpenSearchpage: this.functionOpenSearchpage,

      functionAddItemtoList: this.functionAddItemtoList,
      functionSetItemName: this.functionSetItemName,
      functionSetItemNotes: this.functionSetItemNotes,
      functionShowCreateDialog: this.functionShowCreateDialog,
      functionSubmit: this.functionSubmit,
      functionPulltoRefresh : this.functionPulltoRefresh,
      functionNotifyMe : this.functionNotifyMe,

    }

    return <NewArrivals {...Model} />
  }
}

function mapToStateProps(state) {
  const { Loader, Response } = state.NewArrivalReducer;
  const { AddingLoader, } = state.DepartmentReducer;

  return { Loader, Response, AddingLoader }

}

export default connect(mapToStateProps, { GetNewArrivalApi, GetShort, CreateList, AddNewArrivalitemtoList,hitNotifyMe })(NewArrivalsContainer);