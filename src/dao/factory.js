import config from '../config/config.js';

export let USERSDAO
export let CARTSDAO
export let PRODUCTSDAO

const persistence = config.persistence

switch (persistence) {
  case 'MONGO':
    const mongoose = await import('mongoose');
    await mongoose.connect(config.mongoUrl);
    const { default: MongoCartsDao } = await import('./dbManagers/carts.dao.js')
    const { default: MongoProductsDao } = await import('./dbManagers/products.dao.js')
    const { default: MongoUserDao } = await import('./dbManagers/users.dao.js');

    CARTSDAO = MongoCartsDao;
    PRODUCTSDAO = MongoProductsDao;
    USERSDAO = MongoUserDao;
    break;
  case 'FILE':
    // const { default: UsersFile } = await import ('./fileManagers/users.js');
    // Users = UsersFile;
    break;
}