
import express from 'express'

const router = express.Router()

import { createProduct, updateProduct, deleteProduct,getAllProducts, getProduct } from '../controllers/user.js'
import verifyTokenAndAdmin from '../middleware/verifyTokenAndAdmin.js'
import verifyTokenAndAuthorization from '../middleware/verifyTokenAndAuthorization.js'

router.post('/', verifyTokenAndAdmin, createProduct)
router.put('/:id', verifyTokenAndAdmin, updateProduct)
router.delete('/:id', verifyTokenAndAdmin, deleteProduct)
router.get('/', getAllProducts)
router.get('/find/:id', getProduct)

export default router