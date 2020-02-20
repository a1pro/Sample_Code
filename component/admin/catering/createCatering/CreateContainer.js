import React, { Component } from 'react';
import CreateCatering from './CreateCatering';
import HourModel from '../../../../model/cateringDetails/HourModel';
import MintuesModel from '../../../../model/cateringDetails/MintuesModel';
import { connect } from 'react-redux';
import { CreateCateringApi } from '../../../../action';
import { ActionSheetIOS, Platform, Alert } from 'react-native';
import { Theme } from '../../../../config';
import AddItemModel from '../../../../model/catering/AddItemModel';

var mTempList=[];

class CreateContainer extends Component {

    constructor(props) {
        super(props)
        this.state = {
            Title: 'New Catering',
            Show_Loader: false,
            PaymentPicker_Visible: false,

            Name: "",
            Phone: "",
            Cost: "",
            Email: "",
            Address: "",
            CateringCount: "",
            Notes: "",
            ItemName: '',
            ItemQty: '',
            ItemNotes: '',
            Item_List :[],


            HourList: HourModel,
            MintuesList: MintuesModel,
            CateringDate: "",
            MinimumDate: "",
            SelectedHour: "",
            SelectedMintue: "",
            SelectedAMPM: "",
            Selected_Shapper: "",
            Selected_Deliver: "",
            Payment_Amount: "",
            Payment_Type: "",
            PaymentCurrentDate: "",
            PaymentMinimumDate: "",

        }
    }

    componentDidMount = () => {
        mTempList=[];
        var today = new Date();


        date= today.getFullYear()+ "-"+parseInt(today.getMonth() + 1)+"-" + today.getDate();

         this.setState({ CateringDate: date, MinimumDate: date, PaymentCurrentDate: date, PaymentMinimumDate: date });


       
    }

    functionGoback = () => {
        this.props.navigation.goBack();
    };

    functionSetName = (txt) => {
        this.setState({ Name: txt.value })
    }
    functionSetPhone = (txt) => {
        this.setState({ Phone: txt.value })
    }
    functionSetCost = (txt) => {
        this.setState({ Cost: txt.value })
    }
    functionSetCateringcout = (txt) => {
        this.setState({ CateringCount: txt.value })
    }
    functionSetEmail = (txt) => {
        this.setState({ Email: txt.value })
    }
    functionSetAddress = (txt) => {

        this.setState({ Address: txt.value })
    }
    functionSetNotes = (txt) => {
        this.setState({ Notes: txt.value })
    }
    functionSetCateringDate = (value) => {

        console.log('value.date',value.date);
        
        this.setState({ CateringDate: value.date })
    }

    functionSetHour = (value) => {
        this.setState({ SelectedHour: value })
    }
    functionSetMintue = (value) => {
        this.setState({ SelectedMintue: value })
    }
    functionSetAMPM = (value) => {

        this.setState({ SelectedAMPM: value })
    }
    functionSelectedShapper = (value) => {
        this.setState({ Selected_Shapper: value })
    }
    functionSelectedDelivery = (value) => {
        this.setState({ Selected_Deliver: value })
    }
    functionSetPaymentAmount = (value) => {

         this.setState({ Payment_Amount: value.txt })
    }
    functionSetPaymentType = (text) => {
        this.setState({ Payment_Type: text, PaymentPicker_Visible: false })
    }

    functionSetPaymentDate = (text) => {
        this.setState({ PaymentCurrentDate: text.date })
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

        const {ItemName, ItemNotes, ItemQty} = this.state;

        if(ItemName == '')
        {

            alert('Please enter ItemName')
        }
        else if( ItemQty == "")
        {
            alert('Please enter Item quantity')
        }
       
        else
        {
            var Actor= new AddItemModel(ItemName, ItemQty, ItemNotes);
            mTempList.push(Actor);
            this.setState({ItemName :'', ItemNotes :'', ItemQty :'', Item_List : mTempList})
    
            alert('Item added successfully');
           
        }
        
        
        

    }


    functionValidation = () => {
        const { Name, Phone, Selected_Shapper, Selected_Deliver, Cost, SelectedHour, SelectedMintue, SelectedAMPM, Email, Address,
             CateringCount, Item_List, Payment_Amount, Payment_Type } = this.state;
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

       
      
        
        if (Name == "") {

            alert('Please enter Name.')
        }
        else if (Phone == "") {
            alert('Please enter Phone number.')
        }
        else if (Cost == '') {
            alert('Please enter Cost')
        }
        else if (SelectedHour == "") {
            alert('Please enter Hour.')

        }
        else if (SelectedMintue == "") {
            alert('Please enter Mintues.')
        }
        else if (SelectedAMPM == "") {
            alert('Please enter Am/Pm')
        }
        else if (Selected_Shapper == '') {
            alert('Please select Shapper')
        }
        else if (Selected_Deliver == '') {
            alert('Please select Delivery')
        }
        else if (CateringCount == "") {
            alert('Please enter Catering count')
        }
        else if (Email !== "" && reg.test(Email) === false) {

            alert('Please enter valid Email')

        }
        else if (Address == 'Y' ) {
            alert('Please enter Address')
        }
       else if (Payment_Amount !== "" && Payment_Type == "") {
            alert('Please enter Paymenttype')
        }
        else if(Item_List.length == 0)
        {
          alert('Please add atleast one Catering Item')
        }
        else 
        {
              this.props.CreateCateringApi(this.state);
        
        }


       
    }
    functionPaymentDialogHide = () => {
        this.setState({ PaymentPicker_Visible: false })
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




    render() {
        const Model = {
            Title: this.state.Title,
            Name: this.state.Name,
            Phone: this.state.Phone,
            Cost: this.state.Cost,
            Email: this.state.Email,
            Address: this.state.Address,
            TableList: this.state.TableList,
            CateringCount: this.state.CateringCount,
            Notes: this.state.Notes,
            HourList: this.state.HourList,
            MintuesList: this.state.MintuesList,
            CateringDate: this.state.CateringDate,
            MinimumDate: this.state.MinimumDate,
            SelectedMintue: this.state.SelectedMintue,
            SelectedAMPM: this.state.functionSetAMPM,
            Selected_Shapper: this.state.Selected_Shapper,
            Selected_Deliver: this.state.Selected_Deliver,
            Payment_Amount: this.state.Payment_Amount,
            PaymentMinimumDate: this.state.PaymentMinimumDate,
            PaymentCurrentDate: this.state.PaymentCurrentDate,
            PaymentMinimumDate: this.state.PaymentMinimumDate,
            Payment_Type: this.state.Payment_Type,
            PaymentPicker_Visible: this.state.PaymentPicker_Visible,
            ItemName: this.state.ItemName,
            ItemNotes: this.state.ItemNotes,
            ItemQty: this.state.ItemQty,
            Item_List : this.state.Item_List,


            //REDUX
            Show_Loader: this.props.Add_CateringLoader,

            functionGoback: this.functionGoback,
            functionSetName: this.functionSetName,
            functionSetPhone: this.functionSetPhone,
            functionSetCost: this.functionSetCost,
            functionSetCateringcout: this.functionSetCateringcout,
            functionSetEmail: this.functionSetEmail,
            functionSetAddress: this.functionSetAddress,
            functionSetNotes: this.functionSetNotes,
            functionSetDate: this.functionSetDate,
            functionSetHour: this.functionSetHour,

            functionSetMintue: this.functionSetMintue,
            functionSetAMPM: this.functionSetAMPM,
            functionSelectedShapper: this.functionSelectedShapper,
            functionSelectedDelivery: this.functionSelectedDelivery,
            functionSetPaymentAmount: this.functionSetPaymentAmount,
            functionSetPaymentType: this.functionSetPaymentType,
            functionSetPaymentDate: this.functionSetPaymentDate,
            functionValidation: this.functionValidation,
            functionSetCateringDate: this.functionSetCateringDate,
            functionShowPaymentType: this.functionShowPaymentType,
            functionPaymentDialogHide: this.functionPaymentDialogHide,
            functionAddItem: this.functionAddItem,
            functionSetItemName: this.functionSetItemName,
            functionSetItemquantity: this.functionSetItemquantity,
            functionSetItemNotes: this.functionSetItemNotes,

        }
        return (
            <CreateCatering  {...Model} />
        )
    }
}


function mapToStateProps(state) {
    const { Add_CateringLoader } = state.CateringReducer;

    return { Add_CateringLoader }

}




export default connect(mapToStateProps, { CreateCateringApi })(CreateContainer);

