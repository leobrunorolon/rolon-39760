export default class UsersRepository {
  constructor(dao) {
    this.dao = dao;
  }

  async getByEmail(email) {
    const result = await this.dao.getByEmail(email);
    return result;
  }

  async save(user) {
    const result = await this.dao.save(user);
    return result;
  }
}