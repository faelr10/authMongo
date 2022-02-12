import { connect } from "mongoose"
import dotenv from 'dotenv'

dotenv.config()

export const mongoConnect = async () => {

    try {

        await connect(process.env.MONGO_URL as string)
        console.log("deu certo!")

    } catch (error) {
        console.log(error)
    }

}