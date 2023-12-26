const express = require('express');
const router = express.Router();
const dashboardController = require('../controllers/dashboardController');

// Route to fetch data for the dashboard
router.get('/dashboard', dashboardController.getDashboardData);

module.exports = router;
