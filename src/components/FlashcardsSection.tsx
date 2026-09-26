import React, { useState, useMemo, useEffect } from "react";
import { flashcardsData, Flashcard } from "../data/flashcards";
import { Shuffle, RotateCw, Check, ArrowLeft, ArrowRight } from "lucide-react";

export const FlashcardsSection: React.FC = () => {
  const [selectedField, setSelectedField] = useState<string>("all");
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isFlipped, setIsFlipped] = useState<boolean>(false);
  const [knownCards, setKnownCards] = useState<Set<number>>(() => {
    try {
      return new Set(JSON.parse(localStorage.getItem("pi-spm-known-flashcards") || "[]"));
    } catch {
      return new Set();
    }
  });
  const [repeatCards, setRepeatCards] = useState<Set<number>>(() => {
    try {
      return new Set(JSON.parse(localStorage.getItem("pi-spm-repeat-flashcards") || "[]"));
    } catch {
      return new Set();
    }
  });
  const [statusMessage, setStatusMessage] = useState<string>("");

  const fields = useMemo(() => {
    return Array.from(new Set(flashcardsData.map((c) => c.field)));
  }, []);

  const deck = useMemo(() => {
    if (selectedField === "all") return flashcardsData;
    return flashcardsData.filter((c) => c.field === selectedField);
  }, [selectedField]);

  // Reset index when filter changes
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

  const handleMarkKnown = () => {
    if (!currentCard) return;
    const newKnown = new Set(knownCards);
    newKnown.add(currentCard.id);
    const newRepeat = new Set(repeatCards);
    newRepeat.delete(currentCard.id);

    setKnownCards(newKnown);
    setRepeatCards(newRepeat);
    localStorage.setItem("pi-spm-known-flashcards", JSON.stringify([...newKnown]));
    localStorage.setItem("pi-spm-repeat-flashcards", JSON.stringify([...newRepeat]));

    setStatusMessage("Kad ditandakan sebagai dikuasai! ✓");
    if (currentIndex < deck.length - 1) {
      setTimeout(() => {
        handleNext();
      }, 300);
    }
  };

  const handleMarkRepeat = () => {
    if (!currentCard) return;
    const newRepeat = new Set(repeatCards);
    newRepeat.add(currentCard.id);
    const newKnown = new Set(knownCards);
    newKnown.delete(currentCard.id);

    setRepeatCards(newRepeat);
    setKnownCards(newKnown);
    localStorage.setItem("pi-spm-known-flashcards", JSON.stringify([...newKnown]));
    localStorage.setItem("pi-spm-repeat-flashcards", JSON.stringify([...newRepeat]));

    setStatusMessage("Kad ditandakan untuk diulang kaji semula.");
    if (currentIndex < deck.length - 1) {
      setTimeout(() => {
        handleNext();
      }, 300);
    }
  };

  const handleShuffle = () => {
    const randomIndex = Math.floor(Math.random() * deck.length);
    setIsFlipped(false);
    setCurrentIndex(randomIndex);
    setStatusMessage("Kad dirawakkan.");
  };

  return (
    <section
      id="flashcards"
      className="tool-card p-5 md:p-6 mt-8"
      aria-labelledby="flashcards-title"
    >
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
        <div>
          <span className="field-label">Ulang Kaji Pantas</span>
          <h2 id="flashcards-title" className="pixel-font text-2xl font-bold mt-3 text-white">
            Flashcards Interaktif
          </h2>
          <p className="mt-2 text-slate-300 max-w-2xl text-sm leading-relaxed">
            Uji hafalan fakta asas, istilah syarak, dalil, dan hukum tajwid dengan kad berbalik pantas.
          </p>
        </div>
        <div className="inv-box px-4 py-3 text-sm font-bold flex items-center gap-2">
          <span>Kemajuan:</span>
          <span className="font-mono text-amber-950">
            {deck.length > 0 ? `Kad ${currentIndex + 1} daripada ${deck.length}` : "Tiada kad"}
          </span>
        </div>
      </div>

      {/* Filter and controls */}
      <div className="grid md:grid-cols-[1fr_auto] gap-3 mt-6 items-end">
        <div>
          <label className="form-label block mb-2 text-sm font-bold" htmlFor="flashcard-filter">
            Tapis Mengikut Bidang
          </label>
          <select
            id="flashcard-filter"
            className="flashcard-control cursor-pointer"
            value={selectedField}
            onChange={(e) => setSelectedField(e.target.value)}
          >
            <option value="all">Semua Bidang ({flashcardsData.length} Kad)</option>
            {fields.map((f) => (
              <option key={f} value={f}>
                {f} ({flashcardsData.filter((c) => c.field === f).length} Kad)
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={handleShuffle}
            className="action-btn btn-light"
            type="button"
            title="Rawakkan susunan kad"
          >
            <Shuffle className="w-4 h-4" />
            Rawak
          </button>
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className="action-btn btn-light"
            type="button"
          >
            <ArrowLeft className="w-4 h-4" />
            Sebelumnya
          </button>
          <button
            onClick={handleNext}
            disabled={currentIndex === deck.length - 1}
            className="action-btn btn-navy"
            type="button"
          >
            Seterusnya
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* 3D Flashcard */}
      <div
        className={`flashcard-scene mt-5 ${isFlipped ? "flipped" : ""}`}
        onClick={handleFlip}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            handleFlip();
          }
        }}
        role="button"
        tabIndex={0}
        aria-label="Tekan kad untuk menterbalikkan jawapan"
      >
        <div className="flashcard-inner">
          {/* Front */}
          <div className="flashcard-face face-front">
            <span className="pixel-font text-xs uppercase tracking-widest text-[#ffd447] flex items-center gap-2">
              <svg className="px" width="16" height="16" aria-hidden="true">
                <use href="#px-book" />
              </svg>
              {currentCard?.field} • Soalan / Kata Kunci
            </span>
            <p className="mt-5 text-xl md:text-2xl font-bold leading-snug px-4 text-white">
              {currentCard?.front}
            </p>
            <span className="mt-6 text-xs text-amber-200/90 font-medium flex items-center gap-1.5 bg-sky-950/60 px-3 py-1.5 border border-sky-700">
              <RotateCw className="w-3.5 h-3.5 animate-spin-slow" />
              Klik atau tekan Ruang (Space) untuk lihat jawapan
            </span>
          </div>

          {/* Back */}
          <div className="flashcard-face face-back">
            <span className="pixel-font text-xs uppercase tracking-widest text-[#ffd447] flex items-center gap-2">
              <svg className="px" width="16" height="16" aria-hidden="true">
                <use href="#px-emerald" />
              </svg>
              Jawapan & Fakta Syarak
            </span>
            <p className="mt-5 text-base md:text-lg leading-relaxed font-semibold px-4 whitespace-pre-line text-white">
              {currentCard?.back}
            </p>
            <span className="mt-6 text-xs text-amber-200/80">
              Klik kad untuk kembali ke soalan
            </span>
          </div>
        </div>
      </div>

      {/* Action buttons */}
      <div className="flex flex-wrap gap-2 mt-5">
        <button
          onClick={handleMarkKnown}
          className="action-btn btn-navy"
          type="button"
        >
          <Check className="w-4 h-4" />
          Saya Sudah Ingat (Dikuasai)
        </button>
        <button
          onClick={handleMarkRepeat}
          className="action-btn btn-light"
          type="button"
        >
          <RotateCw className="w-4 h-4" />
          Perlu Diulang Semula
        </button>
      </div>

      {statusMessage && (
        <p className="mt-3 text-sm text-[#ffd447] font-semibold" aria-live="polite">
          {statusMessage}
        </p>
      )}

      {/* Stats footer */}
      <div className="mt-5 pt-4 border-t-2 border-dashed border-[#5e646d] flex flex-wrap items-center gap-4 text-sm font-bold">
        <div className="flex items-center gap-1.5 text-[#2fd17a]">
          <span className="w-2.5 h-2.5 bg-[#2fd17a] inline-block"></span>
          <span>Dikuasai:</span>
          <span>{knownCards.size} kad</span>
        </div>
        <div className="flex items-center gap-1.5 text-[#ffd447]">
          <span className="w-2.5 h-2.5 bg-[#ffd447] inline-block"></span>
          <span>Perlu diulang:</span>
          <span>{repeatCards.size} kad</span>
        </div>
        <div className="flex items-center gap-1.5 text-slate-300 ml-auto">
          <span>Jumlah kad tersedia:</span>
          <span>{flashcardsData.length}</span>
        </div>
      </div>
    </section>
  );
};
