import { useContext, useState } from "react";
import axios from "axios";
import { ShopContext } from "../context/ShopContext";
import { toast } from "react-toastify";
export default function ForgotPassword() {
 
    const { navigate , backendUrl} = useContext(ShopContext);


  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRequestOtp = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post(backendUrl + '/api/user/forgot-password', { email });
        setMessage(res.data.message);
        console.log(res.data);

        if (res.data.success) setStep(2);
        
    } catch (err) {
      toast.error(res.data.message);
      setMessage(err.response?.data?.message || "Error sending OTP");
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post(backendUrl + '/api/user/verifyOtp', { email, otp });
      setMessage(res.data.message);
      console.log(res.data);
      if (res.data.success) setStep(3);
  
    } catch (err) {
      setMessage(err.response?.data?.message || "Invalid OTP");
    } finally {
      setLoading(false);
    }
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post( backendUrl + "/api/user/reset-password", {
        email,
        newPassword,
      });
      setMessage(res.data.message);
      
     // setStep(1); // go back to start (or redirect to login page)
      setEmail("");
      setOtp("");
      setNewPassword("");

      if (res.data.success) {
        toast.success("Password changed")
        navigate('/login');
      }
    } catch (err) {
      setMessage(err.response?.data?.message || "Error resetting password");
    } finally {
      setLoading(false);
    }
  };

    return (
      <div className="flex justify-center items-center ">
   
      <div className="h-full max-w-md  shadow-lg rounded-2xl p-6 mt-40">
        <h2 className="text-xl font-bold mb-4 text-center">Forgot Password</h2>

        {message && (
                    <p className="mb-3 text-sm text-center text-blue-600 font-medium">{message}</p>
        )}

        {step === 1 && (
          <form onSubmit={handleRequestOtp} className="space-y-4">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring"
              required
            />
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50"
            >
              {loading ? "Sending..." : "Send OTP"}
            </button>
          </form>
        )}

        {step === 2 && (
          <form onSubmit={handleVerifyOtp} className="space-y-4">
            <input
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring"
              required
            />
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 disabled:opacity-50"
            >
              {loading ? "Verifying..." : "Verify OTP"}
            </button>
          </form>
        )}

        {step === 3 && (
          <form onSubmit={handleResetPassword} className="space-y-4">
            <input
              type="password"
              placeholder="Enter new password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring"
              required
            />
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 disabled:opacity-50"
            >
              {loading ? "Resetting..." : "Reset Password"}
            </button>
          </form>
                )}
                
                <p className="m-auto  cursor-pointer" onClick={()=> navigate('/login')}>Login Back</p>
      </div>
  </div>

  );
}
