import mongoose from "./../Db/connection";
let SlotSchema = new mongoose.Schema({
  slotDate: { type: Date, required: true },
  startTime: { type: Date, required: true },
  endTime: { type: Date, required: true },
  email: { type: String, required: true },
  name: { type: String, required: true },
  doc: { type: String, default: "" },
  contact: { type: String, required: true, unique: true },
  phoneVerified: { type: Boolean, default: false },
  otp: { type: String, default: 0 },
  otp_created: Number,
  otp_invalid_after: Number,
  onHold: { type: Boolean, default: false },
  deleted: { type: Boolean, default: false }
});
const UserSlot = mongoose.model("userslot", SlotSchema);
UserSlot.createIndexes(
  function(e, data) {
    e ? console.log(e) : null;
  },
  { contact: 1 },
  { unique: true }
);
UserSlot.createIndexes(
  function(e, data) {
    e ? console.log(e) : null;
  },
  { slotStart: 1 }
);
export default UserSlot;
