const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const compression = require("compression");
const helmet = require("helmet");
const morgan = require("morgan");
const routes = require("./routes/router");
require("dotenv").config();

const { PORT, MONGO_PATH, MONGO_USER, MONGO_PASSWORD } = process.env;

const app = express();

const uri = `mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}${MONGO_PATH}`;
const clientOptions = {
  serverApi: {
    version: "1",
    strict: true,
    deprecationErrors: true,
    useNEWUrlParser: true,
    useUnifiedTopology: true,
  },
};
mongoose
  .connect(uri, clientOptions)
  .then(() => app.listen(PORT))
  .catch((err: any) => console.log(err));

app.use(morgan("dev"));
app.use(compression());
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/blog", routes);
