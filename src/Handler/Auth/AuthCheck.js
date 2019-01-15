import User from "../../Model/User";
import jwt from "jsonwebtoken";
export default async (req, h) => {
  return h.response({ isAuthenticated: true });
};
