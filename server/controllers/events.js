import EventModel from '../models/Event'

export const getEvents = async (req, res) => {
  const events = await EventModel.find()
  res.json(events)
}
