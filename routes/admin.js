const exp = require("constants");
const express = require("express");
const path = require("path"); // This is a core module
const rootDir = require("../utils/path");
const router = express.Router();

router.get("/add-product", (req, res) => {
  res.sendFile(path.join(rootDir, "views", "add-product.html"));
});

router.post("/add-product", (req, res) => {
  console.log(req.body);
  res.redirect("/");
});

module.exports = router;