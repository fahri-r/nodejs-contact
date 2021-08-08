const {insertContact} = require('./contacts');
const yargs = require('yargs');

yargs.command({
  command: 'add',
  describe: 'Inserting new contact',
  builder: {
    name: {
      describe: 'Fullname',
      demandOption: true,
      type: 'string',
    },
    email: {
      describe: 'Email',
      demandOption: false,
      type: 'string',
    },
    phone: {
      describe: 'Phone number',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    insertContact(argv.name, argv.email, argv.phone);
  },
});

yargs.parse();
