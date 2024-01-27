const express=require('express');
const { createOrder } = require('../controllers/orderController');
const router=express.Router();
router.route('/orders').get(createOrder)

module.exports=router