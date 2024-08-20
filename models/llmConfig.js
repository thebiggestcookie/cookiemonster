const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const LLMConfig = sequelize.define('LLMConfig', {
    provider: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    model_name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    api_key: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    max_tokens: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });

  LLMConfig.associate = (models) => {
    LLMConfig.hasMany(models.Prompt);
    LLMConfig.hasMany(models.GenerationSession);
  };

  return LLMConfig;
};
