import express from 'express';
import ProductsManager from '../manager/ProductsManager.js';

const app = express();

app.use(express.urlencoded({ extended: true }));
const manager = new ProductsManager('./files/products.json');

app.get('/', async (req, res) => {
  // const data = {
  //   title: 'Mens Cotton Jacket',
  //   price: 55.99,
  //   description:
  //     'great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.',
  //   category: "men's clothing",
  //   image: 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg',
  //   rating: { rate: 4.7, count: 500 },
  // };
  // await manager.addProduct(data);
  return res.send(`<div>
    <h1 style="color:blue; text-align:center" >Bienvenidos a Glitch de Bruno Rolon</h1>
  <h2 style="text-align:center">Camada: 39760</h2>
  <img src=https://avatars.githubusercontent.com/leobrunorolon alt="BrunoRolon" width="460" height="345">
  <a href="https://github.com/leobrunorolon/rolon-39760"><h2>Github</h2></a>
  <a href="/products"><h2>Products</h2></a>
  </div>`);
});

app.get('/products', async (req, res) => {
  try {
    console.log(manager);
    const products = await manager.getProducts();
    res.send(products);
    console.log(products);
  } catch (err) {
    res.status(404).send(err);
  }
});

// app.get('/:id', (req, res) => {
//   try {
//     const { id } = req.params;
//     res.send(manager.getById(parseInt(id)));
//   } catch (err) {
//     res.status(404).send(err);
//   }
// });

// app.post('/', (req, res) => {
//   try {
//     const data = req.body;
//     manager.save(data);
//     res.redirect('/');
//   } catch (err) {
//     res.status(404).send(err);
//   }
// });

app.put('/:product', (req, res) => {
  try {
    const newProduct = req.body;
    res.send(manager.addProduct(newProduct));
  } catch (err) {
    res.status(404).send(err.msg);
  }
});

// app.delete('/:id', (req, res) => {
//   try {
//     const { id } = req.params;
//     res.send(manager.deleteById(parseInt(id)));
//   } catch (err) {
//     res.status(404).send(err.msg);
//   }
// });

app.listen(8080, () => console.log('Listening on port 8080'));
