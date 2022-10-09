import { Router } from 'express'

import { registerCtrl, loginCtrl } from "../../modules/auth/auth.controller";

const router = Router()

router.post('/register', registerCtrl)
router.post('/login', loginCtrl)

export {
    router
}