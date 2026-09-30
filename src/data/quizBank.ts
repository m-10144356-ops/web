export interface QuizQuestion {
  id: number;
  field: "al-quran" | "hadis" | "akidah" | "fikah" | "sirah" | "akhlak";
  topicName: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export const quizBank: QuizQuestion[] = [
  // ==========================================
  // 1. BIDANG AL-QURAN
  // ==========================================
  {
    id: 1,
    field: "al-quran",
    topicName: "Pelajaran 3: Hukum Tajwid",
    question: "Berapakah kadar harakat bacaan bagi hukum Mad Silah Qasirah?",
    options: ["4 atau 5 harakat", "2 harakat", "6 harakat", "3 harakat"],
    correctIndex: 1,
    explanation: "Mad Silah Qasirah berlaku apabila Ha al-Dhamir terletak antara dua huruf berbaris dan bertemu huruf selain Hamzah, dengan kadar bacaan 2 harakat."
  },
  {
    id: 2,
    field: "al-quran",
    topicName: "Pelajaran 3: Hukum Tajwid",
    question: "Apakah hukum tajwid pada kalimah «وَلَا ٱلضَّآلِّينَ»?",
    options: [
      "Mad Lazim Kilmi Mukhaffaf",
      "Mad Lazim Harfi Muthaqqal",
      "Mad Silah Tawilah",
      "Mad Lazim Kilmi Muthaqqal"
    ],
    correctIndex: 3,
    explanation: "Ia merupakan Mad Lazim Kilmi Muthaqqal kerana huruf mad bertemu huruf bersukun yang bersyaddah dalam satu kalimah, dan dibaca 6 harakat."
  },
  {
    id: 3,
    field: "al-quran",
    topicName: "Pelajaran 3: Hukum Tajwid",
    question: "Lafaz manakah yang mengandungi hukum Qalqalah Akbar ketika waqaf?",
    options: [
      "وَلَمْ يُولَدْ (Surah al-Ikhlas)",
      "وَتَبَّ (Surah al-Masad)",
      "سَنُقْرِئُكَ (Surah al-A'la)",
      "ٱلْفَلَقِ (Surah al-Falaq)"
    ],
    correctIndex: 1,
    explanation: "Qalqalah Akbar berlaku pada huruf qalqalah yang bertanda syaddah (sabdu) di hujung kalimah ketika waqaf, dengan lantunan paling kuat."
  },
  {
    id: 4,
    field: "al-quran",
    topicName: "Pelajaran 4: Larangan Rasuah",
    question: "Berdasarkan Surah al-Baqarah ayat 188, apakah maksud rasuah?",
    options: [
      "Perkongsian modal perniagaan secara sukarela",
      "Pemberian hadiah tanda penghargaan rasmi",
      "Pertukaran mata wang asing mengikut kadar semasa",
      "Pemberian atau suapan untuk memalsukan kebenaran dan membenarkan kepalsuan"
    ],
    correctIndex: 3,
    explanation: "Rasuah ialah sebarang suapan untuk memalsukan kebenaran atau merampas hak orang lain secara batil."
  },
  {
    id: 5,
    field: "al-quran",
    topicName: "Pelajaran 4: Larangan Rasuah",
    question: "Antara berikut, yang manakah BUKAN bentuk kesalahan rasuah?",
    options: [
      "Mengemukakan tuntutan palsu bagi kerja yang tidak dilakukan",
      "Memberikan sumbangan sedekah secara ikhlas kepada fakir miskin",
      "Meminta suapan wang untuk meluluskan tender perniagaan",
      "Menyalahgunakan kedudukan untuk memberi kontrak kepada ahli keluarga"
    ],
    correctIndex: 1,
    explanation: "Sedekah ikhlas kepada orang miskin adalah amalan kebajikan, manakala tiga yang lain ialah kesalahan rasuah menurut syarak dan SPRM."
  },
  {
    id: 6,
    field: "al-quran",
    topicName: "Pelajaran 5: Memahami Sunnatullah",
    question: "Apakah sebab turun Surah Ali 'Imran ayat 139 («وَلَا تَهِنُوا۟ وَلَا تَحْزَنُوا۟»)?",
    options: [
      "Kemenangan besar dalam Perang Badar",
      "Perjanjian Hudaibiyyah",
      "Pembukaan Kota Mekah",
      "Kekalahan tentera Islam dalam Perang Uhud"
    ],
    correctIndex: 3,
    explanation: "Ayat 139 diturunkan selepas Perang Uhud (3H) untuk menaikkan semula semangat para sahabat yang berduka cita atas gugurnya 70 orang syuhada."
  },
  {
    id: 7,
    field: "al-quran",
    topicName: "Pelajaran 5: Memahami Sunnatullah",
    question: "Iktibar daripada kejayaan pentadbiran Nabi Yusuf AS berdasarkan Sunnatullah ialah...",
    options: [
      "Kemenangan bergantung kepada nasib semata-mata",
      "Kejayaan memerlukan perancangan teliti, integriti dan strategi pengurusan sumber",
      "Harta yang banyak menjamin kejayaan tanpa perlu berusaha",
      "Setiap perancangan boleh diabaikan apabila ditimpa kemarau"
    ],
    correctIndex: 1,
    explanation: "Nabi Yusuf AS merancang simpanan makanan dan pengurusan bijirin selama 7 tahun bagi menghadapi kemarau panjang."
  },
  {
    id: 8,
    field: "al-quran",
    topicName: "Pelajaran 6: Larangan Mempersendakan Agama",
    question: "Apakah tindakan orang yang mempersendakan agama berdasarkan Surah al-An'am ayat 70?",
    options: [
      "Menuntut ilmu agama secara mendalam di masjid",
      "Menyebarkan risalah dakwah kepada masyarakat",
      "Memperbanyakkan sedekah secara sembunyi",
      "Menjadikan agama sebagai permainan dan hiburan"
    ],
    correctIndex: 3,
    explanation: "Surah al-An'am: 70 menegur mereka yang menjadikan agama sebagai bahan sendaan, gurauan dan hiburan kosong."
  },
  {
    id: 9,
    field: "al-quran",
    topicName: "Pelajaran 7: Dakwah Pemacu Kemajuan",
    question: "Berdasarkan Surah Fussilat ayat 33, perkataan yang terbaik di sisi Allah ialah perkataan orang yang...",
    options: [
      "Berdebat untuk menewaskan lawan dalam majlis",
      "Menyeru kepada Allah (berdakwah), beramal soleh dan berbangga sebagai Muslim",
      "Memuji kemewahan dunia dan berbangga dengan harta",
      "Menulis puisi syair untuk hiburan semata-mata"
    ],
    correctIndex: 1,
    explanation: "Surah Fussilat: 33 menegaskan tiada perkataan yang lebih baik selain daripada seruan berdakwah, beramal soleh dan mengaku berserah diri sebagai Muslim."
  },

  // ==========================================
  // 2. BIDANG HADIS
  // ==========================================
  {
    id: 10,
    field: "hadis",
    topicName: "Pelajaran 8: Menghindari Dosa-Dosa Besar",
    question: "Apakah maksud perkataan 'Al-Mubiqat' (الموبقات) dalam hadis Rasulullah SAW?",
    options: [
      "Amalan-amalan sunat yang dianjurkan",
      "Perkara-perkara syubhat yang harus",
      "Peraturan adat masyarakat Arab silam",
      "Perkara-perkara yang membinasakan dan merosakkan"
    ],
    correctIndex: 3,
    explanation: "Al-Mubiqat bermaksud al-Muhlikat iaitu perkara-perkara yang merosakkan dan membinasakan manusia di dunia dan akhirat."
  },
  {
    id: 11,
    field: "hadis",
    topicName: "Pelajaran 8: Menghindari Dosa-Dosa Besar",
    question: "Apakah hukuman hudud yang ditetapkan ke atas pelaku qazaf (menuduh wanita suci berzina tanpa 4 saksi)?",
    options: ["100 kali sebatan", "80 kali sebatan", "Penjara seumur hidup", "Rejam sampai mati"],
    correctIndex: 1,
    explanation: "Hukuman hudud bagi kesalahan qazaf ialah 80 kali sebatan berdasarkan Surah an-Nur ayat 4."
  },
  {
    id: 12,
    field: "hadis",
    topicName: "Pelajaran 8: Menghindari Dosa-Dosa Besar",
    question: "Manakah antara berikut merupakan contoh Syirik Khafi?",
    options: [
      "Menyembah patung berhala di kuil",
      "Meyakini matahari sebagai tuhan pencipta",
      "Menolak kewujudan malaikat dan hari kiamat",
      "Melakukan solat dengan niat mengharapkan pujian manusia (riak)"
    ],
    correctIndex: 3,
    explanation: "Syirik Khafi (tersembunyi) ialah sifat riak, ujub, dan takbur dalam beramal yang merosakkan pahala ibadah."
  },
  {
    id: 13,
    field: "hadis",
    topicName: "Pelajaran 9: Kemuliaan Berdikari",
    question: "Mengapakah Rasulullah SAW menyatakan bahawa mengambil seikat kayu api untuk dijual lebih baik daripada meminta sedekah?",
    options: [
      "Kerana kayu api bernilai sangat mahal di kota Madinah",
      "Kerana ia memelihara maruah diri dan rezeki diperoleh melalui titik peluh sendiri",
      "Kerana meminta sedekah tidak dibenarkan bagi orang kaya sahaja",
      "Kerana berniaga kayu api adalah syarat wajib sah iman"
    ],
    correctIndex: 1,
    explanation: "Hadis mengajar bahawa pekerjaan halal walau berat adalah mulia kerana menjaga maruah daripada kehinaan meminta-minta."
  },
  {
    id: 14,
    field: "hadis",
    topicName: "Pelajaran 9: Kemuliaan Berdikari",
    question: "Antara 5 konsep berdikari dalam Islam termasuklah...",
    options: [
      "Bergantung harap kepada bantuan kewangan jiran tetangga",
      "Mengambil harta orang lain secara pinjaman tanpa bayar",
      "Menolak penggunaan teknologi moden dalam pekerjaan",
      "Berilmu, berkemahiran, berdisiplin dan bertawakal"
    ],
    correctIndex: 3,
    explanation: "Konsep berdikari merangkumi bersungguh-sungguh, berilmu dan berkemahiran, berdisiplin, berani membuat keputusan dan bertawakal."
  },

  // ==========================================
  // 3. BIDANG AKIDAH
  // ==========================================
  {
    id: 15,
    field: "akidah",
    topicName: "Pelajaran 10: Al-Muntaqim",
    question: "Nama Allah SWT Al-Muntaqim membawa maksud bahawa Allah SWT...",
    options: [
      "Maha Pemberi Rezeki kepada seluruh makhluk",
      "Maha Pembalas terhadap orang yang melampaui batas",
      "Maha Pengampun segala dosa hamba-Nya",
      "Maha Mendengar setiap bisikan hati"
    ],
    correctIndex: 1,
    explanation: "Al-Muntaqim bermaksud Allah Maha Pembalas yang menimpakan azab ke atas orang yang zalim dan ingkar."
  },
  {
    id: 16,
    field: "akidah",
    topicName: "Pelajaran 10: Al-Jabbar",
    question: "Apakah dalil naqli nama Allah SWT Al-Jabbar?",
    options: [
      "Surah az-Zukhruf ayat 41",
      "Surah al-Baqarah ayat 188",
      "Surah an-Nur ayat 4",
      "Surah al-Hasyr ayat 23"
    ],
    correctIndex: 3,
    explanation: "Nama Al-Jabbar termaktub dalam Surah al-Hasyr ayat 23 («ٱلْعَزِيزُ ٱلْجَبَّارُ ٱلْمُتَكَبِّرُ»)."
  },
  {
    id: 17,
    field: "akidah",
    topicName: "Pelajaran 11: Membatalkan Iman",
    question: "Seseorang Muslim boleh terbatal imannya melalui tiga cara iaitu...",
    options: [
      "Pakaian, makanan, dan tempat tinggal",
      "Iktikad, perkataan, dan perbuatan",
      "Keturunan, bangsa, dan bahasa",
      "Harta, pangkat, dan kemasyhuran"
    ],
    correctIndex: 1,
    explanation: "Tiga cara terbatal iman mengikut sepakat ulama ialah melalui iktikad (hati), perkataan (lisan), dan perbuatan (anggota)."
  },
  {
    id: 18,
    field: "akidah",
    topicName: "Pelajaran 11: Membatalkan Iman",
    question: "Manakah antara berikut merupakan contoh batal iman melalui iktikad dalam aspek Al-Ghaibiyyat?",
    options: [
      "Menafikan Nabi Muhammad SAW nabi terakhir",
      "Mencaci hukum pemakaian hijab",
      "Sujud menyembah matahari",
      "Mengingkari kewujudan hari kiamat, syurga, dan neraka"
    ],
    correctIndex: 3,
    explanation: "Menafikan hari kiamat, malaikat, syurga dan neraka adalah pembatalan iman dalam aspek Al-Ghaibiyyat (perkara ghaib)."
  },
  {
    id: 19,
    field: "akidah",
    topicName: "Pelajaran 11: Membatalkan Iman",
    question: "Apakah syarat sah seseorang itu dihukum terbatal imannya?",
    options: [
      "Dilakukan ketika dipaksa di bawah ancaman bunuh",
      "Tahu keharamannya, sedar, atas kerelaan sendiri, dan berniat sengaja",
      "Tersasul lidah tanpa disengajakan",
      "Dilakukan ketika dalam keadaan tidur atau hilang akal"
    ],
    correctIndex: 1,
    explanation: "Syarat batal iman ialah tahu hukumnya, waras/sedar, rela tanpa paksaan, dan berniat sengaja."
  },
  {
    id: 20,
    field: "akidah",
    topicName: "Pelajaran 12: Menghindari Ajaran Sesat",
    question: "Antara ciri kesesatan dalam aspek ibadah bagi ajaran sesat ialah...",
    options: [
      "Menunaikan solat sunat Dhuha di rumah",
      "Membaca zikir al-Mathurat pada waktu pagi",
      "Menuntut ilmu fikah berasaskan mazhab muktabar",
      "Mengubah rukun atau kaifiat solat dan menghapuskan solat fardu"
    ],
    correctIndex: 3,
    explanation: "Ajaran sesat sering meminda rukun solat seperti solat dengan niat sahaja atau menunaikan haji di tempat lain selain Mekah."
  },
  {
    id: 21,
    field: "akidah",
    topicName: "Pelajaran 12: Menghindari Ajaran Sesat",
    question: "Formula I-S-A-K-D-T merujuk kepada langkah...",
    options: [
      "Syarat sah sembelihan binatang",
      "Cara menjauhi ajaran sesat (Ilmu, Sahabat, Amal, Kaji, Doa, Taubat)",
      "Rukun menunaikan haji di Mekah",
      "Prinsip pengurusan muamalat perbankan"
    ],
    correctIndex: 1,
    explanation: "Formula I-S-A-K-D-T ialah panduan praktikal untuk memelihara diri daripada pengaruh ajaran sesat."
  },

  // ==========================================
  // 4. BIDANG FIKAH
  // ==========================================
  {
    id: 22,
    field: "fikah",
    topicName: "Pelajaran 13: Haji dan Umrah",
    question: "Apakah rukun haji yang membezakannya secara khusus daripada rukun umrah?",
    options: ["Niat ihram", "Tawaf di Kaabah", "Tahallul", "Wukuf di Arafah"],
    correctIndex: 3,
    explanation: "Wukuf di Padang Arafah pada 9 Zulhijjah adalah rukun haji yang tidak ada dalam ibadah umrah."
  },
  {
    id: 23,
    field: "fikah",
    topicName: "Pelajaran 13: Haji dan Umrah",
    question: "Apakah nama miqat makani bagi jemaah haji yang datang dari Malaysia?",
    options: ["Zulhulaifah", "Qarnul Manazil", "Yalamlam", "al-Juhfah"],
    correctIndex: 1,
    explanation: "Qarnul Manazil (as-Sail al-Kabir) adalah miqat makani bagi jemaah dari Malaysia dan rantau Asia Tenggara."
  },
  {
    id: 24,
    field: "fikah",
    topicName: "Pelajaran 13: Haji dan Umrah",
    question: "Mengerjakan ibadah umrah terlebih dahulu dalam bulan haji, kemudian mengerjakan haji dipanggil...",
    options: ["Haji Ifrad", "Haji Qiran", "Haji Badal", "Haji Tamattuk"],
    correctIndex: 3,
    explanation: "Haji Tamattuk ialah mengerjakan umrah dahulu, kemudian bertahallul dan berihram haji pada 8 Zulhijjah (dikenakan dam)."
  },
  {
    id: 25,
    field: "fikah",
    topicName: "Pelajaran 14: Sembelihan",
    question: "Sembelihan yang sah wajib memutuskan dua urat iaitu...",
    options: [
      "Urat saraf tunjang dan urat sendi",
      "Urat halkum (pernafasan) dan urat marih (makanan)",
      "Urat lidah dan urat telinga",
      "Urat kaki hadapan dan urat ekor"
    ],
    correctIndex: 1,
    explanation: "Urat halkum (saluran nafas) dan urat marih (saluran makanan) wajib terputus secara sempurna."
  },
  {
    id: 26,
    field: "fikah",
    topicName: "Pelajaran 14: Sembelihan",
    question: "Alat sembelihan diharamkan daripada diperbuat daripada...",
    options: ["Besi keluli tajam", "Batu tajam", "Kaca tajam", "Tulang, gigi, dan kuku"],
    correctIndex: 3,
    explanation: "Hadis Nabi SAW melarang menyembelih menggunakan tulang, kuku, atau gigi haiwan."
  },
  {
    id: 27,
    field: "fikah",
    topicName: "Pelajaran 14: Sembelihan",
    question: "Apakah maksud 'Hayat Mustaqirrah' pada binatang sembelihan?",
    options: [
      "Binatang yang telah mati lemas dalam air",
      "Nyawa yang stabil dan haiwan masih cergas bergerak sebelum disembelih",
      "Binatang yang telah nazak parah akibat dilanggar lori",
      "Binatang yang tidak bernafas lagi"
    ],
    correctIndex: 1,
    explanation: "Hayat Mustaqirrah bermaksud binatang itu masih hidup dengan nyawa stabil, mampu bergerak dan bukan di ambang maut."
  },
  {
    id: 28,
    field: "fikah",
    topicName: "Pelajaran 15: Korban dan Akikah",
    question: "Bilakah tempoh masa pelaksanaan ibadah korban?",
    options: [
      "1 hingga 10 Zulhijjah sahaja",
      "Sepanjang bulan Zulhijjah",
      "Pada hari pertama Hari Raya Aidilfitri",
      "10 Zulhijjah selepas solat Aidiladha sehingga terbenam matahari 13 Zulhijjah"
    ],
    correctIndex: 3,
    explanation: "Waktu korban bermula selepas solat Aidiladha 10 Zulhijjah hingga akhir hari Tasyriq (13 Zulhijjah)."
  },
  {
    id: 29,
    field: "fikah",
    topicName: "Pelajaran 15: Korban dan Akikah",
    question: "Bagi korban nazar (wajib), bagaimanakah pembahagian dagingnya?",
    options: [
      "Dibahagikan 1/3 kepada orang yang bernazar dan keluarganya",
      "Wajib disedekahkan SEMUA kepada fakir miskin, pihak bernazar haram memakannya",
      "Boleh dijual kulitnya untuk menampung kos sembelihan",
      "Disimpan di rumah untuk bekalan setahun"
    ],
    correctIndex: 1,
    explanation: "Semua daging korban nazar wajib disedekahkan kepada fakir miskin; orang yang bernazar haram memakannya walau sedikit."
  },
  {
    id: 30,
    field: "fikah",
    topicName: "Pelajaran 15: Korban dan Akikah",
    question: "Kadar akikah yang afdhal bagi bayi lelaki ialah...",
    options: ["1 ekor kambing", "3 ekor kambing", "1 ekor unta penuh", "2 ekor kambing"],
    correctIndex: 3,
    explanation: "Sunat muakkad 2 ekor kambing bagi anak lelaki dan 1 ekor kambing bagi anak perempuan."
  },
  {
    id: 31,
    field: "fikah",
    topicName: "Pelajaran 16: Muamalat Islam",
    question: "Akad sewaan bagi memanfaatkan sesuatu yang bermanfaat dengan bayaran tertentu dikenali sebagai...",
    options: ["Mudharabah", "Ijarah", "Musyarakah", "Wadi'ah"],
    correctIndex: 1,
    explanation: "Ijarah ialah akad sewaan manfaat aset atau perkhidmatan tenaga kerja dengan bayaran upah tertentu."
  },
  {
    id: 32,
    field: "fikah",
    topicName: "Pelajaran 16: Muamalat Islam",
    question: "Menjual ikan yang masih bebas di laut atau burung di udara merupakan contoh transaksi yang mengandungi unsur...",
    options: ["Riba al-Fadhl", "Hibah batil", "Musyarakah", "Gharar (kesamaran)"],
    correctIndex: 3,
    explanation: "Gharar ialah kesamaran atau ketidakpastian mengenai kewujudan, sifat, atau keupayaan menyerahkan barang akad."
  },
  {
    id: 33,
    field: "fikah",
    topicName: "Pelajaran 16: Muamalat Islam",
    question: "Akad di mana pemodal menyerahkan modal penuh kepada pengusaha untuk diniagakan dan untung dibahagi mengikut persetujuan dikenali sebagai...",
    options: ["Musyarakah", "Mudharabah", "Kafalah", "Wakalah"],
    correctIndex: 1,
    explanation: "Mudharabah ialah perkongsian antara pemilik modal (rabbul mal) dan pengusaha (mudarib)."
  },
  {
    id: 34,
    field: "fikah",
    topicName: "Pelajaran 17: Solat Dhuha & Gerhana",
    question: "Waktu mula solat sunat Dhuha ialah...",
    options: [
      "Tepat ketika azan Subuh berkumandang",
      "Selepas matahari tergelincir masuk waktu Zohor",
      "Selepas solat fardu Asar",
      "Kira-kira 28 minit selepas terbit matahari (syuruq)"
    ],
    correctIndex: 3,
    explanation: "Waktu Dhuha bermula selepas matahari naik segalah iaitu sekitar 28 minit selepas waktu syuruq."
  },
  {
    id: 35,
    field: "fikah",
    topicName: "Pelajaran 17: Solat Dhuha & Gerhana",
    question: "Apakah ciri keistimewaan solat sunat gerhana (Kusuf/Khusuf)?",
    options: [
      "Ditunaikan dengan 4 rakaat 1 salam tanpa ruku'",
      "Mempunyai 2 kali berdiri dan 2 kali ruku' dalam setiap rakaat",
      "Tiada bacaan Surah al-Fatihah",
      "Wajib dilakukan secara bersendirian di rumah"
    ],
    correctIndex: 1,
    explanation: "Solat gerhana mempunyai 2 kali berdiri dan 2 kali ruku' dalam setiap rakaat, berjumlah 4 ruku' dan 4 sujud dalam 2 rakaat."
  },

  // ==========================================
  // 5. BIDANG SIRAH DAN TAMADUN ISLAM
  // ==========================================
  {
    id: 36,
    field: "sirah",
    topicName: "Pelajaran 18: Khulafa' al-Rashidin",
    question: "Siapakah sahabat yang diamanahkan mengetuai jawatankuasa menghimpunkan al-Quran pada zaman Khalifah Abu Bakar RA?",
    options: ["Muawiyah bin Abi Sufyan RA", "Khalid bin al-Walid RA", "Abdullah bin Mas'ud RA", "Zaid bin Thabit RA"],
    correctIndex: 3,
    explanation: "Zaid bin Thabit RA dilantik kerana beliau hafiz al-Quran, jurutulis wahyu baginda SAW, dan sangat amanah serta teliti."
  },
  {
    id: 37,
    field: "sirah",
    topicName: "Pelajaran 18: Khulafa' al-Rashidin",
    question: "Antara pembaharuan pentadbiran yang diasaskan oleh Khalifah Umar bin al-Khattab RA termasuklah...",
    options: [
      "Membina armada kapal perang tentera laut pertama",
      "Menubuhkan Majlis Syura, jabatan Diwan, dan menetapkan Takwim Hijrah",
      "Membina Baitul Hikmah di kota Baghdad",
      "Mencetak mata wang dinar Islam pertama bertulisan Arab"
    ],
    correctIndex: 1,
    explanation: "Khalifah Umar RA mengasaskan Majlis Syura, Diwan al-Jund, Baitulmal dan mengisytiharkan kalendar Takwim Hijrah."
  },
  {
    id: 38,
    field: "sirah",
    topicName: "Pelajaran 18: Khulafa' al-Rashidin",
    question: "Penyelarasan penulisan al-Quran mengikut dialek Arab Quraisy yang dikenali sebagai Mushaf Uthmani dilaksanakan pada zaman...",
    options: ["Saidina Abu Bakar RA", "Saidina Umar RA", "Saidina Ali RA", "Saidina Uthman bin Affan RA"],
    correctIndex: 3,
    explanation: "Khalifah Uthman bin Affan RA menyelaraskan mushaf al-Quran bagi mengelakkan pertikaian bacaan dalam kalangan umat Islam."
  },
  {
    id: 39,
    field: "sirah",
    topicName: "Pelajaran 19: Kerajaan Umayyah",
    question: "Siapakah pengasas Kerajaan Umayyah dan berpusat di manakah kerajaannya?",
    options: [
      "Abu al-Abbas as-Saffah di Baghdad, Iraq",
      "Muawiyah bin Abi Sufyan di Damsyik, Syria",
      "Marwan bin Muhammad di Madinah",
      "Harun al-Rasyid di Kaherah, Mesir"
    ],
    correctIndex: 1,
    explanation: "Kerajaan Umayyah diasaskan oleh Muawiyah bin Abi Sufyan pada 41 Hijrah berpusat di Damsyik, Syria."
  },
  {
    id: 40,
    field: "sirah",
    topicName: "Pelajaran 19: Kerajaan Umayyah",
    question: "Apakah sumbangan besar Khalifah Umar bin Abd al-Aziz dalam bidang hadis?",
    options: [
      "Membina bangunan balai cerap falak",
      "Membuka wilayah Sepanyol (Andalus)",
      "Mencipta mata wang dinar pertama",
      "Mengarahkan pembukuan hadis rasmi oleh Ibn Shihab al-Zuhri"
    ],
    correctIndex: 3,
    explanation: "Khalifah Umar bin Abd al-Aziz mengarahkan Ibn Shihab al-Zuhri mengumpul dan membukukan hadis nabi secara rasmi."
  },
  {
    id: 41,
    field: "sirah",
    topicName: "Pelajaran 20: Kerajaan Abbasiyah",
    question: "Baitul Hikmah ialah pusat keilmuan dan penterjemahan terkemuka Kerajaan Abbasiyah yang diasaskan pada zaman...",
    options: ["Khalifah Muawiyah bin Abi Sufyan", "Khalifah Harun al-Rasyid", "Khalifah al-Walid", "Abu Ismail al-Mu'tasim"],
    correctIndex: 1,
    explanation: "Baitul Hikmah diasaskan oleh Khalifah Harun al-Rasyid dan diperkembangkan peranannya oleh Khalifah al-Makmun."
  },
  {
    id: 42,
    field: "sirah",
    topicName: "Pelajaran 20: Kerajaan Abbasiyah",
    question: "Apakah peristiwa tragis yang menamatkan Kerajaan Abbasiyah pada 1258 Masihi (656 Hijrah)?",
    options: [
      "Perang Salib merebut Baitulmaqdis",
      "Letusan gunung berapi di Hijaz",
      "Pemberontakan puak Khawarij di Kufah",
      "Serangan tentera Mongol pimpinan Hulagu Khan ke atas kota Baghdad"
    ],
    correctIndex: 3,
    explanation: "Baghdad musnah ditawan tentera Mongol pimpinan Hulagu Khan pada tahun 1258M, menandakan kejatuhan Abbasiyah."
  },
  {
    id: 43,
    field: "sirah",
    topicName: "Pelajaran 21: Tokoh Empat Mazhab",
    question: "Kitab Al-Muwatta' (الْمُوَطَّأُ) merupakan karya hadis dan fikah tersohor yang dikarang oleh...",
    options: ["Imam Abu Hanifah", "Imam Malik bin Anas", "Imam al-Syafi'i", "Imam Ahmad bin Hanbal"],
    correctIndex: 1,
    explanation: "Kitab Al-Muwatta' ialah karya agung Imam Malik r.h. (Imam Mazhab Maliki) di Madinah."
  },
  {
    id: 44,
    field: "sirah",
    topicName: "Pelajaran 21: Tokoh Empat Mazhab",
    question: "Kitab Al-Risalah karangan Imam al-Syafi'i terkenal sebagai kitab terawal dalam disiplin...",
    options: ["Ilmu Falak dan Astronomi", "Ilmu Geografi", "Ilmu Nahu dan Saraf", "Ilmu Usul al-Fiqh"],
    correctIndex: 3,
    explanation: "Kitab Al-Risalah merupakan karya pertama di dunia yang menyusun kaedah dan disiplin Usul al-Fiqh."
  },
  {
    id: 45,
    field: "sirah",
    topicName: "Pelajaran 21: Tokoh Empat Mazhab",
    question: "Imam Ahmad bin Hanbal r.h. tabah dipenjarakan dan diseksa (Mihnah) kerana mempertahankan pegangan akidah bahawa...",
    options: [
      "Al-Quran merupakan makhluk baharu",
      "Al-Quran ialah Kalam Allah yang qadim, bukan makhluk",
      "Melihat Allah di akhirat adalah mustahil",
      "Pelaku dosa besar kafir secara mutlak"
    ],
    correctIndex: 1,
    explanation: "Imam Ahmad tegas mempertahankan pegangan ASWJ bahawa al-Quran itu Kalam Allah, menolak fahaman Muktazilah 'khalq al-Quran'."
  },

  // ==========================================
  // 6. BIDANG AKHLAK ISLAMIYYAH
  // ==========================================
  {
    id: 46,
    field: "akhlak",
    topicName: "Pelajaran 22: Bersikap Benar",
    question: "Apakah hukum bersikap benar dalam setiap perkataan dan perbuatan?",
    options: ["Sunat", "Harus", "Makruh", "Wajib"],
    correctIndex: 3,
    explanation: "Hukum bersikap benar ialah wajib ke atas setiap Muslim berdasarkan Surah al-Ahzab ayat 70."
  },
  {
    id: 47,
    field: "akhlak",
    topicName: "Pelajaran 22: Bersikap Benar",
    question: "Antara berikut, yang manakah merupakan tanda orang munafik mengikut hadis?",
    options: [
      "Apabila berhujah dia membaca ayat al-Quran",
      "Apabila bercakap dia berdusta, berjanji dia mungkir, diberi amanah dia khianat",
      "Apabila bekerja dia menepati masa",
      "Apabila bersedekah dia berbuat secara sembunyi"
    ],
    correctIndex: 1,
    explanation: "Tiga tanda munafik ialah berdusta apabila bercakap, mungkir apabila berjanji, dan khianat apabila diberi amanah."
  },
  {
    id: 48,
    field: "akhlak",
    topicName: "Pelajaran 23: Khauf dan Raja'",
    question: "Apakah maksud Khauf dan Raja'?",
    options: [
      "Khauf ialah putus asa daripada rahmat; Raja' ialah berbangga diri",
      "Khauf ialah takut manusia; Raja' ialah mengharapkan pujian manusia",
      "Khauf ialah bersikap bakhil; Raja' ialah boros berbelanja",
      "Khauf ialah takut kemurkaan Allah; Raja' ialah mengharap keredaan dan rahmat Allah"
    ],
    correctIndex: 3,
    explanation: "Khauf ialah perasaan takut terhadap azab Allah, manakala Raja' ialah pengharapan keredaan dan rahmat Allah SWT."
  },
  {
    id: 49,
    field: "akhlak",
    topicName: "Pelajaran 23: Khauf dan Raja'",
    question: "Mengapakah seorang Muslim wajib menyeimbangkan antara sifat Khauf dan Raja'?",
    options: [
      "Supaya dapat mengelak daripada berpuasa fardu",
      "Khauf sahaja menyebabkan putus asa, manakala Raja' sahaja membuatkan seseorang merasa terlalu selesa dengan maksiat",
      "Kerana Khauf hanya untuk orang tua dan Raja' untuk orang muda",
      "Untuk mendapat sanjungan dan pujian orang ramai"
    ],
    correctIndex: 1,
    explanation: "Keseimbangan kedua-duanya melahirkan insan bertakwa yang sentiasa menjauhi dosa dan bersemangat istiqamah beramal."
  },
  {
    id: 50,
    field: "akhlak",
    topicName: "Pelajaran 24: Adab Terhadap Orang Sakit & OKU",
    question: "Contoh adab terhadap orang sakit dari aspek ibadah ialah...",
    options: [
      "Membawa makanan berat yang dilarang oleh doktor",
      "Berbual bising dalam bilik rawatan sepanjang hari",
      "Membiarkan pesakit mengabaikan solat tanpa nasihat",
      "Membimbing pesakit mengambil wuduk atau bertayammum serta mengingatkan solat fardu"
    ],
    correctIndex: 3,
    explanation: "Adab aspek ibadah termasuk membimbing cara bersuci (wuduk/tayammum), membantu menunaikan solat mengikut kemampuan dan menghadap kiblat."
  },
  {
    id: 51,
    field: "akhlak",
    topicName: "Pelajaran 25: Wasatiyyah",
    question: "Apakah maksud Wasatiyyah dari segi istilah syarak?",
    options: [
      "Melakukan ibadah secara berlebih-lebihan hingga mengabaikan kesihatan diri",
      "Pendekatan yang sederhana, seimbang, adil, dan cemerlang dalam setiap tindakan tanpa melampaui batas atau mengabaikan syariat",
      "Mengutamakan keseronokan duniawi melebihi tuntutan akhirat",
      "Meninggalkan urusan kehidupan masyarakat untuk beribadah di gua"
    ],
    correctIndex: 1,
    explanation: "Wasatiyyah ialah pendekatan sederhana, seimbang, adil, dan cemerlang dalam setiap tindakan mengikut syariat Islam."
  },
  {
    id: 52,
    field: "akhlak",
    topicName: "Pelajaran 25: Wasatiyyah",
    question: "Surah al-Baqarah ayat 143 («وَكَذَٰلِكَ جَعَلْنَـٰكُمْ أُمَّةًۭ وَسَطًۭا») menjelaskan bahawa umat Islam dijadikan sebagai...",
    options: [
      "Umat yang suka berpecah-belah",
      "Umat yang mementingkan kekayaan material semata-mata",
      "Umat yang bebas melanggar hukum syarak",
      "Umat yang adil, pertengahan, dan pilihan (ummatan wasatan)"
    ],
    correctIndex: 3,
    explanation: "Ayat ini menegaskan bahawa umat Islam adalah 'ummatan wasatan' iaitu umat pertengahan yang adil dan menjadi pilihan."
  },
  {
    id: 53,
    field: "akhlak",
    topicName: "Pelajaran 25: Wasatiyyah",
    question: "Manakah antara berikut BUKAN merupakan salah satu daripada 4 prinsip utama Wasatiyyah?",
    options: [
      "Kesederhanaan (Iqtisad)",
      "Fanatisme (Taasub)",
      "Keseimbangan (Tawazun)",
      "Kecemerlangan (Kamaliyah)"
    ],
    correctIndex: 1,
    explanation: "Empat prinsip Wasatiyyah ialah Kesederhanaan (Iqtisad), Keseimbangan (Tawazun), Keadilan (I'tidal), dan Kecemerlangan (Kamaliyah)."
  },
  {
    id: 54,
    field: "akhlak",
    topicName: "Pelajaran 25: Wasatiyyah",
    question: "Menjaga pemakanan yang halal lagi berkhasiat, berehat secukupnya, dan beriadah merujuk kepada aspek keseimbangan...",
    options: [
      "Aspek Rohani",
      "Aspek Akal",
      "Aspek Emosi",
      "Aspek Jasmani"
    ],
    correctIndex: 3,
    explanation: "Keseimbangan jasmani merangkumi penjagaan kesihatan tubuh, makanan berkhasiat, riadah, dan rehat yang mencukupi."
  },
  {
    id: 55,
    field: "akhlak",
    topicName: "Pelajaran 25: Wasatiyyah",
    question: "Antara hikmah mengamalkan prinsip Wasatiyyah dalam kehidupan bermasyarakat ialah...",
    options: [
      "Menimbulkan perasaan iri hati dan permusuhan sesama jiran",
      "Mewujudkan suasana kehidupan yang harmoni, aman, dan mengelakkan sifat ekstremisme",
      "Menyebabkan pembaziran wang dan sumber negara",
      "Melemahkan daya saing umat Islam di peringkat antarabangsa"
    ],
    correctIndex: 1,
    explanation: "Wasatiyyah memupuk keharmonian, kestabilan ekonomi, memartabatkan syiar Islam, dan mengelakkan ekstremisme."
  }
];
