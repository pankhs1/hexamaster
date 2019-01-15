import Upload from "../../Utilities/UploadFile";
import SaveQuestion from "../../Services/SaveQuestionToDB";
import path from "path";
export default async (req, h) => {
  const { fileName, file } = req.payload;
  const dir = path.resolve() + "/Uploads/Question/";
  const docName = await Upload(fileName, file, dir);
  const filePath = dir + docName;
  const status = await SaveQuestion(filePath);
  return h.response(status);
};
