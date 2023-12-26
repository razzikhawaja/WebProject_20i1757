const Tour = require('../models/TourRegistration');

exports.getAllTours = async (req, res) => {
  try {
    const tours = await Tour.find();
    res.status(200).json(tours);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getTourById = async (req, res) => {
  try {
    const { id } = req.params;
    const tour = await Tour.findById(id);
    if (!tour) {
      return res.status(404).json({ message: 'Tour not found' });
    }
    res.status(200).json(tour);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createTour = async (req, res) => {
  try {
    const { name, description, price } = req.body;
    const newTour = await Tour.create({ name, description, price });
    res.status(201).json(newTour);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateTour = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, price } = req.body;
    const tour = await Tour.findByIdAndUpdate(
      id,
      { name, description, price },
      { new: true }
    );
    if (!tour) {
      return res.status(404).json({ message: 'Tour not found' });
    }
    res.status(200).json(tour);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteTour = async (req, res) => {
    try {
      const { id } = req.params;
      const deletedTour = await Tour.findByIdAndDelete(id);
  
      if (!deletedTour) {
        return res.status(404).json({ message: 'Tour not found' });
      }
  
      res.status(200).json({ message: 'Tour deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
