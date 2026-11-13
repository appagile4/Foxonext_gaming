const express = require('express');
const router = express.Router();
const {
  getAllProviders,
  createProvider,
  updateProvider,
  toggleProviderStatus,
  deleteProvider,
} = require('../controllers/providerController');
const { protectAdmin } = require('../middleware/authMiddleware');

// Public route to view providers
router.get('/', getAllProviders);

// Admin protected routes
router.post('/', protectAdmin, createProvider);
router.put('/:id', protectAdmin, updateProvider);
router.patch('/:id/toggle', protectAdmin, toggleProviderStatus);
router.delete('/:id', protectAdmin, deleteProvider);

module.exports = router;
