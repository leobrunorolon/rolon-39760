import { Router } from 'express';
// fs and models
// import CartsManager from '../../manager/Manager.js';
// import { cartsModel } from '../models/carts.model.js';
import { getCarts, saveCart } from '../controllers/carts.controller.js'

const router = Router();
// principio de responsabilidad unica
router.get('/', getCarts)
router.post('/', saveCart)

// fs
// const manager = new CartsManager('./files/carts.json');


// capas
// router.get('/', async (req, res) => {
//   // FS
//   // try {
//   //   const carts = await manager.getProducts();
//   //   const isEmpty = false;
//   //   res.render('carts', { carts, isEmpty });
//   // } catch (err) {
//   //   res.status(404).send(err);
//   // }
//   try {
//     const carts = await cartsModel.find()
//     const isEmpty = carts.lenght === 0;
//     res.send({ result: 'succes', payload: carts })
//     res.render('carts', { carts, isEmpty });
//   } catch (err) {
//     res.status(500).send(err);
//   }
// });

// capas
// router.post('/', async (req, res) => {
//   // FS
//   // try {
//   //   const newProduct = req.body;
//   //   res.send(manager.addProduct(newProduct));
//   // } catch (err) {
//   //   res.status(404).send(err.msg);
//   // }
//   try {
//     const newCarts = req.body;
//     const result = await cartsModel.create(newCarts)
//     res.send({ result: 'succes', payload: result });
//   } catch (err) {
//     res.status(500).send(err.msg);
//   }
// });

export default router;
