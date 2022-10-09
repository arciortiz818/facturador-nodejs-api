import { Router } from "express";
import { checkJwt } from "../../middlewares/session";

import { getCities, createCity, getCitiesByDepartment } from '../../modules/cities/city.controller'


const router = Router()

router.get('/',getCities)
router.get('/city/:id',getCitiesByDepartment)
router.post('/',createCity)

export {
    router
}