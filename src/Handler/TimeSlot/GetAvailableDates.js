import Slot from "../../Model/Slot";
import { GetIST } from "../../Utilities/DateToIST";
import moment from "moment-timezone";
import GetDateArr from "../../Utilities/GenerateDateArray";
export default async (req, h) => {
  const dateArr = await Slot.find();
  let tempArr = [];
  dateArr.map(i => {
    const start = moment(i.startDate)
      .tz("Asia/Kolkata")
      .startOf("day");
    const end = moment(i.endDate)
      .tz("Asia/Kolkata")
      .startOf("day");
    const arr = GetDateArr(start.valueOf(), end.valueOf());
    tempArr.push(...arr);
  });

  return h.response({
    availableDates: tempArr
  });
};
