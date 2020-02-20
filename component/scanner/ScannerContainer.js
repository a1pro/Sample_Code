import React, { Component } from 'react';
import Scanner from './Scanner';
import { Linking, AsyncStorage, Alert, Platform } from 'react-native';
import axios from 'axios';
import NetworkApi from '../../network/NetworkApi';
import Constant from '../../constant/Constant';
import Torch from 'react-native-torch';
import Camera from 'react-native-camera';
import { CreateList, ScannerAddtoList } from '../../action';
import { connect } from 'react-redux';
import Toast from 'react-native-simple-toast';

class ScannerContainer extends Component {

  constructor(props) {
    super(props)

    functionScanError = this.functionScanError.bind(this);
    this.state = {
      Title: 'Product Scan',
      Scan_Start: false,
      ShowLoader: false,
      isTorchOn: false,
      AddList: false,
      CreateListModalVisible: false,
      ListName: '',
      ListNotes: '',
    }
  }
  componentWillMount() {
    this.setState({ Scan_Start: true });

  }


  functionGoback = () => {
    this.props.navigation.goBack();
  };

  onSuccess(e) {

    alert(e.data);


  }

  functionOpenPage = (e) => {

    this.setState({ ShowLoader: true, Scan_Start: false })

    const { AddList } = this.state;
    if (AddList) 
    {
      AsyncStorage.getItem('DEFAULTLISTID').then(
        (values) => {
          var DefaultId = values;

          var Product_Num = '';
          var Item_Num = e.data;


          var strFirstTwo = Item_Num.substring(0, 2);
          if (strFirstTwo == '00') {

            Product_Num = Item_Num.substring(1, Item_Num.length);

          }
          else {


            Product_Num = e.data;


          }


          //////////////////Checking Item exits or Not
          var URL = NetworkApi.BASE_URL + Constant.STORE_ID + NetworkApi.GET_ITEM_DETAIL + Product_Num;
          axios.get(URL).
            then((response) => {

              console.log('response', response);

              var data = response.data;
              this.setState({ ShowLoader: false })

              if (data.length == 0) 
              {
                this.setState({ ShowLoader: false, Scan_Start: false })
                this.functionScanError('Product not found. Please scan again');

                //alert('Product not found. Please scan again')

              }
              else {
                var URL = NetworkApi.BASE_URL + Constant.STORE_ID + NetworkApi.ADD_ITEM_TO_LIST + DefaultId;

                axios.post(URL, {
                  "itemNum": Product_Num,
                  "quantity": '1'
                }).then((response) => {

                  var status = response.status;
                  if (status == 201) {
                    this.setState({ ShowLoader: false, Scan_Start: false })
                    Toast.show('Product added your Default list ');
                  }
                  else {

                  }
                })



              }
            }).catch((Error) => {
              this.setState({ ShowLoader: true, Scan_Start: false })
              this.functionScanError(Error);
            })



        });


    }
    else {

      var Product_Num = '';
      var Item_Num = e.data;
      var strFirstTwo = Item_Num.substring(0, 2);
      if (strFirstTwo == '00') {

        Product_Num = Item_Num.substring(1, Item_Num.length);

      }
      else {


        Product_Num = e.data;


      }
      var URL = NetworkApi.BASE_URL + Constant.STORE_ID + NetworkApi.GET_ITEM_DETAIL + Product_Num;
      axios.get(URL).
        then((response) => {
          var data = response.data;
          this.setState({ ShowLoader: false })

          if (data.length == 0) {
            this.setState({ ShowLoader: false, Scan_Start: false })
            this.functionScanError('Product not found. Please scan again');
           // alert('Product not found. Please scan again')
          }
          else {
            this.props.navigation.navigate('ProductDetails', { ITEMNUMBER: "" + Product_Num })
            this.setState({ Scan_Start: true });
          }
        }).catch((Error) => {
          this.setState({ ShowLoader: true, Scan_Start: false })
          this.functionScanError(Error);
        })
    }




  }

  functionScanError = (Msg) => {
    Alert.alert(
      Alert,
      Msg,
      [
        { text: 'OK', onPress: () => this.setState({ ShowLoader: false, Scan_Start: true }) },
      ],
      { cancelable: false },
    );

  }
  functionTorch = () => {
    if (this.state.isTorchOn) {
      Torch.switchState(false);
      this.setState({ isTorchOn: false });
    }
    else {

      Torch.switchState(true);
      this.setState({ isTorchOn: true });
    }
  }

  functionAddToList = () => {

    const { AddList } = this.state;
    AsyncStorage.getItem('DEFAULTLISTID').then(
      (values) => {
        DefaultId = values;
        if (DefaultId == null) {
          this.functionShowAlert('Please create a new list.');
        }
        else {
          // this.props.AddNewArrivalitemtoList(Itemnum, Qty)
          if (AddList) {

            this.setState({ AddList: false })
          }
          else {
            this.setState({ AddList: true })
          }

        }

      });



  }
  onBarCodeRead = (e) => {
    Alert.alert("Barcode value is" + e.data, "Barcode type is" + e.type);
  }
  functionShowAlert = (Msg) => {
    Alert.alert(
      '',
      Msg,
      [
        { text: 'OK', onPress: () => this.props.navigation.navigate('MyList', { OPEN: true }) },
      ],
      { cancelable: false },
    );
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
  functionSetItemName = (value) => {

    this.setState({ ListName: value.txt })
  }

  functionSetItemNotes = (value) => {

    this.setState({ ListNotes: value.txt })
  }
  render() {
    const Model = {
      Title: this.state.Title,
      Scan_Start: this.state.Scan_Start,
      ShowLoader: this.state.ShowLoader,
      isTorchOn: this.state.isTorchOn,
      AddList: this.state.AddList,
      CreateListModalVisible: this.state.CreateListModalVisible,
      ListName: this.state.ListName,
      ListNotes: this.state.ListNotes,


      //REDUX



      functionGoback: this.functionGoback,
      onSuccess: this.onSuccess,
      functionOpenPage: this.functionOpenPage,
      functionTorch: this.functionTorch,
      functionAddToList: this.functionAddToList,
      onBarCodeRead: this.onBarCodeRead,
      functionShowCreateDialog: this.functionShowCreateDialog,
      functionSubmit: this.functionSubmit,
      functionSetItemName: this.functionSetItemName,
      functionSetItemNotes: this.functionSetItemNotes,

    }

    return <Scanner {...Model} />
  }
}

function mapToStateProps(state) {

  const { Loader, ListData } = state.ListReducer;
  return { Loader, ListData }
}

export default connect(mapToStateProps, { CreateList, ScannerAddtoList })(ScannerContainer)
