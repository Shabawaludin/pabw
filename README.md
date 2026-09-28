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

## Catatan penggunaan AI
Saya dibantu AI untuk memperjelas alur instruksi Git, mengatasi kendala autentikasi terminal, dan menyusun kerangka struktur semantik HTML untuk Worksheet P4.