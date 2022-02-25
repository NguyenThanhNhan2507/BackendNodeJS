const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const Login = new Schema({
       email: { type: String, required: true},
       password: { type: Number, required: true},
       slug: {type: String, maxlength: 255},
       createdAt: {type: Date, default: Date.now},
       updatedAt: {type: Date, default: Date.now},
  }, {
    timestamps: true
  });

module.exports = mongoose.model('Login', Login,'logins');