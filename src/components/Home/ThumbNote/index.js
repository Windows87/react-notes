import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

function createMessageResume(message) {
  const messageResume = message.slice(0, 100);

  if(message.length > 100)
    return messageResume + '...';

  return messageResume;
}

const ThumbNote = props => {
  return (
  	<Link to={'/notes/' + props.id}>
      <div className="thumbNote">
        <h2> { props.title } </h2>
        <span> { createMessageResume(props.message) } </span>
      </div>
    </Link>
  );
}

export default ThumbNote;