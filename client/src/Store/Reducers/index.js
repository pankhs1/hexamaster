import { combineReducers } from "redux";

import UserReducer from "./UserReducer";
import AuthReducer from "./AuthReducer";
import GenericReducer from "./GenericReducer";
import RegisterReducer from "./RegisterReducer";
import SlotReducer from "./SlotReducer";
import AdminSlotReducer from "./AdminSlotReducer";
import AdminSlotInfoReducer from "./AdminSlotInfoReducer";
import AdminManageSlot from "./AdminManageSlot";
import QuestionUploadReducer from "./QuestionUploadReducer";
import CreateTestReducer from "./CreateTestReducer";
export default combineReducers({
  User: UserReducer,
  Auth: AuthReducer,
  Generic: GenericReducer,
  Register: RegisterReducer,
  SlotState: SlotReducer,
  AdminSlot: AdminSlotReducer,
  SlotInfo: AdminSlotInfoReducer,
  ManageSlot: AdminManageSlot,
  QuestionUpload: QuestionUploadReducer,
  CreateTest: CreateTestReducer
});
