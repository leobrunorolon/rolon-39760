import productsModel from './models/products.model.js'

export default class ProductsDao {
  constructor() {
    console.log('Working products with DB')
  }

  async getAll() {
    const products = await productsModel.find();
    return products.map(product => product.toObject());
  }

  async getAllPaginated(limit, page) {
    const product = await productsModel.paginate({}, { limit, page, lean: true });
    return product;
  }

  async save(product) {
    const newProduct = await productsModel.create(product);
    return newProduct
  }

  async getById(pid) {
    const product = await productsModel.findOne({ _id: pid });
    return product.toObject();
  }

  async updateById(pid, product) {
    const result = await productsModel.updateOne({ _id: pid }, product);
    return result;
  }

  async deleteById(pid) {
    const product = await productsModel.deleteOne({ _id: pid });
    return product
  }
}