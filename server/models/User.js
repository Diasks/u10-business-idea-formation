var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var JobSchema = new Schema({
  start_date: String,
  end_date: String,
  role: String
});

var SchoolSchema = new Schema({
  start_date: String,
  end_date: String,
  program: String
});

var CoverletterSchema = new Schema({
  company: String,
  title: String,
  location: String,
  coverletter: String
});

var UserSchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  first_name: String,
  last_name: String,
  password: String,
  email: String,
  place: String,
  telephone: String,
  objective: String,
  jobs: [JobSchema],
  schools: [SchoolSchema],
  coverletters: [CoverletterSchema],
  skills: String,
  others: String
});

module.exports = mongoose.model("User", UserSchema);
