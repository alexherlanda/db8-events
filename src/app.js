import dotenv from 'dotenv'
import express from 'express'
import cookieParser from 'cookie-parser'
import logger from 'morgan'
import apiRouter from './routes/api'
import userRouter from './routes/authentication'
import { connectDB } from './database'
import passport from 'passport'
import LocalStrategy from 'passport-local'
import UserModel from './models/User'

const app = express()
dotenv.config()

// DB Connection
connectDB()

// Middlewares
app.use(logger('dev'))
app.use(express.json({limit: '50mb', extended: true}))
app.use(express.urlencoded({limit: '50mb', extended: false, parameterLimit: 50000 }))
app.use(cookieParser())

// Passport Setup
app.use(passport.initialize())
app.use(passport.session())
passport.use(new LocalStrategy(UserModel.authenticate()))
passport.serializeUser(UserModel.serializeUser())
passport.deserializeUser(UserModel.deserializeUser())

// Api Router
app.use('/api', apiRouter)
app.use('/', userRouter)

export default app
