const express = require('express');
const router = express.Router();
const customerController = require('../controllers/customerController');

// Route to get all customers
router.get('/customers', customerController.getAllCustomers);

// Route to delete a customer by ID
router.delete('/customer/:id', customerController.deleteCustomer);

// Route to block a customer by ID
router.put('/customer/block/:id', customerController.blockCustomer);

module.exports = router;
