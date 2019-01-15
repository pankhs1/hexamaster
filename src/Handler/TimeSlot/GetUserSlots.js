import UserSlot from "../../Model/UserSlot";
import { GetIST } from "../../Utilities/DateToIST";
export default async (req, h) => {
  let { startdate, enddate } = req.payload;

  startdate = await GetIST(startdate, "daystart");
  enddate = await GetIST(enddate, "daystart");

  const slots = await UserSlot.find({
    $and: [{ slotDate: { $gte: startdate } }, { slotDate: { $lte: enddate } }]
  }).select(
    "-otp -otp_created -otp_invalid_after -phoneVerified -onHold -deleted -v"
  );
  console.log(slots);
  return h.response({ userSlots: slots });
};
