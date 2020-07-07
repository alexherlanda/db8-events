import express from 'express'
import { getEvents } from '../controllers/events'

var router = express.Router()

/* GET all events */
router.get('/events', getEvents)


export default router
