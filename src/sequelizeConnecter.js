const { Sequelize, DataTypes, Model } = require('sequelize');
const { POSTGRES_URL } = require('./config');

module.exports.sequelize = new Sequelize(POSTGRES_URL);
