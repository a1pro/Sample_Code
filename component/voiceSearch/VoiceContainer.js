import React, { Component } from "react";
import Layout from "./Voice";
import Voice from "react-native-voice";


import GroceryModal from "../Modal/GroceryModal";



export default class VoiceContainer extends Component {

   mTime='';

  constructor(props) {
    super(props);

    functionSetTime = this.functionSetTime.bind(this);
    functionShowProductSearch = this.functionShowProductSearch.bind(this);
    Voice.onSpeechStart = this.onSpeechStart.bind(this);
    Voice.onSpeechRecognized = this.onSpeechRecognized.bind(this);
    Voice.onSpeechResults = this.onSpeechResults.bind(this);

    functionSearch = this.functionSearch.bind(this);
    this.state = {
      VoiceView:true,
      CancelButton:true,
      List: [...GroceryModal],
      mFinalList: [...GroceryModal],
      recognized: "",
      started: "",
      results: [],
      SearchText: "",
      Title: "Voice Search",
      Dialog:{
        VoiceDialogVisible:false, 
      }
    };

    // this.props.navigation.addListener('willFocus', () => {
     
    //   console.log('mith');
    //   this.functionShowProductSearch(true);
    //   this.functionSetTime();
      
    // })
    
  }

  componentDidMount()
  {
   
  }

  componentWillUnmount()
  {
    Voice.stop();
    clearInterval(this.mTime);

    console.log('componentWillUnmount');
    
  }
  onSpeechStart(e) {
    this.setState({
      started: "√",
      results: ""
    });

    console.log("onSpeechStart", e);
  }
  onSpeechRecognized(e) {
    this.setState({
      recognized: "√"
    });

    console.log("onSpeechRecognized", e);
  }
  onSpeechResults(e) 
  {
    Voice.stop();
    this.setState({ results: e.value });
    var response = e.value.toString();
    this.functionSearch(response);
    console.log("response", response);
    console.log("onSpeechResults", e);
    
    var dialog= this.state.Dialog;
    dialog['VoiceDialogVisible']= false;
    this.setState({...this.state.Dialog, dialog});

  
  
  }
  async _startRecognition(e) {
    try 
    {
      await Voice.start("en-US");
    } 
    catch (e) 
    {
      console.error(e);
      console.log("ERRORR", e);
    }
  }

  functionSearch = Name => {
    console.log("Name", Name);

    const List = this.state.mFinalList;

    this.setState({ SearchText: Name });
    if (Name.length > 0) 
    {
      var FilterList = List.filter(List => {
        const itemdata = List.name.toUpperCase() || List.name.toUpperCase();
        const search = Name.toUpperCase();
        return itemdata.indexOf(search) > -1;
      });

      this.setState({ List: FilterList });
    } 
    else
   {
      this.setState({ List: this.state.mFinalList });
    }
  };

  functionOpenDialog=(Name, value)=>{

    var dialog = this.state.Dialog;
    dialog[Name]=value;
    this.setState({...this.state.Dialog, dialog});

    if(this.state.Dialog.VoiceDialogVisible == true)
    {
      this._startRecognition('');
    }
   

  }
  functionGoback = () => {
    this.props.navigation.goBack();
  };

  functionShowProductSearch=(Value)=>{

    if(Value)
    {

      this.setState({ Title: "Voice Search"})
    }
    else
    {
      this.setState({ Title: "Search Products"})
    }
 this.setState({VoiceView :Value});
  }

  functionSetTime=()=>{
    this.setState({CancelButton :true})
    this.mTime=  setInterval(() => {
    clearInterval(this.mTime);
     this.setState({CancelButton :false})

    }, 3000);
  }

  functionTryAgain=()=>{
    this.setState({CancelButton :true})
    this.functionSetTime();
  }
  render() {
    const Modal = {
      List: this.state.List,
      SearchText: this.state.SearchText,
      Dialog : this.state.Dialog,
      Title : this.state.Title,
      CancelButton : this.state.CancelButton,
      VoiceView : this.state.VoiceView,
      //Function
      _startRecognition: this._startRecognition,
      functionSearch: this.functionSearch,
      functionOpenDialog : this.functionOpenDialog,
      functionGoback : this.functionGoback,
      functionShowProductSearch : this.functionShowProductSearch,
      functionTryAgain : this.functionTryAgain,
    };

    return <Layout {...Modal} />;
  }
}
