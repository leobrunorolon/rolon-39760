import * as usersService from '../services/users.service.js';
import { IncorrectLoginCredentials, UserNotFound, UserAlreadyExists } from "../utils/custom-exceptions.js";

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await usersService.getByEmail(email);
    const accessToken = await usersService.login(password, user);
    res.sendSuccess({ accessToken });
  } catch (error) {
    if (error instanceof UserNotFound) {
      req.logger.error(`User no found ${error.message}`);
      return res.sendClientError(error.message);
    }

    if (error instanceof IncorrectLoginCredentials) {
      req.logger.error(`Incorrect login credential ${error.message}`);
      return res.sendClientError(error.message);
    }
    req.logger.error(`Error ${error.message}`);
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

    if (error instanceof UserAlreadyExists) {
      req.logger.error(`User already exists ${error.message}`);
      return res.sendClientError('user already exists')
    }
    req.logger.error(`Error ${error.message}`);
    res.sendServerError(error.message);
  }
}

export {
  login,
  register
}
