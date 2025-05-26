import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser"
import bodyParser from "body-parser";
import userRoutes from "./Routes/user.route";

const app = express();
  app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
  }));
  app.use(express.json({limit:"16kb"}));
  app.use(express.urlencoded({extended:true,limit:"16kb"}));
  app.use(express.static("public"));
  app.use(cookieParser())
  app.use('/uploads', express.static('uploads')); 
  app.use('/api/user', userRoutes);

export {app}