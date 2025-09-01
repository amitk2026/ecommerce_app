import express from 'express'

import { loginUser, registerUser, adminLogin,forgotPassword, verifyOtp, resetPassword, signUPverify,couponfun } from '../controllers/user.controller.js'
import authUser from '../middleware/auth.js';



const userRouter = express.Router();

userRouter.post('/register', registerUser)
userRouter.post('/verifyReg',signUPverify)
userRouter.post('/login', loginUser)
userRouter.post('/admin', adminLogin)
userRouter.post('/forgot-password', forgotPassword)
userRouter.post('/verifyOtp', verifyOtp)
userRouter.post('/reset-password', resetPassword)
userRouter.post('/coupon',authUser, couponfun);

export default userRouter;