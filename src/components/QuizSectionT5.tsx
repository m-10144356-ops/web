import React, { useState, useMemo } from "react";
import { quizBankT5 } from "../data/quizBankT5";
import { QuizQuestion } from "../data/quizBank";
import { CheckCircle2, XCircle, RotateCcw, Award, Check } from "lucide-react";

interface QuizResultItem {
  questionId: number;
  selectedOption: number;
  isCorrect: boolean;
  topicName: string;
}

export const QuizSectionT5: React.FC = () => {
  const [selectedField, setSelectedField] = useState<string>("all");
  const [questionCount, setQuestionCount] = useState<number>(10);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isFinished, setIsFinished] = useState<boolean>(false);
  const [activeQuestions, setActiveQuestions] = useState<QuizQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [userSelection, setUserSelection] = useState<number | null>(null);
  const [isAnswerChecked, setIsAnswerChecked] = useState<boolean>(false);
  const [quizResults, setQuizResults] = useState<QuizResultItem[]>([]);

  const availableQuestions = useMemo(() => {
    if (selectedField === "all") return quizBankT5;
    return quizBankT5.filter((q) => q.field === selectedField);
  }, [selectedField]);

  const startQuiz = (onlyMistakes: boolean = false) => {
    let pool = [...availableQuestions];
    if (onlyMistakes && quizResults.length > 0) {
      const mistakeIds = new Set(
        quizResults.filter((r) => !r.isCorrect).map((r) => r.questionId)
      );
      pool = quizBankT5.filter((q) => mistakeIds.has(q.id));
    } else {
      pool = pool.sort(() => Math.random() - 0.5);
    }

    const selected = pool.slice(0, Math.min(questionCount, pool.length));
    setActiveQuestions(selected);
    setCurrentIndex(0);
    setUserSelection(null);
    setIsAnswerChecked(false);
    setQuizResults([]);
    setIsPlaying(true);
    setIsFinished(false);
  };

  const currentQ: QuizQuestion | undefined = activeQuestions[currentIndex];

  const handleSelectOption = (index: number) => {
    if (isAnswerChecked) return;
    setUserSelection(index);
  };

  const handleCheckAnswer = () => {
    if (userSelection === null || !currentQ) return;
    const isCorrect = userSelection === currentQ.correctIndex;

    setQuizResults((prev) => [
      ...prev,
      {
        questionId: currentQ.id,
        selectedOption: userSelection,
        isCorrect,
        topicName: currentQ.topicName
      }
    ]);
    setIsAnswerChecked(true);
  };

  const handleNext = () => {
    if (currentIndex < activeQuestions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setUserSelection(null);
      setIsAnswerChecked(false);
    } else {
      setIsFinished(true);
      setIsPlaying(false);
    }
  };

  const score = quizResults.filter((r) => r.isCorrect).length;
  const total = activeQuestions.length;
  const percentage = total > 0 ? Math.round((score / total) * 100) : 0;

  return (
    <section
      id="quiz-t5"
      className="tool-card p-5 md:p-6 mt-8"
      aria-labelledby="quiz-t5-title"
    >
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
        <div>
          <span className="field-label">Ujian Kefahaman SPM T5</span>
          <h2 id="quiz-t5-title" className="pixel-font text-2xl font-bold mt-3 text-white">
            Soalan Objektif SPM (Tingkatan 5)
          </h2>
          <p className="mt-2 text-slate-300 max-w-2xl text-sm leading-relaxed">
            Simulasi soalan aneka pilihan format SPM Kertas 1 bagi topik Tingkatan 5 dengan semakan jawapan dan huraian terus.
          </p>
        </div>
      </div>

      {/* Setup screen */}
      {!isPlaying && !isFinished && (
        <div className="mt-6 p-5 bg-[#1f2328] border-2 border-stone-600">
          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <label className="form-label block mb-2 text-sm font-bold" htmlFor="quiz-field-t5">
                Pilih Bidang Ujian
              </label>
              <select
                id="quiz-field-t5"
                className="flashcard-control cursor-pointer"
                value={selectedField}
                onChange={(e) => setSelectedField(e.target.value)}
              >
                <option value="all">Semua Bidang ({quizBankT5.length} Soalan)</option>
                <option value="al-quran">Al-Quran</option>
                <option value="hadis">Hadis</option>
                <option value="akidah">Akidah</option>
                <option value="fikah">Fikah</option>
                <option value="sirah">Sirah & Tamadun Islam</option>
                <option value="akhlak">Akhlak Islamiyyah</option>
              </select>
            </div>

            <div>
              <label className="form-label block mb-2 text-sm font-bold" htmlFor="quiz-count-t5">
                Bilangan Soalan
              </label>
              <select
                id="quiz-count-t5"
                className="flashcard-control cursor-pointer"
                value={questionCount}
                onChange={(e) => setQuestionCount(Number(e.target.value))}
              >
                <option value={5}>5 Soalan (Ujian Pantas)</option>
                <option value={10}>10 Soalan (Standard)</option>
                <option value={20}>Semua ({availableQuestions.length} Soalan)</option>
              </select>
            </div>

            <div className="flex flex-col justify-end">
              <p className="text-sm font-bold text-[#ffd447] pb-2">
                Soalan sedia ada: {availableQuestions.length} soalan
              </p>
              <button
                onClick={() => startQuiz(false)}
                className="action-btn btn-navy w-full"
                type="button"
              >
                Mula Kuiz Sekarang
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Quiz gameplay - Identical layout to T4 screenshot */}
      {isPlaying && !isFinished && currentQ && (
        <div className="mt-6">
          <div className="flex flex-wrap justify-between items-center gap-3 mb-3">
            <span className="text-sm font-bold pixel-font text-[#ffd447]">
              Soalan {currentIndex + 1} daripada {activeQuestions.length}
            </span>
            <span className="text-xs bg-[#1f2328] px-3 py-1 border border-stone-600 font-bold text-slate-300">
              Markah Semasa: {score} / {currentIndex + (isAnswerChecked ? 1 : 0)}
            </span>
          </div>

          <div className="quiz-box p-5 md:p-6">
            <p className="text-xs font-bold text-[#2fd17a] mb-2 uppercase tracking-wide">
              {currentQ.field.toUpperCase()} • {currentQ.topicName}
            </p>
            <h3 className="font-bold text-lg md:text-xl text-white leading-relaxed mb-5">
              {currentQ.question}
            </h3>

            <div className="grid gap-3" role="radiogroup">
              {currentQ.options.map((opt, i) => {
                const letter = String.fromCharCode(65 + i);
                const isSelected = userSelection === i;
                let optionStyle = "quiz-option-btn";

                if (isAnswerChecked) {
                  if (i === currentQ.correctIndex) {
                    optionStyle += " !bg-[#137a44] !border-[#2fd17a] text-white";
                  } else if (isSelected) {
                    optionStyle += " !bg-[#7a2410] !border-red-500 text-white";
                  }
                } else if (isSelected) {
                  optionStyle += " selected";
                }

                return (
                  <button
                    key={i}
                    type="button"
                    onClick={() => handleSelectOption(i)}
                    className={optionStyle}
                    aria-checked={isSelected}
                  >
                    <span className="font-mono text-[#ffd447] mr-2 font-bold">{letter}.</span>
                    <span>{opt}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Feedback panel */}
          {isAnswerChecked && (
            <div className="quiz-feedback mt-4 p-4 text-sm leading-relaxed border-2 border-stone-600">
              <div className="flex items-center gap-2 mb-2 font-bold text-base">
                {userSelection === currentQ.correctIndex ? (
                  <span className="text-[#2fd17a] flex items-center gap-1.5">
                    <CheckCircle2 className="w-5 h-5" />
                    Tahniah, Jawapan Anda Betul!
                  </span>
                ) : (
                  <span className="text-red-400 flex items-center gap-1.5">
                    <XCircle className="w-5 h-5" />
                    Kurang Tepat. Jawapan Sebenar: {String.fromCharCode(65 + currentQ.correctIndex)}. {currentQ.options[currentQ.correctIndex]}
                  </span>
                )}
              </div>
              <p className="text-slate-200 mt-2">
                <b>Huraian & Dalil:</b> {currentQ.explanation}
              </p>
            </div>
          )}

          {/* Controls */}
          <div className="flex flex-wrap gap-3 mt-5">
            {!isAnswerChecked ? (
              <button
                onClick={handleCheckAnswer}
                disabled={userSelection === null}
                className="action-btn btn-navy"
                type="button"
              >
                <Check className="w-4 h-4" />
                Semak Jawapan
              </button>
            ) : (
              <button
                onClick={handleNext}
                className="action-btn btn-navy"
                type="button"
              >
                {currentIndex < activeQuestions.length - 1 ? "Soalan Seterusnya →" : "Tamat Kuiz & Lihat Keputusan"}
              </button>
            )}

            <button
              onClick={() => {
                setIsPlaying(false);
                setIsFinished(false);
              }}
              className="action-btn btn-light"
              type="button"
            >
              Berhenti
            </button>
          </div>
        </div>
      )}

      {/* Results screen */}
      {isFinished && (
        <div className="mt-6 p-6 bg-[#1f2328] border-2 border-stone-600 text-center">
          <div className="inline-block p-4 bg-[#ffd447] text-stone-900 mb-3 border-2 border-stone-800">
            <Award className="w-10 h-10" />
          </div>
          <h3 className="pixel-font text-2xl font-bold text-white mb-2">
            Keputusan Kuiz Objektif Tingkatan 5
          </h3>
          <p className="text-3xl font-extrabold font-mono text-[#ffd447] my-3">
            {score} / {total} ({percentage}%)
          </p>

          <p className="text-base text-slate-300 max-w-md mx-auto mb-6">
            {percentage >= 80
              ? "Mumtaz! Penguasaan silibus Tingkatan 5 anda sangat cemerlang."
              : percentage >= 50
              ? "Tahniah! Boleh pertingkatkan lagi kefahaman pada soalan yang tersilap."
              : "Jangan putus asa, rujuk semula nota ringkas dan flashcards Tingkatan 5."}
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            <button
              onClick={() => startQuiz(false)}
              className="action-btn btn-navy"
              type="button"
            >
              <RotateCcw className="w-4 h-4" />
              Uji Semula Semua
            </button>
            {quizResults.some((r) => !r.isCorrect) && (
              <button
                onClick={() => startQuiz(true)}
                className="action-btn btn-light"
                type="button"
              >
                Ulang Soalan Salah Sahaja ({quizResults.filter((r) => !r.isCorrect).length})
              </button>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
