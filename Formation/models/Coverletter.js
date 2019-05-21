var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CoverletterSchema = new Schema({
    company: String,
    title: String,
    location: String,
    coverletter: String,
    date: Date
  });


  module.exports = mongoose.model('Coverletter', CoverletterSchema);