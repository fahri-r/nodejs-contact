const fs = require('fs');
const readline = require('readline');


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


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


const writeQuestion = (question) => {
  return new Promise((resolve, reject) => {
    rl.question(question, (answer) => {
      resolve(answer);
    });
  });
};


const insertContact = (name, email, phone) => {
  const newContact = {name, email, phone};

  const bufferFile = fs.readFileSync(dataPath, 'utf-8');
  const contacts = JSON.parse(bufferFile);

  contacts.push(newContact);

  fs.writeFileSync(dataPath, JSON.stringify(contacts));

  console.log('Thank you for entering the data :)');
  rl.close();
};

module.exports = {writeQuestion, insertContact};
