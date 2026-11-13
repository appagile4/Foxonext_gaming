const CompanyProvider = require('../models/CompanyProvider');

const DEFAULT_COMPANY_PROVIDERS = [
  {
    name: 'PG Soft',
    logo: '/images/providers/pg-soft.png',
    description: 'Pocket Games Soft - Premier mobile slots and modern RNG table games studio with high player retention.',
    priority: 1,
    countries: ['Global', 'United Arab Emirates', 'Malta', 'United Kingdom', 'Curacao', 'Philippines', 'Singapore'],
    category: 'Slots',
    gamesCount: 140,
    status: 'active',
  },
  {
    name: 'Pragmatic Play',
    logo: '/images/providers/pragmatic.png',
    description: 'Award-winning multi-product content provider delivering slots, live dealer tables, and crash mechanics.',
    priority: 2,
    countries: ['Global', 'United Arab Emirates', 'United Kingdom', 'Malta', 'Curacao', 'Brazil', 'United States', 'Canada'],
    category: 'Multi-Product',
    gamesCount: 350,
    status: 'active',
  },
  {
    name: 'JDB Gaming',
    logo: '/images/providers/jdb.png',
    description: 'Top Asian-market gaming developer famous for innovative video slots, arcade fishing, and card games.',
    priority: 3,
    countries: ['Global', 'Philippines', 'United Arab Emirates', 'Curacao', 'Malta', 'Singapore', 'India'],
    category: 'Slots',
    gamesCount: 95,
    status: 'active',
  },
  {
    name: 'SPRIBE',
    logo: '/images/providers/spribe.png',
    description: 'Pioneers of next-generation iGaming and creator of the globally acclaimed Aviator crash game.',
    priority: 4,
    countries: ['Global', 'United Arab Emirates', 'United Kingdom', 'Brazil', 'Malta', 'Curacao', 'India'],
    category: 'Crash Games',
    gamesCount: 15,
    status: 'active',
  },
  {
    name: 'DB Gaming',
    logo: '/images/providers/db-gaming.png',
    description: 'Ultra-low latency live casino dealer streaming with interactive Baccarat, Roulette, and Blackjack.',
    priority: 5,
    countries: ['Global', 'Philippines', 'United Arab Emirates', 'Malta', 'Curacao', 'Singapore'],
    category: 'Live Casino',
    gamesCount: 45,
    status: 'active',
  },
  {
    name: 'IN OUT',
    logo: '/images/providers/in-out.png',
    description: 'Engaging real-time table, card, and dice solutions built for seamless mobile gameplay.',
    priority: 6,
    countries: ['Global', 'United Arab Emirates', 'Malta', 'Curacao', 'Brazil', 'Canada'],
    category: 'Table Games',
    gamesCount: 30,
    status: 'active',
  },
  {
    name: 'Pescaria',
    logo: '/images/providers/pescaria.png',
    description: 'Dynamic arcade fish hunting and multiplayer skill shooter games designed for high user engagement.',
    priority: 7,
    countries: ['Global', 'Philippines', 'United Arab Emirates', 'Curacao', 'Singapore'],
    category: 'Fishing Games',
    gamesCount: 22,
    status: 'active',
  },
  {
    name: 'CQ9',
    logo: '/images/providers/cq9.png',
    description: 'High-definition video slots and arcade gaming studio with dynamic math models and diverse cultural themes.',
    priority: 8,
    countries: ['Global', 'Philippines', 'Malta', 'United Arab Emirates', 'Curacao', 'United States'],
    category: 'Slots',
    gamesCount: 120,
    status: 'active',
  },
];

// @desc    Get all Company Providers (auto-seeds defaults if empty)
// @route   GET /api/company-providers
// @access  Public / Admin
const getAllCompanyProviders = async (req, res) => {
  try {
    let providers = await CompanyProvider.find().sort({ priority: 1, createdAt: -1 });

    if (providers.length === 0) {
      providers = await CompanyProvider.insertMany(DEFAULT_COMPANY_PROVIDERS);
      console.log(`Auto-seeded ${providers.length} default company providers into database.`);
    }

    return res.status(200).json({
      success: true,
      count: providers.length,
      providers,
    });
  } catch (error) {
    console.error('Error fetching company providers:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to fetch company providers',
      error: error.message,
    });
  }
};

// @desc    Create new Company Provider
// @route   POST /api/company-providers
// @access  Private (Admin)
const createCompanyProvider = async (req, res) => {
  try {
    const { name, logo, description, priority, countries, category, gamesCount, status } = req.body;

    if (!name || !name.trim()) {
      return res.status(400).json({
        success: false,
        message: 'Provider name is required',
      });
    }

    // Process countries if passed as comma-separated string or array
    let parsedCountries = ['Global', 'United Arab Emirates', 'United Kingdom', 'Malta'];
    if (Array.isArray(countries) && countries.length > 0) {
      parsedCountries = countries.map((c) => c.trim()).filter(Boolean);
    } else if (typeof countries === 'string' && countries.trim()) {
      parsedCountries = countries.split(',').map((c) => c.trim()).filter(Boolean);
    }

    const provider = await CompanyProvider.create({
      name: name.trim(),
      logo: logo || '/images/providers/pg-soft.png',
      description: description ? description.trim() : '',
      priority: Number(priority) || 1,
      countries: parsedCountries,
      category: category || 'Slots',
      gamesCount: Number(gamesCount) || 50,
      status: status || 'active',
    });

    return res.status(201).json({
      success: true,
      message: 'Company provider created successfully',
      provider,
    });
  } catch (error) {
    console.error('Error creating company provider:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to create company provider',
      error: error.message,
    });
  }
};

// @desc    Update Company Provider
// @route   PUT /api/company-providers/:id
// @access  Private (Admin)
const updateCompanyProvider = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, logo, description, priority, countries, category, gamesCount, status } = req.body;

    const provider = await CompanyProvider.findById(id);
    if (!provider) {
      return res.status(404).json({
        success: false,
        message: 'Company provider not found',
      });
    }

    if (name !== undefined) provider.name = name.trim();
    if (logo !== undefined) provider.logo = logo.trim();
    if (description !== undefined) provider.description = description.trim();
    if (priority !== undefined) provider.priority = Number(priority);
    if (category !== undefined) provider.category = category.trim();
    if (gamesCount !== undefined) provider.gamesCount = Number(gamesCount);
    if (status !== undefined) provider.status = status;

    if (countries !== undefined) {
      if (Array.isArray(countries)) {
        provider.countries = countries.map((c) => c.trim()).filter(Boolean);
      } else if (typeof countries === 'string') {
        provider.countries = countries.split(',').map((c) => c.trim()).filter(Boolean);
      }
    }

    await provider.save();

    return res.status(200).json({
      success: true,
      message: 'Company provider updated successfully',
      provider,
    });
  } catch (error) {
    console.error('Error updating company provider:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to update company provider',
      error: error.message,
    });
  }
};

// @desc    Toggle Company Provider status
// @route   PATCH /api/company-providers/:id/toggle
// @access  Private (Admin)
const toggleCompanyProviderStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const provider = await CompanyProvider.findById(id);

    if (!provider) {
      return res.status(404).json({
        success: false,
        message: 'Company provider not found',
      });
    }

    provider.status = provider.status === 'active' ? 'inactive' : 'active';
    await provider.save();

    return res.status(200).json({
      success: true,
      message: `Provider status set to ${provider.status}`,
      provider,
    });
  } catch (error) {
    console.error('Error toggling company provider status:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to toggle status',
      error: error.message,
    });
  }
};

// @desc    Delete Company Provider
// @route   DELETE /api/company-providers/:id
// @access  Private (Admin)
const deleteCompanyProvider = async (req, res) => {
  try {
    const { id } = req.params;
    const provider = await CompanyProvider.findByIdAndDelete(id);

    if (!provider) {
      return res.status(404).json({
        success: false,
        message: 'Company provider not found',
      });
    }

    return res.status(200).json({
      success: true,
      message: 'Company provider deleted successfully',
    });
  } catch (error) {
    console.error('Error deleting company provider:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to delete company provider',
      error: error.message,
    });
  }
};

module.exports = {
  getAllCompanyProviders,
  createCompanyProvider,
  updateCompanyProvider,
  toggleCompanyProviderStatus,
  deleteCompanyProvider,
};
