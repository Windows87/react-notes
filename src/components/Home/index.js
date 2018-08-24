import React, { Component } from 'react';
import Loading from './Loading';
import ThumbNote from './ThumbNote';
import CreateNoteButton from './CreateNoteButton';
import NotesDAO from '../../utils/NotesDAO';

class Home extends Component {
  notesDAO = new NotesDAO();

  state = {
  	notes: [],
  	loading: true
  };

  setNotes = async () => {
  	try {
  	  const notes = await this.notesDAO.getNotes();
  	  this.setState({ notes, loading: false });
  	} catch(err) {
  	  console.log(err);
  	  this.setState({ loading: true });
  	  alert('Error on get Notes');
  	}
  }

  componentDidMount() {
  	document.title = 'React Notes';
  	this.setNotes();
  }

  loadingComponent() {
  	if(this.state.loading)
  	  return <Loading />;
  }

  render() {
  	const { notes } = this.state;
  	return (
  	  <div>
  	    { this.loadingComponent() }
  	    { notes.map(note => <ThumbNote key={note._id} id={note._id} title={note.title} message={note.message} />) }
  	    <CreateNoteButton />
  	  </div>
  	);
  }
}

export default Home;