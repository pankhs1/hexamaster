import User from "./../Model/User";

export default async (req, h) => {
  const { email, key } = req.query;
  const user = await User.findOne({ email: email });
  if (!user) {
    return h.response({ Error: "Email not found" }).code(400);
  }
  // console.log(key, user.emailVerificationToken);
  if (user.emailVerificationToken === key) {
    user.emailVerified = true;
    await user.save();
    return h.response({ message: "Email has been verified!" });
  } else {
    return h.response({ Error: "Verification Token is Invalid" });
  }
};
