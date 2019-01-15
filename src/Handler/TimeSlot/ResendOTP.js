import UserSlot from "../../Model/UserSlot";
import { getOTP } from "../../Utilities/OTPUtils";
import { SendOTP } from "../../Utilities/SMSUtils";
import moment from "moment-timezone";
export default async (req, h) => {
  const { contact } = req.payload;
  const user = await UserSlot.findOne({ contact });
  if (user) {
    const otp = await getOTP();
    const time = moment()
      .tz("Asia/Kolkata")
      .valueOf();
    await SendOTP(otp, contact);
    await UserSlot.findOneAndUpdate(
      {
        _id: user.id
      },
      {
        otp,
        otp_created: time,
        otp_invalid_after: time + 60000 * 15
      }
    );
    return h.response({ otp_created: time });
  }
  return h.response({ message: "User not found" });
};
