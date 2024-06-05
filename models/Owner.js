const { Schema, model } = require('../config/db-connection');

const ownerSchema = Schema({
  city: {
    type: String,
    require: true,

  },
  aboutMe: {
    type: String,
    default: "Unknown"
  },
  favoriteDish: {
    type: String,
    default: "Unknown"
  }

});

module.exports = model('Owners', ownerSchema);