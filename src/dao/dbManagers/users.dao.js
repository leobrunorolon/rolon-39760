import userModel from './models/users.model.js';

export default class UsersDao {
  constructor() {
    console.log('Working users with DB')
  }

  async getAll() {
    const users = await userModel.find();
    return users.map(user => user.toObject());
  }

  async getByEmail(email) {
    const user = await userModel.findOne({ email }).lean();
    return user;
  }

  async save(user) {
    const result = await userModel.create(user);
    return result;
  }
}