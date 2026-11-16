const express = require('express');
const router = express.Router();
const upload = require('../middleware/uploadMiddleware');
const { uploadImage } = require('../controllers/uploadController');
const { protectAdmin } = require('../middleware/authMiddleware');

// Route to handle single file image upload (field name: "image" or "file")
router.post('/', protectAdmin, (req, res, next) => {
  upload.single('image')(req, res, (err) => {
    if (err) {
      upload.single('file')(req, res, (err2) => {
        if (err2) {
          return res.status(400).json({
            success: false,
            message: err2.message || 'File upload error',
          });
        }
        uploadImage(req, res);
      });
    } else {
      uploadImage(req, res);
    }
  });
});

module.exports = router;
