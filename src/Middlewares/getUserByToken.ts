import * as jwt from "jsonwebtoken";
import prisma from "../database/client";
import getToken from "./getToken";



const getClientByToken = async (token)=>{

    const data = jwt.verify(token,'secret')
    const user = await prisma.user.findFirst({where:{cpf:(<any>data).cpf}})
    return user
}

export default getClientByToken;