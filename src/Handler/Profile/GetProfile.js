import Profile from "../../Model/Profile";
import jwt from "jsonwebtoken";
export default async (req, h) => {
  const token = jwt.verify(req.auth.credentials.token, "somesecret");
  const profile = await Profile.findOne({ user: token._id }).populate("user", [
    "name",
    "email",
    "avatar"
  ]);
  if (profile) {
    return h.response({ Profile: profile });
  }
  return h.response({ Error: "Profile not found!" });
};
