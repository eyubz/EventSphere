const VerificationMessage = (otp) => {
  const html = `
          <div style="font-family: Arial, sans-serif; line-height: 1.5; color: #333;">
            <h2 style="color: #7F57C4;">Welcome to EventSphere!</h2>
            <p>Hi there,</p>
            <p>Thank you for signing up! To complete your registration, we need to verify your email address.</p>
            <p style="font-size: 1.2em; font-weight: bold; color: #7F57C4;">
              Your One-Time Password (OTP) is: <span style="background-color: #f7f7f7; padding: 5px 10px; border-radius: 5px;">${otp}</span>
            </p>
            <p>Please enter this OTP on the verification page to activate your account.</p>
            <p style="color: #555;">This OTP is valid for the next <strong>5 minutes</strong>. If you did not request this, please ignore this email.</p>
            <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
            <p style="font-size: 0.9em; color: #888;">
              If you have any questions or need further assistance, feel free to contact our support team.
            </p>
            <p style="font-size: 0.9em; color: #888;">Best regards, <br> The Team</p>
          </div>
        `;
  return html;
};

module.exports = VerificationMessage;
