const test = require('tape');
const Spacecrypt = require('../spacecrypt');

test('Test spacecrypt', (t) => {
  t.plan(1);
  const publicMessage = 'Hello';
  const privateMessage = 'World';
  const output = Spacecrypt.encrypt(publicMessage, privateMessage);
  t.equal(Spacecrypt.decrypt(output), privateMessage)
  t.end();
});
