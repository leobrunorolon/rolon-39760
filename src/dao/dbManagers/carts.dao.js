import cartsModel from './models/carts.model.js'

export default class CartsDao {
  constructor() { }

  async getAll() {
    return await cartsModel.find();
  }

  async save(cart) {
    return await cartsModel.create(cart);
  }
}