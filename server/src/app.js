import express from 'express'
import path from 'path'
import cookieParser from 'cookie-parser'
import logger from 'morgan'
import apiRouter from './routes/api'
import userRouter from './routes/authentication'
import { connectDB } from './database'
import passport from 'passport'
import LocalStrategy from 'passport-local'
import UserModel from "./models/User"


const app = express()

// DB Connection
connectDB()

// Middlewares
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

//Passport Setup
app.use(passport.initialize())
app.use(passport.session())
passport.use(new LocalStrategy(UserModel.authenticate()))
passport.serializeUser(UserModel.serializeUser())
passport.deserializeUser(UserModel.deserializeUser())


// Static files
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../../client/build')))
}
// Api Router
app.use('/api', apiRouter)
app.use('/',userRouter)

// Production Mode
if (process.env.NODE_ENV === 'production') {
  app.get('/*', (req, res) => { res.sendFile(path.join(__dirname, '../../client/build/index.html')) })
}

export default app
