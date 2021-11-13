const express = require('express');
const router = express.Router();

const viewRoute = require('./view')
const apiRoute = require('./api')

router.use("/", viewRoute);
router.use("/api",apiRoute);

router.use((req,res) => {
    res.status(404).render('404page')
})


module.exports = router