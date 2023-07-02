const express = require("express");

const {
  getAll,
  getOne,
  createOne,
  updateOne,
  deleteOne,
} = require("../controllers/ctrl");

const router = express.Router();

//les routes de navigation
router.get("/getAll", getAll);
router.get("/getOne/:id", getOne);
router.post("/createOne", createOne);
router.put("/updateOne/:id", updateOne);
router.delete("/deleteOne/:id", deleteOne);

module.exports = router;
