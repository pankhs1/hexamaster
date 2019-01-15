import Slot from "../../Model/Slot";
import mongoose from "mongoose";
export default async (req, h) => {
  let { slotId } = req.payload;
  slotId = mongoose.Types.ObjectId(slotId);
  try {
    await Slot.findByIdAndRemove({ _id: slotId });
    const slotList = await Slot.find();
    return h.response({ slotDeleted: true, slotList });
  } catch (e) {
    console.log(e);
    return h.response({ message: "Error while deleting slot" }).code(409);
  }
};
