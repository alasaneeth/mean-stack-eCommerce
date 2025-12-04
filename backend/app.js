const express = require('express')

const app = express()

app.listen(8000, ()=> {
    console.log("Server listning to port 8000 in production")
})