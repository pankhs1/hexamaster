import fs from "fs";
import Question from "../Model/Question";
import parser from "csv-parser";

import mongoose from "mongoose";

export default async filePath => {
  return await new Promise((resolve, reject) => {
    let results = [];
    fs.createReadStream(filePath)
      .pipe(parser())
      .on("data", row => {
        return results.push({
          _id: mongoose.Types.ObjectId(),
          question: row["question"],
          answerOptions: [
            row["option1"],
            row["option2"],
            row["option3"],
            row["option4"]
          ],
          correctAnswers: row.answer.split(","),
          tags: row.tag.split(","),
          source: row.source,
          category: row.category,
          topic: row.topic,
          difficulty: row.difficulty
        });
      })
      .on("end", () => {
        let data = results.map(async item => {
          try {
            const ques = await new Question(item).save();
            return ques;
          } catch (e) {
            reject({ message: "Error saving question!" });
          }
        });

        resolve({
          count: data.length,
          message: "Question Created Successfully!"
        });
      });
  });
};
