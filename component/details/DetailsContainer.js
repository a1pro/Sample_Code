import React, { Component } from 'react';
import {AsyncStorage, Alert} from 'react-native';
import Details from './Details';
import { connect } from 'react-redux';
import { GetProductDetail, CreateList, AddDetailsitemtoList, hitStockUpdateApi, hitStockLocationApi, GetallList, SetDefaultList } from '../../action';
import axios from 'axios';
import NetworkApi from '../../network/NetworkApi'
import Constant from '../../constant/Constant';

class DetailsContainer extends Component {

  constructor(props) {
    super(props)


    this.state = {
      Title: 'Product Details',
      Data: [],
      DescriptionView: true,
      ProductName: '',
      ImageUrl: '',
      Stock: '',
      Location: '',
      Price: '',
      Cost: '',
      Item_Number: "",
      ShowLoader: false,
      PDescription: '',
      Brand: '',
      Ingredients: '',
      ProductType: '',
      Weight: '',
      Usage: '',
      ItemNum:'',
      ADDED_LIST:false,
      CreateListModalVisible: false,
      ListName: '',
      ListNotes: '',
      AddLoader: false,
      USERROLE:'Customer',
      DetailShow: true,
      QrlayoutShow: false,
      PrintLayout: false,
      bgUpdate: '#fff',
      showDetailLoader: false,
      startLoader: true,
      VisibleDialog: false,
      fillStock: '',
      CurrentStock: '',
      CurrentLocation: '',
      Add: false,
      Total: true,
      printCount: 1,
      defaultListName: 'Create new list',
      getDetail: 0,
    }

    this.props.navigation.addListener(
      'willFocus',
      payload => {
        var mITEMNUMBER = this.props.navigation.getParam('ITEMNUMBER');
        this.props.GetallList();
        this.props.GetProductDetail(mITEMNUMBER);
        
        this.setState({ItemNum : mITEMNUMBER})

        AsyncStorage.getItem('DEFAULTLISTID').then((value)=>{

          if(value == null) { }
          else {
            this.setState({ defaultListName : value });
          }
        })

        AsyncStorage.getItem('USERROLE').then((value)=>{

          if(value == null) { }
          else {
            this.setState({USERROLE : value});
          }
          setTimeout(() => {
            this.setState({ startLoader: false })
          }, 2000)
        })

      }
    );
   
  }

  functionGoback = () => {
    this.props.navigation.goBack();
  }

  functionOpenPage = (Value, ITEM) => {

    if(ITEM == 'N/A')
    {

    }
    else
    {
      const { ProductName, ItemNum } = this.state;
      this.props.navigation.navigate(Value, { NAME: this.props.P_NAME, PRODUCT_ID: ItemNum });
    }
  }

  functionOpenPageBrand = (Value, Name, Id, Dept) => {
    this.setState({ startLoader: true })
    this.props.navigation.navigate(Value, { Title:Name, DeptID : Id,DEPT_PAGE : Dept })
  }

  functionHideQR = (Value) => {
    this.setState({ DescriptionView: Value });
  }

  functionAddItemtoList = async(getDetail) => {

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
      const {ItemNum} = this.state;
      var Qty = 1;
      AsyncStorage.getItem('DEFAULTLISTID').then(
        (values) => {
          DefaultId = values;
          if(getDetail === 1) {
            this.functionShowAlert('Please create a new list.');
          }
          else if (DefaultId == null) {
            this.functionShowAlert('Please create a new list.');
          }
          else {
  
           this.props.AddDetailsitemtoList(ItemNum, Qty)
  
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

  updateBody = (Value) => {
    if(Value === 'Detail') {
      this.setState({ showDetailLoader: true })
      setTimeout(() => {
        this.setState({ DetailShow: true, QrlayoutShow: false, PrintLayout: false })
        this.setState({ showDetailLoader: false })
      }, 1000)
    }
    else if(Value === 'QRCode') {
      this.setState({ showDetailLoader: true })
      setTimeout(() => {
        this.setState({ DetailShow: false, QrlayoutShow: true, PrintLayout: false })
        this.setState({ showDetailLoader: false })
      }, 1000)
    }
    else if(Value === 'PrintLabel') {
      this.setState({ showDetailLoader: true })
      setTimeout(() => {
        this.setState({ DetailShow: false, QrlayoutShow: false, PrintLayout: true })
        this.setState({ showDetailLoader: false })
      }, 1000)
    }
    else {
      this.setState({ showDetailLoader: true })
      setTimeout(() => {
        this.setState({ DetailShow: true, QrlayoutShow: false, PrintLayout: false })
        this.setState({ showDetailLoader: false })
      }, 1000)
    }
  }

  toggleDialog = (e) => {
    this.setState({ VisibleDialog: !this.state.VisibleDialog });
    this.setState({ fillStock: '' });
  }

  submitStock = (e, action) => {
    // alert(e);
    if(action === 'add') {
      this.setState({ fillStock: e })
    }
    if(action === 'update') {
      const data = {
        "itemNum": this.state.ItemNum,
        "fillStock": this.state.fillStock
       }
       var URL = NetworkApi.BASE_URL + Constant.STORE_ID + NetworkApi.ITEM_STOCK_FILL_UPDATE;
      axios.post(URL, data, {
        header: {
          "Content-type": "application/json"
        }
      })
        .then((res) => {
          alert(JSON.stringify(res.data))
          this.toggleDialog();
          this.props.navigation.goBack();
        })
        .catch((err) => {
          alert(JSON.stringify(err))
        })
      // alert(this.state.fillStock)
    }
  }

  productTypeFilterProduct = (pType) => {
    if(pType === 'N/A') {
      alert('Product type is not valid.');
      return false;
    }
    this.setState({ startLoader: true })
    this.props.navigation.navigate('SeeLinkItemsListContainer', { PRODUCTTYPE: pType })
  }

  productThemeFilterProduct = (pTheme) => {
    if(pTheme === 'N/A') {
      alert('Product theme is not valid.');
      return false;
    }
    this.setState({ startLoader: true })
    this.props.navigation.navigate('SeeThemeListContainer', { PRODUCTTHEME: pTheme })
  }

  functionSetStock=(Value)=>{
    this.setState({CurrentStock : Value})
  }

  functionsetStockRadioButton=(value)=>{
    if(value == 'ADD') {
      this.setState({Add : true, Total : false})
    }
    else if(value == 'TOTAL') {
      this.setState({Add : false, Total : true})
    }
  }

  functionStockUpdate = () => {
    const {CurrentStock} = this.state;
    if(CurrentStock == '') {
      alert('Please enter Current Stock')
    }
    else {
      this.props.hitStockUpdateApi(this.state);
    }
  }

  functionSetLocation=(Value)=>{
    this.setState({CurrentLocation : Value})
  }

  functionLocationUpdate=()=>{
    const {CurrentLocation, ItemNum} = this.state;
    if(CurrentLocation == '') {
      alert('Please enter StockLocation')
    }
    else {
     this.props.hitStockLocationApi(this.state);
    }
  }

  updatePrintCount = (e) => {
    this.setState({ printCount: e })
  }

  callUpdateApi = (e) => {
    alert('Working on it...')
  }

  functionSetDefaultList = (val, index, dataArray) => {
    
    for(let count = 0; count < dataArray.length; count++) {
      if(val === dataArray[count].Name) {
        this.props.SetDefaultList(dataArray[count].Id);
      }
    }

    if(val === 'Create new list') {
      this.setState({ getDetail: 1 });
    }
    else {
      this.setState({ getDetail: 0 });
    }
  }
  render() {
    const Model = {
      Data: this.state.Data,
      Title: this.state.Title,
      CreateListModalVisible: this.state.CreateListModalVisible,
      ListName: this.state.ListName,
      ListNotes: this.state.ListNotes,
      Item_Number : this.state.ItemNum,
      USERROLE : this.state.USERROLE,
      DetailShow: this.state.DetailShow,
      QrlayoutShow: this.state.QrlayoutShow,
      PrintLayout: this.state.PrintLayout,
      bgUpdate: this.state.bgUpdate,
      showDetailLoader: this.state.showDetailLoader,
      startLoader: this.state.startLoader,
      VisibleDialog: this.state.VisibleDialog,
      toggleDialog: this.toggleDialog,
      fillStock: this.state.fillStock,
      functionSetStock: this.functionSetStock,
      functionsetStockRadioButton: this.functionsetStockRadioButton,
      CurrentStock: this.state.CurrentStock,
      Add: this.state.Add,
      Total: this.state.Total,
      CurrentLocation: this.state.CurrentLocation,
      functionStockUpdate: this.functionStockUpdate,
      functionSetLocation: this.functionSetLocation,
      functionLocationUpdate: this.functionLocationUpdate,
      printCount: this.state.printCount,
      updatePrintCount: this.updatePrintCount,
      callUpdateApi: this.callUpdateApi,
      defaultListName: this.state.defaultListName,
      getDetail: this.state.getDetail,
      //REDUX
      //Item_Number: this.props.ITEM_NUM,
      AddLoader : this.props.CategoryLoader,

      ShowLoader: this.props.Loader,
      PDescription: this.props.Response,
      Brand: this.props.BRAND,
      Ingredients: this.props.INGREDIENTS,
      ProductType: this.props.PRODUCTTYPE,
      Weight: this.props.WEIGHT,
      Usage: this.props.USAGE,
      ImageUrl: this.props.IMAGE_PATH,
      Stock: this.props.ITEM_STOCK,
      EmpStock: this.props.ITEM_STOCK_SEC,
      Price: this.props.ITEM_PRICE,
      Cost: this.props.ITEM_COST,
      Location: this.props.ITEM_LOCATION,
      ProductName: this.props.P_NAME,

      //Title: this.props.P_NAME,
      ADDED_LIST : this.props.SELECTED_LIST,
      THEME: this.props.THEME,
      PICKUP: this.props.PICKUP,
      REFILL: this.props.REFILL,
      DescriptionView: this.state.DescriptionView,
      functionGoback: this.functionGoback,
      functionHideQR: this.functionHideQR,
      functionOpenPage: this.functionOpenPage,
      functionOpenPageBrand: this.functionOpenPageBrand,
      functionAddItemtoList : this.functionAddItemtoList,
      functionSetItemName : this.functionSetItemName,
      functionSetItemNotes : this.functionSetItemNotes,
      functionShowCreateDialog : this.functionShowCreateDialog, 
      functionSubmit : this.functionSubmit,
      updateBody: this.updateBody,
      submitStock: this.submitStock,
      productTypeFilterProduct: this.productTypeFilterProduct,
      productThemeFilterProduct: this.productThemeFilterProduct,
      ListData: this.props.ListData,
      ListNameArray: this.props.ListNameArray,
      ListIdArray: this.props.ListIdArray,
      functionSetDefaultList: this.functionSetDefaultList,
      sendDefaultVal: this.props.sendDefaultVal,
    }

    return <Details {...Model} />
  }
}


function mapToStateProps(state) {
  const { Loader, Response, BRAND, INGREDIENTS, PRODUCTTYPE, WEIGHT, USAGE, IMAGE_PATH, ITEM_STOCK, ITEM_STOCK_SEC,
    ITEM_PRICE, ITEM_COST, ITEM_LOCATION, P_NAME, ITEM_NUM,SELECTED_LIST, THEME, PICKUP, REFILL } = state.DetailsReducer;
    
    const { CategoryLoader,  } = state.DepartmentReducer;

    const { ListData, ListNameArray, ListIdArray, sendDefaultVal } = state.ListReducer;
    // alert(sendDefaultVal);
  return {
    Loader, Response, BRAND, INGREDIENTS, PRODUCTTYPE, WEIGHT, USAGE, IMAGE_PATH, ITEM_STOCK, ITEM_STOCK_SEC, ITEM_PRICE, ITEM_COST,
    ITEM_LOCATION, P_NAME, ITEM_NUM, CategoryLoader,SELECTED_LIST, THEME, PICKUP, REFILL, ListData, ListNameArray, ListIdArray,
    sendDefaultVal
  };


}

export default connect(mapToStateProps, { GetProductDetail, CreateList, AddDetailsitemtoList, 
  hitStockUpdateApi, hitStockLocationApi, GetallList, SetDefaultList })(DetailsContainer);