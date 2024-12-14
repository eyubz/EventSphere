const nodemailer = require("nodemailer");
const message = require("../Utils/verification_message");
require("dotenv").config();

class EmailService {
  constructor() {}

  SendEmail = async (email, subject, text) => {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      port: 465,
      secure: false,
      auth: {
        user: process.env.APP_EMAIL,
        pass: process.env.APP_PASSWORD,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    const mailOptions = {
      from: process.env.APP_EMAIL,
      to: email,
      subject: subject,
      html: text,
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });
  };

  GenerateVerificationEmail = async (otp) => {
    const subject = "Verify Your Email Address";
    return { message: message(otp), subject: subject };
  };

  SendVerificationEmail = async (email, otp) => {
    try {
      const { message, subject } = await this.GenerateVerificationEmail(otp);
      this.SendEmail(email, subject, message);
    } catch (error) {
      throw error;
    }
  };
}

module.exports = EmailService;
