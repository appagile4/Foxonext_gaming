const express = require('express');
const router = express.Router();
const {
  getSocialLinks,
  updateSocialLinks,
} = require('../controllers/socialLinksController');
const { protectAdmin } = require('../middleware/authMiddleware');

// Public route to view social links
router.get('/', getSocialLinks);

// Protected route to update social links
router.put('/', protectAdmin, updateSocialLinks);

module.exports = router;
