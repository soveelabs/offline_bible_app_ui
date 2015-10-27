var express = require('express');
var router = express.Router();
var User = require('../models/user');

module.exports = router

/* GET Home Page */
router.get('/home', function(req, res){
  var authUser = req.session.user
  return res.render('home', { user: User.info(authUser) });
});

/* GET Home Page */
router.get('/', function(req, res){
  var authUser = req.session.user
  return res.render('home', { user: User.info(authUser) });
});




