const mongoose = require('mongoose');

const contactInfoSchema = new mongoose.Schema(
  {
    showSection: {
      type: Boolean,
      default: true,
    },
    phone: {
      type: String,
      default: '+971 58 191 0073',
      trim: true,
    },
    showPhone: {
      type: Boolean,
      default: true,
    },
    email: {
      type: String,
      default: 'sales@cloudzy.com',
      trim: true,
    },
    showEmail: {
      type: Boolean,
      default: true,
    },
    companyName: {
      type: String,
      default: 'Cloudzy AI Information Technology LLC.',
      trim: true,
    },
    addressLine1: {
      type: String,
      default: 'Bin Dasmal Building 1, Office 80',
      trim: true,
    },
    addressLine2: {
      type: String,
      default: 'Al Goze Industrial First, Dubai · United Arab Emirates',
      trim: true,
    },
    showAddress: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('ContactInfo', contactInfoSchema);
