import { QuizQuestion } from "./quizBank";

export const quizBankT5: QuizQuestion[] = [
  // ==========================================
  // 1. BIDANG AL-QURAN & HADIS (T5)
  // ==========================================
  {
    id: 201,
    field: "al-quran",
    topicName: "Pelajaran 3: Hukum Tajwid (T5)",
    question: "Apakah hukum tajwid apabila huruf Ya bertasydid dan berbaris kasrah bertemu huruf Ya sukun dalam satu kalimah?",
    options: ["Mad Tamkin", "Mad Faraq", "Mad Iwadh", "Mad Silah Tawilah"],
    correctIndex: 0,
    explanation: "Mad Tamkin berlaku apabila Ya bertasydid kasrah bertemu Ya sukun (seperti pada kalimah حُيِّيتُم) dengan kadar bacaan 2 harakat."
  },
  {
    id: 202,
    field: "al-quran",
    topicName: "Pelajaran 3: Hukum Tajwid (T5)",
    question: "Berapakah kadar harakat bacaan yang wajib bagi hukum Mad Faraq?",
    options: ["6 harakat", "2 harakat", "4 atau 5 harakat", "Harus 2, 4, atau 6 harakat"],
    correctIndex: 0,
    explanation: "Mad Faraq berlaku apabila Hamzah istifham bertemu Hamzah wasal pada lam ta'rif dan wajib dibaca panjang dengan kadar 6 harakat."
  },
  {
    id: 203,
    field: "hadis",
    topicName: "Pelajaran 7: Setiap Orang Ialah Pemimpin",
    question: "Berdasarkan hadis riwayat Abdullah bin Umar RA, apakah tanggungjawab utama seorang suami?",
    options: [
      "Memberi nafkah zahir dan batin serta memberi didikan agama kepada keluarga",
      "Menguruskan masakan dan kebersihan rumah tangga secara bersendirian",
      "Bekerja mengikut arahan majikan tanpa bantahan",
      "Menyusun sistem pentadbiran infrastruktur awam"
    ],
    correctIndex: 0,
    explanation: "Suami berperanan sebagai pemimpin keluarga yang bertanggungjawab menyediakan nafkah zahir batin, mendidik isteri dan anak-anak serta memelihara keselamatan mereka."
  },

  // ==========================================
  // 2. BIDANG AKIDAH (T5)
  // ==========================================
  {
    id: 204,
    field: "akidah",
    topicName: "Pelajaran 9: Allah Maha Mengawasi & Menyaksikan",
    question: "Apakah maksud nama Allah SWT Al-Raqib (الرَّقِيب)?",
    options: [
      "Allah Maha Mengawasi semua keadaan dan perbuatan makhluk",
      "Allah Maha Menyaksikan seluruh alam nyata",
      "Allah Maha Mengampuni segala dosa hamba-Nya",
      "Allah Maha Berkuasa menentukan ajal dan maut"
    ],
    correctIndex: 0,
    explanation: "Al-Raqib bererti Allah SWT Maha Mengawasi seluruh keadaan dan perbuatan makhluk secara berterusan termasuk niat di dalam hati."
  },
  {
    id: 205,
    field: "akidah",
    topicName: "Pelajaran 10: Akidah Ahli Sunnah Wal Jamaah",
    question: "Apakah pegangan Ahli Sunnah Wal Jamaah mengenai kedudukan orang beriman yang melakukan dosa besar?",
    options: [
      "Tetap dikira mukmin tetapi dihukum fasik jika tidak bertaubat",
      "Dihukum kafir dan kekal di dalam neraka",
      "Berada di antara mukmin dengan kafir",
      "Gugur iman dan wajib diperangi"
    ],
    correctIndex: 0,
    explanation: "Mengikut iktiqad ASWJ, pelaku dosa besar tetap seorang mukmin (bukan kafir) dan dihukum fasik, serta nasibnya di akhirat terserah kepada keampunan Allah SWT."
  },
  {
    id: 206,
    field: "akidah",
    topicName: "Pelajaran 10: Akidah Ahli Sunnah Wal Jamaah",
    question: "Aliran manakah yang mempercayai konsep 'Al-Manzilah Baina al-Manzilatain' (kedudukan antara dua darjat)?",
    options: ["Muktazilah", "Syiah", "Khawarij", "Jabariyyah"],
    correctIndex: 0,
    explanation: "Konsep al-Manzilah Baina al-Manzilatain ialah salah satu daripada 5 prinsip Usul Khamsah Muktazilah bagi menentukan status pelaku dosa besar."
  },

  // ==========================================
  // 3. BIDANG FIKAH (T5)
  // ==========================================
  {
    id: 207,
    field: "fikah",
    topicName: "Pelajaran 11: Solat Sunat Istikharah & Tasbih",
    question: "Berapakah bilangan bacaan tasbih dalam satu rakaat Solat Sunat Tasbih?",
    options: ["75 kali", "50 kali", "100 kali", "300 kali"],
    correctIndex: 0,
    explanation: "Setiap rakaat mengandungi 75 kali tasbih, menjadikan jumlah keseluruhan 300 kali tasbih dalam 4 rakaat."
  },
  {
    id: 208,
    field: "fikah",
    topicName: "Pelajaran 12: Perkahwinan",
    question: "Antara berikut, yang manakah merupakan wanita yang HARAM SEMENTARA (Haram Mu'aqqat) dikahwini?",
    options: [
      "Mengumpulkan dua orang adik-beradik perempuan dalam satu masa",
      "Ibu kandung dan nenek sebelah ibu",
      "Ibu mertua dan anak tiri yang ibunya telah disetubuhi",
      "Ibu susuan dan adik-beradik susuan"
    ],
    correctIndex: 0,
    explanation: "Memperisterikan dua adik-beradik serentak adalah haram sementara; jika salah seorang meninggal atau diceraikan dan tamat iddah, saudaranya halal dikahwini."
  },
  {
    id: 209,
    field: "fikah",
    topicName: "Pelajaran 13: Isu-Isu dalam Perkahwinan",
    question: "Apakah istilah bagi pembubaran perkahwinan atas kehendak isteri dengan bayaran ganti rugi ('iwad) kepada suami?",
    options: ["Khul' (Tebus Talaq)", "Fasakh", "Li'an", "Ruju'"],
    correctIndex: 0,
    explanation: "Khul' ialah pembubaran perkahwinan atas persetujuan atau kehendak isteri dengan membayar pampasan ('iwad) kepada suami."
  },
  {
    id: 210,
    field: "fikah",
    topicName: "Pelajaran 13: Isu-Isu dalam Perkahwinan",
    question: "Berapakah tempoh 'iddah bagi isteri yang diceraikan hidup dalam keadaan hamil?",
    options: [
      "Sehingga melahirkan anak",
      "3 kali suci",
      "3 bulan hijrah",
      "4 bulan 10 hari"
    ],
    correctIndex: 0,
    explanation: "Bagi wanita hamil, sama ada bercerai hidup atau bercerai mati, tempoh 'iddahnya tamat sebaik sahaja melahirkan kandungan."
  },
  {
    id: 211,
    field: "fikah",
    topicName: "Pelajaran 14: Pengurusan Harta Selepas Kematian",
    question: "Berapakah kadar MAKSIMUM harta yang dibenarkan untuk diwasiatkan dalam Islam?",
    options: ["1/3 daripada baki harta", "1/2 daripada baki harta", "1/4 daripada baki harta", "2/3 daripada baki harta"],
    correctIndex: 0,
    explanation: "Wasiat hanya dibenarkan maksimum 1/3 daripada baki harta peninggalan selepas ditolak belanja jenazah dan hutang piutang."
  },
  {
    id: 212,
    field: "fikah",
    topicName: "Pelajaran 14: Pengurusan Harta Selepas Kematian",
    question: "Apakah bahagian faraid yang diterima oleh seorang suami sekiranya si mati MENINGGALKAN anak?",
    options: ["1/4", "1/2", "1/8", "1/6"],
    correctIndex: 0,
    explanation: "Suami mendapat 1/2 jika si mati tiada anak, dan mendapat 1/4 jika si mati mempunyai anak."
  },
  {
    id: 213,
    field: "fikah",
    topicName: "Pelajaran 15: Jenayah dalam Islam",
    question: "Berapakah bilangan sebatan hukuman hudud bagi kesalahan menuduh wanita baik berzina tanpa 4 saksi (Qazaf)?",
    options: ["80 kali sebatan", "40 kali sebatan", "100 kali sebatan", "50 kali sebatan"],
    correctIndex: 0,
    explanation: "Hukuman hudud bagi penuduh qazaf ialah 80 kali sebatan dan persaksiannya tidak diterima lagi selama-lamanya."
  },

  // ==========================================
  // 4. BIDANG SIRAH & TAMADUN ISLAM (T5)
  // ==========================================
  {
    id: 214,
    field: "sirah",
    topicName: "Pelajaran 16: Kerajaan Uthmaniyah",
    question: "Pada tahun berapakah Kota Constantinople (Qustantiniah) berjaya dibuka oleh Sultan Muhammad al-Fatih?",
    options: ["1453 Masihi (857 Hijrah)", "1299 Masihi (699 Hijrah)", "1517 Masihi (923 Hijrah)", "1492 Masihi (897 Hijrah)"],
    correctIndex: 0,
    explanation: "Kota Constantinople dibuka pada 857 H / 1453 M oleh Sultan Muhammad al-Fatih, merealisasikan sabda Nabi SAW."
  },
  {
    id: 215,
    field: "sirah",
    topicName: "Pelajaran 16: Kerajaan Uthmaniyah",
    question: "Apakah nama pasukan tentera elit infantri yang ditubuhkan pada zaman Sultan Murad I?",
    options: ["Janissary (Janissari)", "Mamluk", "Qizilbash", "Kavalri Seljuk"],
    correctIndex: 0,
    explanation: "Pasukan tentera elit infantri khas Kerajaan Uthmaniyah dinamakan Janissary (Janissari) yang terkenal berdisiplin tinggi."
  },
  {
    id: 216,
    field: "sirah",
    topicName: "Pelajaran 17: Keunggulan Tokoh Islam",
    question: "Apakah kejayaan ketenteraan tersohor yang dicapai oleh Salahuddin al-Ayyubi?",
    options: [
      "Membebaskan Baitul Maqdis daripada tentera Salib",
      "Membuka Kota Constantinople",
      "Mengalahkan empayar Parsi di Qadisiyyah",
      "Membina empayar Mughal di India"
    ],
    correctIndex: 0,
    explanation: "Salahuddin al-Ayyubi memimpin tentera Islam menewaskan tentera Salib dalam Perang Hittin dan membebaskan Baitul Maqdis pada 583 H."
  },
  {
    id: 217,
    field: "sirah",
    topicName: "Pelajaran 17: Keunggulan Tokoh Islam",
    question: "Buku wirid dan doa harian 'Al-Ma'thurat' telah disusun oleh tokoh dakwah yang bernama:",
    options: ["Hassan al-Banna", "Sayyid Qutb", "Mustafa al-Siba'i", "Yusuf al-Qaradawi"],
    correctIndex: 0,
    explanation: "Hassan al-Banna, pengasas gerakan Ikhwanul Muslimin, menyusun himpunan zikir dan doa al-Quran serta Hadis yang dikenali sebagai al-Ma'thurat."
  },

  // ==========================================
  // 5. BIDANG AKHLAK ISLAMIYAH (T5)
  // ==========================================
  {
    id: 218,
    field: "akhlak",
    topicName: "Pelajaran 18: Tawaduk Menzahirkan Kesucian Jiwa",
    question: "Apakah maksud sifat Tawaduk?",
    options: [
      "Sikap kerendahan hati kepada Allah SWT dan sesama manusia",
      "Ketaatan berterusan dalam beribadah",
      "Rasa takut akan kemurkaan Allah",
      "Sikap berpada-pada dengan rezeki yang ada"
    ],
    correctIndex: 0,
    explanation: "Tawaduk ialah sikap rendah hati tanpa sombong atau takabur, bersyukur dengan anugerah Allah SWT."
  },
  {
    id: 219,
    field: "akhlak",
    topicName: "Pelajaran 20: Alam Sekitar Penjana Minda",
    question: "Bilakah sambutan Hari Alam Sekitar Malaysia diraikan setiap tahun?",
    options: [
      "21 hingga 27 Oktober",
      "1 hingga 7 Jun",
      "15 hingga 21 Ogos",
      "22 hingga 28 April"
    ],
    correctIndex: 0,
    explanation: "Hari Alam Sekitar Malaysia disambut pada 21 hingga 27 Oktober setiap tahun untuk meningkatkan kesedaran penjagaan alam sekitar."
  },
  {
    id: 220,
    field: "akhlak",
    topicName: "Pelajaran 21: Sifat Mazmumah Meracuni Hati",
    question: "Apakah sifat mazmumah yang merujuk kepada 'perasaan dengki melihat kelebihan orang lain dan mengharapkan kelebihan itu hilang daripadanya'?",
    options: ["Hasad", "Riya'", "Ujub", "Ghadab"],
    correctIndex: 0,
    explanation: "Hasad (dengki) ialah perasaan benci dan sakit hati melihat nikmat orang lain serta mengharapkan nikmat tersebut lenyap."
  }
];
