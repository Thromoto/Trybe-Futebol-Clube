import { Router } from 'express';
import ModelUsers from '../models/Users';
import ControllerUsers from '../controller/users.controller';
import ServiceUsers from '../services/users.service';
import validateUser from '../middlewares/validateUsers';

const router = Router();

const userService = new ServiceUsers(ModelUsers);
const userController = new ControllerUsers(userService);

router.post('/', validateUser, userController.login);

export default router;
