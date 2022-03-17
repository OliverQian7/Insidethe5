const express = require("express")
const app = new express()

app.use(express.static("/client/build"))
app.use(express.json())
/** 
* 1. handle GET on /score route
* @return randomly generated score 0-100
*/

//2 user posts a score

app.get("/score", (req,res) => {
    const score = Math.floor(Math.random() * 101)
    res.json({score})
})

app.post("/addScore", (req,res) => {
    const{newScore} = req.body
    console.log(newScore)
})

app.listen(8080, () => {
    console.log("server started")
})