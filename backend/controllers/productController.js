const productmodel = require("../models/productModel");
exports.getProducts = async (req, res, next) => {
  const products = await productmodel.find({});
  res.json({
    success:true,
    products
  })

  res.json({
    success: true,
    message: "Get Products working",
  });
};
exports.getSingleProducts = (req, res, next) => {
  res.json({
    success: true,
    message: "Get single Products working",
  });
};
