import GenerateOTP from "otp-generator";
import UserSlot from "../Model/UserSlot";
export const getOTP = () => {
  return GenerateOTP.generate(4, {
    digits: true,
    alphabets: false,
    upperCase: false,
    specialChars: false
  });
};
export const verifyOTP = data => {
  console.log(data);
};
