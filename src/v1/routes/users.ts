import { Router } from "express";
import { checkJwt } from "../../middlewares/session";

import { getUser, getUsers } from "../../modules/user/user.controller";

const router = Router()

router.get('/',getUsers)
router.get('/:id',getUser)
// router.delete('/:id',deleteProductById)

export {
    router
}