const express = require('express');
const app = express();
const config = require('dotenv').config({ path: ".env" })

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`server started on port:${PORT}`)
}
)
