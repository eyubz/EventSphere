const OTPAuth = require("otpauth");
require("dotenv").config();

class VerificationService {
  constructor() {}

  GenerateOTP = async () => {
    const toOtp = new OTPAuth.TOTP({
      issuer: "EventSphere",
      label: "bezueyerusalem@gmail.com",
      algorithm: "SHA1",
      digits: 6,
      period: 300,
      secret: process.env.OTP_SECRET,
    });

    const otp = toOtp.generate();
    return otp;
  };

  VerifyOTP = async (otp) => {
    const toOtp = new OTPAuth.TOTP({
      issuer: "EventSphere",
      label: "bezueyerusalem@gmail.com",
      algorithm: "SHA1",
      digits: 6,
      period: 300,
      secret: OTPAuth.Secret.fromBase32(process.env.OTP_SECRET),
    });
    try {
      const isValid = toOtp.validate({ token: otp });
      return isValid !== null;
    } catch (error) {
      console.error("Error verifying OTP:", error);
      return false;
    }
  };
}

module.exports = VerificationService;
