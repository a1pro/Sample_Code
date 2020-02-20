import React, { Component } from 'react';
import {Alert, AsyncStorage} from 'react-native';
import MyList from './MyList';
import MyListModel from '../../model/mylist/MyListModel';

import {connect} from 'react-redux';
import {CreateList,GetallList, SetDefaultList, DeleteList} from '../../action';


 class MyListContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      Title: 'My Lists',
      List: [],
      CreateListModalVisible: false,
      ListName:'',
      ListNotes:'',
      ShowLoader: false,
    }

    this.props.navigation.addListener(
      'willFocus',
      payload => {
        this.props.GetallList();
      }
    );
  }

  componentWillMount() {

    var mOpen =  this.props.navigation.getParam('OPEN');
    if(mOpen)
    {
      this.setState({CreateListModalVisible : true})
    }   
  }
  functionGoback = () => {
    this.props.navigation.goBack();
  };
  functionCheckClick = (Index) => 
  {
    this.props.SetDefaultList(Index);
  }
  
  functionOpenPage = (Value, ) => {
    this.props.navigation.navigate('DetailsList', {ITEM : Value});
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

  functionSetItemName=(value)=>{
    
    
    
    this.setState({ListName : value.txt})
  }

  functionSetItemNotes=(value)=>{
    
    this.setState({ListNotes : value.txt})
  }

  functionRefresh=()=>{
    this.props.GetallList();
  }

  functionDeleteAlert=(ID)=>{

   
    
    Alert.alert(
      '',
      'Are you show you want to delete it',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => this.functionCallDeleteApi(ID)},
      ],
      {cancelable: false},
    );
  }


functionCallDeleteApi = (ID) =>{

    var DefaultId = ''
    AsyncStorage.getItem('DEFAULTLISTID').then(
      (values) => 
      {
          DefaultId = values;

          if(DefaultId == ID)
          {
             AsyncStorage.setItem('DEFAULTLISTID','' );

            this.props.DeleteList(ID)
          }
          else
          {
            this.props.DeleteList(ID)
          }
         
      });

  }

  functionPulltoRefresh=()=>{
    this.props.GetallList();
  }
  render() {
    const Model = {
      Title: this.state.Title,
      Tab: this.state.Tab,
    
      CreateListModalVisible: this.state.CreateListModalVisible,
      ListName : this.state.ListName,
      ListNotes : this.state.ListNotes,


      //REDUX
      ShowLoader : this.props.Loader,
      List : this.props.ListData,

     

      functionGoback: this.functionGoback,
      functionCheckClick: this.functionCheckClick,
      functionOpenPage: this.functionOpenPage,
      functionShowCreateDialog: this.functionShowCreateDialog,
      functionSubmit : this.functionSubmit,
      functionSetItemName : this.functionSetItemName,
      functionSetItemNotes : this.functionSetItemNotes,
      functionRefresh : this.functionRefresh,
      functionDeleteAlert : this.functionDeleteAlert,
      functionPulltoRefresh : this.functionPulltoRefresh,
      
    }

    return <MyList {...Model} />
  }
}

function mapToStateProps(state){

  const {Loader, ListData} = state.ListReducer;
  return {Loader, ListData}
}

export default connect(mapToStateProps,{CreateList,GetallList,SetDefaultList,DeleteList}) (MyListContainer);