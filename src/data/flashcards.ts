export interface Flashcard {
  id: number;
  field: string;
  front: string;
  back: string;
}

export const flashcardsData: Flashcard[] = [
  // 1. BIDANG AL-QURAN
  {
    id: 1,
    field: "Al-Quran",
    front: "Apakah beza antara Mad Silah Qasirah dan Mad Silah Tawilah?",
    back: "Mad Silah Qasirah bertemu huruf selain Hamzah dan dibaca 2 harakat; Mad Silah Tawilah bertemu huruf Hamzah dalam kalimah berasingan dan dibaca 4 atau 5 harakat."
  },
  {
    id: 2,
    field: "Al-Quran",
    front: "Berapakah kadar harakat bacaan bagi semua jenis Mad Lazim?",
    back: "Semua jenis Mad Lazim (Kilmi Mukhaffaf/Muthaqqal & Harfi Mukhaffaf/Muthaqqal) wajib dibaca dengan kadar 6 harakat."
  },
  {
    id: 3,
    field: "Al-Quran",
    front: "Sebutkan 5 huruf Qalqalah dan rumusannya.",
    back: "Hurufnya ialah ق - ط - ب - ج - د, dihimpunkan dalam lafaz (قُطْبُ جَدٍّ)."
  },
  {
    id: 4,
    field: "Al-Quran",
    front: "Apakah beza Qalqalah Kubra dan Qalqalah Akbar?",
    back: "Qalqalah Kubra berlaku pada huruf waqaf yang tidak bersabdu (lantunan kuat); Qalqalah Akbar berlaku pada huruf waqaf yang bersabdu/bersyaddah (lantunan paling kuat tertahan)."
  },
  {
    id: 5,
    field: "Al-Quran",
    front: "Apakah maksud rasuah menurut syarak?",
    back: "Sebarang pemberian atau suapan untuk memalsukan kebenaran dan membenarkan kepalsuan, atau mengambil hak orang lain secara zalim."
  },
  {
    id: 6,
    field: "Al-Quran",
    front: "Sebutkan 4 bentuk kesalahan rasuah mengikut undang-undang dan syarak.",
    back: "1. Meminta/menerima rasuah; 2. Menawarkan/memberi rasuah; 3. Mengemukakan tuntutan palsu; 4. Menyalahgunakan kedudukan atau jawatan."
  },
  {
    id: 7,
    field: "Al-Quran",
    front: "Apakah maksud Sunnatullah?",
    back: "Sistem dan peraturan undang-undang yang telah ditetapkan oleh Allah SWT ke atas seluruh makhluk ciptaan-Nya di alam semesta."
  },
  {
    id: 8,
    field: "Al-Quran",
    front: "Apakah sebab turun Surah Ali 'Imran ayat 139?",
    back: "Kekalahan tentera Islam dalam Perang Uhud (3H/625M) di mana 70 sahabat gugur; Allah menurunkan ayat ini untuk meredakan kesedihan dan menaikkan semangat mereka."
  },
  {
    id: 9,
    field: "Al-Quran",
    front: "Apakah maksud perbuatan mempersendakan agama?",
    back: "Mengejek, merendah-rendahkan, atau menghina ajaran Islam, al-Quran, serta sunnah nabi sehingga agama dianggap permainan dan gurauan."
  },
  {
    id: 10,
    field: "Al-Quran",
    front: "Apakah kesan mempersendakan agama terhadap iman seseorang?",
    back: "Boleh membatalkan iman (murtad), dilupakan Allah di akhirat, dan diazab dengan api neraka serta minuman air panas yang menggelegak."
  },
  {
    id: 11,
    field: "Al-Quran",
    front: "Apakah maksud dakwah dalam Surah Fussilat ayat 33?",
    back: "Menyeru manusia supaya beriman kepada Allah SWT, mengerjakan amal soleh, dan menjadikan Islam sebagai cara hidup."
  },
  {
    id: 12,
    field: "Al-Quran",
    front: "Sebutkan 3 tuntutan utama dalam Surah Fussilat ayat 33.",
    back: "1. Berdakwah kepada Allah; 2. Beramal soleh; 3. Berbangga dengan identiti sebagai Muslim."
  },

  // 2. BIDANG HADIS
  {
    id: 13,
    field: "Hadis",
    front: "Apakah maksud Al-Mubiqat (الموبقات) dalam hadis?",
    back: "Perkara-perkara yang membinasakan, merosakkan, dan membawa kehancuran di dunia serta azab neraka di akhirat."
  },
  {
    id: 14,
    field: "Hadis",
    front: "Sebutkan 7 dosa besar yang terkandung dalam hadis Al-Mubiqat.",
    back: "1. Syirik; 2. Sihir; 3. Membunuh; 4. Makan riba; 5. Makan harta anak yatim; 6. Lari daripada medan perang; 7. Qazaf (menuduh wanita suci berzina)."
  },
  {
    id: 15,
    field: "Hadis",
    front: "Apakah beza antara Syirik Jali dan Syirik Khafi?",
    back: "Syirik Jali ialah menyekutukan Allah secara nyata (contoh menyembah berhala, merosakkan akidah); Syirik Khafi ialah riak, ujub, takbur dalam ibadah (merosakkan pahala amalan)."
  },
  {
    id: 16,
    field: "Hadis",
    front: "Apakah hukuman syarak bagi pelaku qazaf (menuduh zina tanpa 4 saksi)?",
    back: "Dikenakan hukuman hudud 80 kali sebatan dan kesaksiannya tidak diterima selama-lamanya."
  },
  {
    id: 17,
    field: "Hadis",
    front: "Apakah maksud berdikari menurut Islam?",
    back: "Berusaha sendiri dengan kudrat dan kemahiran untuk memenuhi keperluan hidup tanpa bergantung atau meminta-minta kepada orang lain."
  },
  {
    id: 18,
    field: "Hadis",
    front: "Mengapakah memikul seikat kayu api lebih mulia daripada meminta-minta?",
    back: "Kerana bekerja sendiri memelihara maruah dan kehormatan diri daripada kehinaan meminta sedekah yang mungkin diberi atau ditolak."
  },
  {
    id: 19,
    field: "Hadis",
    front: "Sebutkan 5 konsep berdikari dalam Islam.",
    back: "1. Berusaha bersungguh-sungguh; 2. Berilmu dan berkemahiran; 3. Berdisiplin; 4. Berani membuat keputusan; 5. Bertawakal kepada Allah."
  },

  // 3. BIDANG AKIDAH
  {
    id: 20,
    field: "Akidah",
    front: "Apakah maksud nama Allah SWT Al-Muntaqim?",
    back: "Allah SWT Maha Pembalas, iaitu Allah menimpakan azab seksa terhadap orang yang melampaui batas dan mengingkari perintah-Nya."
  },
  {
    id: 21,
    field: "Akidah",
    front: "Apakah contoh azab Al-Muntaqim yang ditimpakan ke atas kaum Quraisy?",
    back: "Peristiwa Ad-Dukhan iaitu azab kemarau panjang berdebu tebal yang menyebabkan kelaparan akibat menentang dakwah Nabi SAW."
  },
  {
    id: 22,
    field: "Akidah",
    front: "Apakah maksud nama Allah SWT Al-Jabbar?",
    back: "Allah SWT Maha Berkuasa secara mutlak untuk melakukan segala kehendak-Nya ke atas seluruh makhluk dan tiada sesiapa dapat menghalang-Nya."
  },
  {
    id: 23,
    field: "Akidah",
    front: "Mengapakah manusia wajib bersikap tawaduk berdasarkan nama Al-Jabbar?",
    back: "Kerana manusia adalah makhluk yang lemah; sesiapa yang bersikap sombong dan takbur akan dihumban oleh Allah Al-Jabbar ke dalam neraka."
  },
  {
    id: 24,
    field: "Akidah",
    front: "Sebutkan 3 cara seseorang boleh terbatal imannya.",
    back: "1. Melalui iktikad (keyakinan hati); 2. Melalui perkataan (lisan); 3. Melalui perbuatan (amalan fizikal)."
  },
  {
    id: 25,
    field: "Akidah",
    front: "Apakah 4 syarat terbatalnya iman seseorang?",
    back: "1. Mengetahui keharamannya; 2. Sedar dan berakal; 3. Dilakukan atas kerelaan sendiri (tanpa paksaan); 4. Berniat sengaja."
  },
  {
    id: 26,
    field: "Akidah",
    front: "Apakah kesan terbatalnya iman terhadap status perkahwinan dan amalan?",
    back: "Perkahwinan terbatal secara automatik (fasakh) dan segala pahala amalan kebaikan yang lalu terhapus dan sia-sia."
  },
  {
    id: 27,
    field: "Akidah",
    front: "Apakah takrif ajaran sesat?",
    back: "Sebarang ajaran atau fahaman yang didakwa berteraskan Islam sedangkan hakikatnya bercanggah dengan al-Quran dan al-Sunnah."
  },
  {
    id: 28,
    field: "Akidah",
    front: "Sebutkan ciri kesesatan ajaran sesat dari aspek akidah.",
    back: "Mendakwa ketua kumpulan sebagai nabi baharu, Imam Mahdi, atau penjelmaan Tuhan, serta memuja ketua sebagai maksum."
  },
  {
    id: 29,
    field: "Akidah",
    front: "Bagaimanakah formula I-S-A-K-D-T untuk menjauhi ajaran sesat?",
    back: "Ilmu mendalam, Sahabat soleh, Amal istiqamah, Kaji kesahihan dengan pihak berkuasa, Doa petunjuk, dan Taubat segera."
  },

  // 4. BIDANG FIKAH
  {
    id: 30,
    field: "Fikah",
    front: "Apakah perbezaan rukun utama antara Haji dan Umrah?",
    back: "Haji mempunyai Wukuf di Padang Arafah pada 9 Zulhijjah, manakala Umrah tiada wukuf dan boleh dikerjakan bila-bila masa."
  },
  {
    id: 31,
    field: "Fikah",
    front: "Sebutkan syarat wajib haji dan umrah (I-B-B-M-I).",
    back: "Islam, Baligh, Berakal, Merdeka, dan Istita'ah (berkemampuan dari segi kewangan, kesihatan dan keselamatan)."
  },
  {
    id: 32,
    field: "Fikah",
    front: "Apakah hukum jika jemaah meninggalkan salah satu rukun haji?",
    back: "Hajinya TIDAK SAH, tidak boleh diganti dengan membayar Dam, dan wajib diulang semula pada tahun berikutnya."
  },
  {
    id: 33,
    field: "Fikah",
    front: "Apakah nama miqat makani bagi jemaah haji dari Malaysia?",
    back: "Qarnul Manazil (as-Sail al-Kabir)."
  },
  {
    id: 34,
    field: "Fikah",
    front: "Jelaskan konsep Haji Ifrad, Tamattuk, dan Qiran.",
    back: "Ifrad = buat Haji dahulu baru Umrah; Tamattuk = buat Umrah dahulu baru Haji; Qiran = berniat Haji dan Umrah serentak."
  },
  {
    id: 35,
    field: "Fikah",
    front: "Apakah dua urat yang wajib diputuskan dalam sembelihan?",
    back: "Urat halkum (saluran pernafasan) dan urat marih (saluran makanan)."
  },
  {
    id: 36,
    field: "Fikah",
    front: "Apakah syarat alat sembelihan menurut syarak?",
    back: "Alat mestilah tajam yang boleh melukakan dan mengalirkan darah, serta BUKAN diperbuat daripada tulang, gigi, atau kuku."
  },
  {
    id: 37,
    field: "Fikah",
    front: "Apakah maksud Hayat Mustaqirrah pada binatang sembelihan?",
    back: "Haiwan tersebut masih mempunyai nyawa yang stabil, mampu bergerak cergas dan belum berada pada tahap nazak (ambang maut)."
  },
  {
    id: 38,
    field: "Fikah",
    front: "Bilakah tempoh masa penyembelihan ibadah korban?",
    back: "Bermula selepas solat sunat Aidiladha dan dua khutbah (10 Zulhijjah) sehingga terbenam matahari akhir hari Tasyriq (13 Zulhijjah)."
  },
  {
    id: 39,
    field: "Fikah",
    front: "Bagaimanakah pembahagian daging korban sunat yang afdhal?",
    back: "1/3 dimakan pihak berkorban dan keluarga, 1/3 disedekah mentah kepada fakir miskin, dan 1/3 dihadiahkan kepada jiran tetangga/sahabat."
  },
  {
    id: 40,
    field: "Fikah",
    front: "Apakah kadar binatang akikah yang afdhal bagi bayi lelaki dan perempuan?",
    back: "Afdhal 2 ekor kambing bagi anak lelaki, dan 1 ekor kambing bagi anak perempuan (sunat dimasak manis)."
  },
  {
    id: 41,
    field: "Fikah",
    front: "Sebutkan 4 unsur yang diharamkan dalam Muamalat Islam.",
    back: "1. Riba (faedah atas pinjaman); 2. Gharar (kesamaran/ketidakpastian); 3. Judi/Maisir (pertaruhan); 4. Dharar (membawa kemudaratan)."
  },
  {
    id: 42,
    field: "Fikah",
    front: "Apakah maksud akad Mudharabah dan Musyarakah?",
    back: "Mudharabah ialah perkongsian antara pemodal penuh dengan pengusaha; Musyarakah ialah perkongsian modal bersama oleh dua pihak atau lebih."
  },
  {
    id: 43,
    field: "Fikah",
    front: "Apakah maksud akad Wakalah, Kafalah, dan Rahn?",
    back: "Wakalah = mewakilkan urusan kepada pihak lain; Kafalah = jaminan penjamin; Rahn = gadaian/cagaran barang berharga atas hutang."
  },
  {
    id: 44,
    field: "Fikah",
    front: "Bilakah waktu solat sunat Dhuha bermula dan berakhir?",
    back: "Bermula 28 minit selepas terbit matahari (syuruq) dan berakhir sebelum masuk waktu solat fardu Zohor."
  },
  {
    id: 45,
    field: "Fikah",
    front: "Apakah keistimewaan ruku' dalam solat sunat gerhana (Kusuf/Khusuf)?",
    back: "Terdapat 2 kali qiam (berdiri) dan 2 kali ruku' dalam SETIAP rakaat (menjadikan jumlahnya 4 ruku' dan 4 sujud dalam 2 rakaat)."
  },

  // 5. BIDANG SIRAH DAN TAMADUN ISLAM
  {
    id: 46,
    field: "Sirah & Tamadun",
    front: "Apakah sumbangan terbesar Saidina Abu Bakar RA dalam pemeliharaan al-Quran?",
    back: "Mengarahkan Zaid bin Thabit menghimpunkan tulisan ayat al-Quran pada batu dan pelepah kerana ramai huffaz gugur dalam Perang Yamamah."
  },
  {
    id: 47,
    field: "Sirah & Tamadun",
    front: "Apakah sumbangan pentadbiran utama Saidina Umar bin al-Khattab RA?",
    back: "Menubuhkan Majlis Syura, mengasaskan jabatan Diwan (Baitulmal, Jabatan Tentera, Cukai), dan menetapkan Takwim Hijrah rasmi."
  },
  {
    id: 48,
    field: "Sirah & Tamadun",
    front: "Apakah jasa Saidina Uthman bin Affan RA dalam pembukuan al-Quran?",
    back: "Menyelaraskan penulisan al-Quran mengikut dialek Quraisy dalam satu mushaf rasmi iaitu Mushaf Uthmani untuk mengelakkan perpecahan."
  },
  {
    id: 49,
    field: "Sirah & Tamadun",
    front: "Mengapakah Saidina Ali RA menangguhkan pelaksanaan qisas pembunuh Khalifah Uthman?",
    back: "Kerana keadaan negara masih genting dan huru-hara; kestabilan politik perlu dipulihkan terlebih dahulu demi mengelakkan perang saudara."
  },
  {
    id: 50,
    field: "Sirah & Tamadun",
    front: "Siapakah pengasas Kerajaan Umayyah dan di manakah pusat pemerintahannya?",
    back: "Muawiyah bin Abi Sufyan pada tahun 41 Hijrah, berpusat di Kota Damsyik, Syria."
  },
  {
    id: 51,
    field: "Sirah & Tamadun",
    front: "Apakah sumbangan Khalifah Abd al-Malik bin Marwan?",
    back: "Menetapkan bahasa Arab sebagai bahasa rasmi pentadbiran, mencetak mata wang dinar Islam pertama, dan membina Kubbah al-Sakhrah."
  },
  {
    id: 52,
    field: "Sirah & Tamadun",
    front: "Apakah jasa Khalifah Umar bin Abd al-Aziz dalam bidang hadis?",
    back: "Mengeluarkan arahan rasmi pertama kepada Ibn Shihab al-Zuhri untuk mengumpul dan membukukan hadis Rasulullah SAW."
  },
  {
    id: 53,
    field: "Sirah & Tamadun",
    front: "Siapakah pengasas Kerajaan Abbasiyah dan di manakah pusat pentadbirannya?",
    back: "Abu al-Abbas as-Saffah pada 132 Hijrah, berpusat di Baghdad, Iraq (dibina oleh Khalifah Abu Jaafar al-Mansur)."
  },
  {
    id: 54,
    field: "Sirah & Tamadun",
    front: "Apakah Baitul Hikmah yang dibina pada era Abbasiyah?",
    back: "Gedung ilmu, perpustakaan, dan pusat penterjemahan karya falsafah serta sains antarabangsa terhebat yang diasaskan oleh Harun al-Rasyid."
  },
  {
    id: 55,
    field: "Sirah & Tamadun",
    front: "Peristiwa apakah yang memusnahkan Kerajaan Abbasiyah pada 1258 Masihi?",
    back: "Serangan dan penjarahan tentera Mongol pimpinan Hulagu Khan yang membakar kota Baghdad dan membuang kitab ke Sungai Furat."
  },
  {
    id: 56,
    field: "Sirah & Tamadun",
    front: "Sebutkan nama 4 tokoh imam mazhab fikah yang masyhur.",
    back: "1. Imam Abu Hanifah (Mazhab Hanafi); 2. Imam Malik (Mazhab Maliki); 3. Imam al-Syafi'i (Mazhab Syafi'i); 4. Imam Ahmad bin Hanbal (Mazhab Hanbali)."
  },
  {
    id: 57,
    field: "Sirah & Tamadun",
    front: "Apakah karya agung Imam al-Syafi'i dalam ilmu usul fikah?",
    back: "Kitab Al-Risalah (kitab pertama mengasaskan disiplin Usul Fiqh) dan Kitab Al-Umm (kitab induk fikah)."
  },

  // 6. BIDANG AKHLAK ISLAMIYYAH
  {
    id: 58,
    field: "Akhlak Islamiyyah",
    front: "Apakah maksud bersikap benar dan hukumnya?",
    back: "Tidak berdusta dari segi perkataan, perkhabaran, dan perbuatan mengikut ketetapan syarak; hukumnya adalah WAJIB."
  },
  {
    id: 59,
    field: "Akhlak Islamiyyah",
    front: "Sebutkan 3 tanda orang munafik menurut hadis sahih.",
    back: "Apabila berkata-kata dia berdusta, apabila berjanji dia mengingkari, dan apabila diberi amanah dia mengkhianati."
  },
  {
    id: 60,
    field: "Akhlak Islamiyyah",
    front: "Jelaskan konsep keseimbangan antara sifat Khauf dan Raja'.",
    back: "Khauf (takut azab Allah) mencegah diri daripada maksiat; Raja' (harap rahmat Allah) membangkitkan semangat beribadah tanpa putus asa."
  },
  {
    id: 61,
    field: "Akhlak Islamiyyah",
    front: "Apakah maksud Wasatiyyah dari segi bahasa dan istilah?",
    back: "Bahasa: sederhana, seimbang, adil dan cemerlang. Istilah: pendekatan yang sederhana, seimbang, adil dan cemerlang dalam setiap tindakan tanpa melampaui batas atau mengabaikan syariat Islam."
  },
  {
    id: 62,
    field: "Akhlak Islamiyyah",
    front: "Apakah dalil naqli al-Quran pensyariatan prinsip Wasatiyyah?",
    back: "Surah al-Baqarah ayat 143: Dan demikianlah Kami jadikan kamu (umat Islam) umat yang adil / pilihan (pertengahan), supaya kamu menjadi saksi kepada manusia..."
  },
  {
    id: 63,
    field: "Akhlak Islamiyyah",
    front: "Sebutkan 4 prinsip utama Wasatiyyah.",
    back: "1. Kesederhanaan (Iqtisad); 2. Keseimbangan (Tawazun); 3. Keadilan (I'tidal); 4. Kecemerlangan (Kamaliyah)."
  },
  {
    id: 64,
    field: "Akhlak Islamiyyah",
    front: "Jelaskan 3 aspek keseimbangan (Tawazun) dalam Wasatiyyah.",
    back: "1. Aspek Rohani (ibadah fardu/sunat ikhlas & khusyuk); 2. Aspek Jasmani (makanan halal/berkhasiat & riadah); 3. Aspek Akal (menuntut ilmu & berfikir kritis/kreatif)."
  },
  {
    id: 65,
    field: "Akhlak Islamiyyah",
    front: "Apakah antara hikmah mengamalkan prinsip Wasatiyyah?",
    back: "Syiar Islam ditegakkan, pembangunan negara stabil, suasana harmoni terpelihara, potensi diri seimbang, dan mengelakkan sifat ekstremisme serta perpecahan."
  }
];
