import { Question } from '../types';

export const INITIAL_QUESTIONS: Question[] = [
  // =========================================================================
  // --- BAGIAN I: 30 SOAL PILIHAN GANDA (PG) (Nomor 1 - 30) ---
  // Distribusi PG: 21 Soal Kategori Mudah, 9 Soal Kategori Sedang
  // =========================================================================

  // --- SOAL 1 (PG - Mudah - Aturan di Rumah) ---
  {
    id: 1,
    type: 'pg',
    topic: 'Aturan di Rumah',
    difficulty: 'Mudah',
    elemen: 'Undang-Undang Dasar Negara Republik Indonesia Tahun 1945',
    levelKognitif: 'L1',
    text: 'Aturan yang dibuat dan berlaku di dalam lingkungan rumah disepakati bersama oleh...',
    options: [
      { id: 'A', text: 'Kepala desa dan perangkat desa' },
      { id: 'B', text: 'Ayah, ibu, dan seluruh anggota keluarga' },
      { id: 'C', text: 'Bapak guru dan ibu guru di sekolah' },
      { id: 'D', text: 'Petugas kepolisian di jalan raya' },
    ],
    correctAnswer: 'B',
    explanation:
      'Aturan di rumah dibuat dan disepakati bersama oleh anggota keluarga (ayah, ibu, dan anak) untuk menciptakan suasana rumah yang aman, tertib, dan harmonis.',
  },

  // --- SOAL 2 (PG - Mudah - Aturan di Rumah) ---
  {
    id: 2,
    type: 'pg',
    topic: 'Aturan di Rumah',
    difficulty: 'Mudah',
    elemen: 'Undang-Undang Dasar Negara Republik Indonesia Tahun 1945',
    levelKognitif: 'L1',
    text: 'Contoh aturan kebersihan yang sebaiknya dibiasakan sendiri setelah bangun tidur di pagi hari adalah...',
    options: [
      { id: 'A', text: 'Langsung bermain gawai atau menonton televisi' },
      { id: 'B', text: 'Merapikan tempat tidur, bantal, dan melipat selimut' },
      { id: 'C', text: 'Menaruh piring kotor di atas kasur' },
      { id: 'D', text: 'Membiarkan kamar tidur dalam keadaan berantakan' },
    ],
    correctAnswer: 'B',
    explanation:
      'Merapikan tempat tidur dan melipat selimut setelah bangun tidur merupakan wujud pembiasaan disiplin dan mematuhi aturan kebersihan diri di rumah.',
  },

  // --- SOAL 3 (PG - Mudah - Aturan di Sekolah) ---
  {
    id: 3,
    type: 'pg',
    topic: 'Aturan di Sekolah',
    difficulty: 'Mudah',
    elemen: 'Undang-Undang Dasar Negara Republik Indonesia Tahun 1945',
    levelKognitif: 'L1',
    text: 'Salah satu tata tertib kehadiran yang wajib ditaati oleh setiap siswa di sekolah adalah...',
    options: [
      { id: 'A', text: 'Datang ke sekolah tepat waktu sebelum bel masuk berbunyi' },
      { id: 'B', text: 'Meninggalkan tas di ruang kelas lalu pulang ke rumah' },
      { id: 'C', text: 'Bermain di luar pagar sekolah saat jam pelajaran' },
      { id: 'D', text: 'Masuk ke ruang guru tanpa mengucapkan salam' },
    ],
    correctAnswer: 'A',
    explanation:
      'Hadir di sekolah tepat waktu sebelum bel masuk berbunyi adalah tata tertib utama di sekolah untuk melatih kedisiplinan dan menghargai waktu belajar.',
  },

  // --- SOAL 4 (PG - Sedang - Aturan di Rumah) ---
  {
    id: 4,
    type: 'pg',
    topic: 'Aturan di Rumah',
    difficulty: 'Sedang',
    elemen: 'Undang-Undang Dasar Negara Republik Indonesia Tahun 1945',
    levelKognitif: 'L2',
    text: 'Budi diajak oleh teman-temannya bermain sepak bola di lapangan desa pada sore hari. Sikap yang sesuai dengan aturan di rumah sebelum Budi pergi adalah...',
    options: [
      { id: 'A', text: 'Pergi diam-diam agar orang tua tidak mengetahui' },
      { id: 'B', text: 'Berpamitan serta meminta izin terlebih dahulu kepada orang tua' },
      { id: 'C', text: 'Menitipkan pesan kepada tetangga saat malam hari' },
      { id: 'D', text: 'Mengunci pintu rumah dari luar dan membawa kuncinya pergi' },
    ],
    correctAnswer: 'B',
    explanation:
      'Meminta izin dan berpamitan kepada orang tua sebelum keluar rumah adalah aturan penting agar orang tua tidak khawatir dan mengetahui keberadaan kita.',
  },

  // --- SOAL 5 (PG - Mudah - Aturan di Sekolah) ---
  {
    id: 5,
    type: 'pg',
    topic: 'Aturan di Sekolah',
    difficulty: 'Mudah',
    elemen: 'Undang-Undang Dasar Negara Republik Indonesia Tahun 1945',
    levelKognitif: 'L1',
    text: 'Setiap hari Senin pagi seluruh warga sekolah melaksanakan upacara bendera. Sikap tertib yang harus ditunjukkan siswa saat upacara adalah...',
    options: [
      { id: 'A', text: 'Berbicara dan bersenda gurau dengan teman satu barisan' },
      { id: 'B', text: 'Mengenakan seragam lengkap dan berdiri tegap dengan khidmat' },
      { id: 'C', text: 'Membaca buku komik di barisan paling belakang' },
      { id: 'D', text: 'Duduk santai di bawah pohon perindang lapangan' },
    ],
    correctAnswer: 'B',
    explanation:
      'Mengikuti upacara bendera dengan mengenakan seragam lengkap serta berdiri tegap dan khidmat merupakan aturan sekolah sekaligus wujud cinta tanah air.',
  },

  // --- SOAL 6 (PG - Mudah - Aturan di Masyarakat) ---
  {
    id: 6,
    type: 'pg',
    topic: 'Aturan di Masyarakat',
    difficulty: 'Mudah',
    elemen: 'Undang-Undang Dasar Negara Republik Indonesia Tahun 1945',
    levelKognitif: 'L1',
    text: 'Contoh aturan menjaga kebersihan lingkungan di tempat tinggal masyarakat adalah...',
    options: [
      { id: 'A', text: 'Membuang kantong plastik ke dalam saluran air sungai' },
      { id: 'B', text: 'Membuang sampah pada tempat sampah yang telah disediakan' },
      { id: 'C', text: 'Menumpuk sampah di depan pintu pagar tetangga' },
      { id: 'D', text: 'Membakar sampah plastik di pinggir jalan umum pada siang hari' },
    ],
    correctAnswer: 'B',
    explanation:
      'Membuang sampah pada tempatnya merupakan aturan dasar menjaga kebersihan lingkungan masyarakat agar terhindar dari penyakit dan banjir.',
  },

  // --- SOAL 7 (PG - Sedang - Aturan di Sekolah) ---
  {
    id: 7,
    type: 'pg',
    topic: 'Aturan di Sekolah',
    difficulty: 'Sedang',
    elemen: 'Undang-Undang Dasar Negara Republik Indonesia Tahun 1945',
    levelKognitif: 'L2',
    text: 'Hari ini adalah giliran Siti melaksanakan tugas piket kebersihan kelas. Sikap tanggung jawab yang sebaiknya dilakukan Siti adalah...',
    options: [
      { id: 'A', text: 'Datang lebih awal dari biasanya untuk menyapu dan membersihkan kelas bersama regu piket' },
      { id: 'B', text: 'Menunggu teman regu selesai membersihkan kelas baru kemudian masuk' },
      { id: 'C', text: 'Berpura-pura sakit kepala agar dibebaskan dari tugas piket' },
      { id: 'D', text: 'Menyuruh siswa lain menggantikan tugasnya dengan imbalan uang' },
    ],
    correctAnswer: 'A',
    explanation:
      'Datang lebih awal dan bekerja sama membersihkan kelas merupakan wujud nyata tanggung jawab siswa dalam menaati aturan piket kelas.',
  },

  // --- SOAL 8 (PG - Mudah - Aturan di Rumah) ---
  {
    id: 8,
    type: 'pg',
    topic: 'Aturan di Rumah',
    difficulty: 'Mudah',
    elemen: 'Undang-Undang Dasar Negara Republik Indonesia Tahun 1945',
    levelKognitif: 'L1',
    text: 'Aturan sopan santun yang benar saat makan bersama keluarga di meja makan adalah...',
    options: [
      { id: 'A', text: 'Berbicara dengan suara keras saat mulut masih penuh makanan' },
      { id: 'B', text: 'Berdoa sebelum makan dan tidak bersuara saat mengunyah makanan' },
      { id: 'C', text: 'Mengecap makanan dengan keras di hadapan orang tua' },
      { id: 'D', text: 'Mengambil makanan sebanyak-banyaknya hingga tidak habis' },
    ],
    correctAnswer: 'B',
    explanation:
      'Berdoa sebelum makan, mengambil makanan secukupnya, dan mengunyah tanpa bersuara merupakan aturan tata krama makan di lingkungan keluarga.',
  },

  // --- SOAL 9 (PG - Sedang - Aturan di Masyarakat) ---
  {
    id: 9,
    type: 'pg',
    topic: 'Aturan di Masyarakat',
    difficulty: 'Sedang',
    elemen: 'Undang-Undang Dasar Negara Republik Indonesia Tahun 1945',
    levelKognitif: 'L2',
    text: 'Ketika Doni sedang berjalan kaki dan melintasi sekelompok orang tua yang sedang duduk mengobrol di teras rumah, sikap sopan Doni adalah...',
    options: [
      { id: 'A', text: 'Berlari kencang sambil berteriak memanggil temannya' },
      { id: 'B', text: 'Menundukkan badan sedikit sambil tersenyum dan mengucap "permisi"' },
      { id: 'C', text: 'Memalingkan wajah ke arah lain dan mengacuhkan mereka' },
      { id: 'D', text: 'Menutup mata dan telinga sambil terus berjalan cepat' },
    ],
    correctAnswer: 'B',
    explanation:
      'Membungkukkan badan sedikit dan menyapa dengan kata "permisi" adalah norma kesopanan yang dijunjung tinggi dalam kehidupan bermasyarakat di Indonesia.',
  },

  // --- SOAL 10 (PG - Mudah - Aturan di Sekolah) ---
  {
    id: 10,
    type: 'pg',
    topic: 'Aturan di Sekolah',
    difficulty: 'Mudah',
    elemen: 'Undang-Undang Dasar Negara Republik Indonesia Tahun 1945',
    levelKognitif: 'L1',
    text: 'Ketentuan mengenakan seragam sekolah yang sesuai dengan tata tertib sekolah adalah...',
    options: [
      { id: 'A', text: 'Rapi, bersih, dimasukkan dengan benar, dan sesuai dengan jadwal hari yang ditentukan' },
      { id: 'B', text: 'Bebas sesuai dengan keinginan siswa setiap hari' },
      { id: 'C', text: 'Selalu memakai pakaian olahraga setiap hari meskipun hari upacara' },
      { id: 'D', text: 'Menggunakan pakaian pesta dengan perhiasan yang mencolok' },
    ],
    correctAnswer: 'A',
    explanation:
      'Mengenakan seragam yang bersih, rapi, dan sesuai hari penugasan merupakan aturan tata tertib berpakaian di lingkungan sekolah dasar.',
  },

  // --- SOAL 11 (PG - Mudah - Aturan di Rumah) ---
  {
    id: 11,
    type: 'pg',
    topic: 'Aturan di Rumah',
    difficulty: 'Mudah',
    elemen: 'Undang-Undang Dasar Negara Republik Indonesia Tahun 1945',
    levelKognitif: 'L1',
    text: 'Contoh aturan menjaga ketenangan di rumah pada malam hari adalah...',
    options: [
      { id: 'A', text: 'Menyalakan pengeras suara musik dengan volume paling kencang' },
      { id: 'B', text: 'Tidak membuat suara gaduh karena anggota keluarga sedang beristirahat' },
      { id: 'C', text: 'Berteriak-teriak memanggil saudara dari dalam kamar' },
      { id: 'D', text: 'Bermain bola di dalam ruang keluarga pada larut malam' },
    ],
    correctAnswer: 'B',
    explanation:
      'Menjaga ketenangan pada malam hari bertujuan agar seluruh anggota keluarga dapat tidur dan beristirahat dengan nyaman tanpa terganggu suara bising.',
  },

  // --- SOAL 12 (PG - Sedang - Aturan di Masyarakat) ---
  {
    id: 12,
    type: 'pg',
    topic: 'Aturan di Masyarakat',
    difficulty: 'Sedang',
    elemen: 'Undang-Undang Dasar Negara Republik Indonesia Tahun 1945',
    levelKognitif: 'L2',
    text: 'Di lingkungan tempat tinggal Made diadakan kerja bakti membersihkan selokan desa. Manfaat yang dirasakan masyarakat apabila warga kompak mematuhi aturan gotong royong adalah...',
    options: [
      { id: 'A', text: 'Lingkungan desa menjadi bersih, indah, sehat, dan bebas dari banjir' },
      { id: 'B', text: 'Warga desa menjadi saling berselisih dan bermusuhan' },
      { id: 'C', text: 'Pekerjaan membersihkan selokan terasa semakin melelahkan dan lambat' },
      { id: 'D', text: 'Air selokan desa menjadi semakin tersumbat oleh sampah' },
    ],
    correctAnswer: 'A',
    explanation:
      'Mematuhi aturan gotong royong membuat pekerjaan berat menjadi ringan dan lingkungan masyarakat menjadi bersih, asri, serta terbebas dari bahaya banjir.',
  },

  // --- SOAL 13 (PG - Mudah - Aturan di Sekolah) ---
  {
    id: 13,
    type: 'pg',
    topic: 'Aturan di Sekolah',
    difficulty: 'Mudah',
    elemen: 'Undang-Undang Dasar Negara Republik Indonesia Tahun 1945',
    levelKognitif: 'L1',
    text: 'Jika seorang siswa ingin bertanya kepada guru saat kegiatan belajar sedang berlangsung, cara yang sopan sesuai aturan kelas adalah...',
    options: [
      { id: 'A', text: 'Memotong pembicaraan guru secara tiba-tiba dengan berteriak' },
      { id: 'B', text: 'Mengacungkan jari tangan kanan terlebih dahulu dan menunggu dipersilakan' },
      { id: 'C', text: 'Memukul-mukul meja belajar dengan penggaris' },
      { id: 'D', text: 'Berdiri di atas kursi kelas agar diperhatikan' },
    ],
    correctAnswer: 'B',
    explanation:
      'Mengangkat tangan kanan terlebih dahulu secara santun dan berbicara setelah dipersilakan guru adalah etika dan aturan bertanya di dalam kelas.',
  },

  // --- SOAL 14 (PG - Sedang - Aturan di Rumah) ---
  {
    id: 14,
    type: 'pg',
    topic: 'Aturan di Rumah',
    difficulty: 'Sedang',
    elemen: 'Undang-Undang Dasar Negara Republik Indonesia Tahun 1945',
    levelKognitif: 'L2',
    text: 'Perhatikan beberapa perilaku berikut:\n(1) Mengulang pelajaran dan mengerjakan PR tepat waktu\n(2) Membantu ibu mencuci piring setelah makan\n(3) Bermain game di HP hingga larut malam tanpa henti\n(4) Meletakkan sepatu di rak sepatu setelah pulang\nPerilaku yang menunjukkan kepatuhan terhadap aturan di rumah ditunjukkan oleh nomor...',
    options: [
      { id: 'A', text: '(1), (2), dan (4)' },
      { id: 'B', text: '(1), (3), dan (4)' },
      { id: 'C', text: '(2), (3), dan (4)' },
      { id: 'D', text: '(3) saja' },
    ],
    correctAnswer: 'A',
    explanation:
      'Perilaku (1), (2), dan (4) adalah perbuatan terpuji yang mematuhi aturan belajar, membantu orang tua, dan menjaga kerapian. Perilaku (3) melanggar aturan waktu di rumah.',
  },

  // --- SOAL 15 (PG - Sedang - Aturan di Masyarakat) ---
  {
    id: 15,
    type: 'pg',
    topic: 'Aturan di Masyarakat',
    difficulty: 'Sedang',
    elemen: 'Undang-Undang Dasar Negara Republik Indonesia Tahun 1945',
    levelKognitif: 'L2',
    text: 'Edo sedang mengayuh sepeda di jalan kampung. Ketika melewati tempat ibadah yang sedang digunakan untuk beribadah bersama, tindakan Edo yang tepat adalah...',
    options: [
      { id: 'A', text: 'Membunyikan bel sepeda berulang-ulang dengan kencang' },
      { id: 'B', text: 'Mengayuh sepeda secara perlahan, tenang, dan tidak membuat gaduh' },
      { id: 'C', text: 'Memacu laju sepeda dengan kecepatan tinggi sambil berteriak' },
      { id: 'D', text: 'Mengajak temannya bersorak di depan gerbang tempat ibadah' },
    ],
    correctAnswer: 'B',
    explanation:
      'Menghormati orang lain yang sedang beribadah dengan menjaga ketenangan merupakan aturan norma kesopanan dan toleransi hidup bermasyarakat.',
  },

  // --- SOAL 16 (PG - Mudah - Aturan di Sekolah) ---
  {
    id: 16,
    type: 'pg',
    topic: 'Aturan di Sekolah',
    difficulty: 'Mudah',
    elemen: 'Undang-Undang Dasar Negara Republik Indonesia Tahun 1945',
    levelKognitif: 'L1',
    text: 'Ketika bel tanda masuk kelas berbunyi setelah istirahat, tindakan yang harus dilakukan oleh siswa adalah...',
    options: [
      { id: 'A', text: 'Pergi menuju kantin untuk membeli mainan baru' },
      { id: 'B', text: 'Segera masuk ke ruang kelas dengan tertib dan duduk di tempatnya' },
      { id: 'C', text: 'Melanjutkan permainan sepak bola di lapangan sekolah' },
      { id: 'D', text: 'Bersembunyi di belakang perpustakaan sekolah' },
    ],
    correctAnswer: 'B',
    explanation:
      'Segera masuk kelas dan duduk dengan tertib saat bel berbunyi merupakan kewajiban setiap siswa dalam mematuhi aturan jam belajar di sekolah.',
  },

  // --- SOAL 17 (PG - Mudah - Aturan di Rumah) ---
  {
    id: 17,
    type: 'pg',
    topic: 'Aturan di Rumah',
    difficulty: 'Mudah',
    elemen: 'Undang-Undang Dasar Negara Republik Indonesia Tahun 1945',
    levelKognitif: 'L1',
    text: 'Manfaat yang kita dapatkan jika selalu mematuhi aturan meletakkan barang-barang pada tempatnya di rumah adalah...',
    options: [
      { id: 'A', text: 'Rumah menjadi terasa sempit dan terlihat kotor' },
      { id: 'B', text: 'Barang mudah ditemukan saat dibutuhkan dan rumah tampak rapi' },
      { id: 'C', text: 'Barang menjadi cepat rusak dan mudah hilang' },
      { id: 'D', text: 'Orang tua menjadi sering merasa cemas dan marah' },
    ],
    correctAnswer: 'B',
    explanation:
      'Menaruh barang pada tempatnya membuat rumah selalu rapi, bersih, serta memudahkan kita saat ingin mencari barang tersebut kembali.',
  },

  // --- SOAL 18 (PG - Sedang - Aturan di Sekolah) ---
  {
    id: 18,
    type: 'pg',
    topic: 'Aturan di Sekolah',
    difficulty: 'Sedang',
    elemen: 'Undang-Undang Dasar Negara Republik Indonesia Tahun 1945',
    levelKognitif: 'L2',
    text: 'Di ruang perpustakaan sekolah terdapat aturan dilarang berbicara keras atau berisik. Akibat jika ada siswa yang melanggar aturan tersebut adalah...',
    options: [
      { id: 'A', text: 'Semua pengunjung perpustakaan merasa senang dan nyaman' },
      { id: 'B', text: 'Mengganggu ketenangan dan konsentrasi siswa lain yang sedang membaca' },
      { id: 'C', text: 'Buku di perpustakaan bertambah banyak dengan sendirinya' },
      { id: 'D', text: 'Petugas perpustakaan memberikan hadiah kepada siswa tersebut' },
    ],
    correctAnswer: 'B',
    explanation:
      'Membuat gaduh di perpustakaan melanggar aturan ketenangan dan merugikan orang lain yang sedang membutuhkan konsentrasi untuk membaca buku.',
  },

  // --- SOAL 19 (PG - Mudah - Aturan di Masyarakat) ---
  {
    id: 19,
    type: 'pg',
    topic: 'Aturan di Masyarakat',
    difficulty: 'Mudah',
    elemen: 'Undang-Undang Dasar Negara Republik Indonesia Tahun 1945',
    levelKognitif: 'L1',
    text: 'Aturan tertulis bagi pejalan kaki saat akan menyeberangi jalan raya yang ramai adalah menggunakan...',
    options: [
      { id: 'A', text: 'Trotoar khusus pejalan kaki' },
      { id: 'B', text: 'Zebra cross atau jembatan penyeberangan orang (JPO)' },
      { id: 'C', text: 'Bahu jalan sebelah kanan kendaraan' },
      { id: 'D', text: 'Pembatas taman di tengah jalan tol' },
    ],
    correctAnswer: 'B',
    explanation:
      'Zebra cross dan jembatan penyeberangan orang (JPO) adalah fasilitas resmi penyeberangan jalan yang menjamin keselamatan pejalan kaki.',
  },

  // --- SOAL 20 (PG - Mudah - Aturan di Rumah) ---
  {
    id: 20,
    type: 'pg',
    topic: 'Aturan di Rumah',
    difficulty: 'Mudah',
    elemen: 'Undang-Undang Dasar Negara Republik Indonesia Tahun 1945',
    levelKognitif: 'L1',
    text: 'Akibat buruk yang dirasakan oleh seorang anak jika melanggar aturan waktu tidur malam di rumah adalah...',
    options: [
      { id: 'A', text: 'Bangun kesiangan dan badan terasa lemas serta mengantuk di sekolah' },
      { id: 'B', text: 'Tubuh terasa semakin bersemangat dan segar bugar' },
      { id: 'C', text: 'Pasti mendapatkan nilai ujian paling tinggi di kelas' },
      { id: 'D', text: 'Dapat berangkat ke sekolah lebih pagi dari biasanya' },
    ],
    correctAnswer: 'A',
    explanation:
      'Tidur larut malam melanggar aturan kesehatan di rumah dan mengakibatkan anak bangun terlambat, terlambat ke sekolah, serta sulit berkonsentrasi belajar.',
  },

  // --- SOAL 21 (PG - Sedang - Aturan di Sekolah) ---
  {
    id: 21,
    type: 'pg',
    topic: 'Aturan di Sekolah',
    difficulty: 'Sedang',
    elemen: 'Undang-Undang Dasar Negara Republik Indonesia Tahun 1945',
    levelKognitif: 'L2',
    text: 'Lani meminjam pensil warna milik Dayu saat pelajaran menggambar. Tindakan Lani yang sesuai dengan aturan etika meminjam barang teman adalah...',
    options: [
      { id: 'A', text: 'Membawa pulang pensil warna tersebut tanpa memberitahu Dayu' },
      { id: 'B', text: 'Mengembalikan pensil warna dalam keadaan utuh dan mengucap terima kasih' },
      { id: 'C', text: 'Mematahkan ujung pensil warna sebelum mengembalikannya' },
      { id: 'D', text: 'Menyembunyikan pensil warna di kolong meja kelas' },
    ],
    correctAnswer: 'B',
    explanation:
      'Menjaga barang pinjaman agar tidak rusak serta mengembalikannya tepat waktu disertai ucapan terima kasih merupakan aturan sopan santun antar teman.',
  },

  // --- SOAL 22 (PG - Mudah - Aturan di Masyarakat) ---
  {
    id: 22,
    type: 'pg',
    topic: 'Aturan di Masyarakat',
    difficulty: 'Mudah',
    elemen: 'Undang-Undang Dasar Negara Republik Indonesia Tahun 1945',
    levelKognitif: 'L1',
    text: 'Aturan wajib lapor 1 x 24 jam kepada Ketua RT di lingkungan masyarakat berlaku bagi...',
    options: [
      { id: 'A', text: 'Warga yang baru saja membeli sepeda baru' },
      { id: 'B', text: 'Tamu dari luar kota yang menginap di rumah warga' },
      { id: 'C', text: 'Anak-anak yang sedang bermain layang-layang di lapangan' },
      { id: 'D', text: 'Pedagang keliling yang melintas di depan rumah' },
    ],
    correctAnswer: 'B',
    explanation:
      'Aturan wajib lapor 1x24 jam bagi tamu yang menginap bertujuan untuk menjaga keamanan, ketertiban, dan keselamatan seluruh warga lingkungan.',
  },

  // --- SOAL 23 (PG - Mudah - Aturan di Rumah) ---
  {
    id: 23,
    type: 'pg',
    topic: 'Aturan di Rumah',
    difficulty: 'Mudah',
    elemen: 'Undang-Undang Dasar Negara Republik Indonesia Tahun 1945',
    levelKognitif: 'L1',
    text: 'Ibu mengingatkan Wayan untuk mematikan kran air setelah bak mandi penuh. Tindakan Wayan yang mencerminkan ketaatan terhadap aturan di rumah adalah...',
    options: [
      { id: 'A', text: 'Membiarkan air meluap membasahi seluruh lantai kamar mandi' },
      { id: 'B', text: 'Segera memutar kran air hingga tertutup rapat' },
      { id: 'C', text: 'Pura-pura tidak mendengar nasehat yang diberikan ibu' },
      { id: 'D', text: 'Membuka kran air lainnya agar air mengalir semakin deras' },
    ],
    correctAnswer: 'B',
    explanation:
      'Mematikan kran air setelah bak penuh adalah bentuk ketaatan terhadap aturan berhemat air dan menjaga kebersihan kamar mandi di rumah.',
  },

  // --- SOAL 24 (PG - Mudah - Aturan di Sekolah) ---
  {
    id: 24,
    type: 'pg',
    topic: 'Aturan di Sekolah',
    difficulty: 'Mudah',
    elemen: 'Undang-Undang Dasar Negara Republik Indonesia Tahun 1945',
    levelKognitif: 'L1',
    text: 'Aturan yang benar saat meminjam buku di perpustakaan sekolah adalah...',
    options: [
      { id: 'A', text: 'Merawat buku dengan baik dan mengembalikannya sebelum batas waktu habis' },
      { id: 'B', text: 'Merobek halaman buku yang berisi gambar menarik' },
      { id: 'C', text: 'Menuliskan coretan nama sendiri di halaman isi buku' },
      { id: 'D', text: 'Meminjamkan buku perpustakaan kepada orang lain tanpa izin petugas' },
    ],
    correctAnswer: 'A',
    explanation:
      'Merawat keutuhan buku perpustakaan dan mengembalikannya tepat waktu merupakan tata tertib meminjam buku di perpustakaan sekolah.',
  },

  // --- SOAL 25 (PG - Mudah - Aturan di Masyarakat) ---
  {
    id: 25,
    type: 'pg',
    topic: 'Aturan di Masyarakat',
    difficulty: 'Mudah',
    elemen: 'Undang-Undang Dasar Negara Republik Indonesia Tahun 1945',
    levelKognitif: 'L1',
    text: 'Contoh norma kesopanan yang dijunjung tinggi dalam pergaulan di masyarakat adalah...',
    options: [
      { id: 'A', text: 'Berbicara dengan tutur kata yang santun kepada orang yang lebih tua' },
      { id: 'B', text: 'Memanggil nama orang tua dengan nada membentak dan kasar' },
      { id: 'C', text: 'Memotong pembicaraan tetangga yang sedang mengobrol' },
      { id: 'D', text: 'Menertawakan tetangga yang sedang tertimpa musibah' },
    ],
    correctAnswer: 'A',
    explanation:
      'Bertutur kata santun dan menghormati orang yang lebih tua adalah cerminan norma kesopanan yang wajib diamalkan dalam bermasyarakat.',
  },

  // --- SOAL 26 (PG - Sedang - Aturan di Sekolah) ---
  {
    id: 26,
    type: 'pg',
    topic: 'Aturan di Sekolah',
    difficulty: 'Sedang',
    elemen: 'Undang-Undang Dasar Negara Republik Indonesia Tahun 1945',
    levelKognitif: 'L2',
    text: 'Saat jam istirahat sekolah tiba, banyak siswa berbelanja di kantin sekolah. Sikap tertib yang sesuai dengan aturan sekolah saat membeli makanan adalah...',
    options: [
      { id: 'A', text: 'Saling mendorong dan berebut tempat di depan meja penjual' },
      { id: 'B', text: 'Mengantre dengan tertib dan sabar menunggu giliran dilayani' },
      { id: 'C', text: 'Mengambil makanan tanpa membayar kepada penjual' },
      { id: 'D', text: 'Merebut makanan yang sudah diterima oleh siswa lain' },
    ],
    correctAnswer: 'B',
    explanation:
      'Budaya mengantre dengan sabar dan tertib di kantin sekolah melatih siswa untuk menghargai hak orang lain dan menegakkan ketertiban umum.',
  },

  // --- SOAL 27 (PG - Mudah - Aturan di Rumah) ---
  {
    id: 27,
    type: 'pg',
    topic: 'Aturan di Rumah',
    difficulty: 'Mudah',
    elemen: 'Undang-Undang Dasar Negara Republik Indonesia Tahun 1945',
    levelKognitif: 'L1',
    text: 'Siapakah pihak yang wajib mematuhi seluruh aturan yang ada di dalam rumah?',
    options: [
      { id: 'A', text: 'Hanya ayah dan ibu saja' },
      { id: 'B', text: 'Hanya anak bungsu saja' },
      { id: 'C', text: 'Seluruh anggota keluarga yang tinggal di dalam rumah' },
      { id: 'D', text: 'Tamu yang datang berkunjung saja' },
    ],
    correctAnswer: 'C',
    explanation:
      'Aturan di rumah wajib dipatuhi oleh seluruh anggota keluarga tanpa terkecuali agar tercipta kedisiplinan dan kerukunan bersama.',
  },

  // --- SOAL 28 (PG - Mudah - Aturan di Masyarakat) ---
  {
    id: 28,
    type: 'pg',
    topic: 'Aturan di Masyarakat',
    difficulty: 'Mudah',
    elemen: 'Undang-Undang Dasar Negara Republik Indonesia Tahun 1945',
    levelKognitif: 'L1',
    text: 'Apabila ada tetangga di dekat rumah kita yang sedang sakit keras, sikap tenggang rasa yang sesuai aturan ketertiban lingkungan adalah...',
    options: [
      { id: 'A', text: 'Menyalakan kembang api dan petasan di depan rumahnya' },
      { id: 'B', text: 'Menjaga ketenangan dan tidak membuat suara bising di sekitar rumah tetangga tersebut' },
      { id: 'C', text: 'Bermain kejar-kejaran sambil berteriak di depan pintunya' },
      { id: 'D', text: 'Menyetel musik dengan suara sekeras-kerasnya' },
    ],
    correctAnswer: 'B',
    explanation:
      'Menjaga ketenangan saat ada tetangga yang sedang sakit adalah wujud kepedulian sosial, toleransi, dan kepatuhan pada norma ketertiban lingkungan.',
  },

  // --- SOAL 29 (PG - Mudah - Aturan di Sekolah) ---
  {
    id: 29,
    type: 'pg',
    topic: 'Aturan di Sekolah',
    difficulty: 'Mudah',
    elemen: 'Undang-Undang Dasar Negara Republik Indonesia Tahun 1945',
    levelKognitif: 'L1',
    text: 'Menjaga fasilitas sekolah seperti meja, kursi, dan papan tulis agar tidak rusak atau kotor merupakan tanggung jawab dari...',
    options: [
      { id: 'A', text: 'Petugas kebersihan sekolah saja' },
      { id: 'B', text: 'Bapak kepala sekolah saja' },
      { id: 'C', text: 'Seluruh warga sekolah, termasuk seluruh siswa' },
      { id: 'D', text: 'Penjual jajanan di luar pagar sekolah' },
    ],
    correctAnswer: 'C',
    explanation:
      'Seluruh sarana dan prasarana sekolah adalah milik bersama yang harus dijaga kebersihan dan keutuhannya oleh seluruh warga sekolah.',
  },

  // --- SOAL 30 (PG - Mudah - Aturan di Masyarakat) ---
  {
    id: 30,
    type: 'pg',
    topic: 'Aturan di Masyarakat',
    difficulty: 'Mudah',
    elemen: 'Undang-Undang Dasar Negara Republik Indonesia Tahun 1945',
    levelKognitif: 'L1',
    text: 'Tujuan utama dibuatnya aturan atau norma di lingkungan masyarakat adalah...',
    options: [
      { id: 'A', text: 'Memberikan hukuman berat kepada seluruh warga' },
      { id: 'B', text: 'Menciptakan suasana kehidupan warga yang aman, tertib, rukun, dan damai' },
      { id: 'C', text: 'Melarang warga untuk keluar dari rumah masing-masing' },
      { id: 'D', text: 'Membuat warga menjadi saling curiga satu sama lain' },
    ],
    correctAnswer: 'B',
    explanation:
      'Aturan diciptakan agar tercipta keteraturan, ketertiban, keamanan, keadilan, serta kerukunan di tengah keberagaman warga masyarakat.',
  },

  // =========================================================================
  // --- BAGIAN II: 10 SOAL BENAR / SALAH (Nomor 31 - 40) ---
  // Distribusi Benar/Salah: 7 Soal Kategori Mudah, 3 Soal Kategori Sedang
  // =========================================================================

  // --- SOAL 31 (Benar/Salah - Mudah - Aturan di Rumah) ---
  {
    id: 31,
    type: 'pgk_kategori',
    topic: 'Aturan di Rumah',
    difficulty: 'Mudah',
    elemen: 'Undang-Undang Dasar Negara Republik Indonesia Tahun 1945',
    levelKognitif: 'L1',
    text: 'Perhatikan pernyataan berikut. Tentukan apakah pernyataan ini BENAR atau SALAH:',
    statements: [
      {
        id: 's1',
        text: 'Merapikan kembali mainan ke dalam kotak mainan setelah selesai digunakan merupakan salah satu contoh mematuhi aturan kerapian di rumah.',
        correctAnswer: true,
      },
    ],
    explanation:
      'Pernyataan BENAR. Mengembalikan mainan ke wadahnya setelah selesai bermain adalah contoh kewajiban anak mematuhi aturan kerapian di rumah.',
  },

  // --- SOAL 32 (Benar/Salah - Mudah - Aturan di Sekolah) ---
  {
    id: 32,
    type: 'pgk_kategori',
    topic: 'Aturan di Sekolah',
    difficulty: 'Mudah',
    elemen: 'Undang-Undang Dasar Negara Republik Indonesia Tahun 1945',
    levelKognitif: 'L1',
    text: 'Perhatikan pernyataan berikut. Tentukan apakah pernyataan ini BENAR atau SALAH:',
    statements: [
      {
        id: 's1',
        text: 'Siswa diperbolehkan mencoret-coret meja belajar dan dinding kelas menggunakan spidol apabila merasa bosan saat jam pelajaran berlangsung.',
        correctAnswer: false,
      },
    ],
    explanation:
      'Pernyataan SALAH. Mencoret-coret fasilitas sekolah merupakan tindakan vandalisme dan pelanggaran berat terhadap tata tertib kebersihan sekolah.',
  },

  // --- SOAL 33 (Benar/Salah - Mudah - Aturan di Masyarakat) ---
  {
    id: 33,
    type: 'pgk_kategori',
    topic: 'Aturan di Masyarakat',
    difficulty: 'Mudah',
    elemen: 'Undang-Undang Dasar Negara Republik Indonesia Tahun 1945',
    levelKognitif: 'L1',
    text: 'Perhatikan pernyataan berikut. Tentukan apakah pernyataan ini BENAR atau SALAH:',
    statements: [
      {
        id: 's1',
        text: 'Membuang sampah sisa makanan dan plastik ke dalam selokan air warga merupakan perbuatan yang baik dan bermanfaat bagi kelestarian lingkungan.',
        correctAnswer: false,
      },
    ],
    explanation:
      'Pernyataan SALAH. Membuang sampah di selokan dapat menyumbat aliran air, memicu sarang nyamuk penyakit, dan menimbulkan bencana banjir di lingkungan.',
  },

  // --- SOAL 34 (Benar/Salah - Sedang - Aturan di Sekolah) ---
  {
    id: 34,
    type: 'pgk_kategori',
    topic: 'Aturan di Sekolah',
    difficulty: 'Sedang',
    elemen: 'Undang-Undang Dasar Negara Republik Indonesia Tahun 1945',
    levelKognitif: 'L2',
    text: 'Perhatikan pernyataan berikut. Tentukan apakah pernyataan ini BENAR atau SALAH:',
    statements: [
      {
        id: 's1',
        text: 'Jika seorang siswa tidak dapat hadir ke sekolah karena sedang sakit, aturan yang benar adalah mengirimkan surat izin atau pemberitahuan resmi dari orang tua kepada guru di sekolah.',
        correctAnswer: true,
      },
    ],
    explanation:
      'Pernyataan BENAR. Memberikan surat izin resmi dari orang tua ketika berhalangan hadir merupakan tata tertib presensi kehadiran yang berlaku di sekolah.',
  },

  // --- SOAL 35 (Benar/Salah - Mudah - Aturan di Rumah) ---
  {
    id: 35,
    type: 'pgk_kategori',
    topic: 'Aturan di Rumah',
    difficulty: 'Mudah',
    elemen: 'Undang-Undang Dasar Negara Republik Indonesia Tahun 1945',
    levelKognitif: 'L1',
    text: 'Perhatikan pernyataan berikut. Tentukan apakah pernyataan ini BENAR atau SALAH:',
    statements: [
      {
        id: 's1',
        text: 'Aturan yang ada di rumah hanya dibuat untuk dipatuhi oleh anak-anak saja, sedangkan ayah dan ibu bebas untuk melanggar aturan keluarga tersebut.',
        correctAnswer: false,
      },
    ],
    explanation:
      'Pernyataan SALAH. Seluruh anggota keluarga (ayah, ibu, dan anak) memiliki kewajiban bersama untuk menaati aturan di rumah demi keharmonisan keluarga.',
  },

  // --- SOAL 36 (Benar/Salah - Mudah - Aturan di Masyarakat) ---
  {
    id: 36,
    type: 'pgk_kategori',
    topic: 'Aturan di Masyarakat',
    difficulty: 'Mudah',
    elemen: 'Undang-Undang Dasar Negara Republik Indonesia Tahun 1945',
    levelKognitif: 'L1',
    text: 'Perhatikan pernyataan berikut. Tentukan apakah pernyataan ini BENAR atau SALAH:',
    statements: [
      {
        id: 's1',
        text: 'Membungkukkan sedikit badan dan mengucapkan kata "permisi" saat berjalan melintas di depan orang tua yang sedang duduk merupakan penerapan norma kesopanan di masyarakat.',
        correctAnswer: true,
      },
    ],
    explanation:
      'Pernyataan BENAR. Sikap membungkukkan badan dan mengucap "permisi" adalah wujud tata krama dan sopan santun luhur dalam adat pergaulan bermasyarakat.',
  },

  // --- SOAL 37 (Benar/Salah - Sedang - Aturan di Rumah) ---
  {
    id: 37,
    type: 'pgk_kategori',
    topic: 'Aturan di Rumah',
    difficulty: 'Sedang',
    elemen: 'Undang-Undang Dasar Negara Republik Indonesia Tahun 1945',
    levelKognitif: 'L2',
    text: 'Perhatikan pernyataan berikut. Tentukan apakah pernyataan ini BENAR atau SALAH:',
    statements: [
      {
        id: 's1',
        text: 'Bermain game di ponsel hingga larut malam pada saat keesokan harinya harus berangkat pagi ke sekolah merupakan contoh tindakan yang mematuhi aturan belajar di rumah.',
        correctAnswer: false,
      },
    ],
    explanation:
      'Pernyataan SALAH. Bermain game hingga larut malam melanggar aturan waktu belajar dan istirahat, serta membuat tubuh lelah dan bangun kesiangan.',
  },

  // --- SOAL 38 (Benar/Salah - Mudah - Aturan di Sekolah) ---
  {
    id: 38,
    type: 'pgk_kategori',
    topic: 'Aturan di Sekolah',
    difficulty: 'Mudah',
    elemen: 'Undang-Undang Dasar Negara Republik Indonesia Tahun 1945',
    levelKognitif: 'L1',
    text: 'Perhatikan pernyataan berikut. Tentukan apakah pernyataan ini BENAR atau SALAH:',
    statements: [
      {
        id: 's1',
        text: 'Mendengarkan penjelasan bapak atau ibu guru dengan sungguh-sungguh dan tidak mengobrol sendiri di kelas adalah bentuk mematuhi aturan tata tertib belajar di sekolah.',
        correctAnswer: true,
      },
    ],
    explanation:
      'Pernyataan BENAR. Memperhatikan penjelasan guru saat pelajaran merupakan aturan sopan santun serta kewajiban utama siswa di dalam kelas.',
  },

  // --- SOAL 39 (Benar/Salah - Sedang - Aturan di Masyarakat) ---
  {
    id: 39,
    type: 'pgk_kategori',
    topic: 'Aturan di Masyarakat',
    difficulty: 'Sedang',
    elemen: 'Undang-Undang Dasar Negara Republik Indonesia Tahun 1945',
    levelKognitif: 'L2',
    text: 'Perhatikan pernyataan berikut. Tentukan apakah pernyataan ini BENAR atau SALAH:',
    statements: [
      {
        id: 's1',
        text: 'Ikut serta menjaga ketenangan lingkungan sekitar ketika warga tetangga sedang melangsungkan kegiatan ibadah keagamaan merupakan wujud kepatuhan terhadap norma toleransi di masyarakat.',
        correctAnswer: true,
      },
    ],
    explanation:
      'Pernyataan BENAR. Menghormati ibadah sesama pemeluk agama lain dengan tidak membuat keributan adalah perwujudan norma kerukunan hidup bermasyarakat.',
  },

  // --- SOAL 40 (Benar/Salah - Mudah - Aturan di Rumah) ---
  {
    id: 40,
    type: 'pgk_kategori',
    topic: 'Aturan di Rumah',
    difficulty: 'Mudah',
    elemen: 'Undang-Undang Dasar Negara Republik Indonesia Tahun 1945',
    levelKognitif: 'L1',
    text: 'Perhatikan pernyataan berikut. Tentukan apakah pernyataan ini BENAR atau SALAH:',
    statements: [
      {
        id: 's1',
        text: 'Meminta izin, mencium tangan, dan mengucapkan salam kepada kedua orang tua sebelum melangkahkan kaki berangkat ke sekolah adalah aturan kesopanan yang baik di lingkungan keluarga.',
        correctAnswer: true,
      },
    ],
    explanation:
      'Pernyataan BENAR. Berpamitan dan mengucapkan salam kepada orang tua sebelum bepergian adalah aturan kesopanan dan bakti anak dalam keluarga.',
  },
];
