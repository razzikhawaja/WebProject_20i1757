const Customer = require('../models/Customer');

// Controller functions for customer management
exports.getAllCustomers = async (req, res) => {
  try {
    const customers = await Customer.find();
    res.status(200).json(customers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteCustomer = async (req, res) => {
    try {
      const { id } = req.params;
      const deletedCustomer = await Customer.findByIdAndDelete(id);
  
      if (!deletedCustomer) {
        return res.status(404).json({ message: 'Customer not found' });
      }
  
      res.status(200).json({ message: 'Customer deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  

exports.blockCustomer = async (req, res) => {
  try {
    const { id } = req.params;
    const customer = await Customer.findById(id);
    if (!customer) {
      return res.status(404).json({ message: 'Customer not found' });
    }
    customer.blocked = true;
    await customer.save();
    res.status(200).json({ message: 'Customer blocked successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
