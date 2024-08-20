const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
  protocol: 'postgres',
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  }
});

const models = {
  User: require('./user')(sequelize),
  Department: require('./department')(sequelize),
  Category: require('./category')(sequelize),
  Subcategory: require('./subcategory')(sequelize),
  Attribute: require('./attribute')(sequelize),
  Product: require('./product')(sequelize),
  ProductAttribute: require('./productAttribute')(sequelize),
  LLMConfig: require('./llmConfig')(sequelize),
  Prompt: require('./prompt')(sequelize),
  PromptVersion: require('./promptVersion')(sequelize),
  ABTest: require('./abTest')(sequelize),
  ABTestResult: require('./abTestResult')(sequelize),
  GenerationSession: require('./generationSession')(sequelize),
  DailyMetric: require('./dailyMetric')(sequelize)
};

Object.keys(models).forEach(modelName => {
  if (models[modelName].associate) {
    models[modelName].associate(models);
  }
});

module.exports = {
  sequelize,
  ...models
};
