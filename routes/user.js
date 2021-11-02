
import express from 'express'

const router = express.Router()

import { signin } from '../controllers/auth'

router.post('/signin', signin)

export default router