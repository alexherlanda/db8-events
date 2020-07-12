import EventModel from '../models/Event'
<<<<<<< HEAD
import FilterHandler from '../handlers/FilterHandler'
import SearchHandler from '../handlers/SearchHandler'

export const readAllEvents = async (req, res) => {
  try {
    // Get all events
    const allEvents = await EventModel.find()

    // Filter events
    const { events, queries } = new FilterHandler(req.query, allEvents)

    // Return only search results
    const results = new SearchHandler(req.query.search, events)

    // Response to client
    res.json({ queries, results })
  } catch (e) {
    // Handling errors
=======

export const readAllEvents = async (req, res) => {
  try {
    const events = await EventModel.find()
    res.json(events)
  } catch (e) {
>>>>>>> master
    console.error(e)
    res.status(500).json({
      error: e
    })
  }
}

export const readOneEvent = async (req, res) => {
  const { id } = req.params
  try {
    const event = await EventModel.findById(id)
    res.json(event)
  } catch (e) {
    console.error(e)
    res.status(500).json({
      error: e
    })
  }
}

export const createEvent = async (req, res) => {
  const { body } = req
  const newEvent = new EventModel(body)

  try {
    await newEvent.save()
    res.json(newEvent)
  } catch (e) {
    res.json({
      error: e,
      body: body
    })
  }
}

export const updateEvent = async (req, res) => {
  const { body } = req
  const { id } = req.params

  try {
    const event = await EventModel.findByIdAndUpdate(id, body, { new: true })
    res.json(event)
  } catch (e) {
    res.json({
      error: e,
      body: body
    })
  }
}

export const deleteEvent = async (req, res) => {
  const { id } = req.params

  try {
    const event = await EventModel.findByIdAndDelete(id)
    res.json(event)
  } catch (e) {
    res.json({
      error: e
    })
  }
}
