const express = require('express')
const logger = require("morgan")
const controllers = require("./controllers")
const mongoose = require("mongoose")
const { urlencoded } = require('body-parser')

const PORT = 3000 || process.env.PORT


const app = express();

app.use(logger('dev'))

app.use(express.json())
app.use(urlencoded({extended:true}))

app.use(express.static("public"))

mongoose.connect("mongodb://localhost/workout", {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
});

app.use(controllers)



app.listen(PORT, () => {
    console.log(`Listening at http://localhost:${PORT}`);
})