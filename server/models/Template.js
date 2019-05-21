var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TemplateSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    first_name: String,
    last_name: String,
    email: String,
    phone_number: Number,
    Address: String,
    Zipcode: Number,
});


module.exports = mongoose.model('Template', TemplateSchema);