var express = require('express');
var router = express.Router();

/* GET places listing */
router.get('/', function(req, res, next) {
	res.render('index', { title: 'Places' });
});

module.exports = router;