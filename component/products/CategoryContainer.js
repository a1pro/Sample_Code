import React, { Component } from 'react';
import Category from './Category';
import { connect } from 'react-redux';
import { AsyncStorage, Alert } from 'react-native';
import { GetDepartmentProduct, GetproductShort, GetBrandCategory, AdditemtoList, CreateList,hitNotifyMe } from '../../action';


class CategoryContainer extends Component {

  constructor(props) {
    super(props)

    this.state = {
      Title: 'Category',
      Search: '',
      Loader: false,
      List: '',
      CreateListModalVisible: false,
      ListName: '',
      ListNotes: '',
      MyList: [],

     
      AddLoader:false,
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
    var mTitle = this.props.navigation.getParam('Title');
    var DeptID = this.props.navigation.getParam('DeptID');
    let mDEPT_PAGE = this.props.navigation.getParam('DEPT_PAGE');
    if (mDEPT_PAGE) {
      this.props.GetDepartmentProduct(DeptID)
    }
    else 
    {
      this.props.GetBrandCategory(mTitle);
    }
    this.setState({ Search: mTitle })
  }

  functionGoback = () => {
    this.props.navigation.goBack();
  }

  functionOpenPage = (Value, Pname, ImageURl, Stock, Location, Price, Cost, ItemNumber) => {
    this.props.navigation.navigate(Value, {
      PRODUCTNAME: Pname, PRODUCTIMAGE: ImageURl, STOCK: Stock, LOCATION: Location, PRICE: Price,
      COST: Cost, ITEMNUMBER: ItemNumber
    });
  }

  functionShort = (Index) => {
    if (Index == 0) {
      this.props.GetproductShort('AtoZ');
    }
    else if (Index == 1) {
      this.props.GetproductShort('ZtoA');
    }
    else if (Index == 2) {
      this.props.GetproductShort('Low-High');
    }
    else if (Index == 3) {
      this.props.GetproductShort('High-Low');
    }
  }

  functionOpenPageSearch = (Name, value, ) => {
    this.props.navigation.navigate(Name, { MIC: value })
  }

  functionAddItemtoList = async (ITEM) => {
    let UserId=null;
    await AsyncStorage.getItem('USER_ID').then((value)=>{
      if(value == null) { }
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
          else 
          {
  
            this.props.AdditemtoList(Itemnum, Qty)
  
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

  functionShowCreateDialog = (Value) => {
    this.setState({ CreateListModalVisible: Value, ListName: '', ListNotes: '' })
  }

  functionSetItemName = (value) => {
    this.setState({ ListName: value.txt })
  }

  functionSetItemNotes = (value) => {
    this.setState({ ListNotes: value.txt })
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

  functionPulltoRefresh = () => {
    var mTitle = this.props.navigation.getParam('Title');
    var DeptID = this.props.navigation.getParam('DeptID');
    let mDEPT_PAGE = this.props.navigation.getParam('DEPT_PAGE');
    if (mDEPT_PAGE) {
      this.props.GetDepartmentProduct(DeptID)
    }
    else {
      this.props.GetBrandCategory(mTitle);
    }
  }

  functionNotifyMe=(Itemnum)=>{
    this.props.hitNotifyMe(Itemnum)
  }

  render() {
    const Model = {
      Title: this.state.Title,
      Search: this.state.Search,
      CreateListModalVisible: this.state.CreateListModalVisible,
      UserRole : this.state.UserRole,
      //REDUX
      Loader: this.props.CategoryLoader,
      List: this.props.CategoryResponse,
      AddLoader : this.props.AddingLoader,
      functionGoback: this.functionGoback,
      functionOpenPage: this.functionOpenPage,
      functionSelectFilter: this.functionSelectFilter,
      functionShort: this.functionShort,
      functionOpenPageSearch: this.functionOpenPageSearch,
      functionAddItemtoList: this.functionAddItemtoList,
      functionShowCreateDialog: this.functionShowCreateDialog,
      functionSetItemName: this.functionSetItemName,
      functionSetItemNotes: this.functionSetItemNotes,
      functionSubmit: this.functionSubmit,
      functionPulltoRefresh : this.functionPulltoRefresh,
      functionNotifyMe : this.functionNotifyMe,
    }

    return <Category {...Model} />
  }
}

function mapToStateProps(state) {
  const { CategoryLoader, CategoryResponse ,AddingLoader} = state.DepartmentReducer;
  return { CategoryLoader, CategoryResponse,  AddingLoader};
}

export default connect(mapToStateProps, { GetDepartmentProduct, GetproductShort, GetBrandCategory,
   AdditemtoList, CreateList, hitNotifyMe })(CategoryContainer);