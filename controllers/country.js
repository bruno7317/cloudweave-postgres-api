const { getAllCountries, getResources } = require("../services/country")

async function getCountries(req, res) {
    try {
        const countries = await getAllCountries()
        res.send(countries)
    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function getCountryResources(req, res) {
    try {
        const country_id = parseInt(req.params.id)
        if (isNaN(country_id)) {
            return res.status(400).send(`Country ID ${country_id} is not a number.`)
        }
        
        const resources = await getResources(country_id)
        res.send(resources)
    } catch (error) {
        res.status(500).send(error.message)
    }
}

module.exports = {
    getCountries, getCountryResources
}