export interface Subtopic {
  id: string;
  badge?: string;
  title: string;
  contentHtml: string;
}

export interface TopicItem {
  id: string;
  number: number;
  field: "al-quran" | "hadis" | "akidah" | "fikah" | "sirah" | "akhlak";
  fieldLabel: string;
  title: string;
  kicker?: string;
  subtopics?: Subtopic[];
  directContentHtml?: string;
}

export const topicsData: TopicItem[] = [
  // ==========================================
  // 1. BIDANG AL-QURAN
  // ==========================================
  {
    id: "pelajaran-3",
    number: 3,
    field: "al-quran",
    fieldLabel: "Bidang Al-Quran",
    title: "Pelajaran 3: Hukum Tajwid (Mad Silah, Mad Lazim & Qalqalah)",
    directContentHtml: `
      <h3>Pengenalan Hukum Tajwid</h3>
      <p>Membaca al-Quran dengan bertajwid adalah wajib (fardu ain). Tiga hukum tajwid utama dalam sukatan Tingkatan 4 ialah <b>Mad Silah</b>, <b>Mad Lazim</b> dan <b>Qalqalah</b>.</p>

      <h3>1. Mad Silah</h3>
      <p>Mad yang berlaku selepas huruf <b>Ha al-Dhamir</b> (هاء الضمير - huruf 'ha' gantinama diri ketiga muzakkar tunggal) yang berbaris kasrah (bawah) atau dammah (hadapan) dan terletak di antara dua huruf yang berbaris.</p>
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Jenis Mad Silah</th>
              <th>Ciri-ciri & Kaedah</th>
              <th>Kadar Bacaan & Contoh</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><b>Mad Silah Qasirah (قصيرة)</b></td>
              <td>Ha al-Dhamir terletak di antara dua huruf berbaris, dan huruf selepasnya <b>BUKAN huruf Hamzah (ء)</b>.</td>
              <td><b>2 harakat</b><br>Contoh: <span class="arabic-text">إِلَىٰ قَوْمِهِۦ غَضْبٰنَ</span> · <span class="arabic-text">إِنَّهُۥ طَغَىٰ</span></td>
            </tr>
            <tr>
              <td><b>Mad Silah Tawilah (طويلة)</b></td>
              <td>Ha al-Dhamir terletak di antara dua huruf berbaris, dan huruf selepasnya ialah <b>huruf Hamzah (ء)</b> dalam kalimah berasingan.</td>
              <td><b>4 atau 5 harakat</b><br>Contoh: <span class="arabic-text">أَيَحْسَبُ أَن لَّمْ يَرَهُۥٓ أَحَدٌ</span> · <span class="arabic-text">مَآ أَغْنَىٰ عَنْهُ مَالُهُۥٓ إِذَا تَرَدَّىٰ</span></td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>2. Mad Lazim</h3>
      <p>Huruf mad bertemu dengan huruf yang bertanda sukun (mati) yang asli ketika wasal (sambung) atau waqaf (berhenti). Semua jenis Mad Lazim dibaca dengan kadar <b>6 harakat</b>.</p>
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Jenis Mad Lazim</th>
              <th>Ciri & Penerangan</th>
              <th>Contoh Bacaan (6 Harakat)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><b>Mad Lazim Kilmi Mukhaffaf</b></td>
              <td>Berlaku dalam kalimah, huruf mad bertemu huruf sukun yang <b>tidak bersyaddah</b> (tidak diidghamkan).</td>
              <td><span class="arabic-text">ءٰۤلْـٰٔنَ وَقَدْ عَصَيْتَ</span> (Hanya ada 2 tempat dalam Surah Yunus).</td>
            </tr>
            <tr>
              <td><b>Mad Lazim Kilmi Muthaqqal</b></td>
              <td>Berlaku dalam kalimah, huruf mad bertemu huruf sukun yang <b>bersyaddah</b> (dibaca dengan idgham/berat).</td>
              <td><span class="arabic-text">وَلَا ٱلضَّآلِّينَ</span> · <span class="arabic-text">دَآبَّةٍ</span> · <span class="arabic-text">ٱلْحَآقَّةُ</span></td>
            </tr>
            <tr>
              <td><b>Mad Lazim Harfi Mukhaffaf</b></td>
              <td>Berlaku pada huruf pembuka surah (Fawatih al-Suwar), huruf mad bertemu sukun asli <b>tanpa idgham</b>.</td>
              <td><span class="arabic-text">صۤ</span> (صَادْ) · <span class="arabic-text">نۤ</span> (نُونْ) · <span class="arabic-text">قۤ</span> (قَافْ)</td>
            </tr>
            <tr>
              <td><b>Mad Lazim Harfi Muthaqqal</b></td>
              <td>Berlaku pada huruf pembuka surah (Fawatih al-Suwar), huruf mad bertemu sukun asli <b>dan dibaca secara idgham</b> (berat).</td>
              <td><span class="arabic-text">الم</span> (أَلِفْ لَآمْ مِّيْمْ - pada huruf Lam bertemu Mim).</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>3. Qalqalah (Lantunan Bunyi)</h3>
      <p>Bunyi lantunan atau detikan kuat apabila menyebut salah satu daripada lima huruf qalqalah yang bertanda sukun:</p>
      <p class="quote"><b>Huruf Qalqalah:</b> ق - ط - ب - ج - د (Dihimpunkan dalam formula: <b>قُطْبُ جَدٍّ</b>).</p>
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Bahagian Qalqalah</th>
              <th>Keadaan Huruf & Kekuatan Lantunan</th>
              <th>Contoh Bacaan</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><b>Qalqalah Sugra (Kecil)</b></td>
              <td>Huruf qalqalah bersukun asli di <b>pertengahan kalimah</b> atau di hujung kalimah ketika bacaan wasal (sambung). Lantunan bunyinya <b>rendah/perlahan</b>.</td>
              <td><span class="arabic-text">سَنُقْرِئُكَ</span> · <span class="arabic-text">يَقْطَعُونَ</span> · <span class="arabic-text">تَجْرِي</span></td>
            </tr>
            <tr>
              <td><b>Qalqalah Kubra (Besar)</b></td>
              <td>Huruf qalqalah berada di <b>hujung kalimah</b> yang disukunkan kerana berhenti (waqaf) dan huruf tersebut <b>tidak bersyaddah</b>. Lantunannya <b>kuat</b>.</td>
              <td><span class="arabic-text">وَلَمْ يُولَدْ</span> · <span class="arabic-text">مَا كَسَبَ</span> · <span class="arabic-text">مُحِيطٌ</span></td>
            </tr>
            <tr>
              <td><b>Qalqalah Akbar (Paling Besar)</b></td>
              <td>Huruf qalqalah berada di <b>hujung kalimah yang bersyaddah</b> (sabdu) ketika waqaf (berhenti). Lantunannya <b>paling kuat</b> dan tertahan sejenak sebelum dilantunkan.</td>
              <td><span class="arabic-text">تَبَّتْ يَدَآ أَبِي لَهَبٍ وَتَبَّ</span> · <span class="arabic-text">بِٱلْحَقِّ</span> · <span class="arabic-text">فِي ٱلْحَجِّ</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    `
  },
  {
    id: "pelajaran-4",
    number: 4,
    field: "al-quran",
    fieldLabel: "Bidang Al-Quran",
    title: "Pelajaran 4: Larangan Rasuah (Surah al-Baqarah, Ayat 188)",
    directContentHtml: `
      <h3>Teks Ayat & Terjemahan</h3>
      <p class="quote arabic-text">وَلَا تَأْكُلُوٓا۟ أَمْوَٰلَكُم بَيْنَكُم بِٱلْبَـٰطِلِ وَتُدْلُوا۟ بِهَآ إِلَى ٱلْحُكَّامِ لِتَأْكُلُوا۟ فَرِيقًۭا مِّنْ أَمْوَٰلِ ٱلنَّاسِ بِٱلْإِثْمِ وَأَنتُمْ تَعْلَمُونَ</p>
      <p><b>Maksud Ayat:</b> "Dan janganlah kamu makan (atau mengambil) harta orang-orang lain di antara kamu dengan jalan yang salah (batil), dan jangan pula kamu menghulurkan harta kamu (memberi rasuah) kepada hakim-hakim kerana hendak memakan (mengambil) sebahagian daripada harta manusia dengan berbuat dosa, padahal kamu mengetahui (salahnya)." (Surah al-Baqarah: 188)</p>

      <h3>Maksud Rasuah & Pengertian Batil</h3>
      <ul>
        <li><b>Mengambil Harta Secara Batil:</b> Mengambil atau menggunakan harta orang lain dengan cara yang melanggar syariat Islam.</li>
        <li><b>Maksud Rasuah:</b> Sebarang pemberian atau suapan yang diberikan kepada seseorang untuk memalsukan kebenaran dan membenarkan kepalsuan, atau untuk mendapatkan sesuatu hak yang bukan miliknya secara zalim.</li>
      </ul>

      <h3>Bentuk Mengambil Harta Secara Batil</h3>
      <ol>
        <li><b>Rasuah:</b> Memberi suapan wang atau hadiah untuk mengubah keputusan.</li>
        <li><b>Riba:</b> Mengambil pertambahan atau bunga dalam urusan pinjaman dan pertukaran barang ribawi.</li>
        <li><b>Judi:</b> Mempertaruhkan wang atau aset berharga berasaskan nasib.</li>
        <li><b>Mencuri & Merompak:</b> Mengambil hak orang lain secara sembunyi atau kekerasan tanpa izin.</li>
        <li><b>Menipu & Memalsukan Dokumen:</b> Mengurangkan timbangan, menipu sukatan atau membuat klaim palsu.</li>
        <li><b>Salah Guna Kuasa:</b> Menggunakan kedudukan awam atau jawatan untuk kepentingan diri sendiri dan kroni.</li>
      </ol>

      <h3>4 Bentuk Kesalahan Rasuah (Berdasarkan SPRM & Syarak)</h3>
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Bentuk Kesalahan</th>
              <th>Huraian & Contoh</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><b>1. Meminta atau Menerima Rasuah</b></td>
              <td>Pegawai atau individu yang menuntut atau menerima suapan wang/faedah untuk melakukan atau tidak melakukan sesuatu tindakan rasmi.</td>
            </tr>
            <tr>
              <td><b>2. Menawarkan atau Memberikan Rasuah</b></td>
              <td>Pihak yang memberi atau berjanji memberikan wang, hadiah, atau diskaun kepada pegawai untuk meluluskan projek atau melepaskan diri daripada saman.</td>
            </tr>
            <tr>
              <td><b>3. Mengemukakan Tuntutan Palsu</b></td>
              <td>Membuat dokumen atau resit mengandungi butiran palsu bagi tujuan menuntut bayaran perkhidmatan yang tidak pernah dibuat.</td>
            </tr>
            <tr>
              <td><b>4. Menyalahgunakan Kedudukan / Jawatan</b></td>
              <td>Menggunakan kuasa dan jawatan untuk melantik ahli keluarga, kroni, atau syarikat milik sendiri mendapatkan kontrak atau tender kerajaan/syarikat.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>Kesan Buruk Perbuatan Rasuah</h3>
      <ul>
        <li><b>Individu:</b> Dilaknat oleh Allah SWT dan Rasul-Nya; hilang integriti dan maruah diri; hidup sentiasa tidak tenteram.</li>
        <li><b>Masyarakat:</b> Mewujudkan ketidakadilan sosial; menindas golongan miskin dan mereka yang berhak; mencetuskan persengketaan.</li>
        <li><b>Negara & Ekonomi:</b> Melumpuhkan ekonomi; kos projek meningkat dan kualiti binaan merosot; pentadbiran kerajaan menjadi lemah dan hilang kepercayaan pelabur asing.</li>
      </ul>

      <h3>Pengajaran Ayat</h3>
      <ol>
        <li>Kita hendaklah berusaha mencari rezeki yang halal lagi diberkati dan menjauhi sumber harta yang batil.</li>
        <li>Kita wajib menjauhi sebarang perbuatan rasuah sama ada memberi, menerima atau menjadi perantara suapan.</li>
        <li>Kita hendaklah menegakkan keadilan dan amanah tanpa mengutamakan hawa nafsu dan kepentingan duniawi.</li>
      </ol>
    `
  },
  {
    id: "pelajaran-5",
    number: 5,
    field: "al-quran",
    fieldLabel: "Bidang Al-Quran",
    title: "Pelajaran 5: Memahami Sunnatullah (Surah Ali 'Imran, Ayat 137–139)",
    directContentHtml: `
      <h3>Teks Ayat & Terjemahan</h3>
      <p class="quote arabic-text">قَدْ خَلَتْ مِن قَبْلِكُمْ سُنَنٌۭ فَسِيرُوا۟ فِى ٱلْأَرْضِ فَٱنظُرُوا۟ كَيْفَ كَانَ عَـٰقِبَةُ ٱلْمُكَذِّبِينَ ۝ هَـٰذَا بَيَانٌۭ لِّلنَّاسِ وَهُدًۭى وَمَوْعِظَةٌۭ لِّلْمُتَّقِينَ ۝ وَلَا تَهِنُوا۟ وَلَا تَحْزَنُوا۟ وَأَنتُمُ ٱلْأَعْلَوْنَ إِن كُنتُم مُّؤْمِنِينَ</p>
      <p><b>Maksud Ayat:</b> "Sesungguhnya telah berlaku sebelum kamu sunnah-sunnah (peraturan hukum Allah); oleh itu mengembaralah kamu di muka bumi, serta perhatikanlah bagaimana akibat orang-orang yang mendustakan (rasul-rasul). (Al-Quran) ini ialah penerangan yang jelas bagi seluruh manusia, dan petunjuk serta pengajaran bagi orang-orang yang bertaqwa. Dan janganlah kamu merasa lemah dan janganlah kamu berdukacita, padahal kamulah orang-orang yang tertinggi (darjatnya), jika kamu orang-orang yang beriman." (Surah Ali 'Imran: 137–139)</p>

      <h3>Sebab Turun Ayat 139</h3>
      <p>Ayat ini diturunkan berikutan <b>peristiwa kekalahan tentera Islam dalam Perang Uhud (tahun ke-3 Hijrah / 625 Masihi)</b>. Seramai 70 orang sahabat telah gugur syahid termasuk Saidina Hamzah RA. Para sahabat berasa sedih, terluka dan berduka cita atas kekalahan tersebut. Maka Allah SWT menurunkan ayat ini bagi memulihkan semangat juang mereka, melarang mereka berasa lemah serta meyakinkan bahawa kemenangan hakiki adalah milik orang yang beriman dan bertakwa.</p>

      <h3>Konsep Sunnatullah</h3>
      <p><b>Sunnatullah</b> ialah sistem dan undang-undang peraturan yang telah ditetapkan oleh Allah SWT ke atas seluruh makhluk ciptaan-Nya di alam semesta ini.</p>
      <ul>
        <li><b>Tetap dan Kekal:</b> Sunnatullah tidak akan mengalami sebarang perubahan atau pertukaran sepanjang zaman.</li>
        <li><b>Merangkumi Semua Makhluk:</b> Berlaku secara adil kepada seluruh alam, sama ada orang beriman atau orang kafir.</li>
        <li><b>Berasaskan Konsep Sebab, Akibat dan Hikmah:</b> Setiap perkara yang berlaku mempunyai punca musabab tertentu mengikut kebijaksanaan Allah SWT. Contoh: rajin berusaha dan berstrategi membawa kejayaan; kezaliman dan maksiat membawa kebinasaan.</li>
      </ul>

      <h3>Iktibar Sejarah Kaum Terdahulu Berdasarkan Sunnatullah</h3>
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Kaum Terdahulu</th>
              <th>Sebab Kejayaan / Kebinasaan</th>
              <th>Iktibar Sunnatullah</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><b>Kaum Nabi Yusuf AS</b></td>
              <td>Perancangan ekonomi berhemah, kepimpinan berwibawa dan bersiap sedia menghadapi kemarau panjang selama 7 tahun.</td>
              <td>Kejayaan memerlukan perancangan teliti, integriti dan pengurusan sumber yang cekap.</td>
            </tr>
            <tr>
              <td><b>Talut dan Bala Tenteranya</b></td>
              <td>Kepatuhan kepada arahan, ketabahan menghadapi ujian dahaga dan bergantung kepada keimanan mengatasi jumlah musuh Jalut.</td>
              <td>Kekuatan hakiki lahir daripada keimanan, kesabaran dan disiplin ketaatan, bukan semata-mata jumlah bilangan.</td>
            </tr>
            <tr>
              <td><b>Kaum Thamud (Kaum Nabi Saleh AS)</b></td>
              <td>Sombong, angkuh membunuh unta mukjizat dan mendustakan dakwah rasul. Dibinasakan dengan halilintar dan gempa bumi.</td>
              <td>Keangkuhan dan penentangan terhadap syariat Allah mengundang azab kehancuran.</td>
            </tr>
            <tr>
              <td><b>Kaum Nabi Lut AS</b></td>
              <td>Mengamalkan kemungkaran homoseksual dan liwat yang melanggar fitrah insani. Dibinasakan dengan bumi diterbalikkan dan dihujani batu.</td>
              <td>Keruntuhan moral dan perbuatan songsang mendatangkan malapetaka besar kepada tamadun.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>Kepentingan & Pengajaran Memahami Sunnatullah</h3>
      <ol>
        <li>Mendorong umat Islam mengkaji sejarah dan fenomena alam bagi membina tamadun yang maju dan cemerlang.</li>
        <li>Membina keyakinan teguh bahawa janji pertolongan Allah pasti tiba bagi mereka yang beriman dan berusaha mengikut syariat.</li>
        <li>Menjauhkan diri daripada rasa putus asa, malas, dan berpeluk tubuh apabila ditimpa ujian dan kesusahan.</li>
      </ol>
    `
  },
  {
    id: "pelajaran-6",
    number: 6,
    field: "al-quran",
    fieldLabel: "Bidang Al-Quran",
    title: "Pelajaran 6: Larangan Mempersendakan Agama (Surah al-An'am, Ayat 70)",
    directContentHtml: `
      <h3>Teks Ayat & Terjemahan</h3>
      <p class="quote arabic-text">وَذَرِ ٱلَّذِينَ ٱتَّخَذُوا۟ دِينَهُمْ لَعِبًۭا وَلَهْوًۭا وَغَرَّتْهُمُ ٱلْحَيَوٰةُ ٱلدُّنْيَا ۚ وَذَكِّرْ بِهِۦٓ أَن تُبْسَلَ نَفْسٌۢ بِمَا كَسَبَتْ لَيْسَ لَهَا مِن دُونِ ٱللَّهِ وَلِىٌّۭ وَلَا شَفِيعٌۭ...</p>
      <p><b>Maksud Ayat:</b> "Dan tinggalkanlah orang-orang yang menjadikan agama mereka sebagai permainan dan hiburan, dan mereka telah diperdayakan oleh kehidupan dunia. Dan peringatkanlah (mereka) dengan al-Quran itu agar diri masing-masing tidak terjerumus (ke dalam neraka) disebabkan apa yang telah diusahakannya. Tidak ada baginya pelindung dan pemberi syafaat selain Allah..." (Surah al-An'am: 70)</p>

      <h3>Maksud Mempersendakan Agama</h3>
      <p>Melakukan perbuatan atau mengeluarkan perkataan yang merendah-rendahkan, mengejek, mempermainkan atau menghina kesucian ajaran agama Islam, syiar Islam, al-Quran, serta sunnah Rasulullah SAW.</p>

      <h3>Bentuk-Bentuk Mempersendakan Agama</h3>
      <ul>
        <li><b>Mengejek nama Allah & Rasul:</b> Membuat gurauan, karikatur, parodi atau komen jelik menghina Allah SWT, Nabi Muhammad SAW, atau para nabi.</li>
        <li><b>Menghina Sunnah & Ulama:</b> Memperlekeh amalan sunnah nabi (seperti janggut, siwak, solat berjemaah) atau merendah-rendahkan martabat para ulama muktabar.</li>
        <li><b>Mentafsir al-Quran Mengikut Hawa Nafsu:</b> Memutarbelitkan maksud ayat suci al-Quran dan hadis tanpa disiplin ilmu tafsir bagi membenarkan gaya hidup liberal atau maksiat.</li>
        <li><b>Menghalalkan yang Haram:</b> Menganggap arak, pergaulan bebas, riba, atau perzinaan sebagai hak asasi moden yang kononnya dibenarkan.</li>
        <li><b>Mempersendakan Syiar Ibadah:</b> Berpura-pura menunaikan solat untuk dijadikan bahan video jenaka di media sosial.</li>
      </ul>

      <h3>Cara Menjaga Kesucian Agama Islam</h3>
      <ol>
        <li><b>Memperkasakan Keilmuan:</b> Mendalami ilmu agama secara sahih daripada guru bersanad agar tidak terikut pemikiran songsang.</li>
        <li><b>Mencontohi Rasulullah SAW:</b> Mengamalkan ajaran al-Quran dan sunnah dalam kehidupan seharian dengan penuh adab dan takzim.</li>
        <li><b>Mengamalkan Amar Makruf Nahi Mungkar:</b> Berani menegur dan memberi nasihat secara berhikmah kepada sesiapa yang cuba mempersendakan agama.</li>
        <li><b>Penguatkuasaan Undang-Undang:</b> Pihak berkuasa agama mengenakan tindakan tegas terhadap penghina agama di mahkamah syariah dan sivil.</li>
      </ol>

      <h3>Kesan Mempersendakan Agama</h3>
      <ul>
        <li><b>Membatalkan Iman:</b> Pelakunya boleh murtad atau gugur status keislaman berdasarkan Surah at-Taubah: 65–66.</li>
        <li><b>Dilupakan Allah di Akhirat:</b> Tidak mendapat rahmat, pandangan kasih, dan pertolongan Allah SWT di Padang Mahsyar (Surah al-A'raf: 51).</li>
        <li><b>Mendapat Azab Neraka:</b> Disediakan azab yang pedih di dalam neraka serta minuman air panas yang menggelegak.</li>
      </ul>

      <h3>Pengajaran Ayat</h3>
      <ol>
        <li>Kita wajib memuliakan agama Islam sebagai anugerah terbesar dan pedoman hidup yang suci.</li>
        <li>Kita hendaklah menjauhkan diri daripada majlis atau persahabatan dengan golongan yang suka mempersendakan agama.</li>
        <li>Kita hendaklah sentiasa berwaspada ketika berbicara atau memuat naik hantaran di media sosial agar tidak tersingkap penghinaan terhadap syiar Islam.</li>
      </ol>
    `
  },
  {
    id: "pelajaran-7",
    number: 7,
    field: "al-quran",
    fieldLabel: "Bidang Al-Quran",
    title: "Pelajaran 7: Dakwah Pemacu Kemajuan (Surah Fussilat, Ayat 33)",
    directContentHtml: `
      <h3>Teks Ayat & Terjemahan</h3>
      <p class="quote arabic-text">وَمَنْ أَحْسَنُ قَوْلًۭا مِّمَّن دَعَآ إِلَى ٱللَّهِ وَعَمِلَ صَـٰلِحًۭا وَقَالَ إِنَّنِى مِنَ ٱلْمُسْلِمِينَ</p>
      <p><b>Maksud Ayat:</b> "Dan siapakah yang lebih baik perkataannya daripada orang yang menyeru kepada Allah (berdakwah), mengerjakan amal yang soleh, dan berkata: 'Sesungguhnya aku adalah daripada orang-orang Islam (yang berserah diri)?'" (Surah Fussilat: 33)</p>

      <h3>Maksud Dakwah</h3>
      <p>Menyeru, mengajak, dan membimbing manusia supaya beriman dan taat kepada Allah SWT serta rasul-Nya, mengamalkan amar makruf nahi mungkar, dan menjadikan syariat Islam sebagai panduan kehidupan.</p>

      <h3>Tiga Tuntutan Utama dalam Surah Fussilat Ayat 33</h3>
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Tuntutan Ayat</th>
              <th>Huraian & Kaedah Pelaksanaan</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><b>1. Berdakwah Menyeru kepada Allah</b></td>
              <td>Menyampaikan kebenaran Islam dengan hikmah (kebijaksanaan), nasihat yang baik (mau'izah hasanah), dan perbincangan yang membina. Contoh: menyebarkan mesej kebaikan melalui lisan, perbuatan, dan media digital.</td>
            </tr>
            <tr>
              <td><b>2. Beramal Soleh</b></td>
              <td>Pendakwah mestilah terlebih dahulu mengamalkan apa yang didakwahkan. Menjaga solat fardu dan sunat, berakhlak mulia, berintegriti, dan ikhlas berbakti kepada masyarakat agar menjadi teladan unggul (qudwah hasanah).</td>
            </tr>
            <tr>
              <td><b>3. Berbangga Menjadi Muslim</b></td>
              <td>Menzahirkan identiti dan jati diri Muslim dengan yakin, tanpa segan silu atau rasa rendah diri di hadapan cabaran budaya luar, serta berpegang teguh dengan pegangan Islam.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>Spektrum Ilmu: Tokoh Qari Sahabat Rasulullah SAW</h3>
      <p>Antara sahabat terbilang yang masyhur dengan kemahiran bacaan al-Quran dan kegigihan berdakwah yang diiktiraf oleh Rasulullah SAW:</p>
      <ul>
        <li><b>Abdullah bin Mas'ud RA:</b> Sahabat pertama yang memperdengarkan bacaan al-Quran secara terang-terangan di hadapan kaum Quraisy di Kaabah.</li>
        <li><b>Salim Maula Abi Hudzaifah RA:</b> Sahabat yang amat mendalam hafazannya dan pernah menjadi imam solat sebelum Hijrah.</li>
        <li><b>Ubay bin Ka'ab RA:</b> Sahabat yang dilantik sebagai ketua qari dan jurutulis wahyu baginda SAW.</li>
        <li><b>Mu'adz bin Jabal RA:</b> Sahabat yang paling arif tentang perkara halal dan haram serta diutuskan sebagai pendakwah ke Yaman.</li>
      </ul>

      <h3>Pengajaran Ayat</h3>
      <ol>
        <li>Tugas berdakwah ialah tanggungjawab setiap individu Muslim mengikut kemampuan dan kepakaran masing-masing.</li>
        <li>Perkataan dan seruan dakwah merupakan sebaik-baik ucapan yang mendapat ganjaran besar di sisi Allah SWT.</li>
        <li>Dakwah yang paling berkesan ialah dakwah bil-hal (melalui teladan perbuatan mulia dan amal soleh).</li>
      </ol>
    `
  },

  // ==========================================
  // 2. BIDANG HADIS
  // ==========================================
  {
    id: "pelajaran-8",
    number: 8,
    field: "hadis",
    fieldLabel: "Bidang Hadis",
    title: "Pelajaran 8: Menghindari Dosa-Dosa Besar (Al-Mubiqat)",
    directContentHtml: `
      <h3>Teks Hadis & Terjemahan</h3>
      <p class="quote arabic-text">عَنْ أَبِي هُرَيْرَةَ رَضِيَ اللَّهُ عَنْهُ عَنِ النَّبِيِّ ﷺ قَالَ: «اجْتَنِبُوا السَّبْعَ الْمُوبِقَاتِ». قَالُوا: يَا رَسُولَ اللَّهِ! وَمَا هُنَّ؟ قَالَ: «الشِّرْكُ بِاللَّهِ، وَالسِّحْرُ، وَقَتْلُ النَّفْسِ الَّتِي حَرَّمَ اللَّهُ إِلَّا بِالْحَقِّ، وَأَكْلُ الرِّبَا، وَأَكْلُ مَالِ الْيَتِيمِ، وَالتَّوَلِّي يَوْمَ الزَّحْفِ، وَقَذْفُ الْمُحْصَنَاتِ الْمُؤْمِنَاتِ الْغَافِلَاتِ». (متفق عليه)</p>
      <p><b>Maksud Hadis:</b> Daripada Abu Hurairah RA, Nabi SAW bersabda: "Jauhilah tujuh perkara yang membinasakan (al-Mubiqat)." Sahabat bertanya: "Wahai Rasulullah, apakah perkara itu?" Baginda bersabda: "Syirik kepada Allah, sihir, membunuh jiwa yang diharamkan oleh Allah melainkan dengan hak, makan riba, makan harta anak yatim, lari daripada medan perang, dan menuduh wanita beriman yang suci melakukan zina (qazaf)." (Muttafaq 'Alaih: Riwayat al-Bukhari & Muslim)</p>

      <h3>Pengertian Dosa Besar & Al-Mubiqat</h3>
      <ul>
        <li><b>Maksud Al-Mubiqat (الموبقات):</b> Perkara-perkara yang membinasakan, merosakkan, dan membawa kehancuran di dunia serta seksaan azab api neraka di akhirat.</li>
        <li><b>Dosa Besar:</b> Setiap dosa yang dinamakan secara khusus dalam al-Quran dan hadis dengan ancaman laknat, kemurkaan Allah SWT, atau hukuman hudud di dunia dan azab neraka di akhirat.</li>
      </ul>

      <h3>Perincian 7 Dosa Besar dalam Hadis</h3>
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Dosa Besar</th>
              <th>Pengertian & Contoh</th>
              <th>Kesan & Hukuman Syarak</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><b>1. Syirik kepada Allah SWT</b></td>
              <td>Menyekutukan Allah SWT. Terbahagi kepada dua:<br>
              • <i>Syirik Jali (Nyata):</i> Menyembah berhala, pokok, atau meyakini ada tuhan selain Allah (merosakkan akidah/murtad).<br>
              • <i>Syirik Khafi (Tersembunyi):</i> Riak, ujub, takbur dalam ibadah (merosakkan pahala amalan).</td>
              <td>Dosa paling besar yang tidak diampunkan Allah jika mati tanpa bertaubat (Surah an-Nisa': 48).</td>
            </tr>
            <tr>
              <td><b>2. Sihir</b></td>
              <td>Perbuatan yang memudaratkan orang lain dengan bantuan jin, syaitan, atau amalan kufur. Contoh: santau, pukau, minyak pengasih, tangkal pelaris.</td>
              <td>Boleh membawa kepada kekufuran; merosakkan keharmonian keluarga dan kesihatan mangsa.</td>
            </tr>
            <tr>
              <td><b>3. Membunuh Jiwa Tanpa Hak</b></td>
              <td>Menghilangkan nyawa manusia yang diharamkan membunuhnya. Contoh: menembak, menikam, meracun, atau menggugurkan janin tanpa sebab syarak.</td>
              <td>Dikenakan hukuman Qisas (hukum bunuh balas) di dunia atau membayar diyat; azab neraka Jahanam kekal di akhirat.</td>
            </tr>
            <tr>
              <td><b>4. Memakan Riba</b></td>
              <td>Sebarang pertambahan nilai dalam urusan pertukaran barang ribawi dan hutang-piutang. Contoh: mengenakan bunga (faedah) ke atas pinjaman.</td>
              <td>Melumpuhkan ekonomi umat Islam, menindas golongan peminjam miskin; diperangi oleh Allah dan Rasul-Nya.</td>
            </tr>
            <tr>
              <td><b>5. Memakan Harta Anak Yatim</b></td>
              <td>Menggunakan, membelanjakan atau menghabiskan harta peninggalan anak yatim untuk kepentingan peribadi penjaga secara batil dan zalim.</td>
              <td>Umpama menelan api ke dalam perut dan dimasukkan ke dalam neraka Sa'ir (Surah an-Nisa': 10).</td>
            </tr>
            <tr>
              <td><b>6. Lari daripada Medan Perang</b></td>
              <td>Meninggalkan barisan ketenteraan Islam semasa sedang berhadapan dengan musuh di medan pertempuran (at-Tawalli yaumaz-zahf).</td>
              <td>Mengancam keselamatan negara, menjatuhkan moral tentera dan membuka ruang penjajahan musuh ke atas umat Islam.</td>
            </tr>
            <tr>
              <td><b>7. Menuduh Wanita Suci Berzina (Qazaf)</b></td>
              <td>Melemparkan tuduhan zina kepada wanita beriman yang terpelihara kehormatan tanpa mengemukakan 4 orang saksi lelaki yang adil.</td>
              <td>Hukuman Hudud iaitu <b>80 kali sebatan</b> dan kesaksiannya tidak diterima selama-lamanya (Surah an-Nur: 4).</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>Pengajaran Hadis</h3>
      <ol>
        <li>Kita wajib memelihara kemurnian akidah daripada sebarang unsur syirik dan amalan khurafat atau sihir.</li>
        <li>Kita hendaklah menjauhkan diri daripada sebarang bentuk penindasan seperti riba dan memakan harta anak yatim.</li>
        <li>Kita bertanggungjawab mempertahankan kedaulatan agama dan negara daripada ancaman pencerobohan musuh.</li>
        <li>Kita wajib menjaga lidah dan tulisan daripada menuduh atau menyebarkan fitnah zina terhadap wanita yang suci.</li>
      </ol>
    `
  },
  {
    id: "pelajaran-9",
    number: 9,
    field: "hadis",
    fieldLabel: "Bidang Hadis",
    title: "Pelajaran 9: Kemuliaan Berdikari",
    directContentHtml: `
      <h3>Teks Hadis & Terjemahan</h3>
      <p class="quote arabic-text">عَنْ أَبِي هُرَيْرَةَ رَضِيَ اللَّهُ عَنْهُ عَنِ النَّبِيِّ ﷺ قَالَ: «لَأَنْ يَحْتَطِبَ أَحَدُكُمْ حُزْمَةً عَلَىٰ ظَهْرِهِ خَيْرٌ لَهُ مِنْ أَنْ يَسْأَلَ أَحَدًا فَيُعْطِيَهُ أَوْ يَمْنَعَهُ». (رواه البخاري)</p>
      <p><b>Maksud Hadis:</b> Daripada Abu Hurairah RA, Rasulullah SAW bersabda: "Sekiranya seseorang daripada kamu mengambil seikat kayu api lalu memikulnya di atas belakangnya (untuk dijual), itu adalah lebih baik baginya daripada dia meminta-minta kepada seseorang, sama ada orang itu memberinya atau menolaknya." (Riwayat al-Bukhari)</p>

      <h3>Maksud & Konsep Berdikari</h3>
      <p><b>Berdikari</b> (berdiri di atas kaki sendiri) ialah berusaha dengan kudrat, tenaga, dan kemahiran sendiri untuk menyara kehidupan diri dan keluarga tanpa mengharap bantuan atau belas kasihan orang lain.</p>

      <h3>5 Konsep Berdikari Menurut Islam</h3>
      <ol>
        <li><b>Berusaha dengan Bersungguh-sungguh:</b> Rajin bekerja mencari rezeki yang halal tanpa memilih kerja yang halal walaupun dipandang rendah oleh masyarakat.</li>
        <li><b>Berilmu dan Berkemahiran:</b> Melengkapkan diri dengan pengetahuan akademik, kemahiran teknikal, dan teknologi moden untuk meningkatkan produktiviti.</li>
        <li><b>Berdisiplin:</b> Menguruskan masa, perbelanjaan, dan jadual kerja dengan teratur dan berhemah.</li>
        <li><b>Berani Membuat Keputusan:</b> Berani meneroka peluang perniagaan baharu dan bersedia menghadapi cabaran serta risiko.</li>
        <li><b>Bertawakal kepada Allah SWT:</b> Menyerahkan segala hasil ketentuan kepada Allah SWT setelah mengerahkan usaha dan ikhtiar secara optimum.</li>
      </ol>

      <h3>Kelebihan Berdikari dalam Pelbagai Aspek Kehidupan</h3>
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Aspek</th>
              <th>Kelebihan Mengamalkan Sikap Berdikari</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><b>Agama</b></td>
              <td>Mendapat keredaan dan pahala daripada Allah SWT kerana menunaikan kewajipan nafkah dan menghidupkan sunnah para rasul yang bekerja sendiri.</td>
            </tr>
            <tr>
              <td><b>Ekonomi</b></td>
              <td>Meningkatkan taraf pendapatan keluarga; mengurangkan kadar pengangguran dan kebergantungan negara kepada tenaga kerja asing.</td>
            </tr>
            <tr>
              <td><b>Pendidikan</b></td>
              <td>Membina keyakinan diri, melahirkan individu berkemahiran tinggi dan berdaya saing dalam pasaran kerja global.</td>
            </tr>
            <tr>
              <td><b>Kemasyarakatan</b></td>
              <td>Memelihara maruah umat Islam daripada dipandang hina; mampu menyumbang zakat, sedekah, dan wakaf untuk membantu komuniti.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>Pengajaran Hadis</h3>
      <ol>
        <li>Umat Islam dituntut berusaha mencari rezeki yang halal dan menjauhi tabiat meminta-minta yang menjatuhkan maruah diri.</li>
        <li>Pekerjaan yang halal walaupun nampak kasar (seperti mencari kayu api atau buruh) adalah mulia di sisi Islam berbanding meminta sedekah.</li>
        <li>Kita hendaklah membudayakan sikap berdikari dalam pelajaran, kerjaya, dan urusan kehidupan seharian.</li>
      </ol>
    `
  },

  // ==========================================
  // 3. BIDANG AKIDAH
  // ==========================================
  {
    id: "pelajaran-10",
    number: 10,
    field: "akidah",
    fieldLabel: "Bidang Akidah",
    title: "Pelajaran 10: Allah SWT Maha Pembalas dan Maha Perkasa",
    subtopics: [
      {
        id: "unit-1-al-muntaqim",
        badge: "UNIT 1",
        title: "Unit 1: Al-Muntaqim (الْمُنْتَقِمُ - Maha Pembalas)",
        contentHtml: `
          <h3>1. Maksud Al-Muntaqim</h3>
          <p>Al-Muntaqim ialah nama Allah SWT yang menunjukkan bahawa <b>Allah SWT Maha Pembalas</b> dengan menimpakan azab dan seksaan yang dahsyat ke atas orang yang melampaui batas dan berterusan melakukan kezaliman serta keingkaran.</p>

          <h3>2. Dalil Naqli Nama Allah Al-Muntaqim</h3>
          <p class="quote arabic-text">فَإِمَّا نَذْهَبَنَّ بِكَ فَإِنَّا مِنْهُم مُّنتَقِمُونَ</p>
          <p><b>Maksudnya:</b> "Maka sekiranya Kami wafatkan engkau (wahai Muhammad), sesungguhnya Kami tetap akan menyeksa mereka." (Surah az-Zukhruf: 41)</p>

          <h3>3. Kefahaman Mengenai Al-Muntaqim</h3>
          <ul>
            <li><b>Pembalasan Terhadap Penolak Al-Quran:</b> Berdasarkan Surah as-Sajdah: 22, tiada yang lebih zalim daripada orang yang telah diberi peringatan dengan ayat Allah lalu berpaling daripadanya. Sesungguhnya Allah akan membalas ke atas orang yang berdosa.</li>
            <li><b>Peristiwa Ad-Dukhan (Asap/Kemarau):</b> Ditimpakan azab kelaparan dan kemarau berdebu kepada kafir Quraisy yang menentang dakwah Nabi SAW (Surah ad-Dukhan: 16).</li>
            <li><b>Pembalasan Selepas Pembuktian Hujah:</b> Allah menimpakan hukuman selepas para rasul diutuskan membawa mukjizat dan keterangan nyata, seperti kaum Firaun, Thamud, dan 'Ad (Surah ar-Rum: 47).</li>
          </ul>

          <h3>4. Penghayatan dalam Kehidupan</h3>
          <ol>
            <li>Melahirkan rasa takut (khauf) dan gerun terhadap azab seksa api neraka Allah SWT.</li>
            <li>Menjauhi perbuatan zalim, aniaya, merampas hak orang lain, dan kemungkaran.</li>
            <li>Membendung salah laku sosial seperti gejala buli, fitnah, dan penindasan.</li>
            <li>Meyakini bahawa setiap kezaliman di dunia pasti menerima balasan adil di mahkamah akhirat.</li>
          </ol>
        `
      },
      {
        id: "unit-2-al-jabbar",
        badge: "UNIT 2",
        title: "Unit 2: Al-Jabbar (الْجَبَّارُ - Maha Perkasa / Berkuasa Mutlak)",
        contentHtml: `
          <h3>1. Maksud Al-Jabbar</h3>
          <p>Al-Jabbar ialah nama Allah SWT yang menunjukkan bahawa <b>Allah SWT Maha Berkuasa secara mutlak</b> untuk melakukan segala kehendak-Nya ke atas seluruh makhluk dan tiada sesiapa yang dapat menghalang atau menentang kehendak-Nya.</p>

          <h3>2. Dalil Naqli Nama Allah Al-Jabbar</h3>
          <p class="quote arabic-text">هُوَ ٱللَّهُ ٱلَّذِى لَآ إِلَـٰهَ إِلَّا هُوَ ٱلْمَلِكُ ٱلْقُدُّوسُ ٱلسَّلَـٰمُ ٱلْمُؤْمِنُ ٱلْمُهَيْمِنُ ٱلْعَزِيزُ ٱلْجَبَّارُ ٱلْمُتَكَبِّرُ ۚ سُبْحَـٰنَ ٱللَّهِ عَمَّا يُشْرِكُونَ</p>
          <p><b>Maksudnya:</b> "Dialah Allah, tiada Tuhan melainkan Dia; Yang Menguasai (sekalian alam); Yang Maha Suci; Yang Maha Selamat Sejahtera; Yang Melimpahkan Keamanan; Yang Maha Mengawasi; Yang Maha Perkasa; Yang Maha Berkuasa (Al-Jabbar); Yang Memiliki Segala Kebesaran..." (Surah al-Hasyr: 23)</p>

          <h3>3. Tiga Kefahaman Utama Mengenai Nama Al-Jabbar</h3>
          <ol>
            <li><b>Allah Memiliki dan Menguasai Seluruh Alam Semesta:</b> Semua makhluk berada di bawah genggaman pemerintahan dan kekuasaan mutlak Allah SWT. Dalam Hadis Qudsi: <span class="arabic-text">أَنَا الْجَبَّارُ! أَيْنَ الْجَبَّارُونَ؟ أَيْنَ الْمُتَكَبِّرُونَ؟</span> ("Akulah yang Maha Perkasa! Di manakah orang yang berkuasa dan sombong dahulu?").</li>
            <li><b>Perbuatan Allah Tidak Boleh Dipersoalkan:</b> Setiap ketetapan dan takdir Allah SWT mengandungi hikmah yang Maha Agung. Firman-Nya: <span class="arabic-text">لَا يُسْأَلُ عَمَّا يَفْعَلُ وَهُمْ يُسْأَلُونَ</span> ("Dia tidak boleh ditanya tentang apa yang dilakukan-Nya, sedangkan merekalah yang akan ditanya kelak" - Surah al-Anbiya': 23).</li>
            <li><b>Manusia Wajib Bersifat Merendah Diri (Tawaduk):</b> Manusia adalah makhluk yang lemah. Sesiapa yang bersifat sombong, takbur dan bongkak akan dicampakkan Allah ke dalam neraka Jahanam.</li>
          </ol>

          <h3>4. Penghayatan Keimanan terhadap Al-Jabbar</h3>
          <ul>
            <li>Sentiasa bersikap rendah hati dan tidak sombong dengan harta, pangkat, atau rupa paras.</li>
            <li>Redha dan sabar dengan segala ketentuan takdir Allah SWT.</li>
            <li>Hanya memohon perlindungan dan pertolongan kepada Allah Yang Maha Perkasa.</li>
          </ul>
        `
      }
    ]
  },
  {
    id: "pelajaran-11",
    number: 11,
    field: "akidah",
    fieldLabel: "Bidang Akidah",
    title: "Pelajaran 11: Perkara yang Membatalkan Iman",
    directContentHtml: `
      <h3>Pengertian & Kepentingan Memelihara Iman</h3>
      <p>Iman ialah iktikad (keyakinan) dalam hati, diikrarkan dengan lisan, dan dibuktikan melalui amalan perbuatan. Memelihara iman adalah kewajipan paling utama kerana iman merupakan syarat mutlak penerimaan segala amalan kebaikan di sisi Allah SWT.</p>

      <h3>Tiga Cara Batalnya Iman (Iktikad, Perkataan & Perbuatan)</h3>
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Cara Terbatal Iman</th>
              <th>Huraian & Aspek Terlibat</th>
              <th>Contoh Perbuatan / Perkataan</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><b>1. Melalui Iktikad (Hati / Keyakinan)</b></td>
              <td>Mengingkari atau meragui rukun iman dan perkara asas akidah Islam:<br>
              • <i>Al-Uluhiyyah:</i> Mengingkari kewujudan Allah atau sifat kesempurnaan-Nya.<br>
              • <i>Al-Nubuwwah:</i> Meragui kenabian Nabi Muhammad SAW atau menafikan baginda nabi terakhir.<br>
              • <i>Al-Ghaibiyyat:</i> Menafikan hari kiamat, malaikat, syurga, neraka atau azab kubur.<br>
              • <i>Al-Syariah:</i> Mengingkari kewajipan solat fardu, puasa, zakat atau menghalalkan hukum zina.</td>
              <td>Meyakini bahawa alam ini wujud secara kebetulan tanpa pencipta, atau beriktikad undang-undang Islam sudah lapuk dan tidak sesuai diamalkan.</td>
            </tr>
            <tr>
              <td><b>2. Melalui Perkataan (Lisan)</b></td>
              <td>Mengucapkan kata-kata yang jelas mengandungi penghinaan, penafian, atau ejekan terhadap Allah, para rasul, al-Quran, atau syariat Islam.</td>
              <td>Mencaci maki Allah SWT atau Nabi SAW; berkata "Solat membazirkan masa"; mengisytiharkan diri keluar daripada Islam; menghalalkan perkara haram seperti arak atau judi.</td>
            </tr>
            <tr>
              <td><b>3. Melalui Perbuatan (Amalan Anggota)</b></td>
              <td>Melakukan perbuatan fizikal yang khusus menjadi syiar kekufuran atau menunjukkan penyembahan kepada selain Allah.</td>
              <td>Sujud menyembah berhala, matahari, atau makhluk; memijak atau membuang mushaf al-Quran ke tempat najis dengan niat menghina; menyertai upacara keagamaan bukan Islam seperti memuja roh.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>Syarat Terbatalnya Iman Seseorang</h3>
      <p>Seseorang Muslim hanya dihukum terbatal imannya sekiranya memenuhi 4 syarat berikut:</p>
      <ol>
        <li><b>Mengetahui:</b> Tahu dan sedar bahawa perkataan atau perbuatan yang dilakukannya adalah haram dan dilarang syarak.</li>
        <li><b>Sedar & Berakal:</b> Dilakukan dalam keadaan waras, sedar dan bukan dalam keadaan hilang akal atau gila.</li>
        <li><b>Kerelaan Sendiri (Bukan Paksaan):</b> Melakukannya atas kehendak sendiri tanpa wujud ugutan bunuh atau paksaan fizikal yang membinasakan.</li>
        <li><b>Berniat Sengaja:</b> Melakukannya dengan sengaja tanpa kesilapan tidak sengaja (tersasul) atau kekeliruan yang dimaafkan.</li>
      </ol>

      <h3>Kesan Buruk Terbatalnya Iman</h3>
      <ul>
        <li>Segala pahala amalan kebaikan yang pernah dilakukan menjadi sia-sia dan terhapus (Surah al-Baqarah: 217).</li>
        <li>Diharamkan masuk ke dalam syurga dan kekal di dalam api neraka selama-lamanya jika tidak bertaubat sebelum meninggal dunia.</li>
        <li>Terputus hubungan pewarisan harta pusaka (faraid) dengan waris yang Muslim.</li>
        <li>Ikatan perkahwinan (nikah) terbatal secara automatik (fasakh).</li>
        <li>Jenazahnya tidak boleh dimandikan, dikafankan, disolatkan, dan tidak boleh dikebumikan di tanah perkuburan Islam.</li>
      </ul>

      <h3>Cara Memulihkan & Memelihara Iman</h3>
      <ol>
        <li><b>Bertaubat Nasuha:</b> Segera menyesali dosa, berhenti daripada perbuatan murtad, dan berazam tidak mengulanginya lagi.</li>
        <li><b>Mengucap Dua Kalimah Syahadah:</b> Memperbaharui keislaman dengan lafaz syahadah berserta keyakinan hati yang ikhlas.</li>
        <li><b>Mendalami Ilmu Akidah:</b> Menuntut ilmu tauhid yang sahih berdasarkan fahaman Ahli Sunnah Wal Jamaah.</li>
        <li><b>Banyak Berzikir & Beristighfar:</b> Sentiasa memohon keampunan dan berdoa agar ditetapkan hati dalam iman: <span class="arabic-text">يَا مُقَلِّبَ الْقُلُوبِ ثَبِّتْ قَلْبِي عَلَىٰ دِينِكَ</span>.</li>
      </ol>
    `
  },
  {
    id: "pelajaran-12",
    number: 12,
    field: "akidah",
    fieldLabel: "Bidang Akidah",
    title: "Pelajaran 12: Menghindari Ajaran Sesat",
    directContentHtml: `
      <h3>Takrif Ajaran Sesat</h3>
      <p><b>Ajaran Sesat</b> ialah sebarang ajaran, pegangan, amalan, atau fahaman yang didakwa berasaskan agama Islam sedangkan pada hakikatnya <b>bercanggah dengan al-Quran dan al-Sunnah</b> serta ijmak para ulama muktabar.</p>

      <h3>Ciri-Ciri Ajaran Sesat dalam 4 Aspek</h3>
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Aspek</th>
              <th>Ciri-Ciri Kesesatan</th>
              <th>Contoh Bentuk Penyelewengan</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><b>1. Al-Quran & Hadis</b></td>
              <td>Mendakwa ada wahyu atau kitab suci baharu selain al-Quran; menolak hadis sahih (golongan antihadis); mentafsirkan ayat Quran mengikut hawa nafsu dan akal semata-mata.</td>
              <td>Mendakwa ketua menerima wahyu langsung daripada malaikat Jibril; menafikan kewajipan solat kerana mendakwa tiada perincian rakaat dalam al-Quran.</td>
            </tr>
            <tr>
              <td><b>2. Akidah</b></td>
              <td>Mendakwa ketua kumpulan sebagai Imam Mahdi, Nabi terakhir, atau penjelmaan Tuhan; menganggap ketua sebagai maksum (terpelihara daripada dosa); memuja pemimpin secara melampau (ghuluw).</td>
              <td>Mendakwa pemimpin boleh memberi syafaat secara mutlak atau menjamin pengikutnya masuk syurga secara terus.</td>
            </tr>
            <tr>
              <td><b>3. Ibadah</b></td>
              <td>Mengubah suai rukun atau kaifiat ibadah yang telah ditetapkan syarak; menghapuskan kewajipan ibadah fardu (solat, puasa, haji) bagi orang yang mencapai darjat 'makrifat'.</td>
              <td>Melakukan solat hanya dengan niat di dalam hati tanpa rukun fi'li; menunaikan haji di tempat lain selain Mekah (contohnya di puncak gunung).</td>
            </tr>
            <tr>
              <td><b>4. Akhlak</b></td>
              <td>Menghalalkan perkara yang diharamkan oleh syariat Islam atas alasan kerohanian atau kebebasan nafsu.</td>
              <td>Mengamalkan nikah batin tanpa wali dan saksi; pergaulan bebas lelaki dan wanita dalam ritual zikir gelap; meminum arak.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>Kesan Buruk Ajaran Sesat</h3>
      <ul>
        <li><b>Agama:</b> Merosakkan kesucian akidah Islam; membatalkan iman; mencemarkan imej Islam di mata dunia.</li>
        <li><b>Politik:</b> Mengancam keselamatan dan kestabilan negara; mencetuskan ketaksuban melampau yang menentang pihak berkuasa.</li>
        <li><b>Ekonomi:</b> Membazirkan wang dan harta pengikut yang dieksploitasi oleh ketua ajaran; menurunkan produktiviti kerja.</li>
        <li><b>Kemasyarakatan:</b> Memecahbelahkan institusi kekeluargaan; menyebabkan perceraian; memutuskan silaturrahim.</li>
      </ul>

      <h3>6 Cara Menjauhi Ajaran Sesat (Formula: I-S-A-K-D-T)</h3>
      <ol>
        <li><b>Ilmu:</b> Mendalami ilmu asas fardu ain dan akidah Ahli Sunnah Wal Jamaah daripada guru yang diiktiraf tauliahnya.</li>
        <li><b>Sahabat:</b> Memilih sahabat yang berakhlak mulia, soleh, dan menjauhi individu yang mencurigakan ideologinya.</li>
        <li><b>Amal:</b> Memperbanyakkan amalan soleh mengikut sunnah Rasulullah SAW secara istiqamah.</li>
        <li><b>Kaji:</b> Menyelidiki dan merujuk sebarang keraguan atau kemusykilan agama kepada pihak berkuasa rasmi (Jabatan Mufti / JAWI / JAIS).</li>
        <li><b>Doa:</b> Sentiasa memohon petunjuk daripada Allah SWT agar dijauhkan daripada kesesatan hati.</li>
        <li><b>Taubat:</b> Segera bertaubat dan kembali kepada pangkal jalan sekiranya pernah terlanjur terlibat dengan fahaman salah.</li>
      </ol>
    `
  },

  // ==========================================
  // 4. BIDANG FIKAH
  // ==========================================
  {
    id: "pelajaran-13",
    number: 13,
    field: "fikah",
    fieldLabel: "Bidang Fikah",
    title: "Pelajaran 13: Haji dan Umrah",
    directContentHtml: `
      <h3>Konsep Haji & Umrah</h3>
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Ibadah</th>
              <th>Bahasa</th>
              <th>Istilah Syarak</th>
              <th>Waktu Ibadah</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><b>Haji</b></td>
              <td>Menuju ke suatu tempat yang agung.</td>
              <td>Mengunjungi Baitullah al-Haram di Mekah pada <b>bulan-bulan Haji</b> untuk mengerjakan ibadah tertentu mengikut syarat-syaratnya.</td>
              <td>Bulan-bulan Haji: <b>Syawal, Zulkaedah, dan 1–13 Zulhijjah</b>.</td>
            </tr>
            <tr>
              <td><b>Umrah</b></td>
              <td>Ziarah.</td>
              <td>Mengunjungi Baitullah al-Haram di Mekah pada <b>bila-bila masa sepanjang tahun</b> untuk mengerjakan ibadah tertentu mengikut syarat-syaratnya.</td>
              <td>Sepanjang tahun (kecuali bagi jemaah haji yang sedang berihram haji).</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p><b>Hukum:</b> Wajib sekali seumur hidup bagi setiap Muslim yang berkemampuan (istita'ah). Pensyariatan ibadah haji berlaku pada tahun <b>ke-5 Hijrah</b> (ada pendapat tahun ke-6 Hijrah). Dalil: Surah al-Baqarah: 196.</p>

      <h3>Syarat Wajib Haji & Umrah (Formula: I-B-B-M-I)</h3>
      <ol>
        <li><b>Islam:</b> Tidak wajib kepada orang kafir.</li>
        <li><b>Baligh:</b> Cukup umur; kanak-kanak yang haji sah tetapi tidak menggugurkan fardunya setelah baligh.</li>
        <li><b>Berakal:</b> Waras; tidak wajib ke atas orang gila.</li>
        <li><b>Merdeka:</b> Bukan hamba abdi.</li>
        <li><b>Istita'ah (Berkemampuan):</b> Meliputi kemampuan kewangan (tambang pergi balik dan nafkah tanggungan), kesihatan fizikal, keselamatan perjalanan, kenderaan selamat, serta bagi wanita ditemani mahram/suami atau kawan wanita yang dipercayai.</li>
      </ol>

      <h3>Perbandingan Rukun Haji dan Umrah</h3>
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Rukun Haji (Formula: N-W-T-S-T-T)</th>
              <th>Rukun Umrah</th>
              <th>Hukum Jika Ditinggalkan</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                1. Niat ihram haji<br>
                2. <b>Wukuf di Arafah</b> (kemuncak haji)<br>
                3. Tawaf Ifadah di Kaabah<br>
                4. Saie antara Safa & Marwah<br>
                5. Bergunting / bercukur (Tahallul)<br>
                6. Tertib pada kebanyakan rukun
              </td>
              <td>
                1. Niat ihram umrah<br>
                (<i>Tiada wukuf dalam umrah</i>)<br>
                2. Tawaf Umrah<br>
                3. Saie<br>
                4. Bergunting / bercukur (Tahallul)<br>
                5. Tertib pada semua rukun
              </td>
              <td><b>Ibadah TIDAK SAH</b> dan tidak boleh ditebus atau diganti dengan bayaran Dam. Wajib diulangi semula.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>Perkara Wajib Haji (6 Perkara)</h3>
      <p>Perkara yang wajib dilakukan; jika ditinggalkan hajinya <b>tetap sah tetapi berdosa dan wajib membayar Dam (denda)</b>:</p>
      <ol>
        <li>Niat ihram di Miqat.</li>
        <li>Mabit (bermalam) di Muzdalifah (malam 10 Zulhijjah).</li>
        <li>Melontar Jamrah Kubra (10 Zulhijjah).</li>
        <li>Mabit di Mina (hari-hari Tasyriq 11, 12, dan 13 Zulhijjah).</li>
        <li>Melontar ketiga-tiga Jamrah: Ula, Wusta, dan Aqabah pada hari-hari Tasyriq.</li>
        <li>Menjauhi larangan-larangan ihram.</li>
      </ol>

      <h3>Miqat Makani (Sempadan Tempat Berniat Ihram)</h3>
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Nama Miqat</th>
              <th>Jemaah yang Melaluinya</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><b>Zulhulaifah (Bir Ali)</b></td>
              <td>Penduduk Madinah dan jemaah yang datang dari arah Madinah.</td>
            </tr>
            <tr>
              <td><b>Qarnul Manazil (as-Sail al-Kabir)</b></td>
              <td>Jemaah dari <b>Malaysia, Asia Tenggara</b>, dan arah Najd.</td>
            </tr>
            <tr>
              <td><b>Yalamlam</b></td>
              <td>Jemaah dari arah Yaman, India, dan selatan.</td>
            </tr>
            <tr>
              <td><b>Zatul Irq</b></td>
              <td>Jemaah dari arah Iraq dan timur.</td>
            </tr>
            <tr>
              <td><b>al-Juhfah (Rabigh)</b></td>
              <td>Jemaah dari arah Mesir, Syria, dan barat.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>Larangan Semasa Ihram</h3>
      <ul>
        <li><b>Pakaian (Lelaki):</b> Memakai pakaian berjahit/bercantum dan menutup kepala.</li>
        <li><b>Pakaian (Wanita):</b> Menutup muka (berpurdah) dan memakai sarung tangan.</li>
        <li><b>Kecantikan & Wangian:</b> Memakai minyak wangi pada badan/pakaian; memotong kuku; memotong/mencabut rambut atau bulu; menyapu minyak rambut.</li>
        <li><b>Alam Sekitar:</b> Memburu, mencederakan atau membunuh binatang darat buruan; memotong atau menebang pokok di Tanah Haram.</li>
        <li><b>Perkahwinan & Syahwat:</b> Berkahwin, mengahwinkan (wali), atau menjadi wakil akad nikah; melakukan perbuatan merangsang syahwat; melakukan persetubuhan (merosakkan haji).</li>
      </ul>

      <h3>3 Cara Menunaikan Haji (Formula: I - T - Q)</h3>
      <ul>
        <li><b>1. Haji Ifrad:</b> Mengerjakan ibadah <b>Haji dahulu</b> dalam bulan haji, kemudian setelah selesai baru berniat dan mengerjakan Umrah. (Paling afdhal, tidak dikenakan Dam).</li>
        <li><b>2. Haji Tamattuk:</b> Mengerjakan ibadah <b>Umrah dahulu</b> dalam bulan haji, bertahallul penuh, kemudian mengerjakan Haji pada 8 Zulhijjah. (Mudah, tetapi dikenakan Dam).</li>
        <li><b>3. Haji Qiran:</b> Berniat dan mengerjakan ibadah <b>Haji dan Umrah secara serentak</b> dalam satu masa. (Dikenakan Dam).</li>
      </ul>
    `
  },
  {
    id: "pelajaran-14",
    number: 14,
    field: "fikah",
    fieldLabel: "Bidang Fikah",
    title: "Pelajaran 14: Sembelihan",
    directContentHtml: `
      <h3>Maksud, Hukum & Dalil Naqli Sembelihan</h3>
      <ul>
        <li><b>Bahasa:</b> Memotong.</li>
        <li><b>Istilah Syarak:</b> Menyembelih binatang darat yang halal dimakan dagingnya dengan cara <b>memutuskan urat halkum (saluran pernafasan) dan urat marih (saluran makanan)</b> menggunakan alat yang tajam dengan niat kerana Allah SWT.</li>
        <li><b>Hukum:</b> <b>Wajib</b> bagi membolehkan daging haiwan halal dimakan. Haiwan yang mati tanpa disembelih dianggap bangkai dan haram dimakan (kecuali ikan dan belalang).</li>
        <li><b>Dalil Naqli:</b> Firman Allah: <span class="arabic-text">حُرِّمَتْ عَلَيْكُمُ ٱلْمَيْتَةُ وَٱلدَّمُ وَلَحْمُ ٱلْخِنزِيرِ وَمَآ أُهِلَّ لِغَيْرِ ٱللَّهِ بِهِۦ... إِلَّا مَا ذَكَّيْتُمْ</span> (Surah al-Ma'idah: 3). Sabda Nabi SAW: "Setiap yang ditumpahkan darahnya dengan menyebut nama Allah maka makanlah." (Riwayat al-Bukhari).</li>
      </ul>

      <h3>3 Rukun Sembelihan</h3>
      <ol>
        <li><b>Penyembelih:</b> Orang yang melakukan sembelihan.</li>
        <li><b>Binatang Sembelihan:</b> Haiwan darat halal yang disembelih.</li>
        <li><b>Alat Sembelihan:</b> Senjata atau perkakas yang digunakan untuk menyembelih.</li>
      </ol>

      <h3>Syarat Sah Sembelihan</h3>
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Rukun</th>
              <th>Syarat Sah</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><b>Penyembelih</b></td>
              <td>1. Beragama Islam atau Ahli Kitab (Bani Israil tulen).<br>2. Melakukan sembelihan hanya kerana Allah SWT semata-mata, bukan untuk persembahan berhala, jin, atau kubur keramat.</td>
            </tr>
            <tr>
              <td><b>Binatang Sembelihan</b></td>
              <td>1. Binatang darat yang halal dimakan.<br>2. Masih mempunyai <b>Hayat Mustaqirrah</b> (nyawa yang stabil, haiwan mampu bergerak cergas dan belum di ambang maut).<br>3. Terputus <b>urat halkum</b> dan <b>urat marih</b> secara sempurna dan serta-merta.</td>
            </tr>
            <tr>
              <td><b>Alat Sembelihan</b></td>
              <td>1. Alat yang tajam (besi, keluli, batu tajam) yang melukakan dan mengalirkan darah dengan cepat.<br>2. <b>Bukan</b> diperbuat daripada <b>tulang, kuku, atau gigi</b>.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>Perkara Sunat Ketika Sembelihan</h3>
      <ul>
        <li>Menajamkan pisau sebelum sembelihan (bukan di hadapan binatang).</li>
        <li>Penyembelih dan binatang sembelihan menghadap ke arah kiblat.</li>
        <li>Membaca Basmalah (<span class="arabic-text">بِسْمِ اللَّهِ</span>) dan berselawat ke atas Nabi SAW.</li>
        <li>Membaringkan binatang di atas rusuk sebelah kirinya.</li>
        <li>Memutuskan dua urat leher di kiri dan kanan (<b>urat wadajain</b> / salur darah utama) supaya darah mengalir deras dan cepat mati.</li>
        <li>Melakukan sembelihan pada waktu siang.</li>
      </ul>

      <h3>Perkara Makruh Semasa Sembelihan</h3>
      <ul>
        <li>Menggunakan pisau yang tumpul atau bergerigi.</li>
        <li>Menyembelih di hadapan binatang sembelihan yang lain.</li>
        <li>Menajamkan pisau di hadapan pandangan mata binatang.</li>
        <li>Menyeksa binatang seperti mematahkan leher, mengheret kaki, atau melapah kulit sebelum binatang itu benar-benar mati.</li>
        <li>Menyembelih pada waktu malam tanpa keperluan mendesak.</li>
      </ul>

      <h3>Hikmah Pensyariatan Sembelihan</h3>
      <ol>
        <li>Membezakan antara daging yang halal dengan bangkai yang haram dan bernajis.</li>
        <li>Menghindarkan tubuh daripada kuman, bakteria, dan toksin berbahaya kerana darah haiwan dialirkan keluar dengan sempurna.</li>
        <li>Menunjukkan sifat ihsan dan kasih sayang kerana mematikan haiwan dengan pantas tanpa penderitaan lama.</li>
      </ol>
    `
  },
  {
    id: "pelajaran-15",
    number: 15,
    field: "fikah",
    fieldLabel: "Bidang Fikah",
    title: "Pelajaran 15: Korban dan Akikah",
    subtopics: [
      {
        id: "unit-1-korban",
        badge: "UNIT 1",
        title: "Unit 1: Ibadah Korban (Udhiyyah)",
        contentHtml: `
          <h3>1. Maksud, Hukum & Dalil Korban</h3>
          <ul>
            <li><b>Maksud:</b> Menyembelih binatang ternakan (al-An'am) pada <b>Hari Raya Aidiladha (10 Zulhijjah)</b> atau pada <b>Hari-Hari Tasyriq (11, 12, dan 13 Zulhijjah)</b> dengan tujuan beribadah mendekatkan diri (taqarrub) kepada Allah SWT.</li>
            <li><b>Hukum:</b> <b>Sunat Muakkad</b> (sunat yang sangat dituntut) bagi yang mampu; menjadi <b>Wajib</b> jika bernazar.</li>
            <li><b>Dalil Naqli:</b> <span class="arabic-text">فَصَلِّ لِرَبِّكَ وَٱنْحَرْ</span> ("Maka dirikanlah solat kerana Tuhanmu dan berkorbanlah!" - Surah al-Kautsar: 2). Pensyariatan korban berlaku pada tahun <b>ke-2 Hijrah</b>.</li>
          </ul>

          <h3>2. Syarat Sah Binatang Korban</h3>
          <ol>
            <li><b>Jenis Binatang:</b> Binatang ternakan al-An'am sahaja iaitu <b>unta, lembu, kerbau, kambing, dan biri-biri</b>.</li>
            <li><b>Cukup Umur:</b><br>
            • Unta: 5 tahun masuk tahun ke-6.<br>
            • Lembu / Kerbau: 2 tahun masuk tahun ke-3.<br>
            • Kambing: 2 tahun masuk tahun ke-3.<br>
            • Biri-biri: 1 tahun masuk tahun ke-2 (atau telah gugur gigi kapak selepas umur 6 bulan).</li>
            <li><b>Bebas daripada Kecacatan:</b> Tidak buta, tidak tempang ketara, tidak berpenyakit teruk, dan tidak terlalu kurus kering.</li>
            <li><b>Masa Sembelihan:</b> Bermula selepas solat Aidiladha dan dua khutbah (10 Zulhijjah) sehingga terbenam matahari akhir hari Tasyriq (13 Zulhijjah).</li>
          </ol>

          <h3>3. Pembahagian Daging Korban Sunat</h3>
          <p>Kadar agihan yang paling afdhal bagi korban sunat ialah dibahagikan kepada 3 bahagian:</p>
          <ul>
            <li><b>1/3 Bahagian:</b> Dimakan oleh orang yang berkorban dan ahli keluarganya.</li>
            <li><b>1/3 Bahagian:</b> Disedekahkan kepada golongan <b>fakir dan miskin</b> (wajib ada bahagian untuk fakir miskin dalam bentuk daging mentah).</li>
            <li><b>1/3 Bahagian:</b> Dihadiahkan kepada orang ramai termasuk jiran tetangga dan sahabat handai walaupun berkemampuan/kaya.</li>
          </ul>
          <p class="quote"><b>Peringatan Hukum:</b> Bagi <b>korban nazar (wajib)</b>, SEMUA daging korban wajib disedekahkan kepada fakir miskin. Pihak yang bernazar dan tanggungannya HARAM memakan walau sedikitpun daging tersebut. Diharamkan juga menjual sebarang bahagian korban (kulit, tulang, daging, tanduk).</p>
        `
      },
      {
        id: "unit-2-akikah",
        badge: "UNIT 2",
        title: "Unit 2: Ibadah Akikah",
        contentHtml: `
          <h3>1. Maksud, Hukum & Dalil Akikah</h3>
          <ul>
            <li><b>Maksud:</b> Menyembelih binatang ternakan (al-An'am) sempena <b>kelahiran bayi</b> sebagai tanda kesyukuran kepada Allah SWT.</li>
            <li><b>Hukum:</b> <b>Sunat Muakkad</b>; wajib jika bernazar.</li>
            <li><b>Dalil Naqli:</b> Sabda Nabi SAW: <span class="arabic-text">الْغُلَامُ مُرْتَهَنٌ بِعَقِيقَتِهِ تُذْبَحُ عَنْهُ يَوْمَ السَّابِعِ وَيُسَمَّى وَيُحْلَقُ رَأْسُهُ</span> ("Bayi itu tergadai dengan akikahnya; disembelih untuknya pada hari ketujuh kelahirannya, diberikan nama, dan dicukur rambut kepalanya" - Riwayat at-Tirmidzi).</li>
          </ul>

          <h3>2. Kadar & Syarat Binatang Akikah</h3>
          <ul>
            <li><b>Kadar Afdhal:</b> <b>2 ekor kambing</b> bagi anak lelaki, dan <b>1 ekor kambing</b> bagi anak perempuan. Namun memadai 1 ekor kambing bagi anak lelaki.</li>
            <li>Syarat binatang akikah dari segi umur, kesihatan dan sifat adalah sama seperti syarat binatang korban.</li>
          </ul>

          <h3>3. Amalan Sunat Akikah</h3>
          <ol>
            <li>Dilakukan pada <b>hari ke-7 kelahiran bayi</b> (jika terlepas, pada hari ke-14, ke-21 atau bila-bila masa sebelum baligh).</li>
            <li>Daging akikah <b>sunat dimasak manis</b> sebelum disedekahkan sebagai doa agar anak berakhlak manis dan disenangi.</li>
            <li>Mencukur rambut bayi selepas sembelihan dan bersedekah perak atau emas seberat timbangan rambut tersebut kepada fakir miskin.</li>
            <li>Memberikan nama yang baik dan mentahnikkan bayi dengan buah kurma.</li>
            <li>Sunat tidak mematah-matahkan tulang binatang akikah, sebaliknya memotong mengikut sendi-sendinya.</li>
          </ol>

          <h3>4. Hikmah Korban dan Akikah</h3>
          <ul>
            <li>Menghayati pengorbanan suci Nabi Ibrahim AS dan Nabi Ismail AS.</li>
            <li>Menzahirkan kesyukuran atas nikmat cahaya mata kurniaan Allah SWT.</li>
            <li>Mengeratkan silaturrahim dalam masyarakat melalui kenduri dan pengagihan daging.</li>
            <li>Membantu golongan fakir dan miskin menikmati makanan berzat.</li>
          </ul>
        `
      }
    ]
  },
  {
    id: "pelajaran-16",
    number: 16,
    field: "fikah",
    fieldLabel: "Bidang Fikah",
    title: "Pelajaran 16: Muamalat Islam",
    subtopics: [
      {
        id: "unit-1-konsep-muamalat",
        badge: "UNIT 1",
        title: "Unit 1: Konsep Muamalat Islam",
        contentHtml: `
          <h3>1. Maksud, Hukum & Dalil Muamalat Islam</h3>
          <ul>
            <li><b>Maksud:</b> Hukum dan tatacara syarak yang berkaitan dengan urusan pengurusan kewangan, pemilikan harta, perniagaan, pertukaran barang, dan perkhidmatan sesama manusia.</li>
            <li><b>Hukum:</b> <b>Harus</b> pada asalnya selagi tidak mengandungi perkara yang dilarang syarak.</li>
            <li><b>Dalil Naqli:</b> <span class="arabic-text">وَأَحَلَّ ٱللَّهُ ٱلْبَيْعَ وَحَرَّمَ ٱلرِّبَوٰا۟</span> ("Allah telah menghalalkan jual beli dan mengharamkan riba" - Surah al-Baqarah: 275).</li>
          </ul>

          <h3>2. Matlamat Pensyariatan Muamalat Islam</h3>
          <ol>
            <li>Menunjukkan keadilan syariat Allah dalam mengatur sistem ekonomi manusia.</li>
            <li>Mengiktiraf pemilikan harta secara sah dan telus.</li>
            <li>Memelihara hak dan kebajikan pihak penjual, pembeli, peminjam, dan pelabur.</li>
            <li>Mencegah penindasan, penipuan, monopoli, dan perebutan harta secara batil.</li>
          </ol>

          <h3>3. 4 Unsur yang Diharamkan dalam Muamalat Islam</h3>
          <div class="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Unsur Diharamkan</th>
                  <th>Maksud & Huraian</th>
                  <th>Contoh Situasi</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><b>1. Riba (الربا)</b></td>
                  <td>Pertambahan nilai bayaran tanpa akad pertukaran yang setara dalam pinjaman atau pertukaran barang ribawi.</td>
                  <td>Pinjam RM1,000 tetapi disyaratkan wajib bayar balik RM1,200.</td>
                </tr>
                <tr>
                  <td><b>2. Gharar (الغرر)</b></td>
                  <td>Ketidakpastian atau kesamaran yang nyata dalam akad mengenai kualiti, kuantiti, harga, atau keupayaan menyerahkan barang.</td>
                  <td>Menjual ikan yang masih bebas di laut atau burung liar yang sedang terbang di udara.</td>
                </tr>
                <tr>
                  <td><b>3. Judi / Maisir (الميسر)</b></td>
                  <td>Sebarang pertaruhan yang melibatkan keuntungan satu pihak atas kerugian pihak lain yang bergantung kepada nasib semata-mata.</td>
                  <td>Tiket loteri atau pertaruhan wang dalam perlumbaan sukan.</td>
                </tr>
                <tr>
                  <td><b>4. Dharar (الضرر)</b></td>
                  <td>Sebarang transaksi atau aktiviti perniagaan yang membawa mudarat dan kerosakan kepada diri, orang lain, atau alam sekitar.</td>
                  <td>Menjual barang tiruan yang membahayakan nyawa, dadah, racun berjadual, atau senjata kepada penjenayah.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3>4. Rukun dan Syarat Akad Muamalat</h3>
          <p><b>Akad</b> ialah ikatan antara ijab (penawaran) dan kabul (penerimaan) dalam urusan kewangan. Rukun akad ada 3:</p>
          <ul>
            <li><b>1. Pihak yang berakad (Penjual & Pembeli):</b> Syaratnya berakal, baligh, mukalaf, dan reda (sukarela tanpa paksaan).</li>
            <li><b>2. Perkara yang diakadkan (Harga & Barang):</b> Syaratnya suci, bermanfaat, wujud, milik sah, dan mampu diserahkan.</li>
            <li><b>3. Sighah (Ijab & Kabul):</b> Syaratnya lafaz ijab dan kabul adalah selaras, bersambung dalam satu majlis akad, dan tidak digantung pada syarat yang membatalkan.</li>
          </ul>
        `
      },
      {
        id: "unit-2-jenis-akad",
        badge: "UNIT 2",
        title: "Unit 2: Jenis Akad dalam Muamalat Islam",
        contentHtml: `
          <h3>5 Kategori Utama Akad Muamalat Islam</h3>
          <div class="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Kategori</th>
                  <th>Nama Akad</th>
                  <th>Maksud & Definisi Ringkas</th>
                  <th>Contoh Pelaksanaan</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td rowspan="2"><b>1. Pertukaran (Mu'awadhat)</b></td>
                  <td><b>Jual Beli (Al-Bai')</b></td>
                  <td>Akad pertukaran harta dengan harta atas persetujuan kedua-dua pihak.</td>
                  <td>Membeli buku di kedai dengan membayar wang tunai.</td>
                </tr>
                <tr>
                  <td><b>Sewaan (Ijarah)</b></td>
                  <td>Akad memindahkan manfaat sesuatu aset atau tenaga kerja dengan bayaran upah tertentu.</td>
                  <td>Menyewa rumah kediaman atau mengupah pekerja membaiki kereta.</td>
                </tr>
                <tr>
                  <td rowspan="4"><b>2. Kebajikan (Tabarru'at)</b></td>
                  <td><b>Hibah</b></td>
                  <td>Pemberian pemilikan harta secara percuma dan sukarela ketika pemilik masih hidup.</td>
                  <td>Ibu bapa menghibahkan sebuah rumah kepada anak.</td>
                </tr>
                <tr>
                  <td><b>Qardh (Pinjaman)</b></td>
                  <td>Memberikan pinjaman wang kepada orang yang memerlukan tanpa sebarang faedah/bunga.</td>
                  <td>Meminjamkan RM500 kepada rakan dan dibayar semula RM500.</td>
                </tr>
                <tr>
                  <td><b>Waqaf</b></td>
                  <td>Menahan harta yang kekal fizikalnya untuk dimanfaatkan faedahnya bagi tujuan kebajikan Islam.</td>
                  <td>Mewakafkan tanah untuk tapak masjid atau kubur.</td>
                </tr>
                <tr>
                  <td><b>Wadi'ah (Simpanan)</b></td>
                  <td>Menyerahkan sesuatu harta kepada pihak lain untuk disimpan dan dipelihara keselamatannya.</td>
                  <td>Simpanan wang di akaun simpanan bank.</td>
                </tr>
                <tr>
                  <td rowspan="2"><b>3. Perkongsian (Syirkah)</b></td>
                  <td><b>Musyarakah</b></td>
                  <td>Akad perkongsian modal antara dua pihak atau lebih bagi satu perniagaan; untung rugi dikongsi bersama.</td>
                  <td>Dua orang rakan kongsi menyumbang modal sama rata membuka restoran.</td>
                </tr>
                <tr>
                  <td><b>Mudharabah</b></td>
                  <td>Akad perkongsian antara pemodal (rabbul mal) yang menyediakan modal penuh dengan pengusaha (mudarib).</td>
                  <td>Bank memberi modal RM50,000 kepada usahawan; untung dibahagi 60:40 mengikut persetujuan.</td>
                </tr>
                <tr>
                  <td><b>4. Perwakilan</b></td>
                  <td><b>Wakalah</b></td>
                  <td>Menyerahkan sesuatu tugas atau urusan yang boleh dikerjakan kepada orang lain untuk mewakilinya.</td>
                  <td>Mewakilkan peguam menguruskan jual beli hartanah.</td>
                </tr>
                <tr>
                  <td rowspan="2"><b>5. Jaminan (Tawthiqat)</b></td>
                  <td><b>Kafalah</b></td>
                  <td>Jaminan yang diberikan oleh penjamin untuk menanggung liabiliti atau kehadiran pihak dijamin.</td>
                  <td>Menjadi penjamin kepada pembiayaan pendidikan pelajar.</td>
                </tr>
                <tr>
                  <td><b>Rahn (Gadaian)</b></td>
                  <td>Menjadikan sesuatu barang berharga sebagai cagaran sandaran terhadap sesuatu hutang.</td>
                  <td>Mencagarkan rantai emas di institusi Ar-Rahnu bagi mendapatkan pinjaman tunai.</td>
                </tr>
              </tbody>
            </table>
          </div>
        `
      }
    ]
  },
  {
    id: "pelajaran-17",
    number: 17,
    field: "fikah",
    fieldLabel: "Bidang Fikah",
    title: "Pelajaran 17: Solat Sunat Dhuha dan Solat Sunat Gerhana",
    subtopics: [
      {
        id: "unit-1-solat-dhuha",
        badge: "UNIT 1",
        title: "Unit 1: Solat Sunat Dhuha",
        contentHtml: `
          <h3>1. Maksud, Hukum & Waktu Solat Dhuha</h3>
          <ul>
            <li><b>Maksud:</b> Solat sunat yang ditunaikan pada waktu pagi selepas matahari terbit tinggi sehingga sebelum gelincir matahari (sebelum masuk waktu Zohor).</li>
            <li><b>Hukum:</b> <b>Sunat Muakkad</b> (sangat dituntut).</li>
            <li><b>Waktu:</b> Bermula <b>kira-kira 28 minit selepas waktu syuruq</b> (terbit matahari) dan berakhir sebelum azan solat fardu Zohor.</li>
            <li><b>Dalil Naqli:</b> Sabda Nabi SAW daripada Abu Hurairah RA: "Kekasihku (Rasulullah SAW) berpesan kepadaku tiga perkara yang tidak pernah aku tinggalkan: berpuasa tiga hari setiap bulan, menunaikan dua rakaat solat Dhuha, dan solat Witir sebelum tidur." (Riwayat al-Bukhari & Muslim).</li>
          </ul>

          <h3>2. Kaifiat Solat Sunat Dhuha</h3>
          <ul>
            <li><b>Niat:</b> <span class="arabic-text">أُصَلِّي سُنَّةَ الضُّحَى رَكْعَتَيْنِ لِلَّهِ تَعَالَى</span> ("Sahaja aku solat sunat Dhuha dua rakaat kerana Allah Taala").</li>
            <li><b>Bilangan Rakaat:</b> 2, 4, 6, atau 8 rakaat (dilakukan secara 2 rakaat 1 salam).</li>
            <li><b>Cara Solat:</b> Dilakukan secara bersendirian (munfarid).</li>
            <li><b>Bacaan Surah:</b> Rakaat pertama Surah as-Syams / al-Kafirun; rakaat kedua Surah ad-Dhuha / al-Ikhlas.</li>
          </ul>

          <h3>3. Hikmah Solat Sunat Dhuha</h3>
          <ol>
            <li>Mendapat keampunan dosa dan keredaan Allah SWT.</li>
            <li>Memurahkan rezeki zahir dan batin serta memberkati urusan harian.</li>
            <li>Sebagai tanda menunaikan sedekah bagi setiap 360 sendi tulang tubuh manusia.</li>
          </ol>
        `
      },
      {
        id: "unit-2-solat-gerhana",
        badge: "UNIT 2",
        title: "Unit 2: Solat Sunat Gerhana (Kusuf & Khusuf)",
        contentHtml: `
          <h3>1. Maksud, Hukum & Tarikh Pensyariatan</h3>
          <ul>
            <li><b>Maksud:</b> Solat sunat yang ditunaikan apabila berlaku <b>gerhana matahari (Kusuf - كسوف)</b> atau <b>gerhana bulan (Khusuf - خسوف)</b> dengan tatacara yang khusus.</li>
            <li><b>Hukum:</b> <b>Sunat Muakkad</b> (disunatkan secara berjemaah).</li>
            <li><b>Tarikh Pensyariatan:</b> Solat gerhana matahari disyariatkan pada <b>tahun ke-2 Hijrah</b>, manakala gerhana bulan disyariatkan pada <b>tahun ke-5 Hijrah</b>.</li>
            <li><b>Dalil Naqli:</b> Sabda Nabi SAW: <span class="arabic-text">إِنَّ الشَّمْسَ وَالْقَمَرَ آيَتَانِ مِنْ آيَاتِ اللَّهِ لَا يَنْكَسِفَانِ لِمَوْتِ أَحَدٍ وَلَا لِحَيَاتِهِ، فَإِذَا رَأَيْتُمُوهُمَا فَادْعُوا اللَّهَ وَصَلُّوا حَتَّى تَنْكَشِفَ</span> ("Matahari dan bulan adalah dua tanda daripada tanda kebesaran Allah; gerhana tidak berlaku kerana mati atau hidupnya seseorang. Maka apabila kamu melihatnya, berdoalah kepada Allah dan dirikanlah solat sehingga gerhana berakhir" - Riwayat Muslim).</li>
          </ul>

          <h3>2. Amalan Sunat Semasa Gerhana</h3>
          <ol>
            <li>Menunaikan solat sunat gerhana secara berjemaah di masjid.</li>
            <li>Mendengar dua khutbah khas selepas solat.</li>
            <li>Memperbanyakkan istighfar, doa, takbir, dan zikir.</li>
            <li>Memperbanyakkan sedekah kepada golongan fakir miskin.</li>
          </ol>

          <h3>3. Ciri Keistimewaan Kaifiat Solat Gerhana (2 Ruku' Setiap Rakaat)</h3>
          <p>Keistimewaan solat gerhana berbanding solat sunat biasa ialah mempunyai <b>2 kali berdiri (qiam) dan 2 kali ruku' dalam SETIAP rakaat</b> (menjadikan jumlahnya 2 rakaat, 4 kali ruku' dan 4 kali sujud):</p>
          <ul>
            <li><b>Rakaat 1:</b> Niat & Takbiratul Ihram → Baca al-Fatihah & Surah panjang → <b>Ruku' Pertama</b> (panjang) → I'tidal Pertama → <b>Baca al-Fatihah & Surah kedua</b> → <b>Ruku' Kedua</b> → I'tidal Kedua → Dua sujud seperti biasa.</li>
            <li><b>Rakaat 2:</b> Bangkit rakaat 2 → Baca al-Fatihah & Surah → <b>Ruku' Pertama</b> → I'tidal → <b>Baca al-Fatihah & Surah</b> → <b>Ruku' Kedua</b> → I'tidal → Dua sujud → Tahiyyat Akhir & Salam.</li>
            <li><b>Khutbah:</b> Sunat dibacakan 2 khutbah selepas solat mengandungi nasihat taubat dan peringatan kiamat.</li>
          </ul>

          <h3>4. Hikmah Solat Gerhana</h3>
          <ol>
            <li>Menginsafi keagungan dan kekuasaan mutlak Allah SWT yang mentadbir cakerawala alam.</li>
            <li>Menghapuskan kepercayaan khurafat dan mitos kuno mengenai fenomena gerhana.</li>
            <li>Memohon keampunan kepada Allah SWT daripada bala dan bencana kemurkaan-Nya.</li>
          </ol>
        `
      }
    ]
  },

  // ==========================================
  // 5. BIDANG SIRAH DAN TAMADUN ISLAM
  // ==========================================
  {
    id: "pelajaran-18",
    number: 18,
    field: "sirah",
    fieldLabel: "Bidang Sirah & Tamadun Islam",
    title: "Pelajaran 18: Kerajaan Khulafa' al-Rashidin",
    directContentHtml: `
      <h3>Pengenalan Era Khulafa' al-Rashidin</h3>
      <ul>
        <li><b>Tempoh Pemerintahan:</b> Berlangsung selama 29 tahun bermula dari <b>11 Hijrah hingga 40 Hijrah (632M – 661M)</b>.</li>
        <li><b>Pusat Pemerintahan:</b> Kota Madinah al-Munawwarah.</li>
        <li><b>Empat Khalifah:</b> Saidina Abu Bakar al-Siddiq RA, Saidina Umar bin al-Khattab RA, Saidina Uthman bin Affan RA, dan Saidina Ali bin Abi Talib RA.</li>
      </ul>

      <h3>Ciri Kepimpinan & Sumbangan 4 Khalifah</h3>
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Khalifah & Tempoh</th>
              <th>Ciri Kepimpinan Unggul</th>
              <th>Sumbangan Utama Semasa Memerintah</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><b>1. Saidina Abu Bakar al-Siddiq RA</b><br>(11H–13H / 2 tahun 3 bulan)</td>
              <td><b>Tegas & Berpandangan Jauh:</b> Bertegas memerangi golongan murtad, nabi palsu (Musailamah al-Kazzab), dan puak yang enggan membayar zakat dalam Perang Riddah; setia meneruskan arahan Rasulullah menghantar tentera Usamah bin Zaid ke Syam.</td>
              <td>Mengarahkan Zaid bin Thabit mengetuai usaha <b>menghimpunkan tulisan ayat-ayat al-Quran</b> yang bertaburan pada tulang, batu, dan pelepah kurma kerana ramai penghafaz Quran gugur syahid dalam Perang Yamamah.</td>
            </tr>
            <tr>
              <td><b>2. Saidina Umar bin al-Khattab RA</b><br>(13H–23H / 10 tahun 6 bulan)</td>
              <td><b>Adil, Cekap & Inovatif:</b> Mengasaskan sistem pentadbiran moden; meninjau sendiri rakyat pada waktu malam; berfikiran terbuka menerima teguran rakyat; tegas membanteras rasuah gabenor.</td>
              <td>1. Menubuhkan <b>Majlis Syura</b> dan jabatan-jabatan pentadbiran (<b>Diwan</b>: Diwan al-Jund, Jabatan Cukai, Baitulmal).<br>2. Mengisytiharkan <b>Takwim Hijrah</b> sebagai kalendar rasmi Islam.<br>3. Membebaskan Baitulmaqdis, Iraq, Parsi, dan Mesir.</td>
            </tr>
            <tr>
              <td><b>3. Saidina Uthman bin Affan RA</b><br>(23H–35H / 12 tahun)</td>
              <td><b>Dermawan, Lemah Lembut & Berpandangan Jauh:</b> Sering mendermakan harta kekayaan peribadi untuk membeli perigi Raumah dan membiayai kelengkapan perang Tabuk; sangat pemalu dan warak.</td>
              <td>1. Menyelaraskan pembukuan dan penulisan al-Quran mengikut dialek Quraisy yang dikenali sebagai <b>Mushaf Uthmani</b>.<br>2. Menubuhkan <b>angkatan tentera laut Islam yang pertama</b> bagi menangkis ancaman Rom Byzantine.<br>3. Memperbesarkan Masjid Nabawi.</td>
            </tr>
            <tr>
              <td><b>4. Saidina Ali bin Abi Talib RA</b><br>(35H–40H / 5 tahun)</td>
              <td><b>Berani, Berilmu Tinggi & Tegas:</b> Jaguh handal di medan perang sejak Perang Badr dan Khaibar; hakim yang amat bijaksana di Yaman; sanggup mengambil alih tampuk pimpinan ketika krisis fitnah memuncak.</td>
              <td>1. Menangguhkan pelaksanaan qisas pembunuh Khalifah Uthman demi meredakan huru-hara kestabilan negara.<br>2. Menukar gabenor-gabenor yang menimbulkan kontroversi bagi memulihkan keharmonian rakyat.<br>3. Membina sistem kubu dan pos kawalan keselamatan.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>Pencapaian Kerajaan Khulafa' al-Rashidin</h3>
      <ul>
        <li><b>Agama:</b> Membasmi golongan nabi palsu dan murtad; menyatukan bacaan al-Quran dalam Mushaf Uthmani; dakwah tersebar luas ke Parsi, Syam, dan Afrika.</li>
        <li><b>Politik:</b> Mengamalkan sistem Syura yang telus; membahagikan negara kepada wilayah pentadbiran di bawah gabenor yang berwibawa.</li>
        <li><b>Ekonomi:</b> Menguruskan perbendaharaan Baitulmal secara sistematik; memperkenalkan sistem cukai kharaj dan jizyah; membina empangan dan terusan air.</li>
        <li><b>Sosial:</b> Menjaga kebajikan rakyat dan orang bukan Islam (Zimmi); membina kemudahan awam dan rumah transit.</li>
      </ul>

      <h3>Iktibar Pemerintahan</h3>
      <ol>
        <li>Pemimpin hendaklah mengutamakan syariat Allah, kebajikan rakyat, dan perpaduan ummah melebihi kepentingan diri.</li>
        <li>Musyawarah (syura) adalah teras kejayaan pentadbiran organisasi dan negara.</li>
        <li>Kita wajib menghargai jasa para sahabat dalam memelihara kesucian al-Quran.</li>
      </ol>
    `
  },
  {
    id: "pelajaran-19",
    number: 19,
    field: "sirah",
    fieldLabel: "Bidang Sirah & Tamadun Islam",
    title: "Pelajaran 19: Kerajaan Umayyah",
    directContentHtml: `
      <h3>Sejarah & Latar Belakang Kerajaan Umayyah</h3>
      <ul>
        <li><b>Asal Nama:</b> Bersempena nama Umayyah bin Abd Shams bin Abd Manaf, iaitu moyang kepada Bani Umayyah daripada kabilah Quraisy.</li>
        <li><b>Pengasas:</b> <b>Muawiyah bin Abi Sufyan RA</b> pada tahun 41 Hijrah (dikenali sebagai 'Am al-Jama'ah / Tahun Penyatuan).</li>
        <li><b>Tempoh Pemerintahan:</b> Berlangsung selama 91 tahun bermula <b>41H hingga 132H (661M – 750M)</b> menerusi 14 orang khalifah.</li>
        <li><b>Pusat Pemerintahan:</b> <b>Damsyik, Syria</b>.</li>
        <li><b>Dua Tahap Pemerintahan:</b><br>
        • <i>Tahap Pertama:</i> Berpusat di <b>Damsyik</b> (41H–132H) di bawah 14 khalifah (khalifah pertama Muawiyah, khalifah terakhir Marwan bin Muhammad).<br>
        • <i>Tahap Kedua:</i> Berpusat di <b>Cordoba, Sepanyol (Andalus)</b> (138H–422H) diasaskan oleh Abd al-Rahman al-Dakhil.</li>
      </ul>

      <h3>4 Khalifah Terkenal Kerajaan Umayyah & Sumbangan</h3>
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Khalifah</th>
              <th>Tempoh & Gelaran</th>
              <th>Sumbangan Utama</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><b>1. Muawiyah bin Abi Sufyan</b></td>
              <td>Khalifah Pertama<br>(41H–60H / 19 tahun)</td>
              <td>1. Menjadikan Damsyik sebagai pusat pentadbiran yang maju.<br>2. Menubuhkan <b>Diwan al-Barid</b> (perkhidmatan pos berkuda).<br>3. Menubuhkan <b>Diwan al-Khatam</b> (cap mohor rasmi surat kerajaan) dan Diwan al-Rasa'il.<br>4. Memperkasakan armada tentera laut Islam.</td>
            </tr>
            <tr>
              <td><b>2. Abd al-Malik bin Marwan</b></td>
              <td>Khalifah Kelima<br>(65H–86H / 21 tahun)</td>
              <td>1. Menetapkan <b>bahasa Arab sebagai bahasa rasmi</b> pentadbiran kerajaan.<br>2. Mengeluarkan <b>mata wang dinar Islam pertama</b> bertulisan khat Arab.<br>3. Membina monumen agung <b>Kubbah al-Sakhrah (Dome of the Rock)</b> di Baitulmaqdis.<br>4. Menaik taraf perkhidmatan pos dan Diwan al-Jund.</td>
            </tr>
            <tr>
              <td><b>3. Al-Walid bin Abd al-Malik</b></td>
              <td>Khalifah Keenam<br>(86H–96H / 10 tahun)</td>
              <td>1. Meluaskan wilayah Islam hingga menakluki <b>Andalus (Sepanyol)</b> dan wilayah barat India (Sindh).<br>2. Membina <b>Masjid Umayyah di Damsyik</b> dan memperelok seni bina Masjid Nabawi.<br>3. Menubuhkan jabatan khas menjaga kebajikan pesakit kusta, orang buta, dan warga tua.<br>4. Membina jaringan jalan raya berturap ke Hijaz untuk jemaah haji.</td>
            </tr>
            <tr>
              <td><b>4. Umar bin Abd al-Aziz</b></td>
              <td>Khalifah Kelapan<br>(99H–101H / 2 tahun 5 bulan)</td>
              <td>1. Memerintahkan pembukuan hadis rasmi oleh <b>Ibn Shihab al-Zuhri</b>.<br>2. Memansuhkan bayaran cukai Jizyah ke atas orang bukan Islam yang memeluk Islam (Mawali).<br>3. Mengamalkan corak kepimpinan amat adil, zuhud, dan menolak kemewahan peribadi.<br>4. Menubuhkan dewan penasihat ulama dan rumah transit bagi pedagang musafir.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>Faktor Kegemilangan & Kemerosotan Kerajaan Umayyah</h3>
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Faktor Kegemilangan</th>
              <th>Faktor Kemerosotan</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                • <b>Agama:</b> Penyebaran dakwah pesat, pembukuan hadis, dan pengimmarahan masjid.<br>
                • <b>Politik:</b> Kedudukan Damsyik yang strategik dan kecekapan para gabenor.<br>
                • <b>Ekonomi:</b> Hasil Baitulmal melimpah ruah melalui sektor pertanian dan perdagangan antarabangsa.<br>
                • <b>Sosial:</b> Penyediaan hospital, kebajikan OKU, dan jambatan awam.<br>
                • <b>Ketenteraan:</b> Pasukan tentera berdisiplin tinggi dan armada laut moden.<br>
                • <b>Pendidikan:</b> Masjid dan istana menjadi pusat pengajian ilmu naqli (al-Quran, hadis, nahu).
              </td>
              <td>
                • <b>Perebutan Kuasa:</b> Sistem perwarisan monarki mencetuskan perebutan takhta sesama putera raja.<br>
                • <b>Sentimen Perkauman:</b> Kebangkitan taasub kabilah antara Arab Utara (Qaisi) dan Arab Selatan (Yamani).<br>
                • <b>Diskriminasi Golongan Mawali:</b> Sikap sebahagian khalifah meminggirkan orang bukan Arab memeluk Islam dalam jawatan pentadbiran.<br>
                • <b>Pemberontakan:</b> Serangan bertalu-talu daripada puak Syiah dan Khawarij serta gerakan sulit Abbasiyah.<br>
                • <b>Gaya Hidup Mewah:</b> Sebahagian khalifah akhir hidup berpoya-poya dan boros.
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>Iktibar Pemerintahan</h3>
      <ol>
        <li>Mencontohi ketokohan para khalifah yang soleh seperti Umar bin Abd al-Aziz yang mementingkan kebajikan rakyat.</li>
        <li>Menjaga perpaduan dan mengelakkan sengketa perkauman yang boleh meruntuhkan negara.</li>
        <li>Menghindari pembaziran dan gaya hidup mewah yang merosakkan akhlak pemimpin.</li>
      </ol>
    `
  },
  {
    id: "pelajaran-20",
    number: 20,
    field: "sirah",
    fieldLabel: "Bidang Sirah & Tamadun Islam",
    title: "Pelajaran 20: Kerajaan Abbasiyah",
    directContentHtml: `
      <h3>Sejarah & Latar Belakang Kerajaan Abbasiyah</h3>
      <ul>
        <li><b>Asal Usul Nama:</b> Diambil bersempena nama bapa saudara Rasulullah SAW iaitu <b>al-Abbas bin Abdul Muthalib RA</b>.</li>
        <li><b>Pengasas:</b> <b>Abu al-Abbas as-Saffah</b> pada tahun 132 Hijrah (750 Masihi).</li>
        <li><b>Pusat Pentadbiran:</b> <b>Baghdad, Iraq</b> (dibangunkan oleh Khalifah Abu Jaafar al-Mansur).</li>
        <li><b>Tempoh Pemerintahan:</b> Berlangsung selama <b>524 tahun (132H–656H / 750M–1258M)</b> dan diperintah oleh 37 orang khalifah.</li>
        <li><b>Khalifah Terakhir:</b> <b>Abu Ismail Muhammad al-Mu'tasim Billah</b>.</li>
      </ul>

      <h3>4 Khalifah Unggul Kerajaan Abbasiyah & Sumbangannya</h3>
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Khalifah</th>
              <th>Sumbangan Utama dalam Tamadun Islam</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><b>1. Abu al-Abbas as-Saffah</b><br>(132H–136H)</td>
              <td>• Mengasaskan sistem pentadbiran Kerajaan Abbasiyah.<br>• Menghapuskan saki-baki penentangan Umayyah dan memulihkan keamanan dalam negara.</td>
            </tr>
            <tr>
              <td><b>2. Abu Jaafar al-Mansur</b><br>(136H–158H)</td>
              <td>• Memindahkan dan membina <b>kota Baghdad</b> sebagai ibu kota metropolitan berbentuk bulat yang terkenal.<br>• Membangunkan institusi masjid, hospital awam (Bimaristan), terusan pengairan, dan jaringan perdagangan dunia.</td>
            </tr>
            <tr>
              <td><b>3. Harun al-Rasyid</b><br>(170H–193H)</td>
              <td>• Mengasaskan pusat penterjemahan dan gedung ilmu terhebat dunia iaitu <b>Baitul Hikmah</b>.<br>• Memperkemaskan undang-undang percukaian tanah melalui kitab <i>Al-Kharaj</i> oleh Qadhi Abu Yusuf.<br>• Mewujudkan jawatan Ketua Hakim Negara (<i>Qadhi al-Qudhat</i>).</td>
            </tr>
            <tr>
              <td><b>4. Abu al-Abbas al-Makmun</b><br>(198H–218H)</td>
              <td>• Memperhebat gerakan penterjemahan karya falsafah, sains, astronomi, dan perubatan asing di Baitul Hikmah.<br>• Membina <b>balai cerap astronomi</b> di Baghdad dan Damsyik.<br>• Menyediakan biasiswa pengajian tinggi kepada para cendiakawan.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>Faktor Kegemilangan & Kemerosotan Kerajaan Abbasiyah</h3>
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Faktor Kegemilangan</th>
              <th>Faktor Kemerosotan</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                • <b>Kestabilan Politik:</b> Baghdad menjadi kubu perpaduan pelbagai bangsa (Arab, Parsi, Turki).<br>
                • <b>Kegemilangan Ilmu:</b> Baitul Hikmah menjana penterjemahan dan penyelidikan sains terkemuka.<br>
                • <b>Ekonomi Hebat:</b> Baghdad menjadi laluan persimpangan perdagangan maritim dan darat Timur-Barat (Laluan Sutera).<br>
                • <b>Keterbukaan Sosial:</b> Layanan adil tanpa diskriminasi kepada golongan bukan Arab (Mawali).
              </td>
              <td>
                • <b>Perebutan Kuasa:</b> Perbalahan sesama keluarga khalifah dan pengaruh pegawai pengawal Turki/Parsi.<br>
                • <b>Pemisahan Wilayah:</b> Banyak wilayah luar melepaskan diri menjadi kerajaan kecil merdeka.<br>
                • <b>Kelemahan Pertahanan:</b> Angkatan tentera tidak lagi bersemangat jihad tulen dan bergantung kepada tentera upahan.<br>
                • <b>Kemelesetan Ekonomi:</b> Rusuhan dan perang saudara melumpuhkan laluan perdagangan.
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>Kejatuhan Kerajaan Abbasiyah (Tahun 1258M / 656H)</h3>
      <p>Kerajaan Abbasiyah berakhir secara tragis apabila <b>tentera Mongol pimpinan Hulagu Khan menyerang, menjarah, dan memusnahkan kota Baghdad pada tahun 1258 Masihi (656 Hijrah)</b>. Berjuta-juta naskhah kitab ilmu di Baitul Hikmah telah dibakar dan dicampakkan ke Sungai Furat dan Dajlah sehingga air sungai menjadi hitam legam akibat dakwat.</p>

      <h3>Iktibar Pemerintahan</h3>
      <ol>
        <li>Kejayaan sesebuah tamadun dibina atas asas kecintaan terhadap ilmu pengetahuan dan penyelidikan saintifik.</li>
        <li>Perebutan takhta dan pengabaian pertahanan membawa kepada kehancuran negara di tangan kuasa luar.</li>
        <li>Pemimpin wajib menjaga kesucian akidah dan tidak membiarkan campur tangan anasir asing dalam kepimpinan negara.</li>
      </ol>
    `
  },
  {
    id: "pelajaran-21",
    number: 21,
    field: "sirah",
    fieldLabel: "Bidang Sirah & Tamadun Islam",
    title: "Pelajaran 21: Keunggulan Tokoh Empat Mazhab",
    subtopics: [
      {
        id: "unit-1-abu-hanifah",
        badge: "UNIT 1",
        title: "Unit 1: Imam Abu Hanifah r.h. (Mazhab Hanafi)",
        contentHtml: `
          <h3>1. Riwayat Hidup / Biodata</h3>
          <ul>
            <li><b>Nama Penuh:</b> Al-Nu'man bin Thabit al-Kufi (<span class="arabic-text">النُّعْمَانُ بْنُ ثَابِتٍ الْكُوفِيُّ</span>).</li>
            <li><b>Kelahiran & Wafat:</b> Lahir pada <b>80 Hijrah di Kufah, Iraq</b>; wafat pada tahun <b>150 Hijrah</b> di Baghdad.</li>
            <li><b>Kuniah:</b> Abu Hanifah.</li>
          </ul>

          <h3>2. Keperibadian & Guru</h3>
          <ul>
            <li><b>Keperibadian:</b> Sangat memuliakan majlis ilmu; berakhlak zuhud, pemurah dan penyayang; seorang peniaga kain sutera yang jujur; kuat beribadah (sering mengkhatamkan al-Quran dalam qiamullail); tegas menolak jawatan hakim demi menjaga kebebasan fatwanya.</li>
            <li><b>Guru-Guru Terkenal:</b> Hammad bin Abi Sulaiman, 'Atha' bin Abi Rabah, dan 'Amru bin Dinar.</li>
          </ul>

          <h3>3. Sumbangan & Pengasasan Mazhab Hanafi</h3>
          <ul>
            <li><b>Hasil Karya:</b> <i>Al-Fiqh al-Akbar</i> (akidah), <i>Al-Fara'id</i>, dan <i>Al-'Alim wa al-Muta'allim</i>.</li>
            <li><b>Dasar Pegangan Mazhab:</b> Al-Quran, As-Sunnah, Fatwa Sahabat (Aqwal al-Sahabah), <b>Qiyas</b>, <b>Istihsan</b>, Ijmak, dan 'Uruf (adat setempat yang tidak bercanggah dengan syarak).</li>
            <li><b>Murid Terkenal:</b> Abu Yusuf al-Qadhi, Muhammad bin al-Hasan al-Shaibani, dan Zufar bin al-Hudhail.</li>
            <li><b>Penyebaran Mazhab:</b> Seluruh Asia Tengah (Uzbekistan, Pakistan, India), Turki, dan rantau Balkan Eropah.</li>
          </ul>
        `
      },
      {
        id: "unit-2-imam-malik",
        badge: "UNIT 2",
        title: "Unit 2: Imam Malik r.h. (Mazhab Maliki)",
        contentHtml: `
          <h3>1. Riwayat Hidup / Biodata</h3>
          <ul>
            <li><b>Nama Penuh:</b> Malik bin Anas al-Madani (<span class="arabic-text">مَالِكُ بْنُ أَنَسٍ الْمَدَنِيُّ</span>).</li>
            <li><b>Kelahiran & Wafat:</b> Lahir pada <b>93 Hijrah di Madinah</b>; wafat pada tahun <b>179 Hijrah</b> dan dimakamkan di Perkuburan Baqi', Madinah.</li>
            <li><b>Kuniah:</b> Abu Abdillah (digelar <i>Imam Dar al-Hijrah</i>).</li>
          </ul>

          <h3>2. Keperibadian & Guru</h3>
          <ul>
            <li><b>Keperibadian:</b> Sangat mencintai dan menghormati hadis Nabi SAW; tidak menunggang haiwan di Kota Madinah kerana menghormati bumi jasad baginda SAW; memakai pakaian paling bersih dan wangi-wangian sebelum mengajar hadis; berprinsip "ilmu dicari, bukan ilmu mencari murid".</li>
            <li><b>Guru-Guru Terkenal:</b> Nafi' Maula Ibn Umar, Muhammad bin Muslim bin Shihab al-Zuhri, dan Yahya bin Sa'id al-Ansari.</li>
          </ul>

          <h3>3. Sumbangan & Pengasasan Mazhab Maliki</h3>
          <ul>
            <li><b>Hasil Karya Agung:</b> <b>Kitab Al-Muwatta' (الْمُوَطَّأُ)</b> - kitab himpunan hadis dan fikah terawal yang sahih.</li>
            <li><b>Dasar Pegangan Mazhab:</b> Al-Quran, As-Sunnah, <b>Amalan Penduduk Madinah ('Amal Ahl al-Madinah)</b>, Qiyas, dan <b>Masalih al-Mursalah</b> (kemaslahatan umum).</li>
            <li><b>Murid Terkenal:</b> Imam al-Syafi'i, Abdullah bin Wahb, dan Abd al-Rahman bin Qasim.</li>
            <li><b>Penyebaran Mazhab:</b> Mesir, Tunisia, Maghribi, Algeria, Sudan, dan Afrika Barat serta Andalus dahulu.</li>
          </ul>
        `
      },
      {
        id: "unit-3-imam-syafii",
        badge: "UNIT 3",
        title: "Unit 3: Imam al-Syafi'i r.h. (Mazhab Syafi'i)",
        contentHtml: `
          <h3>1. Riwayat Hidup / Biodata</h3>
          <ul>
            <li><b>Nama Penuh:</b> Muhammad bin Idris al-Syafi'i (<span class="arabic-text">مُحَمَّدُ بْنُ إِدْرِيسَ الشَّافِعِيُّ</span>). Keturunan baginda bertemu dengan Rasulullah SAW pada moyangnya Abd Manaf.</li>
            <li><b>Kelahiran & Wafat:</b> Lahir pada <b>150 Hijrah di Gaza, Palestin</b>; wafat pada tahun <b>204 Hijrah di Fustat, Mesir</b>.</li>
            <li><b>Kuniah:</b> Abu Abdillah (digelar <i>Nasir al-Sunnah</i>).</li>
          </ul>

          <h3>2. Keperibadian & Guru</h3>
          <ul>
            <li><b>Keperibadian:</b> Menghafaz al-Quran seawal usia 7 tahun dan menghafaz kitab Al-Muwatta' pada usia 10 tahun; tinggal bersama kabilah Arab Badwi Huzail untuk mendalami kesusasteraan bahasa Arab; bermusafir jauh menuntut ilmu; sangat pemurah dan memuliakan fakir miskin; berani menegakkan hujah kebenaran.</li>
            <li><b>Guru-Guru Terkenal:</b> Imam Malik bin Anas di Madinah, Sufyan bin 'Uyainah di Mekah, dan Muslim bin Khalid al-Zanji (Mufti Mekah).</li>
          </ul>

          <h3>3. Sumbangan & Pengasasan Mazhab Syafi'i</h3>
          <ul>
            <li><b>Hasil Karya Agung:</b><br>
            • <i>Al-Risalah (الرِّسَالَةُ):</i> Kitab pertama di dunia yang mengasaskan disiplin <b>Ilmu Usul al-Fiqh</b>.<br>
            • <i>Al-Umm (الأُمُّ):</i> Kitab induk fikah perbandingan mazhab yang agung.<br>
            • <i>Al-Musnad:</i> Kitab himpunan hadis beliau.</li>
            <li><b>Dasar Pegangan Mazhab:</b> Al-Quran, As-Sunnah, <b>Ijmak</b>, <b>Qiyas</b>, dan <b>Istidlal</b>. Mengandungi <i>Qawl Qadim</i> (fatwa lama di Baghdad) dan <i>Qawl Jadid</i> (fatwa baharu di Mesir).</li>
            <li><b>Murid Terkenal:</b> Imam Ahmad bin Hanbal, Abu Ya'qub al-Buwaiti, dan Abu Ibrahim Ismail bin Yahya al-Muzani.</li>
            <li><b>Penyebaran Mazhab:</b> <b>Malaysia, Indonesia, Brunei, Selatan Thailand</b>, Mesir, Yaman, Palestin, Jordan, dan Somalia.</li>
          </ul>
        `
      },
      {
        id: "unit-4-imam-ahmad",
        badge: "UNIT 4",
        title: "Unit 4: Imam Ahmad bin Hanbal r.h. (Mazhab Hanbali)",
        contentHtml: `
          <h3>1. Riwayat Hidup / Biodata</h3>
          <ul>
            <li><b>Nama Penuh:</b> Ahmad bin Muhammad bin Hanbal al-Syaibani (<span class="arabic-text">أَحْمَدُ بْنُ مُحَمَّدِ بْنِ حَنْبَلٍ</span>).</li>
            <li><b>Kelahiran & Wafat:</b> Lahir pada <b>164 Hijrah di Baghdad</b>; wafat pada tahun <b>241 Hijrah</b> di Baghdad pada usia 77 tahun.</li>
            <li><b>Kuniah:</b> Abu Abdillah.</li>
          </ul>

          <h3>2. Keperibadian & Keteguhan Akidah (Mihnah)</h3>
          <ul>
            <li><b>Keperibadian:</b> Menghafaz lebih 700,000 hadis; seorang yang amat warak, pemaaf, dan kuat beribadah (solat sunat 300 rakaat sehari); gigih mengembara mencari hadis sahih.</li>
            <li><b>Keteguhan Akidah (Peristiwa Mihnah):</b> Beliau diuji dengan fitnah fahaman Muktazilah <i>Khalq al-Quran</i> (mendakwa al-Quran itu makhluk) semasa era Khalifah al-Ma'mun dan al-Mu'tasim. Beliau disebat dan dipenjarakan bertahun-tahun, namun tetap teguh mempertahankan akidah bahawa <b>Al-Quran ialah Kalam Allah yang qadim, bukan makhluk</b>.</li>
            <li><b>Guru-Guru Terkenal:</b> Imam al-Syafi'i, Abu Yusuf al-Qadhi, dan Hammad bin Khalid.</li>
          </ul>

          <h3>3. Sumbangan & Pengasasan Mazhab Hanbali</h3>
          <ul>
            <li><b>Hasil Karya:</b> <b>Al-Musnad (كِتَابُ الْمُسْنَدِ)</b> - memuatkan sekitar 40,000 hadis Rasulullah SAW; <i>At-Tarikh</i>, dan <i>Al-'Ilal</i>.</li>
            <li><b>Dasar Pegangan Mazhab:</b> Al-Quran, As-Sunnah (termasuk hadis Mursal dan Daif yang ringan jika tiada dalil lain), <b>Fatwa Sahabat</b>, Qiyas (bila darurat), dan <b>Istishab</b>.</li>
            <li><b>Murid Terkenal:</b> Imam al-Bukhari, Imam Muslim, Abu Daud, Hanbal bin Ishaq, dan anaknya Salih serta Abdullah.</li>
            <li><b>Penyebaran Mazhab:</b> Arab Saudi, Najd, Qatar, Kuwait, dan sebahagian Oman.</li>
          </ul>
        `
      }
    ]
  },

  // ==========================================
  // 6. BIDANG AKHLAK ISLAMIYYAH
  // ==========================================
  {
    id: "pelajaran-22",
    number: 22,
    field: "akhlak",
    fieldLabel: "Bidang Akhlak Islamiyyah",
    title: "Pelajaran 22: Bersikap Benar Menjauhkan Kemunafikan",
    directContentHtml: `
      <h3>Maksud Bersikap Benar</h3>
      <p><b>Bahasa:</b> Tidak berdusta.<br>
      <b>Istilah Syarak:</b> Tidak berdusta dari segi <b>perkataan, perkhabaran, dan perbuatan</b> serta menyatakan kebenaran mengikut realiti yang sebenar berasaskan syariat Islam.</p>

      <h3>Hukum & Dalil Naqli Bersikap Benar</h3>
      <p><b>Hukum:</b> <b>Wajib</b> ke atas setiap individu Muslim dalam semua keadaan.</p>
      <p class="quote arabic-text">يَـٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُوا۟ ٱتَّقُوا۟ ٱللَّهَ وَقُولُوا۟ قَوْلًۭا سَدِيدًۭا</p>
      <p><b>Maksudnya:</b> "Wahai orang-orang yang beriman, bertaqwalah kamu kepada Allah dan katakanlah perkataan yang benar." (Surah al-Ahzab: 70)</p>
      <p>Sabda Nabi SAW: <span class="arabic-text">عَلَيْكُمْ بِالصِّدْقِ، فَإِنَّ الصِّدْقَ يَهْدِي إِلَى الْبِرِّ، وَإِنَّ الْبِرَّ يَهْدِي إِلَى الْجَنَّةِ...</span> ("Hendaklah kamu sentiasa bersikap benar, kerana sesungguhnya sikap benar itu membawa kepada kebaikan, dan kebaikan itu membawa ke syurga..." - Riwayat Muslim).</p>

      <h3>5 Tuntutan Bersikap Benar</h3>
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Tuntutan</th>
              <th>Huraian & Cara Pelaksanaan</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><b>1. Benar dalam Tutur Kata</b></td>
              <td>Bercakap perkara yang benar, tidak berbohong, tidak mereka-reka cerita dan menjauhi percakapan yang mengelirukan atau berunsur fitnah.</td>
            </tr>
            <tr>
              <td><b>2. Benar dalam Niat & Kemahuan</b></td>
              <td>Ikhlas berniat kerana Allah SWT semata-mata, bebas daripada riak dan mengharapkan pujian manusia.</td>
            </tr>
            <tr>
              <td><b>3. Benar dalam Keazaman & Cita-Cita</b></td>
              <td>Mempunyai keazaman yang tekad untuk melakukan kebaikan serta bertindak selaras dengan apa yang dicita-citakan.</td>
            </tr>
            <tr>
              <td><b>4. Benar dalam Menepati Janji</b></td>
              <td>Menunaikan segala janji yang dibuat dengan tepat mengikut masa dan syarat selagi tidak melanggar syarak.</td>
            </tr>
            <tr>
              <td><b>5. Benar dalam Tugas / Amanah</b></td>
              <td>Melaksanakan setiap tugas dan pekerjaan dengan cara yang paling berkualiti (itqan) tanpa culas atau mengharapkan rasuah.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>Contoh Rasulullah SAW Bersikap Benar</h3>
      <ul>
        <li><b>Benar dalam Penyampaian Wahyu:</b> Baginda SAW menyampaikan seluruh wahyu Allah tanpa menyembunyikan atau menambah walau satu huruf. Firman-Nya: <span class="arabic-text">وَمَا يَنطِقُ عَنِ ٱلْهَوَىٰٓ ۝ إِنْ هُوَ إِلَّا وَحْىٌۭ يُوحَىٰ</span> ("Dan ia tidak memperkatakan sesuatu mengikut hawa nafsunya; segala ucapannya tidak lain hanyalah wahyu yang diwahyukan" - Surah an-Najm: 3–4).</li>
        <li><b>Benar Ketika Bergurau:</b> Baginda pernah bergurau namun sentiasa benar. Contohnya seorang wanita tua meminta baginda berdoa agar dia masuk syurga. Baginda berkata: "Orang tua tidak akan masuk syurga." Wanita itu menangis, lalu baginda tersenyum menerangkan bahawa wanita tua akan dijadikan muda dan sebaya ketika masuk syurga (Surah al-Waqi'ah: 35–37).</li>
      </ul>

      <h3>Hikmah Bersikap Benar & Tanda-Tanda Munafik</h3>
      <ol>
        <li>Terpelihara daripada terjerumus ke dalam sifat orang munafik yang dilaknat Allah SWT.</li>
        <li>Menenangkan jiwa dan fikiran kerana tidak perlu menutupi pembohongan.</li>
        <li>Membina kepercayaan, silaturrahim, dan kerjasama yang harmoni dalam masyarakat.</li>
        <li>Ditinggikan darjat dan maruah diri di sisi Allah dan manusia.</li>
      </ol>
      <p class="quote"><b>Spektrum Ilmu (Hadis Tanda Munafik):</b> Sabda Nabi SAW: <span class="arabic-text">آيَةُ الْمُنَافِقِ ثَلَاثٌ: إِذَا حَدَّثَ كَذَبَ، وَإِذَا وَعَدَ أَخْلَفَ، وَإِذَا اؤْتُمِنَ خَانَ</span> ("Tanda orang munafik ada tiga: apabila bercakap dia berdusta, apabila berjanji dia mungkir, dan apabila diberi amanah dia khianat" - Riwayat al-Bukhari & Muslim).</p>
    `
  },
  {
    id: "pelajaran-23",
    number: 23,
    field: "akhlak",
    fieldLabel: "Bidang Akhlak Islamiyyah",
    title: "Pelajaran 23: Khauf dan Raja'",
    subtopics: [
      {
        id: "unit-1-khauf",
        badge: "UNIT 1",
        title: "Unit 1: Khauf (خَوْف - Rasa Takut kepada Allah)",
        contentHtml: `
          <h3>1. Maksud Khauf</h3>
          <p><b>Khauf</b> bermaksud <b>takut kepada kemurkaan dan azab seksa Allah SWT</b> dengan cara menjauhi segala larangan-Nya dan berwaspada daripada melakukan sebarang maksiat.</p>

          <h3>2. Dalil Naqli Khauf</h3>
          <p class="quote arabic-text">فَلَا تَخَافُوهُمْ وَخَافُونِ إِن كُنتُم مُّؤْمِنِينَ</p>
          <p><b>Maksudnya:</b> "Maka janganlah kamu takut kepada mereka, tetapi takutlah kepada-Ku (Allah), jika kamu orang-orang yang beriman." (Surah Ali 'Imran: 175)</p>

          <h3>3. Cara Memperoleh Sifat Khauf</h3>
          <ol>
            <li>Sentiasa bergaul dan mendampingi para ulama serta orang-orang yang soleh.</li>
            <li>Mengkaji dan mengambil iktibar daripada sejarah kebinasaan umat terdahulu yang diazab Allah.</li>
            <li>Sentiasa bertaubat, beristighfar dan meratapi dosa-dosa silam.</li>
            <li>Sentiasa mengingati kematian dan dahsyatnya alam barzakh serta padang Mahsyar.</li>
          </ol>
        `
      },
      {
        id: "unit-2-raja",
        badge: "UNIT 2",
        title: "Unit 2: Raja' (رَجَاء - Mengharapkan Rahmat Allah)",
        contentHtml: `
          <h3>1. Maksud Raja'</h3>
          <p><b>Raja'</b> bermaksud <b>mengharapkan keredaan, rahmat, keampunan, dan pahala syurga Allah SWT</b> dengan cara melaksanakan segala perintah-Nya dengan penuh pengharapan.</p>

          <h3>2. Dalil Naqli Raja'</h3>
          <p class="quote arabic-text">فَمَن كَانَ يَرْجُوا۟ لِقَآءَ رَبِّهِۦ فَلْيَعْمَلْ عَمَلًۭا صَـٰلِحًۭا وَلَا يُشْرِكْ بِعِبَادَةِ رَبِّهِۦٓ أَحَدًۢا</p>
          <p><b>Maksudnya:</b> "Sesiapa yang mengharapkan pertemuan dengan Tuhannya, hendaklah dia mengerjakan amal yang soleh dan janganlah dia mempersekutukan sesiapapun dalam beribadah kepada Tuhannya." (Surah al-Kahf: 110)</p>

          <h3>3. Cara Memperoleh Sifat Raja'</h3>
          <ol>
            <li>Bermujahadah melawan hawa nafsu dan godaan syaitan.</li>
            <li>Melaksanakan segala ibadah dengan penuh tekun, ikhlas, dan istiqamah.</li>
            <li>Bersangka baik (husnuzzon) terhadap keluasan rahmat dan pengampunan Allah SWT serta tidak sesekali berputus asa.</li>
          </ol>
        `
      },
      {
        id: "unit-3-keseimbangan",
        badge: "UNIT 3 & 4",
        title: "Unit 3 & 4: Konsep Keseimbangan & Hikmah Khauf dan Raja'",
        contentHtml: `
          <h3>Konsep Keseimbangan Antara Khauf dan Raja'</h3>
          <p>Umat Islam wajib menyeimbangkan antara sifat Khauf dan Raja' dalam diri ibarat <b>dua sayap burung yang seimbang</b>:</p>
          <ul>
            <li><b>Jika hanya ada Khauf tanpa Raja':</b> Seseorang akan mudah <b>berputus asa daripada rahmat Allah</b>, berasa dosanya terlalu banyak dan tidak akan diampunkan, lalu terjerumus dalam kemurungan atau meninggalkan ibadah.</li>
            <li><b>Jika hanya ada Raja' tanpa Khauf:</b> Seseorang akan berasa <b>terlalu selesa dan aman daripada kemurkaan Allah</b>, mempermudah-mudahkan dosa maksiat dengan alasan Allah Maha Pengampun.</li>
            <li><b>Keseimbangan Kedua-duanya:</b> Melahirkan insan yang sentiasa berwaspada menjauhi maksiat, bersemangat melakukan amal ibadah, dan tabah menghadapi ujian kehidupan.</li>
          </ul>

          <h3>Hikmah Mengamalkan Khauf dan Raja'</h3>
          <ol>
            <li>Melahirkan insan bertakwa yang sentiasa mengingati Allah dan bersegera bertaubat atas kesilapan.</li>
            <li>Mendidik jiwa menjadi tenang, sabar, dan tidak berputus asa apabila ditimpa kesusahan hidup.</li>
            <li>Mendorong keistiqamahan beribadah demi meraih ganjaran syurga Allah SWT.</li>
            <li>Mendapat keredaan, ketenangan batin, dan kebahagiaan sejati di dunia dan akhirat.</li>
          </ol>
        `
      }
    ]
  },
  {
    id: "pelajaran-24",
    number: 24,
    field: "akhlak",
    fieldLabel: "Bidang Akhlak Islamiyyah",
    title: "Pelajaran 24: Adab Terhadap Orang Sakit dan Orang Kurang Upaya (OKU)",
    subtopics: [
      {
        id: "unit-1-orang-sakit",
        badge: "UNIT 1",
        title: "Unit 1: Adab Terhadap Orang Sakit",
        contentHtml: `
          <h3>1. Dalil Naqli Menziarahi Orang Sakit</h3>
          <p>Menziarahi orang sakit adalah fardu kifayah / sunat muakkad yang amat dituntut. Sabda Nabi SAW: <span class="arabic-text">أَطْعِمُوا الْجَائِعَ، وَعُودُوا الْمَرِيضَ، وَفُكُّوا الْعَانِيَ</span> ("Berilah makan kepada orang yang lapar, ziarahilah orang yang sakit, dan bebaskanlah orang yang tertawan" - Riwayat al-Bukhari).</p>

          <h3>2. Adab Terhadap Orang Sakit dalam 3 Aspek</h3>
          <div class="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Aspek Adab</th>
                  <th>Huraian & Tindakan Praktikal</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><b>1. Aspek Fizikal</b></td>
                  <td>• Memastikan kebersihan diri, pakaian, dan tempat tidur pesakit sentiasa terjaga.<br>
                  • Menyediakan makanan dan minuman yang bersih, berkhasiat, dan menepati diet perubatan.<br>
                  • Membantu pesakit mendapatkan rawatan doktor dan ubat-ubatan yang disyorkan pakar.</td>
                </tr>
                <tr>
                  <td><b>2. Aspek Emosi</b></td>
                  <td>• Memberikan kata-kata semangat, dorongan, dan menanamkan sangka baik kepada Allah SWT.<br>
                  • Mendoakan kesembuhan pesakit (seperti doa: <span class="arabic-text">لَا بَأْسَ طَهُورٌ إِنْ شَاءَ اللَّهُ</span>).<br>
                  • Tidak membuat bising, tidak bertandang terlalu lama, dan tidak membicarakan topik yang membimbangkan pesakit.</td>
                </tr>
                <tr>
                  <td><b>3. Aspek Ibadah</b></td>
                  <td>• Mengingatkan dan menasihati pesakit tentang kewajipan solat fardu mengikut keupayaan.<br>
                  • Membantu pesakit bersuci (berwuduk atau bertayammum jika tidak boleh terkena air).<br>
                  • Membantu membetulkan arah katil menghadap ke arah kiblat.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3>3. Hikmah Beradab Terhadap Orang Sakit</h3>
          <ol>
            <li>Meringankan bebanan kesakitan dan penderitaan fizikal yang dialami pesakit.</li>
            <li>Memberi ketenangan emosi dan keyakinan diri untuk segera pulih.</li>
            <li>Mengeratkan ikatan kasih sayang, ukhuwah, dan empati dalam masyarakat.</li>
          </ol>
        `
      },
      {
        id: "unit-2-oku",
        badge: "UNIT 2",
        title: "Unit 2: Adab Terhadap Orang Kurang Upaya (OKU)",
        contentHtml: `
          <h3>1. Pengertian Orang Kurang Upaya (OKU)</h3>
          <p>Seseorang yang mempunyai <b>ketidakupayaan jangka panjang</b> dari segi fizikal, mental, intelektual, atau deria (penglihatan/pendengaran) yang menghalangnya daripada penglibatan penuh dan berkesan dalam masyarakat.</p>

          <h3>2. Pandangan Islam Terhadap Golongan OKU</h3>
          <ul>
            <li>Islam melarang keras sikap memandang rendah, mengejek, menyindir, atau mendiskriminasi golongan OKU.</li>
            <li>Semua manusia adalah sama taraf di sisi Allah SWT; kemuliaan seseorang hanya dinilai berasaskan <b>ketaqwaan dan amal soleh</b> (Surah al-Hujurat: 13).</li>
          </ul>

          <h3>3. Adab Terhadap OKU dalam 3 Aspek</h3>
          <div class="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Aspek Adab</th>
                  <th>Huraian Tindakan</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><b>1. Aspek Ibadah</b></td>
                  <td>• Menyediakan kemudahan mesra OKU di masjid (laluan kerusi roda, tandas khas, naskhah al-Quran Braille).<br>
                  • Membimbing dan memudah cara pelaksanaan ibadah fardu mengikut tahap kemampuan mereka.</td>
                </tr>
                <tr>
                  <td><b>2. Aspek Emosi</b></td>
                  <td>• Memberikan layanan mesra, penuh hormat, santun, dan kasih sayang.<br>
                  • Menjaga maruah mereka dengan tidak memanggil gelaran kecacatan yang menggores hati.<br>
                  • Memberi kata-kata motivasi dan sokongan moral agar mereka berkeyakinan tinggi.</td>
                </tr>
                <tr>
                  <td><b>3. Aspek Fizikal & Kemudahan</b></td>
                  <td>• Menghormati dan tidak menyalahgunakan kemudahan khas OKU (petak parkir khas, lif OKU, tandas khas).<br>
                  • Membantu mereka melintas jalan atau menaiki pengangkutan awam.<br>
                  • Menyediakan peluang pendidikan khas, latihan kemahiran, dan peluang kerjaya yang bersesuaian.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3>4. Hikmah Beradab Terhadap Golongan OKU</h3>
          <ol>
            <li>Membolehkan golongan OKU menikmati kehidupan yang lebih selesa, berdikari, dan bermaruah.</li>
            <li>Mewujudkan masyarakat yang prihatin, penyayang, berintegriti, dan saling menghormati.</li>
            <li>Mengelakkan perasaan rendah diri atau tersisih daripada masyarakat dalam jiwa golongan OKU.</li>
            <li>Mendapat keberkatan dan rahmat daripada Allah SWT atas sifat ihsan sesama manusia.</li>
          </ol>
        `
      }
    ]
  },
  {
    id: "pelajaran-25",
    number: 25,
    field: "akhlak",
    fieldLabel: "Bidang Akhlak Islamiyyah",
    title: "Pelajaran 25: Wasatiyyah Menjamin Kecemerlangan Umat",
    subtopics: [
      {
        id: "unit-1-maksud-wasatiyyah",
        badge: "UNIT 1",
        title: "Unit 1: Maksud Wasatiyyah",
        contentHtml: `
          <h3>Maksud Wasatiyyah dari Segi Bahasa & Istilah</h3>
          <ul>
            <li><b>Bahasa:</b> Sederhana, seimbang, adil, dan cemerlang.</li>
            <li><b>Istilah:</b> Pendekatan yang <b>sederhana, seimbang, adil, dan cemerlang</b> dalam setiap tindakan, tidak melampaui batas serta tidak pula mengabaikan hukum dan syariat Islam.</li>
          </ul>
        `
      },
      {
        id: "unit-2-dalil-wasatiyyah",
        badge: "UNIT 2",
        title: "Unit 2: Dalil Naqli Wasatiyyah",
        contentHtml: `
          <h3>Dalil Naqli al-Quran (Surah al-Baqarah, 2: Ayat 143)</h3>
          <p class="quote arabic-text">وَكَذَٰلِكَ جَعَلْنَـٰكُمْ أُمَّةًۭ وَسَطًۭا لِّتَكُونُوا۟ شُهَدَآءَ عَلَى ٱلنَّاسِ وَيَكُونَ ٱلرَّسُولُ عَلَيْكُمْ شَهِيدًۭا</p>
          <p><b>Maksudnya:</b> "Dan demikianlah Kami jadikan kamu (umat Islam) umat yang adil / pilihan (pertengahan), supaya kamu menjadi saksi kepada manusia dan Rasulullah SAW menjadi saksi ke atas kamu..." (Surah al-Baqarah: 143)</p>
        `
      },
      {
        id: "unit-3-kesederhanaan",
        badge: "UNIT 3",
        title: "Unit 3: Kesederhanaan (Iqtisad)",
        contentHtml: `
          <h3>Maksud Kesederhanaan</h3>
          <p>Melakukan sesuatu perkara dengan bersungguh-sungguh dan sempurna tanpa melampaui batas atau mengabaikan perintah syarak.</p>

          <h3>Ciri-Ciri Kesederhanaan:</h3>
          <ul>
            <li>Memenuhi syarat dan tuntutan syarak dalam segenap amalan.</li>
            <li>Menjelaskan tugas dan tanggungjawab mengikut kemampuan fizikal dan mental.</li>
            <li>Mengelakkan perbuatan melampaui batas (<i>ghuluw</i>) atau meremehkan ajaran Islam (<i>tafrit</i>).</li>
          </ul>
        `
      },
      {
        id: "unit-4-keseimbangan",
        badge: "UNIT 4",
        title: "Unit 4: Keseimbangan (Tawazun)",
        contentHtml: `
          <h3>Maksud Keseimbangan</h3>
          <p>Memenuhi keperluan rohani, jasmani, dan akal secara seimbang dalam semua keadaan.</p>

          <h3>Tiga Aspek Keseimbangan:</h3>
          <div class="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Aspek Keseimbangan</th>
                  <th>Huraian & Cara Pelaksanaan</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><b>1. Aspek Rohani</b></td>
                  <td>Melaksanakan ibadah fardu dan sunat seperti solat, zikir, serta berdoa dengan ikhlas dan khusyuk.</td>
                </tr>
                <tr>
                  <td><b>2. Aspek Jasmani</b></td>
                  <td>Mengambil makanan yang halal lagi berkhasiat, berehat secukupnya, serta melakukan riadah untuk menjaga kesihatan tubuh badan.</td>
                </tr>
                <tr>
                  <td><b>3. Aspek Akal</b></td>
                  <td>Menuntut ilmu pengetahuan berfaedah, berfikir secara kritis dan kreatif, serta menjauhi pemikiran yang merosakkan.</td>
                </tr>
              </tbody>
            </table>
          </div>
        `
      },
      {
        id: "unit-5-keadilan",
        badge: "UNIT 5",
        title: "Unit 5: Keadilan (I'tidal)",
        contentHtml: `
          <h3>Maksud Keadilan</h3>
          <p>Meletakkan sesuatu pada tempatnya dan memberikan hak kepada yang berhak mengikut ketentuan syarak.</p>

          <h3>Ciri-Ciri Keadilan:</h3>
          <ul>
            <li>Melaksanakan tugas dan amanah tanpa bersikap pilih kasih.</li>
            <li>Membuat keputusan secara saksama berdasarkan bukti dan kebenaran.</li>
            <li>Menghormati hak-hak individu, keluarga, dan masyarakat.</li>
          </ul>
        `
      },
      {
        id: "unit-6-kecemerlangan",
        badge: "UNIT 6",
        title: "Unit 6: Kecemerlangan (Kamaliyah)",
        contentHtml: `
          <h3>Maksud Kecemerlangan</h3>
          <p>Pendekatan yang melahirkan umat Islam yang cemerlang dari segi sahsiah, keilmuan, dan daya saing demi memartabatkan agama dan negara.</p>

          <h3>Ciri-Ciri Umat yang Cemerlang:</h3>
          <ul>
            <li>Memiliki pegangan akidah yang mantap dan berakhlak mulia.</li>
            <li>Menguasai pelbagai disiplin ilmu pengetahuan dan kemahiran.</li>
            <li>Bersikap inovatif, kreatif, serta mempunyai semangat daya saing yang tinggi.</li>
          </ul>
        `
      },
      {
        id: "unit-7-hikmah-wasatiyyah",
        badge: "UNIT 7",
        title: "Unit 7: Hikmah Mengamalkan Prinsip Wasatiyyah",
        contentHtml: `
          <h3>Hikmah Mengamalkan Prinsip Wasatiyyah dalam Kehidupan</h3>
          <ol>
            <li><b>Syiar Islam dapat ditegakkan</b> dan imej umat Islam dipandang tinggi oleh masyarakat dunia.</li>
            <li><b>Pembangunan negara berjalan dengan stabil dan mampan</b> kerana sumber ekonomi dan kewangan diuruskan secara berhemah.</li>
            <li><b>Mewujudkan suasana kehidupan yang harmoni, aman, dan sejahtera</b> menerusi ikatan silaturrahim dan perpaduan sesama masyarakat.</li>
            <li><b>Membentuk potensi diri insan secara seimbang</b> meliputi aspek rohani, jasmani, emosi, dan intelek.</li>
            <li><b>Mengelakkan sifat ekstremisme dan perpecahan</b> dalam kalangan umat Islam.</li>
          </ol>
        `
      }
    ]
  }
];
