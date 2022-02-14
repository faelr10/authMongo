import { request, response, Router } from "express";
import { UserController } from "../Controller/UserController";
import authAdmin from "../Middlewares/authAdmin";
import authBasic from "../Middlewares/authBasic";



const routes = Router();

const userController = new UserController()


routes.get('/getBalance',authBasic,userController.getBalance)
routes.get('/newPix',authAdmin,userController.newPix)

routes.post('/login',userController.login)

export { routes };
