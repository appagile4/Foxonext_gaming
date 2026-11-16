const ContactInfo = require('../models/ContactInfo');

const DEFAULT_CONTACT_INFO = {
  showSection: true,
  phone: '+971 58 191 0073',
  showPhone: true,
  email: 'sales@cloudzy.com',
  showEmail: true,
  companyName: 'Cloudzy AI Information Technology LLC.',
  addressLine1: 'Bin Dasmal Building 1, Office 80',
  addressLine2: 'Al Goze Industrial First, Dubai · United Arab Emirates',
  showAddress: true,
};

// @desc    Get Contact Us details
// @route   GET /api/contact-info
// @access  Public
const getContactInfo = async (req, res) => {
  try {
    let contact = await ContactInfo.findOne();
    if (!contact) {
      contact = await ContactInfo.create(DEFAULT_CONTACT_INFO);
    }

    return res.status(200).json({
      success: true,
      contactInfo: contact,
    });
  } catch (error) {
    console.error('Error fetching contact info:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to fetch contact info',
      error: error.message,
    });
  }
};

// @desc    Update Contact Us details
// @route   PUT /api/contact-info
// @access  Private (Admin)
const updateContactInfo = async (req, res) => {
  try {
    const {
      showSection,
      phone,
      showPhone,
      email,
      showEmail,
      companyName,
      addressLine1,
      addressLine2,
      showAddress,
    } = req.body;

    let contact = await ContactInfo.findOne();
    if (!contact) {
      contact = new ContactInfo();
    }

    if (showSection !== undefined) contact.showSection = Boolean(showSection);
    if (phone !== undefined) contact.phone = phone.trim();
    if (showPhone !== undefined) contact.showPhone = Boolean(showPhone);
    if (email !== undefined) contact.email = email.trim();
    if (showEmail !== undefined) contact.showEmail = Boolean(showEmail);
    if (companyName !== undefined) contact.companyName = companyName.trim();
    if (addressLine1 !== undefined) contact.addressLine1 = addressLine1.trim();
    if (addressLine2 !== undefined) contact.addressLine2 = addressLine2.trim();
    if (showAddress !== undefined) contact.showAddress = Boolean(showAddress);

    await contact.save();

    return res.status(200).json({
      success: true,
      message: 'Contact info updated successfully',
      contactInfo: contact,
    });
  } catch (error) {
    console.error('Error updating contact info:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to update contact info',
      error: error.message,
    });
  }
};

module.exports = {
  getContactInfo,
  updateContactInfo,
};
