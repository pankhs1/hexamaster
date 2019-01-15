import mongoose, { Schema } from "mongoose";
import { load as loadEnv } from "dotenv";
loadEnv();
console.log(process.env.MONGO_URL);
const MDB = `mongodb://${process.env.MONGO_USR}:${process.env.MONGO_PWD}@${
  process.env.MONGO_URL}`;

mongoose
  .connect(
    MDB,
    {
      useCreateIndex: true,
      useNewUrlParser: true
    }
  )
  .then(() => console.log("Connected to DB!"))
  .catch(err => console.log(err));
mongoose.set("useFindAndModify", false);

export default mongoose;
