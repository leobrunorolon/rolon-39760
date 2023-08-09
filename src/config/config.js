import dotenv from 'dotenv'

dotenv.config()

export default {
  persistence: process.env.PERSISTENCE,
  mongoUrl: process.env.MONGO_URL,
  userNodemailer: process.env.USER_NODEMAILER,
  passNodemailer: process.env.PASS_NODEMAILER
}