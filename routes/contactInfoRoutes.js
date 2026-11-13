const express = require('express');
const router = express.Router();
const {
  getContactInfo,
  updateContactInfo,
} = require('../controllers/contactInfoController');
const { protectAdmin } = require('../middleware/authMiddleware');

// Public route to view contact details
router.get('/', getContactInfo);

// Protected route to update contact details
router.put('/', protectAdmin, updateContactInfo);

module.exports = router;
