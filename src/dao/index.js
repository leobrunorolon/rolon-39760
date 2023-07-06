import mongoCartsDao from './dbManagers/carts.dao.js'
import mongoProductsDao from './dbManagers/products.dao.js'
import mongoUserDao from './dbManagers/users.dao.js'
//Import del dao de manejo de datos con archivos

const MongoCartsDao = new mongoCartsDao();
const MongoProductsDao = new mongoProductsDao();
const MongoUserDao = new mongoUserDao();
//Crear las instancia de manejo de datos con archivos

//export const TOYSDAO = config.persistence === 'MEMORY' ? MemoryToyDao : MongoToyDao;
export const CARTSDAO = MongoCartsDao;
export const PRODUCTSDAO = MongoProductsDao;
export const USERSDAO = MongoUserDao;