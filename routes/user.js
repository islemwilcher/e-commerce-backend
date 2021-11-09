
import express from 'express'

const router = express.Router()

import { getAllUsers, updated, deleted, getUser, getUserStatistic } from '../controllers/user.js'
import verifyTokenAndAdmin from '../middleware/verifyTokenAndAdmin.js'
import verifyTokenAndAuthorization from '../middleware/verifyTokenAndAuthorization.js'

router.get('/', verifyTokenAndAdmin, getAllUsers)
router.put('/:id', verifyTokenAndAuthorization, updated)
router.delete('/:id', verifyTokenAndAuthorization, deleted)
router.get('/user/:id', verifyTokenAndAdmin, getUser)
router.get('/statistic', verifyTokenAndAdmin, getUserStatistic)

export default router