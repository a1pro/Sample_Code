import React, { Component } from 'react';
import {Alert, Linking, Image,PermissionsAndroid, Platform} from 'react-native';
import Details from './Details';
import { connect } from 'react-redux';
import { GetItemDetails, UpdateListName, UpdateQuantityIncrease, UpdateQuantityMinus, ShowDeleteIcon ,
  SelectAllCheckbox,
  SelectSingleCheckbox,
  DeleteItemApi,AllDeleteListItem,SendMailApi
} from '../../action';
import UpdateListModel from '../../model/mylist/UpdateListModel';
import ListDetailModel from '../../model/mylist/ListDetailModel';
import NumberTable from '../../model/mylist/NumberTable';

import RNHTMLtoPDF from 'react-native-html-to-pdf';
import NetworkApi from '../../network/NetworkApi';

import Mailer from 'react-native-mail';

class DetailsContainer extends Component {

  onCapture = uri => {
   this.setState({ImageUri : uri});
  }

  constructor(props) {
    super(props)
    var that = this;
    async function requestExternalWritePermission() {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            title: 'CameraExample App External Storage Write Permission',
            message:
              'CameraExample App needs access to Storage data in your SD Card ',
          }
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          //If WRITE_EXTERNAL_STORAGE Permission is granted
          //changing the state to show Create PDF option
          that.setState({ isPermitted: true });
        } else {
          alert('WRITE_EXTERNAL_STORAGE permission denied');
        }
      } 
      catch (err)
     {
    
      alert('Write permission err', err);
        console.warn(err);
     
      
      }
    }
    
   
    if(Platform.OS == 'ios')
      {

      }
      else
      {
        //Calling the External Write permission function
    requestExternalWritePermission();
      }
    this.viewRef = React.createRef();
    this.state = {
      Title: 'Test',
      Quantity: 1,
      ShowLoader: false,
      List: [],
      ShowDeleteTab: false,
      QuantityList:[...NumberTable],
      Tab: {

        EMAILBack: '#F79942',
        EMAILText: 'black',
        NOTEBack: 'black',
        NOTEText: 'white',
        ClearBack: 'black',
        ClearText: 'white'
      },


      CreateListModalVisible: false,
      ListName: '',
      ListNotes: '',
      Item_Id: '',
      UpdateList: [],
      ImageUri:'https://reactnativecode.com/wp-content/uploads/2018/02/motorcycle.jpg',
    }
  }

  componentWillMount() {

    var item = this.props.navigation.getParam('ITEM', '');
    var mTitle = item.Name;
    var mNotes = item.Notes;
    var ID = item.Id;

    this.setState({ Title: mTitle, ListName: mTitle, ListNotes: mNotes, Item_Id: ID })

    this.props.GetItemDetails(item.Id);


   // this.props.GetItemDetails('fca606af-20cf-4c99-8853-72ea4ebb8ebf');
    


  }
  functionGoback = () => {
    this.props.navigation.goBack();
  };
  functionTabClick = (Value) => {

    if (Value == 'CAT') {

      var mTab = this.state.Tab;
      mTab['EMAILBack'] = '#F79942';
      mTab['EMAILText'] = 'black';
      mTab['NOTEBack'] = 'black';
      mTab['NOTEText'] = 'white';
      mTab['ClearBack'] = 'black';
      mTab['ClearText'] = 'white';


      this.setState({ ...this.state.Tab, mTab })
    }
    else if (Value == 'NOTE') {
      var mTab = this.state.Tab;
      mTab['EMAILBack'] = 'black';
      mTab['EMAILText'] = 'white';
      mTab['NOTEBack'] = '#F79942';
      mTab['NOTEText'] = 'black';
      mTab['ClearBack'] = 'black';
      mTab['ClearText'] = 'white';

      this.setState({ ...this.state.Tab, mTab })
    }
    else {
      var mTab = this.state.Tab;
      mTab['EMAILBack'] = 'black';
      mTab['EMAILText'] = 'white';
      mTab['NOTEBack'] = 'black';
      mTab['NOTEText'] = 'white';
      mTab['ClearBack'] = '#F79942';
      mTab['ClearText'] = 'black';

      this.setState({ ...this.state.Tab, mTab })
    }



  }

  functionQuantityIncrease = (Value, ITEM) => {

    const {Item_Id} = this.state;


     this.props.UpdateQuantityIncrease(ITEM, Value,Item_Id);
   
  }
  functionQuantityMinus = (Value) => {

    this.setState({ ShowDeleteTab: false })
    this.props.UpdateQuantityMinus(Value)


  }
  functionShowCreateDialog = (Value) => {
    this.setState({ CreateListModalVisible: Value, })
  }
  functionSubmit = () => {

    const { ListName, ListNotes } = this.state;

    if (ListName === '') {
      alert('Please enter List Name')
    }
    else 
    {
      this.setState({ CreateListModalVisible: false, Title: ListName })
      this.props.UpdateListName(this.state,);
    }

  }

  functionSetItemName = (value) => {
    this.setState({ ListName: value.txt })
  }

  functionSetItemNotes = (value) => {

    this.setState({ ListNotes: value.txt })
  }

  functionDeleteIconVisible = () => {

    this.setState({ ShowDeleteTab: true })
    this.props.ShowDeleteIcon(true);
  }

  functionDeleteIconHide = (value) => {
    this.props.ShowDeleteIcon(false);
    this.setState({ ShowDeleteTab: value })
  }



  functionAllSelectCheck=()=>{

    this.props.SelectAllCheckbox();
  }

  functionSelectOne=(ITEM)=>{

     var Itemnum = ITEM.Itemnum;
     this.props.SelectSingleCheckbox(Itemnum);
    
  }

  functionDeleteItem=()=>
  {
   
   
    var mTemp = this.props.DetailList;
    console.log('mTemp', mTemp);

    var List = [];
    for (let index = 0; index < mTemp.length; index++)
    {


      var Check=mTemp[index].Check;
      if(Check)
      {
        var itemNum = mTemp[index].Itemnum;
        var qty = mTemp[index].Quantity;
  
        var Actor = new UpdateListModel(itemNum, qty);
        List.push(Actor);
      }
      else
      {

      }
      

    }

    if(List.length == 0)
    {
      alert('Please select Checkbox')
    }

    

  }



  functionClearAll=()=>{

    const {Item_Id} = this.state;

    Alert.alert(
      '',
      'All List Items will be cleared. Do you like to proceed?',
      [
        
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => this.props.AllDeleteListItem(Item_Id)},
      ],
      {cancelable: false},
    );
  }


  functionOpenMail=()=>
  {

      var mTempArray = this.props.DetailList;

      if(mTempArray.length == 0)
      {

        alert('List is empty')
      }
      else
      {
        var element ="";

        for (let index = 0; index < mTempArray.length; index++) 
        {
          if(index == 0)
          {
            element="<style>td, th {border-bottom: 1px solid #F79942;}</style><table><tr><td ><img height='200px' width='200px' src='"+NetworkApi.IAMGE_BASE_URL+mTempArray[index].Imagepath +"'/></td><td style='padding: 15px 0px;vertical-align: top;'><b><span style='font-size: 25px;'>"+mTempArray[index].Itemname+"</span></b><br><br><span style='font-size: 22px;'>In stock : "+mTempArray[index].Instock +"<br>"+mTempArray[index].Location +"<br>Qunty : "+mTempArray[index].Quantity+"</span></td></tr></table>";
          
            console.log('element',element);
          }
          else
          {
            element= element+ "<style>td, th {border-bottom: 1px solid #F79942;}</style><table><tr><td ><img height='200px' width='200px' src="+NetworkApi.IAMGE_BASE_URL+mTempArray[index].Imagepath +   "/></td><td style='padding: 15px 0px;vertical-align: top;'><b><span style='font-size: 25px;'>"+mTempArray[index].Itemname+"</span></b><br><br><span style='font-size: 22px;'>In stock : "+mTempArray[index].Instock +"<br>"+mTempArray[index].Location +"<br>Qunty : "+mTempArray[index].Quantity+"</span></td></tr></table>";
    
          }}
    
       
         
         this.props.SendMailApi(element);
      }
 
   


    

  }
  

  functionDeleteSingleItem=(ITEM)=>{

   
    const {Item_Id} = this.state;

    Alert.alert(
      '',
      'Are you sure you want to delete this Item?',
      [
        
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () =>  this.props.DeleteItemApi(ITEM,Item_Id )},
      ],
      {cancelable: false},
    );
   
    
  }

  
  functionOpenPage = (Name, value, ) => 
  {
  
   this.props.navigation.navigate(Name, {MIC :value})
  }

  openDetailPage = (itemData) => {
    this.props.navigation.navigate('ProductDetails', { ITEMNUMBER: itemData.Itemnum })
  }
  

  
  render() {
    const Model = {
      Title: this.state.Title,
      Tab: this.state.Tab,
      Quantity: this.state.Quantity,
      CreateListModalVisible: this.state.CreateListModalVisible,
      ListName: this.state.ListName,
      ListNotes: this.state.ListNotes,
      ShowDeleteTab: this.state.ShowDeleteTab,
      QuantityList : this.state.QuantityList,
      ImageUri : this.state.ImageUri,


      //REDUX

      ShowLoader: this.props.DetailLoader,
      List: this.props.DetailList,

      functionGoback: this.functionGoback,
      functionTabClick: this.functionTabClick,
      functionQuantityIncrease: this.functionQuantityIncrease,
      functionQuantityMinus: this.functionQuantityMinus,
      functionShowCreateDialog: this.functionShowCreateDialog,
      functionSubmit: this.functionSubmit,
      functionSetItemName: this.functionSetItemName,

      functionSetItemNotes: this.functionSetItemNotes,
      functionDeleteIconVisible: this.functionDeleteIconVisible,
      functionDeleteIconHide: this.functionDeleteIconHide,
      functionAllSelectCheck : this.functionAllSelectCheck,
      functionSelectOne : this.functionSelectOne,
      functionClearAll : this.functionClearAll,
      functionDeleteItem : this.functionDeleteItem,
      functionOpenMail : this.functionOpenMail,
      functionDeleteSingleItem : this.functionDeleteSingleItem,
      functionOpenPage : this.functionOpenPage,
      openDetailPage: this.openDetailPage,
    }

    return <Details {...Model} />
  }
}

function mapToStateProps(state) {

  const { DetailLoader, DetailList } = state.ListReducer;
  return { DetailLoader, DetailList }
}

export default connect(mapToStateProps, {
  GetItemDetails, UpdateListName, UpdateQuantityIncrease,
  UpdateQuantityMinus, ShowDeleteIcon,SelectAllCheckbox,SelectSingleCheckbox,DeleteItemApi,AllDeleteListItem,SendMailApi
})(DetailsContainer)