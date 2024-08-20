const { Prompt, PromptVersion, ABTest, ABTestResult } = require('../models');

exports.getPrompts = async (req, res) => {
  try {
    const prompts = await Prompt.findAll({
      include: [PromptVersion]
    });
    res.json(prompts);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching prompts', error: error.message });
  }
};

exports.createPrompt = async (req, res) => {
  try {
    const prompt = await Prompt.create(req.body);
    res.status(201).json(prompt);
  } catch (error) {
    res.status(500).json({ message: 'Error creating prompt', error: error.message });
  }
};

exports.getPromptVersions = async (req, res) => {
  try {
    const versions = await PromptVersion.findAll({
      where: { PromptId: req.params.id }
    });
    res.json(versions);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching prompt versions', error: error.message });
  }
};

exports.createPromptVersion = async (req, res) => {
  try {
    const version = await PromptVersion.create({
      ...req.body,
      PromptId: req.params.id,
      created_by_id: req.user.id
    });
    res.status(201).json(version);
  } catch (error) {
    res.status(500).json({ message: 'Error creating prompt version', error: error.message });
  }
};

exports.createABTest = async (req, res) => {
  try {
    const abTest = await ABTest.create({
      ...req.body,
      created_by_id: req.user.id
    });
    res.status(201).json(abTest);
  } catch (error) {
    res.status(500).json({ message: 'Error creating A/B test', error: error.message });
  }
};

exports.getABTestResults = async (req, res) => {
  try {
    const results = await ABTestResult.findAll({
      where: { ABTestId: req.params.id }
    });
    res.json(results);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching A/B test results', error: error.message });
  }
};
