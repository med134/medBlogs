import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    name: {
      type: String,
      unique: true,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
      match: /.+\@.+\..+/,
    },
    imageUrl: {
      type: String,
    },
    job: {
      type: String,
      required: false,
    },
    userSlug: {
      type: String,
    },
    phone: {
      type: String,
      match: /^\+?[1-9]\d{1,14}$/,
    },
    homeAddress: {
      type: String,
    },
    skills: {
      type: [String], // Array of strings to store skills
    },
    workLinks: [
      {
        title: { type: String, default: "GITHUB LINK" }, // Title of the work link
        url: { type: String, default: "" },
        image: {
          type: String,
          default:
            "https://res.cloudinary.com/djcnq7nmj/image/upload/v1728326402/github_c2lbts.png",
        }, // URL of the work link
      },
      {
        title: { type: String, default: "WEBSITE LINK" }, // Title of the work link
        url: { type: String, default: "" },
        image: {
          type: String,
          default:
            "https://res.cloudinary.com/djcnq7nmj/image/upload/v1728331894/browser_icpfbr.png",
        }, // URL of the work link
      },
      {
        title: { type: String, default: "LINKEDIN LINK" }, // Title of the work link
        url: { type: String, default: "" },
        image: {
          type: String,
          default:
            "https://res.cloudinary.com/djcnq7nmj/image/upload/v1728326402/linkedin_wc9g2d.png",
        }, // URL of the work link
      },
    ],
    experience: {
      type: Number,
      default: 0,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

//If the User collection does not exist create a new one.
module.exports = mongoose.models?.users || mongoose.model("users", userSchema);
