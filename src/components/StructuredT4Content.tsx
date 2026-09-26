import React, { useState, useMemo } from "react";
import { BookOpen, Layers, ChevronLeft, ChevronRight, CheckCircle2 } from "lucide-react";

export interface SectionPart {
  id: string;
  title: string;
  html: string;
  badge: string;
  icon: string;
}

export function parseHtmlToSections(html: string): SectionPart[] {
  if (!html || !html.includes("<h3")) {
    return [
      {
        id: "sec-0",
        title: "Kandungan Pelajaran",
        html: html || "",
        badge: "NOTA UTAMA",
        icon: "📌"
      }
    ];
  }

  const parts: SectionPart[] = [];
  const regex = /<h3[^>]*>([\s\S]*?)<\/h3>([\s\S]*?)(?=(?:<h3|$))/gi;
  let match;
  let index = 1;

  // Check if there is introductory content before the first <h3>
  const firstH3Index = html.indexOf("<h3");
  if (firstH3Index > 0) {
    const introHtml = html.substring(0, firstH3Index).trim();
    if (introHtml) {
      parts.push({
        id: "sec-intro",
        title: "Pengenalan & Gambaran Keseluruhan",
        html: introHtml,
        badge: "MULA",
        icon: "📌"
      });
    }
  }

  while ((match = regex.exec(html)) !== null) {
    const rawTitle = match[1].replace(/<[^>]+>/g, "").trim();
    const content = match[2].trim();

    // Determine icon and contextual badge
    let icon = "📌";
    let badge = `BAHAGIAN ${index}`;
    const lower = rawTitle.toLowerCase();

    if (lower.includes("ayat") || lower.includes("surah")) {
      icon = "📖";
      badge = "DALIL AL-QURAN";
    } else if (lower.includes("hadis")) {
      icon = "📜";
      badge = "DALIL HADIS";
    } else if (
      lower.includes("tajwid") ||
      lower.includes("mad ") ||
      lower.includes("qalqalah") ||
      lower.includes("ra'") ||
      lower.includes("waqaf")
    ) {
      icon = "💎";
      badge = "HUKUM TAJWID";
    } else if (
      lower.includes("maksud") ||
      lower.includes("pengertian") ||
      lower.includes("konsep") ||
      lower.includes("definisi")
    ) {
      icon = "💡";
      badge = "KONSEP & MAKSUD";
    } else if (lower.includes("sebab turun") || lower.includes("asbab")) {
      icon = "⏳";
      badge = "ASBABUN NUZUL";
    } else if (
      lower.includes("bentuk") ||
      lower.includes("faktor") ||
      lower.includes("contoh") ||
      lower.includes("syarat") ||
      lower.includes("rukun") ||
      lower.includes("perincian") ||
      lower.includes("tuntutan")
    ) {
      icon = "📋";
      badge = "PERINCIAN & SYARAT";
    } else if (
      lower.includes("kesan") ||
      lower.includes("bahaya") ||
      lower.includes("dosa") ||
      lower.includes("batal") ||
      lower.includes("larangan") ||
      lower.includes("mempersendakan")
    ) {
      icon = "⚠️";
      badge = "PERINGATAN & KESAN";
    } else if (
      lower.includes("pengajaran") ||
      lower.includes("iktibar") ||
      lower.includes("hikmah") ||
      lower.includes("penghayatan") ||
      lower.includes("amalan")
    ) {
      icon = "🎯";
      badge = "PENGAJARAN & IKTIBAR";
    }

    parts.push({
      id: `sec-${index}`,
      title: rawTitle,
      html: content,
      badge,
      icon
    });
    index++;
  }

  if (parts.length === 0) {
    return [
      {
        id: "sec-0",
        title: "Nota Pelajaran",
        html,
        badge: "KANDUNGAN",
        icon: "📌"
      }
    ];
  }

  return parts;
}

interface StructuredT4ContentProps {
  html: string;
  topicId: string;
}

export const StructuredT4Content: React.FC<StructuredT4ContentProps> = ({ html, topicId }) => {
  const sections = useMemo(() => parseHtmlToSections(html), [html]);
  const [viewMode, setViewMode] = useState<"focus" | "cards">("cards");
  const [activeIdx, setActiveIdx] = useState<number>(0);

  // If only 1 section or no subdivisions, render directly
  if (sections.length <= 1) {
    return <div dangerouslySetInnerHTML={{ __html: html }} />;
  }

  const handleSelectPill = (idx: number, secId: string) => {
    setActiveIdx(idx);
    if (viewMode === "cards") {
      const el = document.getElementById(`${topicId}-${secId}`);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  const handlePrev = () => {
    if (activeIdx > 0) {
      setActiveIdx((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    if (activeIdx < sections.length - 1) {
      setActiveIdx((prev) => prev + 1);
    }
  };

  return (
    <div className="space-y-4">
      {/* Top Section Nav & View Mode Switcher */}
      <div className="bg-[#181d24] border-2 border-[#2f3744] p-3 shadow-[2px_2px_0_#0c1015]">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-2.5">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-[#ffd447] inline-block shadow-[1px_1px_0_#000]"></span>
            <span className="text-xs font-bold text-amber-200 uppercase tracking-wider font-mono">
              Pecahan Bahagian ({sections.length} Modul Nota)
            </span>
          </div>

          {/* Mode Selector */}
          <div className="flex items-center gap-1.5 self-end sm:self-auto bg-[#10141a] p-1 border border-[#2b3340]">
            <button
              type="button"
              onClick={() => setViewMode("cards")}
              className={`px-2.5 py-1 text-xs font-bold font-mono transition-colors flex items-center gap-1.5 ${
                viewMode === "cards"
                  ? "bg-[#5b3a1f] text-[#ffd447] border border-[#ffd447]/60"
                  : "text-slate-400 hover:text-white"
              }`}
              title="Paparkan semua bahagian dalam kad tersusun"
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Semua Kad</span>
            </button>

            <button
              type="button"
              onClick={() => setViewMode("focus")}
              className={`px-2.5 py-1 text-xs font-bold font-mono transition-colors flex items-center gap-1.5 ${
                viewMode === "focus"
                  ? "bg-[#5b3a1f] text-[#ffd447] border border-[#ffd447]/60"
                  : "text-slate-400 hover:text-white"
              }`}
              title="Fokus membaca satu bahagian tanpa perlu skrol panjang"
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Mod Fokus (1 Kad)</span>
            </button>
          </div>
        </div>

        {/* Section Quick Pills */}
        <div className="flex flex-wrap gap-1.5">
          {sections.map((sec, idx) => {
            const isActive = viewMode === "focus" ? activeIdx === idx : false;
            return (
              <button
                key={sec.id}
                type="button"
                onClick={() => handleSelectPill(idx, sec.id)}
                className={`section-nav-pill ${isActive ? "active" : ""}`}
              >
                <span>{sec.icon}</span>
                <span className="truncate max-w-[190px]">{sec.title}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Render Mode: Focus (One card at a time with Prev/Next buttons) */}
      {viewMode === "focus" && (
        <div className="note-section-card border-[#ffd447]/50 shadow-[4px_4px_0_#0a0e14]">
          <div className="note-section-header">
            <div className="note-section-title">
              <span className="text-lg">{sections[activeIdx].icon}</span>
              <span>{sections[activeIdx].title}</span>
            </div>
            <span className="field-label text-[10px] bg-[#1a140a] text-[#ffd447] border border-[#ffd447]/40">
              {sections[activeIdx].badge} ({activeIdx + 1}/{sections.length})
            </span>
          </div>

          <div
            className="note-section-body note"
            dangerouslySetInnerHTML={{ __html: sections[activeIdx].html }}
          />

          {/* Stepper Footer */}
          <div className="p-3 bg-[#191e27] border-t-2 border-[#2b3340] flex items-center justify-between gap-3">
            <button
              type="button"
              onClick={handlePrev}
              disabled={activeIdx === 0}
              className="action-btn btn-light text-xs py-1.5 px-3 disabled:opacity-30 disabled:pointer-events-none"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Bahagian Sebelumnya</span>
            </button>

            <div className="text-center font-mono text-xs text-amber-200">
              <span>{activeIdx + 1}</span> / <span>{sections.length}</span>
            </div>

            <button
              type="button"
              onClick={handleNext}
              disabled={activeIdx === sections.length - 1}
              className="action-btn btn-navy text-xs py-1.5 px-3 disabled:opacity-30 disabled:pointer-events-none"
            >
              <span>Bahagian Seterusnya</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Render Mode: All Cards (Each section in its own distinct Minecraft-styled framed card) */}
      {viewMode === "cards" && (
        <div className="space-y-4">
          {sections.map((sec, idx) => (
            <div
              key={sec.id}
              id={`${topicId}-${sec.id}`}
              className="note-section-card transition-colors hover:border-[#525f75]"
            >
              <div className="note-section-header">
                <div className="note-section-title">
                  <span className="text-base">{sec.icon}</span>
                  <span>{sec.title}</span>
                </div>
                <span className="field-label text-[10px]">{sec.badge}</span>
              </div>
              <div
                className="note-section-body note"
                dangerouslySetInnerHTML={{ __html: sec.html }}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
