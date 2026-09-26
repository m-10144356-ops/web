import React, { useState, useMemo } from "react";
import { topicsData, TopicItem } from "./data/topics";
import { topicsDataT5, TopicItemT5 } from "./data/topicsT5";
import { PixelIconsSvg } from "./components/PixelIcons";
import { FormulaSection } from "./components/FormulaSection";
import { FlashcardsSection } from "./components/FlashcardsSection";
import { QuizSection } from "./components/QuizSection";
import { FormulaSectionT5 } from "./components/FormulaSectionT5";
import { FlashcardsSectionT5 } from "./components/FlashcardsSectionT5";
import { QuizSectionT5 } from "./components/QuizSectionT5";
import { StructuredT4Content } from "./components/StructuredT4Content";
import { StructuredTopicContent } from "./components/StructuredTopicContent";
import {
  Search,
  ChevronDown,
  Check,
  Copy,
  BookOpen,
  ArrowUp,
  Sparkles,
  CheckCheck,
  GraduationCap,
  ArrowRight,
  Info,
  Volume2,
  VolumeX,
  Music
} from "lucide-react";
import {
  playButtonClickSound,
  isBgmEnabled,
  setBgmEnabled,
  startBgmAutoplay
} from "./utils/sound";

export default function App() {
  // Grade state: "T4" for Tingkatan 4, "T5" for Tingkatan 5
  const [activeGrade, setActiveGrade] = useState<"T4" | "T5">("T4");
  const [bgmOn, setBgmOn] = useState<boolean>(() => isBgmEnabled());

  // Trigger autoplay background music immediately on page load
  React.useEffect(() => {
    startBgmAutoplay();
  }, []);

  const toggleBgmState = () => {
    const next = !bgmOn;
    setBgmOn(next);
    setBgmEnabled(next);
    if (next) {
      showToast("Muzik latar belakang dihidupkan 🎵");
    } else {
      showToast("Muzik latar belakang diredam 🔇");
    }
  };

  // State for Tingkatan 4
  const [searchTermT4, setSearchTermT4] = useState<string>("");
  const [selectedFieldT4, setSelectedFieldT4] = useState<string>("all");
  const [openTopicsT4, setOpenTopicsT4] = useState<Set<string>>(new Set(["pelajaran-3"]));
  const [openSubtopicsT4, setOpenSubtopicsT4] = useState<Set<string>>(
    new Set([
      "unit-1-al-muntaqim",
      "unit-1-korban",
      "unit-1-konsep-muamalat",
      "unit-1-solat-dhuha",
      "unit-1-abu-hanifah",
      "unit-1-khauf",
      "unit-1-orang-sakit",
      "unit-1-maksud-wasatiyyah"
    ])
  );
  const [completedTopicsT4, setCompletedTopicsT4] = useState<Set<string>>(() => {
    try {
      return new Set(JSON.parse(localStorage.getItem("pi-spm-completed-topics-t4") || "[]"));
    } catch {
      return new Set();
    }
  });

  // State for Tingkatan 5
  const [searchTermT5, setSearchTermT5] = useState<string>("");
  const [selectedFieldT5, setSelectedFieldT5] = useState<string>("all");
  const [openTopicsT5, setOpenTopicsT5] = useState<Set<string>>(new Set(["t5-p3"]));
  const [openSubtopicsT5, setOpenSubtopicsT5] = useState<Set<string>>(
    new Set(["t5-p3-u1", "t5-p3-u2", "t5-p3-u3", "t5-p4-u1"])
  );
  const [completedTopicsT5, setCompletedTopicsT5] = useState<Set<string>>(() => {
    try {
      return new Set(JSON.parse(localStorage.getItem("pi-spm-completed-topics-t5") || "[]"));
    } catch {
      return new Set();
    }
  });

  const [toastMessage, setToastMessage] = useState<string>("");

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage("");
    }, 2200);
  };

  // Toggle individual topic accordion (Auto-collapse previous topic / Focus Mode)
  const toggleTopicT4 = (id: string) => {
    setOpenTopicsT4((prev) => {
      if (prev.has(id)) {
        // If already open, close it
        return new Set();
      } else {
        // Auto-close other topics and open ONLY this one
        return new Set([id]);
      }
    });

    // Auto-open subtopics for this topic for immediate reading
    const targetTopic = topicsData.find((t) => t.id === id);
    if (targetTopic && targetTopic.subtopics) {
      setOpenSubtopicsT4((prev) => {
        const next = new Set(prev);
        targetTopic.subtopics?.forEach((s) => next.add(s.id));
        return next;
      });
    }

    // Smoothly ensure the opened topic is visible without jump
    setTimeout(() => {
      const el = document.querySelector(`[data-topic="${id}"]`);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }
    }, 60);
  };

  const toggleSubtopicT4 = (subId: string) => {
    setOpenSubtopicsT4((prev) => {
      const next = new Set(prev);
      if (next.has(subId)) next.delete(subId);
      else next.add(subId);
      return next;
    });
  };

  const openAllT4 = () => {
    setOpenTopicsT4(new Set(filteredTopicsT4.map((t) => t.id)));
    const allSubs = topicsData.flatMap((t) => (t.subtopics || []).map((s) => s.id));
    setOpenSubtopicsT4(new Set(allSubs));
  };

  const closeAllT4 = () => {
    setOpenTopicsT4(new Set());
    setOpenSubtopicsT4(new Set());
  };

  const toggleCompleteT4 = (id: string) => {
    setCompletedTopicsT4((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
        showToast("Topik ditandakan belum selesai.");
      } else {
        next.add(id);
        showToast("Alhamdulillah! Pelajaran ditanda sudah diulang kaji. ✓");
      }
      localStorage.setItem("pi-spm-completed-topics-t4", JSON.stringify([...next]));
      return next;
    });
  };

  const copyTopicT4 = async (topic: TopicItem) => {
    const tempDiv = document.createElement("div");
    let combinedHtml = topic.directContentHtml || "";
    if (topic.subtopics && topic.subtopics.length > 0) {
      combinedHtml += "\n" + topic.subtopics.map((s) => `<h3>${s.title}</h3>\n${s.contentHtml}`).join("\n");
    }
    tempDiv.innerHTML = combinedHtml;
    const cleanText = `${topic.fieldLabel.toUpperCase()} - ${topic.title}\n\n${tempDiv.innerText.trim()}`;

    try {
      await navigator.clipboard.writeText(cleanText);
      showToast(`Nota '${topic.title}' berjaya disalin!`);
    } catch {
      showToast("Gagal menyalin nota ke papan keratan.");
    }
  };

  // Toggle handlers for T5 (Auto-collapse previous topic / Focus Mode)
  const toggleTopicT5 = (id: string) => {
    setOpenTopicsT5((prev) => {
      if (prev.has(id)) {
        return new Set();
      } else {
        return new Set([id]);
      }
    });

    const targetTopic = topicsDataT5.find((t) => t.id === id);
    if (targetTopic && targetTopic.subtopics) {
      setOpenSubtopicsT5((prev) => {
        const next = new Set(prev);
        targetTopic.subtopics?.forEach((s) => next.add(s.id));
        return next;
      });
    }

    setTimeout(() => {
      const el = document.querySelector(`[data-topic="${id}"]`);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }
    }, 60);
  };

  const toggleSubtopicT5 = (subId: string) => {
    setOpenSubtopicsT5((prev) => {
      const next = new Set(prev);
      if (next.has(subId)) next.delete(subId);
      else next.add(subId);
      return next;
    });
  };

  const openAllT5 = () => {
    setOpenTopicsT5(new Set(filteredTopicsT5.map((t) => t.id)));
    const allSubs = topicsDataT5.flatMap((t) => (t.subtopics || []).map((s) => s.id));
    setOpenSubtopicsT5(new Set(allSubs));
  };

  const closeAllT5 = () => {
    setOpenTopicsT5(new Set());
    setOpenSubtopicsT5(new Set());
  };

  const toggleCompleteT5 = (id: string) => {
    setCompletedTopicsT5((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
        showToast("Tajuk ditandakan belum selesai.");
      } else {
        next.add(id);
        showToast("Tajuk ditanda sudah diulang kaji. ✓");
      }
      localStorage.setItem("pi-spm-completed-topics-t5", JSON.stringify([...next]));
      return next;
    });
  };

  const copyTopicT5 = async (topic: TopicItemT5) => {
    let text = `${topic.fieldLabel.toUpperCase()} - ${topic.title}\n`;
    if (topic.summary) text += `Ringkasan: ${topic.summary}\n`;
    if (topic.subtopics && topic.subtopics.length > 0) {
      text += `Unit-unit:\n` + topic.subtopics.map((s) => `• ${s.title}`).join("\n");
    }

    try {
      await navigator.clipboard.writeText(text);
      showToast(`Tajuk '${topic.title}' berjaya disalin!`);
    } catch {
      showToast("Gagal menyalin tajuk ke papan keratan.");
    }
  };

  // Filter topics T4
  const filteredTopicsT4 = useMemo(() => {
    return topicsData.filter((topic) => {
      const matchesField = selectedFieldT4 === "all" || topic.field === selectedFieldT4;
      if (!matchesField) return false;
      if (!searchTermT4.trim()) return true;

      const q = searchTermT4.toLowerCase();
      const matchTitle = topic.title.toLowerCase().includes(q);
      const matchField = topic.fieldLabel.toLowerCase().includes(q);
      const matchContent = (topic.directContentHtml || "").toLowerCase().includes(q);
      const matchSubs = (topic.subtopics || []).some(
        (s) => s.title.toLowerCase().includes(q) || s.contentHtml.toLowerCase().includes(q)
      );

      return matchTitle || matchField || matchContent || matchSubs;
    });
  }, [searchTermT4, selectedFieldT4]);

  // Group filtered topics T4 by 6 Bidang
  const chaptersT4 = useMemo(() => {
    const map = new Map<string, { title: string; fieldKey: string; icon: string; items: TopicItem[] }>();

    map.set("al-quran", {
      title: "1. Bidang Al-Quran (Pelajaran 3 – 7)",
      fieldKey: "al-quran",
      icon: "#px-book",
      items: []
    });
    map.set("hadis", {
      title: "2. Bidang Hadis (Pelajaran 8 – 9)",
      fieldKey: "hadis",
      icon: "#px-compass",
      items: []
    });
    map.set("akidah", {
      title: "3. Bidang Akidah (Pelajaran 10 – 12)",
      fieldKey: "akidah",
      icon: "#px-torch",
      items: []
    });
    map.set("fikah", {
      title: "4. Bidang Fikah (Pelajaran 13 – 17)",
      fieldKey: "fikah",
      icon: "#px-table",
      items: []
    });
    map.set("sirah", {
      title: "5. Bidang Sirah & Tamadun Islam (Pelajaran 18 – 21)",
      fieldKey: "sirah",
      icon: "#px-pickaxe",
      items: []
    });
    map.set("akhlak", {
      title: "6. Bidang Akhlak Islamiyyah (Pelajaran 22 – 25)",
      fieldKey: "akhlak",
      icon: "#px-emerald",
      items: []
    });

    filteredTopicsT4.forEach((t) => {
      const target = map.get(t.field);
      if (target) {
        target.items.push(t);
      }
    });

    return Array.from(map.values()).filter((ch) => ch.items.length > 0);
  }, [filteredTopicsT4]);

  // Filter topics T5
  const filteredTopicsT5 = useMemo(() => {
    return topicsDataT5.filter((topic) => {
      const matchesField = selectedFieldT5 === "all" || topic.field === selectedFieldT5;
      if (!matchesField) return false;
      if (!searchTermT5.trim()) return true;

      const q = searchTermT5.toLowerCase();
      const matchTitle = topic.title.toLowerCase().includes(q);
      const matchField = topic.fieldLabel.toLowerCase().includes(q);
      const matchSummary = (topic.summary || "").toLowerCase().includes(q);
      const matchSubs = (topic.subtopics || []).some(
        (s) => s.title.toLowerCase().includes(q)
      );

      return matchTitle || matchField || matchSummary || matchSubs;
    });
  }, [searchTermT5, selectedFieldT5]);

  // Group filtered topics T5 by 6 Bidang
  const chaptersT5 = useMemo(() => {
    const map = new Map<string, { title: string; fieldKey: string; icon: string; items: TopicItemT5[] }>();

    map.set("al-quran", {
      title: "1. Bidang Al-Quran (Pelajaran 3 – 6)",
      fieldKey: "al-quran",
      icon: "#px-book",
      items: []
    });
    map.set("hadis", {
      title: "2. Bidang Hadis (Pelajaran 7 – 8)",
      fieldKey: "hadis",
      icon: "#px-compass",
      items: []
    });
    map.set("akidah", {
      title: "3. Bahagian Akidah (Pelajaran 9 – 10)",
      fieldKey: "akidah",
      icon: "#px-torch",
      items: []
    });
    map.set("fikah", {
      title: "4. Bidang Fiqah (Pelajaran 11 – 15)",
      fieldKey: "fikah",
      icon: "#px-table",
      items: []
    });
    map.set("sirah", {
      title: "5. Bidang Sirah dan Tamadun Islam (Pelajaran 16 – 17)",
      fieldKey: "sirah",
      icon: "#px-pickaxe",
      items: []
    });
    map.set("akhlak", {
      title: "6. Bidang Akhlak Islamiyah (Pelajaran 18 – 21)",
      fieldKey: "akhlak",
      icon: "#px-emerald",
      items: []
    });

    filteredTopicsT5.forEach((t) => {
      const target = map.get(t.field);
      if (target) {
        target.items.push(t);
      }
    });

    return Array.from(map.values()).filter((ch) => ch.items.length > 0);
  }, [filteredTopicsT5]);

  const progressPercentageT4 = Math.round(
    (completedTopicsT4.size / topicsData.length) * 100
  );

  const progressPercentageT5 = Math.round(
    (completedTopicsT5.size / topicsDataT5.length) * 100
  );

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="page-shell">
      <PixelIconsSvg />

      {/* Top Navbar */}
      <header>
        <nav className="top-nav sticky top-0 z-40" aria-label="Navigasi Utama">
          <div className="content-width flex items-center justify-between gap-3 py-2.5">
            <a
              href="#utama"
              className="flex items-center gap-2.5 text-white font-extrabold text-sm shrink-0 pixel-font"
              aria-label="Ke halaman utama"
            >
              <span className="brand-block grid place-items-center h-9 w-9">
                <svg className="px" width="22" height="22" aria-hidden="true">
                  <use href="#px-book" />
                </svg>
              </span>
              <span className="hidden sm:inline">PI SPM • PORTAL ULANG KAJI</span>
              <span className="sm:hidden">PI SPM</span>
            </a>

            {/* Tingkatan 4 vs Tingkatan 5 Switcher & Sound FX in Navbar */}
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1.5 p-1 bg-[#2b1a0c] border-2 border-[#1c1f24] shadow-[3px_3px_0_#0b1322]">
                <button
                  type="button"
                  onClick={() => setActiveGrade("T4")}
                  className={`px-3 py-1 text-xs sm:text-sm font-bold pixel-font transition-all cursor-pointer ${
                    activeGrade === "T4"
                      ? "bg-[#ffd447] text-[#2b1a0c] shadow-[2px_2px_0_#111]"
                      : "text-amber-100 hover:text-white hover:bg-[#4a2e17]"
                  }`}
                >
                  Tingkatan 4
                </button>
                <button
                  type="button"
                  onClick={() => setActiveGrade("T5")}
                  className={`px-3 py-1 text-xs sm:text-sm font-bold pixel-font transition-all cursor-pointer flex items-center gap-1 ${
                    activeGrade === "T5"
                      ? "bg-[#2fd17a] text-[#062b17] shadow-[2px_2px_0_#111]"
                      : "text-emerald-100 hover:text-white hover:bg-[#4a2e17]"
                  }`}
                >
                  <GraduationCap className="w-3.5 h-3.5" />
                  <span>Tingkatan 5</span>
                </button>
              </div>

              {/* Background Music Toggle Button */}
              <button
                type="button"
                onClick={toggleBgmState}
                className={`p-1.5 px-2.5 border-2 border-[#1c1f24] shadow-[3px_3px_0_#0b1322] cursor-pointer flex items-center gap-1.5 text-xs font-bold pixel-font transition-colors ${
                  bgmOn
                    ? "bg-[#4a2e17] text-[#ffd447] hover:bg-[#5b3a1f]"
                    : "bg-[#1f2328] text-slate-400 hover:bg-[#2d3036]"
                }`}
                title={bgmOn ? "Matikan muzik latar" : "Hidupkan muzik latar"}
                aria-label="Kawalan muzik latar belakang"
              >
                {bgmOn ? (
                  <>
                    <Music className="w-4 h-4 text-[#ffd447] animate-pulse" />
                    <span className="hidden sm:inline">MUZIK: ON</span>
                  </>
                ) : (
                  <>
                    <VolumeX className="w-4 h-4 text-slate-400" />
                    <span className="hidden sm:inline">MUZIK: OFF</span>
                  </>
                )}
              </button>
            </div>

            {/* Quick anchors */}
            <div className="nav-scroll hidden md:flex items-center gap-1.5 text-xs py-1">
              {activeGrade === "T4" ? (
                <>
                  <a className="nav-link" href="#al-quran">
                    Al-Quran
                  </a>
                  <a className="nav-link" href="#hadis">
                    Hadis
                  </a>
                  <a className="nav-link" href="#akidah">
                    Akidah
                  </a>
                  <a className="nav-link" href="#fikah">
                    Fikah
                  </a>
                  <a className="nav-link" href="#sirah">
                    Sirah
                  </a>
                  <a className="nav-link" href="#akhlak">
                    Akhlak
                  </a>
                </>
              ) : (
                <>
                  <a className="nav-link" href="#al-quran">
                    Al-Quran
                  </a>
                  <a className="nav-link" href="#hadis">
                    Hadis
                  </a>
                  <a className="nav-link" href="#akidah">
                    Akidah
                  </a>
                  <a className="nav-link" href="#fikah">
                    Fiqah
                  </a>
                  <a className="nav-link" href="#sirah">
                    Sirah
                  </a>
                  <a className="nav-link" href="#akhlak">
                    Akhlak
                  </a>
                </>
              )}
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section id="utama" className="hero-grid">
          <div className="content-width relative z-10 py-10 md:py-14">
            <div className="grid md:grid-cols-[1fr_290px] gap-8 items-center">
              <div>
                {/* Form Switcher Pill Indicator */}
                <div className="inline-flex items-center gap-2 p-1.5 bg-[#14243f]/80 border-2 border-[#1c1f24] shadow-[3px_3px_0_#0b1322] mb-4">
                  <span className="pixel-font text-xs uppercase px-2.5 py-1 font-bold bg-[#ffd447] text-[#2b1a0c]">
                    Pilihan Tingkatan
                  </span>
                  <button
                    type="button"
                    onClick={() => setActiveGrade("T4")}
                    className={`px-3 py-1 text-xs font-bold cursor-pointer rounded-none border border-transparent ${
                      activeGrade === "T4"
                        ? "bg-[#5aa33a] text-white border-black"
                        : "text-slate-200 hover:text-white"
                    }`}
                  >
                    Tingkatan 4
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveGrade("T5")}
                    className={`px-3 py-1 text-xs font-bold cursor-pointer rounded-none border border-transparent ${
                      activeGrade === "T5"
                        ? "bg-[#2fd17a] text-[#062b17] border-black font-extrabold"
                        : "text-slate-200 hover:text-white"
                    }`}
                  >
                    Tingkatan 5 
                  </button>
                </div>

                {activeGrade === "T4" ? (
                  <>
                    <p className="pixel-font text-[#ffd447] font-bold tracking-[.16em] uppercase text-xs mb-2 flex items-center gap-2">
                      <svg className="px" width="16" height="16" aria-hidden="true">
                        <use href="#px-torch" />
                      </svg>
                      KSSM Pendidikan Islam Tingkatan 4 • SPM
                    </p>
                    <h1 className="pixel-font text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-white drop-shadow-[4px_4px_0_#0b1322]">
                      Nota Ulang Kaji Lengkap Tingkatan 4
                    </h1>
                    <p className="mt-3 text-slate-200 text-sm md:text-base max-w-2xl leading-relaxed">
                      Silibus lengkap KSSM Tingkatan 4 mengikut 6 bidang utama (Pelajaran 3 hingga 25): Al-Quran, Hadis, Akidah, Fikah, Sirah & Tamadun Islam, serta Akhlak Islamiyyah.
                    </p>

                    <div className="flex flex-wrap gap-3 mt-6">
                      <div className="stat-chip">
                        <strong className="block pixel-font text-xl text-[#ffd447] drop-shadow-[2px_2px_0_#111]">
                          6 Bidang
                        </strong>
                        <span className="text-xs text-slate-200">Silibus Tingkatan 4</span>
                      </div>
                      <div className="stat-chip">
                        <strong className="block pixel-font text-xl text-[#ffd447] drop-shadow-[2px_2px_0_#111]">
                          {topicsData.length} Pelajaran
                        </strong>
                        <span className="text-xs text-slate-200">Pelajaran 3 – 25</span>
                      </div>
                      <div className="stat-chip">
                        <strong className="block pixel-font text-xl text-[#ffd447] drop-shadow-[2px_2px_0_#111]">
                          15 Formula
                        </strong>
                        <span className="text-xs text-slate-200">Mnemonik Cepat</span>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <p className="pixel-font text-[#2fd17a] font-bold tracking-[.16em] uppercase text-xs mb-2 flex items-center gap-2">
                      <svg className="px" width="16" height="16" aria-hidden="true">
                        <use href="#px-emerald" />
                      </svg>
                      KSSM Pendidikan Islam Tingkatan 5 • SPM
                    </p>
                    <h1 className="pixel-font text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-white drop-shadow-[4px_4px_0_#0b1322]">
                      Nota Ulang Kaji Lengkap Tingkatan 5
                    </h1>
                    <p className="mt-3 text-slate-200 text-sm md:text-base max-w-2xl leading-relaxed">
                      Silibus lengkap KSSM Tingkatan 5 mengikut 6 bidang utama (Pelajaran 3 hingga 21): Al-Quran, Hadis, Akidah, Fikah, Sirah & Tamadun Islam, serta Akhlak Islamiyyah.
                    </p>

                    <div className="flex flex-wrap gap-3 mt-6">
                      <div className="stat-chip">
                        <strong className="block pixel-font text-xl text-[#2fd17a] drop-shadow-[2px_2px_0_#111]">
                          6 Bidang
                        </strong>
                        <span className="text-xs text-slate-200">Silibus Tingkatan 5</span>
                      </div>
                      <div className="stat-chip">
                        <strong className="block pixel-font text-xl text-[#ffd447] drop-shadow-[2px_2px_0_#111]">
                          {topicsDataT5.length} Pelajaran
                        </strong>
                        <span className="text-xs text-slate-200">Pelajaran 3 – 21</span>
                      </div>
                      <div className="stat-chip">
                        <strong className="block pixel-font text-xl text-[#2fd17a] drop-shadow-[2px_2px_0_#111]">
                          15 Formula
                        </strong>
                        <span className="text-xs text-slate-200">Mnemonik Cepat</span>
                      </div>
                    </div>
                  </>
                )}
              </div>

              {/* Pixel Art Showcase Decoration & Quick Switch Card */}
              <div className="hidden md:flex flex-col items-center">
                <div className="hero-frame w-full max-w-[270px] text-center p-4 bg-[#4a2e17] border-4 border-[#2b1a0c] shadow-[6px_6px_0_#0b1322]">
                  <div className="grid place-items-center h-24 bg-[#1e3a66] border-2 border-[#111]">
                    <svg className="px" width="48" height="48">
                      <use href={activeGrade === "T4" ? "#px-book" : "#px-emerald"} />
                    </svg>
                  </div>
                  <p className="pixel-font text-xs text-[#ffd447] mt-3 font-bold">
                    {activeGrade === "T4" ? "TINGKATAN 4" : "TINGKATAN 5"}
                  </p>
                  <p className="text-[11px] text-slate-300 mt-0.5">
                    Nota Padat, Dalil & Latihan SPM
                  </p>

                  <button
                    type="button"
                    onClick={() => setActiveGrade((prev) => (prev === "T4" ? "T5" : "T4"))}
                    className="action-btn btn-navy text-xs w-full mt-3 flex items-center justify-center gap-1.5"
                  >
                    <span>Tukar ke {activeGrade === "T4" ? "Tingkatan 5" : "Tingkatan 4"}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </header>

      {/* Main Content Area */}
      <main className="content-width py-8 md:py-12">
        {/* ============================================================== */}
        {/* TINGKATAN 4 VIEW                                               */}
        {/* ============================================================== */}
        {activeGrade === "T4" && (
          <div>
            {/* Revision Controls & Progress Card T4 */}
            <section aria-label="Kawalan Ulang Kaji Tingkatan 4" className="tool-card p-5 md:p-6">
              <div className="flex flex-col lg:flex-row lg:items-end gap-4">
                <div className="grow">
                  <label className="form-label block mb-2 text-sm font-bold" htmlFor="search-notes-t4">
                    Cari Kata Kunci dalam Nota Tingkatan 4
                  </label>
                  <div className="relative">
                    <Search
                      className="absolute left-3.5 top-3 text-slate-400 pointer-events-none"
                      style={{ width: "19px", height: "19px" }}
                    />
                    <input
                      id="search-notes-t4"
                      className="control pl-10 text-sm"
                      type="search"
                      placeholder="Cari kata kunci (cth: Mad Silah, miqat, qazaf, Abbasiyah, berdikari, khauf, wasatiyyah)..."
                      value={searchTermT4}
                      onChange={(e) => setSearchTermT4(e.target.value)}
                    />
                  </div>
                </div>

                <div className="lg:w-72">
                  <label className="form-label block mb-2 text-sm font-bold" htmlFor="field-filter-t4">
                    Tapis Mengikut 6 Bidang
                  </label>
                  <select
                    id="field-filter-t4"
                    className="control cursor-pointer text-sm"
                    value={selectedFieldT4}
                    onChange={(e) => setSelectedFieldT4(e.target.value)}
                  >
                    <option value="all">Semua Bidang ({topicsData.length} Pelajaran)</option>
                    <option value="al-quran">1. Bidang Al-Quran (Pelajaran 3–7)</option>
                    <option value="hadis">2. Bidang Hadis (Pelajaran 8–9)</option>
                    <option value="akidah">3. Bidang Akidah (Pelajaran 10–12)</option>
                    <option value="fikah">4. Bidang Fikah (Pelajaran 13–17)</option>
                    <option value="sirah">5. Bidang Sirah & Tamadun Islam (Pelajaran 18–21)</option>
                    <option value="akhlak">6. Bidang Akhlak Islamiyyah (Pelajaran 22–25)</option>
                  </select>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={openAllT4}
                    className="action-btn btn-navy"
                    type="button"
                    title="Buka semua kad pelajaran"
                  >
                    Buka Semua
                  </button>
                  <button
                    onClick={closeAllT4}
                    className="action-btn btn-light"
                    type="button"
                    title="Tutup semua kad pelajaran"
                  >
                    Tutup Semua
                  </button>
                </div>
              </div>

              {/* Search Result Status */}
              {searchTermT4 && (
                <p className="mt-3 text-sm font-semibold text-[#ffd447]" aria-live="polite">
                  {filteredTopicsT4.length} pelajaran ditemui sepadan dengan "{searchTermT4}".
                </p>
              )}

              {/* Progress Tracker T4 */}
              <div className="mt-5 pt-5 border-t-2 border-dashed border-[#5e646d]">
                <div className="flex justify-between items-center text-sm font-bold mb-2">
                  <span className="flex items-center gap-1.5 text-white">
                    <CheckCheck className="w-4 h-4 text-[#2fd17a]" />
                    Kemajuan Ulang Kaji Tingkatan 4
                  </span>
                  <span className="pixel-font text-[#ffd447]">
                    {completedTopicsT4.size} / {topicsData.length} pelajaran ({progressPercentageT4}%)
                  </span>
                </div>
                <div className="progress-track" aria-label="Peratus kemajuan ulang kaji">
                  <div
                    className="progress-fill"
                    style={{ width: `${progressPercentageT4}%` }}
                  />
                </div>
              </div>
            </section>

            {/* Quick Memorization Formulas */}
            <FormulaSection />

            {/* Interactive Flashcards */}
            <FlashcardsSection />

            {/* SPM Objective Quiz */}
            <QuizSection />

            {/* Full Topic Revision Notes T4 */}
            <section className="mt-12 space-y-10" aria-label="Kandungan Nota Tingkatan 4">
              <div className="flex items-center justify-between border-b-2 border-dashed border-[#5e646d] pb-3">
                <h2 className="text-2xl font-bold pixel-font text-white flex items-center gap-2">
                  <BookOpen className="w-6 h-6 text-[#ffd447]" />
                  Silibus Lengkap Tingkatan 4 (Pelajaran 3 – 25)
                </h2>
                <span className="text-xs text-slate-300">
                  Menunjukkan {filteredTopicsT4.length} daripada {topicsData.length} pelajaran
                </span>
              </div>

              {chaptersT4.length === 0 && (
                <div className="text-center py-12 p-6 bg-[#2d3036] border-2 border-stone-600">
                  <p className="text-base text-slate-200 font-semibold">
                    Tiada pelajaran ditemui untuk carian atau tapisan ini.
                  </p>
                  <button
                    onClick={() => {
                      setSearchTermT4("");
                      setSelectedFieldT4("all");
                    }}
                    className="action-btn btn-navy mt-4"
                    type="button"
                  >
                    Tetapkan Semula Carian
                  </button>
                </div>
              )}

              {chaptersT4.map((chapter) => (
                <div key={chapter.fieldKey} id={chapter.fieldKey} className="space-y-4 scroll-mt-24">
                  <div className="chapter-head pt-2 flex items-center gap-3">
                    <span className="chapter-icon">
                      <svg className="px" width="24" height="24" aria-hidden="true">
                        <use href={chapter.icon} />
                      </svg>
                    </span>
                    <div>
                      <h3 className="text-2xl font-bold pixel-font text-white">
                        {chapter.title}
                      </h3>
                      <div className="chapter-bar" />
                    </div>
                  </div>

                  <div className="space-y-4">
                    {chapter.items.map((topic) => {
                      const isOpen = openTopicsT4.has(topic.id);
                      const isDone = completedTopicsT4.has(topic.id);

                      return (
                        <article
                          key={topic.id}
                          className="topic-card"
                          data-topic={topic.id}
                          data-field={topic.field}
                        >
                          <button
                            className="topic-toggle"
                            type="button"
                            aria-expanded={isOpen}
                            onClick={() => toggleTopicT4(topic.id)}
                          >
                            <span className="topic-number">{topic.number}</span>
                            <span className="grow">
                              <span className="field-label">{topic.fieldLabel}</span>
                              <strong className="block mt-1 text-base md:text-lg text-white">
                                {topic.title}
                              </strong>
                            </span>
                            <ChevronDown
                              className={`w-5 h-5 text-[#ffd447] transition-transform duration-200 ${
                                isOpen ? "rotate-180" : ""
                              }`}
                            />
                          </button>

                          {isOpen && (
                            <div className="topic-body note">
                              {/* Direct Content if available */}
                              {topic.directContentHtml && (
                                <StructuredT4Content
                                  html={topic.directContentHtml}
                                  topicId={topic.id}
                                />
                              )}

                              {/* Subtopics if available */}
                              {topic.subtopics && topic.subtopics.length > 0 && (
                                <div className="space-y-3 mt-4">
                                  {topic.subtopics.map((sub) => {
                                    const isSubOpen = openSubtopicsT4.has(sub.id);
                                    return (
                                      <div key={sub.id} className="subtopic-block">
                                        <button
                                          type="button"
                                          className="subtopic-toggle"
                                          aria-expanded={isSubOpen}
                                          onClick={() => toggleSubtopicT4(sub.id)}
                                        >
                                          {sub.badge && <span className="field-label">{sub.badge}</span>}
                                          <strong>{sub.title}</strong>
                                          <ChevronDown
                                            className={`w-4 h-4 text-[#ffd447] transition-transform duration-200 ${
                                              isSubOpen ? "rotate-180" : ""
                                            }`}
                                          />
                                        </button>
                                        {isSubOpen && (
                                          <div
                                            className="subtopic-content note"
                                            dangerouslySetInnerHTML={{
                                              __html: sub.contentHtml
                                            }}
                                          />
                                        )}
                                      </div>
                                    );
                                  })}
                                </div>
                              )}

                              {/* Action footer */}
                              <div className="topic-actions">
                                <button
                                  onClick={() => toggleCompleteT4(topic.id)}
                                  className={`action-btn ${isDone ? "complete" : "btn-navy"}`}
                                  type="button"
                                >
                                  <Check className="w-4 h-4" />
                                  <span>{isDone ? "Sudah Diulang Kaji ✓" : "Tanda Sudah Ulang Kaji"}</span>
                                </button>

                                <button
                                  onClick={() => copyTopicT4(topic)}
                                  className="action-btn btn-light"
                                  type="button"
                                  title="Salin ringkasan nota ke papan keratan"
                                >
                                  <Copy className="w-4 h-4" />
                                  <span>Salin Nota</span>
                                </button>
                              </div>
                            </div>
                          )}
                        </article>
                      );
                    })}
                  </div>
                </div>
              ))}
            </section>
          </div>
        )}

        {/* ============================================================== */}
        {/* TINGKATAN 5 VIEW                                               */}
        {/* ============================================================== */}
        {activeGrade === "T5" && (
          <div>
            {/* Notice Banner */}
            <div className="p-4 bg-[#2b1a0c] border-2 border-[#2fd17a] text-emerald-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-6 shadow-[4px_4px_0_#0b1322]">
              <div className="flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-[#2fd17a] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-white font-bold text-sm pixel-font">
                    Nota Lengkap Silibus Tingkatan 5 (KSSM SPM)
                  </h4>
                  <p className="text-xs text-emerald-200/90 mt-0.5">
                    Merangkumi kesemua 19 tajuk dan unit (Pelajaran 3 hingga 21) mengikut 6 bidang utama bersama formula mnemonik, flashcards interaktif dan latihan soalan objektif SPM.
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setActiveGrade("T4")}
                className="action-btn btn-light text-xs shrink-0 py-1.5 px-3"
              >
                Lihat Nota Tingkatan 4
              </button>
            </div>

            {/* Revision Controls & Progress Card T5 */}
            <section aria-label="Kawalan Ulang Kaji Tingkatan 5" className="tool-card p-5 md:p-6">
              <div className="flex flex-col lg:flex-row lg:items-end gap-4">
                <div className="grow">
                  <label className="form-label block mb-2 text-sm font-bold" htmlFor="search-notes-t5">
                    Cari Kata Kunci dalam Nota Tingkatan 5
                  </label>
                  <div className="relative">
                    <Search
                      className="absolute left-3.5 top-3 text-slate-400 pointer-events-none"
                      style={{ width: "19px", height: "19px" }}
                    />
                    <input
                      id="search-notes-t5"
                      className="control pl-10 text-sm"
                      type="search"
                      placeholder="Cari kata kunci (cth: Mad Tamkin, Al-Raqib, ASWJ, Istikharah, Tasbih, Mahram, Iddah, Faraid, Hudud, Uthmaniyah, Tawaduk)..."
                      value={searchTermT5}
                      onChange={(e) => setSearchTermT5(e.target.value)}
                    />
                  </div>
                </div>

                <div className="lg:w-72">
                  <label className="form-label block mb-2 text-sm font-bold" htmlFor="field-filter-t5">
                    Tapis Mengikut 6 Bidang
                  </label>
                  <select
                    id="field-filter-t5"
                    className="control cursor-pointer text-sm"
                    value={selectedFieldT5}
                    onChange={(e) => setSelectedFieldT5(e.target.value)}
                  >
                    <option value="all">Semua Bidang ({topicsDataT5.length} Pelajaran)</option>
                    <option value="al-quran">1. Bidang Al-Quran (Pelajaran 3–6)</option>
                    <option value="hadis">2. Bidang Hadis (Pelajaran 7–8)</option>
                    <option value="akidah">3. Bidang Akidah (Pelajaran 9–10)</option>
                    <option value="fikah">4. Bidang Fikah (Pelajaran 11–15)</option>
                    <option value="sirah">5. Bidang Sirah & Tamadun Islam (Pelajaran 16–17)</option>
                    <option value="akhlak">6. Bidang Akhlak Islamiyyah (Pelajaran 18–21)</option>
                  </select>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={openAllT5}
                    className="action-btn btn-navy"
                    type="button"
                    title="Buka semua kad pelajaran"
                  >
                    Buka Semua
                  </button>
                  <button
                    onClick={closeAllT5}
                    className="action-btn btn-light"
                    type="button"
                    title="Tutup semua kad pelajaran"
                  >
                    Tutup Semua
                  </button>
                </div>
              </div>

              {/* Search Result Status */}
              {searchTermT5 && (
                <p className="mt-3 text-sm font-semibold text-[#ffd447]" aria-live="polite">
                  {filteredTopicsT5.length} pelajaran ditemui sepadan dengan "{searchTermT5}".
                </p>
              )}

              {/* Progress Tracker T5 */}
              <div className="mt-5 pt-5 border-t-2 border-dashed border-[#5e646d]">
                <div className="flex justify-between items-center text-sm font-bold mb-2">
                  <span className="flex items-center gap-1.5 text-white">
                    <CheckCheck className="w-4 h-4 text-[#2fd17a]" />
                    Kemajuan Ulang Kaji Tingkatan 5
                  </span>
                  <span className="pixel-font text-[#2fd17a]">
                    {completedTopicsT5.size} / {topicsDataT5.length} pelajaran ({progressPercentageT5}%)
                  </span>
                </div>
                <div className="progress-track" aria-label="Peratus kemajuan ulang kaji tingkatan 5">
                  <div
                    className="progress-fill"
                    style={{ width: `${progressPercentageT5}%` }}
                  />
                </div>
              </div>
            </section>

            {/* Quick Memorization Formulas T5 */}
            <FormulaSectionT5 />

            {/* Interactive Flashcards T5 */}
            <FlashcardsSectionT5 />

            {/* SPM Objective Quiz T5 */}
            <QuizSectionT5 />

            {/* List of Tingkatan 5 Topics */}
            <section className="mt-10 space-y-10" aria-label="Kandungan Nota Tingkatan 5">
              <div className="flex items-center justify-between border-b-2 border-dashed border-[#5e646d] pb-3">
                <h2 className="text-2xl font-bold pixel-font text-white flex items-center gap-2">
                  <GraduationCap className="w-6 h-6 text-[#2fd17a]" />
                  Silibus & Nota Lengkap Tingkatan 5 (Pelajaran 3 – 21)
                </h2>
                <span className="text-xs text-slate-300">
                  {filteredTopicsT5.length} daripada {topicsDataT5.length} pelajaran
                </span>
              </div>

              {chaptersT5.length === 0 && (
                <div className="text-center py-12 p-6 bg-[#2d3036] border-2 border-stone-600">
                  <p className="text-base text-slate-200 font-semibold">
                    Tiada tajuk ditemui untuk carian atau tapisan ini.
                  </p>
                  <button
                    onClick={() => {
                      setSearchTermT5("");
                      setSelectedFieldT5("all");
                    }}
                    className="action-btn btn-navy mt-4"
                    type="button"
                  >
                    Tetapkan Semula Carian
                  </button>
                </div>
              )}

              {chaptersT5.map((chapter) => (
                <div key={chapter.fieldKey} id={chapter.fieldKey} className="space-y-4 scroll-mt-24">
                  <div className="chapter-head pt-2 flex items-center gap-3">
                    <span className="chapter-icon">
                      <svg className="px" width="24" height="24" aria-hidden="true">
                        <use href={chapter.icon} />
                      </svg>
                    </span>
                    <div>
                      <h3 className="text-2xl font-bold pixel-font text-white">
                        {chapter.title}
                      </h3>
                      <div className="chapter-bar" />
                    </div>
                  </div>

                  <div className="space-y-4">
                    {chapter.items.map((topic) => {
                      const isOpen = openTopicsT5.has(topic.id);
                      const isDone = completedTopicsT5.has(topic.id);

                      return (
                        <article
                          key={topic.id}
                          className="topic-card"
                          data-topic={topic.id}
                          data-field={topic.field}
                        >
                          <button
                            className="topic-toggle"
                            type="button"
                            aria-expanded={isOpen}
                            onClick={() => toggleTopicT5(topic.id)}
                          >
                            <span className="topic-number">{topic.number}</span>
                            <span className="grow">
                              <span className="field-label">{topic.fieldLabel}</span>
                              <strong className="block mt-1 text-base md:text-lg text-white">
                                {topic.title}
                              </strong>
                              {topic.summary && (
                                <span className="block text-xs text-slate-300 mt-0.5">
                                  {topic.summary}
                                </span>
                              )}
                            </span>
                            <ChevronDown
                              className={`w-5 h-5 text-[#ffd447] transition-transform duration-200 ${
                                isOpen ? "rotate-180" : ""
                              }`}
                            />
                          </button>

                          {isOpen && (
                            <div className="topic-body note">
                              {/* Unified Structured Topic Content (Pecahan Bahagian Modul, Semua Kad, Mod Fokus) */}
                              <StructuredTopicContent
                                html={topic.directContentHtml}
                                subtopics={topic.subtopics}
                                topicId={topic.id}
                              />

                              {/* Action footer */}
                              <div className="topic-actions">
                                <button
                                  onClick={() => toggleCompleteT5(topic.id)}
                                  className={`action-btn ${isDone ? "complete" : "btn-navy"}`}
                                  type="button"
                                >
                                  <Check className="w-4 h-4" />
                                  <span>{isDone ? "Sudah Diulang Kaji ✓" : "Tanda Sudah Ulang Kaji"}</span>
                                </button>

                                <button
                                  onClick={() => copyTopicT5(topic)}
                                  className="action-btn btn-light"
                                  type="button"
                                  title="Salin nota pelajaran"
                                >
                                  <Copy className="w-4 h-4" />
                                  <span>Salin Nota</span>
                                </button>
                              </div>
                            </div>
                          )}
                        </article>
                      );
                    })}
                  </div>
                </div>
              ))}
            </section>
          </div>
        )}
      </main>

      {/* Floating Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 z-50 p-3 bg-[#5aa33a] hover:bg-[#7ccd4f] text-white border-3 border-[#111] shadow-[4px_4px_0_#0b1322] cursor-pointer transition-transform hover:-translate-y-1 active:translate-y-1"
        aria-label="Kembali ke atas"
        title="Kembali ke atas"
      >
        <ArrowUp className="w-5 h-5" />
      </button>

      {/* Toast Notification */}
      {toastMessage && (
        <div
          role="status"
          aria-live="polite"
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 px-4 py-2.5 bg-[#1f2328] border-2 border-[#ffd447] text-white text-sm font-bold shadow-[4px_4px_0_#000] flex items-center gap-2"
        >
          <Sparkles className="w-4 h-4 text-[#ffd447]" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Footer */}
      <footer className="footer-block mt-16">
        <div className="content-width py-8 space-y-4 text-xs text-amber-100">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left border-b border-stone-700/60 pb-4">
            <div className="flex items-center gap-2 justify-center sm:justify-start">
              <svg className="px" width="20" height="20" aria-hidden="true">
                <use href="#px-torch" />
              </svg>
              <p className="font-bold pixel-font text-white">
                Nota Ulang Kaji Lengkap Pendidikan Islam SPM (Tingkatan 4 & 5)
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setActiveGrade("T4")}
                className={`underline cursor-pointer ${activeGrade === "T4" ? "text-amber-300 font-bold" : "text-amber-100/70"}`}
              >
                Tingkatan 4
              </button>
              <span>•</span>
              <button
                type="button"
                onClick={() => setActiveGrade("T5")}
                className={`underline cursor-pointer ${activeGrade === "T5" ? "text-emerald-300 font-bold" : "text-amber-100/70"}`}
              >
                Tingkatan 5
              </button>
            </div>
          </div>

          {/* Credits and Social Link */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
            <div>
              <p className="text-white font-semibold">
                Disediakan oleh: <span className="text-[#ffd447] font-bold">Widad Islah</span>
              </p>
              <p className="text-slate-300 text-[11px] mt-0.5">
                Sebarang cadangan atau pembetulan boleh DM di Medsos
              </p>
            </div>

            <div>
              <a
                href="https://linktr.ee/widadislah"
                target="_blank"
                rel="noopener noreferrer"
                className="action-btn btn-navy text-xs inline-flex items-center gap-1.5 px-4 py-2 font-bold hover:scale-105 transition-transform"
              >
                <span>Follow me</span>
                <span className="text-[#ffd447]">↗</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
