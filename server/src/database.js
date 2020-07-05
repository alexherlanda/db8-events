import mongoose from 'mongoose'
import { credentials } from './config/config'

export const connectDB = () => {
  mongoose.connect(credentials().database.uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
  })

  const db = mongoose.connection

  db.on('error', console.error.bind(console, 'connection error:'))

  db.once('open', function () {
    console.log('DB is connected')
  })
}
