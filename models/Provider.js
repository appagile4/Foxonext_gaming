const mongoose = require('mongoose');

const providerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Provider name is required'],
      trim: true,
    },
    slug: {
      type: String,
      trim: true,
      lowercase: true,
    },
    logo: {
      type: String,
      default: '/images/providers/default.png',
    },
    category: {
      type: String,
      enum: ['Slots', 'Live Casino', 'Crash Games', 'Fishing Games', 'Table Games', 'Multi-Product'],
      default: 'Multi-Product',
    },
    gamesCount: {
      type: Number,
      default: 100,
    },
    status: {
      type: String,
      enum: ['active', 'testing', 'maintenance', 'inactive'],
      default: 'active',
    },
    apiStatus: {
      type: String,
      enum: ['connected', 'degraded', 'offline'],
      default: 'connected',
    },
    rtpRange: {
      type: String,
      default: '96.5% - 98.2%',
    },
    countries: {
      type: [String],
      default: ['Global', 'United Arab Emirates', 'United Kingdom', 'Malta', 'Curacao', 'Philippines', 'Brazil'],
    },
    description: {
      type: String,
      default: '',
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Provider', providerSchema);
