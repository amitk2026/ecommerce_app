import express from 'express'

import { placeOrder, placeOrderStripe, placeOrderRazorpay, allOrders, userOrders, updateStatus, verifyRazorpay } from '../controllers/order.controller.js'
import adminAuth from '../middleware/adminAuth.middleware.js'
import authUser from '../middleware/auth.js'
import { version } from 'mongoose'


const orderRouter = express.Router()

// Admin Features
orderRouter.post('/list',adminAuth, allOrders)
orderRouter.post('/status', adminAuth, updateStatus)

// Payment Features
orderRouter.post('/place',authUser, placeOrder)
orderRouter.post('/strip', authUser, placeOrderStripe)
orderRouter.post('/razorpay', authUser, placeOrderRazorpay)


// User Feature
orderRouter.post('/userorders', authUser, userOrders)

//verify payment 
orderRouter.post('/verifyRazorpay',authUser,verifyRazorpay)

export default orderRouter