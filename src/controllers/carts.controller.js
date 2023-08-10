import * as cartsService from '../services/carts.service.js'

const saveCart = async (req, res) => {
  try {
    const cart = req.body
    await cartsService.save(cart)
    res.send(cart)
  } catch (error) {
    req.logger.error(`Prueba error ${error}`);
    res.status(500).send(err);
  }
}

const getCarts = async (req, res) => {
  try {
    const carts = await getCartsService()
    res.send(carts)
  } catch (error) {
    req.logger.error(`Prueba error ${error}`);
    res.status(500).send(err);
  }
}

export {
  saveCart,
  getCarts
}