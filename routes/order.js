
import express from 'express'

const router = express.Router()

import { createOrder, updateOrder, deleteOrder, getUserOrder, getAll, monthlyIncome } from '../controllers/order.js'
import verifyTokenAndAdmin from '../middleware/verifyTokenAndAdmin.js'
import verifyTokenAndAuthorization from '../middleware/verifyTokenAndAuthorization.js'
import verifyToken from '../middleware/verifyToken.js'

router.post("/", verifyToken, createOrder)
router.put("/:id", verifyTokenAndAdmin, updateOrder)
router.delete("/:id", verifyTokenAndAdmin, deleteOrder)
router.get("/find/userId", verifyTokenAndAuthorization, getUserOrder)
router.get('/', verifyTokenAndAdmin, getAll)
router.get("/income", verifyTokenAndAdmin, monthlyIncome)

export default router