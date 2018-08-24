import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from 'react-icons-kit';
import { smallLeft, trash } from 'react-icons-kit/entypo/';
import './index.css';

class NoteHeader extends Component {
  state = {
  	title: this.props.title
  };

  componentWillReceiveProps(props) {
  	const { title } = props;
  	this.setState({ title });
  }

  onChange = (event) => {
  	const title = event.target.value;
  	this.props.onTitleChange(title);
  }

  render() {
    return (
      <div className="noteHeader">
        <Link to="/">
          <Icon icon={smallLeft} size={30} />
        </Link>
        <input type="text" onChange={this.onChange} value={this.state.title} />
        <Icon onClick={this.props.onRemoveNote} icon={trash} size={30} />
      </div>
    );	
  }
}

export default NoteHeader;