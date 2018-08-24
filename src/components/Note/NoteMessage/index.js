import React, { Component } from 'react';
import './index.css';

class NoteMessage extends Component {
  state = {
  	message: this.props.message
  }

  componentWillReceiveProps(props) {
  	const { message } = props;
  	this.setState({ message });
  }

  onChange = (event) => {
    const message = event.target.value;
    this.props.onMessageChange(message);
  }

  render() {
  	const { message } = this.state;
  	return (
  	  <div className="noteMessage">
  	    <textarea onChange={this.onChange} value={message} />
  	  </div>
  	);
  }
}

export default NoteMessage;