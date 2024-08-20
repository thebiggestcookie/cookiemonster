const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const User = sequelize.define('User', {
    username: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true
    },
    password_hash: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    role: {
      type: DataTypes.STRING(20),
      allowNull: false
    }
  });

  User.associate = (models) => {
    User.hasMany(models.GenerationSession);
    User.hasMany(models.PromptVersion, { foreignKey: 'created_by' });
    User.hasMany(models.ABTest, { foreignKey: 'created_by' });
  };

  return User;
};
