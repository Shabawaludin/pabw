# PABW
Sihab Awaludin - 25523015

Repo ini memuat pekerjaan mata kuliah Pengembangan Aplikasi Berbasis Web, satu folder untuk setiap pertemuan.

## Pertemuan 4 - Halaman profil saya
Topik halaman saya: Halaman profil personal dan portofolio.
- Judul halaman: Profil Sihab Awaludin
- Deskripsi: Halaman profil yang memuat data diri, keterampilan, dan perjalanan akademik.

### Tujuan Struktur Tambahan
1. **Tanya Jawab (<details>)**: Dibuat untuk audiens yang ingin langsung mencari informasi spesifik mengenai fokus belajar dan perkakas saya secara interaktif tanpa memerlukan JavaScript.
2. **Perjalanan Akademik (<ol> & <time>)**: Dibuat untuk menceritakan linimasa perjalanan studi saya di Informatika secara kronologis dan bermakna.
3. **Peta Keterampilan (<dl>, <dt>, <dd>)**: Dibuat untuk memetakan kemampuan teknis saya dalam bentuk pasangan istilah dan penjelasan yang terstruktur rapi.

## Pertemuan 5: Layout Modern (Flexbox dan Grid)
- **Kerangka Halaman (Grid):** Mengubah tata letak utama menjadi 3 baris grid (`auto 1fr auto`) dan 2 kolom untuk area isi (`16rem 1fr` untuk sidebar dan konten utama).
- **Galeri Adaptif:** Memanfaatkan `repeat(auto-fit, minmax(16rem, 1fr))` pada galeri proyek sehingga jumlah kolom otomatis menyesuaikan ukuran layar tanpa memerlukan *media query*.
- **Penempatan Elemen (Span):** Menerapkan `grid-column: span 2` pada kartu sorotan utama untuk memberikan ruang tampilan yang lebih luas.
- **Kerapian & Pencegahan Luberan:** Memastikan seluruh tata letak menggunakan `gap`, tanpa *float*, serta menerapkan `min-width: 0` untuk menghindari teks panjang meluber keluar kotak di layar sempit (uji 360px dan 1280px).

### Design Token Halaman Profil
Berkas gaya yang dibuat: tokens.css, base.css, layout.css, komponen.css, tema.css

| Token | Nilai | Untuk apa |
|---|---|---|
| --color-primary | #1D3A8C | Tombol, tautan, penanda |
| --color-fg | #0F172A | Warna teks utama |
| --color-bg | #F8FAFC | Latar halaman |
| --radius-md | 0.5rem | Sudut tombol dan kartu |
| --space-4 | 1rem | Jarak standar antar elemen |

Kriteria selesai saya: mengubah `--color-primary` di satu baris harus mengubah warna tombol, tautan, judul, dan garis fokus.

## Pertemuan 6: Responsif Mobile-First
- **Baris Meta Viewport:** Memasang tag viewport di bagian kepala dokumen HTML agar peramban seluler merender halaman sesuai lebar perangkat[cite: 1].
- **Pendekatan Mobile-First:** Menulis gaya dasar untuk layar sempit terlebih dahulu tanpa *media query* di berkas `responsif.css`, lalu memperluasnya untuk layar yang lebih besar[cite: 1, 4, 5].
- **Titik Henti (Breakpoints):** Menambahkan dua titik henti menggunakan satuan *rem* (`min-width: 48rem` untuk galeri dua kolom dan `min-width: 60rem` untuk sidebar bersanding dengan konten)[cite: 1, 5].
- **Pengamanan Isi:** Membatasi gambar dengan `max-width: 100%` serta membungkus tabel lebar ke dalam wadah `.table-wrap` berproperti `overflow-x: auto` untuk mencegah gulir mendatar[cite: 1, 6].

## Pertemuan 8: JavaScript Modern (ES6+), Struktur Data, dan Array Methods
- **Pemisahan Data & Tampilan:** Memindahkan data identitas, daftar keahlian, dan daftar proyek dari HTML ke dalam JavaScript sebagai objek dan *array of object* di dalam `js/app.js`[cite: 8, 10].
- **Fungsi Murni (Pure Functions):** Menulis fungsi murni `buatPerkenalan` dan `formatKeahlian` yang memproses argumen dan menghasilkan nilai dengan perintah `return`[cite: 8, 10].
- **Array Methods:** Memanfaatkan metode `map`, `filter`, `find`, serta `sort` dengan *spread operator* (`[...array]`) agar integritas data asli tetap terjaga tanpa termutasi[cite: 8, 10].
- **Eksekusi Lokal & Penanganan Galat:** Menjalankan halaman menggunakan server lokal Python / Live Server (`http://localhost:8000`) serta menerapkan penanganan akses aman (*optional chaining* `?.`)[cite: 8, 10].

## Pertemuan 9: DOM, Event, dan Interaktivitas
- **Render Dinamis (`dom.js`):** Membaca data dari `app.js` menggunakan modul ES (`export`/`import`) dan menyusun elemen kartu proyek secara aman menggunakan `createElement` dan `textContent`[cite: 7].
- **Event Delegation:** Menerapkan satu pendengar (*event listener*) pada elemen induk (`#filter`) untuk melayani seluruh tombol penyaringan kategori secara efisien[cite: 7].
- **Manajemen Keadaan (State & Render):** Memastikan wadah dikosongkan (`wadah.textContent = ""`) sebelum render ulang serta menangani keadaan kosong ketika filter tidak menghasilkan data[cite: 7].
- **Validasi Form Interaktif:** Menerapkan pencegahan muat ulang halaman (`event.preventDefault()`), validasi kolom secara *real-time*, penahanan tombol kirim (`disabled`), serta penanganan galat per kolom tanpa menghapus masukan pengguna[cite: 7].

## Pertemuan 10 - Asinkronus dan Fetch API
* **Topik**: Pemrograman asinkronus, `async/await`, `fetch`, dan modularisasi lapisan data masuk (`js/api.js`).
* **Ringkasan**: Memuat data proyek secara dinamis dari `proyek.json` menggunakan fungsi asinkronus dan menangani galat jaringan.

## Pertemuan 11 - Modul, State, dan Penyimpanan Klien
* **Nomor Versi Node.js**: v24.14.0
* **Nomor Versi npm**: 11.9.0

### Deklarasi AI
* **Bagian yang dibantu AI**: Membantu perancangan struktur 5 modul (`data.js`, `state.js`, `dom.js`, `events.js`, `app.js`), implementasi objek `state` tunggal, penyimpanan `localStorage` dengan penanganan simpanan rusak (`try/catch` dan nomor versi), serta mekanisme *event delegation* untuk filter kategori.
* **Bagian yang dikerjakan sendiri**: Penyesuaian skrip dengan elemen HTML pribadi, pengujian fungsionalitas di peramban, penataan antarmuka, serta pengujian manual (*testing*).
