import {
  saveUser as saveUserService,
  getUsers as getUsersService
} from '../services/users.service.js'

const saveUser = async (req, res) => {
  try {
    const user = req.body
    await saveUserService(user)
    res.send(user)
  } catch (error) {
    req.logger.error(`Prueba error ${error}`);
    res.status(500).send(err);
  }
}

const getUsers = async (req, res) => {
  try {
    const users = await getUsersService()
    res.send(users)
  } catch (error) {
    req.logger.error(`Prueba error ${error}`);
    res.status(500).send(err);
  }
}

export {
  saveUser,
  getUsers
}