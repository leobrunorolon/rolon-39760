import { Router } from 'express';
import CartsManager from '../../manager/Manager.js';
import { cartsModel } from '../models/carts.model.js';

const router = Router();

const manager = new CartsManager('./files/carts.json');

router.get('/', async (req, res) => {
  // FS
  // try {
  //   const carts = await manager.getProducts();
  //   const isEmpty = false;
  //   res.render('carts', { carts, isEmpty });
  // } catch (err) {
  //   res.status(404).send(err);
  // }
});

router.put('/:product', (req, res) => {
  // FS
  // try {
  //   const newProduct = req.body;
  //   res.send(manager.addProduct(newProduct));
  // } catch (err) {
  //   res.status(404).send(err.msg);
  // }
});

export default router;
