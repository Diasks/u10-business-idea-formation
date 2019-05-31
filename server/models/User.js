const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const uniqueValidator = require("mongoose-unique-validator");

const JobSchema = new Schema({
  start_date: String,
  end_date: String,
  role: String
});

const SchoolSchema = new Schema({
  start_date: String,
  end_date: String,
  program: String
});

const CoverletterSchema = new Schema({
  company: String,
  title: String,
  location: String,
  coverletter: String
});

const UserSchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  first_name: String,
  last_name: String,
  password: String,
  email: {
    type: String,
    required: true,
    unique: true
  },
  place: String,
  telephone: String,
  objective: String,
  jobs: [JobSchema],
  schools: [SchoolSchema],
  coverletters: [CoverletterSchema],
  skills: String,
  others: String
});

UserSchema.plugin(uniqueValidator);

module.exports = mongoose.model("User", UserSchema);
