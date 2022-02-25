const express = require('express')
const app = new express()

app.use(express.json())

app.listen(8080, () => {
    console.log("h")
})