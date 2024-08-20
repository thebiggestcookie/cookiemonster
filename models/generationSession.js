const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const GenerationSession = sequelize.define('GenerationSession', {
    initial_input: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    step1_result: {
      type: DataTypes.JSONB
    },
    step2_result: {
      type: DataTypes.JSONB
    },
    step3_result: {
      type: DataTypes.JSONB
    }
  });

  GenerationSession.associate = (models) => {
    GenerationSession.belongsTo(models.User);
    GenerationSession.belongsTo(models.LLMConfig);
  };

  return GenerationSession;
};
