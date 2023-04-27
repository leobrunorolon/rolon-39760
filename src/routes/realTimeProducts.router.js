import { Router } from 'express';

import ProductsManager from '../../manager/Manager.js';

const router = Router();

const manager = new ProductsManager('./files/socketsProducts.json');

router.get('/', async (req, res) => {
  const io = req.app.get('socketio');
  io.emit('realTimeProducts', await manager.getProducts());
  res.render('realTimeProducts', await manager.getProducts());
});

router.post('/', async (req, res) => {
  try {
    const newProduct = req.body;
    await manager.addProduct(newProduct);
    const io = req.app.get('socketio');
    io.emit('realTimeProducts', await manager.getProducts());

    res.send({
      status: 200,
      product: newProduct,
    });
  } catch (err) {
    res.status(404).send(err.msg);
  }
});

router.delete('/:pid', async (req, res) => {
  try {
    const id = req.params.pid;
    await manager.deleteById(id);

    const io = req.app.get('socketio');
    io.emit('realTimeProducts', await manager.getProducts());

    res.send({
      status: 200,
      delete: id,
    });
  } catch (err) {
    res.status(404).send(err.msg);
  }
});

export default router;
