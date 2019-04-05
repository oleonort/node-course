const chalk = require('chalk');
const yargs = require('yargs');
const { getNotes, addNote, readNote, removeNote } = require('./notes');

// add, remove, read, list

// Create add command
yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    },
    body: {
      describe: 'Note body',
      demandOption: true,
      type: 'string'
    }
  },
  handler({ title, body }) {
    addNote({ title, body });
  }
});

// Create remove command
yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    }
  },
  handler({ title }) {
    removeNote({ title });
  }
});

// Create read command
yargs.command({
  command: 'read',
  describe: 'Read a note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    }
  },
  handler({ title }) {
    readNote({ title });
  }
});

// Create read command
yargs.command({
  command: 'list',
  describe: 'List your notes',
  handler() {
    getNotes();
  }
});

yargs.parse();
