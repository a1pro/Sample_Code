import React,{Component} from 'react';
import Message from './Message';

class MessageContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      Title: 'Message'
    }
  }

  functionGoback = () => {
    this.props.navigation.goBack();
  };

  render () {
    const Model = {
      Title: this.state.Title,
      functionGoback : this.functionGoback
    }
    return<Message {...Model}/>
  }
}

export default MessageContainer;