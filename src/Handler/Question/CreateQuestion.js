import Question from "../../Model/Question";

export default async (req, h) => {
  const { question, answerOptions, correctAnswers } = req.payload;

  const newQuestion = new Question({
    question,
    answerOptions,
    correctAnswers
  });
  await newQuestion.save();
  return h.response({ Question: newQuestion });
};
