const Customer = require('../models/Customer');
const TourAgent = require('../models/TourAgent');
const Payment = require('../models/Payment');

// Controller to fetch data for the dashboard
exports.getDashboardData = async (req, res) => {
  try {
    const totalCustomers = await Customer.countDocuments();
    const totalTourAgents = await TourAgent.countDocuments();
    const totalPayments = await Payment.countDocuments();

    const dashboardData = {
      totalCustomers,
      totalTourAgents,
      totalPayments,
    };

    res.status(200).json(dashboardData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
