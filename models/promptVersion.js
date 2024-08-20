const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const PromptVersion = sequelize.define('PromptVersion', {
    version_number: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    prompt_text: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  });

  PromptVersion.associate = (models) => {
    PromptVersion.belongsTo(models.Prompt);
    PromptVersion.belongsTo(models.User, { as: 'created_by' });
    PromptVersion.hasMany(models.ABTest, { as: 'PromptA' });
    PromptVersion.hasMany(models.ABTest, { as: 'PromptB' });
  };

  return PromptVersion;
};
