const { DataTypes } = require("sequelize");

const db = require("../db/db");

const Products = db.define("product", {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  title: {
    type: DataTypes.STRING,
    allowNul: true,
  },
  price: {
    type: DataTypes.FLOAT,
    allowNul: true,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
});

module.exports = Products;
