// const httpStatus = require('http-status');
const { sequelize } = require('../sequelizeConnecter')

const { Contract } = require('../models');

const getContractCatergory = async () => {
    return await Contract.findAll({
        group: ['cntrct_catgy_cd'],
        attributes: ['cntrct_catgy_cd', [sequelize.fn('COUNT', 'cntrct_catgy_cd'), 'categoryCount']],
    });
}

const getContractStatus = async () => {
    return await Contract.findAll({
        group: ['cntrct_stat_cd'],
        attributes: ['cntrct_stat_cd', [sequelize.fn('COUNT', 'cntrct_stat_cd'), 'statusCount']],
    });
}

module.exports = {
    getContractCatergory,
    getContractStatus
};
