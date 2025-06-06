const { Router } = require("express")
const { getCountries, getCountryResources } = require("../controllers/country")

const router = Router()

router.get("/", getCountries)

router.get("/:id/resources", getCountryResources)

module.exports = router