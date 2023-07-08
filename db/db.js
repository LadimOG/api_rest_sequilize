const sequelize = require("sequelize");

module.exports = new sequelize("crud_DB", "root", process.env.PASSWORD_DB, {
  host: "localhost",
  dialect: "mysql",
});
