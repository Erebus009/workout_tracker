const express = require("express");
const logger = require("morgan");

const mongoose = require("mongoose");
const { urlencoded } = require("body-parser");

const PORT = process.env.PORT|| 3000 ;
const controllers = require("./controllers");
const app = express();

app.use(logger("dev"));

app.use(urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

app.use(controllers);

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});
