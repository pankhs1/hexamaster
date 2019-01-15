import GetTimeArray from "../../Utilities/GenerateTimeArray";
import UserSlot from "../../Model/UserSlot";
import Slot from "../../Model/Slot";
import ClearSlots from "../../Utilities/ClearSlots";
import { GetIST, GetISTStr } from "../../Utilities/DateToIST";
import moment from "moment-timezone";
export default async (req, h) => {
  setImmediate(ClearSlots);

  let { email, date, contact } = req.payload;
  console.clear();
  date = await GetIST(date, "daystart");
  const uSlot = await UserSlot.findOne({
    deleted: false,
    $or: [{ email }, { contact }]
  });
  if (uSlot) {
    if (uSlot.phoneVerified) {
      return h
        .response({
          message: "Slot already registered for this Contact / Email"
        })
        .code(409);
    } else if (
      uSlot.phoneVerified === false &&
      uSlot.otp_invalid_after > new Date().getTime()
    ) {
      //if user opened new tab
      try {
        const tuser = await UserSlot.findByIdAndRemove({
          _id: uSlot._id
        });
      } catch (e) {
        return h.response({ message: "Server Error!" }).code(500);
      }
    }
  }

  const CurrDate = await Slot.findOne({
    $and: [{ startDate: { $lte: date } }, { endDate: { $gte: date } }]
  });

  if (CurrDate) {
    const startTime = await GetIST(CurrDate.startTime);
    const endTime = await GetIST(CurrDate.endTime);
    const step = CurrDate.slotSize;
    const from = date
      .set({
        hour: startTime.get("hour"),
        minute: startTime.get("minute"),
        second: startTime.get("second")
      })
      .valueOf();

    const to = date
      .set({
        hour: endTime.get("hour"),
        minute: endTime.get("minute"),
        second: endTime.get("second")
      })
      .valueOf();

    let busySlot = CurrDate.busySlot.map(i => {
      const time = moment(i)
        .tz("Asia/Kolkata")
        .startOf("minute");
      const result = date.set({
        hour: time.get("hour"),
        minute: time.get("minute"),
        second: time.get("second")
      });

      return result.valueOf();
    });
    const Udate = date;
    const bookedSlots = await UserSlot.find({
      slotDate: Udate.startOf("day"),
      deleted: false
    });

    const userSlot = bookedSlots.map(i => {
      const time = moment(i.startTime)
        .tz("Asia/Kolkata")
        .startOf("minute");

      const result = date.set({
        hour: time.get("hour"),
        minute: time.get("minute"),
        second: time.get("second")
      });
      return result.valueOf();
    });

    const timeslot = await GetTimeArray(from, to, step, userSlot, busySlot);
    return h.response({ slotArray: timeslot });
  }

  return h.response({ message: "No Slots Available", slotArray: [] }).code(404);
};
