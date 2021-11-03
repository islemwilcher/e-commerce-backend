
import express from 'express'

const router = express.Router()

import { getAllUsers, updated, deleted, getUser, getUserStatistic } from '../controllers/user.js'

router.get('/', getAllUsers)
router.put('/:id', updated)
router.delete('/:id', deleted)
router.get('/user/:id', getUser)
router.get('/statistic', getUserStatistic)

export default router