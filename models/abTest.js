const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const ABTest = sequelize.define('ABTest', {
    name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    start_date: {
      type: DataTypes.DATE
    },
    end_date: {
      type: DataTypes.DATE
    },
    status: {
      type: DataTypes.STRING(20),
      allowNull: false
    }
  });

  ABTest.associate = (models) => {
    ABTest.belongsTo(models.PromptVersion, { as: 'PromptA' });
    ABTest.belongsTo(models.PromptVersion, { as: 'PromptB' });
    ABTest.belongsTo(models.User, { as: 'created_by' });
    ABTest.hasMany(models.ABTestResult);
  };

  return ABTest;
};
