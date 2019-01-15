import User from "../../Model/User";
import Admin from "../../Model/Admin";
import bcrypt from "bcryptjs";
import shortid from "shortid";
import jwt from "jsonwebtoken";
import { load as loadEnv } from "dotenv";
loadEnv();
export default async (req, h) => {
  const { email, password } = req.payload;

  const user = await User.findOne({ email });
  const admin = await Admin.findOne({ email });
  const AdminCookiePass = process.env.ADMIN_COOKIE_PASS;
  const UserCookiePass = process.env.USER_COOKIE_PASS;
  if (admin) {
    const isValid = await bcrypt.compare(password, admin.password);
    if (isValid) {
      // const key = shortid.generate();
      // user.authKeys.unshift(key);
      // await user.save();

      const token = jwt.sign({ _id: admin.id }, AdminCookiePass);

      req.cookieAuthAdmin.set({ token });
      return h
        .response({
          _id: admin.id,
          message: "Login Successfull",
          isAdmin: true
        })
        .code(200);
    } else {
      return h.response({ message: "Invalid Credentials" }).code(401);
    }
  } else {
    if (!user) {
      return h.response({ message: "User not found!" }).code(404);
    }

    const isValid = await bcrypt.compare(password, user.password);
    if (isValid) {
      // const key = shortid.generate();
      // user.authKeys.unshift(key);
      // await user.save();
      if (!user.emailVerified) {
        return h.response({ message: "Account not verified!" }).code(403);
      }
      const token = jwt.sign({ _id: user._id }, UserCookiePass);
      req.cookieAuth.set({ token });
      return h
        .response({ _id: user._id, message: "Login Successfull" })
        .code(200);
    } else {
      return h.response({ message: "Invalid Credentials" }).code(401);
    }
  }
};
