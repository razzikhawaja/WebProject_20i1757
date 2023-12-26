const express = require('express');
const router = express.Router();
const {
  getAllTourAgents,
  getTourAgentById,
  registerTourAgent,
  updateTourAgent,
  deleteTourAgent,
  blockTourAgent,
} = require('../controllers/tourAgentController');

router.get('/touragents', getAllTourAgents);
router.get('/touragent/:id', getTourAgentById);
router.post('/touragent/register', registerTourAgent);
router.put('/touragent/:id', updateTourAgent);
router.delete('/touragent/:id', deleteTourAgent);
router.put('/touragent/block/:id', blockTourAgent);

module.exports = router;
