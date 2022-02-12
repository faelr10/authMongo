import { Schema,model,connection } from "mongoose";

type UserType = {
    name: string,
    idade:number
}

const schema = new Schema<UserType>({
    name: String,
    idade:Number
})

const modelName: string ='user'

export default(connection && connection.models[modelName])?
    connection.models[modelName]
    :
    model<UserType>(modelName,schema)
