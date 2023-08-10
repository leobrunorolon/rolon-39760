import cartsModel from './models/carts.model.js'

export default class CartsDao {
  constructor() {
    console.log('Working carts with DB')
  }

  async getAll() {
    const carts = await cartsModel.find().lean();
    return carts
  }

  async save(cart) {
    const result = await cartsModel.create(cart);
    return result
  }

  async updateById(id, cart) {
    const result = await cartsModel.updateOne({ _id: id }, cart);
    return result;
  }

  async getById(id) {
    const cart = await cartsModel.findOne({ _id: id }).lean();
    return cart;
  }
}