export interface FormulaItem {
  id: string;
  code: string;
  title: string;
  description: string;
  category: string;
}

export const formulas: FormulaItem[] = [
  {
    id: "haji-syarat",
    code: "I-B-B-M-I",
    title: "Syarat Wajib Haji & Umrah",
    description: "Islam, Baligh, Berakal, Merdeka, Istita'ah (Berkemampuan).",
    category: "Fikah (Pelajaran 13)"
  },
  {
    id: "haji-rukun",
    code: "N-W-T-S-T-T",
    title: "Rukun Haji",
    description: "Niat Ihram, Wukuf di Arafah, Tawaf Ifadah, Saie, Tahallul, Tertib.",
    category: "Fikah (Pelajaran 13)"
  },
  {
    id: "haji-jenis",
    code: "I - T - Q",
    title: "3 Cara Mengerjakan Haji",
    description: "Ifrad (Haji dahulu) · Tamattuk (Umrah dahulu) · Qiran (Haji & Umrah serentak).",
    category: "Fikah (Pelajaran 13)"
  },
  {
    id: "sembelihan-rukun",
    code: "3 Rukun Sembelihan",
    title: "Rukun Sembelihan",
    description: "Penyembelih (Islam/Ahli Kitab) · Binatang (halal & hayat mustaqirrah) · Alat (tajam, bukan tulang/kuku/gigi).",
    category: "Fikah (Pelajaran 14)"
  },
  {
    id: "korban-agihan",
    code: "1/3 · 1/3 · 1/3",
    title: "Agihan Daging Korban Sunat",
    description: "1/3 dimakan keluarga · 1/3 disedekah kepada fakir miskin · 1/3 dihadiahkan kepada jiran/sahabat.",
    category: "Fikah (Pelajaran 15)"
  },
  {
    id: "tajwid-mad-lazim",
    code: "Kadar 6 Harakat",
    title: "Semua Jenis Mad Lazim",
    description: "Mad Lazim Kilmi (Mukhaffaf & Muthaqqal) dan Harfi (Mukhaffaf & Muthaqqal) wajib dibaca 6 harakat.",
    category: "Al-Quran (Pelajaran 3)"
  },
  {
    id: "tajwid-qalqalah",
    code: "قُطْبُ جَدٍّ",
    title: "5 Huruf Qalqalah",
    description: "Qaf (ق), Tha (ط), Ba (ب), Jim (ج), Dal (د) - Sugra (lantunan rendah), Kubra (kuat), Akbar (paling kuat bersabdu).",
    category: "Al-Quran (Pelajaran 3)"
  },
  {
    id: "mubiqat-7",
    code: "7 Perkara Al-Mubiqat",
    title: "7 Dosa Besar Membinasakan",
    description: "Syirik, Sihir, Membunuh, Makan Riba, Makan Harta Anak Yatim, Lari Medan Perang, Qazaf (menuduh zina).",
    category: "Hadis (Pelajaran 8)"
  },
  {
    id: "batal-iman-3",
    code: "Iktikad · Kata · Buat",
    title: "3 Cara Batal Iman",
    description: "Iktikad (Hati: Uluhiyyah, Nubuwwah, Ghaibiyyat, Syariah) · Perkataan (Lisan mencaci/menghina) · Perbuatan (Sujud berhala/hina Quran).",
    category: "Akidah (Pelajaran 11)"
  },
  {
    id: "sesat-elak",
    code: "I - S - A - K - D - T",
    title: "6 Cara Menjauhi Ajaran Sesat",
    description: "Ilmu (dalami akidah sahih) · Sahabat (pilih rakan soleh) · Amal (istiqamah) · Kaji (rujuk pihak berkuasa) · Doa · Taubat.",
    category: "Akidah (Pelajaran 12)"
  },
  {
    id: "muamalat-haram",
    code: "R - G - J - D",
    title: "4 Unsur Diharamkan Muamalat",
    description: "Riba (faedah hutang) · Gharar (kesamaran/ketidakpastian) · Judi / Maisir (pertaruhan) · Dharar (kemudaratan/bahaya).",
    category: "Fikah (Pelajaran 16)"
  },
  {
    id: "gerhana-solat",
    code: "2 Rakaat · 4 Ruku'",
    title: "Keistimewaan Solat Gerhana",
    description: "Setiap rakaat ada 2 kali berdiri & 2 kali ruku' (Jumlah: 2 rakaat, 4 ruku', 4 sujud + 2 khutbah).",
    category: "Fikah (Pelajaran 17)"
  },
  {
    id: "munafik-3",
    code: "Dusta · Mungkir · Khianat",
    title: "3 Tanda Orang Munafik",
    description: "Apabila bercakap dia berdusta · Apabila berjanji dia memungkiri · Apabila diberi amanah dia mengkhianati.",
    category: "Akhlak (Pelajaran 22)"
  },
  {
    id: "khauf-raja",
    code: "Takut + Harap Seimbang",
    title: "Keseimbangan Khauf & Raja'",
    description: "Khauf (takut kemurkaan Allah agar jauhi maksiat) + Raja' (harap rahmat Allah agar rajin ibadah). Ibarat 2 sayap burung.",
    category: "Akhlak (Pelajaran 23)"
  },
  {
    id: "wasatiyyah-4",
    code: "I - T - I - K",
    title: "4 Prinsip Wasatiyyah",
    description: "Iqtisad (Kesederhanaan) · Tawazun (Keseimbangan: rohani, jasmani, akal) · I'tidal (Keadilan) · Kamaliyah (Kecemerlangan).",
    category: "Akhlak (Pelajaran 25)"
  }
];
