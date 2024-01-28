const mongoose = require("mongoose");
const orderschema=new mongoose.Schema({

    cartItems:Array,
    amount:String,
    status:String,
    createdAt:Date
})

const orderModel =mongoose.model('Order',orderschema)
module.exports=orderModel;