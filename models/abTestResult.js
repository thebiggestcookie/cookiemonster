const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const ABTestResult = sequelize.define('ABTestResult', {
    accuracy: {
      type: DataTypes.DECIMAL(5, 2)
    },
    speed: {
      type: DataTypes.DECIMAL(10, 2)
    },
    sample_size: {
      type: DataTypes.INTEGER
    }
  });

  ABTestResult.associate = (models) => {
    ABTestResult.belongsTo(models.ABTest);
    ABTestResult.belongsTo(models.PromptVersion);
  };

  return ABTestResult;
};
