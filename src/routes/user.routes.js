import {Router} from "express";
import LoginController from "../controllers/loginController";
import UserController from "../controllers/user.controller";
import checkMail from "../middlewares/checkMail";
import checkToken from "../middlewares/checkToken";

const userRouter = Router();

const userController = new UserController()

userRouter.post('', checkMail, userController.store)
userRouter.get('', checkToken, userController.index)

const loginController = new LoginController()
userRouter.post('/login', loginController.store)

export default userRouter;