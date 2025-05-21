const express = require("express")
const countryRoute = require("./routes/country")
const cors = require("cors")

const app = express()

app.use(cors({origin: "*"}))

app.use("/country", countryRoute)

const port = 7100

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})
