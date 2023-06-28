const productValidator = require("../validator/productValidator");
const Products = require("../models/Product.shemas");

//logique des route

module.exports.getAll = async (req, res) => {
  const product = await Products.findAll({
    attributes: {
      exclude: ["createdAt", "updatedAt"],
    },
  });

  if (!product) {
    res.status(500).json({ msg: "product not found" });
  }
  res.status(200).json(product);
};
module.exports.getOne = async (req, res) => {
  const { id } = req.params;
  const product = await Products.findOne({
    where: { id: +id },
    attributes: {
      exclude: ["createdAt", "updatedAt"],
    },
  });

  try {
    if (!product) {
      return res.status(404).json({ msg: "product not found" });
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json(error);
  }
};
module.exports.createOne = async (req, res) => {
  const { body } = req;
  const { error } = productValidator(body);

  console.log(error);
  if (error) return res.status(404).json({ msg: error.details[0].message });

  const product = await Products.create({
    title: req.body.title,
    price: req.body.price,
    description: req.body.description,
  });
  res.status(201).json({ msg: "product add succes" });
};
module.exports.updateOne = async (req, res) => {
  const { id } = req.params;
  const product = await Products.findByPk(id);

  if (!product) return res.status(404).json({ msg: "product not found" });

  product.title = req.body.title;
  product.save();
  res.status(201).json({ msg: "product updated" });
};
module.exports.deleteOne = async (req, res) => {
  const { id } = req.params;
  const product = await Products.destroy({ where: { id: +id } });

  if (!product) return res.status(404).json({ msg: "product not found" });

  res.status(200).json({ msg: "product deleted" });
};
