var config = require('./config'),
    mongoose = require('mongoose').set('debug',true);;
module.exports = function(){
    var db = mongoose.connect(config.dburl,{useNewUrlParser: true});
    require('../models/modell');
    return db;
    
};
