import { Router } from 'express';

import ProductsManager from '../../manager/Manager.js';

const router = Router();

const manager = new ProductsManager('./files/socketsProducts.json');

router.get('/', async (req, res) => {
  res.render('realTimeProducts', { products: await manager.getProducts() });
  const io = req.app.get('socketio');
  io.emit('showProducts', await manager.getProducts());
});

router.post('/:product', async (req, res) => {
  try {
    const newProduct = req.body;
    await manager.addProduct(newProduct);
    const io = req.app.get('socketio');
    io.emit('showProducts', await manager.getProducts());

    res.send({
      status: 'success',
    });
  } catch (err) {
    res.status(404).send(err.msg);
  }
});

router.delete('/:pid', async (req, res) => {
  const id = req.params.pid;
  await manager.deleteById(id);

  const io = req.app.get('socketio');
  io.emit('showProducts', await manager.getProducts());

  res.send({
    status: 'success',
    delete: id,
  });
});

export default router;
