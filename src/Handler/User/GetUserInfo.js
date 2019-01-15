import User from "../../Model/User";
import jwt from "jsonwebtoken";
export default async (req, h) => {
  const token = jwt.verify(req.auth.credentials.token, "somesecret");
  const user = await User.findById(token._id).select(
    "-password -authKeys -emailVerified -emailVerificationToken -v"
  );
  if (user) {
    return h.response({ User: user });
  }
  return h.response({ Error: "User not found!" }).code(404);
};
