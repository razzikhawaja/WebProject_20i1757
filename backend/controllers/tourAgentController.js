const TourAgent = require('../models/TourAgent');

// Controller functions for tour agent management
exports.getAllTourAgents = async (req, res) => {
  try {
    const tourAgents = await TourAgent.find();
    res.status(200).json(tourAgents);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getTourAgentById = async (req, res) => {
  try {
    const { id } = req.params;
    const tourAgent = await TourAgent.findById(id);
    if (!tourAgent) {
      return res.status(404).json({ message: 'Tour Agent not found' });
    }
    res.status(200).json(tourAgent);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.registerTourAgent = async (req, res) => {
  try {
    const { name, email } = req.body;
    const existingTourAgent = await TourAgent.findOne({ email });
    if (existingTourAgent) {
      return res.status(400).json({ message: 'Tour Agent already exists with this email' });
    }
    const newTourAgent = await TourAgent.create({ name, email });
    res.status(201).json(newTourAgent);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateTourAgent = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email } = req.body;
    const tourAgent = await TourAgent.findByIdAndUpdate(
      id,
      { name, email },
      { new: true }
    );
    if (!tourAgent) {
      return res.status(404).json({ message: 'Tour Agent not found' });
    }
    res.status(200).json(tourAgent);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
exports.deleteTourAgent = async (req, res) => {
    try {
      const { id } = req.params;
      await TourAgent.findByIdAndDelete(id);
      res.status(200).json({ message: 'Tour Agent deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  exports.blockTourAgent = async (req, res) => {
    try {
      const { id } = req.params;
      const tourAgent = await TourAgent.findById(id);
      if (!tourAgent) {
        return res.status(404).json({ message: 'Tour Agent not found' });
      }
      tourAgent.blocked = true;
      await tourAgent.save();
      res.status(200).json({ message: 'Tour Agent blocked successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
