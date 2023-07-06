import productsModel from './models/products.model.js'

export default class ProductsDao {
  constructor() { }

  async getAll() {
    return await productsModel.find();
  }

  async save(product) {
    return await productsModel.create(product);
  }

  async findProduct(id) {
    return await productsModel.find({ _id: pid });
  }

  async updateProduct(id, product) {
    return await productsModel.updateOne({ _id: pid }, product);
  }

  async deleteProduct(id) {
    return await productsModel.deleteOne({ _id: pid });
  }
}