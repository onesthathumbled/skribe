const express = require("express");
const path = require("path");
const envPath = path.resolve(__dirname, "../.env");
require("dotenv").config({ path: envPath });
const PORT = process.env.PORT;
const app = express();

app.listen(PORT, console.log(`Server is running on ${PORT}.`));
