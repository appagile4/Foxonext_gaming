const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Admin = require('./models/Admin');

const path = require('path');
dotenv.config({ path: path.resolve(__dirname, '.env') });

const seedAdmin = async () => {
  try {
    const mongoUri = process.env.MONGO_URI;
    if (!mongoUri) {
      console.error('MONGO_URI is not defined in .env');
      process.exit(1);
    }

    console.log('Connecting to MongoDB...');
    await mongoose.connect(mongoUri);
    console.log('Connected to MongoDB successfully.');

    const adminsToSeed = [
      {
        name: 'Foxo Administrator',
        email: 'admin@foxo.com',
        password: 'Admin@123',
        role: 'superadmin',
        isActive: true,
      },
      {
        name: 'iNetGlobal Super Admin',
        email: 'admin@inetglobal.com',
        password: 'Admin@123',
        role: 'superadmin',
        isActive: true,
      },
    ];

    for (const adminData of adminsToSeed) {
      const existing = await Admin.findOne({ email: adminData.email.toLowerCase() });
      if (existing) {
        existing.name = adminData.name;
        existing.password = adminData.password; // pre-save will re-hash
        existing.role = adminData.role;
        existing.isActive = true;
        await existing.save();
        console.log(`Updated existing admin credentials: ${adminData.email} (Password: ${adminData.password})`);
      } else {
        const created = await Admin.create(adminData);
        console.log(`Created new admin: ${created.email} (Password: ${adminData.password})`);
      }
    }

    console.log('\n======================================');
    console.log('Admin Seeding Completed Successfully!');
    console.log('Login credentials:');
    console.log('1) Email: admin@foxo.com        | Password: Admin@123');
    console.log('2) Email: admin@inetglobal.com  | Password: Admin@123');
    console.log('======================================\n');

    await mongoose.disconnect();
    process.exit(0);
  } catch (error) {
    console.error('Error during admin seeding:', error);
    process.exit(1);
  }
};

seedAdmin();
