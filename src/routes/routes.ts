import { request, response, Router } from "express";
import { UserController } from "../Controller/UserController";

const routes = Router();

const userController = new UserController()

//routes.post('/',userController.create)
routes.get('/',userController.getAll)

export { routes };
