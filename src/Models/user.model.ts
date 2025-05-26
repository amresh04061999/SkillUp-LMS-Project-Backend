import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    avatar: {
      type: String,
      required: [true, "Avatar is required"],
    },
    FirstName: {
      type: String,
      required: [true, "FirstName is required"],
      trim: true,
    },
    LastName: {
      type: String,
      required: [true, "LastName is required"],
      trim: true,
    },
    PhoneNumber: {
      type: Number,
      required: [true, "Phone Number is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      trim: true,
    },
    userType: {
      type: String,
      required: [true, "UserType is required"],
      enum: ["Student", "Instructor", "Organization"],
    },

    SubjectSpecialization: {
      type: String,
      required: function (this: any) {
        return this.userType === "Instructor";
      },
    },
    YearsOfExperience: {
      type: String,
      required: function (this: any) {
        return this.userType === "Instructor";
      },
    },
    HighestQualification: {
      type: String,
      required: function (this: any) {
        return this.userType === "Instructor";
      },
    },
    OrganizationName: {
      type: String,
      required: function (this: any) {
        return this.userType === "Organization";
      },
    },
    ContactPersonName: {
      type: String,
      required: function (this: any) {
        return this.userType === "Organization";
      },
    },
    Designation: {
      type: String,
      required: function (this: any) {
        return this.userType === "Organization";
      },
    },
    Resume: {
      type: String,
    },
    IsTrue: {
      type: Boolean,
    },
  },
  {
    timestamps: true,
  }
);
const User = mongoose.model("users", userSchema);
export { User };
