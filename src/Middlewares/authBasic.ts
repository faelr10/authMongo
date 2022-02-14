import jwt from "jsonwebtoken";
import prisma from "../database/client";
import getToken from "./getToken";
import getClientByToken from "./getUserByToken";


const authBasic = async (req, res, next) => {

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


    //VALIDANDO ACTIONS
    const client = await getClientByToken(token)
    const policy = await prisma.policy.findFirst({ where: { Sid: client?.isAuthorized } })

    const permission = String(policy?.Action.filter(action =>action === auth.action))
    if(!permission){
        res.json("Não autorizado! Action!")
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

export default authBasic