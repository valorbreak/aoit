var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/archive1', function(req, res) {
  res.render('index', { title: 'Create an Archive' });
});

module.exports = router;
