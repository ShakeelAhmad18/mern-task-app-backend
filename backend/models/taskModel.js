const mongoose =require('mongoose')

const taskSchema=mongoose.Schema(
    {
        name:{
            type:String,
            required:[true,'Please Enter a Task']
        },
        completed:{
            type:Boolean,
            required:true,
            default:false,
        }
    },
    {
        timestamps:true
    }
)

 const task=  mongoose.model('Task',taskSchema)

 module.exports=task;
