import Slot from "../../Model/Slot";
import { GetISTStr } from "../../Utilities/DateToIST";
export default async (req, h) => {
  let {
    startDate,
    startTime,
    endDate,
    endTime,
    slotSize,
    busySlot
  } = req.payload;
  if (startDate > endDate) {
    let temp = startDate;
    startDate = endDate;
    endDate = temp;
  }
  startDate = await GetISTStr(startDate, "daystart");
  endDate = await GetISTStr(endDate, "daystart");
  startTime = await GetISTStr(startTime);
  endTime = await GetISTStr(endTime);

  const slotExists = await Slot.find({
    $and: [{ startDate: { $lte: startDate } }, { endDate: { $gte: startDate } }]
  });

  if (slotExists.length === 0) {
    const slot = new Slot({
      startDate,
      startTime,
      endDate,
      endTime,
      slotSize,
      busySlot
    });
    try {
      await slot.save();
    } catch (e) {
      console.log(e);
      return h.response({ message: "Slot Already Exists!" }).code(409);
    }
    return h.response({ slot });
  }
  return h.response({ message: "Slot Already Exists!" }).code(409);
};
