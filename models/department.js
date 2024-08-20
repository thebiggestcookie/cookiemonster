const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Department = sequelize.define('Department', {
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true
    }
  });

  Department.associate = (models) => {
    Department.hasMany(models.Category);
  };

  return Department;
};
