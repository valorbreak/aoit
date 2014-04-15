var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/create', function(req, res) {
  res.render('index', { title: 'Create a Post' });
});

router.get('/update', function(req, res) {
  res.render('index', { title: 'Update a Post' });
});

router.get('/', function(req, res) {
  res.render('index', { title: 'Root Post' });
});

module.exports = router;
