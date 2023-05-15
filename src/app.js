import express from 'express';
import handlebars from 'express-handlebars';
import viewsRouter from './routes/views.router.js';
import productsRouter from './routes/products.router.js';
import cartsRouter from './routes/carts.router.js';
import socketsRouter from './routes/realTimeProducts.router.js';
import { Server } from 'socket.io';
import __dirname from './utils.js';
import mongoose from 'mongoose';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(`${__dirname}/public`));

app.engine('handlebars', handlebars.engine());
app.set('views', `${__dirname}/views`);
app.set('view engine', 'handlebars');

app.use('/', viewsRouter);
app.use('/api/products', productsRouter);
app.use('/api/carts', cartsRouter);
app.use('/realtimeproducts', socketsRouter);

try {
  await mongoose.connect('mongodb+srv://leobruno:zZaKaHGRgn4w6oza@coderhouse.3hsb4ss.mongodb.net/?retryWrites=true&w=majority')
  console.log("DB connected");
} catch (error) {
  console.log(error);
}

const server = app.listen(8080, () => console.log('Listening on port 8080'));

const io = new Server(server);

app.set('socketio', io);