const SocialLinks = require('../models/SocialLinks');

const DEFAULT_LINKS = {
  instagram: 'https://instagram.com',
  threads: 'https://threads.net',
  linkedin: 'https://linkedin.com',
  facebook: 'https://facebook.com',
  x: 'https://x.com',
};

// @desc    Get Social Links
// @route   GET /api/social-links
// @access  Public
const getSocialLinks = async (req, res) => {
  try {
    let links = await SocialLinks.findOne();
    if (!links) {
      links = await SocialLinks.create(DEFAULT_LINKS);
    }

    return res.status(200).json({
      success: true,
      socialLinks: links,
    });
  } catch (error) {
    console.error('Error fetching social links:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to fetch social links',
      error: error.message,
    });
  }
};

// @desc    Update Social Links
// @route   PUT /api/social-links
// @access  Private (Admin)
const updateSocialLinks = async (req, res) => {
  try {
    const { instagram, threads, linkedin, facebook, x } = req.body;

    let links = await SocialLinks.findOne();
    if (!links) {
      links = new SocialLinks();
    }

    if (instagram !== undefined) links.instagram = instagram.trim();
    if (threads !== undefined) links.threads = threads.trim();
    if (linkedin !== undefined) links.linkedin = linkedin.trim();
    if (facebook !== undefined) links.facebook = facebook.trim();
    if (x !== undefined) links.x = x.trim();

    await links.save();

    return res.status(200).json({
      success: true,
      message: 'Social links updated successfully',
      socialLinks: links,
    });
  } catch (error) {
    console.error('Error updating social links:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to update social links',
      error: error.message,
    });
  }
};

module.exports = {
  getSocialLinks,
  updateSocialLinks,
};
