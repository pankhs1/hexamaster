import mongoose from "./../Db/connection";
import shortid from "shortid";
const Schema = mongoose.Schema;

let QuesSchema = new mongoose.Schema({
  question: { type: String, required: true, trim: true },
  answerOptions: { type: [String], required: true },
  correctAnswers: { type: [String], required: true },
  tags: { type: [String] },
  source: { type: String },
  category: { type: String, required: true, trim: true },
  topic: { type: String, required: true, trim: true },
  difficulty: { type: String, required: true, trim: true }
});
const Question = mongoose.model("question", QuesSchema);
export default Question;
