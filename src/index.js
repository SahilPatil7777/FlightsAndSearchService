const express = require("express");
const { PORT } = require("./config/ServerConfig");
const bodyParser = require("body-parser");

const setupAndStartServer = async () => {
  const app = express();

  // Middleware to parse JSON bodies
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true })); 

  app.listen(PORT, () => {
    console.log(`Server is Started at ${PORT}`);
  });
};

setupAndStartServer();
