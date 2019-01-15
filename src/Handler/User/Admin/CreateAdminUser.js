import Admin from "../../../Model/Admin";
import bcrypt from "bcryptjs";
export default async (req, h) => {
  const { name, email, password } = req.payload;
  const canCreateAdmin = false || req.payload.canCreateAdmin;
  const canCreateTest = false || req.payload.canCreateTest;
  const canCreateQuestion = false || req.payload.canCreateQuestion;

  const admin = await Admin.findOne({ email: req.payload.email });

  if (!admin) {
    const SaltRounds = 9;
    const hash = await bcrypt.hash(password, SaltRounds);
    const NewAdmin = new Admin({
      name: name,
      email: email,
      password: hash,
      canCreateAdmin,
      canCreateQuestion,
      canCreateTest
    });
    try {
      await NewAdmin.save();
    } catch (err) {
      console.log(err);
    }
    return h.response({ Name: NewAdmin.name, email: NewAdmin.email });
  } else {
    return h.response({ message: "User already exists!" }).code(409);
  }
};
