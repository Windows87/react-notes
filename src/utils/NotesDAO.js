import nedb from 'nedb';

const db = new nedb({ filename: 'notes.db', autoload: true });

class NotesDAO {
  createNewNote() {
  	const date = new Date();
  	const edit_data = date.getTime();

    const newNote = {
  	  title: 'Hello World',
   	  message: 'Write..',
   	  edit_data
    };

    return new Promise((next, reject) => {
  	  db.insert(newNote, (err, noteData) => {
  	    if(err)
  	      return reject(err);

  	    next(noteData);
  	  });
    });
  }

  getNoteData(_id) {
    return new Promise((next, reject) => {
  	  db.findOne({_id}, (err, note) => {
  	    if(err)
  	  	  return reject(err);

  	    next(note);
  	  });
    });
  }

  getNotes() {
  	return new Promise((next, reject) => {
  	  db.find({}).sort({ edit_data: -1 }).exec((err, notes) => {
  	  	if(err)
  	  	  return reject(err);

  	  	next(notes);
  	  });
  	});
  }

  setNoteData(_id, title, message) {
  	const date = new Date();
  	const edit_data = date.getTime();

  	return new Promise((next, reject) => {
  	  db.update({ _id }, { title, message, edit_data }, {}, err => {
  	  	if(err)
  	  	  return reject(err);

  	  	next();
  	  });
  	});
  }

  removeNote(_id) {
    return new Promise((next, reject) => {
      db.remove({ _id }, {}, err => {
        if(err)
          return reject(err);

        next();
      });
    });
  }
}

export default NotesDAO;