import { Schema, model } from 'mongoose';

const eventSchema = new Schema({
  convenorsShortName: String,
  convenorsCompleteName: String,
  country: String,
  countryCode: String,
  coverUrl: String,
  description: String,
  startDate: Date,
  endDate: Date,
  infoLink: String,
  name: String,
  shortName: String,
  reunionSpot: { type: String, default: '-' },
  tags: [{ key: String, text: String }],
  linkCollection: [{ label: String, link: String }],
  coverStyle: Object,
});

const EventModel = model('Event', eventSchema);

export default EventModel;
