const Admin = require('../models/Admin');
const jwt = require('jsonwebtoken');

// Generate JWT token
const generateToken = (id) => {
  return jwt.sign(
    { id },
    process.env.JWT_SECRET || 'inetglobal_super_secret_admin_jwt_key_2026',
    {
      expiresIn: '7d',
    }
  );
};

// @desc    Admin login
// @route   POST /api/admin/login
// @access  Public
const loginAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: 'Please provide both email and password',
      });
    }

    const normalizedEmail = email.toLowerCase().trim();
    let admin = await Admin.findOne({ email: normalizedEmail });

    // Seed default admin if no admin exists in the system
    const totalAdmins = await Admin.countDocuments();
    if (totalAdmins === 0) {
      if (
        (normalizedEmail === 'admin@foxo.com' || normalizedEmail === 'admin@inetglobal.com') &&
        password === 'Admin@123'
      ) {
        admin = await Admin.create({
          name: normalizedEmail.includes('foxo') ? 'Foxo Admin' : 'Super Administrator',
          email: normalizedEmail,
          password: 'Admin@123',
          role: 'superadmin',
        });
        console.log(`Seeded default administrator: ${normalizedEmail}`);
      }
    }

    if (!admin) {
      return res.status(401).json({
        success: false,
        message: 'Invalid email or password',
      });
    }

    if (!admin.isActive) {
      return res.status(403).json({
        success: false,
        message: 'Your admin account has been deactivated',
      });
    }

    const isMatch = await admin.matchPassword(password);
    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: 'Invalid email or password',
      });
    }

    // Update lastLogin timestamp
    admin.lastLogin = new Date();
    await admin.save();

    const token = generateToken(admin._id);

    return res.status(200).json({
      success: true,
      message: 'Admin login successful',
      token,
      admin: {
        id: admin._id,
        name: admin.name,
        email: admin.email,
        role: admin.role,
        lastLogin: admin.lastLogin,
      },
    });
  } catch (error) {
    console.error('Error in loginAdmin:', error);
    return res.status(500).json({
      success: false,
      message: 'Server error during admin login',
      error: error.message,
    });
  }
};

// @desc    Get Current Admin Profile
// @route   GET /api/admin/me
// @access  Private (protectAdmin)
const getAdminMe = async (req, res) => {
  try {
    return res.status(200).json({
      success: true,
      admin: req.admin,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// @desc    Create/Register a new Admin (Only accessible by authenticated superadmin)
// @route   POST /api/admin/register
// @access  Private (protectAdmin)
const registerAdmin = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: 'Please provide email and password',
      });
    }

    const existingAdmin = await Admin.findOne({ email: email.toLowerCase().trim() });
    if (existingAdmin) {
      return res.status(400).json({
        success: false,
        message: 'An admin with this email already exists',
      });
    }

    const newAdmin = await Admin.create({
      name: name || 'Admin',
      email: email.toLowerCase().trim(),
      password,
      role: role || 'admin',
    });

    return res.status(201).json({
      success: true,
      message: 'New admin registered successfully',
      admin: {
        id: newAdmin._id,
        name: newAdmin.name,
        email: newAdmin.email,
        role: newAdmin.role,
      },
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Failed to create admin',
      error: error.message,
    });
  }
};

// @desc    Change Admin Password
// @route   PUT /api/admin/change-password
// @access  Private (protectAdmin)
const changePassword = async (req, res) => {
  try {
    const { currentPassword, newPassword } = req.body;

    if (!currentPassword || !newPassword) {
      return res.status(400).json({
        success: false,
        message: 'Please provide both current password and new password',
      });
    }

    if (newPassword.length < 6) {
      return res.status(400).json({
        success: false,
        message: 'New password must be at least 6 characters long',
      });
    }

    // Find the admin with password field included
    const admin = await Admin.findById(req.admin._id);
    if (!admin) {
      return res.status(404).json({
        success: false,
        message: 'Admin account not found',
      });
    }

    // Verify current password
    const isMatch = await admin.matchPassword(currentPassword);
    if (!isMatch) {
      return res.status(400).json({
        success: false,
        message: 'Current password is incorrect',
      });
    }

    // Prevent reusing the exact same password
    const isSame = await admin.matchPassword(newPassword);
    if (isSame) {
      return res.status(400).json({
        success: false,
        message: 'New password must be different from the current password',
      });
    }

    // Update password (pre-save hook will hash it with bcrypt)
    admin.password = newPassword;
    await admin.save();

    console.log(`[Admin Security] Password changed successfully for admin: ${admin.email}`);

    return res.status(200).json({
      success: true,
      message: 'Password changed successfully',
    });
  } catch (error) {
    console.error('Error changing password:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to update password',
      error: error.message,
    });
  }
};

module.exports = {
  loginAdmin,
  getAdminMe,
  registerAdmin,
  changePassword,
};
