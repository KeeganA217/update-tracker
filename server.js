const express = require("express");
const ConnectDB = require("./config/db");

const app = express();

ConnectDB();

app.use(express.json({ extended: false }));

app.use("/api/users", require("./routes/users"));
app.use("/api.issues", require("./routes/issues"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
