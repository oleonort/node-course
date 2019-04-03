const chalk = require('chalk');
const yargs = require('yargs');
const { getNotes } = require('./notes');

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
    console.log(title);
    console.log(body);
  }
});

// Create remove command
yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  handler() {
   console.log('Removing note..')
  }
});

// Create read command
yargs.command({
  command: 'read',
  describe: 'Read a note',
  handler() {
    console.log('Reading note..')
  }
});

// Create read command
yargs.command({
  command: 'list',
  describe: 'List your notes',
  handler() {
    console.log('Listing out all notes..')
  }
});

yargs.parse();
