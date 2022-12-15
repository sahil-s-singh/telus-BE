const express = require('express');
const { categoryData, statusData } = require('../controllers/contract.controller');
const router = express.Router();

router.get('/category', categoryData);
router.get('/status', statusData);

module.exports = router;