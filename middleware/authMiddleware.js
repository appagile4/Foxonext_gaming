const jwt = require('jsonwebtoken');
const Admin = require('../models/Admin');

const protectAdmin = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      token = req.headers.authorization.split(' ')[1];
      const decoded = jwt.verify(
        token,
        process.env.JWT_SECRET || 'inetglobal_super_secret_admin_jwt_key_2026'
      );

      const admin = await Admin.findById(decoded.id).select('-password');
      if (!admin || !admin.isActive) {
        return res.status(401).json({
          success: false,
          message: 'Not authorized or admin account is inactive',
        });
      }

      req.admin = admin;
      next();
    } catch (error) {
      console.error('Admin Auth Error:', error.message);
      return res.status(401).json({
        success: false,
        message: 'Token verification failed or expired',
      });
    }
  }

  if (!token) {
    return res.status(401).json({
      success: false,
      message: 'No authorization token provided',
    });
  }
};

module.exports = { protectAdmin };
