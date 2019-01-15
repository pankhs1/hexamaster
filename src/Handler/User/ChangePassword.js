import User from "../../Model/User";
import bcrypt from "bcryptjs";
import Admin from "../../Model/Admin";
import mongoose, { mongo } from "mongoose";
export default async (req, h) => {
  try {
    const SaltRounds = 9;
    const hash = await bcrypt.hash("Hex@Adm!n@951", SaltRounds);

    const user = await Admin.findByIdAndUpdate("5bb369e2b5afd636e04ea40f", {
      password: hash
    });
  } catch (e) {
    console.log(e);
    return h.response({ message: "Invalid pass" });
  }

  return h.response({ id: "" });
};
