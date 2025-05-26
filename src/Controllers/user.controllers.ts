
import bcrypt from "bcryptjs";
import { User } from "../Models/user.model";
import cloudinary from "../utility/cloudinary";
import fs from "fs";
export const registerUser = async (req: any, res: any) => {
  try {
    const {
      FirstName,
      LastName,
      PhoneNumber,
      email,
      password,
      userType,
      SubjectSpecialization,
      YearsOfExperience,
      OrganizationName,
      ContactPersonName,
      Designation,
      HighestQualification,
    } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const files = req.files as {
      [fieldname: string]: Express.Multer.File[];
    };
    console.log(files);
    
    const avatarPath = files["avatar"][0].path;
    const avatarUpload = await cloudinary.uploader.upload(avatarPath, {
      folder: "avatars",
    });
    let resumeUrl: string | null = null;
    if (userType === "Instructor" && files["Resume"]) {
      const resumePath = files["Resume"][0].path;
      const resumeUpload = await cloudinary.uploader.upload(resumePath, {
        folder: "resumes",
        resource_type: "raw",
      });
      resumeUrl = resumeUpload.secure_url;
      fs.unlinkSync(resumePath);
    }
    fs.unlinkSync(avatarPath); 
    const userData: any = {
      avatar: avatarUpload.secure_url,
      FirstName,
      LastName,
      PhoneNumber,
      email,
      password: hashedPassword,
      userType,
    };
    if (userType === "Instructor") {
      userData.SubjectSpecialization = SubjectSpecialization;
      userData.YearsOfExperience = YearsOfExperience;
      userData.HighestQualification = HighestQualification;
      userData.Resume = resumeUrl;
    }
    if (userType === "Organization") {
      userData.OrganizationName = OrganizationName;
      userData.ContactPersonName = ContactPersonName;
      userData.Designation = Designation;
    }
    const user = new User(userData);
    await user.save();
    res.status(201).json({ message: "User registered successfully", user });
  } catch (error) {
    res.status(500).json({
      error:
        error instanceof Error ? error.message : "An unknown error occurred",
    });
  }
};
