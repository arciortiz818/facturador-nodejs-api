import { Router } from "express";
import { checkJwt } from "../../middlewares/session";

import { createDepartment, getDepartments, getDepartmentsByCountry } from "../../modules/departments/department.controller";


const router = Router()

router.get('/',getDepartments)
router.get('/country/:id',getDepartmentsByCountry)
router.post('/',createDepartment)

export {
    router
}
