import mongoose from "mongoose";
const { Schema } = mongoose;

const socialMediaSchema = new Schema({
  x: {
    url: { type: String, default: "" },
    icon: {
      type: String,
      default:
        "https://res.cloudinary.com/djcnq7nmj/image/upload/v1731532173/twitter_pdfcvr.png",
    },
  },
  linkedIn: {
    url: { type: String, default: "" },
    icon: {
      type: String,
      default:
        "https://res.cloudinary.com/djcnq7nmj/image/upload/v1728326402/linkedin_wc9g2d.png",
    },
  },
  github: {
    url: { type: String, default: "" },
    icon: {
      type: String,
      default:
        "https://res.cloudinary.com/djcnq7nmj/image/upload/v1728326402/github_c2lbts.png",
    },
  },
  youtube: {
    url: { type: String, default: "" },
    icon: {
      type: String,
      default:
        "https://res.cloudinary.com/djcnq7nmj/image/upload/v1731532343/youtube_ouib4j.png",
    },
  },
});

const userSchema = new Schema(
  {
    name: {
      type: String,
      unique: true,
      required: true,
      min: 3,
      max: 20,
    },
    email: {
      type: String,
      unique: true,
      required: true,
      match: /.+\@.+\..+/,
    },
    password: {
      type: String,
      required: false,
    },
    imageUrl: {
      type: String,
      default:
        "https://res.cloudinary.com/djcnq7nmj/image/upload/v1730411682/profile_qjehzj.png",
      required: false,
    },
    job: {
      type: String,
      required: false,
    },
    homeAddress: {
      type: String,
      required: false,
    },
    about: {
      type: String,
      required: false,
    },
    socialMedia: { type: socialMediaSchema, required: false },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

//If the User collection does not exist create a new one.
const User = mongoose.models?.users || mongoose.model("users", userSchema);
export default User;
