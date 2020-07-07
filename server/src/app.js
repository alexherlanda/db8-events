import express from 'express'
import path from 'path'
import cookieParser from 'cookie-parser'
import logger from 'morgan'
import apiRouter from './routes/api'
import { connectDB } from './database'
import passport from 'passport'
import LocalStrategy from 'passport-local'
import User from "./models/User"


const app = express()

// DB Connection
connectDB()

// Middlewares
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

//Passport Setup
app.use(require("express-session")({
  secret: "db8community",
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize())
app.use(passport.session())
passport.use(new LocalStrategy(User.authenticate()))
passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())


// Static files
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../../client/build')))
}
// Api Router
app.use('/api', apiRouter)

// Production Mode
if (process.env.NODE_ENV === 'production') {
  app.get('/*', (req, res) => { res.sendFile(path.join(__dirname, '../../client/build/index.html')) })
}

export default app
