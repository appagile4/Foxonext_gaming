const express = require('express');
const router = express.Router();
const {
  getAllCompanyProviders,
  createCompanyProvider,
  updateCompanyProvider,
  toggleCompanyProviderStatus,
  deleteCompanyProvider,
} = require('../controllers/companyProviderController');
const { protectAdmin } = require('../middleware/authMiddleware');

// Public route to view company providers (for the /providers page)
router.get('/', getAllCompanyProviders);

// Admin protected routes
router.post('/', protectAdmin, createCompanyProvider);
router.put('/:id', protectAdmin, updateCompanyProvider);
router.patch('/:id/toggle', protectAdmin, toggleCompanyProviderStatus);
router.delete('/:id', protectAdmin, deleteCompanyProvider);

module.exports = router;
