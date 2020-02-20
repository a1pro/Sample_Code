   
   import React, { Component } from 'react';
   import { StyleSheet, View, Text, ScrollView, UIManager,
     TouchableOpacity, Platform, Image } from 'react-native';

import {Theme} from '../../config';
import DownbackIcon from '../../../image/downback.png';
import { withNavigation } from 'react-navigation';

class Expandable_ListView extends Component {

    constructor() {
      super();
      this.state = {
        layout_Height: 0
      }
    }
    
    componentWillReceiveProps(nextProps) {
      if (nextProps.item.expanded) {
        this.setState(() => {
          return {
            layout_Height: null
          }
        });
      }
      else {
        this.setState(() => {
          return {
            layout_Height: 0
          }
        });
      }
    }
  
    shouldComponentUpdate(nextProps, nextState) {
      if (this.state.layout_Height !== nextState.layout_Height) {
        return true;
      }
      return false;
    }
  
    show_Selected_Category = (item) => {
  
      // Write your code here which you want to execute on sub category selection.
     // Alert.alert(item);
    
    }
     render() {
      return (
        <View style={styles.Panel_Holder}>
  
          <TouchableOpacity activeOpacity={0.8} onPress={this.props.onClickFunction}
           style={styles.category_View}>
  
            <Text 
            allowFontScaling={false}
            style={styles.category_Text}>{this.props.item.category_Name} </Text>
               <Image 
               backfaceVisibility={false}
              style={{width:25, height:25,marginRight:10}}
              source={DownbackIcon}
              /> 
            
             
  
          </TouchableOpacity>
  
          <View style={{ height: this.state.layout_Height, overflow: 'hidden' }}>
  
            {
              this.props.item.sub_Category.map((item, key) => (
  
                <TouchableOpacity key={key} 
                style={styles.sub_Category_Text}
                //  onPress={this.show_Selected_Category.bind(this, item.name)}>)
                onPress={ () => this.props.navigation.navigate('Category', {Title:item.name , DeptID : item.id, DEPT_PAGE : true}) }>
  
                  <Text> {item.name} </Text>
  
                  <View style={{ width: '100%', height: 1, backgroundColor: '#000' }} />
  
                </TouchableOpacity>
  
              ))
            }
  
          </View>
  
        </View>
  
      );
    }
  }
  const styles = StyleSheet.create({

    MainContainer: {
      flex: 1,
      justifyContent: 'center',
      paddingTop: (Platform.OS === 'ios') ? 20 : 0,
      backgroundColor: '#F5FCFF',
    },
  
    iconStyle: {
  
      width: 30,
      height: 30,
      justifyContent: 'flex-end',
      alignItems: 'center',
      tintColor: '#fff'
  
    },
  
    sub_Category_Text: {
      fontSize: 18,
      color: '#000',
      padding: 10
    },
  
    category_Text: {
      textAlign: 'left',
      color: 'black',
      fontSize: 21,
      padding: 10
    },
  
    category_View: {
      borderRadius:5,
      marginVertical: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: Theme.PRIMARY_COLOR
    },
  
    Btn: {
      padding: 10,
      backgroundColor: '#FF6F00'
    }
  
  });
  export default withNavigation(Expandable_ListView);
