import { UPLOAD_QUESTION } from "../Actions/Types";
const initialState = {
  quesFile: false,
  uploaded: false,
  fileName: "",
  uploadError: [],
  isUploading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case UPLOAD_QUESTION:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};
