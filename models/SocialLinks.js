const mongoose = require('mongoose');

const socialLinksSchema = new mongoose.Schema(
  {
    instagram: {
      type: String,
      default: 'https://instagram.com',
      trim: true,
    },
    threads: {
      type: String,
      default: 'https://threads.net',
      trim: true,
    },
    linkedin: {
      type: String,
      default: 'https://linkedin.com',
      trim: true,
    },
    facebook: {
      type: String,
      default: 'https://facebook.com',
      trim: true,
    },
    x: {
      type: String,
      default: 'https://x.com',
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('SocialLinks', socialLinksSchema);
