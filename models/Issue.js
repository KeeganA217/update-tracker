const mongoose = require("mongoose");

const IssueSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  action: {
    type: String,
    default: "Action Needed",
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("issue", IssueSchema);
