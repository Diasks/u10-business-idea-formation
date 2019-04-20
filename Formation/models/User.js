var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var UserSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    first_name: String,
    last_name: String,
    password: String,
    email: String,
   

});


module.exports = mongoose.model('User', UserSchema);