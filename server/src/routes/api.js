import express from 'express'

import { getEvents, getEvent } from '../controllers/events'

var router = express.Router()

/* GET all events */
router.get('/events', getEvents)

/* GET one event by iq */
router.get('/events/:id', getEvent)

/* POST create new event*/
//TODO on the body form, receive it as as array of element[]
router.post('/events')

/*PUT update an event*/
router.put('/events/:id')
/*DELETE delete an event*/
router.delete('/events')

export default router
