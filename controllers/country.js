const { getAllCountries } = require("../services/country")

async function getCountries(req, res) {
    try {
        const countries = await getAllCountries()
        console.log(`Controller log: ${countries}`)
        res.send(countries)
    } catch (error) {
        res.status(500).send(error.message)
    }
}

module.exports = {
    getCountries
}