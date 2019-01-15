import Slot from "../../Model/Slot";
export default async (req, h) => {
  const slotArr = await Slot.find();
  return h.response({ slotList: slotArr });
};
