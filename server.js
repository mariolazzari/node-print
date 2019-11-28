const dotenv = require("dotenv");
const express = require("express");

// read enviroment vars
dotenv.config();
const { EXPRESS_PORT } = process.env;

// express configurations
const app = express();
app.use(express.json());
app.use(require("./routes/"));

// start express
app.listen(EXPRESS_PORT, () =>
  console.log(`Express started on http://localhost:${EXPRESS_PORT}`)
);
