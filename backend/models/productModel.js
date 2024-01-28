const mongoose = require("mongoose");
const productschema=new mongoose.Schema({
  name: String,
  price: String,
  descripstion: String,
  rating: String,
  images: [
    {
      image: String,
    },
  ],
  category:String,
  seller:String,
  stock:String,
  numOfReviews:String,
  createdAt:Date

});
const productmodel=mongoose.model('Product',productschema)
module.exports=productmodel
