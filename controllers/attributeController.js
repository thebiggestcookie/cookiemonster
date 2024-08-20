const { Department, Category, Subcategory, Attribute } = require('../models');

exports.getHierarchy = async (req, res) => {
  try {
    const hierarchy = await Department.findAll({
      include: [
        {
          model: Category,
          include: [
            {
              model: Subcategory,
              include: [Attribute]
            }
          ]
        }
      ]
    });
    res.json(hierarchy);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching hierarchy', error: error.message });
  }
};

exports.createDepartment = async (req, res) => {
  try {
    const department = await Department.create(req.body);
    res.status(201).json(department);
  } catch (error) {
    res.status(500).json({ message: 'Error creating department', error: error.message });
  }
};

exports.createCategory = async (req, res) => {
  try {
    const category = await Category.create(req.body);
    res.status(201).json(category);
  } catch (error) {
    res.status(500).json({ message: 'Error creating category', error: error.message });
  }
};

exports.createSubcategory = async (req, res) => {
  try {
    const subcategory = await Subcategory.create(req.body);
    res.status(201).json(subcategory);
  } catch (error) {
    res.status(500).json({ message: 'Error creating subcategory', error: error.message });
  }
};

exports.createAttribute = async (req, res) => {
  try {
    const attribute = await Attribute.create(req.body);
    res.status(201).json(attribute);
  } catch (error) {
    res.status(500).json({ message: 'Error creating attribute', error: error.message });
  }
};
