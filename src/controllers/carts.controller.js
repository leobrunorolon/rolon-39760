import {
  saveCart as saveCartservice,
  getCarts as getCartsService
} from '../services/toys.service.js'

const saveCart = async (req, res) => {
  try {
    const cart = req.body
    await saveCartservice(cart)
    res.send(cart)
  } catch (error) {
    res.status(500).send(err);
  }
}

const getCarts = async (req, res) => {
  try {
    const carts = await getCartsService()
    res.send(carts)
  } catch (error) {
    res.status(500).send(err);
  }
}

export {
  saveCart,
  getCarts
}