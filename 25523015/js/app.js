// Menggunakan 'const' karena data profil tidak akan ditunjuk ulang
// Tambahan 'export' agar bisa dibaca oleh file dom.js
export const profil = {
    nama: "Sihab Awaludin",
    peran: "Mahasiswa Informatika yang fokus pada UI/UX & Front-End",
    keahlian: ["HTML Semantik", "CSS Modern (Grid/Flexbox)", "Design Token", "JavaScript ES6+"],
    jumlahProyek: 3
};

// Array of object untuk daftar proyek 
// Tambahan 'export' dan lengkapi properti 'kategori' & 'deskripsi' 
export const daftarProyek = [
    { judul: "Halaman Profil Pribadi", tahun: 2026, selesai: true, kategori: "web", deskripsi: "Membangun Halaman Profil Pribadi - PABW 2026 dengan CSS modern." },
    { judul: "Halaman Kelas Terbuka Kampus", tahun: 2026, selesai: true, kategori: "web", deskripsi: "Praktikum P03, HTML semantik dan form dengan lolos audit W3C." },
    { judul: "Desain Antarmuka Aplikasi Kasir", tahun: 2026, selesai: false, kategori: "ui", deskripsi: "Eksplorasi UI/UX." }
];

const buatPerkenalan = ({ nama, peran }) => {
    return `Halo, nama saya ${nama}. Saya adalah seorang ${peran}.`;
};

// 2. Fungsi merapikan daftar keahlian menjadi satu baris teks
const formatKeahlian = (daftar) => {
    return daftar.join(" · ");
};

console.log("--- Menampilkan Seluruh Data (console.table) ---");
console.table(profil.keahlian);
console.table(daftarProyek);

// FILTER: Menyaring proyek yang sudah selesai
const proyekSelesai = daftarProyek.filter((proyek) => proyek.selesai === true);
console.log("--- Hasil Filter (Proyek Selesai) ---");
console.table(proyekSelesai);

// FIND: Mengambil satu isi (objek) yang cocok
const cariKasir = daftarProyek.find((proyek) => proyek.judul === "Desain Antarmuka Aplikasi Kasir");
console.log("--- Hasil Find (Proyek Kasir) ---", cariKasir);

// MAP: Menghasilkan array baru (hanya berisi judul proyek)
const judulProyekSaja = daftarProyek.map((proyek) => proyek.judul);
console.log("--- Hasil Map (Daftar Judul Saja) ---", judulProyekSaja);

// Mencegah array asli berubah saat memakai sort dengan Spread Operator
const urutTahun = [...daftarProyek].sort((a, b) => b.tahun - a.tahun);

// Menggunakan Optional Chaining (?.) untuk mencegah galat jika elemen tidak ditemukan
const elemenNama = document.querySelector('.header-baris h1');
if (elemenNama) elemenNama.textContent = profil.nama;

const elemenTagline = document.querySelector('.tagline');
if (elemenTagline) elemenTagline.textContent = buatPerkenalan(profil);

const elemenKeterampilan = document.querySelector('dl.keterampilan dd:first-of-type');
if (elemenKeterampilan) elemenKeterampilan.textContent = formatKeahlian(profil.keahlian);