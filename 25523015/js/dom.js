// B.1: Import data dari app.js
import { daftarProyek } from "./app.js";

// A.3: Pemilihan Elemen
const wadah = document.querySelector("#daftar");
const pesanKosong = document.querySelector("#pesan-kosong");
const barisFilter = document.querySelector("#filter");
const formKontak = document.querySelector("#form-kontak");
const tombolKirim = formKontak.querySelector("button[type='submit']");

// B.1: Menyusun elemen anak menggunakan createElement dan textContent
function buatKartu(proyek) {
    const li = document.createElement("li");
    li.className = "kartu";

    const divIsi = document.createElement("div");
    divIsi.className = "kartu_isi";

    const h3 = document.createElement("h3");
    h3.className = "kartu__judul";
    h3.textContent = proyek.judul; // Menggunakan textContent agar aman dari injeksi XSS

    const pDeskripsi = document.createElement("p");
    pDeskripsi.textContent = proyek.deskripsi;

    divIsi.append(h3, pDeskripsi);

    const divKaki = document.createElement("div");
    divKaki.className = "kartu_kaki";

    const time = document.createElement("time");
    time.textContent = proyek.tahun;

    const a = document.createElement("a");
    a.href = "#karya";
    a.textContent = proyek.selesai ? "Lihat Halaman" : "Proses...";

    divKaki.append(time, a);
    li.append(divIsi, divKaki);

    return li;
}

// D.1: Fungsi render tunggal (mengosongkan wadah di awal)
function render(daftar) {
    wadah.textContent = ""; // 1. Kosongkan lebih dulu agar tidak berlipat

    if (daftar.length === 0) { // 2. Periksa keadaan kosong
        pesanKosong.hidden = false;
        return;
    }

    pesanKosong.hidden = true;
    daftar.forEach((proyek) => wadah.append(buatKartu(proyek))); // 3. Isi ulang
}

// C.2: Menandai tombol aktif
function tandaiTombolAktif(tombolAktif) {
    document.querySelectorAll("#filter button").forEach((tombol) => {
        tombol.classList.toggle("aktif", tombol === tombolAktif);
    });
}

// C.1: Event Delegation untuk tombol filter di induknya
barisFilter.addEventListener("click", (event) => {
    const tombol = event.target.closest("button");
    if (!tombol) return; // Abaikan jika yang diklik bukan tombol

    tandaiTombolAktif(tombol);

    const kategori = tombol.dataset.kategori;
    const terpilih = daftarProyek.filter(
        (proyek) => kategori === "semua" || proyek.kategori === kategori
    );

    render(terpilih);
});

// D.2: Validasi Form Real-time (menjawab sebelum dikirim)
function validasiForm() {
    let formSah = true;
    const nama = formKontak.querySelector("#nama");
    const email = formKontak.querySelector("#email");

    // Validasi Nama dengan trim()
    if (nama.value.trim() === "") {
        nama.setAttribute("aria-invalid", "true");
        nama.nextElementSibling.hidden = false; // Tampilkan pesan galat
        formSah = false;
    } else {
        nama.removeAttribute("aria-invalid");
        nama.nextElementSibling.hidden = true; // Sembunyikan pesan galat
    }

    // Validasi Email
    if (email.value.trim() === "" || !email.value.includes("@")) {
        email.setAttribute("aria-invalid", "true");
        email.nextElementSibling.hidden = false;
        formSah = false;
    } else {
        email.removeAttribute("aria-invalid");
        email.nextElementSibling.hidden = true;
    }

    // Tombol hanya aktif jika formSah = true
    tombolKirim.disabled = !formSah;
    return formSah;
}

// Pasang pendengar validasi saat pengguna mengetik dan saat disubmit
formKontak.addEventListener("input", validasiForm);

formKontak.addEventListener("submit", (event) => {
    event.preventDefault(); // Menghentikan pengiriman bawaan peramban agar halaman tidak dimuat ulang
    if (validasiForm()) {
        console.log("Form divalidasi dan dikirim!");
        formKontak.reset();
        validasiForm(); // Kunci tombol kembali setelah isian di-reset
    }
});

// Eksekusi awal saat halaman pertama kali dimuat
render(daftarProyek);