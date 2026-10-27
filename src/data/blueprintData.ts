import { Question, QuestionBlueprint, CognitiveLevel, Difficulty } from '../types';

/**
 * Data Acuan Matriks Kisi-Kisi Penulisan Soal Tes Sumatif
 * Kurikulum Merdeka - Fase B (Kelas III) Mata Pelajaran Pendidikan Pancasila
 * Materi: Aturan di Rumah, Sekolah, dan Masyarakat
 */

export interface BlueprintDefinition {
  elemen: string;
  tujuanPembelajaran: string;
  indikatorSoal: string;
  levelKognitif: CognitiveLevel;
  bobotSkor: number;
}

// Peta acuan default 40 butir soal Kurikulum Merdeka Pendidikan Pancasila Kelas III
export const DEFAULT_BLUEPRINT_MAP: Record<number, BlueprintDefinition> = {
  1: {
    elemen: 'Undang-Undang Dasar Negara Republik Indonesia Tahun 1945',
    tujuanPembelajaran: 'Peserta didik dapat mengidentifikasi pihak yang menyepakati aturan di lingkungan keluarga.',
    indikatorSoal: 'Disajikan pertanyaan tentang aturan di rumah, peserta didik dapat menentukan pihak yang menyepakati aturan keluarga.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  2: {
    elemen: 'Undang-Undang Dasar Negara Republik Indonesia Tahun 1945',
    tujuanPembelajaran: 'Peserta didik dapat menyebutkan contoh aturan kebersihan dan kemandirian setelah bangun tidur di rumah.',
    indikatorSoal: 'Disajikan pilihan kegiatan pagi hari, peserta didik dapat memilih contoh aturan merapikan tempat tidur sendiri.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  3: {
    elemen: 'Undang-Undang Dasar Negara Republik Indonesia Tahun 1945',
    tujuanPembelajaran: 'Peserta didik dapat mengenali tata tertib kedisiplinan kehadiran siswa di sekolah.',
    indikatorSoal: 'Disajikan pilihan perilaku di sekolah, peserta didik dapat menentukan aturan tiba tepat waktu sebelum bel berbunyi.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  4: {
    elemen: 'Undang-Undang Dasar Negara Republik Indonesia Tahun 1945',
    tujuanPembelajaran: 'Peserta didik dapat menerapkan aturan berpamitan dan izin kepada orang tua saat hendak bermain di luar rumah.',
    indikatorSoal: 'Disajikan cerita kontekstual ajakan bermain sepak bola, peserta didik dapat menentukan sikap berpamitan kepada orang tua.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  5: {
    elemen: 'Undang-Undang Dasar Negara Republik Indonesia Tahun 1945',
    tujuanPembelajaran: 'Peserta didik dapat menerapkan aturan ketertiban dan kekhidmatan saat upacara bendera di sekolah.',
    indikatorSoal: 'Disajikan ilustrasi pelaksanaan upacara bendera hari Senin, peserta didik dapat menentukan sikap tertib berseragam lengkap.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  6: {
    elemen: 'Undang-Undang Dasar Negara Republik Indonesia Tahun 1945',
    tujuanPembelajaran: 'Peserta didik dapat mengidentifikasi aturan menjaga kebersihan lingkungan hidup di masyarakat.',
    indikatorSoal: 'Disajikan pilihan tindakan pembuangan sampah, peserta didik dapat menentukan tindakan membuang sampah pada tempatnya.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  7: {
    elemen: 'Undang-Undang Dasar Negara Republik Indonesia Tahun 1945',
    tujuanPembelajaran: 'Peserta didik dapat menunjukkan tanggung jawab dalam melaksanakan tugas piket kebersihan kelas.',
    indikatorSoal: 'Disajikan narasi pembagian regu piket kelas, peserta didik dapat menentukan sikap bertanggung jawab hadir lebih awal.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  8: {
    elemen: 'Undang-Undang Dasar Negara Republik Indonesia Tahun 1945',
    tujuanPembelajaran: 'Peserta didik dapat menjelaskan tata krama dan sopan santun saat makan bersama keluarga di rumah.',
    indikatorSoal: 'Disajikan ilustrasi makan bersama keluarga, peserta didik dapat memilih tata krama berdoa dan tidak bersuara.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  9: {
    elemen: 'Undang-Undang Dasar Negara Republik Indonesia Tahun 1945',
    tujuanPembelajaran: 'Peserta didik dapat menerapkan norma kesopanan saat berjalan melintas di depan orang tua/warga.',
    indikatorSoal: 'Disajikan peristiwa berpapasan dengan warga lansia di jalan, peserta didik dapat menentukan sikap membungkuk dan mengucap permisi.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  10: {
    elemen: 'Undang-Undang Dasar Negara Republik Indonesia Tahun 1945',
    tujuanPembelajaran: 'Peserta didik dapat memahami ketentuan tata tertib mengenakan seragam sekolah yang rapi dan benar.',
    indikatorSoal: 'Disajikan opsi pemakaian seragam, peserta didik dapat mengidentifikasi seragam yang bersih, rapi, dan sesuai jadwal.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  11: {
    elemen: 'Undang-Undang Dasar Negara Republik Indonesia Tahun 1945',
    tujuanPembelajaran: 'Peserta didik dapat mengidentifikasi aturan menjaga ketenangan saat istirahat malam di rumah.',
    indikatorSoal: 'Disajikan pilihan aktivitas malam hari, peserta didik dapat memilih perilaku menjaga ketenangan demi kenyamanan keluarga.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  12: {
    elemen: 'Undang-Undang Dasar Negara Republik Indonesia Tahun 1945',
    tujuanPembelajaran: 'Peserta didik dapat menganalisis manfaat gotong royong dan kerja bakti membersihkan lingkungan warga.',
    indikatorSoal: 'Disajikan cerita kegiatan membersihkan saluran desa, peserta didik dapat menganalisis manfaat lingkungan bersih dan bebas banjir.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  13: {
    elemen: 'Undang-Undang Dasar Negara Republik Indonesia Tahun 1945',
    tujuanPembelajaran: 'Peserta didik dapat memahami etika dan aturan bertanya secara sopan saat guru menjelaskan pelajaran.',
    indikatorSoal: 'Disajikan situasi pembelajaran di kelas, peserta didik dapat menentukan aturan mengangkat tangan kanan sebelum bertanya.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  14: {
    elemen: 'Undang-Undang Dasar Negara Republik Indonesia Tahun 1945',
    tujuanPembelajaran: 'Peserta didik dapat membedakan perilaku yang mematuhi aturan di rumah dari perilaku yang melanggar aturan.',
    indikatorSoal: 'Disajikan empat butir pernyataan aktivitas di rumah, peserta didik dapat mengelompokkan kombinasi perilaku yang taat aturan.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  15: {
    elemen: 'Undang-Undang Dasar Negara Republik Indonesia Tahun 1945',
    tujuanPembelajaran: 'Peserta didik dapat menerapkan norma toleransi saat melintas di dekat tempat ibadah di lingkungan warga.',
    indikatorSoal: 'Disajikan cerita melintasi tempat ibadah dengan bersepeda, peserta didik dapat menentukan tindakan berkendara secara tenang.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  16: {
    elemen: 'Undang-Undang Dasar Negara Republik Indonesia Tahun 1945',
    tujuanPembelajaran: 'Peserta didik dapat menunjukkan ketaatan terhadap aturan waktu masuk kelas setelah bel istirahat.',
    indikatorSoal: 'Disajikan tanda bel masuk berbunyi, peserta didik dapat menentukan tindakan segera masuk kelas dan duduk tertib.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  17: {
    elemen: 'Undang-Undang Dasar Negara Republik Indonesia Tahun 1945',
    tujuanPembelajaran: 'Peserta didik dapat menjelaskan manfaat meletakkan barang-barang pada tempatnya di lingkungan rumah.',
    indikatorSoal: 'Disajikan kebiasaan merapikan barang, peserta didik dapat menentukan manfaat barang mudah dicari dan rumah tampak rapi.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  18: {
    elemen: 'Undang-Undang Dasar Negara Republik Indonesia Tahun 1945',
    tujuanPembelajaran: 'Peserta didik dapat mengevaluasi dampak pelanggaran tata tertib ketenangan di perpustakaan sekolah.',
    indikatorSoal: 'Disajikan peristiwa kegaduhan di perpustakaan, peserta didik dapat menentukan dampak terganggunya konsentrasi pembaca.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  19: {
    elemen: 'Undang-Undang Dasar Negara Republik Indonesia Tahun 1945',
    tujuanPembelajaran: 'Peserta didik dapat mengenali aturan keselamatan penyeberangan jalan raya bagi pejalan kaki.',
    indikatorSoal: 'Disajikan rambu lalu lintas pejalan kaki, peserta didik dapat menentukan fasilitas penyeberangan zebra cross atau JPO.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  20: {
    elemen: 'Undang-Undang Dasar Negara Republik Indonesia Tahun 1945',
    tujuanPembelajaran: 'Peserta didik dapat mengidentifikasi akibat negatif tidak mematuhi aturan waktu tidur malam di rumah.',
    indikatorSoal: 'Disajikan kebiasaan begadang malam hari, peserta didik dapat menentukan akibat bangun kesiangan dan badan mengantuk di sekolah.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  21: {
    elemen: 'Undang-Undang Dasar Negara Republik Indonesia Tahun 1945',
    tujuanPembelajaran: 'Peserta didik dapat menerapkan aturan etika meminjam dan mengembalikan barang milik teman di sekolah.',
    indikatorSoal: 'Disajikan narasi meminjam pensil warna, peserta didik dapat menentukan sikap mengembalikan secara utuh disertai ucapan terima kasih.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  22: {
    elemen: 'Undang-Undang Dasar Negara Republik Indonesia Tahun 1945',
    tujuanPembelajaran: 'Peserta didik dapat memahami fungsi aturan wajib lapor tamu 1 x 24 jam kepada Ketua RT.',
    indikatorSoal: 'Disajikan aturan kependudukan RT, peserta didik dapat menentukan pihak yang wajib lapor yaitu tamu menginap dari luar.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  23: {
    elemen: 'Undang-Undang Dasar Negara Republik Indonesia Tahun 1945',
    tujuanPembelajaran: 'Peserta didik dapat menunjukkan kepatuhan terhadap aturan menghemat air di lingkungan rumah.',
    indikatorSoal: 'Disajikan perintah orang tua saat bak mandi terisi penuh, peserta didik dapat menentukan tindakan mematikan kran air rapat.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  24: {
    elemen: 'Undang-Undang Dasar Negara Republik Indonesia Tahun 1945',
    tujuanPembelajaran: 'Peserta didik dapat memahami kewajiban merawat dan mengembalikan buku perpustakaan tepat waktu.',
    indikatorSoal: 'Disajikan tata tertib perpustakaan sekolah, peserta didik dapat menentukan aturan merawat dan mengembalikan buku tepat waktu.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  25: {
    elemen: 'Undang-Undang Dasar Negara Republik Indonesia Tahun 1945',
    tujuanPembelajaran: 'Peserta didik dapat menyebutkan contoh tutur kata yang santun dalam pergaulan bermasyarakat.',
    indikatorSoal: 'Disajikan pilihan cara bertutur kata, peserta didik dapat menentukan bahasa yang santun kepada orang yang lebih tua.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  26: {
    elemen: 'Undang-Undang Dasar Negara Republik Indonesia Tahun 1945',
    tujuanPembelajaran: 'Peserta didik dapat mempraktikkan budaya mengantre secara tertib saat bertransaksi di kantin sekolah.',
    indikatorSoal: 'Disajikan suasana jam istirahat di kantin, peserta didik dapat menentukan sikap antre secara tertib menunggu giliran.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  27: {
    elemen: 'Undang-Undang Dasar Negara Republik Indonesia Tahun 1945',
    tujuanPembelajaran: 'Peserta didik dapat menjelaskan bahwa aturan di rumah mengikat seluruh anggota keluarga.',
    indikatorSoal: 'Disajikan pertanyaan tentang kepatuhan aturan keluarga, peserta didik dapat menentukan bahwa aturan berlaku bagi seluruh anggota.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  28: {
    elemen: 'Undang-Undang Dasar Negara Republik Indonesia Tahun 1945',
    tujuanPembelajaran: 'Peserta didik dapat menunjukkan empati dan menjaga ketertiban saat ada tetangga yang sedang sakit.',
    indikatorSoal: 'Disajikan situasi tetangga sedang sakit, peserta didik dapat menentukan sikap menjaga ketenangan lingkungan sekitar.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  29: {
    elemen: 'Undang-Undang Dasar Negara Republik Indonesia Tahun 1945',
    tujuanPembelajaran: 'Peserta didik dapat memahami kewajiban bersama dalam memelihara sarana dan fasilitas sekolah.',
    indikatorSoal: 'Disajikan barang fasilitas belajar (meja/kursi/papan tulis), peserta didik dapat menentukan bahwa pemeliharaan adalah kewajiban seluruh warga sekolah.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  30: {
    elemen: 'Undang-Undang Dasar Negara Republik Indonesia Tahun 1945',
    tujuanPembelajaran: 'Peserta didik dapat menjelaskan tujuan pokok diberlakukannya aturan dan norma di masyarakat.',
    indikatorSoal: 'Disajikan fungsi aturan dalam masyarakat, peserta didik dapat menentukan tujuan terciptanya kehidupan yang aman, tertib, dan rukun.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },

  // --- SOAL BENAR / SALAH (Nomor 31 - 40) ---
  31: {
    elemen: 'Undang-Undang Dasar Negara Republik Indonesia Tahun 1945',
    tujuanPembelajaran: 'Peserta didik dapat menilai kebenaran pernyataan tentang aturan merapikan mainan di rumah.',
    indikatorSoal: 'Disajikan pernyataan mengenai penyimpanan mainan ke kotak mainan, peserta didik dapat memvalidasi kebenaran pernyataan tersebut.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  32: {
    elemen: 'Undang-Undang Dasar Negara Republik Indonesia Tahun 1945',
    tujuanPembelajaran: 'Peserta didik dapat menilai kebenaran larangan mencoret fasilitas meja dan dinding di sekolah.',
    indikatorSoal: 'Disajikan pernyataan kebolehan mencoret dinding kelas saat jenuh, peserta didik dapat menyatakan bahwa pernyataan tersebut salah.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  33: {
    elemen: 'Undang-Undang Dasar Negara Republik Indonesia Tahun 1945',
    tujuanPembelajaran: 'Peserta didik dapat menilai dampak membuang sampah ke selokan air pemukiman warga.',
    indikatorSoal: 'Disajikan pernyataan bahwa membuang sampah ke selokan bermanfaat, peserta didik dapat menyatakan bahwa pernyataan tersebut salah.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  34: {
    elemen: 'Undang-Undang Dasar Negara Republik Indonesia Tahun 1945',
    tujuanPembelajaran: 'Peserta didik dapat memvalidasi prosedur penyampaian izin resmi orang tua saat siswa sakit.',
    indikatorSoal: 'Disajikan tata tertib penyampaian surat izin resmi saat sakit, peserta didik dapat memvalidasi bahwa pernyataan tersebut benar.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  35: {
    elemen: 'Undang-Undang Dasar Negara Republik Indonesia Tahun 1945',
    tujuanPembelajaran: 'Peserta didik dapat menilai kebenaran prinsip kesetaraan ketaatan aturan keluarga bagi seluruh anggota.',
    indikatorSoal: 'Disajikan pernyataan bahwa aturan keluarga hanya mengikat anak-anak saja, peserta didik dapat menyatakan pernyataan tersebut salah.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  36: {
    elemen: 'Undang-Undang Dasar Negara Republik Indonesia Tahun 1945',
    tujuanPembelajaran: 'Peserta didik dapat memvalidasi norma kesopanan membungkukkan badan dan menyapa orang tua.',
    indikatorSoal: 'Disajikan pernyataan sikap permisi saat melintas di hadapan sesepuh/orang tua, peserta didik dapat memvalidasi kebenaran pernyataan.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  37: {
    elemen: 'Undang-Undang Dasar Negara Republik Indonesia Tahun 1945',
    tujuanPembelajaran: 'Peserta didik dapat menilai kesesuaian waktu istirahat dan bermain gawai malam hari di rumah.',
    indikatorSoal: 'Disajikan pernyataan bermain game hingga larut malam sebelum hari sekolah, peserta didik dapat menyatakan bahwa hal tersebut salah.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  38: {
    elemen: 'Undang-Undang Dasar Negara Republik Indonesia Tahun 1945',
    tujuanPembelajaran: 'Peserta didik dapat memvalidasi aturan memperhatikan penjelasan guru secara seksama di kelas.',
    indikatorSoal: 'Disajikan pernyataan mendengarkan guru dan tidak mengobrol di kelas, peserta didik dapat memvalidasi kebenaran pernyataan tersebut.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  39: {
    elemen: 'Undang-Undang Dasar Negara Republik Indonesia Tahun 1945',
    tujuanPembelajaran: 'Peserta didik dapat memvalidasi norma toleransi menjaga ketenangan saat tetangga beribadah.',
    indikatorSoal: 'Disajikan pernyataan menjaga ketenangan saat ibadah warga berlangsung, peserta didik dapat memvalidasi kebenaran pernyataan tersebut.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  40: {
    elemen: 'Undang-Undang Dasar Negara Republik Indonesia Tahun 1945',
    tujuanPembelajaran: 'Peserta didik dapat memvalidasi aturan kesopanan berpamitan dan mencium tangan orang tua sebelum sekolah.',
    indikatorSoal: 'Disajikan pernyataan berpamitan dan mengucap salam sebelum ke sekolah, peserta didik dapat memvalidasi kebenaran pernyataan tersebut.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
};

/**
 * Format label bentuk soal
 */
export function getBentukSoalLabel(type: string): string {
  switch (type) {
    case 'pg':
      return 'Pilihan Ganda (PG)';
    case 'pgk':
      return 'Pilihan Ganda Kompleks (PGK)';
    case 'pgk_kategori':
      return 'Benar / Salah';
    default:
      return 'Pilihan Ganda';
  }
}

/**
 * Format label level kognitif
 */
export function getCognitiveLevelLabel(level: CognitiveLevel): string {
  switch (level) {
    case 'L1':
      return 'L1 (Pemahaman / Mengingat)';
    case 'L2':
      return 'L2 (Aplikasi / Penerapan)';
    case 'L3':
      return 'L3 (Penalaran / Analisis HOTS)';
    default:
      return 'L1 (Pemahaman)';
  }
}

/**
 * Mendapatkan format string ringkas kunci jawaban
 */
export function formatCorrectAnswer(q: Question): string {
  if (q.type === 'pg') {
    return typeof q.correctAnswer === 'string' ? q.correctAnswer : 'A';
  }
  if (q.type === 'pgk') {
    if (Array.isArray(q.correctAnswer)) {
      return q.correctAnswer.join(', ');
    }
    return String(q.correctAnswer || 'A');
  }
  if (q.type === 'pgk_kategori') {
    if (q.statements && q.statements.length > 0) {
      if (q.statements.length === 1) {
        return q.statements[0].correctAnswer ? 'Benar' : 'Salah';
      }
      return q.statements
        .map((st, i) => `${i + 1}:${st.correctAnswer ? 'B' : 'S'}`)
        .join(', ');
    }
    return 'B/S';
  }
  return '-';
}

/**
 * Menghasilkan metadata blueprint lengkap untuk butir soal tertentu
 */
export function getQuestionBlueprint(q: Question, index: number): QuestionBlueprint {
  const def = DEFAULT_BLUEPRINT_MAP[q.id];

  const elemen =
    q.elemen ||
    (def ? def.elemen : inferElemenFromTopic(q.topic));

  const levelKognitif: CognitiveLevel =
    q.levelKognitif ||
    (def ? def.levelKognitif : inferLevelFromDifficulty(q.difficulty));

  const bobotSkor = q.bobot || (def ? def.bobotSkor : 1);
  const tujuanPembelajaran =
    q.tujuanPembelajaran ||
    (def ? def.tujuanPembelajaran : `Peserta didik mampu memahami dan menerapkan konsep ${q.topic}.`);
  const indikatorSoal =
    q.indikatorSoal ||
    (def ? def.indikatorSoal : `Disajikan soal ${q.topic}, peserta didik dapat menjawab pertanyaan dengan tepat.`);

  return {
    questionId: q.id,
    noSoal: index + 1,
    elemen,
    tujuanPembelajaran,
    materiPokok: q.topic,
    indikatorSoal,
    levelKognitif,
    levelKognitifLabel: getCognitiveLevelLabel(levelKognitif),
    bentukSoal: getBentukSoalLabel(q.type),
    kunciJawaban: formatCorrectAnswer(q),
    bobotSkor,
    difficulty: q.difficulty,
  };
}

function inferElemenFromTopic(topic: string): string {
  const t = topic.toLowerCase();
  if (t.includes('aturan') || t.includes('rumah') || t.includes('sekolah') || t.includes('masyarakat') || t.includes('norma')) {
    return 'Undang-Undang Dasar Negara Republik Indonesia Tahun 1945';
  }
  if (t.includes('pancasila') || t.includes('sila')) {
    return 'Pancasila';
  }
  if (t.includes('bhinneka') || t.includes('keberagaman')) {
    return 'Bhinneka Tunggal Ika';
  }
  if (t.includes('nkri') || t.includes('wilayah') || t.includes('lingkungan')) {
    return 'Negara Kesatuan Republik Indonesia';
  }
  return 'Undang-Undang Dasar Negara Republik Indonesia Tahun 1945';
}

function inferLevelFromDifficulty(diff: Difficulty): CognitiveLevel {
  if (diff === 'Mudah') return 'L1';
  if (diff === 'Sukar') return 'L3';
  return 'L2';
}

/**
 * Menghasilkan data agregasi statistik blueprint dari seluruh soal aktif
 */
export function getBlueprintStatistics(questions: Question[]) {
  const total = questions.length;
  const blueprints = questions.map((q, idx) => getQuestionBlueprint(q, idx));

  // Hitung distribusi elemen
  const elemenCountMap: Record<string, number> = {};
  // Hitung distribusi level kognitif
  const levelCountMap: Record<CognitiveLevel, number> = { L1: 0, L2: 0, L3: 0 };
  // Hitung distribusi kesukaran
  const diffCountMap: Record<Difficulty, number> = { Mudah: 0, Sedang: 0, Sukar: 0 };
  // Hitung distribusi bentuk soal
  const typeCountMap: Record<string, number> = { pg: 0, pgk: 0, pgk_kategori: 0 };

  blueprints.forEach((bp, idx) => {
    elemenCountMap[bp.elemen] = (elemenCountMap[bp.elemen] || 0) + 1;
    levelCountMap[bp.levelKognitif] = (levelCountMap[bp.levelKognitif] || 0) + 1;
    diffCountMap[bp.difficulty] = (diffCountMap[bp.difficulty] || 0) + 1;
    const qType = questions[idx]?.type || 'pg';
    typeCountMap[qType] = (typeCountMap[qType] || 0) + 1;
  });

  const elemenDistribution = Object.entries(elemenCountMap).map(([elemen, count]) => ({
    elemen,
    count,
    percentage: total > 0 ? Math.round((count / total) * 100) : 0,
  }));

  const levelDistribution = [
    {
      level: 'L1' as const,
      label: 'L1 (Pemahaman / C1-C2)',
      desc: 'Mengingat & Memahami konsep dasar',
      count: levelCountMap.L1,
      percentage: total > 0 ? Math.round((levelCountMap.L1 / total) * 100) : 0,
      color: 'emerald',
    },
    {
      level: 'L2' as const,
      label: 'L2 (Aplikasi / C3)',
      desc: 'Menerapkan konsep pada konteks nyata',
      count: levelCountMap.L2,
      percentage: total > 0 ? Math.round((levelCountMap.L2 / total) * 100) : 0,
      color: 'blue',
    },
    {
      level: 'L3' as const,
      label: 'L3 (Penalaran / C4-C6 HOTS)',
      desc: 'Menganalisis & memecahkan masalah kompleks',
      count: levelCountMap.L3,
      percentage: total > 0 ? Math.round((levelCountMap.L3 / total) * 100) : 0,
      color: 'amber',
    },
  ];

  const difficultyDistribution = [
    {
      difficulty: 'Mudah' as const,
      count: diffCountMap.Mudah,
      percentage: total > 0 ? Math.round((diffCountMap.Mudah / total) * 100) : 0,
      color: 'emerald',
    },
    {
      difficulty: 'Sedang' as const,
      count: diffCountMap.Sedang,
      percentage: total > 0 ? Math.round((diffCountMap.Sedang / total) * 100) : 0,
      color: 'blue',
    },
    {
      difficulty: 'Sukar' as const,
      count: diffCountMap.Sukar,
      percentage: total > 0 ? Math.round((diffCountMap.Sukar / total) * 100) : 0,
      color: 'rose',
    },
  ];

  const typeDistribution = [
    {
      type: 'pg',
      label: 'Pilihan Ganda (PG)',
      count: typeCountMap.pg,
      percentage: total > 0 ? Math.round((typeCountMap.pg / total) * 100) : 0,
    },
    {
      type: 'pgk_kategori',
      label: 'Benar / Salah',
      count: typeCountMap.pgk_kategori,
      percentage: total > 0 ? Math.round((typeCountMap.pgk_kategori / total) * 100) : 0,
    },
  ];

  return {
    total,
    blueprints,
    elemenDistribution,
    levelDistribution,
    difficultyDistribution,
    typeDistribution,
  };
}
