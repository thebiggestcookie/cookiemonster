const bcrypt = require('bcryptjs');
const { sequelize, User } = require('./models');

async function setup() {
  try {
    // Sync all models with the database
    await sequelize.sync({ force: true });
    console.log('Database synced successfully');

    // Create an admin user
    const adminPassword = 'admin123'; // You should change this to a secure password
    const hashedPassword = await bcrypt.hash(adminPassword, 10);
    await User.create({
      username: 'admin',
      password_hash: hashedPassword,
      role: 'admin'
    });
    console.log('Admin user created successfully');

    console.log('Setup completed successfully');
  } catch (error) {
    console.error('Error during setup:', error);
  } finally {
    await sequelize.close();
  }
}

setup();
