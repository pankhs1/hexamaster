import { UPLOAD_QUESTION } from "./Types";
import Axios from "axios";
export const setQuestion = data => dispatch => {
  dispatch({
    type: UPLOAD_QUESTION,
    payload: { ...data }
  });
};

export const UploadQuestion = data => dispatch => {
  Axios.post("api/v1/admin/uploadques", data, {
    headers: {
      accept: "application/json",
      contentType: "multipart/form-data"
    }
  })
    .then(({ data }) => {
      console.log(data);
      const successMsg = `${data.count} Questions Uploaded Successfully ! `;
      dispatch({
        type: UPLOAD_QUESTION,
        payload: {
          fileName: "",
          quesFile: null,
          uploadError: [successMsg],
          isUploading: false,
          uploaded: true,
          snack: true
        }
      });
    })
    .catch(({ response }) => {
      console.log(response);
      const errorArr =
        response.status < 500
          ? response.data.message.split(",")
          : ["Server Error  !"];
      dispatch({
        type: UPLOAD_QUESTION,
        payload: {
          uploadError: errorArr,
          isUploading: false,
          uploaded: false,
          snack: true
        }
      });
    });
};
