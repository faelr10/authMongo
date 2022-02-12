import { request, response, Router } from "express";
import { UserController } from "../Controller/UserController";
import User from "../model/User";

const routes = Router();

const userController = new UserController()

routes.post('/',userController.create)

export { routes };
