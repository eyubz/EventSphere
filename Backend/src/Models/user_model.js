const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      min: 3,
      max: 255,
    },
    email: {
      type: String,
      required: true,
      max: 255,
      min: 6,
    },
    password: {
      type: String,
      required: true,
      max: 1024,
      min: 8,
    },
    otp: {
      type: String,
      required: false,
    },
    date: {
      type: Date,
      default: Date.now,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    isOrganizer: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: "Your title",
    },
    bio: {
      type: String,
      default: "Your bio",
    },
    location: {
      type: String,
      default: "Your location",
    },
    image: {
      type: String,
      default: "https://via.placeholder.com/150",
    },
    events: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Event",
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
