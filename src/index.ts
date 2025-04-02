// require('dotenv').config({path: './env'})

import connectDB from "./DB/db"

import dotenv from "dotenv"
import { app } from "./app"

dotenv.config({path:'./.env'})

connectDB()
.then(()=>{
app.listen(process.env.PORT || 8000, ()=>{
    console.log(`server is running at port :"${process.env.PORT}  `); 
})

})
.catch((error)=>{
    console.log("Mongo db connection faild !!!",error);
})