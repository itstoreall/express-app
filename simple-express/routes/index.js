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

// These are two cookie handlers
// Вызывает метод cookie и передает: имя, значение и объект с опциями
router.get('/setcookie', (req, res, next) => {
  // Обычная кука
  res.cookie('my_cookie', 'hello world!');

  // Подписанная кука (зашифрованная)
  res.cookie('my_signed_cookie', 'hello world!', { signed: true });
  res.redirect('/');
});

router.get('/clearcookie', (req, res, next) => {
  console.log(req.cookies['my_cookie']);
  console.log(req.signedCookies['my_signed_cookie']);
  res.clearCookie('my_cookie');
  res.clearCookie('my_signed_cookie');
  res.redirect('/');
});

module.exports = router;
