const SocialLinks = require('../models/SocialLinks');

const DEFAULT_LINKS = {
  showSection: true,
  instagram: 'https://instagram.com',
  showInstagram: true,
  threads: 'https://threads.net',
  showThreads: true,
  linkedin: 'https://linkedin.com',
  showLinkedin: true,
  facebook: 'https://facebook.com',
  showFacebook: true,
  x: 'https://x.com',
  showX: true,
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
    const {
      showSection,
      instagram,
      showInstagram,
      threads,
      showThreads,
      linkedin,
      showLinkedin,
      facebook,
      showFacebook,
      x,
      showX,
    } = req.body;

    let links = await SocialLinks.findOne();
    if (!links) {
      links = new SocialLinks();
    }

    if (showSection !== undefined) links.showSection = Boolean(showSection);
    if (instagram !== undefined) links.instagram = instagram.trim();
    if (showInstagram !== undefined) links.showInstagram = Boolean(showInstagram);
    if (threads !== undefined) links.threads = threads.trim();
    if (showThreads !== undefined) links.showThreads = Boolean(showThreads);
    if (linkedin !== undefined) links.linkedin = linkedin.trim();
    if (showLinkedin !== undefined) links.showLinkedin = Boolean(showLinkedin);
    if (facebook !== undefined) links.facebook = facebook.trim();
    if (showFacebook !== undefined) links.showFacebook = Boolean(showFacebook);
    if (x !== undefined) links.x = x.trim();
    if (showX !== undefined) links.showX = Boolean(showX);

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
