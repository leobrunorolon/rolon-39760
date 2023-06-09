import { CARTSDAO } from "../dao/index.js";

const saveCart = async (cart) => {
  await CARTSDAO.save(cart)
  return cart
}

const getCarts = async () => {
  const carts = await CARTSDAO.getAll()
  return carts
}

export {
  saveCart,
  getCarts
}