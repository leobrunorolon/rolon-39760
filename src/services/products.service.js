import { PRODUCTSDAO } from "../dao/index.js";

const saveProduct = async (product) => {
  await PRODUCTSDAO.save(product)
  return product
}

const getCarts = async () => {
  const products = await PRODUCTSDAO.getAll()
  return products
}

const findProduct = async (id) => {
  const product = await PRODUCTSDAO.findProduct(id)
  return product
}

const updateProduct = async (id, newProduct) => {
  const product = await updateProductService(id, newProduct)
  res.send(product)
}

const deleteProduct = async (id) => {
  const product = await deleteProductService(id)
  res.send(product)
}

export {
  saveProduct,
  getCarts,
  findProduct,
  updateProduct,
  deleteProduct
}