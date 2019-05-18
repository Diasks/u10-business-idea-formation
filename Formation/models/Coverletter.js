var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CoverletterSchema = new Schema({
    //_id: mongoose.Schema.Types.ObjectId,
    company: String,
    title: String,
    location: String,
    coverletter: String,
    date: Date
  });


  module.exports = mongoose.model('Coverletter', CoverletterSchema);