const { Schema, model } = require('../config/db-connection');

const userSchema = Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    unique: true,
    min: 5,
  },
  age: {
    type: Number,
    default: 0
  },
  favoriteDishes: {
    type: [String],
    required: false,
    unique: true,
    default: ["Hasn't chosen a favorite yet"]
  }

});

module.exports = model('User', userSchema);
