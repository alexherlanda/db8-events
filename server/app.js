import express from 'express'
import path from 'path'
import cookieParser from 'cookie-parser'
import logger from 'morgan'
import apiRouter from './routes/api'
import { connectDB } from './database'

const app = express()

// DB Connection
connectDB()

// Middlewares
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

// Static files
app.use(express.static(path.join(__dirname, '../client/build')))

// Api Router
app.use('/api', apiRouter)

// Production Mode
if (process.env.NODE_ENV === 'production') {
  app.get('/*', (req, res) => { res.sendFile(path.join(__dirname, '../client/build/index.html')) })
}

export default app
