const { json } = require("express");
const productmodel = require("../models/productModel");
// Get products API-/api/v1/product

exports.getProducts = async (req, res, next) => {
 try{
  const products = await productmodel.find({});
  res.json({
    success: true,
    products,
  });

 }catch(error){
  res,json({
    "status":false,
    "message":error
  })
 }
  
};
// Get Single products API-/api/v1/product:id

exports.getSingleProducts = async (req, res, next) => {
  try{
    const product = await productmodel.findById(req.params.id);
  res.json({
    success: true,
    message: "Get single Products working",
    product
  });
  }
  catch(error){
    res.status(404).json({
      success:false,
      message:'unamble to get product id'
    })
  }
};
