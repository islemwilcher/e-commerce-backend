
import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'

//routers
import AuthRouter from './routes/auth.js'
import UserRouter from './routes/user.js'
import ProductRouter from './routes/product.js'
import OrderRouter from './routes/order.js'
import CartRouter from './routes/cart.js'
import StripeRouter from './routes/stripe.js'

//configuration
const app = express()
dotenv.config()

//for the json
app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))

//for the cors polciy
app.use(cors())

//using the router
app.use('/auth', AuthRouter)
app.use('/users', UserRouter)
app.use('/products', ProductRouter)
app.use('/orders', OrderRouter)
app.use('/carts', CartRouter)
app.use('/checkout', StripeRouter)

//using the port
const PORT = process.env.PORT || 5000

//connecting to mongodb and listening to the server
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
    .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
    .catch((error) => console.log(`${error}: did not connect`));


