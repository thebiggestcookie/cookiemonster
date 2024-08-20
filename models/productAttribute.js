const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const ProductAttribute = sequelize.define('ProductAttribute', {
    value: {
      type: DataTypes.TEXT
    },
    is_ai_generated: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    }
  });

  ProductAttribute.associate = (models) => {
    ProductAttribute.belongsTo(models.Product);
    ProductAttribute.belongsTo(models.Attribute);
    ProductAttribute.belongsTo(models.User, { as: 'last_updated_by' });
  };

  return ProductAttribute;
};
