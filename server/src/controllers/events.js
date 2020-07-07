import Event from '../models/Event'
import { getEvents } from '../controllers/events'

export const getEvents = async (req, res) => {
  res.json({ message: 'Events' })
}
