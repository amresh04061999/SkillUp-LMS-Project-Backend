import mongoose from "mongoose";
import { DB_Name } from "../utility/constants";
import dotenv from "dotenv"
dotenv.config({path:'./.env'})
  const connectDB = async () =>{
    try {
         const connectionInstance= await mongoose.connect(`${process.env.MONGODB_URL}/${DB_Name}`) ;
         console.log(`Database connection successfull ${(connectionInstance.connection.host)}`);
         
    } catch (error) {
           console.log("DataBase connection fail",error);
           throw error;
    }
  }
export default connectDB
