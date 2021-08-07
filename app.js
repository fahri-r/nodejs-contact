const {writeQuestion, insertContact} = require('./contacts');
const main = async () => {
  const name = await writeQuestion('Enter your name: ');
  const email = await writeQuestion('Enter your email: ');
  const phone = await writeQuestion('Enter your phone number: ');

  insertContact(name, email, phone);
};

main();
