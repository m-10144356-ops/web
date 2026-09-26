import React, { useState, useMemo, useEffect } from "react";
import { flashcardsDataT5 } from "../data/flashcardsT5";
import { Flashcard } from "../data/flashcards";
import { Shuffle, RotateCw, Check, ArrowLeft, ArrowRight } from "lucide-react";

export const FlashcardsSectionT5: React.FC = () => {
  const [selectedField, setSelectedField] = useState<string>("all");
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isFlipped, setIsFlipped] = useState<boolean>(false);
  const [knownCards, setKnownCards] = useState<Set<number>>(() => {
    try {
      return new Set(JSON.parse(localStorage.getItem("pi-spm-known-flashcards-t5") || "[]"));
    } catch {
      return new Set();
    }
  });
  const [repeatCards, setRepeatCards] = useState<Set<number>>(() => {
    try {
      return new Set(JSON.parse(localStorage.getItem("pi-spm-repeat-flashcards-t5") || "[]"));
    } catch {
      return new Set();
    }
  });
  const [statusMessage, setStatusMessage] = useState<string>("");

  const fields = useMemo(() => {
    return Array.from(new Set(flashcardsDataT5.map((c) => c.field)));
  }, []);

  const deck = useMemo(() => {
    if (selectedField === "all") return flashcardsDataT5;
    return flashcardsDataT5.filter((c) => c.field === selectedField);
  }, [selectedField]);

  useEffect(() => {
    setCurrentIndex(0);
    setIsFlipped(false);
    setStatusMessage("");
  }, [selectedField]);

  const currentCard: Flashcard | undefined = deck[currentIndex];

  const handleFlip = () => {
    if (currentCard) {
      setIsFlipped((prev) => !prev);
    }
  };

  const handleNext = () => {
    if (currentIndex < deck.length - 1) {
      setIsFlipped(false);
      setCurrentIndex((prev) => prev + 1);
      setStatusMessage("");
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setIsFlipped(false);
      setCurrentIndex((prev) => prev - 1);
      setStatusMessage("");
    }
  };

  const markKnown = () => {
    if (!currentCard) return;
    const nextKnown = new Set(knownCards);
    nextKnown.add(currentCard.id);
    const nextRepeat = new Set(repeatCards);
    nextRepeat.delete(currentCard.id);

    setKnownCards(nextKnown);
    setRepeatCards(nextRepeat);
    localStorage.setItem("pi-spm-known-flashcards-t5", JSON.stringify(Array.from(nextKnown)));
    localStorage.setItem("pi-spm-repeat-flashcards-t5", JSON.stringify(Array.from(nextRepeat)));
    setStatusMessage("Kad ditandakan: Sudah Ingat! 🎉");

    setTimeout(() => {
      if (currentIndex < deck.length - 1) {
        handleNext();
      }
    }, 400);
  };

  const markRepeat = () => {
    if (!currentCard) return;
    const nextRepeat = new Set(repeatCards);
    nextRepeat.add(currentCard.id);
    const nextKnown = new Set(knownCards);
    nextKnown.delete(currentCard.id);

    setRepeatCards(nextRepeat);
    setKnownCards(nextKnown);
    localStorage.setItem("pi-spm-repeat-flashcards-t5", JSON.stringify(Array.from(nextRepeat)));
    localStorage.setItem("pi-spm-known-flashcards-t5", JSON.stringify(Array.from(nextKnown)));
    setStatusMessage("Kad disimpan dalam senarai Ulang Semula 🔁");

    setTimeout(() => {
      if (currentIndex < deck.length - 1) {
        handleNext();
      }
    }, 400);
  };

  const resetAllProgress = () => {
    setKnownCards(new Set());
    setRepeatCards(new Set());
    localStorage.removeItem("pi-spm-known-flashcards-t5");
    localStorage.removeItem("pi-spm-repeat-flashcards-t5");
    setStatusMessage("Kemajuan kad imbasan Tingkatan 5 telah diset semula.");
  };

  const isCardKnown = currentCard ? knownCards.has(currentCard.id) : false;
  const isCardRepeat = currentCard ? repeatCards.has(currentCard.id) : false;

  return (
    <section className="memory-card p-5 md:p-6 mt-8" aria-labelledby="flashcards-t5-title">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
        <div className="flex items-center gap-3">
          <span className="chapter-icon">
            <svg className="px" width="24" height="24" aria-hidden="true">
              <use href="#px-book" />
            </svg>
          </span>
          <div>
            <div className="flex items-center gap-2">
              <h2 id="flashcards-t5-title" className="pixel-font text-2xl font-bold text-[#2fd17a]">
                Flashcards Interaktif (Tingkatan 5)
              </h2>
              <span className="badge-tag bg-[#2fd17a] text-[#062b17] font-extrabold text-[10px] px-2 py-0.5">
                {deck.length} Kad
              </span>
            </div>
            <p className="text-xs text-emerald-200/80 mt-0.5">
              Uji daya ingatan konsep, maksud istilah & dalil SPM Tingkatan 5
            </p>
          </div>
        </div>

        {/* Filter by Field */}
        <div className="flex items-center gap-2">
          <span className="text-xs text-slate-300 font-bold hidden sm:inline">Bidang:</span>
          <select
            className="control text-xs py-1 px-2.5 max-w-[170px]"
            value={selectedField}
            onChange={(e) => setSelectedField(e.target.value)}
          >
            <option value="all">Semua Bidang ({flashcardsDataT5.length})</option>
            {fields.map((f) => (
              <option key={f} value={f}>
                {f}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Progress Counter & Badges */}
      <div className="flex flex-wrap items-center justify-between gap-2 p-2.5 bg-[#14243f] border-2 border-stone-700 text-xs mb-4">
        <span className="font-bold text-white">
          Kad {currentIndex + 1} daripada {deck.length}
        </span>
        <div className="flex items-center gap-3">
          <span className="text-[#2fd17a] font-bold">
            ✓ Sudah Ingat: {knownCards.size}
          </span>
          <span className="text-amber-400 font-bold">
            ↺ Ulang Lagi: {repeatCards.size}
          </span>
        </div>
      </div>

      {/* Flashcard Area */}
      {currentCard ? (
        <div className="flex flex-col items-center">
          <div
            onClick={handleFlip}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                handleFlip();
              }
            }}
            className={`w-full min-h-[220px] md:min-h-[260px] p-6 md:p-8 cursor-pointer transition-all duration-300 flex flex-col justify-between border-4 ${
              isFlipped
                ? "bg-[#183525] border-[#2fd17a] shadow-[6px_6px_0_#062b17]"
                : "bg-[#25282f] border-stone-600 hover:border-[#2fd17a] shadow-[6px_6px_0_#14161a]"
            }`}
          >
            <div className="flex items-center justify-between border-b border-stone-600/60 pb-2">
              <span className="text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 bg-[#111] text-emerald-300 border border-stone-600">
                {currentCard.field} • SPM T5
              </span>
              <span className="text-xs text-slate-300 flex items-center gap-1">
                <RotateCw className="w-3.5 h-3.5 text-emerald-400" />
                {isFlipped ? "Klik untuk lihat soalan" : "Klik untuk buka jawapan"}
              </span>
            </div>

            <div className="py-6 text-center">
              {!isFlipped ? (
                <div>
                  <span className="text-xs uppercase text-[#ffd447] font-bold tracking-widest block mb-2 font-mono">
                    [ SOALAN / KONSEP ]
                  </span>
                  <p className="text-lg md:text-xl font-bold text-white leading-relaxed">
                    {currentCard.front}
                  </p>
                </div>
              ) : (
                <div>
                  <span className="text-xs uppercase text-[#2fd17a] font-bold tracking-widest block mb-2 font-mono">
                    [ JAWAPAN LENGKAP & KATA KUNCI ]
                  </span>
                  <p className="text-base md:text-lg text-emerald-100 leading-relaxed font-medium">
                    {currentCard.back}
                  </p>
                </div>
              )}
            </div>

            <div className="flex items-center justify-between text-[11px] text-slate-400 border-t border-stone-600/60 pt-2">
              <span>Status: {isCardKnown ? "✅ Dikuasai" : isCardRepeat ? "⚠️ Perlu Ulang" : "⚪ Belum Ditanda"}</span>
              <span>Tekan Kad atau [Ruang] untuk Pusing</span>
            </div>
          </div>

          {/* Status Toast */}
          {statusMessage && (
            <p className="text-xs font-bold text-[#2fd17a] mt-2 animate-pulse" aria-live="polite">
              {statusMessage}
            </p>
          )}

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-4 w-full">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className="action-btn btn-light text-xs disabled:opacity-40"
              type="button"
            >
              <ArrowLeft className="w-3.5 h-3.5 inline mr-1" />
              Sebelum
            </button>

            <button
              onClick={handleFlip}
              className="action-btn btn-navy text-xs"
              type="button"
            >
              <RotateCw className="w-3.5 h-3.5 inline mr-1" />
              Pusing Kad
            </button>

            <button
              onClick={markRepeat}
              className={`action-btn text-xs ${
                isCardRepeat ? "bg-amber-600 text-white" : "btn-light"
              }`}
              type="button"
            >
              ↺ Ulang Lagi
            </button>

            <button
              onClick={markKnown}
              className={`action-btn text-xs ${
                isCardKnown ? "bg-emerald-600 text-white" : "btn-light"
              }`}
              type="button"
            >
              <Check className="w-3.5 h-3.5 inline mr-1 text-emerald-400" />
              Sudah Ingat
            </button>

            <button
              onClick={handleNext}
              disabled={currentIndex === deck.length - 1}
              className="action-btn btn-light text-xs disabled:opacity-40"
              type="button"
            >
              Seterusnya
              <ArrowRight className="w-3.5 h-3.5 inline ml-1" />
            </button>
          </div>
        </div>
      ) : (
        <div className="text-center py-8 text-slate-300">
          Tiada kad dalam kategori ini.
        </div>
      )}
    </section>
  );
};
