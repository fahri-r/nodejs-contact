const fs = require('fs');
const chalk = require('chalk');
const validator = require('validator');


// make data folder if not exist
const dirPath = './data';
if (!fs.existsSync(dirPath)) {
  fs.mkdirSync(dirPath);
}


// make contacts.json if not exist
const dataPath = './data/contacts.json';
if (!fs.existsSync(dataPath)) {
  fs.writeFileSync(dataPath, '[]', 'utf-8');
}


const insertContact = (name, email, phone) => {
  const newContact = {name, email, phone};

  const bufferFile = fs.readFileSync(dataPath, 'utf-8');
  const contacts = JSON.parse(bufferFile);

  // duplication check
  const duplicate = contacts.find((newContact) => newContact.name === name);
  if (duplicate) {
    console.log(
        chalk.red.inverse.bold('Contact registered, please use another name!'),
    );
    return false;
  }

  // email type validation
  if (email) {
    if (!validator.isEmail(email)) {
      console.log(
          chalk.red.inverse.bold('Email doesn\'t valid!'),
      );
      return false;
    }
  }

  // phone number type validation
  if (!validator.isMobilePhone(phone, ['id-ID'])) {
    console.log(
        chalk.red.inverse.bold('Phone number doesn\'t valid!'),
    );
    return false;
  }

  contacts.push(newContact);

  fs.writeFileSync(dataPath, JSON.stringify(contacts));

  console.log(chalk.green.inverse.bold('Thank you for entering the data :)'));
};

module.exports = {insertContact};
