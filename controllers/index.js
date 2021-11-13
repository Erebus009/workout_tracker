const express = require("express");
const router = express.Router();

const viewRoute = require("./view");
const apiRoute = require("./api");

router.use("/", viewRoute);
router.use("/api", apiRoute);

module.exports = router;
