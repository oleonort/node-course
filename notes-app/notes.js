const fs = require('fs');
const chalk = require('chalk');

const loadNotes = () => {
  try {
    const dataJSON = fs.readFileSync('notes.json').toString();
    return JSON.parse(dataJSON);
  } catch (error) {
    return [];
  }
};

const saveNotes = notes => {
  fs.writeFileSync('notes.json', JSON.stringify(notes));
};

const getNotes = () => {
  const notes = loadNotes();
  console.log(chalk.blue("Your notes list:"));
  notes.forEach(({ title }) => console.log(chalk.cyan(title)));
  console.log(chalk.yellow('------------- Your notes JSON -------------'));
  console.log(chalk.cyan(JSON.stringify(notes)));
  console.log(chalk.yellow('-------------------------------------------'));
};

const readNote = ({ title }) => {
  const notes = loadNotes();
  const note = notes.find(note => note.title === title);

  if (note) {
    console.log(chalk.blue(note.title));
    console.log(note.body);
  } else {
    console.log(chalk.red('No note found!'));
  }
};

const addNote = ({ title, body }) => {
  const notes = loadNotes();
  const titleIsAllowed = !notes.find(({ title: notesTitle }) =>  notesTitle === title);

  if (titleIsAllowed) {
    notes.push({ title, body });
    saveNotes(notes);
    console.log(chalk.green('Note was added successfully!'));
  } else {
    console.log(chalk.red('Duplicate note title'));
  }
};

const removeNote = ({ title }) => {
  const notes = loadNotes();
  const notesToKeep = notes.filter(({ title: notesTitle }) =>  notesTitle !== title);

  if (notes.length > notesToKeep.length) {
    saveNotes(notesToKeep);
    console.log(chalk.green(`Note with title "${title}" was removed!`));
  } else {
    console.log(chalk.red(`Note with title "${title}" does not exist!`));
  }
};

module.exports = {
  addNote,
  getNotes,
  readNote,
  removeNote
};

