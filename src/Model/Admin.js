import mongoose from "./../Db/connection";
import shortid from "shortid";
const Schema = mongoose.Schema;

//Schema Def
const AdminSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  authKeys: [String],
  canCreateAdmin: {
    type: Boolean,
    default: false
  },
  canCreateQuestion: {
    type: Boolean,
    default: false
  },
  canCreateTest: {
    type: Boolean,
    default: false
  }
});
const Admin = mongoose.model("admin", AdminSchema);
export default Admin;
