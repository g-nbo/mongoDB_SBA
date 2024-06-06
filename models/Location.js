const { Schema, model } = require('../config/db-connection');

const locationSchema = Schema({
  city: {
    type: String,
    require: true,

  },
  menuItems: {
    type: [String],
    default: ["Unavailable at this moment"]
  },
  specialtyDishes: {
    type: [String],
    default: ["Unavailable at this moment"]
  }

});

module.exports = model('Locations', locationSchema);
locationSchema.index({ city: 1, type: 1 });