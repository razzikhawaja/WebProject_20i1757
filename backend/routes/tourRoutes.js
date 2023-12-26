const express = require('express');
const router = express.Router();
const {
  getAllTours,
  getTourById,
  createTour,
  updateTour,
  deleteTour,
} = require('../controllers/tourController');

router.get('/tours', getAllTours);
router.get('/tour/:id', getTourById);
router.post('/tour', createTour);
router.put('/tour/:id', updateTour);
router.delete('/tour/:id', deleteTour);

module.exports = router;
