import {Router} from "express";
import UserController from "../controllers/user.controller";
import checkMail from "../middlewares/checkMail";

const userRouter = Router();

const userController = new UserController()

userRouter.post('', checkMail, userController.store)
userRouter.get('', userController.index)

export default userRouter;