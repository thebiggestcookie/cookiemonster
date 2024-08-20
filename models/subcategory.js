const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Subcategory = sequelize.define('Subcategory', {
    name: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  });

  Subcategory.associate = (models) => {
    Subcategory.belongsTo(models.Category);
    Subcategory.hasMany(models.Attribute);
    Subcategory.hasMany(models.Product);
  };

  return Subcategory;
};
