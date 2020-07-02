import express from 'express'

import { getIndex } from '../controllers/index'

import { getEvents, getOneEvent } from '../controllers/events'

var router = express.Router()

router.get('/', getIndex)

/* GET all events */
router.get('/events', getEvents)

/* GET one events */
router.get('/events/:id', getOneEvent)

export default router
