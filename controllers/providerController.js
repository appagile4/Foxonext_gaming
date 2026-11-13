const Provider = require('../models/Provider');

const DEFAULT_PROVIDERS = [
  {
    name: 'PG Soft',
    slug: 'pg-soft',
    logo: '/images/providers/pg-soft.png',
    category: 'Slots',
    gamesCount: 140,
    status: 'active',
    apiStatus: 'connected',
    rtpRange: '96.5% - 98.0%',
    description: 'Pocket Games Soft - Premier mobile slots and table games provider.',
  },
  {
    name: 'Pragmatic Play',
    slug: 'pragmatic',
    logo: '/images/providers/pragmatic.png',
    category: 'Multi-Product',
    gamesCount: 350,
    status: 'active',
    apiStatus: 'connected',
    rtpRange: '96.2% - 97.5%',
    description: 'Award-winning slots, live casino, and crash games portfolio.',
  },
  {
    name: 'JDB Gaming',
    slug: 'jdb',
    logo: '/images/providers/jdb.png',
    category: 'Slots',
    gamesCount: 95,
    status: 'active',
    apiStatus: 'connected',
    rtpRange: '96.0% - 97.2%',
    description: 'Asian-focused high retention slots and arcade shooting games.',
  },
  {
    name: 'SPRIBE',
    slug: 'spribe',
    logo: '/images/providers/spribe.png',
    category: 'Crash Games',
    gamesCount: 15,
    status: 'active',
    apiStatus: 'connected',
    rtpRange: '97.0%',
    description: 'Creator of the world-renowned Aviator crash game and turbo games.',
  },
  {
    name: 'DB Gaming',
    slug: 'db-gaming',
    logo: '/images/providers/db-gaming.png',
    category: 'Live Casino',
    gamesCount: 45,
    status: 'active',
    apiStatus: 'connected',
    rtpRange: '97.8%',
    description: 'High-definition live dealer baccarat, roulette, and blackjack.',
  },
  {
    name: 'IN OUT',
    slug: 'in-out',
    logo: '/images/providers/in-out.png',
    category: 'Table Games',
    gamesCount: 30,
    status: 'active',
    apiStatus: 'connected',
    rtpRange: '96.8%',
    description: 'Fast-paced card and dice gaming solutions for modern operators.',
  },
  {
    name: 'Pescaria',
    slug: 'pescaria',
    logo: '/images/providers/pescaria.png',
    category: 'Fishing Games',
    gamesCount: 22,
    status: 'active',
    apiStatus: 'connected',
    rtpRange: '96.5%',
    description: 'Dynamic multiplayer arcade fish hunting games.',
  },
  {
    name: 'CQ9',
    slug: 'cq9',
    logo: '/images/providers/cq9.png',
    category: 'Slots',
    gamesCount: 120,
    status: 'active',
    apiStatus: 'connected',
    rtpRange: '96.1% - 97.0%',
    description: 'Rich graphic themes and versatile math engines.',
  },
];

// @desc Get all gaming providers (auto-seeds defaults if empty)
// @route GET /api/providers
// @access Public / Admin
const getAllProviders = async (req, res) => {
  try {
    let providers = await Provider.find().sort({ createdAt: -1 });

    if (providers.length === 0) {
      providers = await Provider.insertMany(DEFAULT_PROVIDERS);
      console.log(`Auto-seeded ${providers.length} default gaming providers into database.`);
    }

    return res.status(200).json({
      success: true,
      count: providers.length,
      providers,
    });
  } catch (error) {
    console.error('Error fetching providers:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to fetch providers',
      error: error.message,
    });
  }
};

// @desc Create new gaming provider
// @route POST /api/providers
// @access Private (Admin)
const createProvider = async (req, res) => {
  try {
    const { name, logo, category, gamesCount, status, rtpRange, description } = req.body;

    if (!name) {
      return res.status(400).json({
        success: false,
        message: 'Provider name is required',
      });
    }

    const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    const newProvider = await Provider.create({
      name: name.trim(),
      slug,
      logo: logo || '/images/providers/default.png',
      category: category || 'Multi-Product',
      gamesCount: gamesCount ? Number(gamesCount) : 0,
      status: status || 'active',
      apiStatus: 'connected',
      rtpRange: rtpRange || '96.5%',
      description: description ? description.trim() : '',
    });

    return res.status(201).json({
      success: true,
      message: 'Gaming provider added successfully',
      provider: newProvider,
    });
  } catch (error) {
    console.error('Error creating provider:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to create provider',
      error: error.message,
    });
  }
};

// @desc Update provider
// @route PUT /api/providers/:id
// @access Private (Admin)
const updateProvider = async (req, res) => {
  try {
    const provider = await Provider.findById(req.params.id);
    if (!provider) {
      return res.status(404).json({
        success: false,
        message: 'Provider not found',
      });
    }

    const updated = await Provider.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true, runValidators: true }
    );

    return res.status(200).json({
      success: true,
      message: 'Provider updated successfully',
      provider: updated,
    });
  } catch (error) {
    console.error('Error updating provider:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to update provider',
      error: error.message,
    });
  }
};

// @desc Toggle provider active status
// @route PATCH /api/providers/:id/toggle
// @access Private (Admin)
const toggleProviderStatus = async (req, res) => {
  try {
    const provider = await Provider.findById(req.params.id);
    if (!provider) {
      return res.status(404).json({
        success: false,
        message: 'Provider not found',
      });
    }

    provider.status = provider.status === 'active' ? 'inactive' : 'active';
    await provider.save();

    return res.status(200).json({
      success: true,
      message: `Provider marked as ${provider.status}`,
      provider,
    });
  } catch (error) {
    console.error('Error toggling provider status:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to toggle status',
      error: error.message,
    });
  }
};

// @desc Delete provider
// @route DELETE /api/providers/:id
// @access Private (Admin)
const deleteProvider = async (req, res) => {
  try {
    const provider = await Provider.findById(req.params.id);
    if (!provider) {
      return res.status(404).json({
        success: false,
        message: 'Provider not found',
      });
    }

    await Provider.findByIdAndDelete(req.params.id);

    return res.status(200).json({
      success: true,
      message: 'Provider deleted successfully',
    });
  } catch (error) {
    console.error('Error deleting provider:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to delete provider',
      error: error.message,
    });
  }
};

module.exports = {
  getAllProviders,
  createProvider,
  updateProvider,
  toggleProviderStatus,
  deleteProvider,
};
