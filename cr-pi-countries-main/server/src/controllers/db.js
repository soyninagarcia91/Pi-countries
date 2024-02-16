const { Sequelize } = require("sequelize");
const modelCountry = require('./models/Country');
const modelActivity = require('./models/Activity');

const fs = require('fs');
const path = require('path');
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);

const { Country, Activity } = sequelize.models;

// Aca vendrían las relaciones
Country.belongsToMany(Activity, { through: 'country_activity' });
Activity.belongsToMany(Country, { through: 'country_activity' });
// Product.hasMany(Reviews);

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize,     // para importar la conexión { conn } = require('./db.js');
};
