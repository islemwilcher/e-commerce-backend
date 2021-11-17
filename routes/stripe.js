
import express from "express"
const stripe = require('stripe')(process.env.STRIPE_KEY)

import { payment } from "../controllers/stripe"

const router = express.Router()

router.post('/', payment)

export default router