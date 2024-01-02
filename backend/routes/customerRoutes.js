const express = require('express');
const router = express.Router();
const customerController = require('../controllers/customerController');

router.get('/customers', customerController.getAllCustomers);
router.delete('/customer/:id', customerController.deleteCustomer);
router.put('/customer/block/:id', customerController.blockCustomer);

module.exports = router;
