const express = require("express");
const ConnectDB = require("./config/db");
const users = require("./routes/users");
const issues = require("./routes/issues");

const app = express();

ConnectDB();

app.use(express.json({ extended: false }));

app.use("/api/users", users);
app.use("/api/issues", issues);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
