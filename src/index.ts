import connectDB from "./DB/db";
import dotenv from "dotenv";
import { app } from "./app";
var catMe = require("cat-me");
dotenv.config({ path: "./.env" });
connectDB().then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(catMe());
      console.log(`server is running at port :"${process.env.PORT}  `);
    });
  }).catch((error) => {
           console.log("Mongo db connection faild !!!", error);
  });