const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Prompt = sequelize.define('Prompt', {
    prompt_type: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    prompt_text: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  });

  Prompt.associate = (models) => {
    Prompt.belongsTo(models.LLMConfig);
    Prompt.hasMany(models.PromptVersion);
  };

  return Prompt;
};
