import User from "./../../Model/User";
import bcrypt from "bcryptjs";
import sendEMail from "./../../Services/SendEmail";
export default async (req, h) => {
  const { name, email, password } = req.payload;
  const user = await User.findOne({ email: req.payload.email });

  if (!user) {
    const SaltRounds = 9;
    const hash = await bcrypt.hash(password, SaltRounds);

    const NewUser = new User({
      name: name,
      email: email,
      password: hash
    });
    try {
      await NewUser.save();
      const ans = await sendEMail(email, NewUser.emailVerificationToken);
    } catch (err) {}
    return h.response({ Name: NewUser.name, email: NewUser.email });
  } else {
    return h.response({ message: "User already exists!" }).code(409);
  }
};
