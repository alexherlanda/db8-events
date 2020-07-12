import express from 'express'
<<<<<<< HEAD
import { getEvents } from '../controllers/events'
=======
import { readAllEvents, readOneEvent, createEvent, updateEvent, deleteEvent } from '../controllers/events.controller'

const router = express.Router()
>>>>>>> 1eeea0f2b8226af7751774c0b4c0aca18556bf0d

/* /events END POINT */
router.route('/events')
  .get(readAllEvents)
  .post(createEvent)

router.route('/events/:id')
  .get(readOneEvent)
  .put(updateEvent)
  .delete(deleteEvent)


export default router
