import jwt from "jsonwebtoken";
import User from "../Model/User";
import Admin from "../Model/Admin";
import { load as loadEnv } from "dotenv";
loadEnv();
const UserCookiePass = process.env.COOKIE_PASS;
const AdminCookiePass = process.env.ADMIN_COOKIE_PASS;
export const authCookieOptions = {
  password: UserCookiePass, //Password used for encryption
  cookie: "fm-auth", // Name of cookie to set
  isSecure: false,
  validateFunc: async (request, session) => {
    const token = jwt.verify(session.token, UserCookiePass);
    const user = await User.findById(token._id);
    if (user) {
      return { valid: true, credentials: session };
    }
    return { valid: false, credentials: session };
  }
};

export const adminAuthCookieOptions = {
  password: AdminCookiePass, //Password used for encryption
  cookie: "fm-admin-auth", // Name of cookie to set
  isSecure: false,
  requestDecoratorName: "cookieAuthAdmin",
  validateFunc: async (request, session) => {
    const token = jwt.verify(session.token, AdminCookiePass);
    const admin = await Admin.findById(token._id);
    console.log(admin);
    if (admin.canCreateAdmin) {
      return { valid: true, credentials: session };
    }
    return { valid: false, credentials: session };
  }
};
