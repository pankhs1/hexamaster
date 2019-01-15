import sgMail from "@sendgrid/mail";
import { load as loadEnv } from "dotenv";
loadEnv();
console.log(process.env.NODE_ENV);
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async (to, key) => {
  const msg = {
    to: to,
    from: "support@fm.com",
    subject: "Verify Your Foundation Makers Account",
    text: "This is an verification email",
    html: `<h1>Click Button below to verify your email</h1><br><a href="http://localhost:5000/verify?email=${to}&key=${key}"><button>Verify Email</button></a>`
  };
  return await sgMail.send(msg);
};
