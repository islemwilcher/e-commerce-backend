
import express from 'express'

const router = express.Router()

import { createCart, updateCart, deleteCart, getUserCart, getAll } from '../controllers/cart.js'
import verifyTokenAndAdmin from '../middleware/verifyTokenAndAdmin.js'
import verifyTokenAndAuthorization from '../middleware/verifyTokenAndAuthorization.js'
import verifyToken from '../middleware/verifyToken.js'

router.post('/', verifyToken, createCart)
router.put('/:id', verifyTokenAndAuthorization, updateCart)
router.delete('/:id', verifyTokenAndAuthorization, deleteCart)
router.get('/find/:userId', verifyTokenAndAuthorization, getUserCart)
router.get('/', verifyTokenAndAdmin, getAll)

export default router