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
    },
    created_by_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });

  ABTest.associate = (models) => {
    ABTest.belongsTo(models.PromptVersion, { as: 'PromptA', foreignKey: 'prompt_a_id' });
    ABTest.belongsTo(models.PromptVersion, { as: 'PromptB', foreignKey: 'prompt_b_id' });
    ABTest.belongsTo(models.User, { as: 'creator', foreignKey: 'created_by_id' });
    ABTest.hasMany(models.ABTestResult);
  };

  return ABTest;
};