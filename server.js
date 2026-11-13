const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');
const connectDB = require('./config/db');
const cloudinary = require('./config/cloudinary');

// Load environment variables
dotenv.config({ path: path.resolve(__dirname, '.env') });

// Connect to MongoDB
connectDB();

const app = express();

// Middleware
app.use(
  cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  })
);
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

// Routes
const adminRoutes = require('./routes/adminRoutes');
const providerRoutes = require('./routes/providerRoutes');
const companyProviderRoutes = require('./routes/companyProviderRoutes');
const socialLinksRoutes = require('./routes/socialLinksRoutes');
const contactInfoRoutes = require('./routes/contactInfoRoutes');
const inquiryRoutes = require('./routes/inquiryRoutes');

// Root Route & Health check
app.get('/', (req, res) => {
  res.json({
    status: 'success',
    service: 'FOXONEXT Backend API',
    version: '1.0.0',
    timestamp: new Date().toISOString(),
    endpoints: {
      admin: '/api/admin',
      adminLogin: '/api/admin/login',
      topGamingProviders: '/api/providers',
      companyProviders: '/api/company-providers',
      socialLinks: '/api/social-links',
      contactInfo: '/api/contact-info',
      inquiries: '/api/inquiries',
      cloudinaryCheck: '/api/cloudinary-check',
    },
  });
});

// Admin API
app.use('/api/admin', adminRoutes);

// Top Gaming Providers API (for Home Marquee)
app.use('/api/providers', providerRoutes);

// Company Providers Directory API (for Public Providers Page)
app.use('/api/company-providers', companyProviderRoutes);

// Social Links API
app.use('/api/social-links', socialLinksRoutes);

// Contact Info API
app.use('/api/contact-info', contactInfoRoutes);

// Inquiries / Leads API
app.use('/api/inquiries', inquiryRoutes);

// Cloudinary verification route
app.get('/api/cloudinary-check', async (req, res) => {
  try {
    const pingResponse = await cloudinary.api.ping();
    res.json({
      success: true,
      message: 'Cloudinary connected successfully',
      ping: pingResponse,
      cloudName: process.env.CLOUDINARY_CLOUD_NAME,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Cloudinary connection error',
      error: error.message,
    });
  }
});

// 404 Handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: `Cannot ${req.method} ${req.originalUrl}`,
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Unhandled Server Error:', err);
  res.status(500).json({
    success: false,
    message: 'Internal server error',
    error: err.message,
  });
});

// Start Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`====================================================`);
  console.log(`  FOXONEXT Backend running on port ${PORT}`);
  console.log(`  Local URL: http://localhost:${PORT}`);
  console.log(`  Admin Login: http://localhost:${PORT}/api/admin/login`);
  console.log(`  Providers API: http://localhost:${PORT}/api/providers`);
  console.log(`====================================================`);
});
