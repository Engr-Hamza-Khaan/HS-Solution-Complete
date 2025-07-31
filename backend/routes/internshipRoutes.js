const express = require('express');
const { applyForInternship, getAllApplications } = require('../controllers/internshipController');
const { protect } = require('../middleware/authMiddleware');
const { isAdmin } = require('../middleware/roleMiddleware');

const router = express.Router();

router.post('/apply', protect, applyForInternship);
router.get('/applications', protect, isAdmin, getAllApplications);

module.exports = router;
