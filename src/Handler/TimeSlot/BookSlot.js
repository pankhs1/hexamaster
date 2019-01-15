import Upload from "../../Utilities/UploadFile";
import Slot from "../../Model/Slot";
import UserSlot from "../../Model/UserSlot";
import { SendSuccessSMS, SendAckSMS } from "../../Utilities/SMSUtils";
import moment from "moment-timezone";
import { GetIST } from "../../Utilities/DateToIST";
export default async (req, h) => {
  let {
    fileName,
    doc,
    otp,
    name,
    email,
    contact,
    date,
    slotTime
  } = req.payload;
  const sDate = await GetIST(date, "daystart");

  const slotExists = await Slot.findOne({
    $and: [
      {
        startDate: {
          $lte: sDate
        }
      },
      {
        endDate: {
          $gte: sDate
        }
      }
    ]
  });

  if (slotExists) {
    // existing user Slot
    try {
      const uSlot = await UserSlot.findOne({
        deleted: false,
        contact
      });
      const otpOk = uSlot.otp == otp;
      const isValid =
        uSlot.otp_invalid_after >
        moment()
          .tz("Asia/Kolkata")
          .valueOf();
      if (otpOk && isValid) {
        try {
          const newSlot = await UserSlot.findOneAndUpdate(
            {
              _id: uSlot.id
            },
            {
              phoneVerified: true,
              onHold: false
            },
            {
              new: true
            }
          );

          await SendSuccessSMS(
            moment(slotTime)
              .tz("Asia/Kolkata")
              .format("D,MMMM,YYYY h:mm A")
              .toString(),
            contact
          );

          await SendAckSMS(
            moment(slotTime)
              .tz("Asia/Kolkata")
              .format("D,MMMM,YYYY h:mm A")
              .toString(),
            contact
          );
          return h.response({
            date: newSlot.slotDate,
            slotStart: newSlot.startTime,
            slotEnd: newSlot.endTime
          });
        } catch (e) {
          return h
            .response({
              message: "Server Error"
            })
            .code(500);
        }
      }
      return h
        .response({
          message: "Invalid otp,Click Resend to generate new otp."
        })
        .code(409);
    } catch (e) {
      console.log(e);
      return h.response({ message: "Server Error!" }).code(500);
    }
  } else {
    return h
      .response({
        message: "Slot Exist!"
      })
      .code(409);
  }
};
