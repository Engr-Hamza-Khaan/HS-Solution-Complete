const Internship = require('../models/Internship');

// Student applies for internship
exports.applyForInternship = async (req, res) => {
  try {
    const { firstName, lastName, email, internship, semester, university, message } = req.body;

    const application = new Internship({
      firstName,
      lastName,
      email,
      internship,
      semester,
      university,
      message
    });

    await application.save();
    res.status(201).json({ message: 'Application submitted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Admin views all applications
exports.getAllApplications = async (req, res) => {
  try {
    const applications = await Internship.find().sort({ createdAt: -1 });
    res.status(200).json(applications);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
