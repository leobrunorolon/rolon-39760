import CartsRepository from "../repositories/carts.js";
import { CARTSDAO } from "../dao/factory.js";
import { CallError, FailedToSave } from "../utils/custom-exceptions.js";

const carts = new PRODUCTSDAO();
const cartsRepository = new CartsRepository(carts)

const saveCart = async (cart) => {
  const result = await cartsRepository.save(cart)

  if (!result) {
    throw new FailedToSave('Cart not save')
  }
  return result
}

const getCarts = async () => {
  const carts = await cartsRepository.getAll()

  if (!carts) {
    throw new CallError('Error when bringing the products')
  }
  return carts
}

export {
  saveCart,
  getCarts
}