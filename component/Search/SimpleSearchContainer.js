import React, { Component } from 'react';
import SimpleSearch from './SimpleSearch';
import { GetSearchProduct,ResetApi , GetLocalSearch,SearchClear,ListHide, GetCommonWordApi,
  ResetSearchText} from '../../action';
import { connect } from 'react-redux';
import Voice from "react-native-voice";

class SimpleSearchContainer extends Component {

  constructor(props) {
    super(props)

    Voice.onSpeechStart = this.onSpeechStart.bind(this);
    Voice.onSpeechRecognized = this.onSpeechRecognized.bind(this);
    Voice.onSpeechResults = this.onSpeechResults.bind(this);

    functionSearch = this.functionSearch.bind(this);
    functionHitSearchApi = this.functionHitSearchApi.bind(this);
    functionOpenDialog    =this.functionOpenDialog.bind(this);
    this.state = {
      Title: 'Search Products',
      ShowLoader: false,
      List: [],
      SearchTag:'',
      PreviousSearch:'',
      ErrorMessage:'',


      recognized: "",
      started: "",
      results: [],
      Dialog:{
        VoiceDialogVisible:false, 
      }
    }
  }
  
  componentWillMount()
  {
     this.props.ResetApi();
   
    this.props.ResetSearchText();
    var mCheck= this.props.navigation.getParam('MIC');
    if(mCheck)
    {
    this.functionOpenDialog('VoiceDialogVisible', true)
    }
  }
  componentWillUnmount() {
   this.props.SearchClear();

   
  
  }

  functionHitSearchApi=(Value)=>
  {
   this.setState({SearchTag : Value.text.trim()})

    if(Value.text.trim().length == 2)
    {

      this.props.ListHide();
    }
   else if(Value.text.trim().length == 3)
    {
      var mCheck = this.state.PreviousSearch;
      if(mCheck !== Value.text)
      {
        this.setState({PreviousSearch : Value.text});
        this.props.GetSearchProduct(Value.text);
      }
      else
      {
       this.props.GetSearchProduct(Value.text);
      }
    }
    else if(Value.text.length  >3)
    {
      this.props.GetLocalSearch(Value.text)
    }
    else if(Value.text.length == 0)
    {
      this.props.ResetApi();

    }
  }


  functionGoback = () => {
    this.props.navigation.goBack();
  };

  functionOpenPage=(Value, Itemnum)=>{

    this.props.navigation.navigate(Value , {ITEMNUMBER :Itemnum})
  }
  onSpeechStart(e) {
    this.setState({
      started: "√",
      
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
    
   var response = e.value;
   this.functionSearch(response[0]);
    console.log("response", response);
    console.log("onSpeechResults", e);
    
    var dialog= this.state.Dialog;
    dialog['VoiceDialogVisible']= false;
    this.setState({...this.state.Dialog, dialog});

  
  
  }
  async _startRecognition(e) {
    this.setState({
      recognized: '',
      started:'',
      results:[]
    });
    try 
    {
      await Voice.start("en-GB" );
    } 
    catch (e) 
    {
      console.error(e);
      console.log("ERRORR", e);
    }
  }
  functionOpenDialog=(Name, value)=>{


    this.props.SearchClear();
    this.setState({SearchTag :''})

    var dialog = this.state.Dialog;
    dialog[Name]=value;
    this.setState({...this.state.Dialog, dialog});

    if(this.state.Dialog.VoiceDialogVisible == true)
    {
      this._startRecognition('');
    }
  }
  functionCloseRecoder=()=>{
    Voice.stop();
    var dialog= this.state.Dialog;
    dialog['VoiceDialogVisible']= false;
    this.setState({...this.state.Dialog, dialog});
   
  }
  functionSearch = Name => {
    
  this.setState({SearchTag : Name.trim()})

  if(Name == 2)
  {

    this.props.ListHide();
  }
 else if(Name.length >= 3)
  {
    var mCheck = this.state.PreviousSearch;
    if(mCheck !== Name)
    {
      this.setState({PreviousSearch : Name});
      //this.props.GetSearchProduct(Name);

      this.props.GetCommonWordApi(Name);

    }
    else
    {
    
     // this.props.GetLocalSearch(Name)
     this.props.GetCommonWordApi(Name);
     
    }
  }
  else if(Name.length  >3)
  {
    this.props.GetLocalSearch(Name)
  }
  else if(Name.length == 0)
  {
    this.props.ResetApi();

  }

  };
  render() {
    const Model = {
      Title: this.state.Title,
     // SearchTag : this.state.SearchTag,
      Dialog : this.state.Dialog,

      //REDUX
      ShowLoader: this.props.Loader,
      List: this.props.Local_Data,
      ErrorMessage : this.props.ErrorMsg,
      SearchTag : this.props.ProductSearch,


      

      functionGoback: this.functionGoback,
      functionHitSearchApi : this.functionHitSearchApi,
      functionOpenPage : this.functionOpenPage,
      functionOpenDialog : this.functionOpenDialog,
      functionCloseRecoder : this.functionCloseRecoder,
    }

    return <SimpleSearch {...Model} />
  }
}


function mapToStateProps(state) {
  const { Loader, Local_Data , ErrorMsg,ProductSearch} = state.ProductSearchReducer;
  return { Loader, Local_Data, ErrorMsg ,ProductSearch};

}

export default connect(mapToStateProps, { GetSearchProduct,ResetApi, GetLocalSearch,SearchClear ,
  ListHide,GetCommonWordApi,ResetSearchText})(SimpleSearchContainer)