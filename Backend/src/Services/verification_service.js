const OTPAuth = require("otpauth");
require("dotenv").config();

class VerificationService {
  constructor() {}

  GenerateOtp = async () => {
    const toOtp = new OTPAuth.TOTP({
      issuer: "EventSphere",
      label: "bezueyerusalem@gmail.com",
      algorithm: "SHA1",
      digits: 6,
      period: 600,
      secret: process.env.OTP_SECRET,
    });

    const otp = toOtp.generate();
    return otp;
  };
}

module.exports = VerificationService;
