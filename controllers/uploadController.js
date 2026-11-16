const cloudinary = require('../config/cloudinary');

// @desc    Upload image to Cloudinary
// @route   POST /api/upload
// @access  Private (Admin)
const uploadImage = async (req, res) => {
  try {
    let fileBuffer;
    let mimeType = 'image/png';

    // Case 1: Upload via multer (multipart/form-data)
    if (req.file) {
      fileBuffer = req.file.buffer;
      mimeType = req.file.mimetype || 'image/png';
    } else if (req.body && req.body.image) {
      // Case 2: Upload via JSON base64 string
      const base64Data = req.body.image;
      const uploadRes = await cloudinary.uploader.upload(base64Data, {
        folder: 'foxonext/providers',
        resource_type: 'auto',
      });

      return res.status(200).json({
        success: true,
        message: 'Image uploaded successfully to Cloudinary',
        url: uploadRes.secure_url,
        public_id: uploadRes.public_id,
        format: uploadRes.format,
        width: uploadRes.width,
        height: uploadRes.height,
      });
    } else {
      return res.status(400).json({
        success: false,
        message: 'No image file provided for upload',
      });
    }

    // Convert buffer to data URI for Cloudinary uploader
    const base64String = `data:${mimeType};base64,${fileBuffer.toString('base64')}`;

    const uploadResult = await cloudinary.uploader.upload(base64String, {
      folder: 'foxonext/providers',
      resource_type: 'auto',
    });

    return res.status(200).json({
      success: true,
      message: 'Image uploaded successfully to Cloudinary',
      url: uploadResult.secure_url,
      public_id: uploadResult.public_id,
      format: uploadResult.format,
      width: uploadResult.width,
      height: uploadResult.height,
    });
  } catch (error) {
    console.error('Cloudinary upload error:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to upload image to Cloudinary',
      error: error.message,
    });
  }
};

module.exports = {
  uploadImage,
};
