import { QuizQuestion } from "../data/quizBank";

/**
 * Shuffles an array in place or returns a shuffled copy using Fisher-Yates algorithm.
 */
function shuffleArray<T>(array: T[]): T[] {
  const result = [...array];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

/**
 * Randomizes the order of options for each question so that the correct answer
 * is evenly distributed across A, B, C, D instead of always being option A.
 * CorrectIndex is automatically updated to point to the new location of the correct answer.
 */
export function shuffleQuestionOptions(question: QuizQuestion): QuizQuestion {
  const originalCorrectOption = question.options[question.correctIndex];
  
  // Create an indexed list of options and shuffle it
  const indexedOptions = question.options.map((opt, idx) => ({
    text: opt,
    isCorrect: idx === question.correctIndex
  }));

  const shuffled = shuffleArray(indexedOptions);
  const newOptions = shuffled.map((item) => item.text);
  const newCorrectIndex = shuffled.findIndex((item) => item.isCorrect);

  return {
    ...question,
    options: newOptions,
    correctIndex: newCorrectIndex !== -1 ? newCorrectIndex : 0
  };
}

/**
 * Prepares an active quiz pool: selects questions and shuffles their options.
 */
export function prepareQuizQuestions(
  questions: QuizQuestion[],
  count: number
): QuizQuestion[] {
  const shuffledPool = shuffleArray(questions);
  const selected = shuffledPool.slice(0, Math.min(count, shuffledPool.length));
  return selected.map(shuffleQuestionOptions);
}
