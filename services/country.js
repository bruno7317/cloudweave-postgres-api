const db = require("../prisma/db")

async function getAllCountries() {
    try {
        const countries = await db.country.findMany()
        return countries
    } catch (error) {
        throw new Error(`Failed to fetch countries: ${error.message}`)
    }
}

async function getResources(country_id) {
    try {
        const resources = await db.countryResource.findMany({
            where: { country_id }
        })
        return resources
    } catch (error) {
        throw new Error(`Failed to fetch resources for country ID ${id}: ${error.message}`)
    }
}

module.exports = {
    getAllCountries, getResources
}