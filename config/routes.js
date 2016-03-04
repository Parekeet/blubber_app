var express = require('express');
var router = express.Router();

var usersController = require("../controllers/users");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET users listing. */
router.get('/users',     usersController.index);
router.get('/users/:id', usersController.show);

module.exports = router;
