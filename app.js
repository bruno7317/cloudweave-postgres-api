const express = require("express")
const app = express()
const cors = require("cors")

app.use(cors({origin: "*"}))

const port = 7100

app.get("/", (req, res) => {
    res.send("Postgres API works!")
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
    console.log(`GitOps works!`)
})
