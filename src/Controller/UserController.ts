import { Request, Response } from "express";
import prisma from "../database/client";
// import User from "../model/User";

export class UserController {

    // async create(req: Request, res: Response):Promise<void> {

    //     const {name,idade}=req.body

    //     const user = await User.create({
    //         name,
    //         idade
    //     })
        
    //     res.json(user)

    // }

    async getAll(req:Request,res:Response):Promise<void>{
        const users = await prisma.user.findMany()
        console.log(users)
        res.json(users)
    }

}