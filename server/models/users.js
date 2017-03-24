const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let userSchema = Schema({
  username: String,
  email: String,
  password: String
}, {
  timestamps: true
})

var user = mongoose.model('user', userSchema );

module.exports = user
