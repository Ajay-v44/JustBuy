const orderModel=require('../models/ordermodel')
exports.createOrder=(req,res,next)=>{
   const cartItems=req.body;

   const amount=cartItems.reduce((acc,item)=>(acc+item.product.price*item.qty),0);
   console.log(amount)
    res.json({
        success:true,
        message:'order  working'

    })
}