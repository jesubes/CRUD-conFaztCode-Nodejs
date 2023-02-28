import mongoose from "mongoose";
import { MONGODB_URI } from './config.js'

(async () => {
    try{
        const db = await mongoose.connect(MONGODB_URI)
        console.log('DB connected to MONGO')
    }catch {
        console.error(error)
    }
})() 