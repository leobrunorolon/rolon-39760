import { Router } from 'express';
import ProductsManager from '../../manager/Manager.js';

const router = Router();

const manager = new ProductsManager('./files/products.json');

router.get('/', async (req, res) => {
  try {
    const products = await manager.getProducts();
    const isEmpty = products.lenght === 0;
    res.render('products', { products, isEmpty });
  } catch (err) {
    res.status(404).send(err);
  }
});

router.get('/:pid', async (req, res) => {
  try {
    const id = req.params.pid;
    const product = await manager.findById(id);
    res.render('products', product);
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

// router.get('/:id', (req, res) => {
//   try {
//     const { id } = req.params;
//     res.send(manager.getById(parseInt(id)));
//   } catch (err) {
//     res.status(404).send(err);
//   }
// });

// router.post('/', (req, res) => {
//   try {
//     const data = req.body;
//     manager.save(data);
//     res.redirect('/');
//   } catch (err) {
//     res.status(404).send(err);
//   }
// });

// router.delete('/:id', (req, res) => {
//   try {
//     const { id } = req.params;
//     res.send(manager.deleteById(parseInt(id)));
//   } catch (err) {
//     res.status(404).send(err.msg);
//   }
// });

export default router;
