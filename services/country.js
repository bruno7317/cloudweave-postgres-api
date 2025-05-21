const db = require("../prisma/db")

async function getAllCountries() {
    try {
        const countries = await db.country.findMany()
        return countries
    } catch (error) {
        throw new Error(`Failed to fetch countries: ${error.message}`)
    }
}

module.exports = {
    getAllCountries
}