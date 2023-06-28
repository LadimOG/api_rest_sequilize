const sequelize = require("sequelize");

module.exports = new sequelize("crud", "root", process.env.PASSWORD_DB, {
  host: "localhost",
  dialect: "mysql",
});
