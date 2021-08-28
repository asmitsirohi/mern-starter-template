require("dotenv").config();
const express = require("express");
require("./src/db/conn");

const app = express();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => `Server is running on port ${PORT}`);
