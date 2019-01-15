import Slot from "../Model/Slot";
import moment from "moment-timezone";
import UserSlot from "../Model/UserSlot";
export default async () => {
  const checkTime = moment()
    .tz("Asia/Kolkata")
    .valueOf();
  UserSlot.update(
    {
      otp_invalid_after: { $lt: checkTime },
      phoneVerified: false
    },
    {
      $set: { deleted: true, onHold: false }
    },
    { multi: true }
  )
    .then(data => console.log(data, "slots cleared"))
    .catch(e => console.log(e));
};
