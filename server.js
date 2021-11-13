const express = require('express')
const app = express();
const PORT = 3000 || process.env.port 








app.listen(PORT, () => {
    console.log(`Listening at http://localhost:${PORT}`);
})