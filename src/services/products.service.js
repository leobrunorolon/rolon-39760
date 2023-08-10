import ProductsRepository from "../repositories/products.js";
import { PRODUCTSDAO } from "../dao/factory.js";
import { FailedToSave, FailedToUpdate } from "../utils/custom-exceptions.js";

const products = new PRODUCTSDAO();
const productsRepository = new ProductsRepository(products)

const saveProduct = async (product) => {
  const result = await productsRepository.save(product)

  if (!result) {
    throw new FailedToSave('Product not save')
  }
  return result
}

const getProducts = async () => {
  const products = await productsRepository.getAll()

  if (!products) {
    throw new CallError('Error when bringing the products')
  }
  return products
}

const findProduct = async (id) => {
  const product = await productsRepository.getById(id)

  if (!products) {
    throw new IsNotFound('Product not found')
  }
  return product
}

const updateProduct = async (id, newProduct) => {
  const product = await productsRepository.updateById(id, newProduct)

  if (!product) {
    throw new FailedToUpdate('Fail to update product')
  }
  return product
}

const deleteProduct = async (id) => {
  const product = await productsRepository.deleteById(id)

  if (!product) {
    throw new FailedToDelete('Fail to delete a product')
  }
  return product
}

export {
  saveProduct,
  getProducts,
  findProduct,
  updateProduct,
  deleteProduct
}