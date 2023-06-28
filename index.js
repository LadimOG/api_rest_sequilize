const { json, urlencoded } = require("express");
require("dotenv").config();
const express = require("express");
const cors = require("cors");

const routes = require("./routes/routes");
const Db = require("./db/db");

const app = express();

app.use(json());
app.use(cors());

app.use(routes);

Db.sync()
  .then(() => {
    app.listen(3005, () => {
      console.log("Server running on the port 3005");
    });
    console.log("Connect to database");
  })
  .catch((error) => console.log("No connect to DB", error));
