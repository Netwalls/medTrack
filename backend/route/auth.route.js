const express = require("express");
const router = express.Router();
const {
  signup,
  signin,
  verifyOTP,
  forgotPassword,
  resendOTP,
  signupAdmin,
  signupDoctor
} = require("../controller/auth.controller");

router.post("/signup", signup);
router.post("/signup/doctor", signupDoctor);
router.post("/signup/admin", signupAdmin);
router.post("/verify-otp", verifyOTP);
router.post("/signin", signin);
router.post("/forgot-password", forgotPassword);
router.post("/resend-otp", resendOTP);

module.exports = router;
