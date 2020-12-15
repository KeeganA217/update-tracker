const mongoose = require("mongoose");
const { stringify } = require("uuid");

const IssueSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  attention: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    requried: true,
  },
  due: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("issue", IssueSchema);
