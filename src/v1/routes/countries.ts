import { Router } from "express";
import { checkJwt } from "../../middlewares/session";

import { createCountry, getCountries, getCountryDeptos } from "../../modules/countries/country.controller";


const router = Router()

router.get('/',getCountries)
router.get('/:id/departments',getCountryDeptos)
router.post('/',createCountry)

export {
    router
}