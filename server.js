const express = require("express");
const ConnectDB = require("./config/db");
const users = require("./routes/users");
const issues = require("./routes/issues");
const auth = require("./routes/Auth");

const app = express();

ConnectDB();

app.use(express.json({ extended: false }));

app.use("/api/users", users);
app.use("/api/auth", auth);
app.use("/api/issues", issues);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
