import { QuizState } from "../data/quizReducer";

const defaultQuizMinutes = 5;

export const initQuizState: QuizState = {
  currentQuestion: 0,
  points: 0,
  isStarted: false,
  timeLeft: defaultQuizMinutes * 60,
};
