var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'โคตรควาย' });
});


router.get('/about', function(req, res, next) {
  res.render('about', { title: 'โคตรควาย' });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'โคตรควาย' });
});
module.exports = router;
