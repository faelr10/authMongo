import { Request, Response } from "express";
import prisma from "../database/client";
import createUserToken from "../Middlewares/createUserToken";
import getToken from "../Middlewares/getToken";
import getClientByToken from "../Middlewares/getUserByToken";
// import User from "../model/User";

export class UserController {


    async getBalance(req:Request,res:Response):Promise<void>{
        const token = await getToken(req)
        const client = await getClientByToken(token)
        res.json("Saldo  =  50K")
    }

    async newPix(req:Request,res:Response):Promise<void>{
        const token = await getToken(req)
        const client = await getClientByToken(token)
        res.json("Pix com sucesso!")
    }

    async login(req:Request,res:Response): Promise<void> {

        const {cpf,password}= req.body

        const user = await prisma.user.findFirst({where:{cpf}})

        const dataToken = {
            id:user?.id,
            name:user?.name,
            cpf:user?.cpf,
            isAuthorized:user?.isAuthorized
        }

        if(!(password === user?.password)){
            res.json({message:"Senha incorreta!"})
        }

        const token = await createUserToken(dataToken)
        
        res.json(token)

    }


}