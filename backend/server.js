const dotenv=require('dotenv').config()
const express=require('express')
const mongoose=require('mongoose')
const task = require('./model/taskModel')
//const connectDB=require('./config/connectDB')
const taskRoutes =require('./routes/taskRoute')

const app=express()

const PORT=process.env.PORT || 5000

//middleware

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(taskRoutes)

//const logger=(req,res)=>{
 //  console.log('The middleware')
//}


app.get('/',(req,res)=>{
    res.send('Home Page')
})


mongoose.connect(process.env.MONGO_URI).then(()=>{
    app.listen(PORT,()=>{
        console.log(`Server is running on ${PORT}`)
    })
}).catch((err)=>console.log(err))




 

{/*const startServer=async ()=>{
   await connectDB();

   app.listen(PORT,()=>{
      console.log(`server is running on ${PORT}`)
   })
}

startServer();*/}