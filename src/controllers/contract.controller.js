const contractService = require('../services/contract.service');

const categoryData = async (req, res) => {
  const category = await contractService.getContractCatergory();
  res.status(200).send({ category });
};

const statusData = async (req, res) => {
  const contractStatus = await contractService.getContractStatus();
  res.status(200).send({ contractStatus });
};

module.exports = {
  categoryData,
  statusData
};