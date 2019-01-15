import mongoose from "./../Db/connection";
const Schema = mongoose.Schema;

let SlotSchema = new mongoose.Schema({
  startDate: { type: Date, required: true, unique: true },
  endDate: { type: Date, required: true, unique: true },
  busySlot: [{ type: Date }],
  startTime: { type: Date, required: true },
  endTime: { type: Date, required: true },
  slotSize: { type: Number, required: true },
  busySlot: {
    type: [
      {
        type: Date
      }
    ]
  }
});
const Slot = mongoose.model("slot", SlotSchema);
Slot.createIndexes(
  function(e, data) {
    e ? console.log(e) : null;
  },
  { startDate: 1 },
  { unique: true }
);
Slot.createIndexes(
  function(e, data) {
    e ? console.log(e) : null;
  },
  { startDate: 1, endDate: 1 }
);
export default Slot;
