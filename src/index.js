const express = require("express");
const { PORT } = require("./config/ServerConfig");
const bodyParser = require("body-parser");
const ApiRoutes = require("./routes/index");

const db = require("./models/index");

const setupAndStartServer = async () => {
  // Create an Express app
  const app = express();

  // Middleware to parse JSON bodies
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use("/api", ApiRoutes);

  app.listen(PORT, () => {
    console.log(`Server is Started at ${PORT}`);
    if (process.env.SYNC_DB) {
      db.sequelize.sync({ alter: true });
    }
  });
};

setupAndStartServer();
