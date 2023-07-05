import dotenv from 'dorenv'

dotenv.config()

export default {
  persistence: process.env.PERSISTENCE,
  mongoUrl: process.env.MONGO_URL
}