import * as productsService from '../services/products.service.js'

const saveProduct = async (req, res) => {
  try {
    const product = req.body
    await saveProductService(product)
    res.send(product)
  } catch (error) {
    req.logger.error(`Prueba error ${error}`);
    res.status(500).send(err);
  }
}

const getProducts = async (req, res) => {
  try {
    const products = await getProductsService()
    res.send(products)
  } catch (error) {
    req.logger.error(`Prueba error ${error}`);
    res.status(500).send(err);
  }
}

const findProduct = async (req, res) => {
  try {
    const { pid } = req.params;
    const product = await findProductService(pid)
    res.send(product)
  } catch (error) {
    req.logger.error(`Prueba error ${error}`);
    res.status(500).send(err);
  }
}

const updateProduct = async (req, res) => {
  try {
    const { pid } = req.params;
    const updateProduct = req.body;
    const product = await updateProductService(pid, updateProduct)
    res.send(product)
  } catch (error) {
    req.logger.error(`Prueba error ${error}`);
    res.status(500).send(err);
  }
}

const deleteProduct = async (req, res) => {
  try {
    const { pid } = req.params
    const product = await deleteProductService(pid)
    res.send(product)
  } catch (error) {
    req.logger.error(`Prueba error ${error}`);
    res.status(500).send(err);
  }
}

export {
  saveProduct,
  getProducts,
  findProduct,
  updateProduct,
  deleteProduct
}