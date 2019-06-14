var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var LoginSchema = new Schema({
    Username: String,
    Password: String,
    Contact: Number,
    Email: String,

});
mongoose.model('login',LoginSchema);