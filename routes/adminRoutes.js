const express = require('express');
const router = express.Router();
const {
  loginAdmin,
  getAdminMe,
  registerAdmin,
  changePassword,
} = require('../controllers/adminAuthController');
const { protectAdmin } = require('../middleware/authMiddleware');

// Public route: Admin Login
router.post('/login', loginAdmin);

// Protected Auth Routes
router.get('/me', protectAdmin, getAdminMe);
router.post('/register', protectAdmin, registerAdmin);
router.put('/change-password', protectAdmin, changePassword);

module.exports = router;
