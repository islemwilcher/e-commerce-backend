
import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'

const app = express()

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))

app.use(cors())

const PORT = process.env.PORT|| 5000

app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`))