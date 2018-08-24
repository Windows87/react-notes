import React, { Component } from 'react';
import NoteHeader from './NoteHeader';
import NoteMessage from './NoteMessage';
import NotesDAO from '../../utils/NotesDAO';
import './index.css';

class Note extends Component {
  notesDAO = new NotesDAO();

  state = {
  	noteId: this.props.match.params.id,
  	title: 'Hello World',
  	message: 'Write..'
  };

  componentDidMount() {
  	if(this.state.noteId === 'new')
  	  return this.newNote();

  	this.setNote();
  }	

  goToHome() {
  	this.props.history.push('/');
  }

  newNote = async () => {
  	try {
  	  const note = await this.notesDAO.createNewNote();
  	  const noteId = note._id;
  	  this.setState({ noteId })
  	 } catch(err) {
  	  console.log(err);
  	  alert('Error on create new Note');
  	  this.goToHome();
  	 }
  }

  setNote = async () => {
  	const { noteId } = this.state;
  	try {
  	  const note = await this.notesDAO.getNoteData(noteId);
  	  const { title, message } = note;

  	  document.title = title;
  	  await this.setState({ title, message });
  	  this.updateNote();
  	} catch(err) {
  	  console.log(err);
  	  alert('Error on get Note');
  	  this.goToHome();
  	}
  }

  updateNote = async() => {
  	const { noteId, title, message } = this.state;

  	try {
  	  await this.notesDAO.setNoteData(noteId, title, message);
  	} catch(err) {
  	  console.log(err);
  	  alert('Error on set Note');
  	}
  }

  onTitleChange = async (title) => {
  	await this.setState({ title });
  	document.title = title;
  	this.updateNote();
  }

  onRemoveNote = async () => {
    const { noteId } = this.state;
    try {
      await this.notesDAO.removeNote(noteId);
      this.goToHome();
    } catch (err) {
      console.log(err);
      alert('Error on remove Note');
    }
  }

  onMessageChange = async(message) => {
    await this.setState({ message });
    this.updateNote();
  }

  render() {
  	return (
  	  <div className="note">
  	    <NoteHeader onRemoveNote={this.onRemoveNote} onTitleChange={this.onTitleChange} title={this.state.title} />
        <NoteMessage onMessageChange={this.onMessageChange} message={this.state.message} />
  	  </div>
  	);
  }
}

export default Note;