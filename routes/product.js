
import express from 'express'

const router = express.Router()

import { createProduct, updateProduct, deleteProduct,getAllProducts, getProduct } from '../controllers/product.js'
import verifyTokenAndAdmin from '../middleware/verifyTokenAndAdmin.js'

router.post('/', verifyTokenAndAdmin, createProduct)
router.put('/:id', verifyTokenAndAdmin, updateProduct)
router.delete('/:id', verifyTokenAndAdmin, deleteProduct)
router.get('/', getAllProducts)
router.get('/find/:id', getProduct)

export default router