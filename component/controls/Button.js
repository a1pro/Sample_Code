import React, { Component } from "react";
import { View, TouchableOpacity , Text} from "react-native";
import {Theme} from '../../config';

class Button extends Component {
  render() {
    return (
     // <View style={[{ flex: 1 }, this.props.style]}>
      <View>
      <TouchableOpacity

      style={[
        {...styles.buttonStyle, ...this.props.touchableStyle},
        {backgroundColor : this.props.backgroundColor || this.props.color || Theme.PRIMARY_COLOR || '#000'}
      ]}
       onPress={this.props.click}>
      {this.props.children && typeof this.props.children == 'string'
      ? (
        <Text 
        allowFontScaling={false}
        style={[styles.textStyle, this.props.icon ? { paddingLeft: 10 } : {}, { color: this.props.textColor || '#000' }, {...this.props.textStyle}]}>
          {this.props.children}
        </Text>
      ) : this.props.children
    }
      </TouchableOpacity>

       
      </View>
    );
  }
}

const styles = {
    buttonStyle: {
      alignSelf: 'stretch',
      borderRadius: 5,
      borderStyle: 'solid',
      borderWidth: 0,
      marginLeft: 5,
      marginRight: 5,
      height:40,
      width:'100%',
      marginTop:10
      
     
    },
    textStyle: {
      alignSelf: 'center',
      fontSize: 16,
      fontWeight: '600',
      paddingTop: 10,
      paddingBottom: 10,
      color:Theme.TEXT_COLOR,
    }
  };

  export {Button};
  
