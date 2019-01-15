import fs from "fs";
import path from "path";
export default async (fileName, blob) => {
  const dir = path.resolve() + "/src/Uploads/";
  let tempFNArr = fileName.split(".");
  const ext = tempFNArr.splice(tempFNArr.length - 1, 1);
  const newFileName = `${tempFNArr}_${new Date().getTime()}.${ext}`;
  try {
    await fs.createWriteStream(dir + newFileName).write(blob._data);
  } catch (e) {
    return h.response({ message: "Error Uploading File!" });
  }
  return newFileName;
};
