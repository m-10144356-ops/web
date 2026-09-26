import React, { useState, useMemo } from "react";
import { quizBankT5 } from "../data/quizBankT5";
import { QuizQuestion } from "../data/quizBank";
import { CheckCircle2, XCircle, RotateCcw, Award, BookOpen, ArrowRight } from "lucide-react";

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

  const handleSelectOption = (idx: number) => {
    if (isAnswerChecked) return;
    setUserSelection(idx);
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

  const handleNextQuestion = () => {
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
    <section className="memory-card p-5 md:p-6 mt-8" aria-labelledby="quiz-t5-title">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
        <div className="flex items-center gap-3">
          <span className="chapter-icon">
            <svg className="px" width="24" height="24" aria-hidden="true">
              <use href="#px-emerald" />
            </svg>
          </span>
          <div>
            <div className="flex items-center gap-2">
              <h2 id="quiz-t5-title" className="pixel-font text-2xl font-bold text-[#2fd17a]">
                Latihan Soalan Objektif SPM (Tingkatan 5)
              </h2>
              <span className="badge-tag bg-[#2fd17a] text-[#062b17] font-extrabold text-[10px] px-2 py-0.5">
                Kertas 1 SPM
              </span>
            </div>
            <p className="text-xs text-emerald-200/80 mt-0.5">
              Simulasi soalan aneka pilihan KSSM Tingkatan 5 dengan penerangan jawapan segera
            </p>
          </div>
        </div>
      </div>

      {/* STATE 1: SETUP SCREEN */}
      {!isPlaying && !isFinished && (
        <div className="bg-[#1f2328] border-2 border-stone-600 p-6 space-y-5">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="form-label block text-xs font-bold text-white mb-2" htmlFor="quiz-t5-field">
                Pilih Bidang Ujian
              </label>
              <select
                id="quiz-t5-field"
                className="control text-xs"
                value={selectedField}
                onChange={(e) => setSelectedField(e.target.value)}
              >
                <option value="all">Semua Bidang Tingkatan 5 ({quizBankT5.length} Soalan)</option>
                <option value="al-quran">Al-Quran & Hadis</option>
                <option value="akidah">Akidah</option>
                <option value="fikah">Fikah</option>
                <option value="sirah">Sirah & Tamadun</option>
                <option value="akhlak">Akhlak Islamiyah</option>
              </select>
            </div>

            <div>
              <label className="form-label block text-xs font-bold text-white mb-2" htmlFor="quiz-t5-count">
                Bilangan Soalan
              </label>
              <select
                id="quiz-t5-count"
                className="control text-xs"
                value={questionCount}
                onChange={(e) => setQuestionCount(Number(e.target.value))}
              >
                <option value={5}>5 Soalan (Ujian Pantas)</option>
                <option value={10}>10 Soalan (Standard)</option>
                <option value={20}>Semua ({availableQuestions.length} Soalan Penuh)</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t border-stone-700">
            <span className="text-xs text-slate-300">
              {availableQuestions.length} soalan tersedia untuk pilihan ini.
            </span>

            <button
              onClick={() => startQuiz(false)}
              disabled={availableQuestions.length === 0}
              className="action-btn btn-navy text-sm font-bold px-6 py-2 w-full sm:w-auto"
              type="button"
            >
              Mula Kuiz Sekarang
              <ArrowRight className="w-4 h-4 inline ml-2" />
            </button>
          </div>
        </div>
      )}

      {/* STATE 2: ACTIVE QUESTION SCREEN */}
      {isPlaying && currentQ && (
        <div className="bg-[#1f2328] border-2 border-stone-600 p-5 md:p-6 space-y-4">
          <div className="flex items-center justify-between border-b border-stone-700 pb-2 text-xs">
            <span className="font-bold text-[#ffd447] font-mono">
              SOALAN {currentIndex + 1} / {activeQuestions.length}
            </span>
            <span className="bg-[#111] text-emerald-300 px-2 py-0.5 border border-stone-700">
              {currentQ.topicName}
            </span>
          </div>

          <p className="text-base md:text-lg font-bold text-white leading-relaxed pt-2">
            {currentQ.question}
          </p>

          <div className="space-y-2.5 pt-2">
            {currentQ.options.map((option, idx) => {
              const isSelected = userSelection === idx;
              let optionClass = "bg-[#25282f] border-stone-600 hover:border-emerald-400 text-slate-200";

              if (isAnswerChecked) {
                if (idx === currentQ.correctIndex) {
                  optionClass = "bg-emerald-950/80 border-emerald-500 text-emerald-100 font-bold";
                } else if (isSelected) {
                  optionClass = "bg-rose-950/80 border-rose-500 text-rose-100";
                }
              } else if (isSelected) {
                optionClass = "bg-[#183525] border-[#2fd17a] text-white font-bold";
              }

              return (
                <button
                  key={idx}
                  onClick={() => handleSelectOption(idx)}
                  disabled={isAnswerChecked}
                  className={`w-full text-left p-3 border-2 transition-all flex items-start gap-3 text-xs sm:text-sm ${optionClass}`}
                  type="button"
                >
                  <span className="font-bold font-mono text-emerald-400 min-w-5">
                    {String.fromCharCode(65 + idx)}.
                  </span>
                  <span>{option}</span>
                </button>
              );
            })}
          </div>

          {/* Explanation Box */}
          {isAnswerChecked && (
            <div
              className={`p-3.5 border-2 text-xs leading-relaxed ${
                userSelection === currentQ.correctIndex
                  ? "bg-emerald-950/60 border-emerald-500 text-emerald-200"
                  : "bg-rose-950/60 border-rose-500 text-rose-200"
              }`}
            >
              <div className="font-bold mb-1 flex items-center gap-1.5">
                {userSelection === currentQ.correctIndex ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Jawapan Tepat!</span>
                  </>
                ) : (
                  <>
                    <XCircle className="w-4 h-4 text-rose-400" />
                    <span>Jawapan Kurang Tepat.</span>
                  </>
                )}
              </div>
              <p className="text-slate-200">{currentQ.explanation}</p>
            </div>
          )}

          {/* Navigation Controls */}
          <div className="flex items-center justify-between pt-3 border-t border-stone-700">
            <button
              onClick={() => {
                setIsPlaying(false);
                setIsFinished(false);
              }}
              className="action-btn btn-light text-xs"
              type="button"
            >
              Berhenti
            </button>

            {!isAnswerChecked ? (
              <button
                onClick={handleCheckAnswer}
                disabled={userSelection === null}
                className="action-btn btn-navy text-xs font-bold disabled:opacity-40"
                type="button"
              >
                Semak Jawapan
              </button>
            ) : (
              <button
                onClick={handleNextQuestion}
                className="action-btn btn-navy text-xs font-bold"
                type="button"
              >
                {currentIndex < activeQuestions.length - 1 ? (
                  <>
                    Soalan Seterusnya
                    <ArrowRight className="w-3.5 h-3.5 inline ml-1" />
                  </>
                ) : (
                  "Lihat Keputusan Penuh"
                )}
              </button>
            )}
          </div>
        </div>
      )}

      {/* STATE 3: RESULT SCREEN */}
      {isFinished && (
        <div className="bg-[#1f2328] border-2 border-stone-600 p-6 space-y-6 text-center">
          <div className="inline-block p-3 bg-emerald-950 border-2 border-[#2fd17a] shadow-[4px_4px_0_#062b17]">
            <Award className="w-10 h-10 text-[#ffd447] mx-auto" />
          </div>

          <div>
            <h3 className="pixel-font text-2xl font-bold text-white">
              Keputusan Latihan Tingkatan 5 Selesai!
            </h3>
            <p className="text-xs text-slate-300 mt-1">
              Markah Anda: <b>{score} / {total}</b> ({percentage}%)
            </p>
          </div>

          <div className="progress-track max-w-md mx-auto">
            <div className="progress-fill" style={{ width: `${percentage}%` }} />
          </div>

          <p className="text-sm font-semibold text-emerald-300 max-w-md mx-auto">
            {percentage >= 80
              ? "Mumtaz! Penguasaan silibus Tingkatan 5 anda sangat mantap."
              : percentage >= 50
              ? "Tahniah! Teruskan ulang kaji tajuk-tajuk yang masih ragu."
              : "Jangan putus asa, semak semula nota ringkas dan flashcards Tingkatan 5."}
          </p>

          <div className="flex flex-wrap justify-center gap-3 pt-2">
            <button
              onClick={() => startQuiz(false)}
              className="action-btn btn-navy text-xs font-bold"
              type="button"
            >
              <RotateCcw className="w-3.5 h-3.5 inline mr-1" />
              Cuba Kuiz Sekali Lagi
            </button>

            {score < total && (
              <button
                onClick={() => startQuiz(true)}
                className="action-btn btn-light text-xs font-bold"
                type="button"
              >
                Ulang Soalan Salah Sahaja ({total - score})
              </button>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
