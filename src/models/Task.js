/* DEFINICION de esquema */

import { Schema, model } from 'mongoose'


const taskSchema = new Schema({
    title: {
        type : String,
        require : true,
        unique : true,
        trim : true,
    },
    description: {
        type: String,
        require : true,
    },
    done: {
        type : Boolean,
        default : false,
    },
}, {
    timestamps: true,
    versionKey : false, // es par que en mongo no aparezca _V 
})


export default model ( 'Task', taskSchema)

