import Upload from "../../Utilities/UploadFile";
import Slot from "../../Model/Slot";
import UserSlot from "../../Model/UserSlot";
import { getOTP } from "../../Utilities/OTPUtils";
import { SendOTP } from "../../Utilities/SMSUtils";
import moment from "moment-timezone";
import { GetIST, GetISTStr } from "../../Utilities/DateToIST";
import path from "path";
export default async (req, h) => {
  let { fileName, doc, name, email, contact, date, slotTime } = req.payload;
  const sDate = await GetISTStr(date, "daystart");
  const extArr = ["pdf", "docx", "doc", "txt", "odt"];
  let tempFNArr = fileName.split(".");
  const ext = tempFNArr.splice(tempFNArr.length - 1, 1) + "";
  if (extArr.indexOf(ext.toLowerCase()) < 0) {
    return h.response({ message: "Invalid File Type" }).code(409);
  }
  const slotExists = await Slot.findOne({
    $and: [{ startDate: { $lte: sDate } }, { endDate: { $gte: sDate } }]
  });

  if (slotExists) {
    //existing user Slot
    const uSlot = await UserSlot.findOne({
      deleted: false,
      contact
    });

    if (!uSlot) {
      const dir = path.resolve() + "/src/Uploads/";
      const docName = await Upload(fileName, doc, dir);
      const otp = getOTP();
      const otp_created = moment()
        .tz("Asia/Kolkata")
        .valueOf();

      const sent = await SendOTP(otp, contact);
      if (sent) {
        const newSlot = new UserSlot({
          slotDate: sDate,
          startTime: slotTime,
          endTime: slotTime.getTime() + 60000 * slotExists.slotSize,
          email,
          name,
          contact,
          doc: docName,
          otp,
          otp_created,
          otp_invalid_after: otp_created + 60000 * 15,
          onHold: true
        });

        try {
          await newSlot.save();
        } catch (e) {
          return h
            .response({ message: "Session Already scheduled for this Number" })
            .code(409);
        }
        return h.response({
          slotDate: newSlot.startDate,
          slotTime: newSlot.startTime,
          slotEndTime: newSlot.endTime,
          otp_created,
          otp_timeOut: newSlot.otp_invalid_after
        });
      } else {
        console.log("Error OTP");
        return h.response({ message: "Error Sending OTP" }).code(409);
      }
    }
  }

  return h
    .response({ message: "Session Already scheduled for this Number" })
    .code(409);
};
