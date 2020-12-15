const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const { check, validationResult } = require("express-validator");
const Issue = require("../models/Issue");

// @route      GET api/issues
// @desc       Get all issues
// @access     Private
router.get("/", auth, async (req, res) => {
  try {
    const issues = await Issue.find().sort({
      date: -1,
    });
    res.json(issues);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// @route      POST api/issues
// @desc       Add new issue
// @access     Private
router.post(
  "/",
  auth,
  [
    check("title", "Name is required").not().isEmpty(),
    check("description", "Please enter a description").not().isEmpty(),
    check("attention", "Please select the attention needed").not().isEmpty(),
    check("due", "Please select the due date...").not().isEmpty(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { title, description, attention, author, due } = req.body;

    try {
      const newIssue = new Issue({
        title,
        description,
        attention,
        author,
        due,
      });

      const issue = await newIssue.save();
      res.json(issue);
    } catch (err) {
      console.error(err.message);
      res.status(500).json({ msg: "Server Error" });
    }
  }
);
// @route      PUT api/issues/:id
// @desc       Update issues
// @access     Private
router.put("/:id", auth, async (req, res) => {
  const { title, description, attention, due } = req.body;

  const issueFields = {};

  if (title) issueFields.title = title;
  if (description) issueFields.description = description;
  if (attention) issueFields.attention = attention;
  if (due) issueFields.due = due;

  try {
    let issue = await Issue.findById(req.params.id);
    if (!issue) return res.status(404).json({ msg: "Issue not found..." });

    issue = await Issue.findByIdAndUpdate(
      req.params.id,
      { $set: issueFields },
      { new: true }
    );
    res.json(issue);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: "Server Error" });
  }
});

// @route      DELETE api/issues/:id
// @desc       Delete an issue
// @access     Public
router.delete("/:id", auth, async (req, res) => {
  try {
    let issue = await Issue.findById(req.params.id);
    if (!issue) return res.status(404).json({ msg: "Issue not found..." });
    await Issue.findByIdAndRemove(req.params.id);
    res.json({ msg: "Issue Removed" });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: "Server Error" });
  }
});

module.exports = router;
