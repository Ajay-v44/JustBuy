const orderModel = require("../models/ordermodel");
const productModel = require("../models/productModel");

exports.createOrder = async (req, res, next) => {
  const cartItems = req.body;

  const amount = Number(
    cartItems.reduce((acc, item) => acc + item.product.price * item.qty, 0)
  ).toFixed(2);
  const status = "pending";
  const order = await orderModel.create({ cartItems, amount, status });
  //updating stock
  cartItems.forEach(async (item) => {
    const products =await productModel.findById(item.product._id);
    products.stock = products.stock - item.qty;
    await products.save();
  });
  res.json({
    success: true,
    order,
  });
};
