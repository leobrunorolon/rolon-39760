import {
  saveUser as saveUserService,
  getUsers as getUsersService
} from '../services/users.service.js'
import * as usersService from '../services/users.services.js';
import { IncorrectLoginCredentials, UserNotFound, UserAlreadyExists } from "../utils/custom-exceptions.js";

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await usersService.getByEmail(email);
    const accessToken = await usersService.login(password, user);
    res.sendSuccess({ accessToken });
  } catch (error) {
    if (error instanceof UserNotFound) {
      return res.sendClientError(error.message);
    }

    if (error instanceof IncorrectLoginCredentials) {
      return res.sendClientError(error.message);
    }
    req.logger.error(`Prueba error ${error}`);
    res.sendServerError(error);
  }
}

const register = async (req, res) => {
  try {
    const { first_name, last_name, role, email, password } = req.body;

    if (!first_name || !last_name || !role || !email || !password)
      return res.sendClientError('incomplete values')

    await usersService.getByEmailRegister(email);

    const register = await usersService.register({ ...req.body });
    res.sendSuccess(register);
  } catch (error) {
    console.log(error);
    if (error instanceof UserAlreadyExists) {
      return res.sendClientError('user already exists')
    }
    res.sendServerError(error.message);
  }
}

export {
  login,
  register
}

//TODO: old

// const saveUser = async (req, res) => {
//   try {
//     const user = req.body
//     await saveUserService(user)
//     res.send(user)
//   } catch (error) {
//     req.logger.error(`Prueba error ${error}`);
//     res.status(500).send(err);
//   }
// }

// const getUsers = async (req, res) => {
//   try {
//     const users = await getUsersService()
//     res.send(users)
//   } catch (error) {
//     req.logger.error(`Prueba error ${error}`);
//     res.status(500).send(err);
//   }
// }

// export {
//   saveUser,
//   getUsers
// }