var express = require('express');
var router = express.Router();

/* GET home page.
The template is rendered here */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

// Принимает две переменные и передаем их для рендера response.ejs
router.post('/login', (req, res, next) => {
  const { email, password } = req.body;
  res.render('response', { title: 'Simple express app', email, password });
  console.log('Form data from /login:', email, password);
});

module.exports = router;
