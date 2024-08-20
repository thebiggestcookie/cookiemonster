const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Product = sequelize.define('Product', {
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT
    },
    brand: {
      type: DataTypes.STRING(100)
    },
    price: {
      type: DataTypes.DECIMAL(10, 2)
    }
  });

  Product.associate = (models) => {
    Product.belongsTo(models.Subcategory);
    Product.hasMany(models.ProductAttribute);
  };

  return Product;
};
