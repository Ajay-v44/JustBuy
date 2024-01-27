const express=require('express');
const { createOrder } = require('../controllers/orderController');
const router=express.Router();
router.route('/products').get(createOrder)