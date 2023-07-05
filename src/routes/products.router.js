import { Router } from 'express';
// import ProductsManager from '../../manager/Manager.js';
// import { productsModel } from '../models/products.model.js';
import { getProducts, saveProduct, findProduct, updateProduct, deleteProduct } from '../controllers/products.controller.js';

const router = Router();

router.get('/', getProducts)
router.post('/', saveProduct)
router.get('/:pid', findProduct)
router.put('/:pid', updateProduct)
router.delete('/:pid', deleteProduct)

// fs
// const manager = new ProductsManager('./files/products.json');

// capas
// router.get('/', async (req, res) => {
//   // FS
//   // try {
//   //   const products = await manager.getProducts();
//   //   const isEmpty = products.lenght === 0;
//   //   res.render('products', { products, isEmpty });
//   // } catch (err) {
//   //   res.status(404).send(err);
//   // }
//   try {
//     const products = await productsModel.find()
//     const isEmpty = products.lenght === 0;
//     // paginate
//     const result = await productsModel.paginate({}, { limit: 2, page: 1 })
//     res.send({ result: 'succes', payload: products })
//     res.render('products', { result, isEmpty });
//   } catch (err) {
//     res.status(500).send(err);
//   }
// });

// router.get('/:pid', async (req, res) => {
//   // FS
//   // try {
//   //   const id = req.params.pid;
//   //   const product = await manager.findById(id);
//   //   res.render('products', product);
//   // } catch (err) {
//   //   res.status(404).send(err);
//   // }

//   try {
//     const { pid } = req.params;
//     const product = await productsModel.find({ _id: pid });
//     res.send({ result: 'succes', payload: product })
//     res.render('products', product);
//   } catch (err) {
//     res.status(404).send(err);
//   }
// });

// router.post('/', async (req, res) => {
//   // FS
//   // try {
//   //   const newProduct = req.body;
//   //   res.send(manager.addProduct(newProduct));
//   // } catch (err) {
//   //   res.status(404).send(err.msg);
//   // }
//   try {
//     const newProduct = req.body;
//     const result = await productsModel.create(newProduct)
//     res.send({ result: 'succes', payload: result });
//   } catch (err) {
//     res.status(500).send(err.msg);
//   }
// });

// router.put('/:pid', async (req, res) => {
//   // FS
//   // try {
//   //   const id = req.params.pid;
//   //   const newProduct = req.body;
//   //   res.send(manager.updateById(id, newProduct));
//   // } catch (err) {
//   //   res.status(404).send(err.msg);
//   // }
//   const { pid } = req.params;
//   const updateProduct = req.body;
//   try {
//     const result = await productsModel.updateOne({ _id: pid }, updateProduct)
//     res.send({ result: 'succes', payload: result })
//   } catch (err) {
//     res.status(500).send(err.msg);
//   }
// });

// // router.post('/', (req, res) => {
// //   try {
// //     const data = req.body;
// //     manager.save(data);
// //     res.redirect('/');
// //   } catch (err) {
// //     res.status(404).send(err);
// //   }
// // });

// router.delete('/:pid', async (req, res) => {
//   const { pid } = req.params
//   try {
//     const result = await productsModel.deleteOne({ _id: pid })
//     res.send({ result: 'succes', payload: result })
//   } catch (error) {
//     res.status(500).send(error);
//   }
// });

export default router;
