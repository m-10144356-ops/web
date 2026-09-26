import React, { useState, useMemo } from "react";
import { quizBank, QuizQuestion } from "../data/quizBank";
import { CheckCircle2, XCircle, RotateCcw, Award, BookOpen, ArrowRight } from "lucide-react";

interface QuizResultItem {
  questionId: number;
  selectedOption: number;
  isCorrect: boolean;
  topicName: string;
}

export const QuizSection: React.FC = () => {
  const [selectedField, setSelectedField] = useState<string>("all");
  const [questionCount, setQuestionCount] = useState<number>(10);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isFinished, setIsFinished] = useState<boolean>(false);
  const [activeQuestions, setActiveQuestions] = useState<QuizQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [userSelection, setUserSelection] = useState<number | null>(null);
  const [isAnswerChecked, setIsAnswerChecked] = useState<boolean>(false);
  const [quizResults, setQuizResults] = useState<QuizResultItem[]>([]);

  // Filter pool
  const availableQuestions = useMemo(() => {
    if (selectedField === "all") return quizBank;
    return quizBank.filter((q) => q.field === selectedField);
  }, [selectedField]);

  const startQuiz = (onlyMistakes: boolean = false) => {
    let pool = [...availableQuestions];
    if (onlyMistakes && quizResults.length > 0) {
      const mistakeIds = new Set(
        quizResults.filter((r) => !r.isCorrect).map((r) => r.questionId)
      );
      pool = quizBank.filter((q) => mistakeIds.has(q.id));
    } else {
      // Shuffle pool
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
    setIsAnswerChecked(true);

    const resultItem: QuizResultItem = {
      questionId: currentQ.id,
      selectedOption: userSelection,
      isCorrect,
      topicName: currentQ.topicName
    };

    setQuizResults((prev) => [...prev, resultItem]);
  };

  const handleNextQuestion = () => {
    if (currentIndex < activeQuestions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setUserSelection(null);
      setIsAnswerChecked(false);
    } else {
      setIsFinished(true);
    }
  };

  const score = quizResults.filter((r) => r.isCorrect).length;
  const percentage =
    activeQuestions.length > 0 ? Math.round((score / activeQuestions.length) * 100) : 0;

  const mistakesCount = quizResults.filter((r) => !r.isCorrect).length;

  return (
    <section
      id="kuiz"
      className="tool-card p-5 md:p-6 mt-8"
      aria-labelledby="quiz-title"
    >
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
        <div>
          <span className="field-label">Latihan Interaktif</span>
          <h2 id="quiz-title" className="pixel-font text-2xl font-bold mt-3 text-white">
            Soalan Objektif SPM
          </h2>
          <p className="mt-2 text-slate-300 max-w-2xl text-sm leading-relaxed">
            Uji pemahaman dengan 50+ koleksi soalan objektif aneka pilihan mengikut silibus Pendidikan Islam Tingkatan 4 & 5.
          </p>
        </div>
        <span className="inv-box inline-flex items-center gap-2 px-3 py-2 text-xs font-bold">
          <svg className="px" width="16" height="16" aria-hidden="true">
            <use href="#px-pickaxe" />
          </svg>
          Format Ujian SPM
        </span>
      </div>

      {!isPlaying && !isFinished && (
        <div className="mt-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div>
              <label className="form-label block mb-2 text-sm font-bold" htmlFor="quiz-field">
                Pilih Bidang Ulang Kaji
              </label>
              <select
                id="quiz-field"
                className="control cursor-pointer"
                value={selectedField}
                onChange={(e) => setSelectedField(e.target.value)}
              >
                <option value="all">Semua Bidang ({quizBank.length} Soalan)</option>
                <option value="al-quran">1. Bidang Al-Quran</option>
                <option value="hadis">2. Bidang Hadis</option>
                <option value="akidah">3. Bidang Akidah</option>
                <option value="fikah">4. Bidang Fikah</option>
                <option value="sirah">5. Bidang Sirah & Tamadun Islam</option>
                <option value="akhlak">6. Bidang Akhlak Islamiyyah</option>
              </select>
            </div>

            <div>
              <label className="form-label block mb-2 text-sm font-bold" htmlFor="quiz-count">
                Bilangan Soalan
              </label>
              <select
                id="quiz-count"
                className="control cursor-pointer"
                value={questionCount}
                onChange={(e) => setQuestionCount(Number(e.target.value))}
              >
                <option value={5}>5 soalan (Ujian Pantas)</option>
                <option value={10}>10 soalan (Standard)</option>
                <option value={20}>20 soalan (Ulang Kaji Intensif)</option>
                <option value={50}>50 soalan (Simulasi Penuh SPM)</option>
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

      {/* Quiz gameplay */}
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
                Semak Jawapan
              </button>
            ) : (
              <button
                onClick={handleNextQuestion}
                className="action-btn btn-navy"
                type="button"
              >
                {currentIndex < activeQuestions.length - 1 ? (
                  <>
                    Soalan Seterusnya
                    <ArrowRight className="w-4 h-4" />
                  </>
                ) : (
                  "Lihat Keputusan Penuh"
                )}
              </button>
            )}

            <button
              onClick={() => {
                setIsPlaying(false);
                setIsFinished(false);
              }}
              className="action-btn btn-light ml-auto"
              type="button"
            >
              Tamatkan Kuiz
            </button>
          </div>
        </div>
      )}

      {/* Summary report */}
      {isFinished && (
        <div className="quiz-summary mt-6 p-6">
          <div className="flex items-center gap-3 mb-4">
            <Award className="w-8 h-8 text-[#ffd447]" />
            <div>
              <h3 className="font-bold pixel-font text-xl text-[#ffd447]">
                Ringkasan Prestasi Kuiz SPM
              </h3>
              <p className="text-xs text-amber-100">Analisis penguasaan fakta dan hukum</p>
            </div>
          </div>

          <div className="grid sm:grid-cols-3 gap-3 my-5 text-center">
            <div className="bg-[#2d1b0d] p-4 border border-[#2b1a0c]">
              <span className="text-xs text-amber-200">Markah</span>
              <p className="text-2xl font-bold pixel-font text-[#ffd447]">
                {score} / {activeQuestions.length}
              </p>
            </div>
            <div className="bg-[#2d1b0d] p-4 border border-[#2b1a0c]">
              <span className="text-xs text-amber-200">Peratusan</span>
              <p className="text-2xl font-bold pixel-font text-[#2fd17a]">
                {percentage}%
              </p>
            </div>
            <div className="bg-[#2d1b0d] p-4 border border-[#2b1a0c]">
              <span className="text-xs text-amber-200">Gred Anggaran</span>
              <p className="text-2xl font-bold pixel-font text-white">
                {percentage >= 85 ? "A+ (Cemerlang Tertinggi)" : percentage >= 70 ? "A (Cemerlang)" : percentage >= 50 ? "Lulus Baik" : "Perlu Ulang Kaji"}
              </p>
            </div>
          </div>

          <div className="space-y-2 text-sm text-amber-100/90 leading-relaxed bg-[#3a2211] p-4 border border-[#2b1a0c]">
            <p>
              <b>Topik yang dikuasai dengan baik:</b>{" "}
              {Array.from(
                new Set(quizResults.filter((r) => r.isCorrect).map((r) => r.topicName))
              ).join(", ") || "Teruskan latihan bersungguh-sungguh."}
            </p>
            {mistakesCount > 0 && (
              <p className="text-amber-300">
                <b>Topik yang disyorkan ulang kaji semula:</b>{" "}
                {Array.from(
                  new Set(quizResults.filter((r) => !r.isCorrect).map((r) => r.topicName))
                ).join(", ")}
              </p>
            )}
          </div>

          <div className="flex flex-wrap gap-3 mt-6">
            <button
              onClick={() => startQuiz(false)}
              className="action-btn btn-navy"
              type="button"
            >
              <RotateCcw className="w-4 h-4" />
              Mula Semula Kuiz
            </button>
            {mistakesCount > 0 && (
              <button
                onClick={() => startQuiz(true)}
                className="action-btn btn-light"
                type="button"
              >
                <BookOpen className="w-4 h-4" />
                Ulang {mistakesCount} Soalan yang Silap
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
              Tukar Tetapan Bidang
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
