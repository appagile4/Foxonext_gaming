const mongoose = require('mongoose');

const companyProviderSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Provider name is required'],
      trim: true,
    },
    logo: {
      type: String,
      default: '/images/providers/pg-soft.png',
      trim: true,
    },
    description: {
      type: String,
      default: '',
      trim: true,
    },
    priority: {
      type: Number,
      default: 1,
    },
    continents: {
      type: [String],
      default: ['Asia', 'Europe', 'North America', 'South America', 'Africa', 'Australia / Oceania'],
    },
    countries: {
      type: [String],
      default: ['Asia', 'Europe', 'North America', 'South America', 'Africa', 'Australia / Oceania'],
    },
    category: {
      type: String,
      default: 'Slots',
      trim: true,
    },
    gamesCount: {
      type: Number,
      default: 100,
    },
    status: {
      type: String,
      enum: ['active', 'inactive'],
      default: 'active',
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('CompanyProvider', companyProviderSchema);
