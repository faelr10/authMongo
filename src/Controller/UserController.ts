import { Request, Response } from "express";
import User from "../model/User";

export class UserController {

    async create(req: Request, res: Response):Promise<void> {

        const {name,idade}=req.body

        const user = await User.create({
            name,
            idade
        })
        
        res.json(user)

    }

}