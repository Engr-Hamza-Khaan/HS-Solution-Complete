const mongoose = require('mongoose');

const internshipSchema = new mongoose.Schema({
  firstName:     { type: String, required: true },
  lastName:      { type: String, required: true },
  email:         { type: String, required: true },
  internship:    { type: String, required: true },
  semester:      { type: String, required: true },
  university:    { type: String, required: true },
  message:       { type: String }
}, { timestamps: true });

module.exports = mongoose.model('Internship', internshipSchema);
