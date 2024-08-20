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
    },
    created_by_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });

  PromptVersion.associate = (models) => {
    PromptVersion.belongsTo(models.Prompt);
    PromptVersion.belongsTo(models.User, { as: 'creator', foreignKey: 'created_by_id' });
    PromptVersion.hasMany(models.ABTest, { as: 'PromptA', foreignKey: 'prompt_a_id' });
    PromptVersion.hasMany(models.ABTest, { as: 'PromptB', foreignKey: 'prompt_b_id' });
  };

  return PromptVersion;
};
