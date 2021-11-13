const express = require("express");
const router = express.Router();

const viewRoute = require("./view.js");
const apiRoute = require("./api.js");

router.use("/", viewRoute);
router.use("/api", apiRoute);

module.exports = router;
