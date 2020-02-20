
import { Alert, LayoutAnimation, StyleSheet, View, Text, ScrollView, UIManager, TouchableOpacity, Platform, Image } from 'react-native';

import React,{Component} from 'react';
import Products from './Products';
import Brands from '../../model/Brands';
import {GetDepartmentApi, GetBrandApi} from '../../action';
import {connect} from 'react-redux';



class ProductsContainer extends Component
{

    constructor (props) {
        super(props)

        if (Platform.OS === 'android') {

          UIManager.setLayoutAnimationEnabledExperimental(true)
    
        }

        this.state = {
          Title: 'Products',
          Department:true,
          Search:'',
        
          ShowLoader:false,
          AddLoader : false,
          List:[],
          DepartmentList:[],
         AccordionData :[],
         Brand_Loader: false,
         Brand_List:'',
          
        }
      }

      componentWillMount() {
        this.props.GetDepartmentApi();
        this.props.GetBrandApi();
      }

      functionGoback = () => {
        this.props.navigation.goBack();
      };

      functionOpenPage = (Value, Name, Id, Dept) => {
  
         this.props.navigation.navigate(Value, {Title:Name, DeptID : Id,DEPT_PAGE : Dept })
      }

      functionChangeIndex=(Index)=>{
        if(Index == 0) {
          this.setState({Department : true})
        }
        else {
          this.setState({Department : false})
        }
        console.log('Index',Index);
      }

      update_Layout = (index) => {
        
          LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
         const array = [...this.props.Respone];
        
         for(var i=0; i<array.length; i++)
         {
           if(i==index)
           {
            array[index]['expanded'] = !array[index]['expanded'];
           }
           else
           {
            array[i]['expanded']=array[index][false];
           }
          
         }
        
         this.setState(() => {
           return {
             AccordionData: array
           }
          });
      }


      functionOpenSearchpage=(Name, Value)=>{
        this.props.navigation.navigate(Name, {MIC :Value})
      }

  render () {
    const Model = {
      Title: this.state.Title,
      update_Layout : this.update_Layout,
      Search : this.state.Search,
      //REDUX
      ShowLoader : this.props.Loader,
      AccordionData :this.props.Respone,
      DepartmentList : this.props.DEPT,
      Brand_Loader : this.props.BrandLoader,
      Brand_List : this.props.Brand_Response,
      Department : this.state.Department,
      functionGoback : this.functionGoback,
      functionOpenPage : this.functionOpenPage,
      functionChangeIndex : this.functionChangeIndex,
      functionOpenSearchpage : this.functionOpenSearchpage,
    }

    return(
      <Products {...Model}/>
    )
  }
}


function MapToStateProps(state)
{
const {Loader,Errorr ,Respone, DEPT,BrandLoader,Brand_Response ,} = state.DepartmentReducer;

  return {Loader, Errorr, Respone, DEPT,BrandLoader,Brand_Response,  }
}

export default connect(MapToStateProps , {GetDepartmentApi, GetBrandApi})(ProductsContainer);