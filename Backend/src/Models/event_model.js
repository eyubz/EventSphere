const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      min: 3,
      max: 255,
    },
    description: {
      type: String,
      min: 3,
      max: 255,
    },
    date: {
      type: Date,
    },
    time: {
      type: String,
    },
    location: {
      type: String,
    },
    rsvpCont: {
      type: Number,
    },
    organizer: {
      type: String,
    },
    image: {
      type: String,
      default: "https://via.placeholder.com/150",
    },
    maxAttendees: {
      type: Number,
    },
    ticketPrice: {
      type: Number,
    },
    type: {
      type: String,
    },
    attendees: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        default: [],
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Event", eventSchema);
