var express = require('express');
var router = express.Router();

/* GET index page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'TFG_Hugo_Pascual_Back' });
});

module.exports = router;
