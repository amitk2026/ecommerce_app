
import mongoose from "mongoose";


const couponSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    trim: true,
  },
  coupon: {
    type: String,
    required: true,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    expires: 15*24*60*60, // OTP expires after 5 minutes
  },
});



const couponModel = mongoose.model('COUPON', couponSchema);
export default couponModel;