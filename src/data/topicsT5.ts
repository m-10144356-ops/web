export interface SubtopicT5 {
  id: string;
  badge?: string;
  title: string;
  contentHtml?: string;
}

export interface TopicItemT5 {
  id: string;
  number: number;
  field: "al-quran" | "hadis" | "akidah" | "fikah" | "sirah" | "akhlak";
  fieldLabel: string;
  title: string;
  summary?: string;
  subtopics?: SubtopicT5[];
  directContentHtml?: string;
}

export const topicsDataT5: TopicItemT5[] = [
  // ==========================================
  // 1. BIDANG AL-QURAN
  // ==========================================
  {
    id: "t5-p3",
    number: 3,
    field: "al-quran",
    fieldLabel: "Bidang Al-Quran (Tajwid)",
    title: "Pelajaran 3: Hukum Tajwid: Bacaan 'Ra', Wakaf dan Ibtida'",
    summary: "Hukum bacaan Ra' (Tafkhim & Tarqiq), 5 tanda wakaf, 4 jenis wakaf (Tam, Kafi, Hasan, Qabih), serta kaedah Ibtida' Hasan & Qabih.",
    subtopics: [
      {
        id: "t5-p3-u1",
        badge: "UNIT 1",
        title: "Unit 1: Hukum Bacaan 'Ra' (حكوم باجاءن 'ر')",
        contentHtml: `
          <div class="mb-4">
            <p>Cara bacaan huruf "Ra" terbahagi kepada dua:</p>
            <ul>
              <li><b>Tafkhim (تَفْخِيم - Tebal):</b> Dibaca dengan menebalkan sebutan huruf "Ra".</li>
              <li><b>Tarqiq (تَرْقِيق - Nipis):</b> Dibaca dengan menipiskan sebutan huruf "Ra".</li>
            </ul>
          </div>

          <h4 class="text-base font-bold text-[#ffd447] mt-5 mb-2 border-b border-stone-600 pb-1">
            🟩 Unit 1.1: Keadaan Ra Dibaca Tafkhim (Tebal)
          </h4>
          <p class="text-sm text-slate-300 mb-3">Huruf "Ra" dibaca tebal dalam keadaan berikut:</p>
          <div class="table-wrap">
            <table>
              <thead>
                <tr>
                  <th style="width: 50px;">Bil</th>
                  <th>Keadaan Huruf Ra'</th>
                  <th>Contoh Kalimah & Dalil</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><b>1</b></td>
                  <td>Ra berbaris Fathah (رَ) atau Dammah (رُ)</td>
                  <td><span class="arabic-text">رَبَّنَا</span> (Surah Ali 'Imran: 8)<br><span class="arabic-text">يَنصُرُونَ</span> (Surah al-A'raf: 192)</td>
                </tr>
                <tr>
                  <td><b>2</b></td>
                  <td>Ra Sakinah (ْر) asal dan huruf sebelumnya berbaris Fathah atau Dammah</td>
                  <td><span class="arabic-text">وَإِذْ رَفَعَ</span> (Surah al-Baqarah: 127)<br><span class="arabic-text">فُرْقَانًا</span> (Surah al-Anfal: 29)</td>
                </tr>
                <tr>
                  <td><b>3</b></td>
                  <td>
                    Ra Sakinah, huruf sebelumnya berbaris Kasrah dan selepasnya terdapat <b>huruf Isti'la' berbaris Fathah</b> dalam satu kalimah.<br>
                    <span class="text-xs text-amber-200/90 mt-1 block"><b>7 Huruf Isti'la':</b> خ, ص, ض, غ, ط, ق, ظ (dihimpunkan dalam lafaz <b>خَصَّ ضَغْطٍ قِظْ</b>).</span>
                  </td>
                  <td><span class="arabic-text">مِن كُلِّ فِرْقَةٍ</span> (Surah at-Taubah: 122)<br><span class="arabic-text">فِي قِرْطَاسٍ</span> (Surah al-An'am: 7)</td>
                </tr>
                <tr>
                  <td><b>4</b></td>
                  <td>Ra Sakinah terletak di awal kalimah selepas <b>Hamzah Wasal</b></td>
                  <td><span class="arabic-text">ارْجِعُوا</span> (Surah Yusuf: 81)<br><span class="arabic-text">ارْكَبُوا</span> (Surah Hud: 41)</td>
                </tr>
                <tr>
                  <td><b>5</b></td>
                  <td>Ra Sakinah dan huruf sebelumnya berbaris <b>Kasrah Asli</b> atau <b>Kasrah 'Aridah</b> (mendatang)</td>
                  <td><span class="arabic-text">رَّبِّ ارْحَمْهُمَا</span> (Surah al-Isra': 24)<br><span class="arabic-text">إِلَّا مَنِ ارْتَضَىٰ</span> (Surah al-Jinn: 27)</td>
                </tr>
                <tr>
                  <td><b>6</b></td>
                  <td>
                    Ra berbaris dibaca secara <b>Waqaf</b> apabila:
                    <ul class="text-xs mt-1 space-y-1">
                      <li>• Huruf sebelumnya berbaris Fathah atau Dammah (selain Ya Sakinah).</li>
                      <li>• Huruf sebelumnya Alif Sakinah atau Wau Sakinah.</li>
                      <li>• Huruf sebelumnya Sakinah yang didahului huruf berbaris Fathah atau Dammah.</li>
                    </ul>
                  </td>
                  <td>
                    <span class="arabic-text">الْكَوْثَرَ</span> (Surah al-Kautsar: 1)<br>
                    <span class="arabic-text">الْأُمُورُ</span> (Surah al-Baqarah: 167)<br>
                    <span class="arabic-text">خُسْرٍ</span> (Surah al-'Asr: 2)
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <h4 class="text-base font-bold text-[#2fd17a] mt-6 mb-2 border-b border-stone-600 pb-1">
            🟨 Unit 1.2: Keadaan Ra Dibaca Tarqiq (Nipis)
          </h4>
          <p class="text-sm text-slate-300 mb-3">Huruf "Ra" dibaca nipis dalam keadaan berikut:</p>
          <div class="table-wrap">
            <table>
              <thead>
                <tr>
                  <th style="width: 50px;">Bil</th>
                  <th>Keadaan Huruf Ra'</th>
                  <th>Contoh Kalimah & Dalil</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><b>1</b></td>
                  <td>Ra berbaris Kasrah (رِ) asli di awal, tengah, atau akhir kalimah</td>
                  <td>
                    <span class="arabic-text">رِزْقٌ كَرِيمٌ</span> (Surah al-Anfal: 4)<br>
                    <span class="arabic-text">أَبْصَارِهِمْ غِشَاوَةٌ</span> (Surah al-Baqarah: 7)<br>
                    <span class="arabic-text">أَصْحَابُ الْحِجْرِ</span> (Surah al-Hijr: 80)
                  </td>
                </tr>
                <tr>
                  <td><b>2</b></td>
                  <td>Ra berbaris Kasrah 'Aridah (mendatang) dalam dua kalimah yang dibaca secara Wasal</td>
                  <td>
                    <span class="arabic-text">وَاذْكُرِ اسْمَ</span> (Surah al-Muzzammil: 8)<br>
                    <span class="arabic-text">وَبَشِّرِ الصَّابِرِينَ</span> (Surah al-Baqarah: 155)
                  </td>
                </tr>
                <tr>
                  <td><b>3</b></td>
                  <td>Ra Sakinah dan huruf sebelumnya berbaris Kasrah dalam satu kalimah dan selepasnya <b>tidak terdapat huruf Isti'la'</b></td>
                  <td>
                    <span class="arabic-text">مِرْيَةٍ</span> (Surah Hud: 17)<br>
                    <span class="arabic-text">فِرْعَوْنَ</span> (Surah al-Baqarah: 50)
                  </td>
                </tr>
                <tr>
                  <td><b>4</b></td>
                  <td>
                    Ra berbaris dibaca secara <b>Waqaf</b> apabila:
                    <ul class="text-xs mt-1 space-y-1">
                      <li>• Huruf sebelumnya berbaris Kasrah.</li>
                      <li>• Huruf sebelumnya Ya Sakinah.</li>
                      <li>• Huruf sebelumnya Sakinah yang didahului huruf berbaris Kasrah.</li>
                    </ul>
                  </td>
                  <td>
                    <span class="arabic-text">الْمَقَابِرَ</span> (Surah at-Takatsur: 2)<br>
                    <span class="arabic-text">قَدِيرٌ</span> (Surah al-Ma'idah: 40)<br>
                    <span class="arabic-text">السِّحْرُ</span> (Surah Yunus: 81)
                  </td>
                </tr>
                <tr>
                  <td><b>5</b></td>
                  <td>
                    <b>Ra yang dibaca secara Imalah (إمالة)</b><br>
                    <span class="text-xs text-amber-200/90 block mt-1">Imalah ialah sebutan pertengahan antara bunyi Fathah dengan Kasrah. Terdapat pada <b>satu tempat sahaja</b> dalam al-Quran.</span>
                  </td>
                  <td>
                    <span class="arabic-text">مَجْرٰىهَا</span> dalam ayat:<br>
                    <span class="arabic-text">بِسْمِ اللَّهِ مَجْرٰىهَا وَمُرْسَاهَا</span> (Surah Hud: 41)
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        `
      },
      {
        id: "t5-p3-u2",
        badge: "UNIT 2",
        title: "Unit 2: Tanda dan Jenis Waqaf (تندا دان جنيس وقف)",
        contentHtml: `
          <div class="mb-4">
            <p><b>Maksud Waqaf:</b> Memberhentikan bacaan di akhir kalimah untuk bernafas dengan tujuan mengambil bacaan semula.</p>
          </div>

          <h4 class="text-base font-bold text-[#ffd447] mt-4 mb-2 border-b border-stone-600 pb-1">
            🟩 Unit 2.1: Tanda-Tanda Waqaf
          </h4>
          <div class="table-wrap">
            <table>
              <thead>
                <tr>
                  <th style="width: 90px;">Simbol</th>
                  <th>Nama Tanda Waqaf</th>
                  <th>Keterangan / Hukum Cara Berhenti</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><span class="pixel-font text-lg text-[#ffd447] font-bold">م</span></td>
                  <td><b>Waqaf Lazim</b></td>
                  <td>Dikalafkan / wajib berhenti.</td>
                </tr>
                <tr>
                  <td><span class="pixel-font text-lg text-[#ffd447] font-bold">∴ ∴</span></td>
                  <td><b>Waqaf Mu'anaqah / Muraqabah</b></td>
                  <td>Harus berhenti pada salah satu tempat sahaja (bukan kedua-duanya).</td>
                </tr>
                <tr>
                  <td><span class="pixel-font text-lg text-[#ffd447] font-bold">قلى</span></td>
                  <td><b>Waqaf Aula</b></td>
                  <td>Berhenti adalah lebih utama daripada meneruskan bacaan.</td>
                </tr>
                <tr>
                  <td><span class="pixel-font text-lg text-[#ffd447] font-bold">ج</span></td>
                  <td><b>Waqaf Ja'iz</b></td>
                  <td>Harus berhenti atau meneruskan bacaan (sama taraf).</td>
                </tr>
                <tr>
                  <td><span class="pixel-font text-lg text-[#ffd447] font-bold">صلى</span></td>
                  <td><b>Wasal Aula</b></td>
                  <td>Menyambung bacaan adalah lebih utama daripada berhenti.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h4 class="text-base font-bold text-[#2fd17a] mt-6 mb-2 border-b border-stone-600 pb-1">
            🟨 Unit 2.2: Jenis-Jenis Waqaf
          </h4>
          <div class="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Jenis Waqaf</th>
                  <th>Maksud & Huraian</th>
                  <th>Cara Bacaan & Contoh</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><b>1. Waqaf Tam<br>(وقف تام)</b></td>
                  <td>Waqaf pada ayat yang telah sempurna maknanya, serta tidak mempunyai kaitan dengan ayat selepasnya dari sudut lafaz dan makna.</td>
                  <td>
                    <b>Cara Bacaan:</b> Berhenti pada kalimah tersebut dan memulakan bacaan pada kalimah berikutnya.<br>
                    <span class="text-xs text-slate-300"><b>Contoh:</b> Surah al-Baqarah: 5–6</span>
                  </td>
                </tr>
                <tr>
                  <td><b>2. Waqaf Kafi<br>(وقف كافي)</b></td>
                  <td>Waqaf pada ayat yang telah sempurna maknanya, tetapi mempunyai kaitan dengan ayat selepasnya dari sudut makna, bukan lafaz.</td>
                  <td>
                    <b>Cara Bacaan:</b> Berhenti pada kalimah tersebut dan memulakan bacaan pada kalimah berikutnya.<br>
                    <span class="text-xs text-slate-300"><b>Contoh:</b> Surah al-Baqarah: 6–7</span>
                  </td>
                </tr>
                <tr>
                  <td><b>3. Waqaf Hasan<br>(وقف حسن)</b></td>
                  <td>Waqaf pada ayat yang telah sempurna maknanya, tetapi mempunyai kaitan dengan ayat selepasnya dari sudut lafaz dan makna.</td>
                  <td>
                    <b>Cara Bacaan:</b> Berhenti pada kalimah tersebut, dan tidak memulakan bacaan pada kalimah berikutnya kecuali jika berada di akhir ayat (رأس الآية).<br>
                    <span class="text-xs text-slate-300"><b>Contoh:</b> Surah al-Fatihah: 2</span>
                  </td>
                </tr>
                <tr>
                  <td><b>4. Waqaf Qabih<br>(وقف قبيح)</b></td>
                  <td>Waqaf pada ayat yang mengubah makna sebenar atau tidak sempurna makna kerana mempunyai kaitan dengan kalimah selepasnya dari sudut lafaz dan makna.</td>
                  <td>
                    <b>Cara Bacaan:</b> Tidak harus berhenti pada kalimah tersebut secara sengaja.<br>
                    <span class="text-xs text-amber-200"><b>Contoh:</b> Surah an-Nisa': 43 (<span class="arabic-text">يَـٰأَيُّهَا ٱلَّذِينَ ءَامَنُوا۟ لَا تَقْرَبُوا۟ ٱلصَّلَوٰةَ ...</span> tanpa sambung)</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        `
      },
      {
        id: "t5-p3-u3",
        badge: "UNIT 3",
        title: "Unit 3: Jenis Ibtida' (جنيس ابتداء)",
        contentHtml: `
          <div class="mb-4">
            <p><b>Maksud Ibtida':</b> Memulakan bacaan Al-Quran selepas waqaf.</p>
          </div>

          <div class="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Jenis Ibtida'</th>
                  <th>Maksud & Huraian</th>
                  <th>Hukum</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><b>1. Ibtida' Hasan<br>(ابتداء حسن)</b></td>
                  <td>Memulakan bacaan pada kalimah yang dapat difahami maknanya serta tidak bersalahan dengan maksud yang dikehendaki Allah SWT.</td>
                  <td><span class="badge-tag bg-emerald-800 text-emerald-100 font-bold px-2 py-0.5 text-xs">HARUS</span></td>
                </tr>
                <tr>
                  <td><b>2. Ibtida' Qabih<br>(ابتداء قبيح)</b></td>
                  <td>Memulakan bacaan pada kalimah yang tidak menyampaikan maksud yang sebenar atau boleh mengubah makna yang dikehendaki Allah SWT.</td>
                  <td><span class="badge-tag bg-red-900 text-red-100 font-bold px-2 py-0.5 text-xs">TIDAK HARUS</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        `
      }
    ]
  },
  {
    id: "t5-p4",
    number: 4,
    field: "al-quran",
    fieldLabel: "Bidang Al-Quran",
    title: "Pelajaran 4: Ciri-Ciri Mukmin Berjaya (Surah al-Mu'minun: 1–11)",
    summary: "Hafazan dan kefahaman 7 sifat orang beriman yang mewarisi Syurga Firdaus mengikut Surah al-Mu'minun: 1–11.",
    subtopics: [
      {
        id: "t5-p4-u1",
        badge: "UNIT 1",
        title: "Unit 1: Hafazan Surah Al-Mu'minun (Ayat 1–11)",
        contentHtml: `
          <div class="mb-4">
            <span class="field-label text-xs">PANDUAN HAFAZAN TERTIB & FASIH</span>
            <p class="text-sm text-slate-300 mt-2">
              Unit ini menekankan pembacaan dan hafazan ayat 1 hingga 11 daripada Surah Al-Mu'minun secara betul, lancar, bertajwid, dan fasih.
            </p>
          </div>

          <div class="arabic-box my-4 p-4 bg-[#14243f] border-2 border-[#1c1f24] text-right space-y-3">
            <p class="text-xl leading-loose font-serif text-[#ffd447]" dir="rtl">
              بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
            </p>
            <p class="text-lg leading-loose font-serif text-white" dir="rtl">
              قَدْ أَفْلَحَ الْمُؤْمِنُونَ ﴿١﴾ الَّذِينَ هُمْ فِي صَلَاتِهِمْ خَاشِعُونَ ﴿٢﴾ وَالَّذِينَ هُمْ عَنِ اللَّغْوِ مُعْرِضُونَ ﴿٣﴾ وَالَّذِينَ هُمْ لِلزَّكَاةِ فَاعِلُونَ ﴿٤﴾ وَالَّذِينَ هُمْ لِفُرُوجِهِمْ حَافِظُونَ ﴿٥﴾ إِلَّا عَلَىٰ أَزْوَاجِهِمْ أَوْ مَا مَلَكَتْ أَيْمَانُهُمْ فَإِنَّهُمْ غَيْرُ مَلُومِينَ ﴿٦﴾ فَمَنِ ابْتَغَىٰ وَرَاءَ ذَٰلِكَ فَأُولَـٰئِكَ هُمُ الْعَادُونَ ﴿٧﴾ وَالَّذِينَ هُمْ لِأَمَانَاتِهِمْ وَعَهْدِهِمْ رَاعُونَ ﴿٨﴾ وَالَّذِينَ هُمْ عَلَىٰ صَلَوَاتِهِمْ يُحَافِظُونَ ﴿٩﴾ أُولَـٰئِكَ هُمُ الْوَارِثُونَ ﴿١٠﴾ الَّذِينَ يَرِثُونَ الْفِرْدَوْسَ هُمْ فِيهَا خَالِدُونَ ﴿١١﴾
            </p>
          </div>

          <h4 class="text-base font-bold text-[#ffd447] mt-4 mb-2">Terjemahan Ayat Demi Ayat (Ayat 1–11):</h4>
          <div class="space-y-2 text-sm text-slate-200">
            <div class="p-2.5 bg-[#1f2328] border-l-4 border-[#2fd17a]">
              <strong class="text-amber-300">Ayat 1:</strong> Sesungguhnya berjayalah orang-orang yang beriman,
            </div>
            <div class="p-2.5 bg-[#1f2328] border-l-4 border-[#2fd17a]">
              <strong class="text-amber-300">Ayat 2:</strong> Iaitu mereka yang khusyuk dalam sembahyangnya,
            </div>
            <div class="p-2.5 bg-[#1f2328] border-l-4 border-[#2fd17a]">
              <strong class="text-amber-300">Ayat 3:</strong> Dan mereka yang menjauhkan diri daripada perbuatan dan perkataan yang sia-sia,
            </div>
            <div class="p-2.5 bg-[#1f2328] border-l-4 border-[#2fd17a]">
              <strong class="text-amber-300">Ayat 4:</strong> Dan mereka yang berusaha membersihkan hartanya dengan menunaikan zakat,
            </div>
            <div class="p-2.5 bg-[#1f2328] border-l-4 border-[#2fd17a]">
              <strong class="text-amber-300">Ayat 5:</strong> Dan mereka yang menjaga kehormatannya,
            </div>
            <div class="p-2.5 bg-[#1f2328] border-l-4 border-[#2fd17a]">
              <strong class="text-amber-300">Ayat 6:</strong> Kecuali kepada isterinya atau hamba sahayanya, maka sesungguhnya mereka tidak tercela,
            </div>
            <div class="p-2.5 bg-[#1f2328] border-l-4 border-[#2fd17a]">
              <strong class="text-amber-300">Ayat 7:</strong> Kemudian, sesiapa yang mengingini selain dari yang demikian, maka merekalah orang-orang yang melampaui batas,
            </div>
            <div class="p-2.5 bg-[#1f2328] border-l-4 border-[#2fd17a]">
              <strong class="text-amber-300">Ayat 8:</strong> Dan mereka yang menjaga amanah dan janjinya,
            </div>
            <div class="p-2.5 bg-[#1f2328] border-l-4 border-[#2fd17a]">
              <strong class="text-amber-300">Ayat 9:</strong> Dan mereka yang tetap memelihara sembahyangnya,
            </div>
            <div class="p-2.5 bg-[#1f2328] border-l-4 border-[#2fd17a]">
              <strong class="text-amber-300">Ayat 10:</strong> Mereka itulah orang-orang yang berhak mewarisi,
            </div>
            <div class="p-2.5 bg-[#1f2328] border-l-4 border-[#2fd17a]">
              <strong class="text-amber-300">Ayat 11:</strong> Yang akan mewarisi Syurga Firdaus; mereka kekal di dalamnya.
            </div>
          </div>
        `
      },
      {
        id: "t5-p4-u2",
        badge: "UNIT 2",
        title: "Unit 2: Kefahaman Surah (7 Ciri Mukmin Berjaya)",
        contentHtml: `
          <div class="mb-4">
            <p class="text-sm text-slate-300">
              Dalam ayat 1–11 Surah Al-Mu'minun, Allah SWT menyenaraikan <b>7 ciri utama</b> bagi golongan mukmin yang mendapat kejayaan:
            </p>
          </div>

          <div class="space-y-4">
            <div class="p-4 bg-[#1f2328] border-2 border-[#5e646d]">
              <div class="flex items-center gap-2">
                <span class="badge-tag bg-amber-500 text-stone-900 font-bold px-2 py-0.5 text-xs">CIRI 1</span>
                <h4 class="text-base font-bold text-white">1. Beriman kepada Allah SWT</h4>
              </div>
              <p class="text-sm text-slate-300 mt-2">
                <b>Huraian:</b> Orang yang sentiasa meyakini bahawa Allah SWT sahaja yang berhak disembah dengan melakukan segala suruhan-Nya dan meninggalkan segala larangan-Nya.
              </p>
            </div>

            <div class="p-4 bg-[#1f2328] border-2 border-[#5e646d]">
              <div class="flex items-center gap-2">
                <span class="badge-tag bg-amber-500 text-stone-900 font-bold px-2 py-0.5 text-xs">CIRI 2</span>
                <h4 class="text-base font-bold text-white">2. Khusyuk dalam Solat</h4>
              </div>
              <p class="text-sm text-slate-300 mt-2">
                <b>Huraian:</b> Menumpukan sepenuh hati dan penghayatan dengan cara menenangkan anggota badan, memahami bacaan, serta perbuatan ketika mendirikan solat.
              </p>
            </div>

            <div class="p-4 bg-[#1f2328] border-2 border-[#5e646d]">
              <div class="flex items-center gap-2">
                <span class="badge-tag bg-amber-500 text-stone-900 font-bold px-2 py-0.5 text-xs">CIRI 3</span>
                <h4 class="text-base font-bold text-white">3. Menjauhi Perbuatan dan Perkataan yang Sia-sia</h4>
              </div>
              <p class="text-sm text-slate-300 mt-2">
                <b>Huraian:</b> Menjauhkan diri daripada perbuatan dan perkataan yang tidak mendatangkan faedah atau perkara yang merosakkan akhlak.
              </p>
              
              <div class="grid sm:grid-cols-2 gap-3 mt-3">
                <div class="p-3 bg-[#2d3036] border border-stone-600">
                  <strong class="text-xs text-[#ffd447] block mb-1">Contoh Perbuatan Sia-sia:</strong>
                  <ul class="list-disc pl-4 text-xs text-slate-200 space-y-1">
                    <li>Melepak</li>
                    <li>Merokok</li>
                    <li>Melalaikan masa dengan permainan video</li>
                  </ul>
                </div>

                <div class="p-3 bg-[#2d3036] border border-stone-600">
                  <strong class="text-xs text-[#ffd447] block mb-1">Contoh Perkataan Sia-sia:</strong>
                  <ul class="list-disc pl-4 text-xs text-slate-200 space-y-1">
                    <li>Mencarut</li>
                    <li>Bergosip</li>
                    <li>Berbual kosong ketika belajar</li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="p-4 bg-[#1f2328] border-2 border-[#5e646d]">
              <div class="flex items-center gap-2">
                <span class="badge-tag bg-amber-500 text-stone-900 font-bold px-2 py-0.5 text-xs">CIRI 4</span>
                <h4 class="text-base font-bold text-white">4. Menunaikan Zakat</h4>
              </div>
              <p class="text-sm text-slate-300 mt-2">
                <b>Huraian:</b> Mengeluarkan sebahagian harta tertentu untuk diberikan kepada golongan yang berhak menerima (seperti zakat fitrah dan zakat harta) mengikut syarat syarak.
              </p>
            </div>

            <div class="p-4 bg-[#1f2328] border-2 border-[#5e646d]">
              <div class="flex items-center gap-2">
                <span class="badge-tag bg-amber-500 text-stone-900 font-bold px-2 py-0.5 text-xs">CIRI 5</span>
                <h4 class="text-base font-bold text-white">5. Menjaga Kehormatan Diri</h4>
              </div>
              <p class="text-sm text-slate-300 mt-2">
                <b>Huraian:</b> Menjaga dan mengelakkan diri daripada perkara yang diharamkan oleh syarak seperti zina, sumbang mahram, dan hubungan seks luar tabii.
              </p>
            </div>

            <div class="p-4 bg-[#1f2328] border-2 border-[#5e646d]">
              <div class="flex items-center gap-2">
                <span class="badge-tag bg-amber-500 text-stone-900 font-bold px-2 py-0.5 text-xs">CIRI 6</span>
                <h4 class="text-base font-bold text-white">6. Menjaga Amanah dan Janji</h4>
              </div>
              <p class="text-sm text-slate-300 mt-2">
                <b>Huraian:</b> Menjaga tanggungjawab dalam setiap urusan, seperti dalam urusan pekerjaan, harta benda, kerahsiaan, dan janji.
              </p>
            </div>

            <div class="p-4 bg-[#1f2328] border-2 border-[#5e646d]">
              <div class="flex items-center gap-2">
                <span class="badge-tag bg-amber-500 text-stone-900 font-bold px-2 py-0.5 text-xs">CIRI 7</span>
                <h4 class="text-base font-bold text-white">7. Sentiasa Memelihara Solat</h4>
              </div>
              <p class="text-sm text-slate-300 mt-2">
                <b>Huraian:</b> Menunaikan solat pada waktunya dengan menyempurnakan segala syarat dan rukunnya.
              </p>
            </div>
          </div>

          <!-- Ganjaran Mukmin Berjaya -->
          <div class="mt-6 p-4 bg-[#14243f] border-2 border-[#ffd447]">
            <h4 class="text-base font-bold text-[#ffd447] flex items-center gap-2">
              <span>🟨 Balasan / Ganjaran Mukmin Berjaya</span>
            </h4>
            <p class="text-sm text-slate-200 mt-2 leading-relaxed">
              Golongan yang memenuhi ketujuh-tujuh ciri di atas akan mendapat balasan yang amat mulia di akhirat, iaitu <b>mewarisi Syurga Firdaus</b> dan kekal di dalamnya selama-lamanya.
            </p>
          </div>

          <!-- Pengajaran Ayat -->
          <div class="mt-6 p-4 bg-[#1f2328] border-2 border-[#2fd17a]">
            <h4 class="text-base font-bold text-[#2fd17a] flex items-center gap-2">
              <span>🟧 Pengajaran Ayat (Surah al-Mu'minun: 1–11)</span>
            </h4>
            <p class="text-xs text-slate-300 mt-1 mb-3">Sebagai umat Islam, pengajaran yang boleh diambil daripada ayat ini ialah:</p>
            <ul class="space-y-2 text-sm text-slate-200">
              <li class="flex items-start gap-2">
                <span class="text-[#2fd17a] font-bold">1.</span>
                <span>Kita hendaklah <b>meningkatkan keimanan</b> kepada Allah SWT dengan melaksanakan suruhan-Nya dan meninggalkan larangan-Nya.</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-[#2fd17a] font-bold">2.</span>
                <span>Kita hendaklah <b>menunaikan solat dengan khusyuk</b> agar menjadi hamba yang bertakwa.</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-[#2fd17a] font-bold">3.</span>
                <span>Kita hendaklah <b>menjauhkan diri daripada perbuatan dan perkataan sia-sia</b> untuk meningkatkan kualiti kerja dan masa.</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-[#2fd17a] font-bold">4.</span>
                <span>Kita hendaklah <b>berusaha menunaikan zakat</b> bagi membantu perkembangan ekonomi umat Islam.</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-[#2fd17a] font-bold">5.</span>
                <span>Kita hendaklah <b>menjaga kehormatan diri</b> supaya terpelihara daripada penyakit dan perkara berbahaya.</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-[#2fd17a] font-bold">6.</span>
                <span>Kita hendaklah <b>menjaga amanah dan janji</b> agar integriti Muslim sentiasa terpelihara.</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-[#2fd17a] font-bold">7.</span>
                <span>Kita hendaklah <b>sentiasa memelihara solat</b> untuk melahirkan individu yang berdisiplin.</span>
              </li>
            </ul>
          </div>
        `
      }
    ]
  },
  {
    id: "t5-p5",
    number: 5,
    field: "al-quran",
    fieldLabel: "Bidang Al-Quran",
    title: "Pelajaran 5: Memahami Keutamaan dalam Tindakan (Surah at-Taubah: 19–20)",
    summary: "Konsep Fiqh al-Awwaliyyat (keutamaan tindakan), prinsip asas, sebab turun ayat, bidang pelaksanaan, kepentingan dan pengajaran ayat.",
    subtopics: [
      {
        id: "t5-p5-u1",
        badge: "UNIT 1",
        title: "Unit 1: Maksud & Prinsip Fiqh Al-Awwaliyyat (Fiqh Keutamaan)",
        contentHtml: `
          <div class="space-y-4">
            <div class="p-4 bg-[#1f2328] border-2 border-[#ffd447]">
              <h4 class="text-sm font-bold text-[#ffd447] uppercase tracking-wider mb-1">Maksud Fiqh Al-Awwaliyyat</h4>
              <p class="text-base text-white font-medium">
                <b>Mengutamakan perkara yang sepatutnya didahulukan berdasarkan prinsip syarak.</b>
              </p>
            </div>

            <div class="p-4 bg-[#1f2328] border-2 border-[#5e646d]">
              <h4 class="text-sm font-bold text-white uppercase tracking-wider mb-3 flex items-center gap-2">
                <span class="badge-tag bg-emerald-600 text-white font-bold px-2 py-0.5 text-xs">PRINSIP</span>
                5 Prinsip Asas Fiqh Al-Awwaliyyat
              </h4>
              <div class="grid sm:grid-cols-2 gap-3">
                <div class="p-3 bg-[#2d3036] border border-stone-600 flex items-start gap-2.5">
                  <span class="text-[#ffd447] font-bold text-sm">1.</span>
                  <span class="text-sm text-slate-200">Bersumberkan <b>dalil syarak</b>.</span>
                </div>
                <div class="p-3 bg-[#2d3036] border border-stone-600 flex items-start gap-2.5">
                  <span class="text-[#ffd447] font-bold text-sm">2.</span>
                  <span class="text-sm text-slate-200">Mengutamakan perkara yang <b>diutamakan oleh syarak</b>.</span>
                </div>
                <div class="p-3 bg-[#2d3036] border border-stone-600 flex items-start gap-2.5">
                  <span class="text-[#ffd447] font-bold text-sm">3.</span>
                  <span class="text-sm text-slate-200">Mengambil kira <b>keperluan semasa dan setempat</b>.</span>
                </div>
                <div class="p-3 bg-[#2d3036] border border-stone-600 flex items-start gap-2.5">
                  <span class="text-[#ffd447] font-bold text-sm">4.</span>
                  <span class="text-sm text-slate-200">Mengutamakan keperluan atau <b>manfaat bersama</b> berbanding manfaat peribadi.</span>
                </div>
                <div class="p-3 bg-[#2d3036] border border-stone-600 sm:col-span-2 flex items-start gap-2.5">
                  <span class="text-[#ffd447] font-bold text-sm">5.</span>
                  <span class="text-sm text-slate-200">Mengambil kira <b>tahap keupayaan individu</b>.</span>
                </div>
              </div>
            </div>
          </div>
        `
      },
      {
        id: "t5-p5-u2",
        badge: "UNIT 2",
        title: "Unit 2: Sebab Turun Ayat (Surah at-Taubah: 19–20)",
        contentHtml: `
          <div class="space-y-4">
            <!-- Teks Ayat Quran & Terjemahan -->
            <div class="p-4 bg-[#1f2328] border-2 border-stone-600 space-y-3">
              <span class="badge-tag bg-amber-500 text-stone-900 font-bold px-2 py-0.5 text-xs">SURAH AT-TAUBAH: 19–20</span>
              <p class="font-arabic text-xl md:text-2xl text-amber-200 leading-loose text-right" dir="rtl">
                ۞ أَجَعَلْتُمْ سِقَايَةَ ٱلْحَآجِّ وَعِمَارَةَ ٱلْمَسْجِدِ ٱلْحَرَامِ كَمَنْ ءَامَنَ بِٱللَّهِ وَٱلْيَوْمِ ٱلْـَٔاخِرِ وَجَـٰهَدَ فِى سَبِيلِ ٱللَّهِ ۚ لَا يَسْتَوُۥنَ عِندَ ٱللَّهِ ۗ وَٱللَّهُ لَا يَهْدِى ٱلْقَوْمَ ٱلظَّـٰلِمِينَ ﴿١٩﴾ ٱلَّذِينَ ءَامَنُوا۟ وَهَاجَرُوا۟ وَجَـٰهَدُوا۟ فِى سَبِيلِ ٱللَّهِ بِأَمْوَٰلِهِمْ وَأَنفُسِهِمْ أَعْظَمُ دَرَجَةً عِندَ ٱللَّهِ ۚ وَأُو۟لَـٰٓئِكَ هُمُ ٱلْفَآئِزُونَ ﴿٢٠﴾
              </p>
              <div class="p-3 bg-[#2d3036] border border-stone-600 text-xs text-slate-300 leading-relaxed space-y-1">
                <p><b>Maksud Ayat 19:</b> Adakah kamu menyifatkan perbuatan memberi minum kepada orang-orang yang mengerjakan haji dan memakmurkan Masjid al-Haram itu sama seperti orang yang beriman kepada Allah dan hari akhirat serta berjihad pada jalan Allah? Mereka tidak sama di sisi Allah. Dan Allah tidak memberi petunjuk kepada kaum yang zalim.</p>
                <p><b>Maksud Ayat 20:</b> Orang-orang yang beriman dan berhijrah serta berjihad pada jalan Allah dengan harta benda dan jiwa mereka adalah lebih besar darjatnya di sisi Allah; dan mereka itulah orang-orang yang berjaya.</p>
              </div>
            </div>

            <!-- Asbabun Nuzul -->
            <div class="p-4 bg-[#1f2328] border-2 border-[#5e646d]">
              <h4 class="text-sm font-bold text-[#ffd447] uppercase tracking-wider mb-2">Riwayat Sebab Turun Ayat</h4>
              <p class="text-sm text-slate-300 leading-relaxed">
                Menurut <b>Nu'man bin Bashir RA</b>, beberapa orang sahabat telah berbincang tentang amalan yang mereka utamakan selepas Pembukaan Kota Mekah:
              </p>
              <div class="mt-3 p-3 bg-[#2d3036] border-l-4 border-[#ffd447] text-sm text-slate-200 space-y-2">
                <p>• Ada sahabat yang mengutamakan <b>memberi minum kepada orang yang menunaikan haji</b>.</p>
                <p>• Ada sahabat yang mengutamakan <b>memakmurkan Masjid al-Haram</b>.</p>
                <p>• Ada sahabat yang mengutamakan <b>berjihad di jalan Allah SWT</b>.</p>
              </div>
              <p class="text-sm text-slate-300 mt-3 leading-relaxed">
                Percakapan mereka ditegur oleh <b>Saidina Umar bin al-Khattab RA</b>. Beliau kemudian mengadu hal ini kepada Rasulullah SAW, lalu turunlah ayat 19–20 Surah At-Taubah untuk menjelaskan <b>keutamaan beriman dan berjihad</b> berbanding sekadar memberi minum jemaah haji atau memakmurkan masjid tanpa asas keimanan yang kukuh.
              </p>
            </div>
          </div>
        `
      },
      {
        id: "t5-p5-u3",
        badge: "UNIT 3",
        title: "Unit 3: Bidang Pelaksanaan Fiqh Al-Awwaliyyat",
        contentHtml: `
          <div class="space-y-4">
            <p class="text-sm text-slate-300">
              Pelaksanaan Fiqh al-Awwaliyyat merangkumi 3 bidang utama:
            </p>

            <!-- 3.1 Ilmu dan Pemikiran -->
            <div class="p-4 bg-[#1f2328] border-2 border-[#5e646d]">
              <div class="flex items-center gap-2 mb-2">
                <span class="badge-tag bg-blue-600 text-white font-bold px-2 py-0.5 text-xs">UNIT 3.1</span>
                <h4 class="text-base font-bold text-white">Bidang Ilmu dan Pemikiran</h4>
              </div>
              <div class="p-3 bg-[#2d3036] border border-stone-600 mb-3">
                <strong class="text-xs text-[#ffd447] uppercase block mb-1">Prinsip Am:</strong>
                <p class="text-sm text-slate-200">
                  Mengutamakan usaha menuntut ilmu dan kefahaman berbanding dengan amalan.
                </p>
              </div>
              <div class="p-3 bg-[#2d3036] border-l-4 border-blue-500">
                <strong class="text-xs text-blue-300 uppercase block mb-1">Aplikasi / Contoh:</strong>
                <p class="text-sm text-slate-200">
                  Mengutamakan ilmu <b>Fardu Ain</b> berbanding ilmu <b>Fardu Kifayah</b>.
                </p>
              </div>
            </div>

            <!-- 3.2 Amalan -->
            <div class="p-4 bg-[#1f2328] border-2 border-[#5e646d]">
              <div class="flex items-center gap-2 mb-2">
                <span class="badge-tag bg-emerald-600 text-white font-bold px-2 py-0.5 text-xs">UNIT 3.2</span>
                <h4 class="text-base font-bold text-white">Bidang Amalan</h4>
              </div>
              <div class="p-3 bg-[#2d3036] border border-stone-600 mb-3">
                <strong class="text-xs text-[#ffd447] uppercase block mb-1">Prinsip Am:</strong>
                <p class="text-sm text-slate-200">
                  Mengutamakan amalan yang banyak manfaat berbanding dengan amalan yang kurang bermanfaat.
                </p>
              </div>
              <div class="p-3 bg-[#2d3036] border-l-4 border-emerald-500 space-y-2">
                <strong class="text-xs text-emerald-300 uppercase block mb-1">Aplikasi / Contoh:</strong>
                <p class="text-sm text-slate-200">
                  1. Mengutamakan amalan yang memberi manfaat kepada masyarakat berbanding amalan yang berkesan kepada individu sahaja <i>(contoh: bersedekah atau aktiviti kemasyarakatan berbanding amalan sunat peribadi)</i>.
                </p>
                <p class="text-sm text-slate-200">
                  2. Mengutamakan aktiviti kemasyarakatan berbanding ibadah sunat peribadi.
                </p>
              </div>
            </div>

            <!-- 3.3 Tuntutan Syarak -->
            <div class="p-4 bg-[#1f2328] border-2 border-[#5e646d]">
              <div class="flex items-center gap-2 mb-2">
                <span class="badge-tag bg-amber-600 text-white font-bold px-2 py-0.5 text-xs">UNIT 3.3</span>
                <h4 class="text-base font-bold text-white">Bidang Tuntutan Syarak</h4>
              </div>
              <div class="p-3 bg-[#2d3036] border border-stone-600 mb-3">
                <strong class="text-xs text-[#ffd447] uppercase block mb-1">Prinsip Am:</strong>
                <p class="text-sm text-slate-200">
                  Mengutamakan perkara pokok (<i>Usul</i>) berbanding perkara cabang (<i>Furu'</i>).
                </p>
              </div>
              <div class="p-3 bg-[#2d3036] border-l-4 border-amber-500 space-y-2">
                <strong class="text-xs text-amber-300 uppercase block mb-1">Aplikasi / Contoh:</strong>
                <p class="text-sm text-slate-200">
                  1. <b>Fardu Ain vs Fardu Kifayah:</b> Mengutamakan amalan Fardu Ain berbanding Fardu Kifayah <i>(contoh: menunaikan zakat yang wajib sebelum bersedekah)</i>.
                </p>
                <p class="text-sm text-slate-200">
                  2. <b>Fardu vs Sunat:</b> Mengutamakan amalan fardu berbanding amalan sunat <i>(contoh: membantu ibu bapa berbanding beriktikaf)</i>.
                </p>
                <p class="text-sm text-slate-200">
                  3. <b>Akidah vs Syariat Cabang:</b> Menguasai asas akidah Islam terlebih dahulu berbanding mempelajari isu-isu cabang fikah.
                </p>
              </div>
            </div>
          </div>
        `
      },
      {
        id: "t5-p5-u4",
        badge: "UNIT 4",
        title: "Unit 4: Kepentingan Fiqh Al-Awwaliyyat",
        contentHtml: `
          <div class="p-4 bg-[#1f2328] border-2 border-[#5e646d]">
            <h4 class="text-sm font-bold text-white uppercase tracking-wider mb-3">
              6 Kepentingan Fiqh Al-Awwaliyyat Terhadap Individu & Masyarakat
            </h4>
            <div class="grid sm:grid-cols-2 gap-3">
              <div class="p-3 bg-[#2d3036] border border-stone-600 flex items-start gap-2.5">
                <span class="text-[#ffd447] font-bold text-sm">1.</span>
                <span class="text-sm text-slate-200">Memastikan <b>tindakan manusia terkawal dan sistematik</b>.</span>
              </div>
              <div class="p-3 bg-[#2d3036] border border-stone-600 flex items-start gap-2.5">
                <span class="text-[#ffd447] font-bold text-sm">2.</span>
                <span class="text-sm text-slate-200">Membuahkan <b>hasil kerja yang berkualiti dan efektif</b>.</span>
              </div>
              <div class="p-3 bg-[#2d3036] border border-stone-600 flex items-start gap-2.5">
                <span class="text-[#ffd447] font-bold text-sm">3.</span>
                <span class="text-sm text-slate-200">Mengamalkan semua tuntutan Islam mengikut <b>susunan yang tepat</b>.</span>
              </div>
              <div class="p-3 bg-[#2d3036] border border-stone-600 flex items-start gap-2.5">
                <span class="text-[#ffd447] font-bold text-sm">4.</span>
                <span class="text-sm text-slate-200">Mewujudkan <b>kesejahteraan sosial</b> dalam melestarikan pengurusan kehidupan.</span>
              </div>
              <div class="p-3 bg-[#2d3036] border border-stone-600 flex items-start gap-2.5">
                <span class="text-[#ffd447] font-bold text-sm">5.</span>
                <span class="text-sm text-slate-200">Membimbing kehidupan masyarakat dalam <b>pelaksanaan tuntutan syariat</b>.</span>
              </div>
              <div class="p-3 bg-[#2d3036] border border-stone-600 flex items-start gap-2.5">
                <span class="text-[#ffd447] font-bold text-sm">6.</span>
                <span class="text-sm text-slate-200">Mewujudkan masyarakat yang berjaya <b>menguruskan sistem kehidupan yang cekap</b>.</span>
              </div>
            </div>
          </div>
        `
      },
      {
        id: "t5-p5-u5",
        badge: "UNIT 5",
        title: "Unit 5: Pengajaran Ayat (Surah at-Taubah: 19–20)",
        contentHtml: `
          <div class="p-4 bg-[#1f2328] border-2 border-[#2fd17a]">
            <h4 class="text-base font-bold text-[#2fd17a] mb-3">
              Sebagai umat Islam, kita hendaklah:
            </h4>
            <ul class="space-y-3 text-sm text-slate-200">
              <li class="flex items-start gap-2.5 p-2 bg-[#2d3036] border border-stone-600">
                <span class="text-[#2fd17a] font-bold text-base">1.</span>
                <span>Sentiasa <b>meningkatkan keimanan</b> kepada Allah SWT dan hari akhirat kerana keimanan ialah kunci penerimaan segala ibadah.</span>
              </li>
              <li class="flex items-start gap-2.5 p-2 bg-[#2d3036] border border-stone-600">
                <span class="text-[#2fd17a] font-bold text-base">2.</span>
                <span>Sentiasa <b>berazam untuk berjihad</b> dengan tenaga dan harta supaya mendapat ganjaran yang besar di sisi Allah SWT.</span>
              </li>
              <li class="flex items-start gap-2.5 p-2 bg-[#2d3036] border border-stone-600">
                <span class="text-[#2fd17a] font-bold text-base">3.</span>
                <span>Sentiasa <b>berhijrah kepada yang lebih baik</b> supaya menjadi insan yang produktif.</span>
              </li>
              <li class="flex items-start gap-2.5 p-2 bg-[#2d3036] border border-stone-600">
                <span class="text-[#2fd17a] font-bold text-base">4.</span>
                <span>Sentiasa <b>berlumba-lumba melakukan kebaikan</b> kerana kebaikan itu akan diberi ganjaran pada hari akhirat.</span>
              </li>
            </ul>
          </div>
        `
      }
    ]
  },
  {
    id: "t5-p6",
    number: 6,
    field: "al-quran",
    fieldLabel: "Bidang Al-Quran (Kefahaman)",
    title: "Pelajaran 6: Kepelbagaian Bangsa dalam Islam (Surah Al-Hujurat: 13)",
    summary: "Hikmah kepelbagaian bangsa dan kabilah untuk saling mengenali (li-ta'arafu), keutamaan takwa, serta penolakan diskriminasi perkauman.",
    subtopics: [
      {
        id: "t5-p6-u1",
        badge: "UNIT 1",
        title: "Unit 1: Teks & Terjemahan Ayat (Surah Al-Hujurat: 13)",
        contentHtml: `
          <div class="space-y-4">
            <div class="p-4 bg-[#1f2328] border-2 border-stone-600 space-y-3">
              <span class="badge-tag bg-amber-500 text-stone-900 font-bold px-2 py-0.5 text-xs">SURAH AL-HUJURAT: 13</span>
              <p class="font-arabic text-xl md:text-2xl text-amber-200 leading-loose text-right" dir="rtl">
                يَـٰٓأَيُّهَا ٱلنَّاسُ إِنَّا خَلَقْنَـٰكُم مِّن ذَكَرٍۢ وَأُنثَىٰ وَجَعَلْنَـٰكُمْ شُعُوبًۭا وَقَبَآئِلَ لِتَعَارَفُوٓا۟ ۚ إِنَّ أَكْرَمَكُمْ عِندَ ٱللَّهِ أَتْقَىٰكُمْ ۚ إِنَّ ٱللَّهَ عَلِيمٌ خَبِيرٌۭ ﴿١٣﴾
              </p>
              <div class="p-3 bg-[#2d3036] border border-stone-600 text-sm text-slate-200 leading-relaxed">
                <blockquote class="italic border-l-4 border-[#ffd447] pl-3 py-1">
                  "Wahai manusia! Sesungguhnya Kami telah menciptakan kamu daripada lelaki dan perempuan, dan Kami telah menjadikan kamu pelbagai bangsa dan bersuku-puak supaya kamu saling kenal-mengenali. Sesungguhnya orang yang paling mulia di sisi Allah dalam kalangan kamu ialah orang yang paling bertakwa. Sesungguhnya Allah Maha Mengetahui, lagi Maha Mendalam Pengetahuan-Nya."
                </blockquote>
              </div>
            </div>
          </div>
        `
      },
      {
        id: "t5-p6-u2",
        badge: "UNIT 2",
        title: "Unit 2: Sebab Turun Ayat (Asbabun Nuzul)",
        contentHtml: `
          <div class="p-4 bg-[#1f2328] border-2 border-[#5e646d] space-y-3">
            <h4 class="text-sm font-bold text-[#ffd447] uppercase tracking-wider">Peristiwa Semasa Pembukaan Kota Mekah (Fath Makkah)</h4>
            <div class="space-y-2.5 text-sm text-slate-200 leading-relaxed">
              <p class="flex items-start gap-2">
                <span class="text-[#ffd447] font-bold">•</span>
                <span>Menurut <b>Ibn Abbas RA</b>, Rasulullah SAW telah meminta <b>Saidina Bilal bin Rabah RA</b> melaungkan azan semasa Pembukaan Kota Mekah.</span>
              </p>
              <p class="flex items-start gap-2">
                <span class="text-[#ffd447] font-bold">•</span>
                <span>Terdapat sebilangan sahabat yang memandang rendah kepada Saidina Bilal RA disebabkan latar belakang beliau (berkulit hitam dan bekas hamba).</span>
              </p>
              <p class="flex items-start gap-2">
                <span class="text-[#ffd447] font-bold">•</span>
                <span>Malaikat Jibril AS memberitahu Rasulullah SAW tentang perbuatan dan perbualan para sahabat tersebut.</span>
              </p>
              <p class="flex items-start gap-2">
                <span class="text-[#ffd447] font-bold">•</span>
                <span>Rasulullah SAW kemudian memanggil mereka dan bertanyakan tentang tindakan mereka, lalu turunlah ayat 13 Surah Al-Hujurat ini bagi menegaskan bahawa kemuliaan manusia terletak pada ketakwaan, bukannya rupa paras atau keturunan.</span>
              </p>
            </div>
          </div>
        `
      },
      {
        id: "t5-p6-u3",
        badge: "UNIT 3",
        title: "Unit 3: Kandungan & Tuntutan Ayat",
        contentHtml: `
          <div class="space-y-4">
            <!-- 3.1 Tuntutan Saling Mengenali -->
            <div class="p-4 bg-[#1f2328] border-2 border-[#5e646d]">
              <div class="flex items-center gap-2 mb-3">
                <span class="badge-tag bg-blue-600 text-white font-bold px-2 py-0.5 text-xs">UNIT 3.1</span>
                <h4 class="text-base font-bold text-white">Tuntutan Saling Mengenali dalam Kalangan Pelbagai Bangsa</h4>
              </div>
              <div class="grid sm:grid-cols-2 gap-3">
                <div class="p-3 bg-[#2d3036] border border-stone-600 space-y-1">
                  <strong class="text-sm text-[#ffd447] block">1. Menjalin Perpaduan</strong>
                  <p class="text-xs text-slate-200">Mewujudkan perpaduan dan hubungan yang harmoni dalam masyarakat.</p>
                </div>
                <div class="p-3 bg-[#2d3036] border border-stone-600 space-y-1">
                  <strong class="text-sm text-[#ffd447] block">2. Mengiktiraf Kemuliaan Manusia</strong>
                  <p class="text-xs text-slate-200">Mengiktiraf kemuliaan dan harga diri manusia tanpa mengira rupa paras dan etnik.</p>
                </div>
                <div class="p-3 bg-[#2d3036] border border-stone-600 space-y-1">
                  <strong class="text-sm text-[#ffd447] block">3. Hubungan dengan Bukan Muslim</strong>
                  <p class="text-xs text-slate-200">Menjalin hubungan yang baik dengan orang bukan Islam selagi mereka tidak memusuhi Islam.</p>
                </div>
                <div class="p-3 bg-[#2d3036] border border-stone-600 space-y-1">
                  <strong class="text-sm text-[#ffd447] block">4. Saling Melengkapi</strong>
                  <p class="text-xs text-slate-200">Mengukuhkan interaksi dan kerjasama yang saling melengkapi antara satu sama lain.</p>
                </div>
              </div>
            </div>

            <!-- 3.2 Keutamaan Takwa -->
            <div class="p-4 bg-[#1f2328] border-2 border-[#5e646d]">
              <div class="flex items-center gap-2 mb-3">
                <span class="badge-tag bg-amber-600 text-white font-bold px-2 py-0.5 text-xs">UNIT 3.2</span>
                <h4 class="text-base font-bold text-white">Keutamaan Takwa Sebagai Kayu Ukur Kemuliaan</h4>
              </div>
              <div class="grid sm:grid-cols-2 gap-3">
                <div class="p-3 bg-[#2d3036] border border-stone-600 space-y-1">
                  <strong class="text-sm text-[#2fd17a] block">1. Penyamaan Taraf Manusia</strong>
                  <p class="text-xs text-slate-200">Semua manusia adalah sama di sisi Allah SWT tanpa mengira bangsa atau keturunan.</p>
                </div>
                <div class="p-3 bg-[#2d3036] border border-stone-600 space-y-1">
                  <strong class="text-sm text-[#2fd17a] block">2. Ukuran Kemuliaan Sebenar</strong>
                  <p class="text-xs text-slate-200">Allah SWT tidak melihat jantina atau bangsa, sebaliknya menilai hati dan amalan hamba-Nya.</p>
                </div>
                <div class="p-3 bg-[#2d3036] border border-stone-600 space-y-1">
                  <strong class="text-sm text-[#2fd17a] block">3. Meyakini Kekuasaan Allah</strong>
                  <p class="text-xs text-slate-200">Meyakini kekuasaan Allah SWT melalui kepelbagaian makhluk ciptaan-Nya sebagai asas keimanan.</p>
                </div>
                <div class="p-3 bg-[#2d3036] border border-stone-600 space-y-1">
                  <strong class="text-sm text-[#2fd17a] block">4. Menunaikan Hak Sesama Manusia</strong>
                  <p class="text-xs text-slate-200">Menunaikan hak sesama manusia walaupun berbeza kaum dan budaya kerana ia merupakan perintah Allah SWT.</p>
                </div>
              </div>
            </div>
          </div>
        `
      },
      {
        id: "t5-p6-u4",
        badge: "UNIT 4",
        title: "Unit 4: Pengajaran Ayat (Surah Al-Hujurat: 13)",
        contentHtml: `
          <div class="p-4 bg-[#1f2328] border-2 border-[#2fd17a]">
            <h4 class="text-base font-bold text-[#2fd17a] mb-3">
              Sebagai umat Islam, kita hendaklah:
            </h4>
            <ul class="space-y-3 text-sm text-slate-200">
              <li class="flex items-start gap-2.5 p-3 bg-[#2d3036] border border-stone-600">
                <span class="text-[#2fd17a] font-bold text-base">1.</span>
                <span><b>Saling bekerjasama</b> untuk membina kehidupan yang harmoni dan sejahtera.</span>
              </li>
              <li class="flex items-start gap-2.5 p-3 bg-[#2d3036] border border-stone-600">
                <span class="text-[#2fd17a] font-bold text-base">2.</span>
                <span><b>Menghormati kepelbagaian budaya</b> supaya wujud persefahaman dan saling bertoleransi dalam kalangan masyarakat.</span>
              </li>
              <li class="flex items-start gap-2.5 p-3 bg-[#2d3036] border border-stone-600">
                <span class="text-[#2fd17a] font-bold text-base">3.</span>
                <span><b>Berusaha membaiki akhlak</b> supaya menjadi insan yang bertakwa dan mulia di sisi Allah SWT.</span>
              </li>
            </ul>
          </div>
        `
      }
    ]
  },

  // ==========================================
  // 2. BIDANG HADIS
  // ==========================================
  {
    id: "t5-p7",
    number: 7,
    field: "hadis",
    fieldLabel: "Bidang Hadis",
    title: "Pelajaran 7: Setiap Orang Ialah Pemimpin",
    summary: "Hadis tanggungjawab kepimpinan diri, keluarga, majikan, pekerja, dan anak berpandukan riwayat Abdullah bin Umar RA.",
    subtopics: [
      {
        id: "t5-p7-u1",
        badge: "UNIT 1",
        title: "Unit 1: Pengenalan & Perawi Hadis",
        contentHtml: `
          <div class="space-y-4">
            <div class="p-4 bg-[#1f2328] border-2 border-[#5e646d]">
              <div class="flex items-center gap-2 mb-2">
                <span class="badge-tag bg-amber-600 text-white font-bold px-2 py-0.5 text-xs">PERAWI HADIS</span>
                <h4 class="text-sm font-bold text-white uppercase tracking-wider">Diriwayatkan daripada Abdullah bin Umar RA (Riwayat al-Bukhari)</h4>
              </div>
              <p class="text-sm text-slate-300 leading-relaxed">
                Hadis ini merupakan teks rujukan utama dalam pembentukan keperibadian Muslim yang bertanggungjawab, berdisiplin, dan berintegriti terhadap peranan masing-masing dalam masyarakat.
              </p>
            </div>

            <div class="p-4 bg-[#2d3036] border-2 border-[#ffd447]">
              <h4 class="text-sm font-bold text-[#ffd447] mb-2 flex items-center gap-2">
                <span>👑</span>
                <span>Maksud Inti Hadis</span>
              </h4>
              <p class="text-sm text-slate-100 leading-relaxed">
                Rasulullah SAW menegaskan bahawa <b>setiap individu dalam masyarakat</b>, tanpa mengira kedudukan mahupun pangkat, merupakan <b>seorang pemimpin yang memikul amanah</b> serta <b>akan dipertanggungjawabkan di akhirat kelak</b> atas kepimpinannya.
              </p>
            </div>
          </div>
        `
      },
      {
        id: "t5-p7-u2",
        badge: "UNIT 2",
        title: "Unit 2: Teks Matan dan Maksud Hadis",
        contentHtml: `
          <div class="space-y-4">
            <!-- Teks Matan Arab Hadis -->
            <div class="p-4 bg-[#1f2328] border-2 border-[#ffd447] space-y-3">
              <div class="flex items-center justify-between flex-wrap gap-2">
                <span class="badge-tag bg-amber-500 text-stone-900 font-bold px-2 py-0.5 text-xs">TEKS MATAN HADIS</span>
                <span class="text-xs bg-[#2b1a0c] text-amber-200 px-2 py-0.5 border border-amber-700">Riwayat al-Bukhari</span>
              </div>
              <p class="font-arabic text-xl md:text-2xl text-amber-200 leading-loose text-right" dir="rtl">
                كُلُّكُمْ رَاعٍ وَكُلُّكُمْ مَسْؤُولٌ عَنْ رَعِيَّتِهِ، الإِمَامُ رَاعٍ وَمَسْؤُولٌ عَنْ رَعِيَّتِهِ، وَالرَّجُلُ رَاعٍ فِي أَهْلِهِ وَهُوَ مَسْؤُولٌ عَنْ رَعِيَّتِهِ، وَالْمَرْأَةُ رَاعِيَةٌ فِي بَيْتِ زَوْجِهَا وَمَسْؤُولَةٌ عَنْ رَعِيَّتِهَا، وَالْخَادِمُ رَاعٍ فِي مَالِ سَيِّدِهِ وَمَسْؤُولٌ عَنْ رَعِيَّتِهِ، وَالرَّجُلُ رَاعٍ فِي مَالِ أَبِيهِ وَمَسْؤُولٌ عَنْ رَعِيَّتِهِ
              </p>
            </div>

            <!-- Maksud Hadis -->
            <div class="p-4 bg-[#2d3036] border-2 border-stone-600">
              <h4 class="text-sm font-bold text-white uppercase tracking-wider mb-2 flex items-center gap-2">
                <span class="text-emerald-400">📖</span>
                <span>Terjemahan / Maksud Hadis:</span>
              </h4>
              <p class="text-sm text-slate-200 leading-relaxed">
                <i>"Setiap kamu ialah pemimpin, dan setiap kamu bertanggungjawab atas kepimpinannya. Imam (pemimpin) itu ialah pemimpin dan bertanggungjawab atas pimpinannya. Lelaki (suami) itu ialah pemimpin dalam keluarganya dan bertanggungjawab atas pimpinannya. Perempuan (isteri) itu ialah pemimpin dalam rumah suaminya dan bertanggungjawab atas pimpinannya. Pekerja itu ialah pemimpin bagi harta majikannya dan bertanggungjawab atas pimpinannya. Anak lelaki itu ialah pemimpin bagi harta bapanya dan bertanggungjawab atas pimpinannya."</i>
              </p>
            </div>
          </div>
        `
      },
      {
        id: "t5-p7-u3",
        badge: "UNIT 3",
        title: "Unit 3: Tanggungjawab Setiap Kategori Pemimpin",
        contentHtml: `
          <div class="space-y-4">
            <!-- i. Tanggungjawab Pemimpin (Imam) -->
            <div class="p-4 bg-[#1f2328] border-2 border-[#ffd447]">
              <div class="flex items-center gap-2 mb-2">
                <span class="badge-tag bg-[#ffd447] text-black font-extrabold px-2 py-0.5 text-xs">KATEGORI 1</span>
                <h4 class="text-base font-bold text-white">i. Tanggungjawab Pemimpin (Imam)</h4>
              </div>
              <ul class="space-y-1.5 text-sm text-slate-200 mt-3 list-disc list-inside">
                <li><b>Berlaku adil</b> dan menghapuskan kezaliman.</li>
                <li><b>Menegakkan syariat</b> Islam.</li>
                <li><b>Menyusun sistem pentadbiran</b> yang cekap dan amanah.</li>
                <li><b>Menyediakan infrastruktur</b> yang lengkap untuk rakyat.</li>
                <li><b>Bersikap toleransi</b> terhadap orang di bawah pimpinannya.</li>
              </ul>
            </div>

            <!-- ii. Tanggungjawab Suami -->
            <div class="p-4 bg-[#1f2328] border-2 border-[#2fd17a]">
              <div class="flex items-center gap-2 mb-2">
                <span class="badge-tag bg-[#2fd17a] text-black font-extrabold px-2 py-0.5 text-xs">KATEGORI 2</span>
                <h4 class="text-base font-bold text-white">ii. Tanggungjawab Suami</h4>
              </div>
              <ul class="space-y-1.5 text-sm text-slate-200 mt-3 list-disc list-inside">
                <li><b>Memberikan nafkah</b> (zahir dan batin) kepada anggota keluarga.</li>
                <li><b>Memberikan didikan agama</b> kepada isteri dan anak-anak.</li>
                <li><b>Memberikan perlindungan</b> dan menjaga keselamatan anggota keluarga.</li>
                <li><b>Melayani dan bergaul</b> dengan isteri dan anak-anak secara baik.</li>
              </ul>
            </div>

            <!-- iii. Tanggungjawab Isteri -->
            <div class="p-4 bg-[#1f2328] border-2 border-rose-500">
              <div class="flex items-center gap-2 mb-2">
                <span class="badge-tag bg-rose-500 text-white font-extrabold px-2 py-0.5 text-xs">KATEGORI 3</span>
                <h4 class="text-base font-bold text-white">iii. Tanggungjawab Isteri</h4>
              </div>
              <ul class="space-y-1.5 text-sm text-slate-200 mt-3 list-disc list-inside">
                <li><b>Mentaati suami</b> dan menunaikan hak-haknya.</li>
                <li><b>Menjaga maruah diri</b>, suami, dan keluarga.</li>
                <li><b>Memelihara dan mendidik</b> anak-anak.</li>
                <li><b>Menguruskan hal ehwal rumah tangga</b> dengan baik.</li>
              </ul>
            </div>

            <!-- iv. Tanggungjawab Pekerja -->
            <div class="p-4 bg-[#1f2328] border-2 border-cyan-400">
              <div class="flex items-center gap-2 mb-2">
                <span class="badge-tag bg-cyan-400 text-black font-extrabold px-2 py-0.5 text-xs">KATEGORI 4</span>
                <h4 class="text-base font-bold text-white">iv. Tanggungjawab Pekerja</h4>
              </div>
              <ul class="space-y-1.5 text-sm text-slate-200 mt-3 list-disc list-inside">
                <li><b>Mengikut arahan</b> ketua atau majikan.</li>
                <li><b>Bekerja dengan penuh integriti</b>.</li>
                <li><b>Bekerja mengikut prosedur</b> yang telah ditetapkan.</li>
                <li><b>Melaksanakan tugas</b> dengan sempurna dan cekap.</li>
              </ul>
            </div>

            <!-- v. Tanggungjawab Anak -->
            <div class="p-4 bg-[#1f2328] border-2 border-purple-400">
              <div class="flex items-center gap-2 mb-2">
                <span class="badge-tag bg-purple-400 text-white font-extrabold px-2 py-0.5 text-xs">KATEGORI 5</span>
                <h4 class="text-base font-bold text-white">v. Tanggungjawab Anak</h4>
              </div>
              <ul class="space-y-1.5 text-sm text-slate-200 mt-3 list-disc list-inside">
                <li><b>Berbakti kepada ibu bapa</b> semasa mereka hidup atau setelah meninggal dunia.</li>
                <li><b>Sentiasa mendoakan</b> kebaikan untuk ibu bapa.</li>
                <li><b>Sentiasa membantu</b> ibu bapa dengan sebaik-baiknya.</li>
                <li><b>Mengeratkan hubungan silaturahim</b> dengan rakan-rakan ibu bapa.</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "t5-p7-u4",
        badge: "UNIT 4",
        title: "Unit 4: Pengajaran Hadis",
        contentHtml: `
          <div class="p-4 bg-[#1f2328] border-2 border-[#2fd17a]">
            <h4 class="text-base font-bold text-[#2fd17a] mb-3">
              Sebagai umat Islam, kita hendaklah:
            </h4>
            <div class="space-y-2.5 text-xs sm:text-sm text-slate-200">
              <div class="p-2.5 bg-[#2d3036] border border-stone-600 flex items-start gap-2.5">
                <span class="text-[#ffd447] font-bold text-base">1.</span>
                <span>Menyedari bahawa <b>setiap individu berperanan sebagai pemimpin</b> yang akan disoal dan dipertanggungjawabkan di akhirat kelak.</span>
              </div>
              <div class="p-2.5 bg-[#2d3036] border border-stone-600 flex items-start gap-2.5">
                <span class="text-[#ffd447] font-bold text-base">2.</span>
                <span>Menjalankan <b>tanggungjawab terhadap orang yang dipimpin dengan adil dan amanah</b>.</span>
              </div>
              <div class="p-2.5 bg-[#2d3036] border border-stone-600 flex items-start gap-2.5">
                <span class="text-[#ffd447] font-bold text-base">3.</span>
                <span>Memelihara dan <b>melindungi anggota keluarga</b> agar selamat di dunia dan akhirat.</span>
              </div>
              <div class="p-2.5 bg-[#2d3036] border border-stone-600 flex items-start gap-2.5">
                <span class="text-[#ffd447] font-bold text-base">4.</span>
                <span>Bertanggungjawab terhadap <b>segala urusan keluarga dan rumah tangga</b> agar kekal harmoni.</span>
              </div>
              <div class="p-2.5 bg-[#2d3036] border border-stone-600 flex items-start gap-2.5">
                <span class="text-[#ffd447] font-bold text-base">5.</span>
                <span>Bersikap <b>amanah dalam pekerjaan</b> supaya rezeki yang diperoleh diberkati Allah SWT.</span>
              </div>
              <div class="p-2.5 bg-[#2d3036] border border-stone-600 flex items-start gap-2.5">
                <span class="text-[#ffd447] font-bold text-base">6.</span>
                <span><b>Berbakti kepada ibu bapa</b> kerana jasa mereka tidak terbalas.</span>
              </div>
              <div class="p-2.5 bg-[#2d3036] border border-stone-600 flex items-start gap-2.5">
                <span class="text-[#ffd447] font-bold text-base">7.</span>
                <span><b>Mencontohi sunnah Rasulullah SAW</b> dalam segala aspek kepimpinan kerana baginda ialah contoh ikutan yang terbaik.</span>
              </div>
            </div>
          </div>
        `
      }
    ]
  },
  {
    id: "t5-p8",
    number: 8,
    field: "hadis",
    fieldLabel: "Bidang Hadis",
    title: "Pelajaran 8: Tujuh Golongan yang Mendapat Naungan Allah SWT",
    summary: "Hadis naungan perlindungan di Padang Mahsyar bagi 7 kategori insan bertakwa riwayat Abu Hurairah RA.",
    subtopics: [
      {
        id: "t5-p8-u1",
        badge: "UNIT 1",
        title: "Unit 1: Pengenalan & Maksud Naungan Allah SWT",
        contentHtml: `
          <div class="space-y-4">
            <div class="p-4 bg-[#1f2328] border-2 border-[#5e646d]">
              <div class="flex items-center gap-2 mb-2">
                <span class="badge-tag bg-amber-600 text-white font-bold px-2 py-0.5 text-xs">PERAWI HADIS</span>
                <h4 class="text-sm font-bold text-white uppercase tracking-wider">Diriwayatkan daripada Abu Hurairah RA (Muttafaq 'Alaih)</h4>
              </div>
              <p class="text-sm text-slate-300 leading-relaxed">
                Hadis ini merupakan antara hadis yang sangat agung dalam menggambarkan keadilan dan kasih sayang Allah SWT kepada hamba-hamba-Nya yang istiqamah dalam ketaatan.
              </p>
            </div>

            <div class="p-4 bg-[#2d3036] border-2 border-[#ffd447]">
              <h4 class="text-sm font-bold text-[#ffd447] mb-2 flex items-center gap-2">
                <span>🛡️</span>
                <span>Maksud Naungan Allah SWT di Padang Mahsyar</span>
              </h4>
              <p class="text-sm text-slate-200 leading-relaxed">
                Mengikut penjelasan kitab <b>Fath al-Bari</b> karangan al-Hafiz Ibn Hajar al-'Asqalani, naungan Allah SWT bermaksud:
              </p>
              <div class="p-3 bg-[#1f2328] border-l-4 border-[#2fd17a] mt-2 text-white font-medium text-sm">
                "Mendapat perlindungan daripada kepanasan cahaya matahari di Padang Mahsyar pada hari yang tiada sebarang naungan melainkan naungan-Nya."
              </div>
            </div>
          </div>
        `
      },
      {
        id: "t5-p8-u2",
        badge: "UNIT 2",
        title: "Unit 2: Terjemahan & Potongan Hadis (Jadual Hafazan)",
        contentHtml: `
          <div class="p-4 bg-[#1f2328] border-2 border-[#5e646d] space-y-3">
            <div class="flex items-center justify-between flex-wrap gap-2">
              <h4 class="text-sm font-bold text-[#ffd447] uppercase tracking-wider">
                Jadual 7 Golongan yang Mendapat Naungan Allah SWT
              </h4>
              <span class="text-xs bg-[#2b1a0c] text-amber-200 px-2 py-0.5 border border-amber-700">Fokus Hafazan SPM</span>
            </div>
            <p class="text-xs text-slate-300">
              Berikut ialah teks potongan hadis mengikut tertib berserta terjemahannya untuk hafazan pelajar:
            </p>

            <div class="overflow-x-auto border-2 border-[#5e646d]">
              <table class="w-full text-left text-sm text-slate-200 border-collapse">
                <thead class="bg-[#2d3036] text-amber-300 text-xs font-bold uppercase border-b-2 border-[#5e646d]">
                  <tr>
                    <th class="p-3 w-12 text-center border-r border-[#5e646d]">Bil.</th>
                    <th class="p-3 border-r border-[#5e646d]">Potongan Hadis (Teks Arab)</th>
                    <th class="p-3">Maksud / Terjemahan</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-[#3d424b] text-xs sm:text-sm">
                  <tr class="hover:bg-[#25282f] transition-colors">
                    <td class="p-3 font-bold text-center border-r border-[#5e646d] text-[#ffd447]">1</td>
                    <td class="p-3 font-arabic text-lg text-amber-200 border-r border-[#5e646d] text-right" dir="rtl">
                      الإِمَامُ الْعَادِلُ
                    </td>
                    <td class="p-3 font-medium text-white">
                      Pemimpin yang adil.
                    </td>
                  </tr>
                  <tr class="hover:bg-[#25282f] transition-colors bg-[#1c1f24]">
                    <td class="p-3 font-bold text-center border-r border-[#5e646d] text-[#ffd447]">2</td>
                    <td class="p-3 font-arabic text-lg text-amber-200 border-r border-[#5e646d] text-right" dir="rtl">
                      وَشَابٌّ نَشَأَ فِي عِبَادَةِ رَبِّهِ
                    </td>
                    <td class="p-3 font-medium text-white">
                      Pemuda yang hidupnya taat beribadah kepada Allah SWT.
                    </td>
                  </tr>
                  <tr class="hover:bg-[#25282f] transition-colors">
                    <td class="p-3 font-bold text-center border-r border-[#5e646d] text-[#ffd447]">3</td>
                    <td class="p-3 font-arabic text-lg text-amber-200 border-r border-[#5e646d] text-right" dir="rtl">
                      وَرَجُلٌ قَلْبُهُ مُعَلَّقٌ فِي الْمَسَاجِدِ
                    </td>
                    <td class="p-3 font-medium text-white">
                      Seseorang yang hatinya sentiasa mencintai masjid.
                    </td>
                  </tr>
                  <tr class="hover:bg-[#25282f] transition-colors bg-[#1c1f24]">
                    <td class="p-3 font-bold text-center border-r border-[#5e646d] text-[#ffd447]">4</td>
                    <td class="p-3 font-arabic text-lg text-amber-200 border-r border-[#5e646d] text-right" dir="rtl">
                      وَرَجُلاَنِ تَحَابَّا فِي اللَّهِ اجْتَمَعَا عَلَيْهِ وَتَفَرَّقَا عَلَيْهِ
                    </td>
                    <td class="p-3 font-medium text-white">
                      Dua orang yang saling mengasihi kerana Allah SWT, bertemu dan berpisah kerana-Nya.
                    </td>
                  </tr>
                  <tr class="hover:bg-[#25282f] transition-colors">
                    <td class="p-3 font-bold text-center border-r border-[#5e646d] text-[#ffd447]">5</td>
                    <td class="p-3 font-arabic text-lg text-amber-200 border-r border-[#5e646d] text-right" dir="rtl">
                      وَرَجُلٌ طَلَبَتْهُ امْرَأَةٌ ذَاتُ مَنْصِبٍ وَجَمَالٍ فَقَالَ إِنِّي أَخَافُ اللَّهَ
                    </td>
                    <td class="p-3 font-medium text-white">
                      Seseorang yang membenci maksiat kerana takut kepada Allah SWT (diajak melakukan maksiat oleh wanita berpangkat dan cantik lalu menolaknya).
                    </td>
                  </tr>
                  <tr class="hover:bg-[#25282f] transition-colors bg-[#1c1f24]">
                    <td class="p-3 font-bold text-center border-r border-[#5e646d] text-[#ffd447]">6</td>
                    <td class="p-3 font-arabic text-lg text-amber-200 border-r border-[#5e646d] text-right" dir="rtl">
                      وَرَجُلٌ تَصَدَّقَ أَخْفَى حَتَّى لاَ تَعْلَمَ شِمَالُهُ مَا تُنْفِقُ يَمِينُهُ
                    </td>
                    <td class="p-3 font-medium text-white">
                      Seseorang yang bersedekah secara sembunyi (sehingga tangan kirinya tidak mengetahui apa yang diinfakkan oleh tangan kanannya).
                    </td>
                  </tr>
                  <tr class="hover:bg-[#25282f] transition-colors">
                    <td class="p-3 font-bold text-center border-r border-[#5e646d] text-[#ffd447]">7</td>
                    <td class="p-3 font-arabic text-lg text-amber-200 border-r border-[#5e646d] text-right" dir="rtl">
                      وَرَجُلٌ ذَكَرَ اللَّهَ خَالِيًا فَفَاضَتْ عَيْنَاهُ
                    </td>
                    <td class="p-3 font-medium text-white">
                      Seseorang yang mengingati Allah SWT secara bersendirian sehingga menitiskan air mata.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        `
      },
      {
        id: "t5-p8-u3",
        badge: "UNIT 3",
        title: "Unit 3: Huraian Maksud & Contoh Amalan 7 Golongan",
        contentHtml: `
          <div class="space-y-4">
            <!-- Golongan 1 -->
            <div class="p-4 bg-[#1f2328] border-2 border-[#ffd447]">
              <div class="flex items-center gap-2 mb-2">
                <span class="badge-tag bg-[#ffd447] text-black font-extrabold px-2 py-0.5 text-xs">GOLONGAN 1</span>
                <h4 class="text-base font-bold text-white">Pemimpin yang Adil (الإِمَامُ الْعَادِلُ)</h4>
              </div>
              <div class="grid sm:grid-cols-2 gap-3 text-sm">
                <div class="p-3 bg-[#2d3036] border border-stone-600">
                  <span class="text-xs font-bold text-[#ffd447] uppercase block mb-1">Maksud:</span>
                  <p class="text-slate-200 text-xs sm:text-sm">Pemimpin yang menjalankan tanggungjawab terhadap orang di bawah pimpinannya berpandukan al-Quran dan Hadis.</p>
                </div>
                <div class="p-3 bg-[#2d3036] border border-stone-600">
                  <span class="text-xs font-bold text-[#2fd17a] uppercase block mb-1">Contoh Amalan:</span>
                  <p class="text-slate-200 text-xs sm:text-sm">Memastikan keperluan asas rakyat dipenuhi dan mencegah kemungkaran daripada berleluasa.</p>
                </div>
              </div>
            </div>

            <!-- Golongan 2 -->
            <div class="p-4 bg-[#1f2328] border-2 border-[#2fd17a]">
              <div class="flex items-center gap-2 mb-2">
                <span class="badge-tag bg-[#2fd17a] text-black font-extrabold px-2 py-0.5 text-xs">GOLONGAN 2</span>
                <h4 class="text-base font-bold text-white">Pemuda yang Hidupnya Taat Beribadah kepada Allah SWT</h4>
              </div>
              <div class="grid sm:grid-cols-2 gap-3 text-sm">
                <div class="p-3 bg-[#2d3036] border border-stone-600">
                  <span class="text-xs font-bold text-[#ffd447] uppercase block mb-1">Maksud:</span>
                  <p class="text-slate-200 text-xs sm:text-sm">Pemuda yang memenuhi masa usianya dengan melakukan ibadah kepada Allah SWT, sama ada ibadah wajib atau sunat.</p>
                </div>
                <div class="p-3 bg-[#2d3036] border border-stone-600">
                  <span class="text-xs font-bold text-[#2fd17a] uppercase block mb-1">Contoh Amalan:</span>
                  <p class="text-slate-200 text-xs sm:text-sm">Melaksanakan tuntutan solat fardu lima waktu dan puasa dengan sempurna, melazimi qiamullail, membaca al-Quran, serta berzikir.</p>
                </div>
              </div>
            </div>

            <!-- Golongan 3 -->
            <div class="p-4 bg-[#1f2328] border-2 border-cyan-500">
              <div class="flex items-center gap-2 mb-2">
                <span class="badge-tag bg-cyan-500 text-black font-extrabold px-2 py-0.5 text-xs">GOLONGAN 3</span>
                <h4 class="text-base font-bold text-white">Seseorang yang Hatinya Sentiasa Mencintai Masjid</h4>
              </div>
              <div class="grid sm:grid-cols-2 gap-3 text-sm">
                <div class="p-3 bg-[#2d3036] border border-stone-600">
                  <span class="text-xs font-bold text-[#ffd447] uppercase block mb-1">Maksud:</span>
                  <p class="text-slate-200 text-xs sm:text-sm">Seseorang yang hatinya sentiasa berasa seronok memakmurkan masjid dengan aktiviti ibadah dan kebajikan.</p>
                </div>
                <div class="p-3 bg-[#2d3036] border border-stone-600">
                  <span class="text-xs font-bold text-[#2fd17a] uppercase block mb-1">Contoh Amalan:</span>
                  <p class="text-slate-200 text-xs sm:text-sm">Menunaikan solat fardu secara berjemaah serta menyertai aktiviti di masjid seperti majlis ilmu dan gotong-royong.</p>
                </div>
              </div>
            </div>

            <!-- Golongan 4 -->
            <div class="p-4 bg-[#1f2328] border-2 border-purple-500">
              <div class="flex items-center gap-2 mb-2">
                <span class="badge-tag bg-purple-500 text-white font-extrabold px-2 py-0.5 text-xs">GOLONGAN 4</span>
                <h4 class="text-base font-bold text-white">Dua Orang yang Saling Mengasihi Kerana Allah SWT</h4>
              </div>
              <div class="grid sm:grid-cols-2 gap-3 text-sm">
                <div class="p-3 bg-[#2d3036] border border-stone-600">
                  <span class="text-xs font-bold text-[#ffd447] uppercase block mb-1">Maksud:</span>
                  <p class="text-slate-200 text-xs sm:text-sm">Dua orang yang bersahabat berasaskan keimanan dan ketakwaan kepada Allah SWT — bertemu dan berpisah semata-mata kerana Allah SWT.</p>
                </div>
                <div class="p-3 bg-[#2d3036] border border-stone-600">
                  <span class="text-xs font-bold text-[#2fd17a] uppercase block mb-1">Contoh Amalan:</span>
                  <p class="text-slate-200 text-xs sm:text-sm">Persaudaraan antara kaum Muhajirin dan Ansar serta kesetiaan Saidina Abu Bakar al-Siddiq RA mendampingi Rasulullah SAW.</p>
                </div>
              </div>
            </div>

            <!-- Golongan 5 -->
            <div class="p-4 bg-[#1f2328] border-2 border-rose-500">
              <div class="flex items-center gap-2 mb-2">
                <span class="badge-tag bg-rose-500 text-white font-extrabold px-2 py-0.5 text-xs">GOLONGAN 5</span>
                <h4 class="text-base font-bold text-white">Seseorang yang Membenci Maksiat Kerana Takut kepada Allah SWT</h4>
              </div>
              <div class="grid sm:grid-cols-2 gap-3 text-sm">
                <div class="p-3 bg-[#2d3036] border border-stone-600">
                  <span class="text-xs font-bold text-[#ffd447] uppercase block mb-1">Maksud:</span>
                  <p class="text-slate-200 text-xs sm:text-sm">Seseorang yang membenci dan menjauhi semua perbuatan yang melanggar suruhan Allah SWT atau meninggalkan larangan-Nya kerana takutkan azab Allah SWT.</p>
                </div>
                <div class="p-3 bg-[#2d3036] border border-stone-600">
                  <span class="text-xs font-bold text-[#2fd17a] uppercase block mb-1">Contoh Amalan:</span>
                  <p class="text-slate-200 text-xs sm:text-sm">Menjauhi perbuatan mencuri, berzina, dan menghindari pergaulan bebas tanpa batasan syarak.</p>
                </div>
              </div>
            </div>

            <!-- Golongan 6 -->
            <div class="p-4 bg-[#1f2328] border-2 border-emerald-500">
              <div class="flex items-center gap-2 mb-2">
                <span class="badge-tag bg-emerald-500 text-black font-extrabold px-2 py-0.5 text-xs">GOLONGAN 6</span>
                <h4 class="text-base font-bold text-white">Seseorang yang Bersedekah Secara Sembunyi</h4>
              </div>
              <div class="grid sm:grid-cols-2 gap-3 text-sm">
                <div class="p-3 bg-[#2d3036] border border-stone-600">
                  <span class="text-xs font-bold text-[#ffd447] uppercase block mb-1">Maksud:</span>
                  <p class="text-slate-200 text-xs sm:text-sm">Pemberian yang bertujuan mendekatkan diri kepada Allah SWT semata-mata tanpa mengharapkan pujian manusia.</p>
                </div>
                <div class="p-3 bg-[#2d3036] border border-stone-600">
                  <span class="text-xs font-bold text-[#2fd17a] uppercase block mb-1">Contoh Amalan:</span>
                  <p class="text-slate-200 text-xs sm:text-sm">Memberikan sumbangan kewangan secara dalam talian (online banking) atau mewakafkan tanah untuk pembinaan masjid secara berdiam diri.</p>
                </div>
              </div>
            </div>

            <!-- Golongan 7 -->
            <div class="p-4 bg-[#1f2328] border-2 border-blue-400">
              <div class="flex items-center gap-2 mb-2">
                <span class="badge-tag bg-blue-400 text-black font-extrabold px-2 py-0.5 text-xs">GOLONGAN 7</span>
                <h4 class="text-base font-bold text-white">Seseorang yang Mengingati Allah SWT Secara Bersendirian Sehingga Menitiskan Air Mata</h4>
              </div>
              <div class="grid sm:grid-cols-2 gap-3 text-sm">
                <div class="p-3 bg-[#2d3036] border border-stone-600">
                  <span class="text-xs font-bold text-[#ffd447] uppercase block mb-1">Maksud:</span>
                  <p class="text-slate-200 text-xs sm:text-sm">Seseorang yang mengingati Allah SWT sama ada melalui hati atau lisan dengan ikhlas dan gerun kepada-Nya ketika berada bersendirian.</p>
                </div>
                <div class="p-3 bg-[#2d3036] border border-stone-600">
                  <span class="text-xs font-bold text-[#2fd17a] uppercase block mb-1">Contoh Amalan:</span>
                  <p class="text-slate-200 text-xs sm:text-sm">Beristighfar memohon keampunan daripada Allah SWT dengan penyesalan yang mendalam atas dosa-dosa lalu.</p>
                </div>
              </div>
            </div>
          </div>
        `
      },
      {
        id: "t5-p8-u4",
        badge: "UNIT 4",
        title: "Unit 4: Pengajaran Hadis (7 Pengajaran Utama)",
        contentHtml: `
          <div class="p-4 bg-[#1f2328] border-2 border-[#2fd17a]">
            <h4 class="text-base font-bold text-[#2fd17a] mb-3">
              Sebagai umat Islam, kita hendaklah:
            </h4>
            <div class="grid sm:grid-cols-2 gap-2.5 text-xs sm:text-sm text-slate-200">
              <div class="p-2.5 bg-[#2d3036] border border-stone-600 flex items-start gap-2">
                <span class="text-[#ffd447] font-bold">1.</span>
                <span><b>Berlaku adil</b> dalam setiap tindakan kerana sikap tersebut merupakan suruhan Allah SWT.</span>
              </div>
              <div class="p-2.5 bg-[#2d3036] border border-stone-600 flex items-start gap-2">
                <span class="text-[#ffd447] font-bold">2.</span>
                <span><b>Memanfaatkan usia muda</b> dengan mendekatkan diri kepada Allah SWT.</span>
              </div>
              <div class="p-2.5 bg-[#2d3036] border border-stone-600 flex items-start gap-2">
                <span class="text-[#ffd447] font-bold">3.</span>
                <span><b>Memakmurkan masjid</b> agar syiar Islam dapat ditegakkan.</span>
              </div>
              <div class="p-2.5 bg-[#2d3036] border border-stone-600 flex items-start gap-2">
                <span class="text-[#ffd447] font-bold">4.</span>
                <span><b>Saling mengasihi</b> sesama Muslim supaya masyarakat hidup aman dan damai.</span>
              </div>
              <div class="p-2.5 bg-[#2d3036] border border-stone-600 flex items-start gap-2">
                <span class="text-[#ffd447] font-bold">5.</span>
                <span><b>Menjauhi perbuatan maksiat</b> agar selamat daripada kemurkaan Allah SWT.</span>
              </div>
              <div class="p-2.5 bg-[#2d3036] border border-stone-600 flex items-start gap-2">
                <span class="text-[#ffd447] font-bold">6.</span>
                <span><b>Memperbanyakkan sedekah</b> kerana amalan tersebut dapat menyucikan harta dan jiwa.</span>
              </div>
              <div class="p-2.5 bg-[#2d3036] border border-stone-600 flex items-start gap-2 sm:col-span-2">
                <span class="text-[#ffd447] font-bold">7.</span>
                <span><b>Melazimi amalan zikir</b> agar jiwa sentiasa tenang dan tenteram.</span>
              </div>
            </div>
          </div>
        `
      }
    ]
  },

  // ==========================================
  // 3. BAHAGIAN AKIDAH
  // ==========================================
  {
    id: "t5-p9",
    number: 9,
    field: "akidah",
    fieldLabel: "Bahagian Akidah",
    title: "Pelajaran 9: Allah SWT Maha Mengawasi dan Maha Menyaksikan",
    summary: "Penghayatan dua Asmaul Husna: Al-Raqib (Maha Mengawasi) dan Al-Shaheed (Maha Menyaksikan), dalil naqli, bukti serta kesan beriman.",
    subtopics: [
      {
        id: "t5-p9-u1",
        badge: "UNIT 1",
        title: "Unit 1: Al-Raqib (الرَّقِيب - Allah SWT Maha Mengawasi)",
        contentHtml: `
          <!-- Maksud -->
          <div class="p-4 bg-[#1f2328] border-2 border-[#ffd447] mb-4">
            <span class="badge-tag bg-[#ffd447] text-black font-extrabold px-2 py-0.5 text-xs">1. MAKSUD AL-RAQIB</span>
            <p class="text-base text-white mt-2 leading-relaxed">
              Nama Allah SWT yang menunjukkan bahawa <b>Allah SWT Maha Mengawasi semua perbuatan dan keadaan makhluk</b>.
            </p>
          </div>

          <!-- Dalil Naqli -->
          <div class="mb-4 space-y-3">
            <h4 class="text-sm font-bold text-amber-200 uppercase tracking-wider font-mono">2. Dalil Naqli Nama Allah SWT Al-Raqib</h4>
            
            <!-- Dalil 1: Al-Quran -->
            <div class="quote">
              <span class="text-xs font-bold text-[#ffd447] uppercase block mb-1">1. Firman Allah SWT (Surah al-Ma'idah: 117):</span>
              <p class="arabic-text text-xl my-2 text-right">...فَلَمَّا تَوَفَّيْتَنِي كُنتَ أَنتَ الرَّقِيبَ عَلَيْهِمْ ۚ وَأَنتَ عَلَىٰ كُلِّ شَيْءٍ شَهِيدٌ</p>
              <p class="text-xs sm:text-sm text-amber-100/90 mt-1">
                <b>Maksud:</b> "...Kemudian apabila Engkau menyempurnakan tempohku, Engkaulah sendiri yang mengawasi keadaan mereka, dan Engkau jua yang menjadi saksi atas tiap-tiap sesuatu."
              </p>
            </div>

            <!-- Dalil 2: Hadis -->
            <div class="quote">
              <span class="text-xs font-bold text-[#ffd447] uppercase block mb-1">2. Sabda Rasulullah SAW (daripada Abdullah bin al-Samit RA):</span>
              <p class="arabic-text text-xl my-2 text-right">أَفْضَلُ الْإِيمَانِ أَنْ تَعْلَمَ أَنَّ اللَّهَ مَعَكَ حَيْثُ مَا كُنْتَ</p>
              <p class="text-xs sm:text-sm text-amber-100/90 mt-1">
                <b>Maksud:</b> "Iman yang paling afdal ialah engkau mengetahui bahawa Allah bersamamu di mana-mana jua engkau berada." <span class="text-xs text-amber-300/80">(Riwayat al-Tabarani dan Abu Nu'aim)</span>
              </p>
            </div>
          </div>

          <!-- Bukti Allah SWT Bersifat Al-Raqib -->
          <div>
            <h4 class="text-sm font-bold text-amber-200 uppercase tracking-wider font-mono mb-2">3. Bukti Allah SWT Bersifat Al-Raqib</h4>
            <div class="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th style="width: 8%;">Bil.</th>
                    <th style="width: 46%;">Bukti</th>
                    <th style="width: 46%;">Dalil Al-Quran</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="font-bold text-center text-[#ffd447]">1</td>
                    <td><b>Allah SWT Maha Mengawasi manusia dalam aspek kepatuhan kepada perintah dan larangan-Nya.</b></td>
                    <td>
                      <p class="arabic-text text-base my-1 text-right">وَكَانَ اللَّهُ عَلَىٰ كُلِّ شَيْءٍ رَّقِيبًا</p>
                      <p class="text-xs text-slate-300"><b>Surah al-Ahzab: 52</b> — <i>"...Dan Allah sentiasa mengawasi tiap-tiap sesuatu."</i></p>
                    </td>
                  </tr>
                  <tr>
                    <td class="font-bold text-center text-[#ffd447]">2</td>
                    <td><b>Allah SWT sentiasa mengawasi manusia dalam aspek hubungan sesama manusia.</b></td>
                    <td>
                      <p class="arabic-text text-base my-1 text-right">إِنَّ اللَّهَ كَانَ عَلَيْكُمْ رَقِيبًا</p>
                      <p class="text-xs text-slate-300"><b>Surah an-Nisa': 1</b> — <i>"...Sesungguhnya Allah sentiasa mengawasi kamu."</i></p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        `
      },
      {
        id: "t5-p9-u2",
        badge: "UNIT 2",
        title: "Unit 2: Al-Shaheed (الشَّهِيد - Allah SWT Maha Menyaksikan)",
        contentHtml: `
          <!-- Maksud -->
          <div class="p-4 bg-[#1f2328] border-2 border-[#2fd17a] mb-4">
            <span class="badge-tag bg-[#2fd17a] text-black font-extrabold px-2 py-0.5 text-xs">1. MAKSUD AL-SHAHEED</span>
            <p class="text-base text-white mt-2 leading-relaxed">
              Nama Allah SWT yang menunjukkan bahawa <b>Allah SWT Maha Menyaksikan segala perbuatan dan ucapan makhluk serta tiada sesuatu pun yang tersembunyi daripada-Nya</b>.
            </p>
          </div>

          <!-- Dalil Naqli -->
          <div class="mb-4 space-y-3">
            <h4 class="text-sm font-bold text-amber-200 uppercase tracking-wider font-mono">2. Dalil Naqli Nama Allah SWT Al-Shaheed</h4>
            
            <!-- Dalil 1: Al-Quran -->
            <div class="quote">
              <span class="text-xs font-bold text-[#2fd17a] uppercase block mb-1">1. Firman Allah SWT (Surah al-An'am: 19):</span>
              <p class="arabic-text text-xl my-2 text-right">قُلْ أَيُّ شَيْءٍ أَكْبَرُ شَهَـٰدَةً ۖ قُلِ ٱللَّهُ شَهِيدٌۢ بَيْنِي وَبَيْنَكُمْ...</p>
              <p class="text-xs sm:text-sm text-amber-100/90 mt-1">
                <b>Maksud:</b> Katakanlah, "Apakah sesuatu yang lebih besar persaksiannya?" Katakanlah, "Allah menjadi saksi antara aku dengan kamu..."
              </p>
            </div>

            <!-- Dalil 2: Hadis -->
            <div class="quote">
              <span class="text-xs font-bold text-[#2fd17a] uppercase block mb-1">2. Sabda Rasulullah SAW (daripada Abu Hurairah RA):</span>
              <p class="text-xs sm:text-sm text-amber-200/90 mb-1">Baginda menceritakan tentang seorang lelaki Bani Israil yang meminjam wang seribu dinar dan berkata:</p>
              <p class="arabic-text text-xl my-1 text-right">...كَفَىٰ بِٱللَّهِ شَهِيدًۭا...</p>
              <p class="text-xs sm:text-sm text-amber-100/90 mt-1">
                <b>Maksud:</b> "...Cukuplah Allah menjadi saksi." <span class="text-xs text-amber-300/80">(Riwayat al-Bukhari)</span>
              </p>
            </div>
          </div>

          <!-- Bukti Allah SWT Bersifat Al-Shaheed -->
          <div>
            <h4 class="text-sm font-bold text-amber-200 uppercase tracking-wider font-mono mb-2">3. Bukti Allah SWT Bersifat Al-Shaheed</h4>
            <div class="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th style="width: 8%;">Bil.</th>
                    <th style="width: 62%;">Bukti</th>
                    <th style="width: 30%;">Dalil Surah</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="font-bold text-center text-[#2fd17a]">1</td>
                    <td><b>Allah SWT menjadi saksi perutusan Rasulullah SAW atas umatnya.</b></td>
                    <td class="font-semibold text-amber-300">Surah al-Fath: 28</td>
                  </tr>
                  <tr>
                    <td class="font-bold text-center text-[#2fd17a]">2</td>
                    <td><b>Allah SWT Maha Menyaksikan dan menghitung segala amalan perbuatan manusia.</b></td>
                    <td class="font-semibold text-amber-300">Surah al-Mujadilah: 6</td>
                  </tr>
                  <tr>
                    <td class="font-bold text-center text-[#2fd17a]">3</td>
                    <td><b>Allah SWT sahaja yang menjadi saksi atas segala perkara yang nyata atau yang tersembunyi.</b></td>
                    <td class="font-semibold text-amber-300">Surah Fussilat: 53</td>
                  </tr>
                  <tr>
                    <td class="font-bold text-center text-[#2fd17a]">4</td>
                    <td><b>Allah SWT menjadi saksi pengakuan dusta orang-orang munafik.</b></td>
                    <td class="font-semibold text-amber-300">Surah al-Munafiqun: 1</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        `
      },
      {
        id: "t5-p9-u3",
        badge: "UNIT 3",
        title: "Unit 3: Pengajaran & Kesan Beriman dengan Al-Raqib & Al-Shaheed",
        contentHtml: `
          <div class="p-4 bg-[#1f2328] border-2 border-cyan-400">
            <span class="badge-tag bg-cyan-400 text-black font-extrabold px-2 py-0.5 text-xs">PENGHAYATAN & KESAN</span>
            <h4 class="text-base font-bold text-white mt-2 mb-3">Tiga Kesan dan Pengajaran Utama Beriman dengan Nama Allah Al-Raqib & Al-Shaheed:</h4>
            
            <div class="space-y-3">
              <div class="p-3 bg-[#2d3036] border border-stone-600 flex items-start gap-3">
                <span class="w-6 h-6 rounded-none bg-[#ffd447] text-black font-extrabold text-xs flex items-center justify-center shrink-0 mt-0.5 shadow-[1px_1px_0_#000]">1</span>
                <div>
                  <strong class="text-white block text-sm sm:text-base">Melahirkan Rasa Waspada dan Takut Melakukan Maksiat</strong>
                  <p class="text-xs sm:text-sm text-slate-300 mt-0.5">
                    Sentiasa melahirkan rasa waspada dan takut untuk melakukan maksiat kerana meyakini Allah SWT sentiasa mengawasi dan menyaksikan setiap perbuatan, sama ada yang tersembunyi mahupun terang-terangan.
                  </p>
                </div>
              </div>

              <div class="p-3 bg-[#2d3036] border border-stone-600 flex items-start gap-3">
                <span class="w-6 h-6 rounded-none bg-[#2fd17a] text-black font-extrabold text-xs flex items-center justify-center shrink-0 mt-0.5 shadow-[1px_1px_0_#000]">2</span>
                <div>
                  <strong class="text-white block text-sm sm:text-base">Mendorong Diri untuk Ikhlas dalam Setiap Amalan</strong>
                  <p class="text-xs sm:text-sm text-slate-300 mt-0.5">
                    Mendorong diri untuk sentiasa ikhlas dalam beribadah dan melakukan amalan soleh sama ada di hadapan orang ramai mahupun ketika bersendirian tanpa mengharapkan pujian manusia.
                  </p>
                </div>
              </div>

              <div class="p-3 bg-[#2d3036] border border-stone-600 flex items-start gap-3">
                <span class="w-6 h-6 rounded-none bg-cyan-400 text-black font-extrabold text-xs flex items-center justify-center shrink-0 mt-0.5 shadow-[1px_1px_0_#000]">3</span>
                <div>
                  <strong class="text-white block text-sm sm:text-base">Memelihara Pergaulan dan Hubungan Sesama Manusia</strong>
                  <p class="text-xs sm:text-sm text-slate-300 mt-0.5">
                    Memelihara pergaulan dan hubungan sesama manusia mengikut batasan syarak agar tidak menzalimi, menipu, atau memfitnah orang lain.
                  </p>
                </div>
              </div>
            </div>
          </div>
        `
      }
    ]
  },
  {
    id: "t5-p10",
    number: 10,
    field: "akidah",
    fieldLabel: "Bahagian Akidah",
    title: "Pelajaran 10: Akidah Ahli Sunnah Wal Jamaah",
    summary: "Pengertian ASWJ, nama masyhur, 6 prinsip akidah, 3 aliran bertentangan (Syiah, Khawarij, Muktazilah), matriks perbandingan 5 isu akidah dan 7 kepentingan berpegang teguh dengannya.",
    subtopics: [
      {
        id: "t5-p10-u1",
        badge: "UNIT 1",
        title: "Unit 1: Pengertian Ahli Sunnah Wal Jamaah",
        contentHtml: `
          <div class="space-y-4">
            <!-- Maksud ASWJ -->
            <div class="p-4 bg-[#1f2328] border-2 border-[#ffd447]">
              <span class="badge-tag bg-[#ffd447] text-black font-extrabold px-2 py-0.5 text-xs">MAKSUD ASWJ</span>
              <p class="text-base text-white font-medium mt-2 leading-relaxed">
                Kumpulan majoriti umat Islam yang <b>memahami dan berpegang teguh pada al-Quran dan Sunnah</b> menerusi para sahabat, tabi'in, serta tabi' tabi'in dalam prinsip <b>akidah, syariat, dan akhlak</b>.
              </p>
            </div>

            <!-- Nama-nama Lain yang Masyhur -->
            <div class="p-4 bg-[#1f2328] border-2 border-[#5e646d]">
              <h4 class="text-sm font-bold text-white uppercase tracking-wider mb-3 flex items-center gap-2">
                <span class="badge-tag bg-emerald-600 text-white font-bold px-2 py-0.5 text-xs">5 GELARAN</span>
                Nama-nama Lain yang Masyhur bagi Ahli Sunnah Wal Jamaah:
              </h4>
              <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-2.5">
                <div class="p-3 bg-[#2d3036] border border-stone-600 flex items-center gap-2">
                  <span class="text-[#ffd447] font-bold text-sm">1.</span>
                  <span class="text-sm text-slate-100 font-semibold">Al-Salaf Al-Soleh</span>
                </div>
                <div class="p-3 bg-[#2d3036] border border-stone-600 flex items-center gap-2">
                  <span class="text-[#ffd447] font-bold text-sm">2.</span>
                  <span class="text-sm text-slate-100 font-semibold">Al-Sawad Al-A'zam</span>
                </div>
                <div class="p-3 bg-[#2d3036] border border-stone-600 flex items-center gap-2">
                  <span class="text-[#ffd447] font-bold text-sm">3.</span>
                  <span class="text-sm text-slate-100 font-semibold">Al-Asha'irah</span>
                </div>
                <div class="p-3 bg-[#2d3036] border border-stone-600 flex items-center gap-2">
                  <span class="text-[#ffd447] font-bold text-sm">4.</span>
                  <span class="text-sm text-slate-100 font-semibold">Al-Maturidiyyah</span>
                </div>
                <div class="p-3 bg-[#2d3036] border border-stone-600 flex items-center gap-2 sm:col-span-2 md:col-span-1">
                  <span class="text-[#ffd447] font-bold text-sm">5.</span>
                  <span class="text-sm text-slate-100 font-semibold">Ahl al-Hadith</span>
                </div>
              </div>
            </div>
          </div>
        `
      },
      {
        id: "t5-p10-u2",
        badge: "UNIT 2",
        title: "Unit 2: Prinsip Akidah Ahli Sunnah Wal Jamaah",
        contentHtml: `
          <div class="space-y-3">
            <p class="text-sm text-slate-300">
              Terdapat <b>6 prinsip utama</b> pegangan Ahli Sunnah Wal Jamaah yang menjadi rujukan akidah sahih:
            </p>

            <div class="overflow-x-auto border-2 border-[#5e646d]">
              <table class="w-full text-left text-sm text-slate-200 border-collapse">
                <thead class="bg-[#2d3036] text-amber-300 text-xs font-bold uppercase border-b-2 border-[#5e646d]">
                  <tr>
                    <th class="p-3 w-12 text-center border-r border-[#5e646d]">Bil.</th>
                    <th class="p-3 w-48 border-r border-[#5e646d]">Prinsip</th>
                    <th class="p-3">Huraian</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-[#3d424b] text-xs sm:text-sm">
                  <tr class="hover:bg-[#25282f] transition-colors">
                    <td class="p-3 font-bold text-center border-r border-[#5e646d] text-[#ffd447]">1</td>
                    <td class="p-3 font-bold text-white border-r border-[#5e646d]">Konsep Iman</td>
                    <td class="p-3 text-slate-200">
                      Iman ialah <b>kepercayaan dalam hati, pengakuan dengan lidah, dan dibuktikan dengan perbuatan</b> sebagai bukti kesempurnaan iman.
                    </td>
                  </tr>
                  <tr class="hover:bg-[#25282f] transition-colors bg-[#1c1f24]">
                    <td class="p-3 font-bold text-center border-r border-[#5e646d] text-[#ffd447]">2</td>
                    <td class="p-3 font-bold text-white border-r border-[#5e646d]">Perbuatan Manusia</td>
                    <td class="p-3 text-slate-200">
                      Segala perbuatan manusia <b>dicipta oleh Allah SWT</b>, namun manusia diberikan akal dan kehendak (<i>ikhtiar</i>) untuk memilih sama ada melakukan kebaikan atau keburukan serta dihitung dosa dan pahala.
                    </td>
                  </tr>
                  <tr class="hover:bg-[#25282f] transition-colors">
                    <td class="p-3 font-bold text-center border-r border-[#5e646d] text-[#ffd447]">3</td>
                    <td class="p-3 font-bold text-white border-r border-[#5e646d]">Perkara Ghaib</td>
                    <td class="p-3 text-slate-200">
                      Meyakini kewujudan <b>perkara-perkara ghaib</b> seperti soalan alam kubur, hari akhirat, titian sirat, mizan, malaikat, dan jin.
                    </td>
                  </tr>
                  <tr class="hover:bg-[#25282f] transition-colors bg-[#1c1f24]">
                    <td class="p-3 font-bold text-center border-r border-[#5e646d] text-[#ffd447]">4</td>
                    <td class="p-3 font-bold text-white border-r border-[#5e646d]">Syurga dan Neraka</td>
                    <td class="p-3 text-slate-200">
                      Meyakini bahawa <b>syurga dan neraka telah wujud</b> sebelum dijadikan makhluk dan kewujudannya adalah <b>kekal selama-lamanya</b>.
                    </td>
                  </tr>
                  <tr class="hover:bg-[#25282f] transition-colors">
                    <td class="p-3 font-bold text-center border-r border-[#5e646d] text-[#ffd447]">5</td>
                    <td class="p-3 font-bold text-white border-r border-[#5e646d]">Syafaat Rasulullah SAW</td>
                    <td class="p-3 text-slate-200">
                      Meyakini bahawa <b>syafaat Rasulullah SAW adalah benar</b> dengan izin Allah SWT, termasuk syafaat baginda untuk pelaku dosa besar dalam kalangan umatnya yang masih beriman.
                    </td>
                  </tr>
                  <tr class="hover:bg-[#25282f] transition-colors bg-[#1c1f24]">
                    <td class="p-3 font-bold text-center border-r border-[#5e646d] text-[#ffd447]">6</td>
                    <td class="p-3 font-bold text-white border-r border-[#5e646d]">Perutusan Rasul</td>
                    <td class="p-3 text-slate-200">
                      Perutusan para nabi dan rasul adalah <b>harus bagi Allah SWT</b> dan merupakan rahmat Allah SWT kepada manusia.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        `
      },
      {
        id: "t5-p10-u3",
        badge: "UNIT 3",
        title: "Unit 3: Aliran yang Bertentangan dengan Ahli Sunnah Wal Jamaah",
        contentHtml: `
          <div class="space-y-4">
            <!-- 3.1 Shi'ah -->
            <div class="p-4 bg-[#1f2328] border-2 border-red-500">
              <div class="flex items-center justify-between flex-wrap gap-2 mb-2">
                <div class="flex items-center gap-2">
                  <span class="badge-tag bg-red-600 text-white font-bold px-2 py-0.5 text-xs">UNIT 3.1</span>
                  <h4 class="text-base font-bold text-white">Shi'ah (شيعة)</h4>
                </div>
              </div>
              
              <div class="p-3 bg-[#2d3036] border border-stone-600 mb-3">
                <span class="text-xs font-bold text-red-400 uppercase tracking-wider block mb-1">Sejarah Ringkas:</span>
                <p class="text-xs sm:text-sm text-slate-200">
                  Kumpulan yang menuntut supaya <b>Saidina Ali bin Abi Talib RA dilantik sebagai khalifah</b> selepas Rasulullah SAW dan berkeyakinan bahawa hanya Ahlul Bait sahaja yang lebih layak memegang jawatan khalifah.
                </p>
              </div>

              <h5 class="text-xs font-bold text-amber-300 uppercase tracking-wider mb-2">Prinsip Utama yang Bertentangan:</h5>
              <ol class="space-y-1.5 text-xs sm:text-sm text-slate-200 list-decimal list-inside">
                <li>Meyakini bahawa <i>al-Imamah</i> merupakan rukun agama yang telah ditentukan oleh Allah SWT melalui lisan rasul secara nas.</li>
                <li>Meyakini bahawa para imam adalah <b>maksum</b> (terpelihara daripada dosa kecil dan besar).</li>
                <li><b>Menyanjung Saidina Ali RA secara keterlaluan</b> sehingga disamakan dengan Rasulullah SAW.</li>
                <li>Mengamalkan <i>al-Taqiyyah</i>, iaitu menyembunyikan sesuatu yang boleh membahayakan diri atau harta benda dengan menampakkan sesuatu yang berbeza dengan hakikat sebenar.</li>
                <li>Menambah nama Saidina Ali RA dalam syahadah selepas nama Nabi Muhammad SAW.</li>
              </ol>
            </div>

            <!-- 3.2 Khawarij -->
            <div class="p-4 bg-[#1f2328] border-2 border-amber-600">
              <div class="flex items-center justify-between flex-wrap gap-2 mb-2">
                <div class="flex items-center gap-2">
                  <span class="badge-tag bg-amber-600 text-white font-bold px-2 py-0.5 text-xs">UNIT 3.2</span>
                  <h4 class="text-base font-bold text-white">Khawarij (خوارج)</h4>
                </div>
              </div>

              <div class="p-3 bg-[#2d3036] border border-stone-600 mb-3">
                <span class="text-xs font-bold text-amber-400 uppercase tracking-wider block mb-1">Sejarah Ringkas:</span>
                <p class="text-xs sm:text-sm text-slate-200">
                  Kumpulan pengikut Saidina Ali bin Abi Talib RA yang <b>berpaling tadah</b> kerana tidak berpuas hati dengan keputusan <b>Majlis Tahkim</b>.
                </p>
              </div>

              <h5 class="text-xs font-bold text-amber-300 uppercase tracking-wider mb-2">Prinsip Utama yang Bertentangan:</h5>
              <ol class="space-y-1.5 text-xs sm:text-sm text-slate-200 list-decimal list-inside">
                <li>Berpendapat jawatan khalifah atau imam hendaklah diserahkan kepada pemilihan rakyat secara bebas daripada kalangan kaum muslimin yang layak.</li>
                <li>Menyatakan bahawa <b>Saidina Ali RA telah melakukan dosa besar serta kufur</b> kerana bersetuju mengadakan Majlis Tahkim.</li>
                <li><b>Wajib keluar atau menentang</b> pemimpin/khalifah yang tidak adil.</li>
                <li>Beritiqad bahawa <b>orang yang melakukan dosa besar dikira kafir</b>.</li>
              </ol>
            </div>

            <!-- 3.3 Mu'tazilah -->
            <div class="p-4 bg-[#1f2328] border-2 border-purple-500">
              <div class="flex items-center justify-between flex-wrap gap-2 mb-2">
                <div class="flex items-center gap-2">
                  <span class="badge-tag bg-purple-600 text-white font-bold px-2 py-0.5 text-xs">UNIT 3.3</span>
                  <h4 class="text-base font-bold text-white">Mu'tazilah (معتزلة)</h4>
                </div>
              </div>

              <div class="p-3 bg-[#2d3036] border border-stone-600 mb-3">
                <span class="text-xs font-bold text-purple-300 uppercase tracking-wider block mb-1">Sejarah Ringkas:</span>
                <p class="text-xs sm:text-sm text-slate-200">
                  Diasaskan oleh <b>Wasil bin 'Ata'</b> setelah berlaku perbezaan pendapat antara beliau dengan gurunya, <b>Hasan al-Basri</b>, tentang kedudukan pelaku dosa besar.
                </p>
              </div>

              <h5 class="text-xs font-bold text-amber-300 uppercase tracking-wider mb-2">5 Prinsip Utama (Usul Khamsah) yang Bertentangan:</h5>
              <div class="space-y-2 text-xs sm:text-sm text-slate-200">
                <div class="p-2.5 bg-[#2d3036] border border-stone-600">
                  <strong class="text-[#ffd447]">1. Al-Tauhid:</strong> Menafikan sifat ma'ani pada zat Allah SWT.
                </div>
                <div class="p-2.5 bg-[#2d3036] border border-stone-600">
                  <strong class="text-[#ffd447]">2. Al-'Adl:</strong> Meyakini manusia bertanggungjawab sepenuhnya atas perbuatan mereka sama ada baik atau buruk tanpa ditentukan oleh Allah SWT.
                </div>
                <div class="p-2.5 bg-[#2d3036] border border-stone-600">
                  <strong class="text-[#ffd447]">3. Al-Wa'd wa al-Wa'id:</strong> Meyakini bahawa Allah SWT wajib memberikan balasan baik kepada orang yang taat dan ancaman azab kepada orang yang melakukan maksiat.
                </div>
                <div class="p-2.5 bg-[#2d3036] border border-stone-600">
                  <strong class="text-[#ffd447]">4. Al-Manzilah Baina al-Manzilatain:</strong> Meyakini bahawa pelaku dosa besar berada pada satu kedudukan antara mukmin dengan kafir dan mereka kekal di dalam neraka.
                </div>
                <div class="p-2.5 bg-[#2d3036] border border-stone-600">
                  <strong class="text-[#ffd447]">5. Al-Amr bi al-Ma'ruf wa al-Nahy 'an al-Munkar:</strong> Meyakini bahawa menyuruh kepada kebaikan dan mencegah kemungkaran adalah wajib ditegakkan dalam apa-apa keadaan sekalipun.
                </div>
              </div>
            </div>
          </div>
        `
      },
      {
        id: "t5-p10-u4",
        badge: "UNIT 4",
        title: "Unit 4: Perbandingan Pandangan Isu Utama",
        contentHtml: `
          <div class="space-y-3">
            <div class="flex items-center justify-between flex-wrap gap-2">
              <h4 class="text-sm font-bold text-[#ffd447] uppercase tracking-wider">
                Jadual Perbandingan Pandangan Isu Utama Akidah (Fokus SPM)
              </h4>
              <span class="text-xs bg-[#2b1a0c] text-amber-200 px-2 py-0.5 border border-amber-700">Soalan Esei / Struktur Popular</span>
            </div>

            <div class="overflow-x-auto border-2 border-[#5e646d]">
              <table class="w-full text-left text-sm text-slate-200 border-collapse">
                <thead class="bg-[#2d3036] text-amber-300 text-xs font-bold uppercase border-b-2 border-[#5e646d]">
                  <tr>
                    <th class="p-3 w-44 border-r border-[#5e646d]">Isu / Perkara</th>
                    <th class="p-3 border-r border-[#5e646d] text-emerald-300">Ahli Sunnah Wal Jamaah</th>
                    <th class="p-3 text-red-300">Aliran yang Bertentangan</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-[#3d424b] text-xs sm:text-sm">
                  <tr class="hover:bg-[#25282f] transition-colors">
                    <td class="p-3 font-bold text-white border-r border-[#5e646d]">Adakah al-Quran Makhluk?</td>
                    <td class="p-3 border-r border-[#5e646d]">
                      Meyakini al-Quran ialah <b>Kalam Allah SWT yang bersifat Qadim</b> (sedia ada).
                    </td>
                    <td class="p-3">
                      <b class="text-purple-300">Mu'tazilah:</b> Mengatakan al-Quran ialah <b>makhluk yang bersifat Hadith</b> (baharu).
                    </td>
                  </tr>
                  <tr class="hover:bg-[#25282f] transition-colors bg-[#1c1f24]">
                    <td class="p-3 font-bold text-white border-r border-[#5e646d]">Melihat Allah SWT (Ru'yatullah)</td>
                    <td class="p-3 border-r border-[#5e646d]">
                      Semua orang beriman <b>dapat melihat Allah SWT</b> di syurga pada hari akhirat kelak.
                    </td>
                    <td class="p-3">
                      <b class="text-purple-300">Mu'tazilah:</b> <b>Mustahil</b> makhluk dapat melihat Allah SWT.
                    </td>
                  </tr>
                  <tr class="hover:bg-[#25282f] transition-colors">
                    <td class="p-3 font-bold text-white border-r border-[#5e646d]">Pelaku Dosa Besar</td>
                    <td class="p-3 border-r border-[#5e646d]">
                      Pelaku dosa besar tetap dikira sebagai <b>mukmin</b> (bukan kafir) dan dihukum fasik jika tidak bertaubat.
                    </td>
                    <td class="p-3 space-y-1">
                      <div><b class="text-amber-400">Khawarij:</b> Dikira <b>kafir</b>.</div>
                      <div><b class="text-purple-300">Mu'tazilah:</b> Berada di <b>antara mukmin dengan kafir</b> dan kekal di dalam neraka.</div>
                    </td>
                  </tr>
                  <tr class="hover:bg-[#25282f] transition-colors bg-[#1c1f24]">
                    <td class="p-3 font-bold text-white border-r border-[#5e646d]">Qada' dan Qadar</td>
                    <td class="p-3 border-r border-[#5e646d]">
                      Meyakini setiap perkara baik dan buruk <b>datang daripada Allah SWT</b> dan manusia diberi akal untuk berikhtiar.
                    </td>
                    <td class="p-3">
                      <b class="text-purple-300">Mu'tazilah:</b> Meyakini setiap perkara baik dan buruk <b>datang daripada manusia semata-mata</b>.
                    </td>
                  </tr>
                  <tr class="hover:bg-[#25282f] transition-colors">
                    <td class="p-3 font-bold text-white border-r border-[#5e646d]">Kedudukan Iman</td>
                    <td class="p-3 border-r border-[#5e646d]">
                      Iman <b>boleh bertambah</b> (dengan amalan soleh) dan <b>berkurang</b> (dengan maksiat).
                    </td>
                    <td class="p-3">
                      <b class="text-amber-300">Khawarij & Mu'tazilah:</b> Iman <b>tidak boleh bertambah dan berkurang</b> (hilang apabila melakukan dosa besar).
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        `
      },
      {
        id: "t5-p10-u5",
        badge: "UNIT 5",
        title: "Unit 5: Kepentingan Berpegang dengan Akidah Ahli Sunnah Wal Jamaah",
        contentHtml: `
          <div class="p-4 bg-[#1f2328] border-2 border-[#2fd17a]">
            <h4 class="text-base font-bold text-[#2fd17a] mb-3">
              7 Kepentingan Utama Berpegang dengan Akidah Ahli Sunnah Wal Jamaah:
            </h4>
            <div class="grid sm:grid-cols-2 gap-2.5 text-xs sm:text-sm text-slate-200">
              <div class="p-2.5 bg-[#2d3036] border border-stone-600 flex items-start gap-2">
                <span class="text-[#ffd447] font-bold">1.</span>
                <span>Mendapat <b>keredaan Allah SWT</b>.</span>
              </div>
              <div class="p-2.5 bg-[#2d3036] border border-stone-600 flex items-start gap-2">
                <span class="text-[#ffd447] font-bold">2.</span>
                <span>Menjadi <b>asas penerimaan sesuatu amalan</b> soleh.</span>
              </div>
              <div class="p-2.5 bg-[#2d3036] border border-stone-600 flex items-start gap-2">
                <span class="text-[#ffd447] font-bold">3.</span>
                <span><b>Memelihara kesucian agama</b> Islam daripada penyelewengan.</span>
              </div>
              <div class="p-2.5 bg-[#2d3036] border border-stone-600 flex items-start gap-2">
                <span class="text-[#ffd447] font-bold">4.</span>
                <span><b>Menjamin keamanan</b> dan kestabilan perpaduan negara.</span>
              </div>
              <div class="p-2.5 bg-[#2d3036] border border-stone-600 flex items-start gap-2">
                <span class="text-[#ffd447] font-bold">5.</span>
                <span><b>Mengelak umat Islam daripada terjebak</b> dengan ajaran sesat dan amalan khurafat.</span>
              </div>
              <div class="p-2.5 bg-[#2d3036] border border-stone-600 flex items-start gap-2">
                <span class="text-[#ffd447] font-bold">6.</span>
                <span><b>Membersihkan akidah</b> daripada sebarang bentuk keraguan atau kekeliruan falsafah melampau.</span>
              </div>
              <div class="p-2.5 bg-[#2d3036] border border-stone-600 flex items-start gap-2 sm:col-span-2">
                <span class="text-[#ffd447] font-bold">7.</span>
                <span><b>Menghindarkan umat Islam daripada fahaman yang melampau</b> (ekstremisme atau liberalisme).</span>
              </div>
            </div>
          </div>
        `
      }
    ]
  },

  // ==========================================
  // 4. BIDANG FIQAH
  // ==========================================
  {
    id: "t5-p11",
    number: 11,
    field: "fikah",
    fieldLabel: "Bidang Fikah",
    title: "Pelajaran 11: Solat Sunat Istikharah dan Solat Sunat Tasbih",
    summary: "Maksud, hukum, dalil naqli, kaifiat pelaksanaan, lafaz niat, bacaan tasbih 300 kali, dan hikmah Solat Sunat Istikharah serta Solat Sunat Tasbih.",
    subtopics: [
      {
        id: "t5-p11-u1",
        badge: "UNIT 1",
        title: "Unit 1: Solat Sunat Istikharah",
        contentHtml: `
          <div class="space-y-4">
            <!-- 1. Maksud & Hukum -->
            <div class="grid sm:grid-cols-2 gap-3">
              <div class="p-3 bg-[#1f2328] border-2 border-[#ffd447]">
                <span class="badge-tag bg-[#ffd447] text-black font-extrabold px-2 py-0.5 text-xs">MAKSUD</span>
                <p class="text-sm text-white font-medium mt-1 leading-relaxed">
                  Solat sunat yang dilakukan untuk <b>memohon petunjuk Allah SWT</b> dalam menentukan pilihan bagi sesuatu perkara.
                </p>
              </div>
              <div class="p-3 bg-[#1f2328] border-2 border-[#2fd17a]">
                <span class="badge-tag bg-[#2fd17a] text-black font-extrabold px-2 py-0.5 text-xs">HUKUM</span>
                <p class="text-base text-[#2fd17a] font-bold mt-1">Sunat</p>
                <p class="text-xs text-slate-300 mt-0.5">Sangat dituntut ketika seseorang berasa ragu-ragu dalam membuat sesuatu keputusan yang harus.</p>
              </div>
            </div>

            <!-- 2. Dalil Naqli -->
            <div class="p-4 bg-[#1f2328] border-2 border-stone-600 space-y-2">
              <div class="flex items-center justify-between flex-wrap gap-2">
                <span class="badge-tag bg-amber-500 text-stone-900 font-bold px-2 py-0.5 text-xs">DALIL NAQLI</span>
                <span class="text-xs bg-[#2b1a0c] text-amber-200 px-2 py-0.5 border border-amber-700">Riwayat Muslim</span>
              </div>
              <p class="text-xs text-slate-300">
                Diriwayatkan daripada <b>Jabir bin Abdullah al-Ansari RA</b> bahawa Rasulullah SAW mengajar tentang Istikharah:
              </p>
              <p class="font-arabic text-lg md:text-xl text-amber-200 leading-loose text-right" dir="rtl">
                إِذَا هَمَّ أَحَدُكُمْ بِالأَمْرِ فَلْيَرْكَعْ رَكْعَتَيْنِ مِنْ غَيْرِ الْفَرِيضَةِ...
              </p>
              <p class="text-xs sm:text-sm text-slate-200 italic border-l-2 border-amber-400 pl-3">
                <b>Maksud:</b> "Jika salah seorang daripada kamu gusar tentang sesuatu perkara, maka dirikanlah solat sunat dua rakaat selain daripada yang difardukan..."
              </p>
            </div>

            <!-- 3. Kaifiat Pelaksanaan -->
            <div class="p-4 bg-[#1f2328] border-2 border-[#5e646d] space-y-3">
              <h4 class="text-sm font-bold text-[#ffd447] uppercase tracking-wider flex items-center gap-2">
                <span>🕌</span>
                <span>Kaifiat (Cara) Pelaksanaan Solat Sunat Istikharah</span>
              </h4>

              <div class="space-y-2.5 text-xs sm:text-sm text-slate-200">
                <!-- Lafaz Niat -->
                <div class="p-3 bg-[#2d3036] border border-stone-600">
                  <span class="text-[#ffd447] font-bold block mb-1">Lafaz Niat:</span>
                  <p class="font-arabic text-lg text-amber-200 text-right mb-1" dir="rtl">
                    أُصَلِّي سُنَّةَ الاِسْتِخَارَةِ رَكْعَتَيْنِ لِلَّهِ تَعَالَى
                  </p>
                  <p class="text-xs text-slate-300 italic">
                    (Sahaja aku solat sunat Istikharah dua rakaat kerana Allah Taala).
                  </p>
                </div>

                <div class="grid sm:grid-cols-2 gap-2.5">
                  <div class="p-2.5 bg-[#2d3036] border border-stone-600">
                    <span class="text-white font-bold block">Bilangan Rakaat:</span>
                    <span class="text-slate-300">2 rakaat.</span>
                  </div>
                  <div class="p-2.5 bg-[#2d3036] border border-stone-600">
                    <span class="text-white font-bold block">Cara Pelaksanaan:</span>
                    <span class="text-slate-300">Bersendirian (munfarid).</span>
                  </div>
                </div>

                <!-- Bacaan Surah -->
                <div class="p-3 bg-[#2d3036] border border-stone-600 space-y-1.5">
                  <span class="text-white font-bold block">Bacaan dalam Solat:</span>
                  <div class="grid sm:grid-cols-2 gap-2 text-xs">
                    <div class="p-2 bg-[#1f2328] border border-stone-700">
                      <b class="text-[#ffd447]">Rakaat Pertama:</b> Membaca Surah al-Fatihah dan Surah al-Kafirun (atau surah lain).
                    </div>
                    <div class="p-2 bg-[#1f2328] border border-stone-700">
                      <b class="text-[#ffd447]">Rakaat Kedua:</b> Membaca Surah al-Fatihah dan Surah al-Ikhlas (atau surah lain).
                    </div>
                  </div>
                </div>

                <!-- Selepas Salam -->
                <div class="p-2.5 bg-[#2d3036] border border-stone-600">
                  <span class="text-[#ffd447] font-bold">Selepas Salam:</span>
                  <span class="text-slate-300"> Membaca doa khusus Solat Sunat Istikharah dengan penuh tawaduk dan menyerahkan urusan pilihan sepenuhnya kepada ketentuan Allah SWT.</span>
                </div>
              </div>
            </div>

            <!-- 4. Hikmah Pelaksanaan -->
            <div class="p-4 bg-[#1f2328] border-2 border-[#2fd17a]">
              <h4 class="text-sm font-bold text-[#2fd17a] uppercase tracking-wider mb-2.5">
                Hikmah Pelaksanaan Solat Sunat Istikharah:
              </h4>
              <div class="space-y-2 text-xs sm:text-sm text-slate-200">
                <div class="p-2.5 bg-[#2d3036] border border-stone-600 flex items-start gap-2">
                  <span class="text-[#ffd447] font-bold">1.</span>
                  <span><b>Meningkatkan keimanan kepada Allah SWT</b> kerana menjadikan Allah SWT sebagai tempat bergantung dan memohon petunjuk.</span>
                </div>
                <div class="p-2.5 bg-[#2d3036] border border-stone-600 flex items-start gap-2">
                  <span class="text-[#ffd447] font-bold">2.</span>
                  <span><b>Mendidik umat Islam</b> agar sentiasa memohon sesuatu kepada Allah SWT terutamanya dalam membuat keputusan penting.</span>
                </div>
                <div class="p-2.5 bg-[#2d3036] border border-stone-600 flex items-start gap-2">
                  <span class="text-[#ffd447] font-bold">3.</span>
                  <span><b>Menjauhkan diri daripada perbuatan syirik</b> dengan memohon bantuan selain Allah SWT (seperti bomoh atau tilik nasib).</span>
                </div>
              </div>
            </div>
          </div>
        `
      },
      {
        id: "t5-p11-u2",
        badge: "UNIT 2",
        title: "Unit 2: Solat Sunat Tasbih",
        contentHtml: `
          <div class="space-y-4">
            <!-- 1. Maksud & Hukum -->
            <div class="grid sm:grid-cols-2 gap-3">
              <div class="p-3 bg-[#1f2328] border-2 border-[#ffd447]">
                <span class="badge-tag bg-[#ffd447] text-black font-extrabold px-2 py-0.5 text-xs">MAKSUD</span>
                <p class="text-sm text-white font-medium mt-1 leading-relaxed">
                  Solat sunat khusus yang mengandungi bacaan tasbih sebanyak <b>300 kali</b> dalam keseluruhan solat.
                </p>
              </div>
              <div class="p-3 bg-[#1f2328] border-2 border-[#2fd17a]">
                <span class="badge-tag bg-[#2fd17a] text-black font-extrabold px-2 py-0.5 text-xs">HUKUM</span>
                <p class="text-base text-[#2fd17a] font-bold mt-1">Sunat</p>
                <p class="text-xs text-slate-300 mt-0.5">Dianjurkan dilakukan setiap hari, seminggu sekali, sebulan sekali, setahun sekali, atau sekurang-kurangnya sekali seumur hidup.</p>
              </div>
            </div>

            <!-- 2. Dalil Naqli -->
            <div class="p-4 bg-[#1f2328] border-2 border-stone-600 space-y-2">
              <div class="flex items-center justify-between flex-wrap gap-2">
                <span class="badge-tag bg-amber-500 text-stone-900 font-bold px-2 py-0.5 text-xs">DALIL NAQLI</span>
                <span class="text-xs bg-[#2b1a0c] text-amber-200 px-2 py-0.5 border border-amber-700">Riwayat Abu Daud, Ibn Majah & at-Tirmidzi</span>
              </div>
              <p class="text-xs text-slate-300">
                Rasulullah SAW telah mengajar bapa saudara baginda, <b>al-Abbas RA</b>, tentang amalan solat yang dapat menghapuskan dosa:
              </p>
              <p class="font-arabic text-lg md:text-xl text-amber-200 leading-loose text-right" dir="rtl">
                أَنْ تُصَلِّيَ أَرْبَعَ رَكَعَاتٍ... فذٰلِكَ خَمْسٌ وَسَبْعُونَ فِي كُلِّ رَكْعَةٍ...
              </p>
              <p class="text-xs sm:text-sm text-slate-200 italic border-l-2 border-amber-400 pl-3">
                <b>Maksud:</b> "Maka yang demikian itu berjumlah 75 kali tasbih dalam setiap rakaat..."
              </p>
            </div>

            <!-- 3. Kaifiat Pelaksanaan -->
            <div class="p-4 bg-[#1f2328] border-2 border-[#5e646d] space-y-3">
              <h4 class="text-sm font-bold text-[#ffd447] uppercase tracking-wider flex items-center gap-2">
                <span>📿</span>
                <span>Kaifiat (Cara) Pelaksanaan Solat Sunat Tasbih</span>
              </h4>

              <!-- Lafaz Niat -->
              <div class="space-y-2 text-xs sm:text-sm">
                <div class="p-3 bg-[#2d3036] border border-stone-600">
                  <span class="text-[#ffd447] font-bold block mb-1">Lafaz Niat Siang (4 rakaat 1 salam):</span>
                  <p class="font-arabic text-lg text-amber-200 text-right mb-1" dir="rtl">
                    أُصَلِّي سُنَّةَ التَّسْبِيحِ أَرْبَعَ رَكَعَاتٍ لِلَّهِ تَعَالَى
                  </p>
                  <p class="text-xs text-slate-300 italic">(Sahaja aku solat sunat Tasbih empat rakaat kerana Allah Taala).</p>
                </div>

                <div class="p-3 bg-[#2d3036] border border-stone-600">
                  <span class="text-[#ffd447] font-bold block mb-1">Lafaz Niat Malam (2 rakaat 1 salam):</span>
                  <p class="font-arabic text-lg text-amber-200 text-right mb-1" dir="rtl">
                    أُصَلِّي سُنَّةَ التَّسْبِيحِ رَكْعَتَيْنِ لِلَّهِ تَعَالَى
                  </p>
                  <p class="text-xs text-slate-300 italic">(Sahaja aku solat sunat Tasbih dua rakaat kerana Allah Taala).</p>
                </div>
              </div>

              <!-- Bilangan Rakaat & Salam Table -->
              <div class="overflow-x-auto border border-stone-600">
                <table class="w-full text-left text-xs sm:text-sm text-slate-200">
                  <thead class="bg-[#2d3036] text-amber-300 font-bold uppercase border-b border-stone-600">
                    <tr>
                      <th class="p-2.5 border-r border-stone-600 w-36">Waktu</th>
                      <th class="p-2.5">Bilangan Rakaat & Salam</th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-stone-700">
                    <tr>
                      <td class="p-2.5 font-bold text-white border-r border-stone-600">Waktu Siang</td>
                      <td class="p-2.5">4 rakaat dengan 1 salam.</td>
                    </tr>
                    <tr class="bg-[#1c1f24]">
                      <td class="p-2.5 font-bold text-white border-r border-stone-600">Waktu Malam</td>
                      <td class="p-2.5">4 rakaat dengan 2 salam (2 rakaat + 2 rakaat).</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p class="text-xs text-slate-300"><b>Cara Pelaksanaan:</b> Boleh dilakukan secara <b>bersendirian</b> atau <b>berjemaah</b>.</p>

              <!-- Bacaan Tasbih -->
              <div class="p-3 bg-[#2d3036] border-2 border-[#ffd447]">
                <span class="text-xs font-bold text-[#ffd447] uppercase tracking-wider block mb-1">Lafaz Bacaan Tasbih:</span>
                <p class="font-arabic text-lg md:text-xl text-amber-200 text-center py-1" dir="rtl">
                  سُبْحَانَ اللَّهِ وَالْحَمْدُ لِلَّهِ وَلاَ إِلَٰهَ إِلاَّ اللَّهُ وَاللَّهُ أَكْبَرُ
                </p>
              </div>

              <!-- Taburan Bacaan Tasbih Table -->
              <div class="space-y-1.5">
                <div class="flex items-center justify-between">
                  <span class="text-xs font-bold text-white uppercase">Taburan Bacaan Tasbih:</span>
                  <span class="text-xs font-bold text-amber-300">75 kali setiap rakaat = 300 kali keseluruhan</span>
                </div>
                <div class="overflow-x-auto border border-stone-600">
                  <table class="w-full text-left text-xs sm:text-sm text-slate-200">
                    <thead class="bg-[#2d3036] text-amber-300 font-bold uppercase border-b border-stone-600">
                      <tr>
                        <th class="p-2 border-r border-stone-600 w-10 text-center">Bil.</th>
                        <th class="p-2 border-r border-stone-600">Tempat Bacaan</th>
                        <th class="p-2 text-right w-24">Bilangan</th>
                      </tr>
                    </thead>
                    <tbody class="divide-y divide-stone-700">
                      <tr>
                        <td class="p-2 text-center border-r border-stone-600 text-[#ffd447] font-bold">1</td>
                        <td class="p-2 border-r border-stone-600 font-medium">Selepas Surah (sebelum ruku')</td>
                        <td class="p-2 text-right font-bold text-amber-200">15 kali</td>
                      </tr>
                      <tr class="bg-[#1c1f24]">
                        <td class="p-2 text-center border-r border-stone-600 text-[#ffd447] font-bold">2</td>
                        <td class="p-2 border-r border-stone-600 font-medium">Ketika Ruku'</td>
                        <td class="p-2 text-right font-bold text-amber-200">10 kali</td>
                      </tr>
                      <tr>
                        <td class="p-2 text-center border-r border-stone-600 text-[#ffd447] font-bold">3</td>
                        <td class="p-2 border-r border-stone-600 font-medium">Ketika Iktidal</td>
                        <td class="p-2 text-right font-bold text-amber-200">10 kali</td>
                      </tr>
                      <tr class="bg-[#1c1f24]">
                        <td class="p-2 text-center border-r border-stone-600 text-[#ffd447] font-bold">4</td>
                        <td class="p-2 border-r border-stone-600 font-medium">Ketika Sujud Pertama</td>
                        <td class="p-2 text-right font-bold text-amber-200">10 kali</td>
                      </tr>
                      <tr>
                        <td class="p-2 text-center border-r border-stone-600 text-[#ffd447] font-bold">5</td>
                        <td class="p-2 border-r border-stone-600 font-medium">Ketika Duduk antara Dua Sujud</td>
                        <td class="p-2 text-right font-bold text-amber-200">10 kali</td>
                      </tr>
                      <tr class="bg-[#1c1f24]">
                        <td class="p-2 text-center border-r border-stone-600 text-[#ffd447] font-bold">6</td>
                        <td class="p-2 border-r border-stone-600 font-medium">Ketika Sujud Kedua</td>
                        <td class="p-2 text-right font-bold text-amber-200">10 kali</td>
                      </tr>
                      <tr>
                        <td class="p-2 text-center border-r border-stone-600 text-[#ffd447] font-bold">7</td>
                        <td class="p-2 border-r border-stone-600 font-medium">Ketika Duduk Istirahat / Duduk Tahiyyat (sebelum bangun/salam)</td>
                        <td class="p-2 text-right font-bold text-amber-200">10 kali</td>
                      </tr>
                      <tr class="bg-[#242830] font-bold text-white">
                        <td colspan="2" class="p-2 border-r border-stone-600 text-right uppercase">Jumlah Tasbih Satu Rakaat:</td>
                        <td class="p-2 text-right text-[#ffd447]">75 kali</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <!-- 4. Hikmah Pelaksanaan -->
            <div class="p-4 bg-[#1f2328] border-2 border-[#2fd17a]">
              <h4 class="text-sm font-bold text-[#2fd17a] uppercase tracking-wider mb-2.5">
                Hikmah Pelaksanaan Solat Sunat Tasbih:
              </h4>
              <div class="space-y-2 text-xs sm:text-sm text-slate-200">
                <div class="p-2.5 bg-[#2d3036] border border-stone-600 flex items-start gap-2">
                  <span class="text-[#ffd447] font-bold">1.</span>
                  <span><b>Mendapat keampunan Allah SWT</b> kerana mengamalkan sunnah Rasulullah SAW dan menghapuskan dosa kecil mahupun besar.</span>
                </div>
                <div class="p-2.5 bg-[#2d3036] border border-stone-600 flex items-start gap-2">
                  <span class="text-[#ffd447] font-bold">2.</span>
                  <span><b>Meraih ganjaran yang besar</b> daripada Allah SWT kerana sentiasa bertasbih dan mengagungkan kesucian-Nya.</span>
                </div>
                <div class="p-2.5 bg-[#2d3036] border border-stone-600 flex items-start gap-2">
                  <span class="text-[#ffd447] font-bold">3.</span>
                  <span><b>Memberi ketenangan jiwa</b> kerana memperbanyakkan zikir kepada Allah SWT.</span>
                </div>
              </div>
            </div>
          </div>
        `
      }
    ]
  },
  {
    id: "t5-p12",
    number: 12,
    field: "fikah",
    fieldLabel: "Bidang Fikah",
    title: "Pelajaran 12: Perkahwinan",
    summary: "Konsep perkahwinan (munakahat), dalil naqli, 5 hukum nikah, hikmah perkahwinan, golongan wanita haram dikahwini, 5 rukun nikah, susunan wali, mahar & walimatulurus, serta kemahiran keibubapaan.",
    subtopics: [
      {
        id: "t5-p12-u1",
        badge: "UNIT 1",
        title: "Unit 1: Perkahwinan",
        contentHtml: `
          <div class="space-y-4">
            <!-- 1. Maksud & Dalil -->
            <div class="p-4 bg-[#1f2328] border-2 border-[#ffd447] space-y-3">
              <span class="badge-tag bg-[#ffd447] text-black font-extrabold px-2 py-0.5 text-xs">MAKSUD PERKAHWINAN</span>
              <p class="text-base text-white font-medium leading-relaxed">
                Akad yang <b>menghalalkan persetubuhan</b> antara lelaki dengan perempuan mengikut hukum syarak.
              </p>

              <div class="p-3 bg-[#2d3036] border border-stone-600 space-y-2 mt-2">
                <span class="text-xs font-bold text-amber-300 uppercase block">Dalil Naqli:</span>
                <p class="text-xs sm:text-sm text-slate-200">
                  <b>1. Firman Allah SWT:</b><br />
                  <span class="font-arabic text-base text-amber-200 block text-right my-1" dir="rtl">وَأَنكِحُوا۟ ٱلْأَيَـٰمَىٰ مِنكُمْ وَٱلصَّـٰلِحِينَ مِنْ عِبَادِكُمْ وَإِمَآئِكُمْ...</span>
                  <i>(Surah an-Nur: 32) — Maksudnya: "Dan kahwinkanlah orang-orang bujang dalam kalangan kamu..."</i>
                </p>
                <p class="text-xs sm:text-sm text-slate-200 mt-2">
                  <b>2. Sabda Rasulullah SAW:</b><br />
                  <i>"Wahai para pemuda! Sesiapa yang mampu dalam kalangan kamu menyediakan belanja kahwin, maka hendaklah dia berkahwin..."</i> (Riwayat Abu Daud).
                </p>
              </div>
            </div>

            <!-- 2. Hukum Perkahwinan -->
            <div class="p-4 bg-[#1f2328] border-2 border-[#5e646d] space-y-2.5">
              <h4 class="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
                <span class="badge-tag bg-cyan-600 text-white font-bold px-2 py-0.5 text-xs">5 HUKUM</span>
                Hukum Perkahwinan Mengikut Situasi Individu:
              </h4>

              <div class="grid sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-200">
                <div class="p-2.5 bg-[#2d3036] border border-stone-600">
                  <b class="text-emerald-400">1. Harus:</b> Hukum asal bagi individu yang tiada desakan atau halangan untuk berkahwin.
                </div>
                <div class="p-2.5 bg-[#2d3036] border border-stone-600">
                  <b class="text-blue-400">2. Sunat:</b> Bagi individu yang mempunyai keinginan untuk berkahwin dan mampu menyediakan nafkah zahir serta batin.
                </div>
                <div class="p-2.5 bg-[#2d3036] border border-stone-600">
                  <b class="text-amber-400">3. Wajib:</b> Bagi individu yang bimbang terjerumus ke dalam kemaksiatan (seperti zina) sekiranya tidak berkahwin dan mampu memberikan nafkah.
                </div>
                <div class="p-2.5 bg-[#2d3036] border border-stone-600">
                  <b class="text-orange-400">4. Makruh:</b> Bagi individu yang mempunyai keinginan berkahwin tetapi tidak mampu memberikan nafkah (seperti menghidap penyakit berjangkit atau terlampau tua).
                </div>
                <div class="p-2.5 bg-[#2d3036] border border-stone-600 sm:col-span-2">
                  <b class="text-red-400">5. Haram:</b> Bagi individu yang bertujuan untuk menzalimi, menganiayai, atau memudaratkan pasangannya.
                </div>
              </div>
            </div>

            <!-- 3. Hikmah Perkahwinan -->
            <div class="p-4 bg-[#1f2328] border-2 border-[#2fd17a]">
              <h4 class="text-sm font-bold text-[#2fd17a] uppercase tracking-wider mb-2.5">
                Hikmah Pensyariatan Perkahwinan:
              </h4>
              <div class="grid sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-200">
                <div class="p-2.5 bg-[#2d3036] border border-stone-600 flex items-start gap-2">
                  <span class="text-[#ffd447] font-bold">1.</span>
                  <span><b>Memenuhi tuntutan batin</b> yang merupakan fitrah semula jadi manusia secara suci dan diredai.</span>
                </div>
                <div class="p-2.5 bg-[#2d3036] border border-stone-600 flex items-start gap-2">
                  <span class="text-[#ffd447] font-bold">2.</span>
                  <span><b>Memelihara diri</b> daripada keruntuhan akhlak dan gejala sosial yang mencemarkan maruah.</span>
                </div>
                <div class="p-2.5 bg-[#2d3036] border border-stone-600 flex items-start gap-2">
                  <span class="text-[#ffd447] font-bold">3.</span>
                  <span><b>Memelihara keturunan</b> yang baik dan sah bagi generasi akan datang.</span>
                </div>
                <div class="p-2.5 bg-[#2d3036] border border-stone-600 flex items-start gap-2">
                  <span class="text-[#ffd447] font-bold">4.</span>
                  <span><b>Mewujudkan ketenangan jiwa</b> melalui ikatan kasih sayang yang halal (mawaddah warahmah).</span>
                </div>
                <div class="p-2.5 bg-[#2d3036] border border-stone-600 flex items-start gap-2">
                  <span class="text-[#ffd447] font-bold">5.</span>
                  <span><b>Menghindari penyakit berbahaya</b> akibat perbuatan seks bebas dan tidak bermoral.</span>
                </div>
                <div class="p-2.5 bg-[#2d3036] border border-stone-600 flex items-start gap-2">
                  <span class="text-[#ffd447] font-bold">6.</span>
                  <span><b>Menjalinkan silaturahim</b> antara keluarga pihak suami dan isteri demi perpaduan masyarakat.</span>
                </div>
              </div>
            </div>

            <!-- 4. Golongan Wanita yang Haram Dikahwini -->
            <div class="p-4 bg-[#1f2328] border-2 border-rose-500 space-y-3">
              <span class="badge-tag bg-rose-600 text-white font-bold px-2 py-0.5 text-xs">BATASAN SYARAK</span>
              <h4 class="text-sm font-bold text-white uppercase tracking-wider">Golongan Wanita yang Haram Dikahwini:</h4>

              <div class="space-y-3 text-xs sm:text-sm text-slate-200">
                <!-- Haram Selama-lamanya -->
                <div class="p-3 bg-[#2d3036] border border-stone-600 space-y-2">
                  <b class="text-rose-400 block text-sm">A. Haram Selama-lamanya (Haram Mu'abbad):</b>
                  <ul class="space-y-1 list-disc list-inside text-slate-300">
                    <li><b>Keturunan:</b> Ibu, nenek ke atas, anak perempuan, cucu perempuan, adik-beradik perempuan, anak perempuan kepada adik-beradik (anak saudara).</li>
                    <li><b>Penyusuan:</b> Ibu susuan, nenek susuan, adik-beradik susuan, anak perempuan kepada adik-beradik susuan.</li>
                    <li><b>Persemendaan:</b> Ibu mertua, anak tiri (apabila ibunya telah disetubuhi), ibu tiri, dan menantu perempuan.</li>
                  </ul>
                </div>

                <!-- Haram Sementara -->
                <div class="p-3 bg-[#2d3036] border border-stone-600 space-y-1.5">
                  <b class="text-amber-400 block text-sm">B. Haram Sementara (Haram Mu'aqqat):</b>
                  <ol class="space-y-1 list-decimal list-inside text-slate-300">
                    <li>Mengumpulkan dua beradik perempuan dalam satu masa (memperisterikan adik-beradik serentak).</li>
                    <li>Perempuan yang masih beristerikan orang lain (masih dalam perkahwinan).</li>
                    <li>Perempuan musyrik sehingga dia masuk Islam.</li>
                    <li>Isteri yang ditalaq tiga sebelum berkahwin dengan lelaki lain, disetubuhi, diceraikan, dan tamat tempoh 'iddah.</li>
                  </ol>
                </div>
              </div>
            </div>

            <!-- 5. Rukun Nikah & Syarat-syaratnya -->
            <div class="p-4 bg-[#1f2328] border-2 border-[#ffd447] space-y-3">
              <div class="flex items-center justify-between flex-wrap gap-2">
                <h4 class="text-sm font-bold text-[#ffd447] uppercase tracking-wider">
                  5 Rukun Nikah dan Syarat-syarat Sah:
                </h4>
                <span class="text-xs bg-[#2b1a0c] text-amber-200 px-2 py-0.5 border border-amber-700">Wajib Dipenuhi Semasa Akad</span>
              </div>

              <div class="space-y-2.5 text-xs sm:text-sm text-slate-200">
                <div class="p-2.5 bg-[#2d3036] border border-stone-600">
                  <b class="text-[#ffd447]">1. Bakal Suami:</b> Islam, lelaki yang dikenal pasti, bukan mahram kepada bakal isteri, tidak dalam ihram haji/umrah, dan tidak mempunyai 4 orang isteri dalam satu masa.
                </div>
                <div class="p-2.5 bg-[#2d3036] border border-stone-600">
                  <b class="text-[#ffd447]">2. Bakal Isteri:</b> Islam, perempuan yang dikenal pasti, bukan mahram kepada bakal suami, tidak dalam ihram haji/umrah, dan bukan isteri orang atau dalam 'iddah.
                </div>
                <div class="p-2.5 bg-[#2d3036] border border-stone-600 space-y-2">
                  <div>
                    <b class="text-[#ffd447]">3. Wali:</b> Islam, lelaki, baligh, berakal, adil, merdeka, tidak dalam ihram haji/umrah, tidak dipaksa, dan tiada penyakit yang menjejaskan fikiran.
                  </div>
                  <div class="p-2 bg-[#1f2328] border border-stone-700 text-xs">
                    <span class="text-amber-300 font-bold block mb-1">Susunan Wali Nasab:</span>
                    Bapa → Datuk sebelah bapa ke atas → Adik-beradik lelaki kandung → Adik-beradik lelaki sebapa → Anak lelaki kepada adik-beradik lelaki kandung → Anak lelaki kepada adik-beradik lelaki sebapa → Bapa saudara sebelah bapa kandung → Bapa saudara sebelah bapa sebapa → Sepupu lelaki daripada bapa saudara kandung → Sepupu lelaki daripada bapa saudara sebapa → Wali Hakim.
                  </div>
                  <div class="p-2 bg-[#1f2328] border border-stone-700 text-xs">
                    <span class="text-rose-300 font-bold block mb-1">Sebab Perpindahan Wali Nasab ke Wali Hakim:</span>
                    Tiada wali nasab, wali berada jauh melebihi 2 marhalah, wali hilang/tidak dapat dikesan, mualaf yang tiada wali nasab, anak tidak sah taraf, wali dalam ihram haji/umrah, wali enggan mewalikan (<i>wali 'adal</i>), atau wali sendiri hendak berkahwin dengan perempuan tersebut dan tiada wali sesaraf.
                  </div>
                </div>
                <div class="p-2.5 bg-[#2d3036] border border-stone-600">
                  <b class="text-[#ffd447]">4. Dua Orang Saksi:</b> Islam, lelaki, baligh, berakal, adil, mempunyai pendengaran dan penglihatan yang baik, serta merdeka.
                </div>
                <div class="p-2.5 bg-[#2d3036] border border-stone-600 space-y-1">
                  <b class="text-[#ffd447]">5. Lafaz Akad Nikah (Sighah - Ijab & Qabul):</b>
                  <p class="text-slate-300">
                    <b>Ijab:</b> Lafaz penyerahan oleh wali/wakil. | <b>Qabul:</b> Lafaz penerimaan oleh bakal suami.<br />
                    <b>Syarat Sighah:</b> Menggunakan perkataan "nikah" atau "kahwin", bersambung ijab dan qabul tanpa diselangi perkataan lain, tidak bertali/bersyarat, tidak dibatasi tempoh masa (seperti nikah mut'ah), serta kelayakan wali dan suami berkekalan sehingga selesai akad.
                  </p>
                </div>
              </div>
            </div>

            <!-- 6. Mahar & Walimatul 'Urus -->
            <div class="grid sm:grid-cols-2 gap-3">
              <div class="p-3 bg-[#1f2328] border-2 border-stone-600">
                <span class="badge-tag bg-amber-600 text-white font-bold px-2 py-0.5 text-xs">MAHAR (MAS KAHWIN)</span>
                <p class="text-xs sm:text-sm text-slate-200 mt-2 leading-relaxed">
                  Harta yang <b>wajib diberikan oleh suami kepada isteri</b> dengan sebab pernikahan. Bentuknya boleh berupa wang tunai, barang berharga, atau sesuatu yang bernilai dari segi syarak.
                </p>
              </div>
              <div class="p-3 bg-[#1f2328] border-2 border-stone-600">
                <span class="badge-tag bg-emerald-600 text-white font-bold px-2 py-0.5 text-xs">WALIMATUL 'URUS</span>
                <p class="text-xs sm:text-sm text-slate-200 mt-2 leading-relaxed">
                  Kenduri yang diadakan sempena perkahwinan untuk menghebahkan ikatan perkahwinan. Hukum mengadakannya ialah <b>Sunat Muakkad</b>, manakala hukum memenuhi undangan walimah ialah <b>Fardu Ain</b> (dengan syarat-syarat tertentu).
                </p>
              </div>
            </div>
          </div>
        `
      },
      {
        id: "t5-p12-u2",
        badge: "UNIT 2",
        title: "Unit 2: Kemahiran Keibubapaan",
        contentHtml: `
          <div class="space-y-4">
            <!-- 1. Tanggungjawab Suami -->
            <div class="p-4 bg-[#1f2328] border-2 border-[#ffd447]">
              <span class="badge-tag bg-[#ffd447] text-black font-extrabold px-2 py-0.5 text-xs">KEPIMPINAN KELUARGA</span>
              <h4 class="text-sm font-bold text-white uppercase tracking-wider mt-2 mb-2">Tanggungjawab Suami:</h4>
              <p class="text-xs sm:text-sm text-slate-200 leading-relaxed">
                Menyediakan keperluan asas (makanan, pakaian, tempat tinggal), memberikan kasih sayang dan nafkah batin, memberikan layanan yang baik dan adil, memberikan didikan agama kepada keluarga, serta menyelesaikan mahar yang belum dijelaskan.
              </p>
            </div>

            <!-- 2. Tanggungjawab Suami Isteri Mengikut Aspek -->
            <div class="p-4 bg-[#1f2328] border-2 border-[#2fd17a] space-y-3">
              <h4 class="text-sm font-bold text-[#2fd17a] uppercase tracking-wider">
                Tanggungjawab Suami Isteri daripada Pelbagai Aspek:
              </h4>

              <div class="space-y-2.5 text-xs sm:text-sm text-slate-200">
                <!-- Aspek Akidah -->
                <div class="p-3 bg-[#2d3036] border border-stone-600">
                  <div class="flex items-center gap-2 mb-1">
                    <span class="badge-tag bg-amber-500 text-stone-900 font-bold px-2 py-0.5 text-xs">1. ASPEK AKIDAH</span>
                    <strong class="text-white">Penerapan Akidah Sahih</strong>
                  </div>
                  <p class="text-slate-300">
                    Menerapkan didikan akidah Islam yang betul sejak kecil, membentuk akidah keluarga berdasarkan pegangan Ahli Sunnah Wal Jamaah, memupuk asas ketakwaan, serta memelihara akidah keluarga daripada fahaman sesat dan amalan khurafat.
                  </p>
                </div>

                <!-- Aspek Ibadah -->
                <div class="p-3 bg-[#2d3036] border border-stone-600">
                  <div class="flex items-center gap-2 mb-1">
                    <span class="badge-tag bg-emerald-600 text-white font-bold px-2 py-0.5 text-xs">2. ASPEK IBADAH</span>
                    <strong class="text-white">Pelaksanaan Syariat Harian</strong>
                  </div>
                  <p class="text-slate-300">
                    Mendampingi keluarga dengan memberi pengetahuan ibadah yang betul, memastikan anggota keluarga menunaikan ibadah wajib (solat 5 waktu, puasa), mempraktikkan cara hidup bersyariat (seperti solat berjemaah dan tadarus al-Quran), serta memelihara keluarga daripada amalan menyeleweng.
                  </p>
                </div>

                <!-- Aspek Akhlak -->
                <div class="p-3 bg-[#2d3036] border border-stone-600">
                  <div class="flex items-center gap-2 mb-1">
                    <span class="badge-tag bg-cyan-600 text-white font-bold px-2 py-0.5 text-xs">3. ASPEK AKHLAK</span>
                    <strong class="text-white">Budi Pekerti dan Qudwah Hasanah</strong>
                  </div>
                  <p class="text-slate-300">
                    Menunjukkan akhlak mulia sebagai contoh ikutan (<i>qudwah hasanah</i>), memupuk sikap berkasih sayang dan bekerjasama dalam urusan rumah tangga, serta berhikmah dalam menegur anggota keluarga yang melakukan kemungkaran.
                  </p>
                </div>
              </div>
            </div>
          </div>
        `
      }
    ]
  },
  {
    id: "t5-p13",
    number: 13,
    field: "fikah",
    fieldLabel: "Bidang Fikah",
    title: "Pelajaran 13: Isu-Isu dalam Perkahwinan",
    summary: "Kaedah pembubaran perkahwinan (Talaq, Fasakh, Khul', Li'an), isu-isu berkaitan ('Iddah, Ruju', Nusyuz, Poligami, Hadanah & Anak Angkat), serta implikasi perkahwinan tanpa mengikut syariat dan undang-undang.",
    subtopics: [
      {
        id: "t5-p13-u1",
        badge: "UNIT 1",
        title: "Unit 1: Pembubaran Perkahwinan",
        contentHtml: `
          <div class="space-y-4">
            <div class="p-3 bg-[#1f2328] border border-stone-600">
              <p class="text-xs sm:text-sm text-slate-300">
                Pembubaran perkahwinan merujuk kepada <b>pemutusan ikatan perkahwinan yang sah</b> sama ada melalui perceraian atau pembatalan oleh mahkamah. Terdapat <b>4 cara utama pembubaran perkahwinan</b> dalam Islam:
              </p>
            </div>

            <!-- A. Talaq -->
            <div class="p-4 bg-[#1f2328] border-2 border-[#ffd447] space-y-3">
              <div class="flex items-center justify-between flex-wrap gap-2">
                <div class="flex items-center gap-2">
                  <span class="badge-tag bg-[#ffd447] text-black font-extrabold px-2 py-0.5 text-xs">CARA A</span>
                  <h4 class="text-base font-bold text-white">Talaq (طلاق)</h4>
                </div>
              </div>
              <p class="text-xs sm:text-sm text-slate-200">
                <b>Maksud:</b> Pembubaran perkahwinan oleh suami dengan lafaz talaq yang jelas (<i>sarih</i>) atau kiasan (<i>kinayah</i>).
              </p>

              <!-- Hukum Talaq -->
              <div class="p-3 bg-[#2d3036] border border-stone-600 space-y-1.5">
                <span class="text-xs font-bold text-amber-300 uppercase block">5 Hukum Talaq:</span>
                <ul class="text-xs sm:text-sm text-slate-200 space-y-1 list-disc list-inside">
                  <li><b>Harus:</b> Hukum asal talaq bagi memberikan jalan keluar kepada pasangan yang tidak dapat mempertahankan perkahwinan.</li>
                  <li><b>Wajib:</b> Apabila berlaku perselisihan yang tidak dapat didamaikan selepas melalui proses jawatankuasa pendamai (<i>Hakam</i>) di mahkamah.</li>
                  <li><b>Sunat:</b> Apabila isteri berakhlak buruk dan enggan berubah.</li>
                  <li><b>Makruh:</b> Menceraikan isteri yang berakhlak baik atau menceraikan tanpa sebab yang munasabah.</li>
                  <li><b>Haram:</b> Menceraikan isteri dalam keadaan haid, nifas, atau ketika suci selepas disetubuhi (<i>talaq bid'i</i>).</li>
                </ul>
              </div>

              <!-- Jenis Lafaz & Talaq -->
              <div class="grid sm:grid-cols-2 gap-2.5 text-xs sm:text-sm text-slate-200">
                <div class="p-2.5 bg-[#2d3036] border border-stone-600">
                  <b class="text-amber-400 block mb-1">Jenis Lafaz Talaq:</b>
                  1. <b>Sarih (Jelas):</b> Contohnya: <i>"Aku ceraikan engkau."</i><br />
                  2. <b>Kinayah (Kiasan):</b> Contohnya: <i>"Aku lepaskan engkau mulai hari ini."</i> (bergantung kepada niat).
                </div>
                <div class="p-2.5 bg-[#2d3036] border border-stone-600">
                  <b class="text-amber-400 block mb-1">Jenis Talaq:</b>
                  1. <b>Talaq Raj'i:</b> Boleh dirujuk semula dalam tempoh 'iddah tanpa akad nikah dan mahar baharu.<br />
                  2. <b>Talaq Ba'in:</b> Talaq yang tidak boleh dirujuk semula kecuali akad baharu (Ba'in Sughra) atau selepas kahwin lain (Ba'in Kubra).
                </div>
              </div>
            </div>

            <!-- B. Fasakh -->
            <div class="p-4 bg-[#1f2328] border-2 border-cyan-500 space-y-2">
              <div class="flex items-center gap-2">
                <span class="badge-tag bg-cyan-600 text-white font-bold px-2 py-0.5 text-xs">CARA B</span>
                <h4 class="text-base font-bold text-white">Fasakh (فسخ)</h4>
              </div>
              <p class="text-xs sm:text-sm text-slate-200">
                <b>Maksud:</b> Pembubaran perkahwinan melalui <b>kuasa hakim</b> dengan sebab-sebab tertentu mengikut permohonan isteri.<br />
                <b>Hukum:</b> Harus bagi isteri memohon fasakh.<br />
                <b>Contoh Sebab:</b> Suami sering memukul sehingga menyebabkan kecederaan fizikal, suami tidak memberi nafkah, atau suami menderita penyakit berat yang memudaratkan.
              </p>
            </div>

            <!-- C. Khul' -->
            <div class="p-4 bg-[#1f2328] border-2 border-purple-500 space-y-2">
              <div class="flex items-center gap-2">
                <span class="badge-tag bg-purple-600 text-white font-bold px-2 py-0.5 text-xs">CARA C</span>
                <h4 class="text-base font-bold text-white">Khul' / Tebus Talaq (خلع)</h4>
              </div>
              <p class="text-xs sm:text-sm text-slate-200">
                <b>Maksud:</b> Pembubaran perkahwinan atas <b>kehendak isteri</b> dengan membayar sejumlah ganti rugi/pampasan (<i>'iwad</i>) kepada suami.<br />
                <b>Hukum:</b> Harus.<br />
                <b>Contoh Bayaran ('Iwad):</b> Wang tunai, harta benda, emas, perak, saham, atau pemulangan semula mahar yang dipersetujui kedua-dua pihak.
              </p>
            </div>

            <!-- D. Li'an -->
            <div class="p-4 bg-[#1f2328] border-2 border-red-500 space-y-2">
              <div class="flex items-center gap-2">
                <span class="badge-tag bg-red-600 text-white font-bold px-2 py-0.5 text-xs">CARA D</span>
                <h4 class="text-base font-bold text-white">Li'an (لعان)</h4>
              </div>
              <div class="space-y-1.5 text-xs sm:text-sm text-slate-200">
                <p><b>Maksud:</b> Lafaz sumpah suami apabila menuduh isterinya berzina tanpa membawa 4 orang saksi atau untuk menafikan nasab anak.</p>
                <p><b>Hukum:</b> Wajib bagi suami untuk mengelakkan dirinya daripada dikenakan hukuman <i>qazaf</i> (80 kali sebatan).</p>
                <div class="p-2.5 bg-[#2d3036] border border-stone-600 text-xs">
                  <b>Cara Pelaksanaan:</b> Suami bersumpah 4 kali di hadapan hakim bahawa tuduhannya benar dan sumpah ke-5 menambah: <i>"Sesungguhnya laknat Allah akan menimpa diriku sekiranya aku berdusta."</i> Isteri menolak tuduhan dengan bersumpah 4 kali bahawa tuduhan itu dusta dan sumpah ke-5 menambah: <i>"Kemurkaan Allah akan menimpa diriku sekiranya tuduhan suamiku benar."</i>
                </div>
                <p class="text-xs text-rose-300"><b>Kesan Li'an:</b> Suami isteri terpisah dan haram berkahwin semula selama-lamanya, serta anak yang dinafikan nasab terputus nasabnya daripada suami.</p>
              </div>
            </div>
          </div>
        `
      },
      {
        id: "t5-p13-u2",
        badge: "UNIT 2",
        title: "Unit 2: Isu-Isu Berkaitan dengan Perkahwinan",
        contentHtml: `
          <div class="space-y-4">
            <!-- A. 'Iddah -->
            <div class="p-4 bg-[#1f2328] border-2 border-[#ffd447] space-y-3">
              <div class="flex items-center justify-between flex-wrap gap-2">
                <div class="flex items-center gap-2">
                  <span class="badge-tag bg-[#ffd447] text-black font-extrabold px-2 py-0.5 text-xs">ISU A</span>
                  <h4 class="text-base font-bold text-white">'Iddah (عدة)</h4>
                </div>
                <span class="text-xs bg-[#2b1a0c] text-amber-200 px-2 py-0.5 border border-amber-700">Hukum: Wajib</span>
              </div>
              <p class="text-xs sm:text-sm text-slate-200">
                <b>Maksud:</b> Tempoh masa yang perlu dilalui oleh seorang isteri selepas pembubaran perkahwinan atau kematian suami sebelum dibenarkan berkahwin semula.
              </p>

              <!-- Tempoh Iddah Table -->
              <div class="overflow-x-auto border border-stone-600">
                <table class="w-full text-left text-xs sm:text-sm text-slate-200">
                  <thead class="bg-[#2d3036] text-amber-300 font-bold uppercase border-b border-stone-600">
                    <tr>
                      <th class="p-2 border-r border-stone-600">Situasi Perceraian / Kematian</th>
                      <th class="p-2">Tempoh 'Iddah</th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-stone-700">
                    <tr>
                      <td class="p-2 border-r border-stone-600 font-medium">Bercerai hidup (belum disetubuhi)</td>
                      <td class="p-2 font-bold text-emerald-400">Tiada 'iddah</td>
                    </tr>
                    <tr class="bg-[#1c1f24]">
                      <td class="p-2 border-r border-stone-600 font-medium">Bercerai hidup (sudah disetubuhi & ada haid)</td>
                      <td class="p-2 font-bold text-amber-300">3 kali suci</td>
                    </tr>
                    <tr>
                      <td class="p-2 border-r border-stone-600 font-medium">Bercerai hidup (tiada haid/menopause/kanak-kanak)</td>
                      <td class="p-2 font-bold text-amber-300">3 bulan hijrah</td>
                    </tr>
                    <tr class="bg-[#1c1f24]">
                      <td class="p-2 border-r border-stone-600 font-medium">Bercerai mati (tidak hamil)</td>
                      <td class="p-2 font-bold text-amber-300">4 bulan 10 hari</td>
                    </tr>
                    <tr>
                      <td class="p-2 border-r border-stone-600 font-medium">Hamil (sama ada bercerai hidup atau mati)</td>
                      <td class="p-2 font-bold text-cyan-300">Sehingga melahirkan anak</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p class="text-xs text-slate-300"><b>Larangan Semasa 'Iddah:</b> Haram menerima pinangan lelaki lain secara terang atau kiasan, haram keluar rumah yang disediakan suami (kecuali dengan keharusan syarak), serta haram berhias (<i>ihdad</i>) khusus bagi wanita kematian suami.</p>
            </div>

            <!-- B. Ruju' -->
            <div class="p-4 bg-[#1f2328] border-2 border-emerald-500 space-y-2">
              <div class="flex items-center gap-2">
                <span class="badge-tag bg-emerald-600 text-white font-bold px-2 py-0.5 text-xs">ISU B</span>
                <h4 class="text-base font-bold text-white">Ruju' (رجوع)</h4>
              </div>
              <p class="text-xs sm:text-sm text-slate-200">
                <b>Maksud:</b> Hak suami untuk <b>mengembalikan ikatan perkahwinan</b> dengan isteri yang diceraikan dalam tempoh 'iddah.<br />
                <b>Hukum:</b> Harus.<br />
                <b>Syarat Ruju':</b> Suami berakal dan kerelaan sendiri, bukan perceraian kerana fasakh atau khul', bukan ditalaq tiga (Ba'in Kubra), isteri masih dalam tempoh 'iddah raj'i, dan menggunakan lafaz ruju' yang jelas.
              </p>
            </div>

            <!-- C. Nusyuz -->
            <div class="p-4 bg-[#1f2328] border-2 border-orange-500 space-y-2">
              <div class="flex items-center gap-2">
                <span class="badge-tag bg-orange-600 text-white font-bold px-2 py-0.5 text-xs">ISU C</span>
                <h4 class="text-base font-bold text-white">Nusyuz (نشوز)</h4>
              </div>
              <p class="text-xs sm:text-sm text-slate-200">
                <b>Maksud:</b> Keengganan isteri mentaati perintah atau permintaan suami yang sah menurut syarak.<br />
                <b>Hukum:</b> Haram dan berdosa besar.<br />
                <b>Contoh Perbuatan Nusyuz:</b> Enggan melayani suami tanpa keuzuran syar'i, enggan memenuhi perintah suami untuk menunaikan solat dan berpuasa, atau keluar rumah tanpa izin dan reda suami.
              </p>
            </div>

            <!-- D. Poligami -->
            <div class="p-4 bg-[#1f2328] border-2 border-blue-500 space-y-2">
              <div class="flex items-center gap-2">
                <span class="badge-tag bg-blue-600 text-white font-bold px-2 py-0.5 text-xs">ISU D</span>
                <h4 class="text-base font-bold text-white">Poligami (فوليكامي)</h4>
              </div>
              <p class="text-xs sm:text-sm text-slate-200">
                <b>Maksud:</b> Amalan beristeri lebih daripada seorang pada satu-satu masa.<br />
                <b>Hukum:</b> Harus (tertakluk kepada syarat kelayakan ketat).<br />
                <b>Syarat Kelayakan:</b> Tidak melebihi 4 orang isteri dalam satu masa, mampu berlaku adil dari segi zahir (giliran bermalam, makanan, tempat tinggal, pakaian), dan berkemampuan memberi nafkah zahir serta batin.
              </p>
            </div>

            <!-- E. Hadanah & Anak Angkat -->
            <div class="grid sm:grid-cols-2 gap-3">
              <div class="p-3 bg-[#1f2328] border-2 border-stone-600">
                <span class="badge-tag bg-teal-600 text-white font-bold px-2 py-0.5 text-xs">HADANAH</span>
                <p class="text-xs sm:text-sm text-slate-200 mt-2 leading-relaxed">
                  <b>Maksud:</b> Hak pengasuhan dan penjagaan anak yang belum <i>mumayyiz</i> serta tidak mampu menguruskan diri sendiri. Keutamaan hak hadanah diberikan kepada ibu selagi tidak gugur kelayakannya mengikut syarak.
                </p>
              </div>
              <div class="p-3 bg-[#1f2328] border-2 border-stone-600">
                <span class="badge-tag bg-indigo-600 text-white font-bold px-2 py-0.5 text-xs">ANAK ANGKAT</span>
                <p class="text-xs sm:text-sm text-slate-200 mt-2 leading-relaxed">
                  Anak orang lain yang dipelihara seperti anggota keluarga sendiri. Hukum memelihara anak angkat ialah <b>Harus</b>, namun tidak mempunyai hak seperti anak kandung dari segi nasab (dilarang bernasabkan bapa angkat), faraid (pusaka), dan wali nikah.
                </p>
              </div>
            </div>
          </div>
        `
      },
      {
        id: "t5-p13-u3",
        badge: "UNIT 3",
        title: "Unit 3: Implikasi Perkahwinan yang Tidak Mengikut Syariat dan Undang-undang Islam",
        contentHtml: `
          <div class="p-4 bg-[#1f2328] border-2 border-rose-500">
            <h4 class="text-base font-bold text-rose-400 mb-3">
              4 Implikasi Utama Perkahwinan yang Tidak Mengikut Saluran Syariat & Undang-undang:
            </h4>
            <div class="grid sm:grid-cols-2 gap-2.5 text-xs sm:text-sm text-slate-200">
              <div class="p-2.5 bg-[#2d3036] border border-stone-600 flex items-start gap-2">
                <span class="text-[#ffd447] font-bold">1.</span>
                <div>
                  <b class="text-white">Tindakan Undang-undang:</b>
                  <p class="text-slate-300 mt-0.5">Pasangan boleh didakwa di mahkamah syariah dan dikenakan hukuman denda atau penjara jika melakukan kesalahan nikah tanpa mengikut prosedur undang-undang keluarga Islam.</p>
                </div>
              </div>
              <div class="p-2.5 bg-[#2d3036] border border-stone-600 flex items-start gap-2">
                <span class="text-[#ffd447] font-bold">2.</span>
                <div>
                  <b class="text-white">Pembatalan Perkahwinan:</b>
                  <p class="text-slate-300 mt-0.5">Pasangan terpaksa dipisahkan (<i>faraq</i>) jika akad perkahwinan tersebut didapati tidak sah atau terbatal mengikut rukun dan syarat hukum syarak.</p>
                </div>
              </div>
              <div class="p-2.5 bg-[#2d3036] border border-stone-600 flex items-start gap-2">
                <span class="text-[#ffd447] font-bold">3.</span>
                <div>
                  <b class="text-white">Kehilangan Hak Syari'e:</b>
                  <p class="text-slate-300 mt-0.5">Isteri kehilangan dokumen sah untuk membuat sebarang tuntutan nafkah, nafkah 'iddah, mut'ah, hak penjagaan anak (<i>hadanah</i>), mahupun pembahagian harta pusaka sekiranya berlaku kematian suami.</p>
                </div>
              </div>
              <div class="p-2.5 bg-[#2d3036] border border-stone-600 flex items-start gap-2">
                <span class="text-[#ffd447] font-bold">4.</span>
                <div>
                  <b class="text-white">Masalah Pendaftaran Anak:</b>
                  <p class="text-slate-300 mt-0.5">Menghadapi kesukaran mendaftarkan kelahiran anak di Jabatan Pendaftaran Negara bagi mendapatkan sijil kelahiran yang sah, sekali gus menjejaskan urusan persekolahan dan masa depan anak.</p>
                </div>
              </div>
            </div>
          </div>
        `
      }
    ]
  },
  // ==========================================
  // 4. BIDANG FIQAH (Sambungan Pelajaran 14 & 15)
  // ==========================================
  {
    id: "t5-p14",
    number: 14,
    field: "fikah",
    fieldLabel: "Bidang Fikah",
    title: "Pelajaran 14: Pengurusan Harta Selepas Kematian (Wasiat dan Faraid)",
    summary: "Sistem pengurusan harta pusaka Islam merangkumi konsep wasiat (rukun, kadar 1/3, hikmah) dan faraid (dalil, ashab al-furud, asabah, kadar waris utama, dan hikmah).",
    subtopics: [
      {
        id: "t5-p14-u1",
        badge: "UNIT 1",
        title: "Unit 1: Wasiat dalam Islam",
        contentHtml: `
          <div class="space-y-4">
            <!-- 1. Maksud & Hukum -->
            <div class="grid sm:grid-cols-2 gap-3">
              <div class="p-3 bg-[#1f2328] border-2 border-[#ffd447]">
                <span class="badge-tag bg-[#ffd447] text-black font-extrabold px-2 py-0.5 text-xs">MAKSUD WASIAT</span>
                <p class="text-sm text-white font-medium mt-1 leading-relaxed">
                  Pengakuan yang dibuat oleh seseorang sewaktu hidup untuk <b>memindahkan hak miliknya atas hartanya selepas dia meninggal dunia</b> bagi tujuan kebajikan mengikut hukum syarak.
                </p>
              </div>
              <div class="p-3 bg-[#1f2328] border-2 border-[#2fd17a]">
                <span class="badge-tag bg-[#2fd17a] text-black font-extrabold px-2 py-0.5 text-xs">HUKUM WASIAT</span>
                <p class="text-base text-[#2fd17a] font-bold mt-1">Sunat</p>
                <p class="text-xs text-slate-300 mt-0.5">Bagi seseorang yang mempunyai harta peninggalan bernilai.</p>
              </div>
            </div>

            <!-- 2. Dalil Naqli -->
            <div class="p-4 bg-[#1f2328] border-2 border-stone-600 space-y-2.5">
              <span class="badge-tag bg-amber-500 text-stone-900 font-bold px-2 py-0.5 text-xs">DALIL NAQLI WASIAT</span>
              <div class="space-y-2 text-xs sm:text-sm text-slate-200">
                <div>
                  <b>1. Firman Allah SWT:</b>
                  <p class="font-arabic text-base text-amber-200 text-right my-1" dir="rtl">
                    كُتِبَ عَلَيْكُمْ إِذَا حَضَرَ أَحَدَكُمُ ٱلْمَوْتُ إِن تَرَكَ خَيْرًا ٱلْوَصِيَّةُ لِلْوَٰلِدَيْنِ وَٱلْأَقْرَبِينَ بِٱلْمَعْرُوفِ ۖ حَقًّـا عَلَى ٱلْمُتَّقِينَ
                  </p>
                  <p class="italic text-slate-300">
                    (Surah al-Baqarah: 180) — Maksud: "Diwajibkan ke atas kamu, apabila seseorang daripada kamu hampir mati, jika dia meninggalkan harta, hendaklah dia membuat wasiat untuk ibu bapa dan kaum kerabat secara baik, sebagai suatu kewajipan ke atas orang-orang yang bertakwa."
                  </p>
                </div>
                <div class="pt-2 border-t border-stone-700">
                  <b>2. Sabda Rasulullah SAW (daripada Abdullah bin Umar RA):</b>
                  <p class="font-arabic text-base text-amber-200 text-right my-1" dir="rtl">
                    مَا حَقُّ امْرِئٍ مُسْلِمٍ لَهُ شَيْءٌ يُوصِي فِيهِ يَبِيتُ لَيْلَتَيْنِ إِلاَّ وَوَصِيَّتُهُ مَكْتُوبَةٌ عِنْدَهُ
                  </p>
                  <p class="italic text-slate-300">
                    (Riwayat al-Bukhari) — Maksud: "Tidak berhak seseorang Muslim yang mempunyai sesuatu yang boleh diwasiatkan tidur selama dua malam melainkan wasiatnya ditulis di sisinya."
                  </p>
                </div>
              </div>
            </div>

            <!-- 3. Rukun & Syarat Sah Wasiat -->
            <div class="p-4 bg-[#1f2328] border-2 border-[#5e646d] space-y-2.5">
              <h4 class="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
                <span class="badge-tag bg-cyan-600 text-white font-bold px-2 py-0.5 text-xs">4 RUKUN</span>
                Rukun dan Syarat Sah Wasiat:
              </h4>
              <div class="grid sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-200">
                <div class="p-2.5 bg-[#2d3036] border border-stone-600">
                  <b class="text-[#ffd447]">1. Pewasiat (Pewasi):</b> Berakal, baligh, atas kerelaan sendiri (sukarela), dan merdeka.
                </div>
                <div class="p-2.5 bg-[#2d3036] border border-stone-600">
                  <b class="text-[#ffd447]">2. Penerima Wasiat (Musa Lahu):</b> Diketahui secara jelas (individu atau kumpulan tertentu), masih hidup semasa wasiat dibuat, dan mempunyai kelayakan memiliki harta.
                </div>
                <div class="p-2.5 bg-[#2d3036] border border-stone-600">
                  <b class="text-[#ffd447]">3. Harta yang Diwasiatkan (Musa Bihi):</b> Harta yang bernilai, boleh berpindah milik, dan bukannya sesuatu yang haram.
                </div>
                <div class="p-2.5 bg-[#2d3036] border border-stone-600">
                  <b class="text-[#ffd447]">4. Sighah (Ijab & Qabul):</b> Lafaz wasiat yang jelas (sarih) atau kiasan (kinayah), dan ada penerimaan (qabul) selepas kematian pewasiat.
                </div>
              </div>
            </div>

            <!-- 4. Kadar & Pembahagian Harta Wasiat -->
            <div class="p-4 bg-[#1f2328] border-2 border-amber-600 space-y-2">
              <span class="badge-tag bg-amber-600 text-white font-bold px-2 py-0.5 text-xs">BATASAN KADAR SYARAK</span>
              <ul class="space-y-1.5 text-xs sm:text-sm text-slate-200 list-disc list-inside">
                <li>Kadar harta yang diwasiatkan <b>tidak boleh melebihi 1/3 daripada keseluruhan harta</b> peninggalan selepas dijelaskan belanja pengurusan jenazah dan hutang piutang.</li>
                <li>Wasiat <b>tidak boleh diberikan kepada waris yang berhak mendapat harta pusaka (faraid)</b> kecuali jika dipersetujui oleh semua waris yang lain.</li>
              </ul>
            </div>

            <!-- 5. Hikmah Pensyariatan Wasiat -->
            <div class="p-4 bg-[#1f2328] border-2 border-[#2fd17a]">
              <h4 class="text-sm font-bold text-[#2fd17a] uppercase tracking-wider mb-2.5">
                Hikmah Pensyariatan Wasiat:
              </h4>
              <div class="grid sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-200">
                <div class="p-2 bg-[#2d3036] border border-stone-600">1. <b>Mendapat ganjaran pahala</b> yang berterusan selepas meninggal dunia.</div>
                <div class="p-2 bg-[#2d3036] border border-stone-600">2. <b>Memanfaatkan harta</b> bagi tujuan kebajikan masyarakat dan ummah.</div>
                <div class="p-2 bg-[#2d3036] border border-stone-600">3. <b>Menjamin kelangsungan operasi</b> sesebuah organisasi atau institusi kebajikan melalui suntikan dana.</div>
                <div class="p-2 bg-[#2d3036] border border-stone-600">4. <b>Menjaga kebajikan orang yang hampir</b> dengan si mati seperti anak angkat atau kerabat yang tidak layak menerima faraid.</div>
              </div>
            </div>
          </div>
        `
      },
      {
        id: "t5-p14-u2",
        badge: "UNIT 2",
        title: "Unit 2: Faraid dalam Islam",
        contentHtml: `
          <div class="space-y-4">
            <!-- 1. Maksud & Hukum -->
            <div class="grid sm:grid-cols-2 gap-3">
              <div class="p-3 bg-[#1f2328] border-2 border-[#ffd447]">
                <span class="badge-tag bg-[#ffd447] text-black font-extrabold px-2 py-0.5 text-xs">MAKSUD FARAID</span>
                <p class="text-sm text-white font-medium mt-1 leading-relaxed">
                  Pembahagian harta seorang Islam yang telah meninggal dunia kepada <b>waris-warisnya yang berhak</b> mengikut ketetapan hukum syarak.
                </p>
              </div>
              <div class="p-3 bg-[#1f2328] border-2 border-rose-500">
                <span class="badge-tag bg-rose-600 text-white font-extrabold px-2 py-0.5 text-xs">HUKUM FARAID</span>
                <p class="text-base text-rose-400 font-bold mt-1">Wajib</p>
                <p class="text-xs text-slate-300 mt-0.5">Wajib dilaksanakan mengikut kadar nisbah yang ditentukan al-Quran.</p>
              </div>
            </div>

            <!-- 2. Dalil Naqli -->
            <div class="p-4 bg-[#1f2328] border-2 border-stone-600 space-y-2.5">
              <span class="badge-tag bg-amber-500 text-stone-900 font-bold px-2 py-0.5 text-xs">DALIL NAQLI FARAID</span>
              <div class="space-y-2 text-xs sm:text-sm text-slate-200">
                <div>
                  <b>1. Firman Allah SWT:</b>
                  <p class="font-arabic text-base text-amber-200 text-right my-1" dir="rtl">
                    لِّلرِّجَالِ نَصِيبٌ مِّمَّا تَرَكَ ٱلْوَٰلِدَانِ وَٱلْأَقْرَبُونَ وَلِلنِّسَآءِ نَصِيبٌ مِّمَّا تَرَكَ ٱلْوَٰلِدَانِ وَٱلْأَقْرَبُونَ مِمَّا قَلَّ مِنْهُ أَوْ كَثُرَ ۚ نَصِيبًا مَّفْرُوضًا
                  </p>
                  <p class="italic text-slate-300">
                    (Surah an-Nisa': 7) — Maksud: "Orang lelaki ada bahagian daripada peninggalan ibu bapa dan kerabat mereka, dan orang perempuan juga ada bahagian daripada peninggalan ibu bapa dan kerabat mereka, sama ada sedikit atau banyak, iaitu bahagian yang telah ditetapkan."
                  </p>
                </div>
                <div class="pt-2 border-t border-stone-700">
                  <b>2. Sabda Rasulullah SAW (daripada Abdullah bin Abbas RA):</b>
                  <p class="font-arabic text-base text-amber-200 text-right my-1" dir="rtl">
                    أَلْحِقُوا الْفَرَائِضَ بِأَهْلِهَا فَمَا بَقِيَ فَهُوَ لأَوْلَى رَجُلٍ ذَكَرٍ
                  </p>
                  <p class="italic text-slate-300">
                    (Riwayat al-Bukhari & Muslim) — Maksud: "Serahkanlah bahagian-bahagian pusaka yang telah ditetapkan itu kepada pemiliknya. Mana-mana bahagian yang berbaki, maka serahkanlah kepada waris lelaki yang terdekat."
                  </p>
                </div>
              </div>
            </div>

            <!-- 3. Rukun & Syarat Sah Faraid -->
            <div class="p-4 bg-[#1f2328] border-2 border-[#5e646d] space-y-2">
              <h4 class="text-sm font-bold text-white uppercase tracking-wider">3 Rukun dan Syarat Sah Faraid:</h4>
              <div class="grid sm:grid-cols-3 gap-2 text-xs sm:text-sm text-slate-200">
                <div class="p-2.5 bg-[#2d3036] border border-stone-600">
                  <b class="text-[#ffd447] block mb-1">1. Si Mati (Al-Muwarrith):</b> Kematiannya telah disahkan secara hakiki atau hukum mahkamah.
                </div>
                <div class="p-2.5 bg-[#2d3036] border border-stone-600">
                  <b class="text-[#ffd447] block mb-1">2. Waris (Al-Warith):</b> Masih hidup semasa kematian si mati dan sah hubungannya dengan si mati.
                </div>
                <div class="p-2.5 bg-[#2d3036] border border-stone-600">
                  <b class="text-[#ffd447] block mb-1">3. Harta Pusaka (Al-Mauruth):</b> Harta milik si mati yang berbaki selepas tolak belanja jenazah, hutang, dan wasiat.
                </div>
              </div>
            </div>

            <!-- 4. Jenis Waris -->
            <div class="p-4 bg-[#1f2328] border-2 border-cyan-500 space-y-3">
              <h4 class="text-sm font-bold text-cyan-300 uppercase tracking-wider">Dua Kategori Utama Waris Faraid:</h4>
              <div class="space-y-2.5 text-xs sm:text-sm text-slate-200">
                <div class="p-3 bg-[#2d3036] border border-stone-600">
                  <b class="text-amber-300 block mb-1">1. Ashab al-Furud (أصحاب الفروض):</b>
                  Waris yang menerima harta pusaka mengikut kadar bahagian yang telah ditetapkan khusus oleh syarak (seperti 1/2, 1/3, 1/4, 1/6, 1/8, atau 2/3).
                </div>
                <div class="p-3 bg-[#2d3036] border border-stone-600 space-y-1.5">
                  <b class="text-emerald-300 block">2. Asabah (عصبة):</b>
                  Waris yang menerima baki harta pusaka selepas dibagikan kepada Ashab al-Furud. Terbahagi kepada 3 jenis:
                  <ul class="space-y-1 list-disc list-inside text-slate-300">
                    <li><b>Asabah bi al-Nafs:</b> Waris lelaki daripada anggota keluarga lelaki (seperti bapa, datuk, anak lelaki, dan adik-beradik lelaki).</li>
                    <li><b>Asabah bi al-Ghair:</b> Waris perempuan dengan sebab adanya anggota waris lelaki (seperti anak perempuan bersama anak lelaki).</li>
                    <li><b>Asabah ma'a al-Ghair:</b> Waris perempuan dengan sebab adanya anggota waris perempuan lain (seperti saudara perempuan kandung bersama anak perempuan).</li>
                  </ul>
                </div>
              </div>
            </div>

            <!-- 5. Kadar Pembahagian Harta Faraid Waris Utama -->
            <div class="p-4 bg-[#1f2328] border-2 border-[#ffd447] space-y-2">
              <h4 class="text-sm font-bold text-[#ffd447] uppercase tracking-wider">
                Kadar Pembahagian Harta Faraid (Waris Utama Fokus SPM):
              </h4>
              <div class="overflow-x-auto border border-stone-600">
                <table class="w-full text-left text-xs sm:text-sm text-slate-200">
                  <thead class="bg-[#2d3036] text-amber-300 uppercase border-b border-stone-600">
                    <tr>
                      <th class="p-2.5 border-r border-stone-600 w-32">Waris</th>
                      <th class="p-2.5">Kadar Bahagian & Syarat</th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-stone-700">
                    <tr>
                      <td class="p-2.5 font-bold text-white border-r border-stone-600">Bapa</td>
                      <td class="p-2.5">
                        • <b>1/6</b> (jika ada anak lelaki).<br />
                        • <b>Asabah</b> (jika tiada anak).<br />
                        • <b>1/6 + Asabah</b> (jika ada anak perempuan sahaja).
                      </td>
                    </tr>
                    <tr class="bg-[#1c1f24]">
                      <td class="p-2.5 font-bold text-white border-r border-stone-600">Ibu</td>
                      <td class="p-2.5">
                        • <b>1/3</b> (jika tiada anak atau tiada dua orang adik-beradik/lebih).<br />
                        • <b>1/6</b> (jika ada anak atau ada dua orang adik-beradik/lebih).
                      </td>
                    </tr>
                    <tr>
                      <td class="p-2.5 font-bold text-white border-r border-stone-600">Suami</td>
                      <td class="p-2.5">
                        • <b>1/2</b> (jika tiada anak).<br />
                        • <b>1/4</b> (jika ada anak).
                      </td>
                    </tr>
                    <tr class="bg-[#1c1f24]">
                      <td class="p-2.5 font-bold text-white border-r border-stone-600">Isteri</td>
                      <td class="p-2.5">
                        • <b>1/4</b> (jika tiada anak).<br />
                        • <b>1/8</b> (jika ada anak).
                      </td>
                    </tr>
                    <tr>
                      <td class="p-2.5 font-bold text-white border-r border-stone-600">Anak Lelaki</td>
                      <td class="p-2.5">Mengambil seluruh harta (jika tiada waris lain) atau menerima baki harta secara <b>Asabah bi al-Nafs</b>.</td>
                    </tr>
                    <tr class="bg-[#1c1f24]">
                      <td class="p-2.5 font-bold text-white border-r border-stone-600">Anak Perempuan</td>
                      <td class="p-2.5">
                        • <b>1/2</b> (jika seorang sahaja).<br />
                        • <b>2/3</b> (jika dua orang atau lebih).<br />
                        • <b>Asabah bi al-Ghair</b> (jika bersama anak lelaki).
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <!-- 6. Hikmah Faraid -->
            <div class="p-4 bg-[#1f2328] border-2 border-[#2fd17a]">
              <h4 class="text-sm font-bold text-[#2fd17a] uppercase tracking-wider mb-2">
                Hikmah Pensyariatan Faraid:
              </h4>
              <div class="space-y-1.5 text-xs sm:text-sm text-slate-200">
                <div class="p-2 bg-[#2d3036] border border-stone-600">1. <b>Mengelakkan pertikaian dan perebutan</b> dalam pembahagian harta dalam kalangan keluarga.</div>
                <div class="p-2 bg-[#2d3036] border border-stone-600">2. <b>Menjamin kelangsungan hidup waris</b> selepas kematian si mati secara adil dan saksama.</div>
                <div class="p-2 bg-[#2d3036] border border-stone-600">3. <b>Menegakkan keadilan</b> bagi pihak waris supaya tidak dizalimi atau ditipu oleh pihak yang tidak bertanggungjawab.</div>
                <div class="p-2 bg-[#2d3036] border border-stone-600">4. <b>Mengekalkan kasih sayang dan silaturahim</b> sesama anggota keluarga.</div>
              </div>
            </div>
          </div>
        `
      }
    ]
  },
  {
    id: "t5-p15",
    number: 15,
    field: "fikah",
    fieldLabel: "Bidang Fikah",
    title: "Pelajaran 15: Jenayah dalam Islam",
    summary: "Hukum jenayah Islam merangkumi maksud, hukum & dalil naqli, 3 kategori hukuman utama (Hudud, Qisas & Ta'zir), perincian kesalahan di bawah Hudud & Qisas, serta hikmah undang-undang jenayah Islam.",
    subtopics: [
      {
        id: "t5-p15-u1",
        badge: "UNIT 1",
        title: "Unit 1: Pengertian, Hukum & Dalil Jenayah",
        contentHtml: `
          <div class="space-y-4">
            <div class="grid sm:grid-cols-2 gap-3">
              <div class="p-3 bg-[#1f2328] border-2 border-[#ffd447]">
                <span class="badge-tag bg-[#ffd447] text-black font-extrabold px-2 py-0.5 text-xs">MAKSUD JENAYAH</span>
                <p class="text-sm text-white font-medium mt-1 leading-relaxed">
                  Kesalahan-kesalahan yang dinyatakan hukumannya dalam al-Quran, al-Sunnah, dan sebahagiannya daripada peruntukan mahkamah pemerintah (<i>al-Ahkam al-Sultaniyyah</i>).
                </p>
              </div>
              <div class="p-3 bg-[#1f2328] border-2 border-rose-500">
                <span class="badge-tag bg-rose-600 text-white font-extrabold px-2 py-0.5 text-xs">HUKUM MELAKSANAKAN</span>
                <p class="text-base text-rose-400 font-bold mt-1">Wajib</p>
                <p class="text-xs text-slate-300 mt-0.5">Ke atas pemerintah dan pihak berkuasa bagi menjaga keadilan dan keamanan negara.</p>
              </div>
            </div>

            <!-- Dalil Naqli -->
            <div class="p-4 bg-[#1f2328] border-2 border-stone-600 space-y-2.5">
              <span class="badge-tag bg-amber-500 text-stone-900 font-bold px-2 py-0.5 text-xs">DALIL NAQLI JENAYAH</span>
              <div class="space-y-2 text-xs sm:text-sm text-slate-200">
                <div>
                  <b>1. Firman Allah SWT:</b>
                  <p class="font-arabic text-base text-amber-200 text-right my-1" dir="rtl">
                    يَـٰأَيُّهَا ٱلَّذِينَ ءَامَنُوا۟ كُتِبَ عَلَيْكُمُ ٱلْقِصَاصُ فِي ٱلْقَتْلَى...
                  </p>
                  <p class="italic text-slate-300">
                    (Surah al-Baqarah: 178) — Maksud: "Wahai orang-orang yang beriman! Diwajibkan kamu menjalankan hukuman qisas (balasan yang seimbang) dalam perkara orang-orang yang mati dibunuh..."
                  </p>
                </div>
                <div class="pt-2 border-t border-stone-700">
                  <b>2. Sabda Rasulullah SAW (daripada Abdullah bin Mas'ud RA):</b>
                  <p class="font-arabic text-base text-amber-200 text-right my-1" dir="rtl">
                    لاَ يَحِلُّ دَمُ امْرِئٍ مُسْلِمٍ... إِلاَّ بِإِحْدَى ثَلاَثٍ: الثَّيِّبُ الزَّانِي، وَالنَّفْسُ بِالنَّفْسِ، وَالتَّارِكُ لِدِينِهِ الْمُفَارِقُ لِلْجَمَاعَةِ
                  </p>
                  <p class="italic text-slate-300">
                    (Riwayat Muslim) — Maksud: "Tidak halal darah seorang Muslim... melainkan salah satu daripada tiga: orang yang sudah berkahwin melakukan zina, membunuh jiwa, dan orang yang meninggalkan agamanya (murtad) serta keluar daripada jemaah..."
                  </p>
                </div>
              </div>
            </div>
          </div>
        `
      },
      {
        id: "t5-p15-u2",
        badge: "UNIT 2",
        title: "Unit 2: Kategori Hukuman Kesalahan Jenayah",
        contentHtml: `
          <div class="space-y-4">
            <p class="text-xs sm:text-sm text-slate-300">
              Kesalahan jenayah dalam Islam dibahagikan kepada <b>tiga jenis hukuman utama</b>:
            </p>

            <div class="grid sm:grid-cols-3 gap-3">
              <div class="p-3 bg-[#1f2328] border-2 border-rose-500">
                <span class="badge-tag bg-rose-600 text-white font-bold px-2 py-0.5 text-xs">KATEGORI 1</span>
                <h4 class="text-base font-bold text-white mt-1">Hudud</h4>
                <p class="text-xs text-slate-300 mt-1 leading-relaxed">Hukuman keseksaan yang telah ditetapkan kadar dan jenisnya dalam al-Quran dan Sunnah, menjadi hak Allah SWT.</p>
              </div>
              <div class="p-3 bg-[#1f2328] border-2 border-amber-500">
                <span class="badge-tag bg-amber-600 text-white font-bold px-2 py-0.5 text-xs">KATEGORI 2</span>
                <h4 class="text-base font-bold text-white mt-1">Qisas & Diyat</h4>
                <p class="text-xs text-slate-300 mt-1 leading-relaxed">Hukuman keseksaan balasan seimbang bagi kesalahan membunuh dan mencederakan tubuh badan, menjadi hak mangsa/waris.</p>
              </div>
              <div class="p-3 bg-[#1f2328] border-2 border-cyan-500">
                <span class="badge-tag bg-cyan-600 text-white font-bold px-2 py-0.5 text-xs">KATEGORI 3</span>
                <h4 class="text-base font-bold text-white mt-1">Ta'zir</h4>
                <p class="text-xs text-slate-300 mt-1 leading-relaxed">Hukuman keseksaan yang tidak ditetapkan jenisnya dalam nas, sebaliknya diputuskan melalui budi bicara hakim mahkamah.</p>
              </div>
            </div>
          </div>
        `
      },
      {
        id: "t5-p15-u3",
        badge: "UNIT 3",
        title: "Unit 3: Hukuman Hudud",
        contentHtml: `
          <div class="space-y-4">
            <div class="p-3 bg-[#1f2328] border border-stone-600">
              <p class="text-xs sm:text-sm text-slate-200">
                <b>Maksud Hudud:</b> Hukuman keseksaan yang telah ditetapkan jenis dan bentuknya dalam al-Quran dan al-Sunnah.<br />
                <b>Hukum:</b> Wajib dilaksanakan oleh pihak berkuasa / pemerintah (bukan individu awam).
              </p>
            </div>

            <!-- 5 Kesalahan Hudud -->
            <div class="space-y-2.5 text-xs sm:text-sm text-slate-200">
              <!-- 1. Minum Arak -->
              <div class="p-3 bg-[#1f2328] border-2 border-stone-600">
                <div class="flex items-center justify-between flex-wrap gap-1 mb-1">
                  <b class="text-[#ffd447] text-sm">1. Minum Arak:</b>
                  <span class="badge-tag bg-rose-600 text-white text-xs px-2 py-0.5">Sebatan 40 Kali</span>
                </div>
                <p class="text-slate-300">Meminum sebarang bahan yang memabukkan sama ada dinamakan arak atau tidak, banyak atau sedikit.</p>
              </div>

              <!-- 2. Mencuri -->
              <div class="p-3 bg-[#1f2328] border-2 border-stone-600">
                <div class="flex items-center justify-between flex-wrap gap-1 mb-1">
                  <b class="text-[#ffd447] text-sm">2. Mencuri (Sariqah):</b>
                  <span class="badge-tag bg-rose-600 text-white text-xs px-2 py-0.5">Potong Tangan</span>
                </div>
                <p class="text-slate-300">Mengambil harta orang lain secara tersembunyi (tanpa kerelaan) di tempat simpanannya dengan tujuan memilikinya. Hukuman potong tangan dan wajib memulangkan barang curian.</p>
              </div>

              <!-- 3. Qazaf -->
              <div class="p-3 bg-[#1f2328] border-2 border-stone-600">
                <div class="flex items-center justify-between flex-wrap gap-1 mb-1">
                  <b class="text-[#ffd447] text-sm">3. Qazaf:</b>
                  <span class="badge-tag bg-rose-600 text-white text-xs px-2 py-0.5">Sebatan 80 Kali</span>
                </div>
                <p class="text-slate-300">Tuduhan zina atau penafian nasab terhadap orang yang baik akhlaknya (muhsan). Hukuman 80 kali sebatan dan kesaksiannya ditolak selama-lamanya.</p>
              </div>

              <!-- 4. Zina -->
              <div class="p-3 bg-[#1f2328] border-2 border-stone-600 space-y-1.5">
                <b class="text-[#ffd447] text-sm block">4. Zina:</b>
                <p class="text-slate-300">Melakukan persetubuhan haram tanpa nikah yang sah antara lelaki dengan perempuan.</p>
                <div class="grid sm:grid-cols-2 gap-2 text-xs">
                  <div class="p-2 bg-[#2d3036] border border-stone-700">
                    <b class="text-amber-400 block mb-0.5">Bukan Muhsan (belum pernah berkahwin):</b>
                    Sebatan 100 kali dan dibuang daerah selama setahun.
                  </div>
                  <div class="p-2 bg-[#2d3036] border border-stone-700">
                    <b class="text-rose-400 block mb-0.5">Muhsan (sudah/pernah berkahwin):</b>
                    Rejam dengan batu sehingga mati.
                  </div>
                </div>
              </div>

              <!-- 5. Merompak -->
              <div class="p-3 bg-[#1f2328] border-2 border-stone-600 space-y-1.5">
                <b class="text-[#ffd447] text-sm block">5. Merompak (Hirabah):</b>
                <p class="text-slate-300">Melakukan serangan menggunakan kekerasan untuk merampas harta, membunuh, atau menakutkan orang awam secara terbuka. Hukuman mengikut kategori:</p>
                <ul class="space-y-1 list-disc list-inside text-slate-300 text-xs">
                  <li><b>Merampas harta & membunuh:</b> Dihukum bunuh kemudian disalib.</li>
                  <li><b>Tidak merampas harta tetapi membunuh:</b> Dihukum bunuh.</li>
                  <li><b>Merampas harta tetapi tidak membunuh:</b> Dipotong tangan dan kaki secara bersilang.</li>
                  <li><b>Tidak merampas harta & tidak membunuh (menakutkan orang sahaja):</b> Dibuang daerah.</li>
                </ul>
              </div>
            </div>
          </div>
        `
      },
      {
        id: "t5-p15-u4",
        badge: "UNIT 4",
        title: "Unit 4: Hukuman Qisas & Ta'zir",
        contentHtml: `
          <div class="space-y-4">
            <!-- Qisas -->
            <div class="p-4 bg-[#1f2328] border-2 border-amber-500 space-y-2.5">
              <span class="badge-tag bg-amber-600 text-white font-bold px-2 py-0.5 text-xs">HUKUMAN QISAS</span>
              <p class="text-xs sm:text-sm text-slate-200">
                <b>Maksud Qisas:</b> Hukuman keseksaan yang telah ditetapkan jenis dan bentuk hukumannya secara <b>balasan yang sama</b> seperti dalam al-Quran dan Sunnah.<br />
                <b>Hukum:</b> Wajib jika mangsa atau waris mangsa mahukan balasan yang sama.<br />
                <b>Penggantian / Pemaafan (Diyat):</b> Mangsa atau waris mangsa berhak menggantikan balasan qisas tersebut dengan <b>diyat</b> (pampasan/ganti rugi harta) atau memaafkannya secara ihsan.
              </p>

              <div class="grid sm:grid-cols-2 gap-2 text-xs text-slate-200">
                <div class="p-2.5 bg-[#2d3036] border border-stone-600">
                  <b class="text-[#ffd447] block mb-1">1. Pembunuhan:</b>
                  Hukuman mati (bunuh seimbang), atau diyat jika dimaafkan oleh waris mangsa. Jenis pembunuhan: sengaja, separa sengaja, dan tanpa niat.
                </div>
                <div class="p-2.5 bg-[#2d3036] border border-stone-600">
                  <b class="text-[#ffd447] block mb-1">2. Mencederakan Anggota:</b>
                  Balasan kecederaan yang sama seimbang, atau diyat jika dimaafkan oleh mangsa/waris mangsa.
                </div>
              </div>
            </div>

            <!-- Ta'zir -->
            <div class="p-4 bg-[#1f2328] border-2 border-cyan-500 space-y-2">
              <span class="badge-tag bg-cyan-600 text-white font-bold px-2 py-0.5 text-xs">HUKUMAN TA'ZIR</span>
              <p class="text-xs sm:text-sm text-slate-200">
                <b>Maksud Ta'zir:</b> Hukuman keseksaan yang <b>tidak ditetapkan jenis dan bentuknya</b> dalam nas al-Quran dan Sunnah, sebaliknya diputuskan oleh mahkamah.<br />
                <b>Hukum:</b> Hakim <b>harus</b> menjatuhkan hukuman berdasarkan ijtihad dan maslahat rakyat serta negara bagi kesalahan yang tiada peruntukan khas.<br />
                <b>Bentuk Hukuman Ta'zir:</b> Teguran/nasihat, denda kewangan, penjara, sebatan, dan hukuman mati mengikut kesesuaian kesalahan.
              </p>
            </div>

            <!-- Hikmah Jenayah Islam -->
            <div class="p-4 bg-[#1f2328] border-2 border-[#2fd17a]">
              <h4 class="text-sm font-bold text-[#2fd17a] uppercase tracking-wider mb-2">
                Hikmah Pensyariatan Hukuman Jenayah dalam Islam:
              </h4>
              <div class="grid sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-200">
                <div class="p-2 bg-[#2d3036] border border-stone-600">1. <b>Menegakkan keadilan</b> dalam kalangan manusia agar dapat hidup dengan aman sejahtera.</div>
                <div class="p-2 bg-[#2d3036] border border-stone-600">2. <b>Mendidik dan menghukum</b> bagi sebarang kesalahan dan maksiat supaya mendapat keampunan Allah SWT.</div>
                <div class="p-2 bg-[#2d3036] border border-stone-600">3. <b>Menjamin keselamatan, kestabilan, dan kedamaian</b> bagi masyarakat dan negara daripada ancaman penjenayah.</div>
                <div class="p-2 bg-[#2d3036] border border-stone-600">4. <b>Memelihara pertumbuhan ekonomi</b> daripada sebarang gangguan kecurian, rompakan, dan penipuan.</div>
              </div>
            </div>
          </div>
        `
      }
    ]
  },

  // ==========================================
  // 5. BIDANG SIRAH DAN TAMADUN ISLAM
  // ==========================================
  {
    id: "t5-p16",
    number: 16,
    field: "sirah",
    fieldLabel: "Bidang Sirah & Tamadun",
    title: "Pelajaran 16: Kerajaan Uthmaniyah",
    summary: "Sejarah penubuhan, 4 ibu kota, sultan-sultan terkenal (Uthman bin Ertughrul, Murad I, Muhammad al-Fatih, Sulaiman al-Qanuni), faktor kegemilangan, faktor kemerosotan, dan iktibar pemerintahan.",
    subtopics: [
      {
        id: "t5-p16-u1",
        badge: "UNIT 1",
        title: "Unit 1: Sejarah Kerajaan Uthmaniyah",
        contentHtml: `
          <div class="space-y-4">
            <div class="p-4 bg-[#1f2328] border-2 border-[#ffd447] space-y-2">
              <span class="badge-tag bg-[#ffd447] text-black font-extrabold px-2 py-0.5 text-xs">PROFIL KERAJAAN</span>
              <ul class="space-y-1.5 text-xs sm:text-sm text-slate-200 list-disc list-inside">
                <li><b>Asal Nama Kerajaan:</b> Bersempena nama <b>Uthman bin Ertughrul</b>, iaitu pengasas Kerajaan Uthmaniyah.</li>
                <li><b>Tempoh Pemerintahan:</b> Tahun 1299 hingga 1924 Masihi (sekitar <b>625 tahun</b>).</li>
                <li><b>Kawasan Pemerintahan:</b> Meliputi sebahagian besar benua <b>Asia, Eropah, dan Afrika</b>.</li>
                <li><b>Bilangan Pemerintah:</b> 37 orang pemerintah.</li>
                <li><b>Pemerintah Pertama:</b> Sultan Uthman bin Ertughrul.</li>
                <li><b>Pemerintah Terakhir:</b> Sultan Abdul Majid II.</li>
              </ul>
            </div>

            <!-- Pusat Pemerintahan -->
            <div class="p-4 bg-[#1f2328] border-2 border-stone-600 space-y-2">
              <h4 class="text-sm font-bold text-white uppercase tracking-wider">4 Pusat Pemerintahan (Ibu Negara):</h4>
              <div class="grid sm:grid-cols-2 md:grid-cols-4 gap-2 text-xs text-slate-200">
                <div class="p-2.5 bg-[#2d3036] border border-stone-600 text-center">
                  <span class="text-[#ffd447] font-bold block">1. Sogut</span>
                  <span class="text-slate-300">1299–1355 M</span>
                </div>
                <div class="p-2.5 bg-[#2d3036] border border-stone-600 text-center">
                  <span class="text-[#ffd447] font-bold block">2. Bursa</span>
                  <span class="text-slate-300">1335–1363 M</span>
                </div>
                <div class="p-2.5 bg-[#2d3036] border border-stone-600 text-center">
                  <span class="text-[#ffd447] font-bold block">3. Edirne</span>
                  <span class="text-slate-300">1363–1453 M</span>
                </div>
                <div class="p-2.5 bg-[#2d3036] border border-stone-600 text-center">
                  <span class="text-[#ffd447] font-bold block">4. Istanbul</span>
                  <span class="text-slate-300">1453–1924 M</span>
                </div>
              </div>
            </div>
          </div>
        `
      },
      {
        id: "t5-p16-u2",
        badge: "UNIT 2",
        title: "Unit 2: Sultan-Sultan Terkenal & Sumbangan",
        contentHtml: `
          <div class="space-y-3">
            <!-- A. Sultan Uthman bin Ertughrul -->
            <div class="p-3 bg-[#1f2328] border-2 border-stone-600 space-y-1">
              <div class="flex items-center justify-between flex-wrap gap-1">
                <b class="text-[#ffd447] text-sm">A. Sultan Uthman bin Ertughrul (Pemerintah Pertama)</b>
                <span class="text-xs text-slate-300">Memerintah 27 tahun (1258–1326 M)</span>
              </div>
              <ul class="text-xs sm:text-sm text-slate-200 space-y-0.5 list-disc list-inside">
                <li>Membebaskan wilayah Anatolia (Antalya) daripada penguasaan empayar Byzantine.</li>
                <li>Menghisytiharkan kemerdekaan Anatolia daripada Kerajaan Seljuk.</li>
                <li>Mengasaskan asas pemerintahan Kerajaan Uthmaniyah.</li>
              </ul>
            </div>

            <!-- B. Sultan Murad I bin Orhan -->
            <div class="p-3 bg-[#1f2328] border-2 border-stone-600 space-y-1">
              <div class="flex items-center justify-between flex-wrap gap-1">
                <b class="text-[#ffd447] text-sm">B. Sultan Murad I bin Orhan (Pemerintah Ketiga)</b>
                <span class="text-xs text-slate-300">Memerintah 30 tahun (1325–1388 M)</span>
              </div>
              <ul class="text-xs sm:text-sm text-slate-200 space-y-0.5 list-disc list-inside">
                <li>Membentuk pasukan tentera elit <b>Janissary (Janissari)</b>.</li>
                <li>Memodenkan angkatan tentera laut Uthmaniyah.</li>
                <li>Menjadikan Edirne sebagai ibu negara baharu.</li>
              </ul>
            </div>

            <!-- C. Sultan Muhammad al-Fatih -->
            <div class="p-3 bg-[#1f2328] border-2 border-[#ffd447] space-y-1">
              <div class="flex items-center justify-between flex-wrap gap-1">
                <b class="text-[#ffd447] text-sm">C. Sultan Muhammad al-Fatih bin Murad II (Pemerintah Ketujuh)</b>
                <span class="text-xs text-slate-300">Memerintah 31 tahun (1429–1481 M)</span>
              </div>
              <ul class="text-xs sm:text-sm text-slate-200 space-y-0.5 list-disc list-inside">
                <li>Berjaya <b>membuka Kota Constantinople (Qustantiniah) pada 857 H / 1453 M</b>, merealisasikan hadis Rasulullah SAW dan menamatkan empayar Byzantine.</li>
                <li>Menyatukan empayar di utara Balkan bagi mengekang ancaman serangan Hungary.</li>
                <li>Menukarkan Aya Sofia menjadi masjid dan membina Kompleks al-Fatih.</li>
              </ul>
            </div>

            <!-- D. Sultan Sulaiman al-Qanuni -->
            <div class="p-3 bg-[#1f2328] border-2 border-stone-600 space-y-1">
              <div class="flex items-center justify-between flex-wrap gap-1">
                <b class="text-[#ffd447] text-sm">D. Sultan Sulaiman al-Qanuni bin Selim I (Pemerintah Kesepuluh)</b>
                <span class="text-xs text-slate-300">Memerintah 48 tahun (1494–1566 M)</span>
              </div>
              <ul class="text-xs sm:text-sm text-slate-200 space-y-0.5 list-disc list-inside">
                <li>Pembukaan wilayah Belgrade, Algeria, dan Tunisia.</li>
                <li>Menyusun kanun perundangan khas empayar yang dikenali sebagai <b>Kanunname (Kanun-name)</b>.</li>
                <li>Mengadakan hubungan diplomatik strategik dengan Perancis.</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "t5-p16-u3",
        badge: "UNIT 3",
        title: "Unit 3: Faktor Kegemilangan, Kemerosotan & Iktibar",
        contentHtml: `
          <div class="space-y-4">
            <!-- Faktor Kegemilangan -->
            <div class="p-4 bg-[#1f2328] border-2 border-[#2fd17a] space-y-2">
              <h4 class="text-sm font-bold text-[#2fd17a] uppercase tracking-wider">4 Faktor Kegemilangan Kerajaan Uthmaniyah:</h4>
              <div class="grid sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-200">
                <div class="p-2 bg-[#2d3036] border border-stone-600">
                  <b class="text-emerald-400 block mb-0.5">1. Pentadbiran:</b>
                  Pemerintah berwibawa sebagai ketua tentera, ketua agama, dan hakim tertinggi; pentadbiran cekap serta laluan perdagangan strategik Selat Dardanelles dan Bosporus.
                </div>
                <div class="p-2 bg-[#2d3036] border border-stone-600">
                  <b class="text-emerald-400 block mb-0.5">2. Keilmuan:</b>
                  Masjid sebagai pusat perkembangan ilmu sains dan seni bina teknikal (seperti Masjid Kasbah di Algeria).
                </div>
                <div class="p-2 bg-[#2d3036] border border-stone-600">
                  <b class="text-emerald-400 block mb-0.5">3. Sosial:</b>
                  Penjagaan kebajikan rakyat berbilang kaum dan sistem wakaf sistematik dalam pendidikan dan kesihatan.
                </div>
                <div class="p-2 bg-[#2d3036] border border-stone-600">
                  <b class="text-emerald-400 block mb-0.5">4. Ketenteraan:</b>
                  Semangat jihad tinggi, tentera elit Janissari, sistem kebajikan dan persenjataan moden.
                </div>
              </div>
            </div>

            <!-- Faktor Kemerosotan -->
            <div class="p-4 bg-[#1f2328] border-2 border-rose-500 space-y-2">
              <h4 class="text-sm font-bold text-rose-400 uppercase tracking-wider">5 Faktor Kemerosotan Kerajaan Uthmaniyah:</h4>
              <ol class="space-y-1 text-xs sm:text-sm text-slate-200 list-decimal list-inside">
                <li><b>Teknologi ketenteraan yang ketinggalan</b> berbanding kuasa Barat sehingga kalah dalam siri peperangan.</li>
                <li><b>Kemerosotan ekonomi</b> dan beban hutang negara yang tinggi.</li>
                <li><b>Gerakan menuntut kemerdekaan</b> daripada wilayah-wilayah naungan.</li>
                <li><b>Kelemahan sistem pendidikan</b> yang menyebabkan kekurangan tenaga mahir pembangunan.</li>
                <li><b>Persaingan politik dalaman istana</b> dan perebutan kuasa dalam kalangan putera-putera raja.</li>
              </ol>
            </div>

            <!-- Iktibar -->
            <div class="p-4 bg-[#1f2328] border-2 border-amber-500">
              <h4 class="text-sm font-bold text-amber-300 uppercase tracking-wider mb-2">Iktibar daripada Pemerintahan Kerajaan Uthmaniyah:</h4>
              <ul class="space-y-1 text-xs sm:text-sm text-slate-200 list-disc list-inside">
                <li><b>Memilih pemimpin yang berwibawa</b> supaya urusan pentadbiran negara berjalan lancar.</li>
                <li><b>Sentiasa menerokai ilmu pengetahuan</b> agar mampu bersaing di peringkat antarabangsa.</li>
                <li><b>Menghayati semangat cintakan negara</b> serta rela berkorban mempertahankan kedaulatan tanah air.</li>
                <li><b>Sentiasa berpegang pada ajaran Islam</b> supaya kehidupan diberkati Allah SWT.</li>
                <li><b>Menolak campur tangan asing</b> demi memelihara maruah dan kedaulatan ummah.</li>
              </ul>
            </div>
          </div>
        `
      }
    ]
  },
  {
    id: "t5-p17",
    number: 17,
    field: "sirah",
    fieldLabel: "Bidang Sirah & Tamadun",
    title: "Pelajaran 17: Keunggulan Tokoh Islam",
    summary: "Riwayat hidup, akhlak, dan sumbangan tiga tokoh agung: Salahuddin al-Ayyubi, Hassan al-Banna, dan Profesor Ahmad Ibrahim, serta iktibar keunggulan mereka.",
    subtopics: [
      {
        id: "t5-p17-u1",
        badge: "UNIT 1",
        title: "Unit 1: Salahuddin Al-Ayyubi",
        contentHtml: `
          <div class="space-y-3">
            <div class="p-4 bg-[#1f2328] border-2 border-[#ffd447] space-y-2">
              <span class="badge-tag bg-[#ffd447] text-black font-extrabold px-2 py-0.5 text-xs">RIWAYAT HIDUP</span>
              <ul class="space-y-1 text-xs sm:text-sm text-slate-200 list-disc list-inside">
                <li><b>Nama Penuh:</b> Yusuf bin Ayyub bin Shadhi.</li>
                <li><b>Tarikh Lahir & Meninggal:</b> Lahir pada 532 H, meninggal dunia pada 589 H.</li>
                <li><b>Jawatan:</b> Sultan / Pemerintah bagi Kerajaan Ayyubiyyah.</li>
                <li><b>Guru Tersohor:</b> Ali bin al-Hasan bin Hibatullah bin 'Asakir al-Dimashqi.</li>
                <li><b>Ketinggian Akhlak:</b> Menghormati ulama, berani mempertahankan agama, dan prihatin terhadap kebajikan rakyat.</li>
              </ul>
            </div>

            <!-- Sumbangan Utama -->
            <div class="p-4 bg-[#1f2328] border-2 border-stone-600 space-y-2">
              <h4 class="text-sm font-bold text-white uppercase tracking-wider">Sumbangan Utama Salahuddin al-Ayyubi:</h4>
              <div class="space-y-1.5 text-xs sm:text-sm text-slate-200">
                <div class="p-2.5 bg-[#2d3036] border border-stone-600">
                  <b class="text-[#ffd447]">1. Ketenteraan:</b> Berjaya <b>membebaskan Baitul Maqdis</b> daripada cengkaman tentera Salib.
                </div>
                <div class="p-2.5 bg-[#2d3036] border border-stone-600">
                  <b class="text-[#ffd447]">2. Keilmuan:</b> Mengembalikan semula pegangan <b>akidah Ahli Sunnah Wal Jamaah</b> dalam kurikulum sistem pendidikan.
                </div>
                <div class="p-2.5 bg-[#2d3036] border border-stone-600">
                  <b class="text-[#ffd447]">3. Pentadbiran & Perubatan:</b> Mengubah dewan istana menjadi hospital yang dinamakan <b>Bimaristan al-Atiq</b>, serta menyediakan kedai ubat khas untuk mengagihkan ubat percuma mengikut preskripsi kepada pesakit.
                </div>
              </div>
            </div>
          </div>
        `
      },
      {
        id: "t5-p17-u2",
        badge: "UNIT 2",
        title: "Unit 2: Hassan Al-Banna",
        contentHtml: `
          <div class="space-y-3">
            <div class="p-4 bg-[#1f2328] border-2 border-emerald-500 space-y-2">
              <span class="badge-tag bg-emerald-600 text-white font-extrabold px-2 py-0.5 text-xs">RIWAYAT HIDUP</span>
              <ul class="space-y-1 text-xs sm:text-sm text-slate-200 list-disc list-inside">
                <li><b>Nama Penuh:</b> Hassan bin Ahmad bin Abd al-Rahman Muhammad al-Banna.</li>
                <li><b>Tarikh Lahir & Meninggal:</b> Lahir pada 25 Sha'ban 1323 H / 14 Oktober 1906, syahid pada 1368 H / 12 Februari 1949.</li>
                <li><b>Jawatan:</b> Mursyidul Am Ikhwanul Muslimin.</li>
                <li><b>Guru Tersohor:</b> Ahmad bin Abd al-Rahman al-Banna dan Sheikh Muhammad Zahran.</li>
                <li><b>Ketinggian Akhlak:</b> Memuliakan orang soleh dan warak, gigih berdakwah, serta berlapang dada menerima perbezaan pandangan.</li>
              </ul>
            </div>

            <!-- Sumbangan Utama -->
            <div class="p-4 bg-[#1f2328] border-2 border-stone-600 space-y-2">
              <h4 class="text-sm font-bold text-white uppercase tracking-wider">Sumbangan Utama Hassan al-Banna:</h4>
              <div class="space-y-1.5 text-xs sm:text-sm text-slate-200">
                <div class="p-2.5 bg-[#2d3036] border border-stone-600">
                  <b class="text-emerald-400">1. Hasil Karya Agung:</b> Menulis buku <i>Mudzakkarat al-Da'wah wa al-Da'iyah</i>, <i>Risalat al-Ta'alim</i>, dan himpunan doa harian <i>Al-Ma'thurat</i>.
                </div>
                <div class="p-2.5 bg-[#2d3036] border border-stone-600">
                  <b class="text-emerald-400">2. Gerakan Dakwah:</b> Mengasaskan pertubuhan <b>Ikhwanul Muslimin</b> yang memberi pengaruh besar kebangkitan Islam sedunia.
                </div>
                <div class="p-2.5 bg-[#2d3036] border border-stone-600">
                  <b class="text-emerald-400">3. Melahirkan Tokoh Masyhur:</b> Murid tersohor beliau termasuk Sayyid Qutb, Hassan al-Hudhaibi, Yusuf al-Qaradawi, dan Mustafa al-Siba'i.
                </div>
              </div>
            </div>
          </div>
        `
      },
      {
        id: "t5-p17-u3",
        badge: "UNIT 3",
        title: "Unit 3: Ahmad Bin Ibrahim & Iktibar",
        contentHtml: `
          <div class="space-y-4">
            <!-- Ahmad bin Ibrahim -->
            <div class="p-4 bg-[#1f2328] border-2 border-cyan-500 space-y-2.5">
              <div class="flex items-center gap-2">
                <span class="badge-tag bg-cyan-600 text-white font-bold px-2 py-0.5 text-xs">TOKOH PERUNDANGAN MALAYSIA</span>
                <h4 class="text-base font-bold text-white">Profesor Ahmad bin Ibrahim</h4>
              </div>
              <div class="space-y-2 text-xs sm:text-sm text-slate-200">
                <div class="p-2.5 bg-[#2d3036] border border-stone-600">
                  <b class="text-cyan-300">1. Hasil Karya Perundangan:</b>
                  Menghasilkan buku teks undang-undang keluarga Islam tersohor seperti <i>Undang-undang Keluarga Islam di Malaysia</i>, <i>Family Law in Malaysia</i>, <i>Sistem Undang-undang di Malaysia</i>, <i>Islamic Law in Malaysia</i>, dan pelopor jurnal hukum di Malaysia.
                </div>
                <div class="p-2.5 bg-[#2d3036] border border-stone-600">
                  <b class="text-cyan-300">2. Kehakiman:</b>
                  Pernah berkhidmat sebagai hakim berwibawa di Mahkamah Rayuan dan Mahkamah Syariah.
                </div>
                <div class="p-2.5 bg-[#2d3036] border border-stone-600">
                  <b class="text-cyan-300">3. Perundangan & Pendidikan:</b>
                  Anggota Panel Pengasas Kuliyyah Undang-undang Universiti Islam Antarabangsa Malaysia (UIAM), serta pengasas dan penggubal enakmen undang-undang Islam (hudud dan qisas) Negeri Kelantan pada tahun 1991.
                </div>
              </div>
            </div>

            <!-- Iktibar -->
            <div class="p-4 bg-[#1f2328] border-2 border-[#2fd17a]">
              <h4 class="text-sm font-bold text-[#2fd17a] uppercase tracking-wider mb-2">Iktibar daripada Keunggulan Tokoh:</h4>
              <ol class="space-y-1 text-xs sm:text-sm text-slate-200 list-decimal list-inside">
                <li><b>Mencontohi kegigihan tokoh dalam menuntut ilmu</b> sebagai bukti kecintaan terhadap ilmu.</li>
                <li><b>Bersifat cekal menyebarkan dakwah Islamiyyah</b> agar masyarakat dapat memahami Islam yang sebenar.</li>
                <li><b>Menyebarkan ilmu dan kepakaran</b> yang dimiliki agar dapat memberi manfaat kepada agama, bangsa, dan negara.</li>
                <li><b>Berusaha menjadi insan yang lebih berkualiti</b> supaya dapat berbakti kepada masyarakat dan negara.</li>
                <li><b>Bekerjasama dalam pembangunan negara</b> supaya negara dihormati di peringkat antarabangsa.</li>
              </ol>
            </div>
          </div>
        `
      }
    ]
  },

  // ==========================================
  // 6. BIDANG AKHLAK ISLAMIYAH
  // ==========================================
  {
    id: "t5-p18",
    number: 18,
    field: "akhlak",
    fieldLabel: "Bidang Akhlak Islamiyah",
    title: "Pelajaran 18: Tawaduk Menzahirkan Kesucian Jiwa",
    summary: "Maksud tawaduk, dalil naqli, contoh sifat tawaduk Rasulullah SAW (pergaulan, rumah tangga, makan minum), serta hikmah tawaduk.",
    subtopics: [
      {
        id: "t5-p18-u1",
        badge: "UNIT 1",
        title: "Unit 1: Maksud & Dalil Naqli Tawaduk",
        contentHtml: `
          <div class="space-y-4">
            <div class="p-4 bg-[#1f2328] border-2 border-[#ffd447]">
              <span class="badge-tag bg-[#ffd447] text-black font-extrabold px-2 py-0.5 text-xs">MAKSUD TAWADUK</span>
              <p class="text-base text-white font-medium mt-1 leading-relaxed">
                Sikap <b>kerendahan hati</b> kepada Allah SWT dan sesama manusia.
              </p>
            </div>

            <!-- Dalil Naqli -->
            <div class="p-4 bg-[#1f2328] border-2 border-stone-600 space-y-2.5">
              <span class="badge-tag bg-amber-500 text-stone-900 font-bold px-2 py-0.5 text-xs">DALIL NAQLI TAWADUK</span>
              <div class="space-y-2 text-xs sm:text-sm text-slate-200">
                <div>
                  <b>1. Sabda Rasulullah SAW (daripada Abu Hurairah RA):</b>
                  <p class="font-arabic text-base text-amber-200 text-right my-1" dir="rtl">
                    وَمَا تَوَاضَعَ أَحَدٌ لِلَّهِ إِلاَّ رَفَعَهُ اللَّهُ
                  </p>
                  <p class="italic text-slate-300">
                    (Riwayat Muslim) — Maksud: "Dan tidaklah seseorang merendahkan diri kerana Allah melainkan Allah akan mengangkat darjatnya."
                  </p>
                </div>
                <div class="pt-2 border-t border-stone-700">
                  <b>2. Sabda Rasulullah SAW (daripada 'Iyad bin Himar RA):</b>
                  <p class="font-arabic text-base text-amber-200 text-right my-1" dir="rtl">
                    إِنَّ اللَّهَ أَوْحَى إِلَيَّ أَنْ تَوَاضَعُوا حَتَّى لاَ يَفْخَرَ أَحَدٌ عَلَى أَحَدٍ، وَلاَ يَبْغِي أَحَدٌ عَلَى أَحَدٍ
                  </p>
                  <p class="italic text-slate-300">
                    (Riwayat Muslim) — Maksud: "Sesungguhnya Allah telah mewahyukan kepadamu agar bersifat tawaduk, janganlah seseorang antaramu bersikap sombong dan berbuat zalim kepada yang lain."
                  </p>
                </div>
              </div>
            </div>
          </div>
        `
      },
      {
        id: "t5-p18-u2",
        badge: "UNIT 2",
        title: "Unit 2: Contoh Tawaduk Rasulullah SAW & Hikmah",
        contentHtml: `
          <div class="space-y-4">
            <div class="p-4 bg-[#1f2328] border-2 border-stone-600 space-y-2.5">
              <h4 class="text-sm font-bold text-white uppercase tracking-wider">Contoh Sifat Tawaduk yang Diamalkan oleh Rasulullah SAW:</h4>
              <div class="space-y-2 text-xs sm:text-sm text-slate-200">
                <div class="p-2.5 bg-[#2d3036] border border-stone-600">
                  <b class="text-[#ffd447] block mb-0.5">1. Dalam Pergaulan:</b>
                  Rasulullah SAW menunjukkan sikap tawaduk ketika bergaul, terutamanya dengan kanak-kanak; baginda sentiasa mendahulukan ucapan salam apabila bertemu dan membelai rambut mereka dengan perasaan kasih sayang (Riwayat al-Bukhari daripada Anas bin Malik RA).
                </div>
                <div class="p-2.5 bg-[#2d3036] border border-stone-600">
                  <b class="text-[#ffd447] block mb-0.5">2. Dalam Kehidupan Rumah Tangga:</b>
                  Rasulullah SAW bersama keluarga menguruskan rumah tangga seperti membantu isteri, melayani keluarga, menjahit pakaian, dan menampal kasut atau selipar sendiri (Riwayat Ahmad daripada Sayyidatina Aisyah RA).
                </div>
                <div class="p-2.5 bg-[#2d3036] border border-stone-600">
                  <b class="text-[#ffd447] block mb-0.5">3. Ketika Makan dan Minum:</b>
                  Rasulullah SAW tidak pernah mencela makanan yang disediakan untuk baginda; jika menyukainya baginda akan makan, dan jika tidak menyukainya baginda meninggalkannya atau berdiam diri tanpa mengkritik (Riwayat Muslim).
                </div>
              </div>
            </div>

            <!-- Hikmah Tawaduk -->
            <div class="p-4 bg-[#1f2328] border-2 border-[#2fd17a]">
              <h4 class="text-sm font-bold text-[#2fd17a] uppercase tracking-wider mb-2">Hikmah Sifat Tawaduk:</h4>
              <div class="grid sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-200">
                <div class="p-2 bg-[#2d3036] border border-stone-600">1. <b>Membentuk insan bertakwa</b> kerana sentiasa mengamalkan sifat mahmudah.</div>
                <div class="p-2 bg-[#2d3036] border border-stone-600">2. <b>Dikasihi masyarakat</b> kerana tidak bersikap sombong dan angkuh.</div>
                <div class="p-2 bg-[#2d3036] border border-stone-600">3. <b>Membentuk keluarga harmoni</b> kerana saling menghormati antara satu sama lain.</div>
                <div class="p-2 bg-[#2d3036] border border-stone-600">4. <b>Mendapat darjat mulia di sisi Allah SWT</b> kerana sentiasa bersyukur dan merendah diri.</div>
              </div>
            </div>
          </div>
        `
      }
    ]
  },
  {
    id: "t5-p19",
    number: 19,
    field: "akhlak",
    fieldLabel: "Bidang Akhlak Islamiyah",
    title: "Pelajaran 19: Istiqamah Jalan Menuju Mujahadah",
    summary: "Maksud istiqamah, dalil naqli, cara memiliki sifat istiqamah, contoh istiqamah Rasulullah SAW dalam ibadah, serta faedah mengamalkannya.",
    subtopics: [
      {
        id: "t5-p19-u1",
        badge: "UNIT 1",
        title: "Unit 1: Maksud & Dalil Naqli Istiqamah",
        contentHtml: `
          <div class="space-y-4">
            <div class="p-4 bg-[#1f2328] border-2 border-[#ffd447]">
              <span class="badge-tag bg-[#ffd447] text-black font-extrabold px-2 py-0.5 text-xs">MAKSUD ISTIQAMAH</span>
              <p class="text-base text-white font-medium mt-1 leading-relaxed">
                <b>Ketaatan yang berterusan</b> dalam melaksanakan suruhan Allah SWT dan menjauhi larangan-Nya.
              </p>
            </div>

            <!-- Dalil Naqli -->
            <div class="p-4 bg-[#1f2328] border-2 border-stone-600 space-y-2.5">
              <span class="badge-tag bg-amber-500 text-stone-900 font-bold px-2 py-0.5 text-xs">DALIL NAQLI ISTIQAMAH</span>
              <div class="space-y-2 text-xs sm:text-sm text-slate-200">
                <div>
                  <b>1. Firman Allah SWT:</b>
                  <p class="font-arabic text-base text-amber-200 text-right my-1" dir="rtl">
                    فَاسْتَقِمْ كَمَا أُمِرْتَ...
                  </p>
                  <p class="italic text-slate-300">
                    (Surah Hud: 112) — Maksud: "Oleh itu, hendaklah engkau (wahai Muhammad) sentiasa tetap teguh di atas jalan yang betul sebagaimana yang telah diperintahkan kepadamu...."
                  </p>
                </div>
                <div class="pt-2 border-t border-stone-700">
                  <b>2. Sabda Rasulullah SAW (daripada Sufyan bin Abdullah RA):</b>
                  <p class="font-arabic text-base text-amber-200 text-right my-1" dir="rtl">
                    قُلْ آَمَنْتُ بِاللَّهِ ثُمَّ اسْتَقِمْ
                  </p>
                  <p class="italic text-slate-300">
                    (Riwayat Muslim) — Maksud: "Katakanlah: 'Aku beriman dengan Allah, kemudian beristiqamahlah kamu'."
                  </p>
                </div>
                <div class="pt-2 border-t border-stone-700 text-xs text-slate-300">
                  <b>3. Hadis Sayyidatina Aisyah RA (Muttafaq 'Alaih):</b> Amalan yang paling disukai Allah SWT ialah amalan yang dikerjakan secara berterusan (istiqamah) walaupun sedikit.
                </div>
              </div>
            </div>
          </div>
        `
      },
      {
        id: "t5-p19-u2",
        badge: "UNIT 2",
        title: "Unit 2: Cara Memiliki Istiqamah & Contoh Teladan",
        contentHtml: `
          <div class="space-y-4">
            <div class="p-4 bg-[#1f2328] border-2 border-stone-600 space-y-2">
              <h4 class="text-sm font-bold text-white uppercase tracking-wider">6 Cara Memiliki Sifat Istiqamah:</h4>
              <ol class="space-y-1.5 text-xs sm:text-sm text-slate-200 list-decimal list-inside">
                <li><b>Sentiasa bermujahadah melawan hawa nafsu</b> agar berterusan mengamalkan sifat mahmudah.</li>
                <li><b>Sentiasa berdoa memohon bantuan Allah SWT</b> agar teguh hati melaksanakan ketaatan.</li>
                <li><b>Sentiasa membaca dan mengambil iktibar</b> daripada kisah para rasul yang beristiqamah.</li>
                <li><b>Sentiasa muhasabah diri</b> agar ikhlas dan sabar dalam setiap tindakan.</li>
                <li><b>Sentiasa mempelajari ilmu</b> dengan istiqamah supaya menjadi amalan hidup harian.</li>
                <li><b>Sentiasa berkawan dengan rakan yang soleh</b> dan berdisiplin dalam kebaikan.</li>
              </ol>
            </div>

            <!-- Contoh Istiqamah Rasulullah -->
            <div class="p-4 bg-[#1f2328] border-2 border-[#2fd17a] space-y-2">
              <h4 class="text-sm font-bold text-[#2fd17a] uppercase tracking-wider">Contoh Sifat Istiqamah Rasulullah SAW dalam Ibadah:</h4>
              <p class="text-xs sm:text-sm text-slate-200 leading-relaxed">
                Rasulullah SAW sangat istiqamah beribadah kepada Allah SWT dan baginda tidak jemu memohon keampunan daripada Allah SWT walaupun baginda maksum. Sabda Rasulullah SAW: <i>"Demi Allah, sesungguhnya aku beristighfar dan bertaubat kepada Allah SWT lebih daripada 70 kali setiap hari"</i> (Riwayat al-Bukhari).
              </p>
            </div>
          </div>
        `
      }
    ]
  },
  {
    id: "t5-p20",
    number: 20,
    field: "akhlak",
    fieldLabel: "Bidang Akhlak Islamiyah",
    title: "Pelajaran 20: Alam Sekitar Penjana Minda",
    summary: "Maksud alam sekitar, dalil naqli al-Quran, 6 adab memelihara alam sekitar, dan hikmah menjaga kelestarian alam.",
    subtopics: [
      {
        id: "t5-p20-u1",
        badge: "UNIT 1",
        title: "Unit 1: Maksud & Dalil Menjaga Alam Sekitar",
        contentHtml: `
          <div class="space-y-4">
            <div class="p-4 bg-[#1f2328] border-2 border-[#ffd447]">
              <span class="badge-tag bg-[#ffd447] text-black font-extrabold px-2 py-0.5 text-xs">MAKSUD ALAM SEKITAR</span>
              <p class="text-base text-white font-medium mt-1 leading-relaxed">
                Segala <b>benda hidup dan bukan hidup</b> yang terdapat di sekeliling manusia.
              </p>
              <p class="text-xs text-amber-200 mt-2">
                <b>Info Tambahan:</b> Hari Alam Sekitar Malaysia disambut pada <b>21 hingga 27 Oktober</b> setiap tahun.
              </p>
            </div>

            <!-- Dalil Naqli -->
            <div class="p-4 bg-[#1f2328] border-2 border-stone-600 space-y-2.5">
              <span class="badge-tag bg-amber-500 text-stone-900 font-bold px-2 py-0.5 text-xs">DALIL AL-QURAN</span>
              <div class="space-y-2 text-xs sm:text-sm text-slate-200">
                <div>
                  <b>1. Kekuasaan Allah ke atas Alam (Surah al-Hajj: 64):</b>
                  <p class="font-arabic text-base text-amber-200 text-right my-1" dir="rtl">
                    لَّهُۥ مَا فِي ٱلسَّمَـٰوَٰتِ وَمَا فِي ٱلۡأَرۡضِ...
                  </p>
                  <p class="italic text-slate-300">"Segala yang ada di langit dan di bumi adalah kepunyaan-Nya. Dan sesungguhnya Allah, Dialah Yang Maha Kaya lagi Maha Terpuji."</p>
                </div>
                <div class="pt-2 border-t border-stone-700">
                  <b>2. Larangan Melakukan Kerosakan (Surah al-Baqarah: 11–12):</b>
                  <p class="font-arabic text-base text-amber-200 text-right my-1" dir="rtl">
                    وَإِذَا قِيلَ لَهُمۡ لَا تُفۡسِدُواْ فِي ٱلۡأَرۡضِ قَالُوٓاْ إِنَّمَا نَحۡنُ مُصۡلِحُونَ...
                  </p>
                  <p class="italic text-slate-300">"Dan apabila dikatakan kepada mereka, 'Janganlah kamu membuat kerosakan di muka bumi', mereka menjawab, 'Sesungguhnya kami orang-orang yang membuat kebaikan.' Ketahuilah! Bahawa sesungguhnya merekalah orang-orang yang membuat kerosakan, tetapi mereka tidak sedar."</p>
                </div>
              </div>
            </div>
          </div>
        `
      },
      {
        id: "t5-p20-u2",
        badge: "UNIT 2",
        title: "Unit 2: Adab & Hikmah Menjaga Alam Sekitar",
        contentHtml: `
          <div class="space-y-4">
            <!-- 6 Adab -->
            <div class="p-4 bg-[#1f2328] border-2 border-stone-600 space-y-2">
              <h4 class="text-sm font-bold text-white uppercase tracking-wider">6 Adab Utama Menjaga Alam Sekitar:</h4>
              <div class="grid sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-200">
                <div class="p-2.5 bg-[#2d3036] border border-stone-600">
                  <b class="text-[#ffd447]">1. Mengekalkan ekosistem</b> flora dan fauna agar tidak terancam dan pupus.
                </div>
                <div class="p-2.5 bg-[#2d3036] border border-stone-600">
                  <b class="text-[#ffd447]">2. Memelihara dan memulihara</b> alam sekitar (contoh: penanaman semula pokok bakau).
                </div>
                <div class="p-2.5 bg-[#2d3036] border border-stone-600">
                  <b class="text-[#ffd447]">3. Mengekalkan keceriaan dan kebersihan</b> (contoh: gotong-royong pembersihan).
                </div>
                <div class="p-2.5 bg-[#2d3036] border border-stone-600">
                  <b class="text-[#ffd447]">4. Menjaga kelestarian alam</b> (contoh: menjaga kebersihan sungai dan laut).
                </div>
                <div class="p-2.5 bg-[#2d3036] border border-stone-600">
                  <b class="text-[#ffd447]">5. Mengamalkan cara hidup mesra alam</b> (contoh: amalan kitar semula 3R).
                </div>
                <div class="p-2.5 bg-[#2d3036] border border-stone-600">
                  <b class="text-[#ffd447]">6. Berjimat dan tidak membazir</b> dalam menggunakan sumber air harian.
                </div>
              </div>
            </div>

            <!-- Hikmah -->
            <div class="p-4 bg-[#1f2328] border-2 border-[#2fd17a]">
              <h4 class="text-sm font-bold text-[#2fd17a] uppercase tracking-wider mb-2">Hikmah Adab Menjaga Alam Sekitar:</h4>
              <ol class="space-y-1 text-xs sm:text-sm text-slate-200 list-decimal list-inside">
                <li><b>Melahirkan insan yang mencintai alam</b> kerana menyedari amanah khalifah Allah SWT.</li>
                <li><b>Melapangkan fikiran dan menenangkan jiwa</b> dengan panorama keindahan alam semulajadi.</li>
                <li><b>Menikmati persekitaran yang bersih</b> dan terhindar daripada jangkitan wabak penyakit.</li>
                <li><b>Melestarikan alam sekitar yang indah</b> untuk faedah generasi akan datang.</li>
                <li><b>Meningkatkan sumber pendapatan</b> ekonomi negara menerusi aktiviti eko-pelancongan.</li>
              </ol>
            </div>
          </div>
        `
      }
    ]
  },
  {
    id: "t5-p21",
    number: 21,
    field: "akhlak",
    fieldLabel: "Bidang Akhlak Islamiyah",
    title: "Pelajaran 21: Sifat Mazmumah Meracuni Hati",
    summary: "Pengertian sifat mazmumah, 3 sifat fokus (Riya', Ujub, Hasad), dalil & contoh amalan, spektrum ilmu 10 mazmumah Imam al-Ghazali, hasad al-ghibtah, serta cara dan hikmah meninggalkannya.",
    subtopics: [
      {
        id: "t5-p21-u1",
        badge: "UNIT 1",
        title: "Unit 1: Tiga Sifat Mazmumah Utama",
        contentHtml: `
          <div class="space-y-4">
            <div class="p-3 bg-[#1f2328] border border-stone-600">
              <span class="badge-tag bg-rose-600 text-white font-bold px-2 py-0.5 text-xs">MAKSUD SIFAT MAZMUMAH</span>
              <p class="text-sm text-slate-200 mt-1">
                Sifat dan tingkah laku keji yang berlawanan dengan syarak serta meracuni kesucian hati manusia.
              </p>
            </div>

            <!-- A. Riya' -->
            <div class="p-4 bg-[#1f2328] border-2 border-rose-500 space-y-2">
              <div class="flex items-center justify-between flex-wrap gap-1">
                <h4 class="text-base font-bold text-white">A. Riya' (رياء)</h4>
                <span class="text-xs bg-[#2b1a0c] text-rose-300 px-2 py-0.5 border border-rose-700">Syirik Kecil</span>
              </div>
              <p class="text-xs sm:text-sm text-slate-200">
                <b>Maksud:</b> Melakukan amalan untuk <b>dilihat dan dipuji</b> oleh orang lain.
              </p>
              <div class="p-2.5 bg-[#2d3036] border border-stone-700 text-xs text-slate-300 space-y-1">
                <p><b>Dalil al-Quran (Surah al-Ma'un: 4–6):</b> <span class="font-arabic text-amber-200" dir="rtl">فَوَيۡلٞ لِّلۡمُصَلِّينَ ٱلَّذِينَ هُمۡ عَن صَلَاتِهِمۡ سَاهُونَ ٱلَّذِينَ هُمۡ يُرَآءُونَ</span></p>
                <p><b>Hadis:</b> <i>"Sesungguhnya yang paling aku takuti ke atas kamu ialah syirik kecil... iaitu riya'..."</i> (Riwayat Ahmad).</p>
                <p><b>Contoh:</b> Solat sunat hanya apabila berada di hadapan orang ramai atau bersedekah kerana mengharapkan sanjungan manusia.</p>
              </div>
            </div>

            <!-- B. Ujub -->
            <div class="p-4 bg-[#1f2328] border-2 border-amber-500 space-y-2">
              <h4 class="text-base font-bold text-white">B. Ujub (عجب)</h4>
              <p class="text-xs sm:text-sm text-slate-200">
                <b>Maksud:</b> Berasa <b>bangga dengan amalan dan kelebihan</b> yang ada pada diri sendiri.
              </p>
              <div class="p-2.5 bg-[#2d3036] border border-stone-700 text-xs text-slate-300 space-y-1">
                <p><b>Dalil al-Quran (Surah at-Taubah: 25):</b> <span class="font-arabic text-amber-200" dir="rtl">...إِذۡ أَعۡجَبَتۡكُمۡ كَثۡرَتُكُمۡ فَلَمۡ تُغۡنِ عَنكُمۡ شَيۡـًٔا...</span></p>
                <p><b>Hadis:</b> Hadis lelaki sombong yang bangga diri dengan pakaian lalu dibenamkan oleh Allah ke dalam bumi (Riwayat Muslim).</p>
                <p><b>Contoh:</b> Berasa bangga dengan kehebatan ilmu sendiri atau merasakan diri lebih soleh berbanding orang lain.</p>
              </div>
            </div>

            <!-- C. Hasad -->
            <div class="p-4 bg-[#1f2328] border-2 border-purple-500 space-y-2">
              <h4 class="text-base font-bold text-white">C. Hasad (حسد)</h4>
              <p class="text-xs sm:text-sm text-slate-200">
                <b>Maksud:</b> Perasaan <b>dengki melihat kelebihan</b> orang lain dan berharap supaya kelebihan tersebut hilang daripadanya.
              </p>
              <div class="p-2.5 bg-[#2d3036] border border-stone-700 text-xs text-slate-300 space-y-1">
                <p><b>Dalil al-Quran (Surah al-Falaq: 5):</b> <span class="font-arabic text-amber-200" dir="rtl">وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ</span></p>
                <p><b>Hadis:</b> <i>"Jauhilah sifat hasad kerana sesungguhnya hasad itu memakan kebaikan seperti api memakan kayu api"</i> (Riwayat Abu Daud).</p>
                <p><b>Contoh:</b> Berasa dengki dengan kekayaan/pangkat rakan dan berharap dia jatuh muflis atau ditimpa musibah.</p>
              </div>
            </div>
          </div>
        `
      },
      {
        id: "t5-p21-u2",
        badge: "UNIT 2",
        title: "Unit 2: Spektrum Ilmu, Cara & Hikmah Meninggalkan",
        contentHtml: `
          <div class="space-y-4">
            <!-- Spektrum Ilmu -->
            <div class="p-4 bg-[#1f2328] border-2 border-cyan-500 space-y-2.5">
              <span class="badge-tag bg-cyan-600 text-white font-bold px-2 py-0.5 text-xs">SPEKTRUM ILMU TAMBAHAN</span>
              <div class="space-y-2 text-xs sm:text-sm text-slate-200">
                <div class="p-2.5 bg-[#2d3036] border border-stone-600">
                  <b class="text-[#ffd447] block mb-1">10 Sifat Mazmumah mengikut Imam al-Ghazali:</b>
                  Banyak makan/minum, banyak berkata sia-sia, pemarah (ghadab), hasad dengki, bakhil (kasih harta), mencintai kemegahan dunia, hati terpaut pada dunia, sombong (takabur), bangga diri (ujub), dan menunjuk-nunjuk (riya').
                </div>
                <div class="p-2.5 bg-[#2d3036] border border-stone-600">
                  <b class="text-emerald-400 block mb-1">Hasad yang Diharuskan (Hasad al-Ghibtah):</b>
                  Cemburu yang dibenarkan dalam Islam hanya pada dua perkara:
                  1. Seseorang yang dikurniakan harta lalu membelanjakannya ke jalan kebenaran.<br />
                  2. Seseorang yang dikurniakan kefahaman ilmu al-Quran lalu mengamalkan dan mengajarkannya kepada orang lain.
                </div>
              </div>
            </div>

            <!-- Cara Meninggalkan -->
            <div class="p-4 bg-[#1f2328] border-2 border-stone-600 space-y-2">
              <h4 class="text-sm font-bold text-white uppercase tracking-wider">6 Cara Meninggalkan Sifat Mazmumah:</h4>
              <ol class="space-y-1 text-xs sm:text-sm text-slate-200 list-decimal list-inside">
                <li><b>Sentiasa mengamalkan sifat mahmudah</b> dan menjauhi sifat keji.</li>
                <li><b>Sentiasa bermuhasabah diri</b> agar terhindar daripada rasa ujub dan riak.</li>
                <li><b>Mengawal nafsu</b> daripada terikut-ikut dengan kemegahan duniawi.</li>
                <li><b>Sentiasa berzikir kepada Allah SWT</b> seperti beristighfar dan bertasbih memohon keampunan.</li>
                <li><b>Mencontohi akhlak mulia para rasul dan sahabat</b> baginda SAW.</li>
                <li><b>Bersahabat dengan orang soleh</b> yang berakhlak mulia.</li>
              </ol>
            </div>

            <!-- Hikmah Meninggalkan -->
            <div class="p-4 bg-[#1f2328] border-2 border-[#2fd17a]">
              <h4 class="text-sm font-bold text-[#2fd17a] uppercase tracking-wider mb-2">Hikmah Meninggalkan Sifat Mazmumah:</h4>
              <div class="grid sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-200">
                <div class="p-2 bg-[#2d3036] border border-stone-600">1. <b>Membentuk akhlak mulia</b> kerana menghindarkan diri daripada larangan Allah SWT.</div>
                <div class="p-2 bg-[#2d3036] border border-stone-600">2. <b>Mendidik jiwa</b> supaya sentiasa tunduk dan tawaduk kepada kekuasaan Allah SWT.</div>
                <div class="p-2 bg-[#2d3036] border border-stone-600">3. <b>Mempertahankan ketenangan hidup</b> kerana menjaga hubungan sesama manusia.</div>
                <div class="p-2 bg-[#2d3036] border border-stone-600">4. <b>Mengukuhkan jati diri Muslim</b> melalui amalan sifat mahmudah.</div>
                <div class="p-2 bg-[#2d3036] border border-stone-600 sm:col-span-2">5. <b>Memartabatkan imej Islam</b> sebagai contoh terbaik dalam pembangunan modal insan.</div>
              </div>
            </div>
          </div>
        `
      }
    ]
  }
];
