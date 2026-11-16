const mongoose = require('mongoose');

const socialLinksSchema = new mongoose.Schema(
  {
    showSection: {
      type: Boolean,
      default: true,
    },
    instagram: {
      type: String,
      default: 'https://instagram.com',
      trim: true,
    },
    showInstagram: {
      type: Boolean,
      default: true,
    },
    threads: {
      type: String,
      default: 'https://threads.net',
      trim: true,
    },
    showThreads: {
      type: Boolean,
      default: true,
    },
    linkedin: {
      type: String,
      default: 'https://linkedin.com',
      trim: true,
    },
    showLinkedin: {
      type: Boolean,
      default: true,
    },
    facebook: {
      type: String,
      default: 'https://facebook.com',
      trim: true,
    },
    showFacebook: {
      type: Boolean,
      default: true,
    },
    x: {
      type: String,
      default: 'https://x.com',
      trim: true,
    },
    showX: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('SocialLinks', socialLinksSchema);
