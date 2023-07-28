import express from 'express';
import handlebars from 'express-handlebars';
import viewsRouter from './routes/views.router.js';
import productsRouter from './routes/products.router.js';
import cartsRouter from './routes/carts.router.js';
import socketsRouter from './routes/realTimeProducts.router.js';
import sessionsRouter from './routes/sessions.router.js'
import { Server } from 'socket.io';
import __dirname from './utils/utils.js';
import cookieParser from 'cookie-parser';
//config
import './dao/dbManagers/dbConfig.js'
// dotenv
import dotenv from 'dotenv'
//TWILIO
import twilio from 'twilio'
import { addLogger } from './utils/logger.js';

dotenv.config()

const app = express();
app.use(addLogger)

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(`${__dirname}/public`));

app.engine('handlebars', handlebars.engine());
app.set('views', `${__dirname}/views`);
app.set('view engine', 'handlebars');
// router
app.use('/', viewsRouter);
app.use('/api/products', productsRouter);
app.use('/api/carts', cartsRouter);
app.use('/realtimeproducts', socketsRouter);
app.use('/api/sessions', sessionsRouter);
// cookie parser
app.use(cookieParser())
app.get('/set-cookies', (req, res) => {
  res.cookie('CoderCookie', 'Esta es una cookie seteada', { maxAge: 30000 }).send('Cookie seteada')
})
app.get('cookies', (req, res) => {
  res.send(req.cookies)
})
app.get('/delete-cookies', (req, res) => {
  res.clearCookie('CoderCookie').send('Cookie removida')
})

//TWILIO
const client = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN,
  process.env.TWILIO_PHONE_NUMBER
)
app.post('/sms', async (req, res) => {
  const { name, product } = req.body;

  await client.messages.create({
    from: process.env.TWILIO_PHONE_NUMBER,
    to: process.env.TWILIO_NUM_VERIFICATION,
    body: `Hola ${name} gracias por tu compra. Tu producto es ${product}`
  })
  res.send('SMS sent ok')
})

app.post('/whatsapp', async (req, res) => {
  const { name, product } = req.body;

  await client.messages.create({
    body: `Hola ${name} gracias por tu compra. Tu producto es ${product}`,
    from: `whatsapp:${process.env.TWILIO_WHATSAPP_NUMBER}`,
    to: `whatsapp:${process.env.TWILIO_NUM_VERIFICATION_WHATSAPP}`,
    mediaUrl: 'https://cdn.uc.assets.prezly.com/971f25d5-4704-4b75-9fb1-2ce35c6b498f/-/quality/best/-/format/auto/'
  });

  res.send('Whatsapp sent')
})

const server = app.listen(8080, () => console.log('Listening on port 8080'));

const io = new Server(server);

app.set('socketio', io);