var express = require('express');
var router = express.Router();
const contacts = [
  { id: '1', username: 'Felix', surname: 'Brown', email: 'felix@test.com' },
  { id: '2', username: 'Sonya', surname: 'Redhead', email: 'sonya@test.com' },
  { id: '3', username: 'Conan', surname: 'Barbarian', email: 'conan@test.com' },
];

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
  console.log(contacts);
});

// Get unique user Handler
router.get('/:id', function (req, res, next) {
  const { id } = req.params;
  const contact = contacts.filter((el) => el.id === id);
  res.json(contact);
  console.log(contact);
});

module.exports = router;

/**
 * Путь к массиву contacts: https://simple-express-nodebook.glitch.me/users
 */
