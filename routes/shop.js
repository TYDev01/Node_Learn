const express = require('express');
const path = require('path');
const rootDir = require('../utils/path');
const adminData = require('./admin');

const router = express.Router();

router.get("/", (req, res,) => {
  res.render('shop', {'prods': adminData.products, pageTitle: 'My New Shop'})

  // console.log('shop.js', adminData.products)
  // res.sendFile(path.join(rootDir, "views", "shop.html"))
});

module.exports = router;