import jwt from "jsonwebtoken";
import prisma from "../database/client";
import authBasic from "./authBasic";
import getToken from "./getToken";
import getClientByToken from "./getUserByToken";


const authAdmin = async (req, res, next) => {

    const auth = {
        "action": "getBalance",
        "resource": "test"
    }

    //VALIDANDO TOKEN
    const token = getToken(req)
    if (!token) {
        return res.status(401).json({ message: 'Acesso Negado!' })
    }
    jwt.verify(token, 'secret')


    //VALIDANDO PERMISSÃO
    const client = await getClientByToken(token)
    const policy = await prisma.policy.findFirst({ where: { Sid: client?.isAuthorized } })

    console.log(typeof(policy?.Action[1]))

    if (client?.isAuthorized !== auth.action) {
        res.json("Não autorizado Permission!")
        return
    }

    //VALIDANDO RESOURCE
    
    const resource1 = String(policy?.Resource)
    if (resource1 !== auth.resource) {
        res.json("Não autorizado Resource!")
        return
    }


    next()

}

export default authAdmin