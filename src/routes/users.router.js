import Router from './router.js'
import { passportStrategiesEnum } from '../config/enums.js'
import { getUsers, saveUser, login, register } from '../controllers/users.controller.js'

export default class UsersRouter extends Router {
  init() {
    this.post('/login', ['PUBLIC'], passportStrategiesEnum.NOTHING, login);
    this.post('/register', ['PUBLIC'], passportStrategiesEnum.NOTHING, register);
  }
}