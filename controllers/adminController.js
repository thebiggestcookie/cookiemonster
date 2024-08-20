const { User, LLMConfig } = require('../models');

exports.getUsers = async (req, res) => {
  try {
    const users = await User.findAll({ attributes: { exclude: ['password_hash'] } });
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching users', error: error.message });
  }
};

exports.createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json({ id: user.id, username: user.username, role: user.role });
  } catch (error) {
    res.status(500).json({ message: 'Error creating user', error: error.message });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const [updated] = await User.update(req.body, {
      where: { id: req.params.id }
    });
    if (updated) {
      const updatedUser = await User.findByPk(req.params.id, { attributes: { exclude: ['password_hash'] } });
      return res.json(updatedUser);
    }
    throw new Error('User not found');
  } catch (error) {
    res.status(500).json({ message: 'Error updating user', error: error.message });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const deleted = await User.destroy({
      where: { id: req.params.id }
    });
    if (deleted) {
      return res.status(204).send();
    }
    throw new Error('User not found');
  } catch (error) {
    res.status(500).json({ message: 'Error deleting user', error: error.message });
  }
};

exports.getLLMConfigs = async (req, res) => {
  try {
    const configs = await LLMConfig.findAll();
    res.json(configs);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching LLM configs', error: error.message });
  }
};

exports.createLLMConfig = async (req, res) => {
  try {
    const config = await LLMConfig.create(req.body);
    res.status(201).json(config);
  } catch (error) {
    res.status(500).json({ message: 'Error creating LLM config', error: error.message });
  }
};

exports.updateLLMConfig = async (req, res) => {
  try {
    const [updated] = await LLMConfig.update(req.body, {
      where: { id: req.params.id }
    });
    if (updated) {
      const updatedConfig = await LLMConfig.findByPk(req.params.id);
      return res.json(updatedConfig);
    }
    throw new Error('LLM config not found');
  } catch (error) {
    res.status(500).json({ message: 'Error updating LLM config', error: error.message });
  }
};

exports.deleteLLMConfig = async (req, res) => {
  try {
    const deleted = await LLMConfig.destroy({
      where: { id: req.params.id }
    });
    if (deleted) {
      return res.status(204).send();
    }
    throw new Error('LLM config not found');
  } catch (error) {
    res.status(500).json({ message: 'Error deleting LLM config', error: error.message });
  }
};

exports.getSystemHealth = async (req, res) => {
  // Placeholder for system health check logic
  res.status(501).json({ message: 'System health check not implemented yet' });
};