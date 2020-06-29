import MongoClient from 'mongodb'
import { credentials } from './config/config'

export async function connect () {
  try {
    const client = await MongoClient.connect(credentials().database.uri, { useNewUrlParser: true, useUnifiedTopology: true })
    const db = client.db(credentials().database.db)
    return db
  } catch (e) {
    console.log(e)
  }
};
