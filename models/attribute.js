const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Attribute = sequelize.define('Attribute', {
    name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    data_type: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    is_required: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  });

  Attribute.associate = (models) => {
    Attribute.belongsTo(models.Subcategory);
    Attribute.hasMany(models.ProductAttribute);
  };

  return Attribute;
};
