const { Sequelize, DataTypes, Model } = require('sequelize');
const { sequelize } = require('../sequelizeConnecter');

const contract = sequelize.define('Table2', {
    // Model attributes are defined here
    vndr_nm: {
        type: DataTypes.STRING,
        allowNull: false
    },
    vndr_num: {
        type: DataTypes.STRING,
        allowNull: false
    },
    agmnt_num: {
        type: DataTypes.STRING,
        allowNull: false
    },
    cntrct_stat_cd: {
        type: DataTypes.STRING,
        allowNull: false
    },
    cntrct_catgy_cd: {
        type: DataTypes.STRING,
        allowNull: false
    },
    cntrct_eff_dt: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    cntrct_expir_dt: {
        type: DataTypes.DATEONLY,
        allowNull: false
    }
}, {

});

module.exports = contract;
