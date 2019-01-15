import mongoose from "./../Db/connection";
import shortid from "shortid";
const Schema = mongoose.Schema;

//Schema Def
const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  emailVerified: {
    type: Boolean,
    default: false,
    required: true
  },
  emailVerificationToken: {
    type: String,
    default: shortid.generate()
  },
  password: {
    type: String,
    required: true
  },
  avatar: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now,
    required: true
  },
  authKeys: [String]
});
const User = mongoose.model("users", UserSchema);
export default User;
