const express = require('express');
const router = express.Router();
const {
  createInquiry,
  getAllInquiries,
  updateInquiryStatus,
  deleteInquiry,
} = require('../controllers/inquiryController');
const { protectAdmin } = require('../middleware/authMiddleware');

// Public route to submit an inquiry from the website contact form
router.post('/', createInquiry);

// Admin protected routes
router.get('/', protectAdmin, getAllInquiries);
router.patch('/:id/status', protectAdmin, updateInquiryStatus);
router.delete('/:id', protectAdmin, deleteInquiry);

module.exports = router;
