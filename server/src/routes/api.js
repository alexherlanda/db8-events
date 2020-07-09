import express from 'express'
import { readAllEvents, readOneEvent, createEvent, updateEvent, deleteEvent } from '../controllers/events.controller'

const router = express.Router()

/* /events END POINT */
router.route('/events')
  .get(readAllEvents)
  .post(createEvent)

router.route('/events/:id')
  .get(readOneEvent)
  .put(updateEvent)
  .delete(deleteEvent)

export default router
