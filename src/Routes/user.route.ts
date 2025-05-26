import express from "express";
import upload from "../Middleware/UploadFilesMulter";
import { registerUser } from "../Controllers/user.controllers";

const userRoutes = express.Router();

userRoutes.post(
  "/SignUp",
  upload.fields([
    { name: "avatar", maxCount: 1 },
    { name: "Resume", maxCount: 1 },
  ]),
  registerUser
);

export default userRoutes;
