import React, { Component } from 'react';
import ActiveCateringDetails from './ActiveCateringDetails';
import { Alert, Platform } from 'react-native';
import HourModel from '../../../../model/cateringDetails/HourModel';
import MintuesModel from '../../../../model/cateringDetails/MintuesModel';
import { connect } from 'react-redux';
import { GetCateringItem, GetfunctionShowEdit, AddNewCatering, UpdateCatering, DeleteCateringItem } from '../../../../action';


class ActiveDetailsContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      Title: 'Catering Details',
      CurrentDate: '',
      MinimumDate: '',
      PaymentCurrentDate: '',
      HourList: HourModel,
      MintuesList: MintuesModel,
      PaymentPicker_Visible: false,
      mTempEdit: '',
      mTempQty: '',
      mTempNotes: '',


      ShowLoader: false,
      Selected_Hour: '',
      Selected_Mintues: '',
      Selected_AMPM: '',
      SelectedShapper: '',
      Selected_Deliver: '',
      Payment_Type: '',
      Payment_Amount: '0',
      Notes: '',
      Name: '',
      Phone: '',
      Cost: '',
      Email: 'Test@gmail.com',
      Address: 'Phase8Mohali punjab',
      SelectedCateringCount: '',
      SelectedCateringDate: '',
      CateringID: '',


      Show_ItemLoader: false,
      Item_List: [],
      ItemName: '',
      ItemQty: '',
      ItemNotes: '',

    }
  }

  componentWillMount() {

    var ITEM = this.props.navigation.getParam('ITEM');
    var NAME = ITEM.Name;
    var PHONE = ITEM.Phone;
    var COST = ITEM.Cost.replace('$', '');
    var DATE = ITEM.FullDate;
    var TIME = ITEM.Time;
    var SHAPPER = ITEM.Shapper;
    var DELIVER = ITEM.Deliver;
    var EMAIL = ITEM.Email;
    var PAYMENTTYPE = ITEM.Paymenttype;
    var NOTES = ITEM.Notes;
    var PAYMENTAMOUNT = ITEM.Paymentamount;
    var ADDRESS = ITEM.Address;
     var  CateringCount=ITEM.Cateringcount;
     var mFullDate = ITEM.FullDate;
     var PaymentDate = ITEM.PaymentDate;
     var Cateringid= ITEM.Cateringid;


    let time = TIME.split(':');
    let mHour = time[0];
    let mintue = time[1];
    let filterMintue = mintue.split(" ");
    let mintues = filterMintue[0];
    let ampm = filterMintue[1];





    this.setState({
      Name: NAME, Phone: PHONE, Cost: COST, CurrentDate: DATE, Selected_Hour: mHour, Selected_Mintues: mintues,
      Selected_AMPM: ampm, SelectedShapper: SHAPPER, Selected_Deliver: DELIVER, Email: EMAIL, Payment_Type: PAYMENTTYPE,
      Notes: NOTES, Payment_Amount: PAYMENTAMOUNT, Address : ADDRESS, SelectedCateringCount :CateringCount,SelectedCateringDate:mFullDate,
      PaymentCurrentDate : PaymentDate,CateringID :Cateringid,
    });

    this.props.GetCateringItem(ITEM.Cateringid);





    
    var today = new Date();
    date = today.getFullYear() + "-" + parseInt(today.getMonth() + 1) + "-" + today.getDate();
    this.setState({ MinimumDate: date, });


  }

  functionGoback = () => {
    this.props.navigation.goBack();
  };
  functionShowDeleteAlert = (index) => {
    Alert.alert(
      '',
      'Are you sure, You want to Delete it?',
      [

        { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
        { text: 'OK', onPress: () => this.props.DeleteCateringItem(index) },
      ],
      { cancelable: false }
    )
  };




  functionSetName = (txt) => {
    this.setState({ Name: txt.value })
  }
  functionSetPhone = (txt) => {
    this.setState({ Phone: txt.value })
  }

  functionSetCost = (txt) => {



    this.setState({ Cost: txt })
  }
  functionSetCateringcout = (txt) => {
    this.setState({ SelectedCateringCount: txt.value })
  }

  functionSetHour = (value) => {
    this.setState({ Selected_Hour: value })
  }


  functionSetMintue = (value) => {
    this.setState({ Selected_Mintues: value })
  }
  functionSetAMPM = (value) => {

    this.setState({ Selected_AMPM: value })
  }

  functionSelectedShapper = (value) => {
    this.setState({ SelectedShapper: value })
  }
  functionSelectedDelivery = (value) => {
    this.setState({ Selected_Deliver: value })
  }
  functionSetAddress = (txt) => {

    this.setState({ Address: txt.value })
  }
  functionSetEmail = (txt) => {

    console.log('Email', txt.value);


    this.setState({ Email: txt.value })
  }
  functionSetDate = (Value) => {


    this.setState({ SelectedCateringDate: Value.date })
  }

  functionSetPaymentDate = (Value) => {
    this.setState({ PaymentCurrentDate: Value.date })
  }

  functionSetPaymentAmount = (value) => {

    this.setState({ Payment_Amount: value.text })
  }


  functionSetNotes = (value) => {

    this.setState({ Notes: value.text })
  }
  functionSetItemName = (value) => {
    this.setState({ ItemName: value.text })
  }

  functionSetItemquantity = (value) => {
    this.setState({ ItemQty: value.text })
  }

  functionSetItemNotes = (value) => {
    this.setState({ ItemNotes: value.text })
  }
  functionAddItem = () => {

    const { ItemName, ItemNotes, ItemQty } = this.state;

    if (ItemName == '') {

      alert('Please enter ItemName')
    }
    else if (ItemQty == "") {
      alert('Please enter Item quantity')
    }

    else {
      this.props.AddNewCatering(ItemName, ItemQty, ItemNotes);

      this.setState({ ItemName: '', ItemNotes: '', ItemQty: '', })

    }
  }


  functionUpdateCatering = () => {

    if(this.props.Catering_ListItem.length == 0)
    {
      alert('Please add atleast one Catering Item')    }
    else
    {
      this.props.UpdateCatering(this.state);
    }

    


  }

  functionShowPaymentType = () => {

    if (Platform.OS == 'ios') {
      ActionSheetIOS.showActionSheetWithOptions(
        {
          options: ['Cancel', 'Cash', 'Check', 'Credit'],
          // destructiveButtonIndex: 1,
          cancelButtonIndex: 0,
          tintColor: Theme.PRIMARY_COLOR
        },
        (buttonIndex) => {
          if (buttonIndex === 1) {
            this.setState({ Payment_Type: 'Cash' })
          }
          else if (buttonIndex === 2) {
            this.setState({ Payment_Type: 'Check' })
          }
          else if (buttonIndex === 3) {
            this.setState({ Payment_Type: 'Credit' })
          }

        },
      );
    }
    else {
      this.setState({ PaymentPicker_Visible: true })
    }
  }

  functionPaymentDialogHide = () => {
    this.setState({ PaymentPicker_Visible: false })
  }

  functionSetPaymentType = (text) => {
    this.setState({ Payment_Type: text, PaymentPicker_Visible: false })
  }


  functionShowEdit = (ID, CHECK, Item) => {

    this.setState({ mTempEdit: Item.itemName, mTempQty: Item.quantity })


    const { mTempEdit, mTempQty, mTempNotes } = this.state;
    this.props.GetfunctionShowEdit(ID, CHECK, mTempEdit, mTempQty, mTempNotes);


  }
  functionEditItem = (value) => {
    this.setState({ mTempEdit: value.text })
  }

  functionEditQty = (value) => {
    this.setState({ mTempQty: value.text })
  }
  functionEditNotes = (value) => {
    this.setState({ mTempNotes: value.text })
  }
  render() {
    const Model = {
      Title: this.state.Title,

      CurrentDate: this.state.CurrentDate,
      HourList: this.state.HourList,
      MintuesList: this.state.MintuesList,
      PaymentCurrentDate: this.state.PaymentCurrentDate,
      Name: this.state.Name,
      Phone: this.state.Phone,
      Cost: this.state.Cost,
      Email: this.state.Email,
      Address: this.state.Address,
      SelectedCateringCount: this.state.SelectedCateringCount,
      MinimumDate: this.state.MinimumDate,
      Selected_Hour: this.state.Selected_Hour,
      Selected_Mintues: this.state.Selected_Mintues,
      Selected_AMPM: this.state.Selected_AMPM,
      SelectedShapper: this.state.SelectedShapper,
      Selected_Deliver: this.state.Selected_Deliver,
      Payment_Type: this.state.Payment_Type,
      Notes: this.state.Notes,
      Payment_Amount: this.state.Payment_Amount,
      PaymentPicker_Visible: this.state.PaymentPicker_Visible,
      mTempEdit: this.state.mTempEdit,
      mTempQty: this.state.mTempQty,

      ItemName: this.state.ItemName,
      ItemQty: this.state.ItemQty,
      ItemNotes: this.state.ItemNotes,
      SelectedCateringDate: this.state.SelectedCateringDate,


      //REDUX
      Show_ItemLoader: this.props.Catering_List_Loader,
      Item_List: this.props.Catering_ListItem,
      ShowLoader: this.props.Update_Loader,



      functionShowDeleteAlert: this.functionShowDeleteAlert,
      functionGoback: this.functionGoback,
      functionShowEdit: this.functionShowEdit,
      functionSetDate: this.functionSetDate,
      functionSetPaymentDate: this.functionSetPaymentDate,
      functionSetPaymentAmount: this.functionSetPaymentAmount,
      functionSetPaymentType: this.functionSetPaymentType,
      functionSetNotes: this.functionSetNotes,
      functionSetItemName: this.functionSetItemName,
      functionSetItemquantity: this.functionSetItemquantity,
      functionSetItemNotes: this.functionSetItemNotes,
      functionAddItem: this.functionAddItem,
      functionUpdateCatering: this.functionUpdateCatering,
      functionSetName: this.functionSetName,
      functionSetPhone: this.functionSetPhone,
      functionSetCost: this.functionSetCost,
      functionSetCateringcout: this.functionSetCateringcout,
      functionSetHour: this.functionSetHour,
      functionSetMintue: this.functionSetMintue,
      functionSetAMPM: this.functionSetAMPM,
      functionSelectedShapper: this.functionSelectedShapper,
      functionSelectedDelivery: this.functionSelectedDelivery,
      functionSetAddress: this.functionSetAddress,
      functionSetEmail: this.functionSetEmail,
      functionShowPaymentType: this.functionShowPaymentType,
      functionPaymentDialogHide: this.functionPaymentDialogHide,
      functionEditItem: this.functionEditItem,
      functionEditQty: this.functionEditQty,
      functionEditNotes: this.functionEditNotes,

    }

    return <ActiveCateringDetails {...Model} />
  }
}

function mapToStateProps(state) {
  const { Catering_List_Loader, Catering_ListItem, Update_Loader } = state.CateringReducer;

  return { Catering_List_Loader, Catering_ListItem, Update_Loader };

}

export default connect(mapToStateProps, { GetCateringItem, GetfunctionShowEdit, AddNewCatering, UpdateCatering, DeleteCateringItem })(ActiveDetailsContainer);
