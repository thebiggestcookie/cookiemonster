const { Product, Subcategory, ProductAttribute } = require('../models');

exports.generateProduct = async (req, res) => {
  // Placeholder for product generation logic
  res.status(501).json({ message: 'Product generation not implemented yet' });
};

exports.getProducts = async (req, res) => {
  try {
    const products = await Product.findAll({
      include: [{ model: Subcategory }, { model: ProductAttribute }]
    });
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching products', error: error.message });
  }
};

exports.getProduct = async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id, {
      include: [{ model: Subcategory }, { model: ProductAttribute }]
    });
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching product', error: error.message });
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const [updated] = await Product.update(req.body, {
      where: { id: req.params.id }
    });
    if (updated) {
      const updatedProduct = await Product.findByPk(req.params.id);
      return res.json(updatedProduct);
    }
    throw new Error('Product not found');
  } catch (error) {
    res.status(500).json({ message: 'Error updating product', error: error.message });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const deleted = await Product.destroy({
      where: { id: req.params.id }
    });
    if (deleted) {
      return res.status(204).send();
    }
    throw new Error('Product not found');
  } catch (error) {
    res.status(500).json({ message: 'Error deleting product', error: error.message });
  }
};
