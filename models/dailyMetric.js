const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const DailyMetric = sequelize.define('DailyMetric', {
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      unique: true
    },
    total_products_processed: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    average_processing_time: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false
    },
    overall_accuracy: {
      type: DataTypes.DECIMAL(5, 2),
      allowNull: false
    },
    llm_accuracy: {
      type: DataTypes.DECIMAL(5, 2),
      allowNull: false
    },
    human_accuracy: {
      type: DataTypes.DECIMAL(5, 2),
      allowNull: false
    },
    token_usage: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });

  return DailyMetric;
};
