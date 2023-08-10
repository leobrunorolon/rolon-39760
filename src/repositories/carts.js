export default class productsRepository {
  constructor(dao) {
    this.dao = dao;
  }

  async getAll() {
    const result = await this.dao.getAll();
    return result
  }

  async save(cart) {
    const result = await this.dao.save(cart);
    return result
  }

  async updateById(id, cart) {
    const result = await this.dao.updateById(id, cart);
    return result;
  }

  async getById(id) {
    const result = await this.dao.getById(id);
    return result;
  }
}