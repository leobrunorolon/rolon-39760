export default class productsRepository {
  constructor(dao) {
    this.dao = dao;
  }

  async getAll() {
    const result = await this.dao.getAll();
    return result
  }

  async getAllPaginated(limit, page) {
    const result = await this.dao.getAllPaginated(limit, page);
    return result;
  }

  async save(product) {
    const result = await this.dao.save(product);
    return result
  }

  async getById(pid) {
    const result = await this.dao.getById(pid);
    return result
  }

  async updateById(pid, product) {
    const result = await this.dao.updateById(pid, product);
    return result;
  }

  async deleteById(pid) {
    const result = await this.dao.deleteById(pid);
    return result
  }
}