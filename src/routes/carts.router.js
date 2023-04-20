import { Router } from 'express';
import CartsManager from '../../manager/Manager.js';

const router = Router();

const manager = new CartsManager('./files/carts.json');

router.get('/', async (req, res) => {
  try {
    const carts = await manager.getProducts();
    const isEmpty = false;
    res.render('carts', { carts, isEmpty });
  } catch (err) {
    res.status(404).send(err);
  }
});

router.put('/:product', (req, res) => {
  try {
    const newProduct = req.body;
    res.send(manager.addProduct(newProduct));
  } catch (err) {
    res.status(404).send(err.msg);
  }
});

export default router;
