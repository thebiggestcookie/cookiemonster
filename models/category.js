const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Category = sequelize.define('Category', {
    name: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  });

  Category.associate = (models) => {
    Category.belongsTo(models.Department);
    Category.hasMany(models.Subcategory);
  };

  return Category;
};
