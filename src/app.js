import express from 'express';
import handlebars from 'express-handlebars';
import viewsRouter from './routes/views.router.js';
import productsRouter from './routes/products.router.js';
import cartsRouter from './routes/carts.router.js';
import socketsRouter from './routes/realTimeProducts.router.js';
import sessionsRouter from './routes/sessions.router.js'
import { Server } from 'socket.io';
import __dirname from './utils.js';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
//config
import './dao/dbManagers/dbConfig.js'

const app = express();

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

// se migra a dbconfig
// try {
//   await mongoose.connect('mongodb+srv://leobruno:zZaKaHGRgn4w6oza@coderhouse.3hsb4ss.mongodb.net/?retryWrites=true&w=majority')
//   console.log("DB connected");
// } catch (error) {
//   console.log(error);
// }

const server = app.listen(8080, () => console.log('Listening on port 8080'));

const io = new Server(server);

app.set('socketio', io);