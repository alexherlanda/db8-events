import express from 'express'


var router = express.Router()

/* GET all events */
router.get('/events', getEvents)


export default router
