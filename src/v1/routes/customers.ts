import { Router } from "express";
import { checkJwt } from "../../middlewares/session";

import { createCustomer, getCustomers, getCustomerById, updateCustomerById, deleteCustomerById } from '../../modules/customers/customer.controller'


const router = Router()


router.get('/',getCustomers)
router.get('/:id',getCustomerById)
router.post('/',createCustomer)
router.put('/:id',updateCustomerById)
router.delete('/:id',deleteCustomerById)

export {
    router
}