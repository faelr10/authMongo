import { request, response, Router } from "express";
import User from "../model/User";

const routes = Router();

routes.get('/',async(request,response)=>{
    const user = await User.findById({_id:"6206f9dd064dd8e7f932b613"})
    console.log(user)
    response.json(user.name)
})

export { routes };
