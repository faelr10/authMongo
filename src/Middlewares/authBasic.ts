
import jwt from "jsonwebtoken";
import getToken from "./getToken";



const authBasic = async (req, res, next) => {

    //VALIDANDO TOKEN
    const token = getToken(req)
    if (!token) {
        return res.status(401).json({ message: 'Acesso Negado!' })
    }
    jwt.verify(token, 'secret')

    
}

export default authBasic