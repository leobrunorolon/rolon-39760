import { Router } from 'express';
const router = Router();

router.get('/', async (req, res) => {
  return res.render('index', {
    welcome: 'Bienvenidos a Glitch de Bruno Rolon',
    camada: 'Camada: 39760',
    products: '/api/products',
    carts: '/api/carts',
    github: 'https://github.com/leobrunorolon/rolon-39760',
  });
});

router.get('/form', (req, res) => {
  res.render('form');
});

export default router;
