import UserSlot from "../../Model/UserSlot";
import { getOTP } from "../../Utilities/OTPUtils";
import { SendOTP } from "../../Utilities/SMSUtils";
import moment from "moment-timezone";
export default async (req, h) => {
  const { contact, otp, hasOTP } = req.payload;
  const user = await UserSlot.findOne({ contact });

  if (user) {
    if (hasOTP) {
      return otp === user.otp
        ? h.response({ startTime: user.startTime })
        : h.response({ message: "Invalid OTP" }).code(409);
    } else {
      const time = moment()
        .tz("Asia/Kolkata")
        .valueOf();
      const otpNew = await getOTP();
      await SendOTP(otpNew, contact);
      const newU = await UserSlot.findOneAndUpdate(
        { _id: user.id },
        {
          otp: otpNew,
          otp_created: time,
          otp_invalid_after: time + 60000 * 15
        },
        { new: true }
      );

      return h.response({ otp_created: time });
    }
  }

  return h
    .response({ message: "You have not booked any session yet" })
    .code(404);
};
