import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from 'react-icons-kit';
import { plus } from 'react-icons-kit/entypo/';

import './index.css';

const CreateNoteButton = () => {
  return (
  	<Link to="/notes/new/">
  	<div className="createNoteButton">
  	  <Icon icon={plus} size={35} />
  	</div>
  	</Link>
  );
}

export default CreateNoteButton;