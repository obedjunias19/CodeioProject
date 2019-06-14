// var express = require('express');
//  var router = express.Router();

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('login', { title: 'Login Portal' });
// });


module.exports = function(app) {
  var index = require('../controllers/controller');
  app.route('/').get(index.render);
  app.post('/login',index.insert);

};