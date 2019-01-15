import Profile from "./../../Model/Profile";
import jwt from "jsonwebtoken";
export default async (req, h) => {
  //extract user id from token
  const token = jwt.verify(req.auth.credentials.token, "somesecret");
  const {
    title,
    company,
    location,
    from,
    to,
    current,
    description
  } = req.payload;
  const profile = await Profile.findOne({ user: token._id });

  if (profile) {
    const newExp = {
      title,
      company,
      location,
      from,
      to,
      current,
      description
    };
    profile.experience.unshift(newExp);
    await profile.save();

    return h.response({ msg: "Profile FOund" });
  }

  return h.response({ msg: "" });
};
